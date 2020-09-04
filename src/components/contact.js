import React, { useState } from "react";
import { RichText } from "prismic-reactjs";
import { StaticQuery, graphql } from "gatsby";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import ContactForm from "./ContactForm";
import Map from "./map";

const Contact = (data, props) => {
  const {
    lang,
    homeTitle,
    articleTitle,
    pageUrl,
    position,
    businessName,
    address,
    mapUrl,
    directions,
    largerMap,
    mapsApiKey,
    zoom,
    mapImage,
  } = data?.props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  let contactData = data?.data?.prismic?.allHome_pages?.edges;
  contactData = contactData?.filter((item) => item?.node?._meta?.lang === lang);

  const {
    contact_text: contactText,
    contact_anchor: contactAnchor,
    contact_title: contactTitle,
    contact_email: contactEmail,
    contact_phone: contactPhone,
    contact_address: contactAddress,
    working_time: workingTime,
    feedback_form: feedbackForm,
  } = contactData[0]?.node;

  let articleContactData = data?.data?.prismic?.allArticles?.edges;
  articleContactData = articleContactData?.filter(
    (item) => item?.node?._meta?.lang === lang
  );

  let articleFeedbackButtonText = "";
  let articleFeedbackForm = {};

  if (articleContactData[0]?.node) {
    articleFeedbackButtonText =
      articleContactData[0]?.node?.feedback_button_text;
    articleFeedbackForm = articleContactData[0]?.node?.feedback_form;
  }

  return data.props.pageType === "home_page" ? (
    <div className="mb-5">
      <div className="mb-5 text-center">
        <div id={contactAnchor} name={contactAnchor} alt={contactAnchor}></div>
        <RichText render={contactTitle}>{contactTitle}</RichText>
        <div className="header-underline"></div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-xs-12 mb-4">
          <RichText render={contactText}>{contactText}</RichText>
          <div className="contact-info">
            <RichText render={contactEmail}>{contactEmail}</RichText>
            <RichText render={contactPhone}>{contactPhone}</RichText>
          </div>
          <div className="contact-address">
            <RichText render={contactAddress}>{contactAddress}</RichText>
            <RichText render={workingTime}>{workingTime}</RichText>
          </div>
          <div className="map-wrapper">
            {mapImage ? (
              <div className="map">
                <picture>
                  <source
                    media="(max-width: 768px)"
                    srcSet={mapImage?.mobile?.url}
                  />
                  <source srcSet={mapImage.url} />
                  <img src={mapImage?.url} alt={mapImage?.alt} />
                </picture>
                <a
                  className="map-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.google.com/maps/dir//${businessName},%20${address.replace(
                    /\s/g,
                    "%20"
                  )}`}
                >
                  <div className="map-icon"></div>
                  {directions}
                </a>
              </div>
            ) : (
              <Map
                position={position}
                businessName={businessName}
                address={address}
                mapUrl={mapUrl}
                directions={directions}
                largerMap={largerMap}
                mapsApiKey={mapsApiKey}
                zoom={zoom}
              />
            )}
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-xs-12 mb-4">
          {feedbackForm && (
            <ContactForm
              title={homeTitle}
              pageUrl={pageUrl}
              formData={feedbackForm}
            />
          )}
        </div>
      </div>
    </div>
  ) : (
    <>
      <Button
        className="button-main button_support text-uppercase mb-5"
        onClick={toggle}
      >
        {data.props.buttonText ?? articleFeedbackButtonText}
      </Button>
      <Modal
        isOpen={modal}
        toggle={toggle}
        size="lg"
        className="support-modal article-modal"
      >
        <ModalHeader toggle={toggle}>
          <div>{data.props.tableHeading ?? articleFeedbackButtonText}</div>
        </ModalHeader>
        <ModalBody>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-xs-12 mb-4">
              <p>{articleTitle}</p>
              <RichText render={articleTitle}>{articleTitle}</RichText>
              <div className="contact-info">
                <RichText render={contactEmail}>{contactEmail}</RichText>
                <RichText render={contactPhone}>{contactPhone}</RichText>
              </div>
              <div className="contact-address">
                <RichText render={contactAddress}>{contactAddress}</RichText>
                <RichText render={workingTime}>{workingTime}</RichText>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-xs-12 mb-4">
              {articleFeedbackForm && (
                <ContactForm
                  title={`${articleTitle} / ${
                    data.props.tableHeading ?? articleFeedbackButtonText
                  }`}
                  pageUrl={pageUrl}
                  formData={articleFeedbackForm}
                />
              )}
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
    render={(data) => <Contact data={data} props={props} />}
  />
);
