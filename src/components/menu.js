import React from 'react';
import language from '../images/language.png'
import {Link} from "gatsby"
const menu = () => {
return (
    <header>
        <div id="headerPosition" className="container">
               <h1 id="logo"><big><strong>amblik </strong></big></h1>
               <a id="link_button"> <Link to="//"><strong>HOME</strong></Link></a>
               <a href="#" id="link_button"><strong>SHOP</strong></a>
               <a href="#" id="link_button"><strong>SHOP</strong></a>
               <a href="#" id="link_button"><strong>SHOP</strong></a>
               <a href="#" id="language"><strong>eng</strong><img id="strelka" className="img" alt="" src={language} />  </a>
               <button id="support" type="button" className="btn btn-primary"><Link to="/support/"><strong>SUPPORT</strong></Link></button>
               
        </div>
        </header>
)
}
export default menu