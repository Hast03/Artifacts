import React from "react";
import styled from "styled-components";
import { bookmarks } from "./service/api";
import { AiFillStar } from "react-icons/ai";

const News = styled.div`
  .image img {
    display: block;
    width: 100%;
    object-fit: cover;
    position: relative;
  }

  .news-body {
    padding: 1rem;
  }

  .news-title {
    margin-bottom: 1rem;

    &:hover,
    &:active {
      color: ${({ theme }) => theme.colors.white};
    }

    h4 {
      font-size: 1.25rem;
    }
  }

  .news-date {
    margin-bottom: 1rem;
  }

  .rounded-pill {
    background-color: #3c4043;
    padding: 5px;
    padding-left: 8px;
    padding-right: 8px;
    border-radius: 1rem;
  }

  .bookmarkIcon {
    position: absolute;
    top: 0;
    right: 0;
    background-color: #fff;
    width: 45px;
    height: 40px;
    cursor: pointer;
    border-radius: 5px;
    padding: 7px;
    margin: 1rem;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  }

  .articleBtn {
    background-color: transparent;
    border: 0;
    outline: 0;
  }
`;

const NewsItem = (props) => {
  let { title, description, imgUrl, newsUrl, author, date } = props;

  const state = JSON.parse(window.localStorage.getItem("currentUser")); /// getting user object from window local storage
  const bookMarkedNews = {
    name: state !== null ? state.name : null,
    email: state !== null ? state.email : null,
    author: author,
    content: description,
    date: date,
    imageUrl: imgUrl,
    readMoreUrl: newsUrl,
    time: date,
    title: title,
    url: newsUrl,
  };

  return (
    <News className="news">
      <div className="image">
        <a href={newsUrl} target="_blank">
          <img
            src={
              !imgUrl
                ? "https://149469702.v2.pressablecdn.com/wp-content/uploads/2019/02/Marketplace-Lending-News.jpg"
                : imgUrl
            }
            className="news-img"
            alt="..."
          />
        </a>
        <button
          className="articleBtn"
          onClick={() => {
            if (bookMarkedNews.name) {
              bookmarks(bookMarkedNews);
            } else {
              alert("Please Login First");
            }
          }}
        >
          <AiFillStar
            className="bookmarkIcon"
            id="bookmark"
            style={{ color: "#172b4d" }}
          />
        </button>
      </div>

      <div className="news-body">
        <div className="news-title">
          <a href={newsUrl} target="_blank" className="newsTitle">
            <h4 style={{ color: "#00ff1b" }}>{title}</h4>
          </a>
        </div>

        <div className="news-des">
          <span className="badge rounded-pill">
            By {!author ? "Unknown" : author}
          </span>
          <p className="news-text news-date">
            <small className="text-muted">{new Date(date).toGMTString()}</small>
          </p>
          <p className="news-text" style={{ color: "#bdc1c6" }}>
            {description}
          </p>
        </div>
      </div>
    </News>
  );
};

export default NewsItem;
