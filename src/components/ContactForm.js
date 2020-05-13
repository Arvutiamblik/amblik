import React from "react";
import { RichText } from "prismic-reactjs";

const ContactForm = (props) => {
  const submit = props.formData.form_input.find(item => item.type === 'submit')
  return (
    <form>
      <RichText render={props.formData.form_name}>{props.formData.form_name}</RichText>
      <button type={submit.type} className="btn btn-primary button-main">{submit.name}</button>
    </form>
  );
};

export default ContactForm;