import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby"
import PropTypes from "prop-types"
const TextBlock = ({ item, delimiter, enableButton, img, languagePrefix }) => (
  <>
    {img && (
      <div style={{ width: "250px" }}>
        <Img fluid={item.product_imageSharp.childImageSharp.fluid} />
      </div>
    )}
  
    <div 
      className={`col-lg-${12 / delimiter}  col-md-${12 / delimiter} col-xs-12`}
    >
      {item.title && 
      <h2 id="headerText">{item.title}</h2>}
      <p>
        <strong>{item.description}</strong>
      </p>
      {enableButton === true && (
         <Link to={`${languagePrefix}/${item.service_page._meta.uid}/`}>
        <button id="paddingButton" type="button" className="btn btn-primary">
         
          <strong>{item.button_text}</strong>
        </button>
        </Link>
      )}
    </div>
  </>
);

const FeatureGrid = ({ gridItems, delimiter, enableButton, img, languagePrefix }) => (
  <div className="row">
    {gridItems.map((item, index) =>
      (index + 1) % delimiter === 0 ? (
        <TextBlock
          key={index}
          item={item}
          delimiter={delimiter}
          enableButton={enableButton}
          languagePrefix={languagePrefix}
        />
      ) : (
        <TextBlock
          key={index}
          item={item}
          delimiter={delimiter}
          enableButton={enableButton}
          languagePrefix={languagePrefix}
        />
      )
    )}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      blockHeading: PropTypes.string,
      blockDescription: PropTypes.string,
      buttonPlaceholder: PropTypes.string
    })
  )
};

export default FeatureGrid;
