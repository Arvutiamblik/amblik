import React from "react";
import { RichText } from "prismic-reactjs";
import PriceTables from "./PriceTables";
import Contact from "../components/contact";
import TextBlock from "../components/textBlock";

const ArticleSlices = (props) => {
  const {
    articleSlices,
    articleTitle,
    pageUrl,
    origin,
    lang,
    pageType,
  } = props;
  let articleSlicesChanged = [];
  let tables = [];
  for (let i = 0; i < articleSlices?.body?.length; i++) {
    const currentBody = articleSlices.body[i];
    const currentBodyType = currentBody.__typename;
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
      i + 1 < articleSlices.body.length &&
      articleSlices.body[i + 1]?.__typename !==
        "PRISMIC_ArticleBodyTable_column"
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
      tables = [];
    }
  }
  console.log(articleSlices);

  return (
    <>
      {articleSlicesChanged?.map((slice, index) => (
        <React.Fragment key={index}>
          {slice.__typename === "PRISMIC_ArticleBodySubarticle1" &&
            slice.primary.subarticle_text !== null && (
              <React.Fragment>
                <RichText render={slice.primary.subarticle_text}>
                  {slice.primary.subarticle_text}
                </RichText>
                <Contact
                  articleTitle={props.articleTitle[0].text}
                  pageUrl={props.pageUrl}
                  lang={props.lang}
                  pageType={props.pageType}
                  buttonText={slice.primary.feedback_button_text}
                />
                {slice?.fields && (
                  <TextBlock
                    gridItems={slice.fields}
                    delimiter={2}
                    lang={lang}
                  />
                )}
              </React.Fragment>
            )}
          {slice.__typename === "PRISMIC_ArticleBodySubarticle" && (
            <div className="row">
              {slice?.primary?.multisection_text !== null && (
                <div className="mb-3 col-12">
                  <RichText render={slice.primary.multisection_text}>
                    {slice.primary.multisection_text}
                  </RichText>
                </div>
              )}
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
                      <picture>
                        <source
                          media="(max-width: 768px)"
                          srcSet={item.multisection_image?.mobile?.url}
                        />
                        <source srcSet={item.multisection_image.url} />
                        <img
                          src={item.multisection_image?.url}
                          alt={item.multisection_image?.alt}
                        />
                      </picture>
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
            <PriceTables
              slice={slice}
              articleTitle={articleTitle}
              pageUrl={pageUrl}
              lang={lang}
              pageType={pageType}
            />
          )}
        </React.Fragment>
      ))}
    </>
  );
};

export default ArticleSlices;
