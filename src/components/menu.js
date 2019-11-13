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
               <div class="dropdown">
  <button class="dropbtn" onclick="myFunction()">Dropdown
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-content" id="myDropdown">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
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
                <select class="selectpicker" data-width="fit">
               <option data-content='<span class=""></span>'href="/" >  English</option>
                <Link to="/ru"><option  data-content='<span class="flag-icon flag-icon-mx"></span> '>Español</option></Link>
                </select>
               <a href="#" id="language"><strong>eng</strong><img id="strelka" className="img" alt="" src={language} />  </a>
               <button id="support" type="button" classname="btn btn-primary"><Link to="/support/"><strong>SUPPORT</strong></Link></button>
               
        </div>

        </header>
)
}
export default menu