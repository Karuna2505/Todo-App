import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ListItems from "./ListItems";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  font-size: 1rem;
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

const StyledButton = styled.button`
  background-color: #e4d0d0;
  :hover {
    background-color: #867070;
  }
  border-width: 0;
  border-radius: 2rem;
  font-size: 1.5rem;
  padding: 0 1rem;
  font-family: "Kalam", cursive;
`;

function ListInput() {
  const [listitems, setListItems] = useState(() => {
    return JSON.parse(localStorage.getItem("listItems")) || [];
  });

  const [value, setValue] = useState("");
  const inputRef = useRef();

  // ✅ Save to localStorage whenever listitems change
  useEffect(() => {
    localStorage.setItem("listItems", JSON.stringify(listitems));
  }, [listitems]);

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleClick() {
    if (value.trim() === "") return;

    const updatedList = [...listitems, { text: value, checked: false }];

    setListItems(updatedList);
    setValue("");
    inputRef.current.value = "";
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleClick();
    }
  }

  return (
    <>
      <StyledDiv>
        <StyledInput
          ref={inputRef}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          type="text"
          placeholder="Enter"
        />
        <StyledButton onClick={handleClick}>Add</StyledButton>
      </StyledDiv>

      <ListItems listitems={listitems} setlistitems={setListItems} />
    </>
  );
}

export default ListInput;
