import React from "react";
import { RichText } from "prismic-reactjs";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import Contact from "../components/contact";
import SEO from "../components/seo";
import HomepageSlices from "../components/HomepageSlices";
const IndexPageTemplate = ({
  pageContext,
  pageUrl,
  heading,
  headerDescription,
  img,
  lang,
  supportModal,
  homepageSlices,
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
    <img
      className="d-none d-md-block img logo-picture"
      alt="background"
      src={img.url}
    />
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
        </div>
      </div>

      <img
        className="d-block d-md-none img logo-mobile-picture"
        alt="background"
        src={img.url}
      />

      <div id="mid"></div>
      <HomepageSlices homepageSlices={homepageSlices} lang={lang} />

      <div className="background-wrapper bg-white">
        <div className="container position-relative z-index-1">
          <div className="row">
            <div className="col-lg">
              <div className="my-5">
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
      homepageSlices={data.prismic.home_page}
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
  query IndexPage($lang: String!, $uid: String!) {
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
      home_page(lang: $lang, uid: $uid) {
        body {
          ... on PRISMIC_Home_pageBodyHome_page_flex {
            type
            label
            primary {
              flex_title
              flex_anchor
              flex_text
              white_background
            }
            fields {
              title
              image
              description
              button_text
              article {
                ... on PRISMIC_Article {
                  title
                  description
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

export default IndexPage;
