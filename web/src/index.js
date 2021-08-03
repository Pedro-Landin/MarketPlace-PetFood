import React from 'react';
import ReactDOM from 'react-dom';
//mport Cadastro from './pages/cadastro';
import './styles/global.css';
//import Checkout from './pages/checkout';
import Petshop from './pages/petshop';


ReactDOM.render(
  <React.StrictMode>
    <Petshop />
  </React.StrictMode>,
  document.getElementById('root')
);


