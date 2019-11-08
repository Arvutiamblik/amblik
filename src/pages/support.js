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
        <p id="headerNname">ArvutiÃ¤mblik â€“ this is your IT-department!</p>
        <p id="BlogText">Konsulteerime kliente infosÃ¼steemide arendamise vÃµimaluste osas, paigaldame arvuti riist- ja tarkvara, lahendame sideteenuse kÃ¼simusi, teostame hooldust, osutame kasutajatuge.â€©â€©Pakume oma klientidele pakettlahendusi, mille tÃ¤iuslikkus ja kvaliteet vÃµimaldavad hakkama saada ilma isikliku infotehnoloogia osakonnata. Meie peamine eesmÃ¤rk on vÃµtta enda peale kÃµik tehnilised kÃ¼simused ja vÃµimaldada Teil keskenduda vahetult oma Ã¤rile.</p>
        <p id="headerNname">Miks ArvutiÃ¤mblik?</p>
   </div>
   
   <div className="container">
       <div className="row">
           <div className="col-lg-4 col-md-6 col-xs-12 ">
               <p id="bigSize">Kasulik</p>
               <p>Te ei pea vÃµtma tÃ¶Ã¶le spetsialisti ega tagama talle tÃ¶Ã¶tasu, sotsiaalseid garantiisid, fÃ¼Ã¼silist tÃ¶Ã¶kohta, autot.</p>
           </div>
           <div className="col-lg-4 col-md-6 col-xs-12 ">
           <p id="bigSize">Efektiivne</p>
               <p>Meie puhul ei jÃ¤Ã¤ Teie IT-spetsialist haigeks, ei lÃ¤he puhkusele, ei lahku pÃ¤evapealt tÃ¶Ã¶lt. Kui teil tekib vajadus saada kiirelt rohkem spetsialiste, siis Te ei pea neid palkama.</p>
           </div>
           <div className="col-lg-4 col-md-6 col-xs-12 ">
           <p id="bigSize">Kvaliteetne</p>
               <p>Te ei pea vÃµtma tÃ¶Ã¶le spetsialisti ega tagama talle tÃ¶Ã¶tasu, sotsiaalseid garantiisid, fÃ¼Ã¼silist tÃ¶Ã¶kohta, autot.</p>
           </div>
       
       
           <div className="col-lg-4 col-xs-12 col-md-6">
           <p id="bigSize">Kiire</p>
               <p>Reageerime koheselt Teie pÃ¤ringule ja asume seda lahendama. Spetsialiseeritud kontrollisÃ¼steem aitab meil efektiivselt Ã¼lesandeid jaotada ja kontrollida nende tÃ¤itmist.â€©â€©</p>
           </div>
           <div className="col-lg-4 col-xs-12 col-md-6">
           <p id="bigSize">Paindlik</p>
               <p>Te vÃµite tasuda fikseeritud abonenttasu, vÃµite maksta teenuste eest tunnitÃ¶Ã¶ alusel. Valige see variant, mis on Teile mugavam, selgem ja soodsam!</p>
           </div>
           <div className="col-lg-4 col-xs-12 col-md-6">
           <p id="bigSize">UsaldusvÃ¤Ã¤rne</p>
               <p>Anname finantsgarantii konfidentsiaalsusele, samuti pÃ¤ringutele reageerimise kiirusele.</p>
           </div>
       </div>
       <div className="text-md-center col-lg">
          <p id="headerBigCenter">
            <small>
              <strong>Valige teile sobiv pakett</strong>
            </small>
            </p>
        </div>
        <div className="table-responsive-sm">
<table className="table">
    <thead className="thead">
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
        <td id="hard"><p id="smallText">From 3 hours of servise per month</p> <br/>From 117 â‚¬ </td>
        <td id="hard"><div id="leftBoard"><p id="smallText">Server support</p><br/>118 â‚¬ / month<p id="smallText">for one server</p></div><div className="vl"></div><div id="rightBord"><p id="smallText">User support</p><br/> 59 â‚¬ / month<br/><p id="smallText">for one user</p></div></td>
        

        <td id="hard">0 â‚¬</td>
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
        <td id="hard">0 â‚¬</td>
        <td id="hard">0 â‚¬</td>
        <td id="hard">59 â‚¬ </td>
      </tr>
      <tr>
        <td>Minimum time for performing work on site</td>
        <td id="hard"> 1 hour</td>
        <td><img id="center" className="img" alt="" src={minus} /></td>
        <td id="hard">1 hour</td>
      </tr>
      <tr>
        <td> </td>
        <td id="hard">0,25 hour<br/><button id="itButton" type="button" className="btn btn-primary"><strong>KÃ¼si pakkumist</strong></button></td>
        <td><img id="center" className="img" alt="" src={minus} /><br/><button id="centerButton" type="button" className="btn btn-primary"><strong>KÃ¼si pakkumist</strong></button></td>
        <td id="hard">1 hour<br/><button id="itButton" type="button" className="btn btn-primary"><strong>Saada pÃ¤ring</strong></button></td>
      </tr>
      
    </tbody>
  </table>
  </div>

                  <div id="low" className="text-md-center">
                <p>
                  PÃ¶Ã¶rduge julgelt ka vÃ¤ikeste it murede<br />puhul:</p>
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