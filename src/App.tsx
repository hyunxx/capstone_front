import React from 'react';
import './App.css';
import List from './list';
import { Route, Routes } from 'react-router-dom';
import View from './view';
import Write from './write';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/view" element={<View />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </div>
  );
}

export default App;