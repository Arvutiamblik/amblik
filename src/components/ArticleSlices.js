import React from 'react';
import { RichText } from 'prismic-reactjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faMinus, faTimes } from '@fortawesome/free-solid-svg-icons';	

const ArticleSlices = (props) => {
  const { articleSlices } = props;
  let articleSlicesChanged = [];
  let tables = [];
  for (let i = 0; i < articleSlices?.body?.length; i++) {
    if (articleSlices.body[i-1]?.__typename === 'PRISMIC_ArticleBodyTable_column' && 
    articleSlices.body[i].__typename !== 'PRISMIC_ArticleBodyTable_column') {
      articleSlicesChanged.push({ type: 'ArticleServicePlan', tables });
      tables = [];
    }
    if (articleSlices.body[i].__typename === 'PRISMIC_ArticleBodySubarticle1' || 
    articleSlices.body[i].__typename === 'PRISMIC_ArticleBodySubarticle') {
      articleSlicesChanged.push(articleSlices.body[i]);
    }
    if (articleSlices.body[i].__typename === 'PRISMIC_ArticleBodyTable_header' || 
    articleSlices.body[i].__typename === 'PRISMIC_ArticleBodyTable_column') {
      tables.push(articleSlices.body[i])
    }
    if (articleSlices.body[i].__typename === 'PRISMIC_ArticleBodyTable_column' && 
    i+1 === articleSlices.body.length) {
      articleSlicesChanged.push({ type: 'ArticleServicePlan', tables });
    }
  }

  return (
    <>
      {articleSlicesChanged?.map((slice, index) => 
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
          {slice.type === 'ArticleServicePlan' && 
            <>
              {slice?.tables[0]?.primary && <RichText render={slice.tables[0].primary.table_title}>{slice.tables[0].primary.table_title}</RichText>}
              <div className="mb-3 comparison">	
                <table>	
                  {slice?.tables?.map((item, index) => 	
                    <React.Fragment key={index}>	
                      {item.__typename === 'PRISMIC_ArticleBodyTable_header' ? 	
                        <thead>	
                          <tr>	
                            <th className="compare-heading"></th>	
                            {item?.fields?.map((heading, index) => 
                              heading.table_heading && 
                                <th key={index} className="compare-heading">	
                                  <RichText render={heading.table_heading}>{heading.table_heading}</RichText>
                                </th>	
                            )}	
                          </tr>	
                          <tr>	
                            <th></th>	
                            {item?.fields?.map((heading, index) => 
                              heading.table_price && 
                                <th key={index} className="price-info">	
                                  <RichText render={heading.table_price}>{heading.table_price}</RichText>	
                                </th>	
                            )}	
                          </tr>	
                          <tr>	
                            <th></th>	
                            {item?.fields?.map((heading, index) => 
                              heading.table_price.table_button_link && heading.table_price.table_button_link && 
                                <th key={index} className="price-info">	
                                  <div>	
                                    <a href={heading.table_price.table_button_link} className="price-btn">	
                                      <span className="hide-mobile">{heading.table_price.table_button_link}</span>	
                                    </a>	
                                  </div>	
                                </th>	
                            )}	
                          </tr>	
                        </thead>	
                        : null	
                      }	
                      {item.__typename === 'PRISMIC_ArticleBodyTable_column' ? 	
                        <tbody>	
                          <tr>	
                            <td></td>	
                            <td colSpan="3">
                              {item?.primary && <RichText render={item.primary.row_header}>{item.primary.row_header}</RichText>}
                            </td>	
                          </tr>	
                          <tr className="compare-row">	
                            <td>
                              {item?.primary && <RichText render={item.primary.row_header}>{item.primary.row_header}</RichText>}
                            </td>	
                            {item.fields.map((desc, index) => 	
                              <td key={index}>
                                <div className="mb-2">
                                  {desc.option_description ?	
                                  <RichText render={desc.option_description}>{desc.option_description}</RichText> :	
                                  <FontAwesomeIcon icon={faMinus} size="2x" color="darkblue" />}	
                                </div>
                                <div className="mb-2">
                                  {desc.availability === 'True' ? 	
                                  <FontAwesomeIcon icon={faCheckCircle} size="2x" color="darkblue" /> : 
                                  desc.availability === 'False' ?
                                  <FontAwesomeIcon icon={faTimes} size="2x" color="darkblue" /> :
                                  null}	
                                </div>
                              </td> 	
                            )}	
                          </tr>	
                        </tbody>	
                        : null	
                      }	
                    </React.Fragment>	
                  )}	
                </table>	
              </div>
            </>
          }
        </React.Fragment>
      )}
    </>
  );
}

export default ArticleSlices;