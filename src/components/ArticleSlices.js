import React from "react";
import { RichText } from "prismic-reactjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faMinus,
  faTimes,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contact from "../components/contact";

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
    if (currentBodyType === "PRISMIC_ArticleBodyTable_header") {
      for (let j = 0; j < currentBody.fields.length; j++) {
        const field = currentBody.fields[j];
        const button = [];
        if (!tables[j]) {
          tables[j] = [];
        }
        if (field.table_button_text) {
          button.push({
            button_text: field.table_button_text,
            button_link: field.table_button_link,
          });
        }
        tables[j].push({
          title: "Footer",
          row: button,
        });
      }
    }
    if (
      currentBodyType === "PRISMIC_ArticleBodyTable_column" &&
      i + 1 === articleSlices.body.length
    ) {
      for (let x = 0; x < tables.length; x++) {
        const indexOfCurrentFooter = tables[x].findIndex(
          (item) => item.title === "Footer"
        );
        const tableHeadingIndex = tables[x].findIndex(
          (item) => item.row.table_heading !== null
        );
        const tableHeading = tables[x][tableHeadingIndex].row.table_heading;
        const removedFooter = tables[x].splice(indexOfCurrentFooter, 1);
        tables[x].push({
          tableHeading,
          footer: removedFooter[0],
        });
      }
      articleSlicesChanged.push({ type: "ArticleServicePlan", tables });
    }
  }

  const PrevArrow = (props) => (
    <FontAwesomeIcon
      icon={faChevronLeft}
      color="darkblue"
      onClick={props.onClick}
      className="slick-prev"
    />
  );

  const NextArrow = (props) => (
    <FontAwesomeIcon
      icon={faChevronRight}
      color="darkblue"
      onClick={props.onClick}
      className="slick-next"
    />
  );

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
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
                  {table?.map((column, index) => {
                    if (column?.row?.table_heading) {
                      return (
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
                      );
                    } else if (
                      !column?.row?.table_heading &&
                      column?.footer?.title !== "Footer"
                    ) {
                      return (
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
                      );
                    } else if (column?.footer?.title === "Footer") {
                      return (
                        <div key={index} className="card-footer">
                          <Contact
                            articleTitle={props.articleTitle[0].text}
                            pageUrl={props.pageUrl}
                            lang={props.lang}
                            pageType={props.pageType}
                            buttonText={column?.footer?.row[0]?.button_text}
                            tableHeading={column?.tableHeading[0]?.text}
                          />
                        </div>
                      );
                    }
                  })}
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
