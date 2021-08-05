import { useState, useEffect } from "react";
import "./styles.css";
//yarn add react-dock, react-dock é a bliblioteca do sidebar, com algumas funções pré defina
import Dock from "react-dock";
import Product from "../product/list";

const Sidebar = () => {
  const [opened, setOpened] = useState(false);
 
  //recebendo o chamado para abrir o sidebar
   useEffect(() => {
     window.addEventListener('openCart', () => {
         setOpened(true);
     });
   }, []);

  return (
    <Dock
      isVisible={opened}
      onVisibleChange={(visible) => {
        setOpened(visible);
      }}
      position="right"
    >
      <div className="container-fluid h-100 pt-4 sidebar">
        <h5>Minha Sacola (5)</h5>

        <div className="row products">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((p) => (
            <Product />
          ))}
        </div>
      </div>
    </Dock>
  );
};

export default Sidebar;
