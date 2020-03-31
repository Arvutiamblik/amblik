import React from 'react';
import {Link} from "gatsby"

function menu  ({lang, uid})  {
let path = lang ==='et-et'  ?  `/${uid}` :
`/${lang}/${uid}`
 let langName = lang ==='et-et' ? 'ee' : lang
 let prefix = lang ==='et-et' ? '' : lang
return (
    <header>
        <div id="headerPosition" className="container">
        <div id="dropdownMenuRight">
                  <input id="menu-toggle" type="checkbox" />
                <label id="menu-label" htmlFor="menu-toggle">
                <a  id="menu-icon" >{langName} <img id="strelka" className="img" alt="" src={lang} />  </a>
                </label>
                   <ul id="collapse-menu">
                       <li><Link to={`/${uid}`}>ee</Link></li>
                       <li><Link to={`/ru/${uid}`}>ru</Link></li> 
                </ul>
                </div>
               <h1 id="logo"><big><strong>amblik </strong></big></h1>
               <a id="link_button"> <Link to={`${prefix}`}><strong>HOME</strong></Link></a>
              
                
               <button id="support" type="button" className="btn btn-primary"><strong>SUPPORT</strong></button>
        </div>  
        </header>
)
}
export default menu