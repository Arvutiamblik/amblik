import React from "react";
import agree from "../images/agree.png";
import cancel from "../images/cancel.png";
import minus from "../images/minus.png";

const ServicePlan = ({ servicePlan }) => {
  return (
    <div className="comparison">
        <table>
          {servicePlan.map((item, index) => 
            <React.Fragment key={index}>
              {item.__typename === 'PRISMIC_ServicesBodyHeading_service_option' ? 
                <thead>
                  <tr>
                    <th className="compare-heading"></th>
                    {item.fields.map((heading, index) => 
                      <th key={index} className="compare-heading">
                        {heading.service_heading[0].text}
                      </th>
                    )}
                  </tr>
                  <tr>
                    <th className="compare-subheading"></th>
                    {item.fields.map((heading, index) => 
                      <th key={index} className="compare-subheading">
                        {heading.service_subheading[0].text}
                      </th>
                    )}
                  </tr>
                  <tr>
                    <th></th>
                    {item.fields.map((heading, index) => 
                      <th key={index} className="price-info">
                        <div className="price">{heading.service_price[0].text}</div>
                      </th>
                    )}
                  </tr>
                  <tr>
                    <th></th>
                    {item.fields.map((heading, index) => 
                      <th key={index} className="price-info">
                        <div>
                          <a href="#" className="price-btn">
                            <span className="hide-mobile">{heading.service_button[0].text}</span>
                          </a>
                        </div>
                      </th>
                    )}
                  </tr>
                </thead>
                : null
              }
              {item.__typename === 'PRISMIC_ServicesBodyBoolean' | 
              item.__typename === 'PRISMIC_ServicesBodyText' ? 
                <tbody>
                  <tr>
                    <td></td>
                    <td colSpan="3">{item.primary.option_title[0].text}</td>
                  </tr>
                  <tr className="compare-row">
                    <td>{item.primary.option_title[0].text}</td>
                    {item.__typename === 'PRISMIC_ServicesBodyBoolean' ? 
                    item.fields.map((desc, index) => 
                      <td key={index}>
                        {desc.option_description ? 
                        <img className="img" alt="" src={agree} /> :
                        <img className="img" alt="" src={cancel} />}
                      </td> 
                    )
                     : 
                    item.fields.map((desc, index) =>
                      <td key={index}>
                        {desc.option_description ?
                        desc.option_description[0].text :
                        <img className="img" alt="" src={minus} />}
                      </td>
                    )
                    }
                  </tr>
                </tbody>
                : null
              }
            </React.Fragment>
          )}
        </table>
    </div>
  )
};

export default ServicePlan;