import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* font-family: 'Work Sans', sans-serif; */
    font-family: 'Poppins', sans-serif;
  }
  
  body {
    background: ${({ theme }) => theme.colors.dark_body};
    color: white;
    min-height: 100%;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }

  a{
    color: black;
    display: inline-block;
    text-decoration: none;
  }

  h1 {
    color: white; 
    text-align: center;
    font-size: 2.5rem;
    font-weight: 500;
  }
  
  h2 {
    font-weight: 500;
    font-size: 1.5rem;
  }
`;
