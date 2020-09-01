import React from "react";
import { RichText } from "prismic-reactjs";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import Contact from "../components/contact";
import ArticleSlices from "../components/ArticleSlices";

const ArticlePageTemplate = ({
  pageContext,
  pageUrl,
  lang,
  title,
  text,
  feedbackForm,
  articleSlices,
  articleBanner,
}) => (
  <>
    {articleBanner && (
      <div
        className="article-bg"
        style={{ backgroundImage: `url(${articleBanner})` }}
      ></div>
    )}
    <div className="background-wrapper bg-white py-5">
      <div className="container position-relative z-index-1">
        <div className="text-center my-5">
          <RichText render={title}>{title}</RichText>
          <div className="header-underline"></div>
        </div>
        <div className="mb-5">
          <RichText render={text}>{text}</RichText>
        </div>
      </div>
      {articleSlices && (
        <div className="container position-relative z-index-1">
          <ArticleSlices
            articleSlices={articleSlices}
            articleTitle={title}
            pageUrl={pageUrl}
            lang={lang}
            pageType={pageContext}
          />
        </div>
      )}
      {feedbackForm && (
        <div className="container position-relative z-index-1">
          <Contact
            articleTitle={title[0].text}
            pageUrl={pageUrl}
            lang={lang}
            pageType={pageContext.type}
          />
        </div>
      )}
    </div>
  </>
);

const Article = ({ data, pageContext, location }) => {
  const test = data.prismic.allArticles.edges.slice(0, 1).pop();

  if (!test) return null;
  const article = data.prismic.allArticles.edges[0];

  return (
    <Layout
      lang={article.node._meta.lang}
      uid={article.node._meta.uid}
      alternateLanguages={article.node._meta.alternateLanguages}
      supportModal={data.prismic.allSupport_modals.edges[0].node}
    >
      <SEO
        title={
          article.node.metatitle !== null
            ? article.node.metatitle
            : article.node.title[0].text
        }
        description={
          article.node.metadescription !== null
            ? article.node.metadescription
            : article.node.description[0].text
        }
        lang={article.node._meta.lang}
      />
      <ArticlePageTemplate
        pageUrl={location.href}
        pageContext={pageContext}
        lang={article.node._meta.lang}
        title={article.node.title}
        description={article.node?.description}
        text={article.node.text}
        feedbackForm={article.node.feedback_form}
        articleSlices={data.prismic.article}
        articleBanner={article.node?.banner?.url}
      />
    </Layout>
  );
};

export const query = graphql`
  query ArticlePage($lang: String!, $uid: String!) {
    prismic {
      allArticles(lang: $lang, uid: $uid) {
        edges {
          node {
            _meta {
              lang
              uid
              alternateLanguages {
                lang
                uid
              }
            }
            banner {
              ... on PRISMIC__ImageLink {
                url
              }
            }
            metatitle
            metadescription
            title
            description
            text
            feedback_form {
              ... on PRISMIC_Request_form {
                form_name
                form_input {
                  name
                  type
                  mandatory
                }
              }
            }
          }
        }
      }

      allSupport_modals(lang: $lang) {
        edges {
          node {
            modal_button_text
            title
            phone_title
            phone_number
            mobile_phone_number
            email_title
            email
            subtitle
            button_text
            link_text
            teamviewer_support_link {
              ... on PRISMIC__ExternalLink {
                url
              }
            }
          }
        }
      }
      article(lang: $lang, uid: $uid) {
        body {
          ... on PRISMIC_ArticleBodySubarticle {
            type
            label
            fields {
              multisection_image
              multisection_subtitle
              multisection_text
            }
          }
          ... on PRISMIC_ArticleBodySubarticle1 {
            primary {
              subarticle_text
            }
          }
          ... on PRISMIC_ArticleBodyTable_header {
            primary {
              table_title
            }
            fields {
              table_heading
              table_price
              table_button_link {
                ... on PRISMIC__ExternalLink {
                  url
                }
              }
              table_button_text
              main
            }
          }
          ... on PRISMIC_ArticleBodyTable_column {
            primary {
              row_header
            }
            fields {
              option_description
              availability
            }
          }
        }
      }
    }
  }
`;
export default Article;
