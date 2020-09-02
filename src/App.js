import React from 'react';
import Test from './components/Test';
import SvgTest from './styles/SvgTest';
import Header from './components/header/Header';
import Posts from './components/Posts';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <div>
      <Header />
      <h1>I'mstagram</h1>
      <Test />
      <SvgTest />
      <Posts />
      <GlobalStyles />
    </div>
  );
}

export default App;
