import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import {Layout,Typography,Space} from 'antd';
import Navbar from './Components/Navbar'
import CryptoCurrencies from './Components/CryptoCurrencies'
import CryptoDetails from './Components/CryptoDetails'
import Homepage from './Components/Homepage'
import Exchange from './Components/Exchanges'
import News from './Components/News'
import './App.css';

function App (){
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/exchanges" element={<Exchange />} />
              <Route path="/cryptocurrencies" element={<CryptoCurrencies />} />
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route path="/news" element={<News />} />
            </Routes>
        </Layout>
      </div>

      <div className="footer"></div>
    </div>
  );
}

export default App;
