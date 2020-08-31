import React from "react";
import { RichText } from "prismic-reactjs";
import Img from "gatsby-image";
import { Link } from "gatsby";
import PropTypes from "prop-types";
const TextBlock = ({ item, delimiter, img, lang }) => (
  <>
    {img && (
      <div style={{ width: "250px" }}>
        <Img fluid={item.product_imageSharp.childImageSharp.fluid} />
      </div>
    )}
    <div
      className={`col-lg-${12 / delimiter} col-md-${
        12 / delimiter
      } col-xs-12 mb-4`}
    >
      {item?.title ? (
        <RichText render={item?.title}>{item?.title}</RichText>
      ) : item?.article?.title ? (
        <RichText render={item?.article?.title}>
          {item?.article?.title}
        </RichText>
      ) : null}
      {item?.article?.description && (
        <RichText render={item?.article?.description}>
          {item?.article?.description}
        </RichText>
      )}
      {item?.article !== null && (
        <Link
          to={`${lang === "et-et" ? "" : lang === "en-us" ? "en" : lang}/${
            item?.article?._meta?.uid
          }`}
        >
          <button className="btn btn-primary button-main">
            {item?.button_text}
          </button>
        </Link>
      )}
    </div>
  </>
);

const FeatureGrid = ({ gridItems, delimiter, img, lang }) => (
  <div className="row">
    {gridItems.map((item, index) =>
      (index + 1) % delimiter === 0 ? (
        <TextBlock key={index} item={item} delimiter={delimiter} lang={lang} />
      ) : (
        <TextBlock key={index} item={item} delimiter={delimiter} lang={lang} />
      )
    )}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      blockHeading: PropTypes.string,
      blockDescription: PropTypes.string,
      buttonPlaceholder: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
