import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  background-color: #867070;
  height: 4rem;
  font-size: 3rem;
  padding-left: 3rem;
  font-family: "Indie Flower", cursive;
  color: #f5ebeb;
  font-weight: bold;
  box-shadow: 0px 0px 14px 5px #e4d0d0;
`;

function Header() {
  return <StyledHeader>todo</StyledHeader>;
}

export default Header;
