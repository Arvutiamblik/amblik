import React from "react";
import { RichText } from "prismic-reactjs";
import Layout from "../components/layout";
import TextBlock from "../components/textBlock";
import { graphql } from "gatsby";
import Contact from "../components/contact";
import SEO from "../components/seo";
const IndexPageTemplate = ({
  pageContext,
  pageUrl,
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
  aboutTitle,
  geopoint,
  zoom,
  mapsApiKey,
  largerMap,
  directions,
  mapUrl,
  address,
  businessName,
  mapImage,
}) => (
  <>
    <img id="logoPicture" className="img" alt="background" src={img.url} />
    <Layout lang={lang} supportModal={supportModal}>
      <SEO
        title={heading}
        description={headerDescription[0].text}
        lang={lang}
      />
      <div className="background-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6 col-xs-12">
              <RichText render={headerDescription}>
                {headerDescription}
              </RichText>
              <div className="header-underline"></div>
            </div>
          </div>
          <div className="row">
            <div id="mid" className="col-lg">
              <div className="mb-5">
                <div className="text-center mb-5">
                  <div id={itAnchor} name={itAnchor} alt={itAnchor}></div>
                  <RichText render={itTitle}>{itTitle}</RichText>
                  <div className="header-underline"></div>
                </div>
                <TextBlock
                  gridItems={itServices}
                  delimiter={2}
                  lang={lang}
                  enableButton
                />
              </div>
              <div className="mb-5">
                <div className="text-center mb-5">
                  <div id={webAnchor} name={webAnchor} alt={webAnchor}></div>
                  <RichText render={webTitle}>{webTitle}</RichText>
                  <div className="header-underline"></div>
                </div>
                <TextBlock
                  gridItems={webServices}
                  delimiter={2}
                  lang={lang}
                  enableButton
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="background-wrapper bg-white">
        <div className="container position-relative z-index-1">
          <div className="row">
            <div className="col-lg">
              <div className="my-5">
                <div className="text-center mb-5">
                  <div
                    id={aboutAnchor}
                    name={aboutAnchor}
                    alt={aboutAnchor}
                  ></div>
                  <RichText render={aboutTitle}>{aboutTitle}</RichText>
                  <div className="header-underline"></div>
                </div>
                <div className="columns">
                  <RichText render={aboutText}>{aboutText}</RichText>
                </div>
              </div>
              <Contact
                homeTitle={heading}
                pageUrl={pageUrl}
                lang={lang}
                pageType={pageContext.type}
                position={geopoint}
                businessName={businessName}
                address={address}
                mapUrl={mapUrl}
                directions={directions}
                largerMap={largerMap}
                mapsApiKey={mapsApiKey}
                zoom={zoom}
                mapImage={mapImage}
              />
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
      pageContext={pageContext}
      pageUrl={location.href}
      heading={data.prismic.allHome_pages.edges[0]?.node.heading[0].text}
      img={data.prismic.allHome_pages.edges[0]?.node.img}
      headerDescription={
        data.prismic.allHome_pages.edges[0].node.heading_description
      }
      lang={data.prismic.allHome_pages.edges[0].node._meta.lang}
      supportModal={data?.prismic?.allSupport_modals?.edges[0]?.node}
      itTitle={data.prismic.allHome_pages.edges[0].node.it_title}
      itAnchor={data.prismic.allHome_pages.edges[0].node.it_anchor}
      itServices={data.prismic.allHome_pages.edges[0].node.it_services}
      webTitle={data.prismic.allHome_pages.edges[0].node.web_title}
      webAnchor={data.prismic.allHome_pages.edges[0].node.web_anchor}
      webServices={data.prismic.allHome_pages.edges[0].node.web_services}
      aboutAnchor={data.prismic.allHome_pages.edges[0].node.about_anchor}
      aboutText={data.prismic.allHome_pages.edges[0].node.about_text}
      aboutTitle={data.prismic.allHome_pages.edges[0].node.about_title}
      geopoint={data.prismic.allHome_pages.edges[0].node.geopoint}
      zoom={data.prismic.allHome_pages.edges[0].node.zoom}
      largerMap={data.prismic.allHome_pages.edges[0].node.text_larger_map}
      directions={data.prismic.allHome_pages.edges[0].node.text_direction}
      mapsApiKey={data.prismic.allHome_pages.edges[0].node.maps_api_key}
      mapUrl={data.prismic.allHome_pages.edges[0].node.map_url.url}
      address={data.prismic.allHome_pages.edges[0].node.contact_address[0].text}
      businessName={data.prismic.allHome_pages.edges[0].node.business_name}
      mapImage={data.prismic.allHome_pages.edges[0].node.map_image}
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
            business_name
            geopoint
            zoom
            text_larger_map
            text_direction
            maps_api_key
            map_url {
              ... on PRISMIC__ExternalLink {
                url
              }
            }
            map_image
            contact_address
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
            teamviewer_support_link {
              ... on PRISMIC__ExternalLink {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
