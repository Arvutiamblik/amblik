import React from "react";
import { RichText } from "prismic-reactjs";
import { Link } from "gatsby";
import PropTypes from "prop-types";
const TextBlock = ({ item, delimiter, lang }) => (
  <>
    <div
      className={`col-lg-${12 / delimiter} col-md-${
        12 / delimiter
      } col-xs-12 mb-4 text-break`}
    >
      {item?.image && (
        <img
          src={item?.image?.url}
          alt={item?.image?.alt}
          style={{
            width: item?.image?.dimensions?.width,
          }}
          className="py-3"
        />
      )}
      {item?.title ? (
        <RichText render={item?.title}>{item?.title}</RichText>
      ) : item?.article?.title ? (
        <RichText render={item?.article?.title}>
          {item?.article?.title}
        </RichText>
      ) : null}
      {item?.description ? (
        <div>{item?.description}</div>
      ) : item?.article?.description ? (
        <RichText render={item?.article?.description}>
          {item?.article?.description}
        </RichText>
      ) : null}
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

const FeatureGrid = ({ gridItems, delimiter, lang }) => (
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
