import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Layout from './components/layout/Layout';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={ <HomePage/>} />
        </Route>
      </Routes>
      
      
    </div>
  );
}

export default App;
