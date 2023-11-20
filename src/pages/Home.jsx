import React from 'react';
import styled from 'styled-components';
import Header from 'components/Header';
import Form from 'components/Form'
import { useState } from 'react';
import Fanletter from 'components/Fanletter';


const Container = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
`;

function Home() {
  const [heroes, setHeroes] = useState("IronMan");
  return (
    <Container>
          <Header heroes={heroes} setHeroes={setHeroes}/>
          <Form />
          <Fanletter heroes={heroes}/>
    </Container>
  )
}

export default Home