import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

const Container = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  
  img {
    position: relative;
    background-size: 25%;
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

function Header({heroes, setHeroes}) {
  return (
    <Container>
      <img src="/aven1.jpg" alt="" />
      <Navigation heroes={heroes} setHeroes={setHeroes}/>
    </Container>
  );
}

export default Header;


