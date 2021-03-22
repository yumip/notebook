import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import styled from "styled-components";

const NoteStyle = styled.div`
  position: relative;
  background: #fff;
  border-radius: 7px;
  box-shadow: 0 2px 5px var(--gray);
  padding: 15px;
  width: 240px;
  margin: 16px;

  h1 {
    font-size: 1.3rem;
    margin-bottom: 6px;
    white-space: pre-wrap;
    word-wrap: break-word;
    color: var(--dark);
  }

  p {
    display: block;
    font-size: 1.1rem;
    padding-bottom: 16px;
    margin-bottom: 25px;
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  button {
    position: absolute;
    bottom: 0;
    right: 15px;
    margin-right: -11px;
    color: var(--light);
    background-color: #fff;
    border: none;
    width: 36px;
    height: 36px;
    cursor: pointer;
    outline: none;
  }
  @media only screen and (max-width: 768px) {
    width: 480px;
  }
`;

export default function Note(props) {
    function handleClick(){
        props.onDelete(props.id);
    }

    return (
      <NoteStyle>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleClick}>
          <DeleteIcon />
        </button>
      </NoteStyle>
    );
    }