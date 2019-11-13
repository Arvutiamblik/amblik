import React from "react";
import Layout from "../components/layout";
import agree from "../images/agree.png";
import cancel from "../images/cancel.png";
import minus from "../images/minus.png";
import Features from "../components/textBlock";
const SupportPageTemplate = ({
  title,
  heading,
  pros,
  description,
  chooseYourPlan
}) => (
  <>
    <div className="container">
      <p id="headerNname">{title}</p>
      <p id="BlogText">{description}</p>
      <p id="headerNname">{heading}</p>
    </div>

    <div className="container">
     <Features gridItems={pros} delimiter={3}/>
      <div className="text-md-center col-lg">
        <p id="headerBigCenter">
          <small>
            <strong>{chooseYourPlan}</strong>
          </small>
        </p>
      </div>
      <div className="table-responsive-sm">
        <table className="table">
          <thead className="thead">
            <tr>
              <th></th>
              <th>
                Prepaid Time
                <br />
                <p id="underHeader">
                  All services are provided at a reduced rate
                </p>
              </th>
              <th>
                Fixed fee
                <br />
                <p id="underHeader">Strict budget for the IT support</p>
              </th>
              <th>
                Without an agreement
                <br />
                <p id="underHeader">One-time jobs</p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td id="hard">
                <div id="leftCorner">
                  Monthly fee <br />
                  <p id="smallText">All prices are subject to VAT.</p>
                </div>
              </td>
              <td id="hard">
                <p id="smallText">From 3 hours of servise per month</p> <br />
                From 117 €{" "}
              </td>
              <td id="hard">
                <div id="leftBoard">
                  <p id="smallText">Server support</p>
                  <br />
                  118 € / month<p id="smallText">for one server</p>
                </div>
                <div className="vl"></div>
                <div id="rightBord">
                  <p id="smallText">User support</p>
                  <br /> 59 € / month
                  <br />
                  <p id="smallText">for one user</p>
                </div>
              </td>

              <td id="hard">0 €</td>
            </tr>
            <tr>
              <td>Guaranteed prompt response</td>
              <td>
                <img id="center" className="img" alt="" src={agree} />
              </td>
              <td>
                <img id="center" className="img" alt="" src={agree} />
              </td>
              <td>
                <img id="center" className="img" alt="" src={cancel} />
              </td>
            </tr>

            <tr>
              <td>Guaranteed confidentiality</td>
              <td>
                <img id="center" className="img" alt="" src={agree} />
              </td>
              <td>
                <img id="center" className="img" alt="" src={agree} />
              </td>
              <td>
                <img id="center" className="img" alt="" src={agree} />
              </td>
            </tr>
            <tr>
              <td>Financial guarantee of confidentiality</td>
              <td>
                <img id="center" className="img" alt="" src={cancel} />
              </td>
              <td>
                <img id="center" className="img" alt="" src={agree} />
              </td>
              <td>
                <img id="center" className="img" alt="" src={cancel} />
              </td>
            </tr>
            <tr>
              <td>Hourly payment</td>
              <td id="hard">0 €</td>
              <td id="hard">0 €</td>
              <td id="hard">59 € </td>
            </tr>
            <tr>
              <td>Minimum time for performing work on site</td>
              <td id="hard"> 1 hour</td>
              <td>
                <img id="center" className="img" alt="" src={minus} />
              </td>
              <td id="hard">1 hour</td>
            </tr>
            <tr>
              <td> </td>
              <td id="hard">
                0,25 hour
                <br />
                <button id="itButton" type="button" className="btn btn-primary">
                  <strong>Küsi pakkumist</strong>
                </button>
              </td>
              <td>
                <img id="center" className="img" alt="" src={minus} />
                <br />
                <button
                  id="centerButton"
                  type="button"
                  className="btn btn-primary"
                >
                  <strong>Küsi pakkumist</strong>
                </button>
              </td>
              <td id="hard">
                1 hour
                <br />
                <button id="itButton" type="button" className="btn btn-primary">
                  <strong>Saada pääring</strong>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

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
const Support = ({ data }) => {
  return (
    <Layout>
      <SupportPageTemplate
        pros={data.prismic.allSupports.edges[0].node.pros}
        title={data.prismic.allSupports.edges[0].node.title[0].text}
        description={data.prismic.allSupports.edges[0].node.description[0].text}
        heading={data.prismic.allSupports.edges[0].node.heading}
        chooseYourPlan={data.prismic.allSupports.edges[0].node.choose_your_plan}
      />
    </Layout>
  );
};

export default Support;

export const pageQuery = graphql`
  query SupportPage($locale: String!) {
    prismic {
      allSupports(lang: $locale) {
        edges {
          node {
            pros {
              title
              description
            }
            description
            heading
            choose_your_plan
            title
          }
        }
      }
    }
  }
`;
