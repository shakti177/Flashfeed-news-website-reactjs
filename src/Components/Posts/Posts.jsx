import React, { useState } from "react";
import "./Posts.css";
import flashfeed from "../../Assets/flashfeed.jpg";

const Posts = ({ newsData, loadMoreNews }) => {
  // console.log(newsData);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = async () => {
    setIsLoading(true);
    await loadMoreNews();
    setIsLoading(false);
  };

  return (
    <div>
      <div className="postMainContainer">
        {newsData.map((data, index) => (
          <div key={index} className="postContainer">
            <div>
              <div className="post_image_container">
                <img src={data.image_url ? data.image_url : flashfeed} alt="" />
              </div>
              <h2>{data.title}</h2>
              <h5>{data.pubDate.split(" ")[0]}</h5>

              <p>
                {data.description
                  ? data.description
                  : "Description is not Available for this News"}
              </p>
            </div>
            <div class="options">
              <h4 style={{ color: "red" }}>{data.category}</h4>
              <span>
                <a href={data.link}>Read More</a>
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="postButtonContainer">
        <button onClick={handleLoadMore} className="postButton">
          {isLoading ? <div className="loading"></div> : "Load More"}
        </button>
      </div>
    </div>
  );
};

export default Posts;
