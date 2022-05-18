import React from 'react';

import GlobalStyles, { Container } from './assets/styles/global';
import { Section } from './components/Section';

import Header from './components/Header';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Container>
        <Section />
      </Container>
    </>
  );
}

export default App;
