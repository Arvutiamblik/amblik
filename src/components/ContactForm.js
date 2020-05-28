import React, { useEffect, useState, useRef, version } from 'react';
import Recaptcha from 'react-recaptcha';
import axios from 'axios';
const ContactForm = (props) => {
  const isBrowser = typeof window !== `undefined`
  if(isBrowser) {
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
      console.log(response);
      let data = {
        name: inputsObj[0].value,
        version: 2,
        subject: 'test',
        email: inputsObj[1].value,
        token: response,
        form: {}
      }
      inputsObj.map((input, index) =>{
        if(index > 1) {
          data.form[`${input.name}`]  = input.value
        }
        else return false;
      })
      axios.post('https://amblik.azurewebsites.net/api/sendform',data).then(response => console.log(response))
      .catch(error => console.log(error));
    };
  }
  let tokenV2 = null;
  const [tokenV3, setTokenV3] = useState();

  const verifyCallback = (response) => {
    console.log(response);
  };
  const loadCaptchaV2 = () => {};

  const captchaV2 = useRef();
  useEffect(() => {
    console.log('test');
    const grecaptcha3 = document.createElement('script');
    grecaptcha3.src =
      'https://www.google.com/recaptcha/api.js?onload=recaptchaV3Callback&render=6LcmheUUAAAAAGLNIp9m4PrHuSohL3reDas5yCKa';
    grecaptcha3.addEventListener('load', handleLoaded);
    document.body.appendChild(grecaptcha3);
    // handleLoaded()
  }, []);
  const handleLoaded = () => {
    console.log('window.grecaptcha');
    if(isBrowser) {
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute('6LcmheUUAAAAAGLNIp9m4PrHuSohL3reDas5yCKa')
          .then((token) => {
            console.log(token);
            setTokenV3(token);
            console.log(tokenV3);
          });
        window.grecaptcha.render('captcha', {
          sitekey: '6Le3iPoUAAAAADwtDrUwfuU2s16mWhZrHewVCZnv',
          size: 'invisible',
          'data-callback': recaptchaV2Exec,
        });
      });
    }
  };

  const recaptchaInstance = useRef(null);

  const executeCaptcha = function () {
    console.log(recaptchaInstance);
    recaptchaInstance.execute();
  };
  const grecaptcha2 = function (token) {
    console.log('=== [ v2 ] ===');
    console.log(token);
    tokenV2 = token;
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
    console.log(tokenV3);
    const request = axios.create({
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    let data = {
      name: inputsObj[0].value,
      version: 3,
      subject: 'test',
      email: inputsObj[1].value,
      token: tokenV3,
      form: {}
    
    }
    inputsObj.map((input, index) =>{
      if(index > 1) {
        data.form[`${input.name}`]  = input.value
       
      }
      else return false;
    })
    request
      .post('https://amblik.azurewebsites.net/api/sendform', data)
      .then(function (response) {
        console.log(response);
        if (response.data === "Captcha is not valid or doesn't have token.") {
          if(isBrowser){
            window.grecaptcha.execute()
          }
          
          // console.log(recaptchaInstance);
          // recaptchaInstance.execute()
          // executeCaptcha()
        }
        //
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        resetForm();
        setIsSubmitting(false);
      });
  };
  const formFields = props.formData.form_input.filter(
    (item) => item.type !== 'submit'
  );
  const [inputsObj, setInputs] = useState([
    ...formFields.map((field) => {
      return { ...field, value: '' };
    }),
  ]);
  // console.log(inputsObj);

  const submit = props.formData.form_input.find(
    (item) => item.type === 'submit'
  );

  const validate = (values) => {
    values.map((input) => {
      if (input.mandatory && input.value === '') {
        errors.push({
          name: input.name,
          type: input.type, 
          error: props.formData.empty_field_message ? props.formData.empty_field_message : 'Please fill out this field'
        })
      } else if (input.type === 'email' && !input.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
        errors.push({
          name: input.name,
          type: input.type, 
          error: input.filling_error_message ? input.filling_error_message : 'Please include real e-mail address like name@contoso.com'
        })
      }
    })
    return errors;
  };

  const [errors, setErrors] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    // console.log(event.target);
    setInputs(
      inputsObj.map((input) => {
        if (event.target.getAttribute('name') === input.name) {
          input.value = event.target.value;
          return input;
        } else {
          return input;
        }
      })
    );
    // console.log(inputsObj);
  };

  const resetForm = () => {
    setInputs(
      inputsObj.map((input) => {
        input.value = '';
        return input;
      })
    );
  };

  let counter = 1;

  return (
    <form onSubmit={handleSubmit} noValidate>
      {formFields.map((item, index) => (
        <div key={index} className='form-group'>
          <label htmlFor={`input-${counter}`} className='form-label'>
            {item.mandatory ? `* ${item.name}` : item.name}
          </label>
          <input
            id={`input-${counter++}`}
            className={`form-control form-field`}
            type={item.type}
            name={item.name}
            onChange={handleChange}
            value={inputsObj[index].value}
          />
          {errors.map((error, index) => 
            error.error && item.name === error.name && (
              <p key={index} className="smaller text-danger">{error.error}</p>
            )
          )}
        </div>
      ))}
      <button type={submit.type} className='btn btn-primary button-main my-3'>
        {submit.name}
      </button>
      <div
        ref={captchaV2}
        className='g-recaptcha'
        data-callback='recaptchaV2Exec'
        id='captcha'></div>
    </form>
  );
};

export default ContactForm;
