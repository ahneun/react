import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0%;

  img {
    position: relative;
    background-size: 25%;
    width: 100%;
    height: 300px;
    display: block;
  }
`;

function Header() {
  return (
    <Container>
      <img src="/aven1.jpg" alt="" />
    </Container>
  );
}

export default Header;
