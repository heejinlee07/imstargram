import React from 'react';
import Test from './components/Test';
import SvgTest from './styles/SvgTest';
import Posts from './components/Posts';
import GlobalStyles from './styles/GlobalStyles';
import MainRouter from './router/MainRouter';

function App() {
  return (
    <div>
      <MainRouter />
      <Test />
      <SvgTest />
      <Posts />
      <GlobalStyles />
    </div>
  );
}

export default App;
