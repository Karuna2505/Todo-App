import React from "react";
import styled from "styled-components";

const Styledfooter = styled.footer`
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  height: 3rem;
  font-size: 1.5rem;
  width: 100%;
  padding-top: 1rem;
  background-color: #e4d0d077;
  box-shadow: 0px 0px 14px 5px #e4d0d0;
`;

function Footer() {
  const year = new Date().getFullYear();
  return <Styledfooter>Copyright ©️ {year} Karuna</Styledfooter>;
}

export default Footer;
