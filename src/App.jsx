import React from 'react';
import { BrowserRouter as Router, Route, Routes,Link} from 'react-router-dom';
import { Layout,Typography,Space  } from 'antd';
import './App.css';
import { NavBar, HomePage, CryptoCurrencies, Exchanges, News, CryptoDetails } from './components';
const { Header, Sider, Content, Footer, } = Layout;

export function App() {
  return (

    <div className="app">
    <div className="navbar">
      <NavBar />
    </div>
    <div className="main">
      <Layout>
        <div className="routes">
       <Routes>
                <Route path="/home" element={<HomePage/>} />
                <Route path="/cryptocurrencies" element={<CryptoCurrencies/>} />
                <Route path="/exchanges" element={<Exchanges />} />
               <Route path="/news" element={<News />} />
               <Route path="/crypto/:coinId" element={<CryptoDetails />} />
             </Routes>
        </div>
      </Layout>
      <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021
          <Link to="/">
            Cryptoverse Inc.
          </Link> <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
    </div>
  </div>
 
   
   
  );
}