import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import styled from "styled-components";
import DateDay from "../DateDay";
import {BiSearchAlt2} from "react-icons/bi";

const Nav = styled.nav`
  .top_navbar {
    width: 100%;
    height: 65px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  a {
    text-decoration: none;
  }

  .logo {
    font-family: "M PLUS 1 Code", sans-serif;
    color: #00ff1b;
    font-size: 2.5rem;
    margin-right: 5rem;
  }

  .middle {
    margin-top: 1.5rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .searchbar {
    width: 50rem;
    border: 3px solid #3c4043;
    background: #3c4043;
    border-radius: 1rem;
  }

  .search_textbox {
    width: 45rem;
    height: 2.8rem;
    background: transparent;
    outline: 0;
    border: 0;
    color: #00ff1b;
    font-size: 1.2rem;

    &::placeholder {
      color: #00ff1b;
    }
  }

  .searchbtn {
    color: #00ff1b;
    font-size: 1.5rem;
    padding: 1rem;

    &:hover {
      background: #494d51;
      border-radius: 50%;
    }
  }

  .right {
    display: flex;
    align-items: center;
    align-content: center;
    margin: 0 1rem;

    .signinupbtn {
      font-family: "M PLUS 1 Code", sans-serif;
      font-size: 1.3rem;
      font-weight: bold;
      height: 3rem;
      width: fit-content;
      text-align: center;
      padding: 9px;
      margin: 1rem;
      background: transparent;
      color: #00ff1b;
      border: 1px solid #494d51;
      border-radius: 7px;
      cursor: pointer;

      &:hover,
      &:active {
        background: #494d51;
      }
    }
  }

  .darkmode_toggle {
    padding: 1rem;
    margin-left: 0.3rem;
    position: relative;
  }

  .moon_icon {
    color: white;
    font-size: 1.5rem;
    position: absolute;
    top: 4px;
    right: 4px;
    cursor: pointer;
  }

  .profilebtn {
    margin: 1rem;
  }
`;

const TopNav = ({ onSearch }) => {
  const [loginUser, setLoginUser] = useState({});
  const currentUser = JSON.parse(window.localStorage.getItem("currentUser")); // getting login user

  const auth  = localStorage.getItem('user');
  const navigate = useNavigate();
  const logout = () =>{
    localStorage.clear();
    navigate('/')
  }

  return (
    <>
      <Nav>
        <div className="top_navbar">
           {/*<DateDay />*/}
          <NavLink className="logo_link left" to="/">
            <span className="logo">&lt;/artifacts&gt;</span>
          </NavLink>

          <div className="searchbar middle">
          <a href="#" className="searchbtn">
              <BiSearchAlt2 className="search_icon" />
            </a>
            <input
              className="search_textbox"
              type="search"
              placeholder={"Search for topics"}
              onChange={(e) => {onSearch(e.target.value)}}
          />

           {/*<FirstSection className="firstSection">
            <h2 className="briefing" style={{ color: "#00ff1b" }}>
              Today<br></br>
              <DateDay />
            </h2>
            <Weather />
</FirstSection>*/}
          </div>

          <div className="right">
           { auth ? <NavLink 
              // onClick={logout}
              to={'/'}
              className="signinupbtn"
            >
              {currentUser && currentUser._id ? currentUser.name : "Login"}
            </NavLink>
            :
            <NavLink
              to={'/login'}
              onClick={logout}
              className="signinupbtn"
            >
              {currentUser && currentUser._id ? currentUser.name : "Login"}
            </NavLink>
            } 
          </div>
        </div>
      </Nav>
    </>
  );
};

export default TopNav;
