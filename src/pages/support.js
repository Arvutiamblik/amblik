import React from "react"
import {Link} from "gatsby"
import Layout from "../components/layout"

const SupportPageTemplate = ({
    TextCards,
  }) => ( 

   
<>
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

    
    <div className="container">
        <p id="headerNname">Arvutiämblik – this is your IT-department!</p>
        <p id="BlogText">Konsulteerime kliente infosüsteemide arendamise võimaluste osas, paigaldame arvuti riist- ja tarkvara, lahendame sideteenuse küsimusi, teostame hooldust, osutame kasutajatuge.  Pakume oma klientidele pakettlahendusi, mille täiuslikkus ja kvaliteet võimaldavad hakkama saada ilma isikliku infotehnoloogia osakonnata. Meie peamine eesmärk on võtta enda peale kõik tehnilised küsimused ja võimaldada Teil keskenduda vahetult oma ärile.</p>
        <p id="headerNname">Miks Arvutiämblik?</p>
   </div>
   
   <div className="container">
       <div className="row">
           <div className="col-4">
               <h1>Kasulik</h1>
               <p>Te ei pea võtma tööle spetsialisti ega tagama talle töötasu, sotsiaalseid garantiisid, füüsilist töökohta, autot.</p>
           </div>
           <div className="col-4">
               <h1>Efektiivne</h1>
               <p>Meie puhul ei jää Teie IT-spetsialist haigeks, ei lähe puhkusele, ei lahku päevapealt töölt. Kui teil tekib vajadus saada kiirelt rohkem spetsialiste, siis Te ei pea neid palkama.</p>
           </div>
           <div className="col-4">
               <h1>Kvaliteetne</h1>
               <p>Te ei pea võtma tööle spetsialisti ega tagama talle töötasu, sotsiaalseid garantiisid, füüsilist töökohta, autot.  </p>
           </div>
       </div>
       <div className="row">
           <div className="col-4">
               <h1>Kiire</h1>
               <p>Reageerime koheselt Teie päringule ja asume seda lahendama. Spetsialiseeritud kontrollisüsteem aitab meil efektiivselt ülesandeid jaotada ja kontrollida nende täitmist.  </p>
           </div>
           <div className="col-4">
               <h1>Paindlik</h1>
               <p>Te võite tasuda fikseeritud abonenttasu, võite maksta teenuste eest tunnitöö alusel. Valige see variant, mis on Teile mugavam, selgem ja soodsam!  </p>
           </div>
           <div className="col-4">
               <h1>Usaldusväärne</h1>
               <p>Anname finantsgarantii konfidentsiaalsusele, samuti päringutele reageerimise kiirusele.  </p>
           </div>
       </div>
       <div className="text-md-center col-lg">
                  <h1><small><strong>Valige teile sobiv pakett</strong></small></h1>
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
const Support = ({ data, pageContext: { locale } }) => {
  
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