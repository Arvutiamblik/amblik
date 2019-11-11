import React from 'react';
 
import {Link} from "gatsby"
const menu = () => {
return (
    <header>
        <div id="headerPosition" className="container">
    <div className="container">
              <h1 id="logo"><big><strong>amblik </strong></big></h1>
             <Link to="//" id="link_button" ><strong>HOME</strong></Link>
               <a href="#" id="link_button"><strong>SHOP</strong></a>
               <a href="#" id="link_button"><strong>SHOP</strong></a>
               <a href="#" id="link_button"><strong>SHOP</strong></a>
               <a href="#" id="language"><strong>eng</strong></a>
               <button id="support" type="button" classname="btn btn-primary"><Link to="/support/"><strong>SUPPORT</strong></Link></button>             
        </div>
        </div>
        </header>
)
}
export default menu