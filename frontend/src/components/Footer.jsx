import React from "react";
import styled from "styled-components";

const Foot = styled.div`
  background-color: ${({ theme }) => theme.colors.bgcolor};
  color: #00ff1b;
  text-align: center;
  margin-top: auto;
  width: 100%;
`;

const Container = styled.div`
  align-items: center;
  padding: 0.5rem;
`;

const Footer = () => {
  return (
    <Foot className="footer">
      <Container className="footer_container">
        Artifacts &copy; 2023<br></br>All rights reserved.
      </Container>
    </Foot>
  );
};

export default Footer;
