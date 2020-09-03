import React from 'react';
import SvgTest from './styles/SvgTest';
import Posts from './components/Posts';
import GlobalStyles from './styles/GlobalStyles';
import MainRouter from './router/MainRouter';

function App() {
  return (
    <div>
      <MainRouter />
      <h1>I'mstagram</h1>
      <SvgTest />
      <Posts />
      <GlobalStyles />
    </div>
  );
}

export default App;
