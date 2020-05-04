import React from 'react';
import { RichText } from 'prismic-reactjs';
import Layout from "../components/layout";
import { graphql } from 'gatsby';

const ArticlePageTemplate = ({
  title,
  description,
  text
}) => (
  <>
    <div className="container">
      <RichText render={title} id="headerNname">{title}</RichText>
      <RichText render={description} id="BlogText">{description}</RichText>
      <RichText render={text} id="BlogText">{text}</RichText>
    </div>

    <div className="container">
      <div id="low" className="text-md-center">
        <p>
          Pöörduge julgelt ka väikeste it murede
          <br />
          puhul:
        </p>
        <div id="num" className="text-md-center">
          <h1 id="num">
            <small>
              <strong>+372 665 48 28</strong>
            </small>
          </h1>
          <p>
            <big>+372 5 096 244</big>
          </p>
          <h1 id="num">
            <small>
              <strong>support@amblik.ee</strong>
            </small>
          </h1>
        </div>
      </div>
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
        title={article.node.title}
        description={article.node.description}
        text={article.node.text}
      />
    </Layout>
  );
};

export const query = graphql`
  query ArticlePage($lang: String! $uid: String! ) {
    prismic {
      allArticles(lang: $lang,  uid: $uid) {
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