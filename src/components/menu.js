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
                 <div id="dropdownMenuRight">
                  <input id="menu-toggle" type="checkbox" />
                <label id="menu-label" for="menu-toggle">
                <a  id="menu-icon" >AAA <img id="strelka" className="img" alt="" src={language} />  </a>
                </label>
                   <ul id="collapse-menu">
                       <li><Link to="/">ee</Link></li>
                       <li><Link to="/ru">ru</Link></li>
                       
                </ul>
                </div>

               {/* <div  class="dropdown" id="dropdownLanguage" >
                        <button  class="btn btn-secondary dropdown-toggle" type="dropdown" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                       language
                     </button>
                         <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                             <a class="dropdown-item" ><Link to="/">ee</Link></a>
                             <a class="dropdown-item" ><Link to="/ru">ru</Link></a>
    
                     </div>
                </div> */}
            
               {/* <a href="#" id="language"><strong>eng</strong><img id="strelka" className="img" alt="" src={language} />  </a> */}
               <button id="support" type="button" className="btn btn-primary"><Link to="/support/"><strong>SUPPORT</strong></Link></button>
               
        </div>
   
        
        </header>
)
}
export default menu