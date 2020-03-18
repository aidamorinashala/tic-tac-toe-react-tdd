import React from 'react';
import { Header } from './components/Header';
import styled from 'styled-components';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

function App() {
  return (
    <Main>
      <Header title="TIC TAC TOE" />
    </Main>
  );
}

export default App;
