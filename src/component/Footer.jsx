import React from "react";
import styled from "styled-components";
const FooterStyles = styled.div`
  box-sizing:border-box;
  text-align: center;
  width: 100%;
  padding-top: 0.5rem;
  height: 2.5rem;
  p {
  color: var(--gray);
    }
}`;

export default function Footer() {
    const year = new Date().getFullYear();
    return (
      <FooterStyles>
        <p> Yumi Patton @ {year} </p>
      </FooterStyles>
    );
    }