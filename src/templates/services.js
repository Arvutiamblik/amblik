import React from "react";
import Layout from "../components/layout";
import TextBlock from "../components/textBlock";
import ServicePlan from "../components/servicePlan";
import { graphql } from 'gatsby';
import {Link, RichText, Date} from 'prismic-reactjs';
const SupportPageTemplate = ({
  title,
  heading,
  pros,
  description,
  chooseYourPlan,
  uid,
  itSupportServicePlans,
  servicePlan
}) => (
  <>
    <div className="container">
      <p id="headerNname">{title}</p>
      <RichText render={description} id="BlogText">{description}</RichText>
      <p id="headerNname">{heading}</p>
    </div>

    <div className="container">
     <TextBlock gridItems={pros} delimiter={3}/>
      <div className="text-md-center col-lg">
        <p id="headerBigCenter">
          <small>
            <strong>{chooseYourPlan}</strong>
          </small>
        </p>
      </div>

      {servicePlan !== null && <ServicePlan servicePlan={servicePlan} />}

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
  </>
);

const Services = ({ data }) => {
  const cms = data.prismic.allServicess.edges[0];
  const servicePlan = data.prismic.allServicess.edges[0].node.body;
  // console.log(servicePlan);
  return (
    <Layout 
      lang={data.prismic.allServicess.edges[0].node._meta.lang}
      uid={data.prismic.allServicess.edges[0].node._meta.uid}
      supportModal={data.prismic.allSupport_modals.edges[0].node}
    >
      <SupportPageTemplate
        pros={cms.node.pros}
        title={cms.node.title}
        description={cms.node.description}
        heading={cms.node.heading}
        chooseYourPlan={cms.node.choose_your_plan}
        servicePlan={servicePlan}
      />
    </Layout>
  );
};

export const query = graphql`
  query SupportPage($lang: String! $uid: String! ) {
    prismic {
        allServicess(lang: $lang,  uid: $uid) {
          edges {
            node {
              _meta {
                uid
                lang
              }
              pros {
                pros_heading
                pros_description
              }
              body {
                ... on PRISMIC_ServicesBodyHeading_service_option {
                  fields {
                    service_heading
                    service_subheading
                    service_price
                    service_button
                  }
                }
                ... on PRISMIC_ServicesBodyBoolean {
                  primary {
                    option_title
                  }
                  fields {
                    option_description
                  }
                }
                ... on PRISMIC_ServicesBodyText {
                  primary {
                    option_title
                  }
                  fields {
                    option_description
                  }
                }
              }
            description
            heading
            choose_your_plan
            title
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
export default Services;