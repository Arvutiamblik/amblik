import React from "react";
import Img from "gatsby-image";
function ProdudctsIntro({ gridItems })  {
let yourArray = gridItems;
let halfwayThrough = Math.floor(yourArray.length / 2)
let arrayFirstHalf = yourArray.slice(0, halfwayThrough);
let arraySecondHalf = yourArray.slice(halfwayThrough, yourArray.length);
return(
  <div id="containerRight" className="container">
    <div className="row">
     <div className="col-lg-6 col-md-6 col-xs-12">
     {arrayFirstHalf.map((item ) => (<Intro item={item} />))}
     </div>
     <div className="col-lg-6 col-md-6 col-xs-12">
     {arraySecondHalf.map((item ) => (<Intro item={item} />))}
     </div>
    </div>
  </div>
)};
const Intro = ({ item }) => (
  <>
  <div style={{height: 'auto', width: '250px', float: 'left', }}>
   <Img fluid={item.product_imageSharp.childImageSharp.fluid} />
   </div>
    <p id="productText" style={{ marginTop: '20px'}}>
      <em>
        <strong>{item.product_decription[0].text}</strong>
      </em>
    </p>
    <button id="ForHome" type="button" className="btn btn-primary">
      <strong>For Home</strong>
    </button>
    <button id="ForBusiness" type="button" className="btn btn-primary">
      <strong>For Business</strong>
    </button>
  </>
);
export default ProdudctsIntro; 
