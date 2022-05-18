import React from 'react';

import GlobalStyles, { Container } from './assets/styles/global';
import { Section } from './components/Section';

import Header from './components/Header';
import { TravelCategories } from './components/TravelCategories';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Container>
        <Section />

        <TravelCategories />
      </Container>
    </>
  );
}

export default App;
