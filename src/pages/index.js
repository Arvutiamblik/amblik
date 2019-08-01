import React from "react"
import Layout from "../components/layout"
//import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BackImage from  "../images/amblik-picture3.svg"
import Features from '../components/textBlock'
import TextCard from '../components/textCards'
export const IndexPageTemplate = ({
  intro,
  TextCards,
 }) => (
  <Layout>
   
    
    <div>
    <img className="img" src={BackImage} />
        <div className="container">
          <div className="row">
            <div className="col-5">
              <h1> amblik.<em><small>ee</small></em></h1>
              <p><em><strong>Pilvelahendused, IT haldus, IT-susteemide<br />
                    ulesehitus <br />
                    ja hooldus, arvutivorgud, infoturve, varundus- <br />
                    susteemid, kasutajatugi, Business Intelligence, <br />
                    kodulehekulgede ja e-poodide arendus ja tugi, <br />
                    majandustarkvara arendus, Office 365,<br />
                    Microsoft 365, Azure, Power BI, Linux <br />
                    ESET, AVAST
                  </strong></em>
              </p>
              <button type="button" className="btn btn-primary"><strong>Kusi abi siin!</strong></button>
            </div>
            <div className="col">
              <div className="bs-example float-right">
                <div className="dropdown text-right">
                  <a href="http://localhost/amblik/" className="dropdown-toggle text-right" data-toggle="dropdown"><strong>est</strong></a>
                  <div className="dropdown-menu text-right">
                    <a href="#" className="dropdown-item">rus</a>
                    <a href="#" className="dropdown-item">eng</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="mid" className="text-md-center col-lg">
          <h1><small><strong>oleme teie it tugi ja protsesside<br />automatiseerija.</strong></small></h1>
          <Features gridItems={intro.blurbs} />
                <div className="text-md-center col-lg">
                  <h1><small><strong>meie kliendid</strong></small></h1>
                  <div className="container">
                    <p><big><strong><em>Pilvelahendused, IT haldus, IT-susteemide ulesehitus ja hooldus, arvutivorgud,
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

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
         intro={frontmatter.intro}
         TextCards={frontmatter.TextCards}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
query IndexPage {
  markdownRemark (frontmatter: { Identifier_field: { eq: "mainPageEt" }}){
    id
    frontmatter {
      Identifier_field
      TextCards {
        TextCard {
          description
          button
          title
        }
      }
      intro {
        blurbs {
          buttonPlaceholder
          blockHeading
          blockDescription
        }
      }
  }
}}`
export default IndexPage
