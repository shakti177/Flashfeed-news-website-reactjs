import React from "react";
import "./Posts.css";

const Posts = ({ newsData, loadMoreNews }) => {
  return (
    <div>
      {newsData.map((data, index) => (
        <div key={index}>
          <h3>{data.title}</h3>
          <p style={{ color: "red" }}>{data.category}</p>
        </div>
      ))}
      <button onClick={loadMoreNews}>Load More</button>
    </div>
  );
};

export default Posts;
