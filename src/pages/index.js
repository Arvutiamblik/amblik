import React from "react"
import Layout from "../components/layout"
import Features from '../components/textBlock'
import TextCard from '../components/textCards'
import avast from '../images/AVAST.png'
import gdata from '../images/G-DATA.png'
import corners from '../images/corners.svg'

import { Link,  graphql} from "gatsby"
const IndexPageTemplate = ({
  intro,
  TextCards,
  TopDescription,
  heading,
  img,
  
}) => (
 
  <Layout>
        <img id="corners" className="img" alt="background" src={corners} />
    <img id="logoPicture" className="img" alt="background" src={img.url} />
    <header>


    <div className="container">
             <h1 id="logo"><big><strong>amblik </strong></big>. <em><small>ee</small></em></h1>
               <a href="#" id="link_button"><strong>SHOP</strong></a>
               <a href="#" id="link_button"><strong>SHOP</strong></a>
               <a href="#" id="link_button"><strong>SHOP</strong></a>
               <a href="#" id="link_button"><strong>SHOP</strong></a>
               <a href="#" id="language"><strong>eng</strong></a>
               <button id="support" type="button" classname="btn btn-primary"><strong>SUPPORT</strong></button>             
        </div>
    </header>
        <div id="otstup" className="container">
      
          <div  className="row">
            <div className="col-5">
              <p><em><strong>{TopDescription}
                  </strong></em>
              </p>
              <button type="button" className="btn btn-primary"><strong>{TopDescription}</strong></button>
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
        <h1>
          <small>
            <strong>{heading}</strong>
          </small>
        </h1>
        <Features gridItems={intro} />
        <div className="text-md-center col-lg">
                  <h1><small><strong>Products</strong></small></h1>
                  </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-xs-12">
                <img id="avast" className="img" alt="" src={avast} />             
                 <p id="productText"><em><strong>Nii kodus kui töö juures, nii töölaual kui ka veebis tegutsemiseks ning kõikide seadmete jaoks pakub Office tööriistu, millega ülesanded tehtud saavad.  Office 365 paindlike tellimislepingute seast saate valida just teile sobiva.</strong></em></p>
                <button id="ForHome" type="button" class="btn btn-primary"><strong>For Home</strong></button>
                <button id="ForBusiness" type="button" class="btn btn-primary"><strong>For Business</strong></button>
                </div>
                <div className="col-lg-6 col-md-6 col-xs-12">
                <img id="gdata" className="img" alt="" src={gdata} />             
                 <p id="productText"><em><strong>G DATA Software AG on uuenduslik ja kiirelt laienev tarkvarafirma, mis keskendub viirusetõrje turvalisuse lahendustele. Internetiturvalisuse spetsialistina ja viirusetõrje valdkonna teerajajana töötas 1985. aastal Bochumis asutatud firma esimese viirusetõrjeprogrammi välja enam kui 20 aastat tagasi. Rohkem kui viie aasta jooksul ei ole ükski teine Euroopa turvatarkvara pakkuja võitnud riiklikke ja rahvusvahelisi testkatseid ning auhindu sagedamini kui G DATA. Ja kui rääkida kvaliteedist, on G DATA maailmas juhtpositsioonil, ühendades oma viirusetõrjetoodetes maailma parimad turbetehnoloogiad. Selle näideteks on DoubleScan tehnoloogia, millel on kaks sõltumatut viiruseskännerit ja ülikiire OutbreakShield tõrje.</strong></em></p>
                <button id="ForHome" type="button" class="btn btn-primary"><strong>For Home</strong></button>
                <button id="ForBusiness" type="button" class="btn btn-primary"><strong>For Business</strong></button>
                </div>   
                <div class="w-100"></div>     
                <div className="col-lg-6 col-md-6 col-xs-12">
                <img id="gdata" className="img" alt="" src={gdata} />             
                 <p id="productText"><em><strong>G DATA Software AG on uuenduslik ja kiirelt laienev tarkvarafirma, mis keskendub viirusetõrje turvalisuse lahendustele. Internetiturvalisuse spetsialistina ja viirusetõrje valdkonna teerajajana töötas 1985. aastal Bochumis asutatud firma esimese viirusetõrjeprogrammi välja enam kui 20 aastat tagasi. Rohkem kui viie aasta jooksul ei ole ükski teine Euroopa turvatarkvara pakkuja võitnud riiklikke ja rahvusvahelisi testkatseid ning auhindu sagedamini kui G DATA. Ja kui rääkida kvaliteedist, on G DATA maailmas juhtpositsioonil, ühendades oma viirusetõrjetoodetes maailma parimad turbetehnoloogiad. Selle näideteks on DoubleScan tehnoloogia, millel on kaks sõltumatut viiruseskännerit ja ülikiire OutbreakShield tõrje.</strong></em></p>
                <button id="ForHome" type="button" class="btn btn-primary"><strong>For Home</strong></button>
                <button id="ForBusiness" type="button" class="btn btn-primary"><strong>For Business</strong></button>
                </div>    
                <div className="col-lg-6 col-md-6 col-xs-12">
                <img id="avast" className="img" alt="" src={avast} />             
                 <p id="productText"><em><strong>Nii kodus kui töö juures, nii töölaual kui ka veebis tegutsemiseks ning kõikide seadmete jaoks pakub Office tööriistu, millega ülesanded tehtud saavad.  Office 365 paindlike tellimislepingute seast saate valida just teile sobiva.</strong></em></p>
                <button id="ForHome" type="button" class="btn btn-primary"><strong>For Home</strong></button>
                <button id="ForBusiness" type="button" class="btn btn-primary"><strong>For Business</strong></button>
                </div>   
                </div>
                
                
              

              </div>
                
        <div className="text-md-center col-lg">
          <h1>
            <small>
              <strong>meie kliendid</strong>
            </small>
          </h1>
          <div className="container">
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
      </div>
    
    <div className="text-md-center col-lg">
      <h1>
        <small>
          <strong>mida ja kuidas saab teha, loe siin...</strong>
        </small>
      </h1>
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
)


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
          }
        }
      }
    }
  }`
