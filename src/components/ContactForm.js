import React, { useEffect, useState, useRef, version } from "react";
import { RichText } from "prismic-reactjs";
import axios from "axios";
const ContactForm = (props) => {
  const isBrowser = typeof window !== `undefined`;
  if (isBrowser) {
    window.recaptchaV2Callback = function () {
      window.grecaptchaV2 = Object.assign(
        Object.create(Object.getPrototypeOf(window.grecaptcha)),
        window.grecaptcha
      );
    };
    window.recaptchaV3Callback = function () {
      window.grecaptchaV3 = Object.assign(
        Object.create(Object.getPrototypeOf(window.grecaptcha)),
        window.grecaptcha
      );
    };
    window.recaptchaV2Exec = (response) => {
      let data = {
        name: inputsObj[0].value,
        version: 2,
        subject: props.title,
        email: inputsObj[1].value,
        token: response,
        form: {},
      };
      inputsObj.map((input, index) => {
        if (index > 1) {
          data.form[`${input.name}`] = input.value;
        } else return false;
      });
      axios.post(props.formData.form_request_url.url, data);
    };
  }
  let tokenV2 = null;
  const [tokenV3, setTokenV3] = useState();

  const captchaV2 = useRef();
  const recaptcha3Focus = () => {
    const grecaptcha3 = document.createElement("script");
    grecaptcha3.defer = true;
    grecaptcha3.type = "text/javascript";
    grecaptcha3.src = `https://www.google.com/recaptcha/api.js?onload=recaptchaV3Callback&render=${props.formData.recaptcha3_api_key}`;
    grecaptcha3.addEventListener("load", handleLoaded);
    document.body.appendChild(grecaptcha3);
    // handleLoaded()
  };
  const handleLoaded = () => {
    if (isBrowser) {
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute(props.formData.recaptcha3_api_key)
          .then((token) => {
            setTokenV3(token);
          });
        window.grecaptcha.render("captcha", {
          sitekey: props.formData.recaptcha2_api_key,
          size: "invisible",
          "data-callback": recaptchaV2Exec,
        });
      });
    }
  };

  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrors(errors.splice(0, errors.length));
    setErrors(validate(inputsObj));
    if (errors.length > 0) {
      setIsSubmitting(false);
      forceUpdate();
      return;
    }
    const request = axios.create({
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    let data = {
      name: inputsObj[0].value,
      version: 3,
      subject: props.title,
      email: inputsObj[1].value,
      token: tokenV3,
      form: {},
    };
    inputsObj.map((input, index) => {
      if (index > 1) {
        data.form[`${input.name}`] = input.value;
      } else return false;
    });
    data.form["URL"] = decodeURI(props.pageUrl);
    request
      .post(props.formData.form_request_url.url, data)
      .then(function (response) {
        if (response.data === "Captcha is not valid or doesn't have token.") {
          if (isBrowser) {
            window.grecaptcha.execute();
          }
        }
        if (response.data === "Accepted") {
          resetForm();
          setIsSubmitting(false);
          props.setIsSubmitted(true);
        }
      });
  };
  const formFields = props.formData.form_input.filter(
    (item) => item.type !== "submit"
  );
  const requestConfirmationText = props.formData.request_confirmation_text;
  const [inputsObj, setInputs] = useState([
    ...formFields.map((field) => {
      return { ...field, value: "" };
    }),
  ]);

  const submit = props.formData.form_input.find(
    (item) => item.type === "submit"
  );

  const validate = (values) => {
    values.map((input) => {
      if (input.mandatory && input.value === "") {
        errors.push({
          name: input.name,
          type: input.type,
          error: props.formData.empty_field_message
            ? props.formData.empty_field_message
            : "Please fill out this field",
        });
      } else if (
        input.type === "email" &&
        !input.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
      ) {
        errors.push({
          name: input.name,
          type: input.type,
          error: input.filling_error_message
            ? input.filling_error_message
            : "Please include real e-mail address like name@contoso.com",
        });
      }
    });
    return errors;
  };

  const [errors, setErrors] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    setInputs(
      inputsObj.map((input) => {
        if (event.target.getAttribute("name") === input.name) {
          input.value = event.target.value;
          return input;
        } else {
          return input;
        }
      })
    );
  };

  const resetForm = () => {
    setInputs(
      inputsObj.map((input) => {
        input.value = "";
        return input;
      })
    );
  };

  let counter = 1;

  const isModal = props.isModal;

  return !props.isSubmitted ? (
    <form onSubmit={handleSubmit} noValidate>
      {formFields.map((item, index) => (
        <div key={index} className="form-group">
          <label htmlFor={`input-${counter}`} className="form-label">
            {item.mandatory ? `${item.name} *` : item.name}
          </label>
          <input
            id={`input-${counter++}`}
            className={`form-control form-field`}
            type={item.type}
            name={item.name}
            onChange={handleChange}
            value={inputsObj[index].value}
            onFocus={recaptcha3Focus}
          />
          {errors.map(
            (error, index) =>
              error.error &&
              item.name === error.name && (
                <p key={index} className="smaller text-danger">
                  {error.error}
                </p>
              )
          )}
        </div>
      ))}
      <button
        disabled={isSubmitting}
        aria-disabled={isSubmitting}
        type={submit.type}
        className="btn btn-primary button-main my-3"
      >
        {!isSubmitting ? (
          submit.name
        ) : (
          <div
            className="spinner-border spinner-border-sm text-light"
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        )}
      </button>
      <div
        ref={captchaV2}
        className="g-recaptcha"
        data-callback="recaptchaV2Exec"
        id="captcha"
      ></div>
    </form>
  ) : requestConfirmationText ? (
    <>
      <RichText render={requestConfirmationText}>
        {requestConfirmationText}
      </RichText>
      {isModal && (
        <button
          type={submit.type}
          className="btn btn-primary button-main my-3"
          onClick={props.toggle}
        >
          OK
        </button>
      )}
    </>
  ) : (
    <>
      <div>Message was sent succesfully.</div>
      {isModal && (
        <button
          type={submit.type}
          className="btn btn-primary button-main my-3"
          onClick={props.toggle}
        >
          OK
        </button>
      )}
    </>
  );
};

export default ContactForm;
