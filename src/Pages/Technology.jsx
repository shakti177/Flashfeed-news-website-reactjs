import React from "react";
import Posts from "../Components/Posts/Posts";
import Loader from "../Components/Loader/Loader";

const Technology = ({ newsData, isLoading, loadMoreNews }) => {
  const CategoryItems = Array.isArray(newsData)
    ? newsData.filter((item) => item.category.includes("technology"))
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

export default Technology;
