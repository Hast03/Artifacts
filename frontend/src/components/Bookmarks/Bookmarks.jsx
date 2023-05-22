import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { deleteBookmarks, getBookmarks } from "../service/api";
import { FaTrash } from "react-icons/fa";
import "./Bookmarks.css";

const Bookmark = (loginUser, saveNews) => {
  const [bookmarks, setBookmarks] = useState({});
  let [deleteBookmarksCount, setDeleteBookmarksCount] = useState(0);

  useEffect(() => {
    allBookmarks();
  }, [deleteBookmarksCount]);

  const allBookmarks = async () => {
    let response = await getBookmarks();
    console.log("response", response.data);
    setBookmarks(response.data);
  };
  const currentUser = JSON.parse(window.localStorage.getItem("currentUser"));
  return (
    <>
      <h1 className="heading">&lt;/saved_articles&gt;</h1>

      <h2 className="saved-news-header__title">
        {currentUser && currentUser.name}, your saved articles:
      </h2>

      {bookmarks.length > 0 &&
        bookmarks.map((bmNews) => {
          return (
            <>
              {bmNews.email === currentUser.email ? (
                <div key={bmNews.title} className="articleDiv">
                  <div className="article">
                    <Container>
                      <Row>
                        <Col md={4} xs={12}>
                          <a href={bmNews.readMoreUrl} target="_blank">
                            <img
                              src={bmNews.imageUrl}
                              alt={bmNews.title}
                              className="articleImage"
                            />
                          </a>
                        </Col>
                        <Col md={8} xs={12}>
                          <div className="article-body">
                            <a href={bmNews.readMoreUrl} target="_blank">
                              <h4 className="articleTitle">{bmNews.title}</h4>
                            </a>
                            <span className="articleAuthorTime badge rounded-pill">
                              By {bmNews.author} | {bmNews.date}{" "}
                            </span>
                            <p className="articleDesc">{bmNews.content}</p>

                            <div className="articleBtnDiv">
                              <button
                                className="articleBtn"
                                onClick={() => {
                                  deleteBookmarks(bmNews.email, bmNews.title);
                                  setDeleteBookmarksCount(
                                    (deleteBookmarksCount += 1)
                                  );
                                  alert("Bookmark Removed");
                                }}
                              >
                                <FaTrash
                                  style={{
                                    color: "#00ff1b",
                                  }}
                                />
                                &nbsp;Remove
                              </button>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </div>
              ) : (
                ""
              )}
            </>
          );
        })}
    </>
  );
};

export default Bookmark;
