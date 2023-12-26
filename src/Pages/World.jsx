import React from "react";
import Loader from "../Components/Loader/Loader";
import Posts from "../Components/Posts/Posts";

const World = ({ newsData, isLoading, loadMoreNews }) => {
  const CategoryItems = Array.isArray(newsData)
    ? newsData.filter((item) => item.category.includes("world"))
    : [];
  return (
    <section>
      {isLoading ? (
        <Loader />
      ) : (
        <Posts newsData={CategoryItems} loadMoreNews={loadMoreNews} />
      )}
    </section>
  );
};

export default World;
