import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Spinner from "./Spinner";
import NewsItem from "./NewsItem";
import propTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const Newz = styled.div`
  margin-top: 3rem;
  color: ${({ theme }) => theme.colors.white};
`;

const NewsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin-top: 2rem;

  .news-grid {
    display: grid;
    grid-gap: 3rem;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    align-items: start;
    margin: 0rem 2rem 2rem 2rem;
  }

  .news-grid-items {
    border-radius: 0.75rem;
    overflow: hidden;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
    transition: 0.2s;
  }

  .news-grid-items:hover {
    transform: translateY(-0.5%);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  }
`;

const News = (props, loginUser) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${props.page}&pageSize=${props.pageSize}&q=${props.q}`;
    setLoading(true);

    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${
      props.category.charAt(0).toUpperCase() + props.category.slice(1)
    } - Artifacts`;
    updateNews();
  }, [props.q]);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}&q=${props.q}`;
    setPage(page + 1);
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  return (
    <div className="container">
      <h1
        style={{ marginTop: "2.8rem", color: "#00ff1b" }}
        className="text-center"
      >
        Artifacts - Top{" "}
        {props.category.charAt(0).toUpperCase() + props.category.slice(1)}{" "}
        Headlines
      </h1>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={loading && <Spinner />}
      >
        <NewsContainer className="news-container">
          <div className="news-grid">
            {articles.map((element) => {
              return (
                <div key={element.url} className="news-grid-items">
                  <NewsItem
                    author={element.author}
                    date={element.publishedAt}
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                    article={element.article}
                    loginUser={loginUser}
                    key={element._id}
                  />
                </div>
              );
            })}
          </div>
        </NewsContainer>
      </InfiniteScroll>
    </div>
  );
};
News.defaultProps = {
  country: "in",

  category: "general",
};
News.propTypes = {
  country: propTypes.string,
  pageSize: propTypes.number,
  category: propTypes.string,
};

export default News;
