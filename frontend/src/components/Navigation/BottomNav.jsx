import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const NavBar = styled.nav`
  .bottom_navbar {
    width: 100%;
    height: 45px;
    padding: 2rem 0rem 0rem 2rem;
  }

  .bottom_navbar .navbar-list {
    width: 100%;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4.8rem;

    li {
      list-style: none;

      .navbar-link {
        color: #02bb15;
        text-decoration: none;
        font-size: 1.5rem;
        position: relative;

        ::after {
          content: "";
          position: absolute;
          background-color: #00ff1b;
          height: 3px;
          width: 0;
          left: 0;
          bottom: -10px;
          transition: 0.3s;
        }

        :hover::after {
          width: 100%;
        }

        &:hover,
        &:active {
          color: #00ff1b;
        }
      }
    }

    .animation {
      position: absolute;
      height: 100%;
      top: 0;
      z-index: 0;
      background-color: #93969b;
      width: 100px;
      border-radius: 8px;
      transition: all 0.5s ease 0s;
    }
  }
`;

const BottomNav = () => {
   const state = JSON.parse(window.localStorage.getItem("currentUser"));
   var savedArticles;
   if (state!==null){
    savedArticles = <NavLink className="navbar-link" to="/bookmarks">
    Saved Articles
  </NavLink>;
   }
  return (
    <NavBar>
      <div className="bottom_navbar">
        <ul className="navbar-list">
          <li>
            <NavLink className="navbar-link" aria-current="page" to="/general">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/business">
              Business
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/technology">
              Technology
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/science">
              Science
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/sports">
              Sports
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/entertainment">
              Entertainment
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/health">
              Health
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link">
             {savedArticles}
            </NavLink>
          </li>
          
        </ul>
        <div className="animation"></div>
      </div>
    </NavBar>
  );
};

export default BottomNav;
