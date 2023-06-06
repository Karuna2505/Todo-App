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
  padding-top:1rem;
  background-color:#E4D0D077;
`;

function Footer() {
  const year = new Date().getFullYear();
  return <Styledfooter>Copyright ©️ {year} Karuna</Styledfooter>;
}

export default Footer;
