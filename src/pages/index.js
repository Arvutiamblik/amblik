import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Features from '../components/Features'
import BackImage from  "../images/amblik-picture3.svg"
export const IndexPageTemplate = ({
  blockDescription,
  blockHeading,
  buttonPlaceholder,
}) => (
  <Layout>
    <SEO title="Home" />
    
    <div>
        <img className="back" src={BackImage} />
        <div className="container">
          <div className="row">
            <div className="col-sm">
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
            <div className="col-md-offset-4">
              <div className="bs-example">
                <div className="dropdown">
                  <a href="http://localhost/amblik/" className="dropdown-toggle" data-toggle="dropdown"><strong>est</strong></a>
                  <div className="dropdown-menu">
                    <a href="#" className="dropdown-item">rus</a>
                    <a href="#" className="dropdown-item">eng</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="mid" className="text-md-center">
          <h1><small><strong>oleme teie it tugi ja protsesside<br />automatiseerija.</strong></small></h1>
          <div className="container">
            <p><big><strong><em>Pilvelahendused, IT haldus, IT-susteemide ulesehitus ja hooldus, arvutivorgud, infoturve,
                    varundus-sustemid, kasut-ajatugi, Business Intelligence,</em></strong></big></p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <h1> it tugi</h1>
              <p><em><strong>Pilvelahendused, IT haldus, IT-susteemide<br />
                    ulesehitus <br />
                    ja hooldus, arvutivorgud, infoturve, varundus-
                    susteemid, kasutajatugi, Business Intelligence,
                    kodulehekulgede ja e-poodide arendus ja tugi,
                    majandustarkvara arendus, Office 365,
                    Microsoft 365, Azure, Power BI, Linux
                    ESET, AVAST
                  </strong></em>
              </p>
              <button type="button" className="btn btn-primary"><strong>Kusi abi siin!</strong></button>
            </div>
            <div className="col-6">
              <h1> it seadmine</h1>
              <p><em><strong>Pilvelahendused, IT haldus, IT-susteemide
                    ülesehitus
                    ja hooldus, arvutivorgud, infoturve, varundus-
                    süsteemid, kasutajatugi, Business Intelligence,
                  </strong></em>
              </p>
              <button type="button" className="btn btn-primary"><strong>Kusi abi siin!</strong></button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h1> office 356</h1>
              <p><em><strong>Pilvelahendused, IT haldus, IT-susteemide
                    ulesehitus
                    ja hooldus, arvutivorgud, infoturve, varundus-
                    susteemid, kasutajatugi, Business Intelligence,
                    kodulehekulgede ja e-poodide arendus ja tugi,
                    majandustarkvara arendus, Office 365,
                    Microsoft 365, Azure, Power BI, Linux
                    ESET, AVAST
                  </strong></em>
              </p>
              <button type="button" className="btn btn-primary"><strong>Kusi abi siin!</strong></button>
            </div>
            <div className="col-6">
              <h1> it audit</h1>
              <p><em><strong>Pilvelahendused, IT haldus, IT-susteemide
                    ülesehitus
                    ja hooldus, arvutivorgud, infoturve, varundus-
                    süsteemid, kasutajatugi, Business Intelligence,
                  </strong></em>
              </p>
              <button type="button" className="btn btn-primary"><strong>Kusi abi siin!</strong></button>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <h1> andmed pilves</h1>
                  <p><em><strong>Pilvelahendused, IT haldus, IT-susteemide
                        ulesehitus <br />
                        ja hooldus, arvutivorgud, infoturve, varundus-
                        susteemid, kasutajatugi, Business Intelligence,
                        kodulehekulgede ja e-poodide arendus ja tugi,
                        majandustarkvara arendus, Office 365,
                        Microsoft 365, Azure, Power BI, Linux
                        ESET, AVAST
                      </strong></em>
                  </p>
                  <button type="button" className="btn btn-primary"><strong>Kusi abi siin!</strong></button>
                </div>
                <div className="col-6">
                  <h1> teenus</h1>
                  <p><em><strong>Pilvelahendused, IT haldus, IT-susteemide
                        ülesehitus
                        ja hooldus, arvutivorgud, infoturve, varundus-
                        süsteemid, kasutajatugi, Business Intelligence,
                      </strong></em>
                  </p>
                  <button type="button" className="btn btn-primary"><strong>Kusi abi siin!</strong></button>
                </div>
                <div className="text-md-center">
                  <h1><small><strong>meie kliendid</strong></small></h1>
                  <div className="container">
                    <p><big><strong><em>Pilvelahendused, IT haldus, IT-susteemide ulesehitus ja hooldus, arvutivorgud,
                            infoturve, varundus-sustemid, kasut-ajatugi, Business Intelligence,</em></strong></big></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-md-center">
              <h1><small><strong>mida ja kuidas saab teha, loe siin...</strong></small></h1>
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="serviceBox">
                      <div className="service-icon">
                        <i className="fa fa-money" />
                      </div>
                      <h3 className="title">lühike nimetus<br />pilveservis</h3>
                      <hr align="left" width={140} size={2} color="hotpink" />
                      <p className="description">
                        Sellise lahenduse leidsime meie kliendile,<br />kellel on 25 töötavad nii<br />kontoris,kodus kui
                        tööplatisdel Sellise<br />lahenduse leidsime meie kliendile, kellel<br />on 25 töötajat ja töötavad...
                      </p>
                      <button id="more" type="button" className="btn btn-primary"><strong>Loe veel &gt;&gt;&gt;</strong></button>
                    </div>
                  </div>
                  <div className="col">
                    <div className="serviceBox">
                      <div className="service-icon">
                        <i className="fa fa-newspaper-o" />
                      </div>
                      <h3 className="title">lühike nimetus<br />pilveservis</h3>
                      <hr align="left" width={140} size={2} color="hotpink" />
                      <p className="description">
                        Sellise lahenduse leidsime meie kliendile,<br />kellel on 25 töötavad nii<br />kontoris,kodus kui
                        tööplatisdel... </p>
                      <button id="more" type="button" className="btn btn-primary"><strong>Loe veel &gt;&gt;&gt;</strong></button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="serviceBox">
                      <div className="service-icon">
                        <i className="fa fa-money" />
                      </div>
                      <h3 className="title">väga pikk nimetus<br />pilveservist ja tööst</h3>
                      <hr align="left" width={140} size={2} color="hotpink" />
                      <p className="description">
                        Sellise lahenduse leidsime meie kliendile,<br />kellel on 25 töötavad nii<br />kontoris,kodus kui
                        tööplatisdel Sellise<br />lahenduse leidsime meie kliendile, kellel<br />on 25 töötajat ja töötavad...
                      </p>
                      <button id="more" type="button" className="btn btn-primary"><strong>Loe veel &gt;&gt;&gt;</strong></button>
                    </div>
                  </div>
                  <div className="col">
                    <div className="serviceBox">
                      <div className="service-icon">
                        <i className="fa fa-newspaper-o" />
                      </div>
                      <h3 className="title">turvalise virtuaalkontori<br />lahendus pilveserveri<br />baasil väikefirmale</h3>
                      <hr align="left" width={140} size={2} color="hotpink" />
                      <p className="description">
                        Sellise lahenduse leidsime meie kliendile,<br />kellel on 25 töötavad nii<br />kontoris,kodus kui
                        tööplatisdel... </p>
                      <button id="more" type="button" className="btn btn-primary"><strong>Loe veel &gt;&gt;&gt;</strong></button>
                    </div>
                  </div>
                </div>
              </div>
              <div id="low" className="text-md-center">
                <p>
                  Pöörduge julgelt ka väikeste it murede<br />puhul:</p>
                <div id="num" className="text-md-center">
                  <h1 id="num"><small><strong>+372 665 48 28</strong></small></h1>
                  <p><big>+372 5 096 244</big></p>
                  <h1 id="num"><small><strong>support@amblik.ee</strong></small></h1>
                </div></div></div></div></div></div>
  </Layout>
)
const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        blockDescription={frontmatter.blurbs.blockDescription}
        blockHeading={frontmatter.blurbs.blockHeading}
        buttonPlaceholder={frontmatter.blurbs.buttonPlaceholder}
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
      blurbs {
        blockDescription
        blockHeading
        buttonPlaceholder
      }
    }
  }
}
`

export default IndexPage
