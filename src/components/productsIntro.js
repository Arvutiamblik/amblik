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
  <div style={{height: 'auto', width: '250px'}}>
   <Img fluid={item.product_imageSharp.childImageSharp.fluid} />
   </div>
    <p className="productText" style={{ marginTop: '20px'}}>
      <em>
        <strong>{item.product_decription[0].text}</strong>
      </em>
    </p>
    <div className= "row">
    <div className="col-5">
    <button  type="button" className="btn btn-primary ForHome">
      <strong>For Home</strong>
    </button>
    </div>
    <div className="col-5">
    <button  type="button" className="btn btn-primary ForBusiness">
      <strong>For Business</strong>
    </button>
    </div>
    </div>
  </>
);
export default ProdudctsIntro; 
