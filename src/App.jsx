import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from './components/Hero';
import Experience from './components/Experience';
import MainLayout from './components/MainLayaout';
import Projects from './components/Projects';


function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<Hero />} />
        </Route>
      </Routes>

    </Router>
  );
}

export default App;