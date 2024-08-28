import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const validCategories = [
          "business",
          "entertainment",
          "general",
          "health",
          "science",
          "sports",
          "technology",
        ];
        if (!validCategories.includes(category)) {
          throw new Error("Invalid category");
        }

        const apiKey = import.meta.env.VITE_NEWS_API_KEY;
        if (!apiKey) {
          throw new Error("API key is missing");
        }

        const url = `https://newsapi.org/v2/top-headlines?category=${category}&country=in&apiKey=${apiKey}`;
        const response = await fetch(url);

        if (!response.ok) {
          const responseBody = await response.json();
          throw new Error(
            responseBody.message || "Network response was not ok"
          );
        }

        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [category]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (articles.length === 0) return <p>No articles found.</p>;

  return (
    <div className="container">
      <h2 className="text-center mb-4">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      <div className="row">
        {articles.map((news) => (
          <div
            className="col-md-6 col-lg-4 d-flex align-items-stretch mb-4"
            key={news.url}
          >
            <NewsItem
              title={news.title}
              description={news.description}
              name={news.author || "Unknown"}
              url={news.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsBoard;
