import React from "react";
import { RichText } from "prismic-reactjs";

const ContactForm = (props) => {
  const formFields = props.formData.form_input.filter(item => item.type !== 'submit')
  const submit = props.formData.form_input.find(item => item.type === 'submit')
  let counter = 1;
  console.log(formFields)
  return (
    <form>
      <RichText render={props.formData.form_name}>{props.formData.form_name}</RichText>
      {formFields.map((item, index) =>
        <div key={index} className="form-group">
          <label htmlFor={`input-${counter}`} className="form-label">{item.name}</label>
          <input id={`input-${counter++}`} className="form-control form-field" type={item.type} />
        </div>
      )}
      <button type={submit.type} className="btn btn-primary button-main my-3">{submit.name}</button>
    </form>
  );
};

export default ContactForm;