import React from "react";
import agree from "../../images/agree.png";
import cancel from "../../images/cancel.png";
import minus from "../../images/minus.png";

const ItSupportServicePlan = ({ itSupportServicePlans }) => {
  const itSupportOptions = itSupportServicePlans.it_support_service_plan;
  return (
    <table>
      <thead>
        <tr>
          <th className="compare-heading"></th>
          {itSupportOptions.map((item, index) => 
            <th key={index} className="compare-heading">
              {item.it_support_title}
            </th>
          )}
        </tr>
        <tr>
          <th className="compare-subheading"></th>
          {itSupportOptions.map((item, index) => 
            <th key={index} className="compare-subheading">
              {item.it_support_subtitle}
            </th>
          )}
        </tr>
        <tr>
          <th></th>
          {itSupportOptions.map((item, index) => 
            <th key={index} className="price-info">
              <div className="price">{item.it_support_monthly_price}</div>
              <div><a href="#" className="price-btn">{item.it_support_button}<span className="hide-mobile"></span></a></div>
            </th>
          )}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td colSpan="3">{itSupportServicePlans.guaranteed_prompt_response_header}</td>
        </tr>
        <tr className="compare-row">
          <td>{itSupportServicePlans.guaranteed_prompt_response_header}</td>
          {itSupportOptions.map((item, index) => 
            <td key={index}>
              <img className="img" alt="" src={item.guaranteed_prompt_response ? agree : cancel} />
            </td>
          )}
        </tr>
        <tr>
          <td></td>
          <td colSpan="3">{itSupportServicePlans.guaranteed_confidentiality_header}</td>
        </tr>
        <tr>
          <td>{itSupportServicePlans.guaranteed_confidentiality_header}</td>
          {itSupportOptions.map((item, index) => 
            <td key={index}>
              <img className="img" alt="" src={item.guaranteed_confidentiality ? agree : cancel} />
            </td>
          )}
        </tr>
        <tr>
          <td></td>
          <td colSpan="3">{itSupportServicePlans.financial_guarantee_of_confidentiality_header}</td>
        </tr>
        <tr className="compare-row">
          <td>{itSupportServicePlans.financial_guarantee_of_confidentiality_header}</td>
          {itSupportOptions.map((item, index) => 
            <td key={index}>
              <img className="img" alt="" src={item.financial_guarantee_of_confidentiality ? agree : cancel} />
            </td>
          )}
        </tr>
        <tr>
          <td></td>
          <td colSpan="3">{itSupportServicePlans.hourly_payment_header}</td>
        </tr>
        <tr>
          <td>{itSupportServicePlans.hourly_payment_header}</td>
          {itSupportOptions.map((item, index) => 
            <td key={index}>{item.hourly_payment}</td>
          )}
        </tr>
        <tr>
          <td></td>
          <td colSpan="3">{itSupportServicePlans.minimum_time_for_performing_work_on_site_header}</td>
        </tr>
        <tr className="compare-row">
          <td>{itSupportServicePlans.minimum_time_for_performing_work_on_site_header}</td>
          {itSupportOptions.map((item, index) => 
            <td key={index}>
              {item.minimum_time_for_performing_work_on_site ? 
                item.minimum_time_for_performing_work_on_site : 
                  <img className="img" alt="" src={minus} />
              }
            </td>
          )}
        </tr>
        <tr>
          <td></td>
          <td colSpan="3">{itSupportServicePlans.minimum_time_for_performing_work_in_remote_mode_header}</td>
        </tr>
        <tr>
          <td>{itSupportServicePlans.minimum_time_for_performing_work_in_remote_mode_header}</td>
          {itSupportOptions.map((item, index) => 
            <td key={index}>
              {item.minimum_time_for_performing_work_in_remote_mode ? 
                item.minimum_time_for_performing_work_in_remote_mode : 
                  <img className="img" alt="" src={minus} />
              }
            </td>
          )}
        </tr>
      </tbody>
    </table>
  )
};

export default ItSupportServicePlan;