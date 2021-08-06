import React from 'react';
import ReactDOM from 'react-dom';
//mport Cadastro from './pages/cadastro';
import './styles/global.css';
//import Checkout from './pages/checkout';
import Petshop from './pages/petshop';
import Sidebar from './components/sidebar';
import Home from './pages/home';

ReactDOM.render(
  <React.StrictMode>
    <Sidebar />
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);


