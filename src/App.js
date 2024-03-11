import './App.css';
import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayoutDefault from './components/Layout';
import Home from './pages/Home';
import Topic from './pages/Topic';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutDefault />} >
            <Route path="/" element={<Home/>}/>
            <Route path="/topic" element={<Topic />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
          </Route>
        </Routes>
    </BrowserRouter >
  );
}

export default App;
