import React from 'react';
import language from '../images/language.png'
import {Link} from "gatsby"

function menu  ({pageLanguage, languagePrefix, location})  {

let path = pageLanguage === 'ee'  ?  location.pathname
:  location.pathname.split('/').slice(2).join('/')
 
return (
    <header>
        <div id="headerPosition" className="container">
        <div id="dropdownMenuRight">
                  <input id="menu-toggle" type="checkbox" />
                <label id="menu-label" htmlFor="menu-toggle">
                <a  id="menu-icon" >{pageLanguage} <img id="strelka" className="img" alt="" src={language} />  </a>
                </label>
                   <ul id="collapse-menu">
                       <li><Link to={`/${path}`}>ee</Link></li>
                       <li><Link to={`/ru/${path}`}>ru</Link></li> 
                </ul>
                </div>
               <h1 id="logo"><big><strong>amblik </strong></big></h1>
               <a id="link_button"> <Link to={`${languagePrefix}`}><strong>HOME</strong></Link></a>
               <a id="link_button"><Link to={`${languagePrefix}/support`}><strong>SUPPORT</strong></Link></a>
                
               <button id="support" type="button" className="btn btn-primary"><Link to="/support/"><strong>SUPPORT</strong></Link></button>
        </div>  
        </header>
)
}
export default menu