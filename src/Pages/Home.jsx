import React, { useEffect, useState } from "react";
import Loader from "../Components/Loader/Loader";
import TopStory from "../Components/TopStory/TopStory";

const Home = () => {
  const [newsData, setNewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url =
          "https://newsdata.io/api/1/news?apikey=pub_33625bf9d8fce768253c2a6d9a150de7a3252&language=en&country=in&prioritydomain=top";

        const response = await fetch(url);
        const data = await response.json();

        setNewsData(data.results);
        setIsLoading(false);
      } catch (error) {
        console.log("Error in Fetching Data - ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <TopStory newsData={newsData} />
      {isLoading ? (
        <Loader />
      ) : (
        <ul>
          {Array.isArray(newsData) ? (
            newsData.map((newsItems, index) => (
              <div key={index}>
                <h1>{newsItems.title}</h1>
                <h3>{newsItems.category}</h3>
                <p>{newsItems.description}</p>
              </div>
            ))
          ) : (
            <p>No news data available</p>
          )}
        </ul>
      )}
    </section>
  );
};

export default Home;
