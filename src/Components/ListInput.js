import React, { useRef, useState } from "react";
import styled from "styled-components";
import ListItems from "./ListItems";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  font-size: 2rem;
  width: auto;
  color: #867070;
  font-weight: bold;
  font-family: "Indie Flower", cursive;
`;

const StyledInput = styled.input`
  border-radius: 3rem;
  text-align: center;
  margin-right: 1rem;
  width: 20rem;
  font-size: 1.5rem;
`;

const Styledbutton = styled.button`
  background-color: #e4d0d0;
  :hover {
    background-color: #867070;
  }
  border-width: 0;
  border-radius: 2rem;
  font-size: 1.5rem;
  padding: 0 1rem 0 1rem;
  font-family: "Kalam";
`;

function ListInput() {
  const [value, setvalue] = useState("");
  const [listitems, setlistitems] = useState([]);

  const ss = useRef();
  function handleChange(event) {
    const currentValue = event.target.value;
    setvalue(currentValue);
  }
  function handleClick() {
    ss.current.value = "";
    value && setlistitems((prevValue) => [...prevValue, value]);
    setvalue(null);
  }

  return (
    <>
      <StyledDiv>
        <StyledInput
          ref={ss}
          onChange={handleChange}
          type="text"
          placeholder="Enter"
        />
        <Styledbutton onClick={handleClick}>Add</Styledbutton>
      </StyledDiv>

      <ListItems listitems={listitems} setlistitems={setlistitems} />
    </>
  );
}

export default ListInput;
