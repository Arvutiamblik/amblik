import React from "react";

const ShopCardGrid = ({ gridItems }) => (
  <div className="container">
    <div className="row">
      {gridItems.map((item, index) =>
        index % 2 === 0 ? (
          <ShopCard item={item} />
        ) : (
          [<ShopCard item={item} />, <div className="w-100" />]
        )
      )}
    </div>
  </div>
);
export const ShopCard = ({ item }) => (
  <div className="col">
    <div className="serviceBox">
      <div className="service-icon">
        <div className="fa fa-money" />
      </div>
      <h3 className="ShopName">{item.ShopName}</h3>
      <p className="InfoDescription">{item.InfoDescription}</p>
      <button type="HomeButton" class="btn btn-primary">
        <strong>{item.HomeButton}</strong>
      </button>
    </div>
  </div>
);

export default ShopCardGrid;