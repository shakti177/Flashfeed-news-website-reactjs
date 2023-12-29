import React from "react";
import Loader from "../Components/Loader/Loader";
import Posts from "../Components/Posts/Posts";
import TopStory from "../Components/TopStory/TopStory";

const Home = ({ newsData, isLoading, loadMoreNews }) => {
  console.log(newsData);
  return (
    <section>
      <TopStory newsData={newsData} />
      {isLoading ? (
        <Loader />
      ) : (
        <Posts newsData={newsData} loadMoreNews={loadMoreNews} />
      )}
    </section>
  );
};

export default Home;
