import React from "react";
import { RichText } from "prismic-reactjs";
import Img from "gatsby-image";
import { Link } from "gatsby"
import PropTypes from "prop-types"
const TextBlock = ({ item, delimiter, enableButton, img, lang }) => (
  <>
    {img && (
      <div style={{ width: "250px" }}>
        <Img fluid={item.product_imageSharp.childImageSharp.fluid} />
      </div>
    )}
    <div className={`col-lg-${12 / delimiter}  col-md-${12 / delimiter} col-xs-12`}>
      {item.title ? 
        <RichText render={item.title}>{item.title}</RichText> : 
        <RichText render={item.service_page.title}>{item.service_page.title}</RichText>
      }
      {item.description ? 
        <RichText render={item.description}>{item.description}</RichText> : 
        <RichText render={item.service_page.description}>{item.service_page.description}</RichText>
      }
      {enableButton === true && (
        <Link to={`${lang === 'et-et' ? "" : lang}/${item.service_page._meta.uid}`}>
          <button id="paddingButton" type="button" className="btn btn-primary">
            <strong>{item.button_text}</strong>
          </button>
        </Link>
      )}
    </div>
  </>
);

const FeatureGrid = ({ gridItems, delimiter, enableButton, img, lang }) => (
  <div className="row">
    {gridItems.map((item, index) =>
      (index + 1) % delimiter === 0 ? (
        <TextBlock
          key={index}
          item={item}
          delimiter={delimiter}
          enableButton={enableButton}
          lang={lang}
        />
      ) : (
        <TextBlock
          key={index}
          item={item}
          delimiter={delimiter}
          enableButton={enableButton}
          lang={lang}
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
