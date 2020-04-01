import React from "react";
import Layout from "../components/layout";
import TextBlock from "../components/textBlock";
import { graphql } from "gatsby";


const IndexPageTemplate = ({
  services,
  headerDescription,
  heading,
  img,
  lang,
  supportModal
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
            <p>
              <em>
                <strong>{headerDescription}</strong>
              </em>
            </p>
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
          <div className="text-md-center col-lg">
            <p id="h1Text">{heading}</p>
          </div>
          <TextBlock gridItems={services} delimiter={2} lang={lang}  enableButton />

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
      services={data.prismic.allHome_pages.edges[0].node.services}
      headerDescription={
        data.prismic.allHome_pages.edges[0].node.heading_description[0].text
      }
      lang={data.prismic.allHome_pages.edges[0].node._meta.lang}
      supportModal={data.prismic.allSupport_modals.edges[0].node}
    />
  );
};
export const query = graphql`
  query IndexPage($lang: String) {
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


