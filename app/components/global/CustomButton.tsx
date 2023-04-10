import styled from "styled-components";

export const CustomButton = styled("a")<{headline: boolean}>`
  padding-top: 6px;
  padding-bottom: 6px;
  padding-right: 20px;
  padding-left: 20px;
  color: #fefefe;
  font-family: var(--font-lemon-milk);
  font-size: 10pt;
  text-decoration: none;
  background: #ee1b23;
  border: 1px solid #ee1b23;
  transition: 0.2s linear;
  cursor: pointer;

  &:hover {
    background: transparent;
    color: ${props => props.headline ? '#fefefe' : '#ee1b23'};
  }

  @media(max-width: 740px){
    padding-top: 10px;
    padding-bottom: 10px;
    display: block;
  }
`;
