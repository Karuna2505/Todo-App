import React from "react";
import deleteicon from "../Assets/trash.png";
import styled from "styled-components";

const Styledul = styled.ul`
  padding: 1rem;
  list-style: none;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  margin-bottom:1rem;
  font-size: 1.5rem;
  width: auto;
  color: #867070;
  font-weight: bold;
  font-family: "Indie Flower", cursive;
`;

const StyledButton = styled.button`
  border-radius: 1rem;
  background-color: #e4d0d0;
  :hover {
    background-color: #867070;
  }
  border-width: 0;
  width: 2rem;
  height: 2rem;
`;

const StyledInput = styled.input`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1rem;
`;

function ListItems({ listitems, setlistitems }) {
  // ✅ Handle checkbox toggle
  function handleCheckboxChange(index) {
    const updatedList = listitems.map((item, i) =>
      i === index ? { ...item, checked: !item.checked } : item
    );

    setlistitems(updatedList);
  }

  function handleDelete(index) {
    const updatedList = listitems.filter((_, i) => i !== index);
    setlistitems(updatedList);
  }

  return (
    <>
      {listitems.length ? (
        <Styledul>
          {listitems.map((item, index) => (
            <StyledDiv key={index}>
              <StyledInput
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheckboxChange(index)}
              />
              <li style={{ marginRight: "1rem" }}>{item.text}</li>
              <StyledButton onClick={() => handleDelete(index)}>
                <img style={{ height: "1rem" }} src={deleteicon} alt="delete" />
              </StyledButton>
            </StyledDiv>
          ))}
        </Styledul>
      ) : null}
    </>
  );
}

export default ListItems;
