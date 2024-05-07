import { useEffect } from 'react';
import './App.css';
import * as Wasm from 'wasm';

const App = () => {
  useEffect(() => {
    console.log(Wasm)
  }
  , []);
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
    </div>
  );
};

export default App;
