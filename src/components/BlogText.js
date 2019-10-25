import React from "react";
import blog from '../images/free.jpg'

const BlogCardGrid = ({ gridItems }) => (
    <div className="container">
      <div className="row">
        {gridItems.map((item) =>
            <BlogCard item={item} />
        )}
      </div>
    </div>
  );

 const BlogCard = ({ item }) => (
    <>
        <div className="main">
            <h1 id="blogHeader">{item.HeadText}</h1>
            <p id="BlogDate">{item.BlogTime}</p>
            <hr className="new1"></hr><br/>
        </div>  
        <p id="BlogText"><img src={blog} alt="blog" className="rightimg"/>{item.BlogTextCard}</p>

        <div className="text-md-center col-lg">
            <h1>Järgmine lugu</h1>
        </div>  
    </>
);

export default BlogCardGrid;
