import React from "react";
import ItSupportServicePlan from "./servicePlans/itSupportServicePlan";

const ServicePlan = ({ itSupportServicePlans, uid }) => {
  return (
    <div className="comparison">
      {itSupportServicePlans._meta.uid === uid && 
        <ItSupportServicePlan itSupportServicePlans={itSupportServicePlans} />
      }
    </div>
  )
};

export default ServicePlan;