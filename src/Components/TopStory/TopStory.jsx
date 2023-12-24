import React from "react";
import "./TopStory.css";
import flashfeed from "../../Assets/flashfeed.jpg";

const TopStory = ({ newsData }) => {
  const topCategoryItems = Array.isArray(newsData)
    ? newsData.filter(
        (item) =>
          item.category.includes("top") || item.category.includes("sports")
      )
    : [];
  return (
    <div className="topStories">
      <div className="bigBoxContainer">
        {topCategoryItems.slice(0, 1).map((newsItems, index) => (
          <div
            key={index}
            className="bigBox"
            style={{
              backgroundImage: `linear-gradient(0deg,rgba(0,0,0,0.7),rgba(0,0,0,0) 90%,rgba(0,0,0,0)),url(${
                newsItems.image_url ? newsItems.image_url : flashfeed
              })`,
            }}
          > 
            <div className="BoxContent">
              <div className="topStory_category">
                <div>{newsItems.category}</div>
              </div>
              <div className="topStory_title">
                <h2>{newsItems.title}</h2>
              </div>
              <div className="topStory_date">
                <p>{newsItems.pubDate}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="smallBoxContainer">
        {topCategoryItems.slice(1, 3).map((newsItems, index) => (
          <div
            key={index}
            className="smallBox"
            style={{
              backgroundImage: `linear-gradient(0deg,rgba(0,0,0,0.7),rgba(0,0,0,0) 90%,rgba(0,0,0,0)),url(${
                newsItems.image_url ? newsItems.image_url : flashfeed
              })`,
            }}
          >
            <div className="BoxContent">
              <div className="topStory_category">
                <div>{newsItems.category}</div>
              </div>
              <div className="topStory_title">
                <h2>{newsItems.title}</h2>
              </div>
              <div className="topStory_date">
                <p>{newsItems.pubDate}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopStory;
