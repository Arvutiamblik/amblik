import React from "react"
import Layout from "../components/layout"
import Features from '../components/textBlock'
import TextCard from '../components/textCards'
import { Link,  graphql} from "gatsby"
export const BlogPageTemplate = ({
  intro,
  TextCards,
  TopDescription,
  heading,
  img
 }) => (
  <Layout>


    <div>
    <img src="src/images/corners.svg"   alt="corner"  />
    <img id="logoPicture" className="img" alt="background" src={img} />
    <div id="left">
      <h1 id="logo"><big><strong>amblik </strong></big>. <em><small>ee</small></em></h1>
    <a href="#" id="link_button"><strong>SHOP</strong></a>
    <a href="#" id="link_button"><strong>SHOP</strong></a>
    <a href="#" id="link_button"><strong>SHOP</strong></a>
    <a href="#" id="link_button"><strong>SHOP</strong></a>
    <button id="support" type="button" className="btn btn-primary"><strong>SUPPORT</strong></button>
    </div>
    <hr class="new1" />
        <div className="container">
          

          <div className="row">
            <div className="col-5">
            
              <p id="leftText"><em><strong>{TopDescription.topText}
                  </strong></em>
              </p>
              <button type="button" className="btn btn-primary"><strong>{TopDescription.topButton}</strong></button>
            </div>
            <div className="col">
              <div className="bs-example float-right">
                <div className="dropdown text-right">
                 <Link to="/">ee</Link>
                  <Link to="/ru">ru</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="mid" className="text-md-center col-lg">
          <h1><small><strong>{heading}</strong></small></h1>

          <Features gridItems={intro.blurbs} />
                <div className="text-md-center col-lg">
                  <h1><small><strong>meie kliendid</strong></small></h1>
                  <div className="container">
                    <p  ><big><strong><em>Pilvelahendused, IT haldus, IT-susteemide ulesehitus ja hooldus, arvutivorgud,
                            infoturve, varundus-sustemid, kasut-ajatugi, Business Intelligence,</em></strong></big></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-md-center col-lg">
              <h1><small><strong>mida ja kuidas saab teha, loe siin...</strong></small></h1>
              <TextCard gridItems={TextCards.TextCard} />
              <div id="low" className="text-md-center">
                <p>
                  Pöörduge julgelt ka väikeste it murede<br />puhul:</p>
                <div id="num" className="text-md-center">
                  <h1 id="num"><small><strong>+372 665 48 28</strong></small></h1>
                  <p><big>+372 5 096 244</big></p>
                  <h1 id="num"><small><strong>support@amblik.ee</strong></small></h1>
                </div></div></div>
  </Layout>
)

const BlogPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <BlogPageTemplate
         intro={frontmatter.intro}
         TextCards={frontmatter.TextCards}
         TopDescription={frontmatter.TopDescription}
         heading={frontmatter.heading}
         img={frontmatter.img}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
query BlogPage {
  markdownRemark (frontmatter: { Identifier_field: { eq: "mainPageEt" }}){
    id
    frontmatter {
      TextCards {
        TextCard {
          button
          description
          title
        }
      }
      intro {
        blurbs {
          blockDescription
          blockHeading
          buttonPlaceholder
        }
      }
      TopDescription {
        topText
        topButton
      }
      heading
      img
  }
}}`
export default BlogPage
