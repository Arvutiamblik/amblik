import React from "react";
import { RichText } from "prismic-reactjs";
import Layout from "../components/layout";
import TextBlock from "../components/textBlock";
import { graphql } from "gatsby";

const IndexPageTemplate = ({
  headerDescription,
  img,
  lang,
  supportModal,
  itTitle,
  itAnchor,
  itServices,
  webTitle,
  webAnchor,
  webServices,
  aboutAnchor,
  aboutText,
  aboutTitle,
  contactAnchor,
  contactTitle,
  contactText,
  contactEmail,
  contactPhone,
  contactAddress,
  workingTime
}) => (
  <>
    <img id="logoPicture" className="img" alt="background" src={img.url} />
    <Layout
      lang={lang}
      supportModal={supportModal}
    >
      <div id="otstup" className="container">
        <div className="row">
          <div className="col-lg-5 col-md-6 col-xs-12">
            <RichText render={headerDescription}>{headerDescription}</RichText>
            <button type="button" className="btn btn-primary">
              <strong>{}</strong>
            </button>
          </div>
          <div className="col">
            <div className="bs-example float-right">
              <div className="dropdown text-right"></div>
            </div>
          </div>
        </div>
      </div>
      <div id="containerRight" className="container">
        <div id="mid" className="col-lg">
          <div className="mb-5">
            <div className="text-md-center col-lg">
              <div name={itAnchor} alt={itAnchor}></div>
              <RichText render={itTitle}>{itTitle}</RichText>
            </div>
            <TextBlock gridItems={itServices} delimiter={2} lang={lang} enableButton />
          </div>
          <div className="mb-5">
            <div className="text-md-center col-lg">
              <div name={webAnchor} alt={webAnchor}></div>
              <RichText render={webTitle}>{webTitle}</RichText>
            </div>
            <TextBlock gridItems={webServices} delimiter={2} lang={lang} enableButton />
          </div>
          <div className="mb-5">
            <div className="text-md-center col-lg">
              <div name={aboutAnchor} alt={aboutAnchor}></div>
              <RichText render={aboutTitle}>{aboutTitle}</RichText>
            </div>
            <RichText render={aboutText}>{aboutText}</RichText>
          </div>
          <div id="low" className="text-md-center">
            <p>
              Pöörduge julgelt ka väikeste it murede
              <br />
              puhul:
            </p>
            <div id="num" className="text-md-center">
              <h1 id="num">
                <small>
                  <strong>+372 665 48 28</strong>
                </small>
              </h1>
              <p>
                <big>+372 5 096 244</big>
              </p>
              <h1 id="num">
                <small>
                  <strong>support@amblik.ee</strong>
                </small>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  </>
);

const IndexPage = ({ data }) => {
  return (
    <IndexPageTemplate
      heading={data.prismic.allHome_pages.edges[0].node.heading[0].text}
      img={data.prismic.allHome_pages.edges[0].node.img}
      headerDescription={data.prismic.allHome_pages.edges[0].node.heading_description}
      lang={data.prismic.allHome_pages.edges[0].node._meta.lang}
      supportModal={data.prismic.allSupport_modals.edges[0].node}
      itTitle = {data.prismic.allHome_pages.edges[0].node.it_title}
      itAnchor = {data.prismic.allHome_pages.edges[0].node.it_anchor}
      itServices = {data.prismic.allHome_pages.edges[0].node.it_services}
      webTitle = {data.prismic.allHome_pages.edges[0].node.web_title}
      webAnchor = {data.prismic.allHome_pages.edges[0].node.web_anchor}
      webServices = {data.prismic.allHome_pages.edges[0].node.web_services}
      aboutAnchor = {data.prismic.allHome_pages.edges[0].node.about_anchor}
      aboutText = {data.prismic.allHome_pages.edges[0].node.about_text}
      aboutTitle = {data.prismic.allHome_pages.edges[0].node.about_title}
      contactAnchor = {data.prismic.allHome_pages.edges[0].node.contact_anchor}
      contactTitle = {data.prismic.allHome_pages.edges[0].node.contact_title}
      contactText = {data.prismic.allHome_pages.edges[0].node.contact_text}
      contactEmail = {data.prismic.allHome_pages.edges[0].node.contact_email}
      contactPhone = {data.prismic.allHome_pages.edges[0].node.contact_phone}
      contactAddress = {data.prismic.allHome_pages.edges[0].node.contact_address}
      workingTime = {data.prismic.allHome_pages.edges[0].node.working_time}
    />
  );
};
export const query = graphql`
  query IndexPage($lang: String!) {
    prismic {
      allHome_pages(lang: $lang) {
        edges {
          node {
            heading
            heading_description
            img
            _meta {
              lang
            }
            it_title
            it_anchor
            it_services {
              description
              button_text
              title
              service_page {
                _linkType
                ... on PRISMIC_Article {
                  title
                  description
                  _meta {
                    uid                
                  }
                }
              }
            }
            web_title
            web_anchor
            web_services {
              title
              description
              button_text
              service_page {
                _linkType
                ... on PRISMIC_Article {
                  title
                  description
                  _meta {
                    uid                
                  }
                }
              }
            }
            about_anchor
            about_text
            about_title
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
      allSupport_modals(lang: $lang) {
        edges {
          node {
            modal_button_text
            title
            phone_title
            phone_number
            mobile_phone_number
            email_title
            email
            subtitle
            button_text
            link_text
          }
        }
      }
    }
  }
`;

export default IndexPage;


