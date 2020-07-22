import React from "react"
import {Link} from "gatsby"
import Layout from "../components/layout"
import eset from "../images/eset.png"
import windows from "../images/windows.png"
import apple from "../images/apple.png"
import esetProd from "../images/eset-nod32.png"

const ShopPage = ({pageContext, location}) => (

<>
        <div className="container">
          <img className="eset" alt="eset" src={eset} />
          <p id="shopText">1992. aastal loodud ESET on ülemaailmse haardega turvalahenduste pakkuja, kelle tooted on suunatud nii äri- kui eraklientidele. Ettevõte tõi esimesena turule ennetavad viirustõrjesüsteemid ning on endiselt antud valdkonnas turuliidriks. Viirustõrjeprogramm ESET NOD32 Antivirus on saanud viirustõrjeprogramme testiva sõltumatu väljaande Virus Bulletin poolt antavat auhinda "VB100” rekordarv kordi ning alates testimise käivitamisest aastal 1998 pole programmil kunagi jäänud kahe silma vahele ühtki vabalt ringlevat ussviirust või muud arvutiviirust. ESET NOD32 Antivirus,  ESET Smart Security ja ESET Cybersecurity Mac-ile on programmid, mida usaldavad miljonid arvutikasutajad üle maailma ning mis kuuluvad maailma kõige sagedamini soovitatud turvalahenduste hulka. Ettevõtte rahvusvaheline peakontor asub Bratislavas (Slovakkias) ning piirkondlikud harukontorid on San Diegos (USAs), Buenos Aireses (Argentiinas) ja Singapuris. ESETi pahavara uurimiskeskused paiknevad Bratislavas, San Diegos, Buenos Aireses, Prahas (Tšehhi Vabariigis), KrakowiNB! (üli)õpilased!s (Poolas), Montrealis (Kanadas), Moskvas (Venemaal), ning ettevõtte laiahaardeline partnervõrgustik hõlmab 180 riiki.</p>
          <h2 id="NBtext">NB! (üli)õpilased!</h2>
          <p  id="Soodus"> Üliõpilastele on -50% soodustus 1-le arvutile mõeldud 1 aasta esmaversiooni viirusetõrje hinnast, õpilaste soodustus ei laiene 2, 3 aastastele tellimustele, uuendustele ega pakettidele (2, 3, 4 jne arvutit) vKehtiva õpilaspileti / ISIC-kaardiga on soodsam soetada UUS LITSENTS, kui soetada uuenduslitsents, kuna uuenduslitsentsile õpilase soodustus ei laiene. </p>
          <p><strong>Lisainfo ja tingimused:</strong><br/>
          <a href="mailto:pood@engenie.ee">pood@engenie.ee</a><br/>
          Tel: <a href="callto:+3726188033">+372 6188 033</a><br/>
          </p>
        </div>

        <div className="container">
            <div className="row">
            <img className="windows" alt="windows" src={windows} />
            <img className="apple" alt="apple" src={apple} />
            </div>
        </div>
        <div className="container">
            <div className="row">
            <div className="col-lg">
            <p id="systemName">Windows</p>
            </div>
            <div className="col-lg">
            <p id="systemName">Apple</p>
            </div>
            
            
        </div>
        </div>
        <div className="container">
        <div className="row">
                <div className="col-lg-6 col-xs-12 col-md-6 buttonMobile">
                <img id="eset-nod32" className="img" alt="" src={esetProd} /> 
                <p id="productName">ESET NOD32 ANTIVIRUS</p>   
                <button id="productButton" type="button" className="btn btn-primary"><strong>1 aasta</strong></button>
                <button id="productButton" type="button" className="btn btn-primary"><strong>1 arvuti(t)</strong></button>
                <button id="productButton" type="button" className="btn btn-primary"><strong>Soodus</strong></button>
                <div className="w-100"></div>
                <button id="firstButton"  type="button" className="btn btn-primary"><strong>1 arvuti(t)</strong></button>
                <button id="secondButton" type="button" className="btn btn-primary"><strong>Soodus</strong></button>
                </div>       
          
                
                <div className="col-lg-6 col-xs-12 col-md-6 buttonMobile">
                <img id="eset-nod32" className="img" alt="" src={esetProd} />  
                <p id="productName">ESET NOD32 ANTIVIRUS</p>
                <button id="productButton" type="button" className="btn btn-primary"><strong>1 aasta</strong></button>
                <button id="productButton" type="button" className="btn btn-primary"><strong>1 arvuti(t)</strong></button>
                <button id="productButton" type="button" className="btn btn-primary"><strong>Soodus</strong></button>
                <div className="w-100"></div>
                <button id="firstButton"  type="button" className="btn btn-primary"><strong>1 arvuti(t)</strong></button>
                <button id="secondButton" type="button" className="btn btn-primary"><strong>Soodus</strong></button>
               
                </div>   
                <div className="w-100"></div>    
                <div className="col-lg-6 col-xs-12 col-md-6 buttonMobile">
                <img id="eset-nod32" className="img" alt="" src={esetProd} /> 
                <p id="productName">ESET NOD32 ANTIVIRUS</p>       
                <button id="productButton" type="button" className="btn btn-primary"><strong>1 aasta</strong></button>
                <button id="productButton" type="button" className="btn btn-primary"><strong>1 arvuti(t)</strong></button>
                <button id="productButton" type="button" className="btn btn-primary"><strong>Soodus</strong></button>   
                <div className="w-100"></div>
                <button id="firstButton"  type="button" className="btn btn-primary"><strong>1 arvuti(t)</strong></button>
                <button id="secondButton" type="button" className="btn btn-primary"><strong>Soodus</strong></button>
                </div>
                
                <div className="col-lg-6 col-xs-12 col-md-6 buttonMobile">
                <img id="eset-nod32" className="img" alt="" src={esetProd} />  
                <p id="productName">ESET NOD32 ANTIVIRUS</p>       
                <button id="productButton" type="button" className="btn btn-primary"><strong>1 aasta</strong></button>
                <button id="productButton" type="button" className="btn btn-primary"><strong>1 arvuti(t)</strong></button>
                <button id="productButton" type="button" className="btn btn-primary"><strong>Soodus</strong></button>   
                <div className="w-100"></div>
                <button id="firstButton"  type="button" className="btn btn-primary"><strong>1 arvuti(t)</strong></button>
                <button id="secondButton" type="button" className="btn btn-primary"><strong>Soodus</strong></button>     
                </div>   
                 
                
         </div>
         <div id="low" className="text-md-center">
                <p>
                  Pöörduge julgelt ka väikeste it murede<br />puhul:</p>
                <div id="num" className="text-md-center">
                  <h1 id="num"><small><strong>+372 665 48 28</strong></small></h1>
                  <p><big>+372 5 096 244</big></p>
                  <h1 id="num"><small><strong>support@amblik.ee</strong></small></h1>
                </div></div>
         
        </div>

</>
)

export default ShopPage