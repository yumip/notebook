import React from "react";
import styled from "styled-components";

const HeaderStyles = styled.div`
  background-color: var(--light);
  box-sizing:border-box;
  margin: 0px -16px;
  padding: 16px 32px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  height:5rem;
  position: sticky;
  z-index: 100;
  top: 0px;

    h1 {
    color: #fff;
    font-family: "McLaren", cursive;
    font-weight: 200;
    }

}
`;

export default function Header(){
    return (
      <HeaderStyles>
        <h1>Notebook</h1>
      </HeaderStyles>
    );
} 