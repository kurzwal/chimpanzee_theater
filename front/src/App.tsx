import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";

import HomePage from './view/HomePage';
import NotFound from './view/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
