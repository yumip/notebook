import React, {useState} from "react";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Footer from "./Footer";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  box-sizing:border-box;
  .content {
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


export default function App() {

    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes(prevNotes => {
           return [...prevNotes, newNote];
        })
    }

    function deleteNote(id){
        setNotes(prevNotes =>{
            return prevNotes.filter((noteItem, index)=>{
                return index !== id;
            })
        })
    }
    return (
      <Container>
          <Header />
          <div className="content">
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
        <Footer />
      </Container>
    );
}
