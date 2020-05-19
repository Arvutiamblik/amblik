import React, { useEffect, useState, useRef, version } from 'react';
import Recaptcha from 'react-recaptcha';
import axios from 'axios'
const ContactForm = (props) => {
 
  let tokenV2 = null;
  const [tokenV3, setTokenV3] = useState()
  
  const verifyCallback = (response) => {
    console.log(response);
  };
  const handleLoaded = (_) => {
    window.grecaptcha.ready((_) => {
      window.grecaptcha
        .execute('6LcmheUUAAAAAGLNIp9m4PrHuSohL3reDas5yCKa')
        .then((token) => {
          setTokenV3(token)
          console.log(tokenV3)
        });
    });
  };
  useEffect(() => {
    // Add reCaptcha
   /* const grecaptcha3 = document.createElement('script');
    grecaptcha3.src =
      'https://www.google.com/recaptcha/api.js?render=6LfVIPkUAAAAADXiLw-cVKS_wA2PYTPNPENMQMUx';
    grecaptcha3.addEventListener('load', handleLoaded);
    document.body.appendChild(grecaptcha3);*/
    handleLoaded();
   
  }, []);
  const recaptchaInstance = useRef(null);
  
  const executeCaptcha = function () {
    console.log(recaptchaInstance) 
    recaptchaInstance.execute();
  };
  const grecaptcha2 = function (token) {
    console.log('=== [ v2 ] ===');
    console.log(token);
    tokenV2 = token;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(tokenV3)
    const request =  axios.create({
      headers: { 'Accept': 'application/json',
      'Content-Type': 'application/json'},
      timeout: 3000
    });
    request.post('https://amblik.azurewebsites.net/api/sendform', 
    {
      name: inputsObj[0].value,
      version: 3,
      subject: "test",
      email: inputsObj[1].value,
      token: tokenV3
    }) .then(function (response) {
      console.log(response);
      if(response.data === "Captcha is not valid or doesn't have token."){
      
       console.log(recaptchaInstance);
       recaptchaInstance.execute()
        executeCaptcha()
      }
      //
      
    })
    .catch(function (error) {
      console.log(error);
    })
  };
  const formFields = props.formData.form_input.filter(
    (item) => item.type !== 'submit'
  );
  const [inputsObj, setInputs] = useState([
    ...formFields.map(field=> {return {...field,
    value: ""}})
    ])
  console.log(inputsObj)
 
  const submit = props.formData.form_input.find(
    (item) => item.type === 'submit'
  );
  const handleChange = (event) => {
    console.log(event.target)
    setInputs(inputsObj.map(input => {
        if(event.target.getAttribute('name') === input.name) {
          input.value = event.target.value
          return input
        }
        else{
          return input
        }
       }))
       console.log(inputsObj)
  }
  let counter = 1;
  
  return (
    <form onSubmit={handleSubmit}>
      {formFields.map((item, index) => (
        <div key={index} className='form-group'>
          <label htmlFor={`input-${counter}`} className='form-label'>
            {item.name}
          </label>
          <input
            id={`input-${counter++}`}
            className='form-control form-field'
            type={item.type}
            name={item.name}
            onChange={handleChange}
            value={inputsObj[index].value}
          />
        </div>
      ))}
      <button type={submit.type} className='btn btn-primary button-main my-3'>
        {submit.name}
      </button>
      <Recaptcha
        ref={recaptchaInstance}
        sitekey='6LeNUeMUAAAAAHMn-NsP6T0N0AlGUeujF8spcAlh'
        size='invisible'
        verifyCallback={verifyCallback}
        onloadCallback={() => console.log("")}
      />
    </form>
  );
};

export default ContactForm;
