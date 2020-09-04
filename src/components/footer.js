import React from "react";
import { RichText } from "prismic-reactjs";
import { StaticQuery, graphql } from "gatsby";

const Footer = (data) => {
  let footerData = data?.data?.prismic?.allHome_pages?.edges;
  footerData = footerData?.filter(
    (item) => item?.node?._meta?.lang === data.props.lang
  );
  const footer = footerData[0]?.node?.footer;
  return (
    <div className="footer background-wrapper bg-white">
      <div className="shape-left-down" alt="Menu shape"></div>
      <div className="shape-right-down" alt="Menu shape"></div>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg">
            <div className="recaptcha-protected">
              {footer && <RichText render={footer}>{footer}</RichText>}
            </div>
          </div>
        </div>
      </div>
    </div>
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
                footer
              }
            }
          }
        }
      }
    `}
    render={(data) => <Footer data={data} props={props} />}
  />
);
