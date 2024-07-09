import './Styles/index.css';
import React from 'react';
import usePreventActions from './Hooks/usePreventActions';

function App() {
  usePreventActions();
  return (
    <>
    <h1>Dima Ul Turnory</h1>
    </>
  );
}

export default App;
