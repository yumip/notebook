import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import styled from "styled-components";

const NoteStyle = styled.div`
  position: relative;
  background: #fff;
  border-radius: 7px;
  box-shadow: 0 2px 5px #ccc;
  padding: 10px;
  width: 240px;
  margin: 16px;

  h1 {
    font-size: 1.3em;
    margin-bottom: 6px;
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  p {
    display: block;
    font-size: 1.1em;
    margin-bottom: 20px;
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  button {
    position: absolute;
    bottom: 0;
    right: 15px;
    margin-right: -10px;
    color: #7891e2;
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