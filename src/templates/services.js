import React from "react";
import Layout from "../components/layout";
import TextBlock from "../components/textBlock";
import ServicePlan from "../components/servicePlan";
import { graphql } from 'gatsby';

const SupportPageTemplate = ({
  title,
  heading,
  pros,
  description,
  chooseYourPlan,
  uid,
  itSupportServicePlans
}) => (
  <>
    <div className="container">
      <p id="headerNname">{title}</p>
      <p id="BlogText">{description}</p>
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

      <ServicePlan itSupportServicePlans={itSupportServicePlans} uid={uid} />

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
  const itSupportServicePlans = data.prismic.allIt_support_service_plans.edges[0].node;
  return (
    <Layout 
    lang={data.prismic.allServicess.edges[0].node._meta.lang}
    uid={data.prismic.allServicess.edges[0].node._meta.uid}

    >
      <SupportPageTemplate
        pros={cms.node.pros}
        title={cms.node.title[0].text}
        description={cms.node.description[0].text}
        heading={cms.node.heading}
        chooseYourPlan={cms.node.choose_your_plan}
        itSupportServicePlans={itSupportServicePlans}
      />
    </Layout>
  );
};



export const query = graphql`
  query SupportPage($lang: String!) {
    prismic {
        allServicess(lang: $lang) {
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
            description
            heading
            choose_your_plan
            title
          }
        }
      }
    }
    prismic {
      allIt_support_service_plans(lang: $lang) {
        edges {
          node {
            _meta {
              uid
            }
            guaranteed_prompt_response_header
            guaranteed_confidentiality_header
            financial_guarantee_of_confidentiality_header
            hourly_payment_header
            minimum_time_for_performing_work_on_site_header
            minimum_time_for_performing_work_in_remote_mode_header
            it_support_service_plan {
              financial_guarantee_of_confidentiality
              guaranteed_confidentiality
              guaranteed_prompt_response
              hourly_payment
              it_support_button
              it_support_monthly_price
              it_support_subtitle
              it_support_title
              minimum_time_for_performing_work_in_remote_mode
              minimum_time_for_performing_work_on_site
            }
          }
        }
      }
    }
  }
`;
export default Services;