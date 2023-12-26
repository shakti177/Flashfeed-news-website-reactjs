import React from "react";
import Loader from "../Components/Loader/Loader";
import Posts from "../Components/Posts/Posts";

const Business = ({ newsData, isLoading, loadMoreNews }) => {
  const CategoryItems = Array.isArray(newsData)
    ? newsData.filter((item) => item.category.includes("entertainment"))
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

export default Business;
