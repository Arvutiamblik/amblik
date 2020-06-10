import React, { useState } from "react";
import { RichText } from "prismic-reactjs";
import { StaticQuery, graphql } from "gatsby";
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import ContactForm from "./ContactForm";

const Contact = (data, props) => {
  const { lang, homeTitle, articleTitle, pageUrl } = data.props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

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
    working_time: workingTime,
    feedback_form: feedbackForm
  } = contactData[0].node;

  let articleContactData = data.data.prismic.allArticles.edges;
  articleContactData = articleContactData.filter(item => (
    item.node._meta.lang === lang
  ));

  const { 
    feedback_button_text: articleFeedbackButtonText,
    feedback_form: articleFeedbackForm
  } = articleContactData[0].node;

  return (
    data.props.pageType === 'home_page' ?
      <div className="mb-5">
        <div className="mb-5 text-center">
          <div id={contactAnchor} name={contactAnchor} alt={contactAnchor}></div>
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
            <ContactForm title={homeTitle} pageUrl={pageUrl} formData={feedbackForm} />
          </div>
        </div>
      </div> 
    :
      <>
        <Button className="button-main button_support text-uppercase mb-5" onClick={toggle}>
          {articleFeedbackButtonText}
        </Button>
        <Modal isOpen={modal} toggle={toggle} size='lg' className="support-modal">
          <ModalHeader toggle={toggle}>
            <div>{articleFeedbackButtonText}</div>
          </ModalHeader>
          <ModalBody>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-xs-12 mb-4">
                <p>{articleTitle}</p>
                <RichText render={articleTitle}>{articleTitle}</RichText>
                <RichText render={contactEmail}>{contactEmail}</RichText>
                <RichText render={contactPhone}>{contactPhone}</RichText>
                <RichText render={contactAddress}>{contactAddress}</RichText>
                <RichText render={workingTime}>{workingTime}</RichText>
              </div>
              <div className="col-lg-6 col-md-6 col-xs-12 mb-4">
                <ContactForm title={articleTitle} pageUrl={pageUrl} formData={articleFeedbackForm} />
              </div>
            </div>
          </ModalBody>
        </Modal>
      </>
  );
};

// eslint-disable-next-line react/display-name
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
                feedback_form {
                  ... on PRISMIC_Request_form {
                    form_name
                    empty_field_message
                    form_input {
                      name
                      type
                      mandatory
                      filling_error_message
                    }
                    recaptcha2_api_key
                    recaptcha3_api_key
                    form_request_url {
                      ... on PRISMIC__ExternalLink {
                        url
                      }
                    }
                  }
                }
              }
            }
          }
          allArticles {
            edges {
              node {
                _meta {
                  lang
                }
                feedback_button_text
                feedback_form {
                  ... on PRISMIC_Request_form {
                    form_name
                    empty_field_message
                    form_input {
                      name
                      type
                      mandatory
                      filling_error_message
                    }
                    recaptcha2_api_key
                    recaptcha3_api_key
                    form_request_url {
                      ... on PRISMIC__ExternalLink {
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Contact data={data} props={props} />}
  />
)



