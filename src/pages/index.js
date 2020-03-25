import React from "react";
import Layout from "../components/layout";
import TextBlock from "../components/textBlock";
import { graphql } from "gatsby";
const IndexPageTemplate = ({
  services,
  headerDescription,
  heading,
  img,
  pageContext,
  location
}) => (
  <>
    <img id="logoPicture" className="img" alt="background" src={img.url} />
    <Layout
      pageLanguage={pageContext.siteLanguage}
      languagePrefix={pageContext.languagePrefix}
      location={location}
    >
      <div id="otstup" className="container">
        <div className="row">
          <div className="col-lg-5 col-md-6 col-xs-12">
            <p>
              <em>
                <strong>{headerDescription}</strong>
              </em>
            </p>
            <button type="button" className="btn btn-primary">
              <strong>{pageContext.siteLanguage}</strong>
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
          <div className="text-md-center col-lg">
            <p id="h1Text">{heading}</p>
          </div>
          <TextBlock gridItems={services} delimiter={2} languagePrefix={pageContext.languagePrefix} enableButton />

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

const IndexPage = ({ data, pageContext, location }) => {
  return (
    <IndexPageTemplate
      heading={data.prismic.allHome_pages.edges[0].node.heading[0].text}
      img={data.prismic.allHome_pages.edges[0].node.img}
      services={data.prismic.allHome_pages.edges[0].node.services}
      headerDescription={
        data.prismic.allHome_pages.edges[0].node.heading_description[0].text
      }
      pageContext={pageContext}
      location={location}
    />
  );
};

export default IndexPage;

export const query = graphql`
  query IndexPage($locale: String!) {
    prismic {
      allHome_pages(lang: $locale) {
        edges {
          node {
            heading
            heading_description
            img
            services {
              title
              description
              button_text
              service_page {
                ... on PRISMIC_Services {
                  _meta {
                  uid
                }
                }
              }
            }
          }
        }
      }
    }
  }
`;
