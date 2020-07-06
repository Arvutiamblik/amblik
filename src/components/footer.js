import React from "react";

const Footer = () => {

  return (
    <div className="footer background-wrapper bg-white">
      <div className="shape-left-down" alt="Menu shape"></div>
      <div className="shape-right-down" alt="Menu shape"></div>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg">
            <div className="recaptcha-protected">
              This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Footer;
