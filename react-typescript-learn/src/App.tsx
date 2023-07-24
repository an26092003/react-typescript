import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Layout from './components/layout/Layout';
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import ProductPage from './pages/ProductPage/ProductPage';

import Detail from './components/pages/Detail/Detail';
import Card from './components/pages/Card_pay/Card/Card';
import Pay from './components/pages/Card_pay/Pay/Pay';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='product' element={<ProductPage />} />
          <Route path='detail' element={<Detail />} />
          <Route path='card' element={<Card />} />
          <Route path='pay' element={<Pay />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
