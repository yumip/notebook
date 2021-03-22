import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import styled from "styled-components";

const FormStyle = styled.div`

    position: relative;
    width: 480px;
    margin: 30px auto 20px auto;
    background: #fff;
    padding: 15px;
    border-radius: 7px;
    box-shadow: 0 1px 5px rgb(138, 137, 137);

  input {
    width: 100%;
    border: none;
    padding: 4px;
    outline: none;
    font-size: 1.5rem;
    font-weight: 500;
    font-family: inherit;
    resize: none;
  }
  textarea {
    width: 100%;
    border: none;
    padding: 4px;
    outline: none;
    font-size: 1.2em;
    font-family: inherit;
    resize: none;
  }

  button {
    position: absolute;
    right: 18px;
    bottom: -18px;
    background: #7891e2;
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    outline: none;
  }
`;

function CreateArea(props) {

    const[note, setNote]= useState({
        title: "",
        content: ""
    });

    function handleChange(event){
       const {name, value} = event.target;
       
       setNote(prevNote => {
           return {
           ...prevNote,
           [name]: value    
           }
       })
    }

    function submitNote(event){
        props.onAdd(note)
        setNote({
          title: "",
          content: "",
        });
        event.preventDefault();
    }


    return (
        <FormStyle>
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
          <textarea
            name="content"
            onChange={handleChange}
            placeholder="Take a note..."
            value={note.content}
            rows="3"
          />
          <button onClick={submitNote}>
            <AddIcon />
          </button>
        </FormStyle>
    );
}

export default CreateArea;