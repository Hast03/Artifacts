import React from "react";
import TopNav from "./TopNav";
import BottomNav from "./BottomNav";
import styled from "styled-components";

const MainHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 999;

  ::before {
    content: "";
    background-color: ${({ theme }) => theme.colors.bgcolor};
    position: absolute;
    height: 135%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

const Header = ({ onSearch }) => {
  return (
    <MainHeader>
      <TopNav onSearch={onSearch} />
      <BottomNav />
    </MainHeader>
  );
};

export default Header;
