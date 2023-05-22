import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from "./components/News";
import Header from "./components/Navigation/Header";
import Footer from "./components/Footer";
import { GlobalStyles } from "./components/styles/globalStyles";
import styled, { ThemeProvider } from "styled-components";
import Login from "./components/Login/Login";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Signup from "./components/Signup/Signup";
import "./App.css";

const theme = {
  colors: {
    dark_body: "#292a2d",
    text: "black",
    heading: "black",
    bgcolor: "#202124",
    white: "#fff",
    white_text: "#bdc1c6",
    black: " #212529",
    helper: "#8490ff",
    footer_bg: "#0a1435",
  },
  media: { mobile: "768px", tab: "998px" },
};

const App = () => {
  //const apiKey = "65d4556418d449108d2d4e9632cada8f";
   const apiKey = "4a1e521c3f244908bd83f3824251502c";
  const [progress, setProgress] = useState(0);
  const [search, setSearch] = useState('');
  const [loginUser, setLoginUser] = useState({});

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <div className="app">
          <Header onSearch={(q) => setSearch(q)} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="general"
                  country="in"
                  pageSize={18}
                  category="general"
                  q={search}
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="business"
                  country="in"
                  pageSize={18}
                  category="business"
                  q={search}
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="entertainment"
                  country="in"
                  pageSize={18}
                  category="entertainment"
                  q={search}
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="general1"
                  country="in"
                  pageSize={18}
                  category="general"
                  q={search}
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="health"
                  country="in"
                  pageSize={18}
                  category="health"
                  q={search}
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="science"
                  country="in"
                  pageSize={18}
                  category="science"
                  q={search}
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="sports"
                  country="in"
                  pageSize={18}
                  category="sports"
                  q={search}
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="technology"
                  country="in"
                  pageSize={18}
                  category="technology"
                  q={search}
                />
              }
            />

            <Route
              exact
              path="/login"
              element={<Login setLoginUser={setLoginUser} />}
            />

            <Route
              exact
              path="/bookmarks"
              element={<Bookmarks loginUser={loginUser} />}
            />

            <Route exact path="/signup" element={<Signup />} />

            <Route exact path="/" element={<News loginUser={loginUser} />} />
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
