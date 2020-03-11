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
  servicePlans
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

      <ServicePlan servicePlans={servicePlans} />

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
const Services = ({ data, pageContext, location }) => {
    const cms = data.prismic.allServicess.edges.slice(0,1).pop();
    const cmsServicePlans = data.prismic.allService_plans.edges;
    const pageToDisplay = cmsServicePlans.map(node => Object.values(node)).flat();
    const servicePlans = pageToDisplay.filter(page => page.service_plan_page_to_display === cms.node._meta.uid);

  return (
    <Layout 
    pageLanguage={pageContext.siteLanguage} 
    languagePrefix={pageContext.languagePrefix} 
    location={location} 
    >
      <SupportPageTemplate
        pros={cms.node.pros}
        title={cms.node.title[0].text}
        description={cms.node.description[0].text}
        heading={cms.node.heading}
        chooseYourPlan={cms.node.choose_your_plan}
        servicePlans={servicePlans}
      />
    </Layout>
  );
};

export default Services;

export const pageQuery = graphql`
  query SupportPage($locale: String!, $uid: String) {
    prismic {
        allServicess(lang: $locale, uid: $uid) {
        edges {
          node {
            _meta {
              uid
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
      allService_plans(lang: $locale) {
        edges {
          node {
            service_plan_title
            service_plan_page_to_display
            selected_service_plan
            service_plan_description
            service_plan_option {
              service_plan_option_description
              service_plan_option_image
              service_plan_option_subtitle
              service_plan_option_title
              service_plan_option_small_description
            }
          }
        }
      }
    }
  }
`;
