import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import MainRouter from './router/MainRouter';
import Header from './components/header/Header';

function App() {
  return (
    <div>
      <Header />
      <MainRouter />
      <GlobalStyles />
    </div>
  );
}

export default App;
