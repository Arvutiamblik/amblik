import React from "react"
import {Link} from "gatsby"
import Layout from "../components/layout"
import agree from "../images/agree.png"
import cancel from "../images/cancel.png"
import minus from "../images/minus.png"
import Features from '../components/textBlock'
const SupportPageTemplate = ({
    TextCards,
    
  }) => ( 

   
<>
   
  
    
    <div className="container">
        <p id="headerNname">Arvutiämblik – this is your IT-department!</p>
        <p id="BlogText">Konsulteerime kliente infosüsteemide arendamise võimaluste osas, paigaldame arvuti riist- ja tarkvara, lahendame sideteenuse küsimusi, teostame hooldust, osutame kasutajatuge.  Pakume oma klientidele pakettlahendusi, mille täiuslikkus ja kvaliteet võimaldavad hakkama saada ilma isikliku infotehnoloogia osakonnata. Meie peamine eesmärk on võtta enda peale kõik tehnilised küsimused ja võimaldada Teil keskenduda vahetult oma ärile.</p>
        <p id="headerNname">Miks Arvutiämblik?</p>
   </div>
   
   <div className="container">
       <div className="row">
           <div className="col-lg-4 col-md-6 col-xs-12 ">
               <p id="bigSize">Kasulik</p>
               <p>Te ei pea võtma tööle spetsialisti ega tagama talle töötasu, sotsiaalseid garantiisid, füüsilist töökohta, autot.</p>
           </div>
           <div className="col-lg-4 col-md-6 col-xs-12 ">
           <p id="bigSize">Efektiivne</p>
               <p>Meie puhul ei jää Teie IT-spetsialist haigeks, ei lähe puhkusele, ei lahku päevapealt töölt. Kui teil tekib vajadus saada kiirelt rohkem spetsialiste, siis Te ei pea neid palkama.</p>
           </div>
           <div className="col-lg-4 col-md-6 col-xs-12 ">
           <p id="bigSize">Kvaliteetne</p>
               <p>Te ei pea võtma tööle spetsialisti ega tagama talle töötasu, sotsiaalseid garantiisid, füüsilist töökohta, autot.</p>
           </div>
       
       
           <div className="col-lg-4 col-xs-12 col-md-6">
           <p id="bigSize">Kiire</p>
               <p>Reageerime koheselt Teie päringule ja asume seda lahendama. Spetsialiseeritud kontrollisüsteem aitab meil efektiivselt ülesandeid jaotada ja kontrollida nende täitmist.  </p>
           </div>
           <div className="col-lg-4 col-xs-12 col-md-6">
           <p id="bigSize">Paindlik</p>
               <p>Te võite tasuda fikseeritud abonenttasu, võite maksta teenuste eest tunnitöö alusel. Valige see variant, mis on Teile mugavam, selgem ja soodsam!</p>
           </div>
           <div className="col-lg-4 col-xs-12 col-md-6">
           <p id="bigSize">Usaldusväärne</p>
               <p>Anname finantsgarantii konfidentsiaalsusele, samuti päringutele reageerimise kiirusele.</p>
           </div>
       </div>
       <div className="text-md-center col-lg">
          <p id="headerBigCenter">
            <small>
              <strong>Valige teile sobiv pakett</strong>
            </small>
            </p>
        </div>
        <div class="table-responsive-sm">
<table class="table">
    <thead class="thead">
      <tr>
        <th></th>
        <th>Prepaid Time<br/><p id="underHeader">All services are provided at a reduced rate</p></th>
        <th>Fixed fee<br/><p id="underHeader">Strict budget for the IT support</p></th>
        <th>Without an agreement<br/><p id="underHeader">One-time jobs</p></th>
      </tr>
    </thead>
    <tbody>
       <tr>
        <td id="hard"><div id="leftCorner">Monthly fee <br/><p id="smallText">All prices are subject to VAT.</p></div></td>
        <td id="hard"><p id="smallText">From 3 hours of servise per month</p> <br/>From 117 € </td>
        <td id="hard"><div id="leftBoard"><p id="smallText">Server support</p><br/>118 € / month<p id="smallText">for one server</p></div><div class="vl"></div><div id="rightBord"><p id="smallText">User support</p><br/> 59 € / month<br/><p id="smallText">for one user</p></div></td>
        

        <td id="hard">0 €</td>
      </tr>
      <tr>
        <td>Guaranteed prompt response</td>
        <td><img id="center" className="img" alt="" src={agree} /></td>
        <td><img id="center" className="img" alt="" src={agree} /></td>
        <td><img id="center" className="img" alt="" src={cancel} /></td>
      </tr>
      
      <tr>
        <td>Guaranteed confidentiality</td>
        <td><img id="center" className="img" alt="" src={agree} /></td>
        <td><img id="center" className="img" alt="" src={agree} /></td>
        <td><img id="center" className="img" alt="" src={agree} /></td>
      </tr>
      <tr>
        <td>Financial guarantee of confidentiality</td>
        <td><img id="center" className="img" alt="" src={cancel} /></td>
        <td><img id="center" className="img" alt="" src={agree} /></td>
        <td><img id="center" className="img" alt="" src={cancel} /></td>
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
        <td><img id="center" className="img" alt="" src={minus} /></td>
        <td id="hard">1 hour</td>
      </tr>
      <tr>
        <td> </td>
        <td id="hard">0,25 hour<br/><button id="itButton" type="button" className="btn btn-primary"><strong>Küsi pakkumist</strong></button></td>
        <td><img id="center" className="img" alt="" src={minus} /><br/><button id="centerButton" type="button" className="btn btn-primary"><strong>Küsi pakkumist</strong></button></td>
        <td id="hard">1 hour<br/><button id="itButton" type="button" className="btn btn-primary"><strong>Saada päring</strong></button></td>
      </tr>
      
    </tbody>
  </table>
  </div>

                  <div id="low" className="text-md-center">
                <p>
                  Pöörduge julgelt ka väikeste it murede<br />puhul:</p>
                <div id="num" className="text-md-center">
                  <h1 id="num"><small><strong>+372 665 48 28</strong></small></h1>
                  <p><big>+372 5 096 244</big></p>
                  <h1 id="num"><small><strong>support@amblik.ee</strong></small></h1>
                </div></div></div>
 
</>

    
)
const Support = ({ data }) => {
  
    return (
    <Layout>
      <SupportPageTemplate
        pros={data.prismic.allSupports.edges[0].node.pros}
      />
    </Layout>
    );
  };


export default Support

export const pageQuery = graphql`
  query SupportPage($locale: String!) {
    prismic {
      allSupports(lang: $locale) {
        edges {
          node {
            pros {
                description
                title
              }
          }
        }
      }
    }
  }`