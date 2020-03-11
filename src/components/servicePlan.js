import React from "react";
import agree from "../images/agree.png";
import cancel from "../images/cancel.png";
import minus from "../images/minus.png";

const ServicePlan = ({ servicePlans }) => (
  <div className="comparison">
    <table>
      <thead>
        <tr>
          <th className="compare-heading"></th>
          {servicePlans.map((servicePlan, index) => 
            <th key={index} className="compare-heading">
              {servicePlan.service_plan_title}
            </th>
          )}
        </tr>
        <tr>
          <th className="compare-subheading"></th>
          {servicePlans.map((servicePlan, index) => 
            <th key={index} className="compare-subheading">
              {servicePlan.service_plan_description}
            </th>
          )}
        </tr>
        <tr>
          <th></th>
          <th className="price-info">
            <div className="price">From 117 €</div>
            <div><a href="#" className="price-btn">Get an offer <span className="hide-mobile"></span></a></div>
          </th>
          <th className="price-info">
            <div className="price">59 € / month</div>
            <div><a href="#" className="price-btn">Get an offer <span className="hide-mobile"></span></a></div>
          </th>
          <th className="price-info">
            <div className="price">0 €</div>
            <div><a href="#" className="price-btn">Get an offer <span className="hide-mobile"></span></a></div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td colSpan="3">Guaranteed prompt response</td>
        </tr>
        <tr className="compare-row">
          <td>Guaranteed prompt response</td>
          <td><img className="img" alt="" src={agree} /></td>
          <td><img className="img" alt="" src={agree} /></td>
          <td><img className="img" alt="" src={cancel} /></td>
        </tr>
        <tr>
          <td></td>
          <td colSpan="3">Guaranteed confidentiality</td>
        </tr>
        <tr>
          <td>Guaranteed confidentiality</td>
          <td><img className="img" alt="" src={agree} /></td>
          <td><img className="img" alt="" src={agree} /></td>
          <td><img className="img" alt="" src={agree} /></td>
        </tr>
        <tr>
          <td></td>
          <td colSpan="3">Financial guarantee of confidentiality</td>
        </tr>
        <tr className="compare-row">
          <td>Financial guarantee of confidentiality</td>
          <td><img className="img" alt="" src={cancel} /></td>
          <td><img className="img" alt="" src={agree} /></td>
          <td><img className="img" alt="" src={cancel} /></td>
        </tr>
        <tr>
          <td></td>
          <td colSpan="3">Hourly payment</td>
        </tr>
        <tr>
          <td>Hourly payment</td>
          <td>49 €</td>
          <td>0 €</td>
          <td>59 €</td>
        </tr>
        <tr>
          <td></td>
          <td colSpan="3">Minimum time for performing work on site</td>
        </tr>
        <tr className="compare-row">
          <td>Minimum time for performing work on site</td>
          <td>1 hour</td>
          <td><img className="img" alt="" src={minus} /></td>
          <td>1 hour</td>
        </tr>
        <tr>
          <td></td>
          <td colSpan="3">Minimum time for performing work in remote mode</td>
        </tr>
        <tr>
          <td>Minimum time for performing work in remote mode</td>
          <td>0,25 hour</td>
          <td><img className="img" alt="" src={minus} /></td>
          <td>0,25 hour</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default ServicePlan;