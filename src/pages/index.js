import React from "react";
import Layout from "../components/layout";
import Features from "../components/textBlock";
import TextCard from "../components/textCards";
import ProductsIntro from "../components/productsIntro"

import { graphql } from "gatsby";
const IndexPageTemplate = ({
  intro,
  TextCards,
  TopDescription,
  heading,
  img,
  products
}) => (
  <>
    <img id="logoPicture" className="img" alt="background" src={img.url} />
    <Layout>
      <div id="otstup" className="container">
        <div className="row">
          <div className="col-lg-5 col-md-6 col-xs-12">
            <p>
              <em>
                <strong>{TopDescription}</strong>
              </em>
            </p>
            <button type="button" className="btn btn-primary">
              <strong>Loe veel</strong>
            </button>
          </div>
          <div className="col">
            <div className="bs-example float-right">
              <div className="dropdown text-right">
                {/*   <Link to="/">ee</Link>
                 <Link to="/ru">ru</Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="mid" className="text-md-center col-lg">
        <div className="text-md-center col-lg">
          <p id="h1Text">{heading}</p>
        </div>

        <Features gridItems={intro} delimiter={2} />
        <div className="text-md-center col-lg">
          <p id="h1Text">Products</p>
        </div>
       <ProductsIntro gridItems={products} />
        <div className="text-md-center">
          <p id="h1Text">meie kliendid</p>
        </div>
        <div id="containerRight" className="container">
          <p>
            <big>
              <strong>
                <em>
                  Pilvelahendused, IT haldus, IT-susteemide ulesehitus ja
                  hooldus, arvutivorgud, infoturve, varundus-sustemid,
                  kasut-ajatugi, Business Intelligence,
                </em>
              </strong>
            </big>
          </p>
        </div>
      </div>

      <div className="text-md-center col-lg">
        <div className="text-md-center col-lg">
          <p id="h1Text">mida ja kuidas saab teha, loe siin...</p>
        </div>
        <TextCard gridItems={TextCards} />
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
    </Layout>
  </>
);

const IndexPage = ({ data }) => {
  return (
    <IndexPageTemplate
      heading={data.prismic.allHome_pages.edges[0].node.heading[0].text}
      img={data.prismic.allHome_pages.edges[0].node.img}
      intro={data.prismic.allHome_pages.edges[0].node.blurbs}
      TopDescription={
        data.prismic.allHome_pages.edges[0].node.heading_description[0].text
      }
      TextCards={data.prismic.allHome_pages.edges[0].node.textcards}
      products={data.prismic.allHome_pages.edges[0].node.products_intro}
    />
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPage($locale: String!) {
    prismic {
      allHome_pages(lang: $locale) {
        edges {
          node {
            heading
            heading_description
            img
            textcards {
              title
              description
              button
            }
            blurbs {
              title
              description
              button
            }
            products_intro {
              product_decription
              product_image
              product_imageSharp {
                childImageSharp {
                  fluid{
                    ...GatsbyImageSharpFluid
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
