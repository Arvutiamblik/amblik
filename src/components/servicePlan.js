import React from "react";
import agree from "../images/agree.png";
import cancel from "../images/cancel.png";
import minus from "../images/minus.png";

const ServicePlan = () => (
  <div className="row">
    <div className="col-md-4 col-sm-12">
      <div className="comparison-card card text-center">
        <div className="card-header">
          <div className="card-title">Prepaid time</div>
          <div className="card-text">All services are provided at a reduced rate</div>
        </div>
        <div className="card-body">
          <div className="card-title">Montly fee</div>
          <div className="card-text">117 € / month</div>
        </div>
        <div className="card-body">
          <div className="card-title">Guaranteed prompt response</div>
          <div className="card-text">
            <img className="img" alt="" src={agree} />
          </div>
        </div>
        <div className="card-body">
          <div className="card-title">Guaranteed confidentiality</div>
          <div className="card-text">
            <img className="img" alt="" src={agree} />
          </div>
        </div>
        <div className="card-body">
          <div className="card-title">Financial guarantee of confidentiality</div>
          <div className="card-text">
            <img className="img" alt="" src={cancel} />
          </div>
        </div>
        <div className="card-body">
          <div className="card-title">Hourly payment</div>
          <div className="card-text">49 € for additional time</div>
        </div>
        <div className="card-body">
          <div className="card-title">Minimum time for performing work on site</div>
          <div className="card-text">1 hour</div>
        </div>
        <div className="card-body">
          <div className="card-title">Minimum time for performing work in remote mode</div>
          <div className="card-text">0,25 hour</div>
          <button id="itButton" type="button" className="btn btn-primary">
            <strong>Saada pääring</strong>
          </button>
        </div>
      </div>
    </div>
    <div className="col-md-4 col-sm-12">
      <div className="comparison-card card text-center">
        <div className="card-header">
          <div className="card-title">Prepaid time</div>
          <div className="card-text">All services are provided at a reduced rate</div>
        </div>
        <div className="card-body">
          <div className="card-title">Montly fee</div>
          <div className="card-text">117 € / month</div>
        </div>
        <div className="card-body">
          <div className="card-title">Guaranteed prompt response</div>
          <div className="card-text">
            <img className="img" alt="" src={agree} />
          </div>
        </div>
        <div className="card-body">
          <div className="card-title">Guaranteed confidentiality</div>
          <div className="card-text">
            <img className="img" alt="" src={agree} />
          </div>
        </div>
        <div className="card-body">
          <div className="card-title">Financial guarantee of confidentiality</div>
          <div className="card-text">
            <img className="img" alt="" src={cancel} />
          </div>
        </div>
        <div className="card-body">
          <div className="card-title">Hourly payment</div>
          <div className="card-text">49 € for additional time</div>
        </div>
        <div className="card-body">
          <div className="card-title">Minimum time for performing work on site</div>
          <div className="card-text">1 hour</div>
        </div>
        <div className="card-body">
          <div className="card-title">Minimum time for performing work in remote mode</div>
          <div className="card-text">0,25 hour</div>
          <button id="itButton" type="button" className="btn btn-primary">
            <strong>Saada pääring</strong>
          </button>
        </div>
      </div>
    </div>
    <div className="col-md-4 col-sm-12">
      <div className="comparison-card card text-center">
        <div className="card-header">
          <div className="card-title">Prepaid time</div>
          <div className="card-text">All services are provided at a reduced rate</div>
        </div>
        <div className="card-body">
          <div className="card-title">Montly fee</div>
          <div className="card-text">117 € / month</div>
        </div>
        <div className="card-body">
          <div className="card-title">Guaranteed prompt response</div>
          <div className="card-text">
            <img className="img" alt="" src={agree} />
          </div>
        </div>
        <div className="card-body">
          <div className="card-title">Guaranteed confidentiality</div>
          <div className="card-text">
            <img className="img" alt="" src={agree} />
          </div>
        </div>
        <div className="card-body">
          <div className="card-title">Financial guarantee of confidentiality</div>
          <div className="card-text">
            <img className="img" alt="" src={cancel} />
          </div>
        </div>
        <div className="card-body">
          <div className="card-title">Hourly payment</div>
          <div className="card-text">49 € for additional time</div>
        </div>
        <div className="card-body">
          <div className="card-title">Minimum time for performing work on site</div>
          <div className="card-text">1 hour</div>
        </div>
        <div className="card-body">
          <div className="card-title">Minimum time for performing work in remote mode</div>
          <div className="card-text">0,25 hour</div>
          <button id="itButton" type="button" className="btn btn-primary">
            <strong>Saada pääring</strong>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default ServicePlan;