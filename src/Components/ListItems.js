import React from "react";
import deleteicon from "../Assets/trash.png";
import styled from "styled-components";

const Styledul = styled.ul`
  padding: 1rem;
  box-shadow: 0px 0px 14px 5px #e4d0d0;
  padding-bottom: 3rem;
  margin-top: 3rem;
`;

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

const StyledButton = styled.button`
  border-radius: 1rem;
  background-color: #e4d0d0;
  :hover {
    background-color: #867070;
  }
  border-width: 0;
  width: 3%;
`;

function ListItems(props) {
  let listitems = props.listitems;
  let setlistitems = props.setlistitems;

  function handleDelete(item) {
    setlistitems(listitems.filter((i) => i !== item));
  }

  return (
    <>
      {listitems.length ? (
        <Styledul>
          {listitems.map((items) => (
            <StyledDiv key={items}>
              <li style={{ marginRight: "1rem" }}>{items}</li>
              <StyledButton variant="text" onClick={() => handleDelete(items)}>
                <img style={{ height: "1rem" }} src={deleteicon} alt="delete" />
              </StyledButton>
            </StyledDiv>
          ))}
        </Styledul>
      ) : (
        <></>
      )}
    </>
  );
}

export default ListItems;
