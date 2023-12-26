import React, { useEffect, useState } from "react";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import BreakingNews from "./Pages/BreakingNews";
import World from "./Pages/World";
import Entertainment from "./Pages/Entertainment";
import Technology from "./Pages/Technology";
import Sports from "./Pages/Sports";
import Business from "./Pages/Business";

const App = () => {
  const [newsData, setNewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [nextPageId, setNextPageId] = useState(null);

  const fetchData = async (pageID = null) => {
    try {
      let url = `https://newsdata.io/api/1/news?apikey=pub_33625bf9d8fce768253c2a6d9a150de7a3252&language=en&country=in&prioritydomain=top`;

      if (pageID) {
        url += `&page=${pageID}`;
      }

      const response = await fetch(url);
      const data = await response.json();

      if (data && data.results && Array.isArray(data.results)) {
        setNewsData((prevNews) => [...prevNews, ...data.results]);
        setNextPageId(data.nextPage);
      }
      setIsLoading(false);
    } catch (error) {
      console.log("Error in Fetching Data - ", error);
    }
  };

  const loadMoreNews = async () => {
    if (nextPageId) {
      try {
        const newData = await fetchData(nextPageId);
        if (newData.results && Array.isArray(newData.results)) {
          setNewsData((prevNews) => [...prevNews, ...newData.results]);
          setNextPageId(newData.nextPage);
        }
      } catch (error) {
        console.log("Error in Fetching More Data - ", error);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                newsData={newsData}
                isLoading={isLoading}
                loadMoreNews={loadMoreNews}
              />
            }
          />
          <Route
            path="/breakingNews"
            element={
              <BreakingNews
                newsData={newsData}
                isLoading={isLoading}
                loadMoreNews={loadMoreNews}
              />
            }
          />
          <Route
            path="/world"
            element={
              <World
                newsData={newsData}
                isLoading={isLoading}
                loadMoreNews={loadMoreNews}
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <Entertainment
                newsData={newsData}
                isLoading={isLoading}
                loadMoreNews={loadMoreNews}
              />
            }
          />
          <Route
            path="/technology"
            element={
              <Technology
                newsData={newsData}
                isLoading={isLoading}
                loadMoreNews={loadMoreNews}
              />
            }
          />
          <Route
            path="/sports"
            element={
              <Sports
                newsData={newsData}
                isLoading={isLoading}
                loadMoreNews={loadMoreNews}
              />
            }
          />
          <Route
            path="/business"
            element={
              <Business
                newsData={newsData}
                isLoading={isLoading}
                loadMoreNews={loadMoreNews}
              />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
