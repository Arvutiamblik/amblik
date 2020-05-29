import React from 'react';
import { RichText } from 'prismic-reactjs';
import Layout from "../components/layout";
import { graphql } from 'gatsby';
import SEO from "../components/seo";
import Contact from "../components/contact";

const ArticlePageTemplate = ({
  pageContext,
  pageUrl,
  lang,
  title,
  description,
  text,
  feedbackForm
}) => (
  <>
    <div className="container">
      <div className="text-md-center my-5">
        <RichText render={title} id="headerNname">{title}</RichText>
      </div>
      <div className="mb-5">
        <RichText render={description} id="BlogText">{description}</RichText>
        <RichText render={text} id="BlogText">{text}</RichText>
      </div>
      {feedbackForm && <Contact articleTitle={title[0].text} pageUrl={pageUrl} lang={lang} pageType={pageContext.type} />}
    </div>
  </>
);

const Article = ({ data, pageContext, location }) => {
  const test = data.prismic.allArticles.edges.slice(0, 1).pop()

if (!test) return null
  const article = data.prismic.allArticles.edges[0];

  return (
    <Layout 
      lang={article.node._meta.lang}
      uid={article.node._meta.uid}
      alternateLanguages={article.node._meta.alternateLanguages}
      supportModal={data.prismic.allSupport_modals.edges[0].node}
    >
      <SEO
        title={article.node.metatitle !== null ? article.node.metatitle : article.node.title[0].text}
        description={article.node.metadescription !== null ? article.node.metadescription : article.node.description[0].text}
        lang={article.node._meta.lang}
      />
      <ArticlePageTemplate 
        pageUrl={location.href}
        pageContext={pageContext}
        lang={article.node._meta.lang}
        title={article.node.title}
        description={article.node.description}
        text={article.node.text}
        feedbackForm={article.node.feedback_form}
      />
    </Layout>
  );
};

export const query = graphql`
  query ArticlePage($lang: String! $uid: String!) {
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
    }
  }
`;
export default Article;