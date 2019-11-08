import React from 'react';
 
import {Link} from "gatsby"
const menu = () => {
return (
    <header>
    <div id="headerPosition" className="container">
             <h1 id="logo"><big><strong>amblik </strong></big></h1>
             <Link id="link_button" to="//"><strong>HOME</strong></Link>
               <a href="#" id="link_button"><strong>SHOP</strong></a>
               <a href="#" id="link_button"><strong>SHOP</strong></a>
               <a href="#" id="link_button"><strong>SHOP</strong></a>
               <a href="#" id="language"><strong>eng</strong></a>
               <button id="support" type="button" classname="btn btn-primary"><Link id="link_button" to="/support/"><strong>Support</strong></Link></button>             
        </div>
        </header>
)
}
export default menu