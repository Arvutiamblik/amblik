import React from "react";
import { RichText } from "prismic-reactjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faMinus,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ArticleSlices = (props) => {
  const { articleSlices } = props;
  let articleSlicesChanged = [];
  let tables = [];
  for (let i = 0; i < articleSlices?.body?.length; i++) {
    const currentBody = articleSlices.body[i];
    const currentBodyType = currentBody.__typename;
    if (
      articleSlices.body[i - 1]?.__typename ===
        "PRISMIC_ArticleBodyTable_column" &&
      currentBodyType !== "PRISMIC_ArticleBodyTable_column"
    ) {
      articleSlicesChanged.push({ type: "ArticleServicePlan", tables });
      tables = [];
    }
    if (
      currentBodyType === "PRISMIC_ArticleBodySubarticle1" ||
      currentBodyType === "PRISMIC_ArticleBodySubarticle"
    ) {
      articleSlicesChanged.push(currentBody);
    }
    if (
      currentBodyType === "PRISMIC_ArticleBodyTable_header" ||
      currentBodyType === "PRISMIC_ArticleBodyTable_column"
    ) {
      for (let j = 0; j < currentBody.fields.length; j++) {
        const field = currentBody.fields[j];
        if (!tables[j]) {
          tables[j] = [];
        }
        tables[j].push({
          title: Object.values(currentBody.primary)[0],
          row: field,
        });
      }
    }
    if (
      currentBodyType === "PRISMIC_ArticleBodyTable_column" &&
      i + 1 === articleSlices.body.length
    ) {
      articleSlicesChanged.push({ type: "ArticleServicePlan", tables });
    }
  }

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {articleSlicesChanged?.map((slice, index) => (
        <React.Fragment key={index}>
          {slice.__typename === "PRISMIC_ArticleBodySubarticle1" &&
            slice.primary.subarticle_text !== null && (
              <RichText render={slice.primary.subarticle_text}>
                {slice.primary.subarticle_text}
              </RichText>
            )}
          {slice.__typename === "PRISMIC_ArticleBodySubarticle" && (
            <div className="row">
              {slice.fields.map((item, index) => {
                const length = slice.fields.length;
                return (
                  <div
                    key={index}
                    className={`mb-3 col-12 col-md-${
                      length % 2 === 0 ? 6 : 12 / length
                    } col-lg-${12 / length}`}
                  >
                    {item.multisection_image && (
                      <RichText render={item.multisection_image}>
                        {item.multisection_image}
                      </RichText>
                    )}
                    {item.multisection_subtitle && (
                      <RichText render={item.multisection_subtitle}>
                        {item.multisection_subtitle}
                      </RichText>
                    )}
                    {item.multisection_text && (
                      <RichText render={item.multisection_text}>
                        {item.multisection_text}
                      </RichText>
                    )}
                  </div>
                );
              })}
            </div>
          )}
          {slice.type === "ArticleServicePlan" &&
            slice.tables[0][0].row.table_heading && (
              <RichText render={slice.tables[0][0].title}>
                {slice.tables[0][0].title}
              </RichText>
            )}
          {slice.type === "ArticleServicePlan" && (
            <Slider className="mb-3" {...settings}>
              {slice?.tables?.map((table, index) => (
                <div key={index} className="card text-center">
                  {table?.map((column, index) =>
                    column?.row?.table_heading ? (
                      <div
                        key={index}
                        className={`card-header ${
                          column.row.main === true
                            ? "bg-hotpink"
                            : "bg-darkblue"
                        }`}
                      >
                        <RichText render={column.row.table_heading}>
                          {column.row.table_heading}
                        </RichText>
                        <RichText render={column.row.table_price}>
                          {column.row.table_price}
                        </RichText>
                      </div>
                    ) : (
                      <div key={index} className="card-body">
                        <RichText render={column.title}>
                          {column.title}
                        </RichText>
                        {column?.row?.option_description ? (
                          <RichText render={column.row.option_description}>
                            {column.row.option_description}
                          </RichText>
                        ) : (
                          <FontAwesomeIcon
                            icon={faMinus}
                            size="2x"
                            color="darkblue"
                          />
                        )}
                        {column?.row?.availability === "True" ? (
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            size="2x"
                            color="darkblue"
                          />
                        ) : column?.row?.availability === "False" ? (
                          <FontAwesomeIcon
                            icon={faTimes}
                            size="2x"
                            color="darkblue"
                          />
                        ) : null}
                      </div>
                    )
                  )}
                </div>
              ))}
            </Slider>
          )}
        </React.Fragment>
      ))}
    </>
  );
};

export default ArticleSlices;
