import React from "react";
import { RichText } from "prismic-reactjs";
import { StaticQuery, graphql } from "gatsby";
import CookieConsent from "react-cookie-consent";

const CookieBanner = (data, props) => {
  let cookieData = data?.data?.prismic?.allUsing_cookiess?.edges;
  cookieData = cookieData?.filter(
    (item) => item?.node?._meta?.lang === data.props.lang
  );
  return (
    <>
      <CookieConsent
        location="bottom"
        buttonText={cookieData[0]?.node?.accept_button_text}
        cookieName="gatsby-plugin-google-analytics"
        containerClasses="container cookie-banner"
        contentClasses="cookie-banner--text"
        style={{
          background: "rgba(253, 97, 164, 0.9)",
          fontSize: "14px",
          alignItems: "center",
        }}
        buttonStyle={{
          background: "#3e6ec5",
          color: "white",
          borderRadius: "100px",
          fontWeight: "bold",
          minWidth: "150px",
        }}
      >
        <RichText render={cookieData[0]?.node?.cookie_use_message}>
          {cookieData[0]?.node?.cookie_use_message}
        </RichText>
      </CookieConsent>
    </>
  );
};

// eslint-disable-next-line react/display-name
export default (props) => (
  <StaticQuery
    query={graphql`
      query($lang: String) {
        prismic {
          allUsing_cookiess(lang: $lang) {
            edges {
              node {
                _meta {
                  lang
                }
                cookie_use_message
                accept_button_text
              }
            }
          }
        }
      }
    `}
    render={(data) => <CookieBanner data={data} props={props} />}
  />
);
