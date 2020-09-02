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

const PriceTables = (props) => {
  const { slice } = props;

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
    <Slider className="mb-3" {...settings}>
      {slice?.tables?.map((table, index) => (
        <div key={index} className="card text-center">
          {table?.map((column, index) => {
            if (column?.row?.table_heading) {
              return (
                <div
                  key={index}
                  className={`card-header ${
                    column.row.main === true ? "bg-hotpink" : "bg-darkblue"
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
                  <RichText render={column.title}>{column.title}</RichText>
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
  );
};

export default PriceTables;
