import React from 'react';
import { RichText } from 'prismic-reactjs';
import Layout from "../components/layout";
import Footer from "../components/footer";
import { graphql } from 'gatsby';

const ArticlePageTemplate = ({
  lang,
  title,
  description,
  text
}) => (
  <>
    <div className="container">
      <div className="text-md-center my-5">
        <RichText render={title} id="headerNname">{title}</RichText>
      </div>
      <RichText render={description} id="BlogText">{description}</RichText>
      <RichText render={text} id="BlogText">{text}</RichText>
    </div>

    <div className="container">
      <Footer lang={lang} />
    </div>
  </>
);

const Article = ({ data }) => {
  const article = data.prismic.allArticles.edges[0];

  return (
    <Layout 
      lang={article.node._meta.lang}
      uid={article.node._meta.uid}
      supportModal={data.prismic.allSupport_modals.edges[0].node}
    >
      <ArticlePageTemplate
        lang={article.node._meta.lang}
        title={article.node.title}
        description={article.node.description}
        text={article.node.text}
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
            }
            metatitle
            metadescription
            title
            description
            text
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
          }
        }
      }
    }
  }
`;
export default Article;