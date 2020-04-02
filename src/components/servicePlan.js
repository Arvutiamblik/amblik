import React from "react";
import ItSupportServicePlan from "./servicePlans/itSupportServicePlan";

const ServicePlan = ({ itSupportServicePlans }) => {
  return (
    <div className="comparison">
     
        <ItSupportServicePlan itSupportServicePlans={itSupportServicePlans} />
      
    </div>
  )
};

export default ServicePlan;