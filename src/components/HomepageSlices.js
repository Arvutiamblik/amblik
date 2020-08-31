import React from "react";
import { RichText } from "prismic-reactjs";
import TextBlock from "../components/textBlock";

const HomepageSlices = (props) => {
  const { homepageSlices, lang } = props;
  return (
    <>
      {homepageSlices?.body?.map(
        (slice, index) =>
          slice.__typename === "PRISMIC_Home_pageBodyHome_page_flex" && (
            <div
              key={index}
              className={`background-wrapper${
                slice.primary.white_background ? " bg-white" : ""
              }`}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg">
                    <div className="my-5">
                      <div className="text-center mb-5">
                        <div
                          id={slice.primary.flex_anchor}
                          name={slice.primary.flex_anchor}
                          alt={slice.primary.flex_anchor}
                        ></div>
                        {slice?.primary?.flex_title && (
                          <RichText render={slice.primary.flex_title}>
                            {slice.primary.flex_title}
                          </RichText>
                        )}
                        <div className="header-underline"></div>
                      </div>
                      {slice?.primary?.flex_text && (
                        <div className="columns">
                          <RichText render={slice.primary.flex_text}>
                            {slice.primary.flex_text}
                          </RichText>
                        </div>
                      )}
                      {slice?.fields && (
                        <TextBlock
                          gridItems={slice.fields}
                          delimiter={2}
                          lang={lang}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
      )}
    </>
  );
};

export default HomepageSlices;
