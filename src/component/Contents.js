import React, { useState }  from "react";
import styled from "styled-components";
import Note from "./Note";
import CreateArea from "./CreateArea";


const ContentsStyles = styled.div`
  .contents{
   min-height: calc(100vh - 9.5rem);
  }
  .notes {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  @media only screen and (max-width: 768px) {
  .notes {
      justify-content: center;
    }
  }
`;

function Contents() {

     const [notes, setNotes] = useState([]);

     function addNote(newNote) {
       setNotes((prevNotes) => {
         return [...prevNotes, newNote];
       });
     }

     function deleteNote(id) {
       setNotes((prevNotes) => {
         return prevNotes.filter((noteItem, index) => {
           return index !== id;
         });
       });
     }   
    return (
      <ContentsStyles>
        <div className="contents">
          <CreateArea onAdd={addNote} />
          <div className="notes">
            {notes.map((noteItem, index) => {
              return (
                <Note
                  key={index}
                  id={index}
                  title={noteItem.title}
                  content={noteItem.content}
                  onDelete={deleteNote}
                />
              );
            })}
          </div>
        </div>
      </ContentsStyles>
    );
}

export default Contents
