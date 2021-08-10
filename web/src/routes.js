import { BrowserRouter as Router, Route } from "react-router-dom";

import Cadastro from "./pages/cadastro";
import "./styles/global.css";
import Checkout from "./pages/checkout";
import Petshop from "./pages/petshop";
import Sidebar from "./components/sidebar";
import Home from "./pages/home";

const Routes = () => {
  return (
    <>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/petshop/:id" exact component={Petshop} />
        <Route path="/checkout" exact component={Checkout} />
        <Route path="/cadastro" exact component={Cadastro} />
      </Router>
      <Sidebar />
    </>
  );
};

export default Routes;
