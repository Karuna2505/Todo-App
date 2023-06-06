import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import deleteicon from "../Assets/trash.png";

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
  font-size:1.5rem;
`;

const Styledul = styled.ul`
  padding: 1rem;
  box-shadow: 0px 0px 14px 5px #e4d0d0;
  padding-bottom: 3rem;
  margin-top: 3rem;
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
    console.log(ss.current.value);
    ss.current.value = "";
    value && setlistitems((prevValue) => [...prevValue, value]);
    setvalue(null);
  }

  function handleDelete(item) {
    setlistitems(listitems.filter((i) => i !== item));
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
        <Button
          sx={{
            backgroundColor: "#E4D0D0",
            ":hover": {
              backgroundColor: "#867070",
            },
            color: "black",
          }}
          onClick={handleClick}
          style={{
            borderRadius: "2rem",
            fontSize: "1.5rem",
            padding: "0 1rem 0 1rem",
            fontFamily: "Kalam",
          }}
        >
          Add
        </Button>
      </StyledDiv>

      {listitems.length ? (
        <Styledul>
          {listitems.map((items) => (
            <StyledDiv key={items}>
              <li style={{ marginRight: "1rem" }}>{items}</li>
              <Button
                sx={{
                  backgroundColor: "#E4D0D0",
                  ":hover": {
                    backgroundColor: "#867070",
                  },
                }}
                variant="text"
                onClick={() => handleDelete(items)}
                style={{ borderRadius: "2rem" }}
              >
                <img style={{ height: "1rem" }} src={deleteicon} alt="delete" />
              </Button>
            </StyledDiv>
          ))}
        </Styledul>
      ) : (
        <></>
      )}
    </>
  );
}

export default ListInput;
