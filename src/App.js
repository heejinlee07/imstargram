import React from 'react';
import Test from './components/Test';
import SvgTest from './styles/SvgTest';
import Header from './components/header/Header';

function App() {
  return (
    <div>
      <Header />
      <h1>I'mstagram</h1>
      <Test />
      <SvgTest />
    </div>
  );
}

export default App;
