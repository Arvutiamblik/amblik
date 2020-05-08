import React from "react";
import { RichText } from "prismic-reactjs";
import Layout from "../components/layout";
import TextBlock from "../components/textBlock";
import { graphql } from "gatsby";
import Footer from "../components/footer";
import SEO from "../components/seo";

const IndexPageTemplate = ({
  heading,
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
  aboutTitle
}) => (
  <>
    <img id="logoPicture" className="img" alt="background" src={img.url} />
    <Layout
      lang={lang}
      supportModal={supportModal}
    >
      <SEO
        language={lang}
        title={heading}
        description={headerDescription[0].text}
        article={false}
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-6 col-xs-12 mt-5">
            <RichText render={headerDescription}>{headerDescription}</RichText>
            <button type="button" className="btn btn-primary button-main">
              <strong>{}</strong>
            </button>
          </div>
        </div>
      </div>
      <div id="containerRight" className="container">
        <div id="mid" className="col-lg">
          <div className="mb-5">
            <div className="text-md-center mb-5">
              <div name={itAnchor} alt={itAnchor}></div>
              <RichText render={itTitle}>{itTitle}</RichText>
            </div>
            <TextBlock gridItems={itServices} delimiter={2} lang={lang} enableButton />
          </div>
          <div className="mb-5">
            <div className="text-md-center mb-5">
              <div name={webAnchor} alt={webAnchor}></div>
              <RichText render={webTitle}>{webTitle}</RichText>
            </div>
            <TextBlock gridItems={webServices} delimiter={2} lang={lang} enableButton />
          </div>
          <div className="mb-5">
            <div className="text-md-center mb-5">
              <div name={aboutAnchor} alt={aboutAnchor}></div>
              <RichText render={aboutTitle}>{aboutTitle}</RichText>
            </div>
            <RichText render={aboutText}>{aboutText}</RichText>
          </div>
          <Footer lang={lang} />
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


