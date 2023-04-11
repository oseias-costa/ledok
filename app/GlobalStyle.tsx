"use client";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  border: none;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

h1 {
  font-family: var(--font-lemon-milk);
  font-weight: 300;
  color: #FEFEFE;
  font-size: 32px;
}

h2 {
  font-family: var(--font-lemon-milk);
  font-weight: 300;
  color: #221F20;
}

h3 {
  font-family: var(--font-lemon-milk);
  font-weight: 500;
  color: #ee1b23;
  font-size: 12pt;
}


p {
  font-family: var(--font-roboto)
}
`;
