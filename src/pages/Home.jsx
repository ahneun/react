import React from 'react';
import styled from 'styled-components';
import Header from 'components/Header';
import Navigation from 'components/Navigation';
import Form from 'components/form';

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

function home({heroesClearS, addForms}) {
  return (
    <Container>
          <Header/>
          <Navigation heroesClear={heroesClearS}/>
          <Form addForm={addForms}/>
    </Container>
  )
}

export default home