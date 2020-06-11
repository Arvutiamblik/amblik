import React from 'react';
import { RichText } from 'prismic-reactjs';

const ArticleSlices = (props) => {
  const { articleSlices } = props;

  return (
    <>
      {articleSlices?.body?.map((slice, index) => 
        <React.Fragment key={index}>
          {slice.__typename === 'PRISMIC_ArticleBodySubarticle1' && slice.primary.subarticle_text !== null &&
            <RichText render={slice.primary.subarticle_text}>{slice.primary.subarticle_text}</RichText>
          }
          {slice.__typename === 'PRISMIC_ArticleBodySubarticle' &&
            <div className="row">
              {slice.fields.map((item, index) => 
                {
                  const length = slice.fields.length;
                  return (
                    <div key={index} className={`mb-3 col-12 col-md-${length % 2 === 0 ? 6 : 12 / length} col-lg-${12 / length}`}>
                      {item.multisection_image && <RichText render={item.multisection_image}>{item.multisection_image}</RichText>}
                      {item.multisection_subtitle && <RichText render={item.multisection_subtitle}>{item.multisection_subtitle}</RichText>}
                      {item.multisection_text && <RichText render={item.multisection_text}>{item.multisection_text}</RichText>}
                    </div>
                  )
                }
              )}
            </div>
          }
        </React.Fragment>
      )}
    </>
  );
}

export default ArticleSlices;