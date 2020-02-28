import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Test } from './components/Test'

function App() {
  return (
    <div>
      <Test logo={logo}
        text="Edit src/App.tsx and save to reload."
        text2="Learn React"
        link="https://reactjs.org" />
    </div>
  );
}

export default App;
