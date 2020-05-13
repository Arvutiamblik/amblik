import React from "react";
import { RichText } from "prismic-reactjs";
import { StaticQuery, graphql } from "gatsby";
import ContactForm from "./ContactForm";

const Contact = (data, props) => {
  const { lang } = data.props;

  let contactData = data.data.prismic.allHome_pages.edges;
  contactData = contactData.filter(item => (
    item.node._meta.lang === lang
  ));
  
  const { 
    contact_text: contactText,
    contact_anchor: contactAnchor,
    contact_title: contactTitle,
    contact_email: contactEmail,
    contact_phone: contactPhone,
    contact_address: contactAddress,
    working_time: workingTime
  } = contactData[0].node;

  return (
    <div className="mb-5">
      <div className="mb-5 text-center">
        <div name={contactAnchor} alt={contactAnchor}></div>
        <RichText render={contactTitle}>{contactTitle}</RichText>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-xs-12 mb-4">
          <RichText render={contactText}>{contactText}</RichText>
          <RichText render={contactEmail}>{contactEmail}</RichText>
          <RichText render={contactPhone}>{contactPhone}</RichText>
          <RichText render={contactAddress}>{contactAddress}</RichText>
          <RichText render={workingTime}>{workingTime}</RichText>
        </div>
        <div className="col-lg-6 col-md-6 col-xs-12 mb-4">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default (props) => (
  <StaticQuery
    query={graphql`
      query($lang: String) {
        prismic {
          allHome_pages(lang: $lang) {
            edges {
              node {
                _meta {
                  lang
                }
                contact_anchor
                contact_title
                contact_text
                contact_email
                contact_phone
                contact_address
                working_time
              }
            }
          }
        }
      }
    `}
    render={data => <Contact data={data} props={props} />}
  />
)



