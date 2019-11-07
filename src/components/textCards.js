import React from "react";


const TextCardGrid = ({ gridItems }) => (
  <div className="container">
    <div className="row">
      {gridItems.map((item , index) => (
        index % 2 === 0 ? (
          <TextCard item={item} />
        ) : (
          [<TextCard item={item} />, <div className="w-100" />]
        )
        )
      )}
    </div>
  </div>
);
export const TextCard = ({ item }) => (
  <div className="col-lg-6 col-md-6 col-xs-12">
    <div className="serviceBox">
      <div className="service-icon">
        <div className="fa fa-money" />
      </div>
      <h3 className="title">{item.title[0].text}</h3>
      <hr align="left" width={140} size={2} color="hotpink" />
      <p className="description">{item.description[0].text}</p>
      <a href="blog">
        <button  type="button" class="btn btn-primary">
        <strong>{item.button[0].text}</strong> 
      </button> 
      </a>
    </div>
  </div>
);

export default TextCardGrid;
