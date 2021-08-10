import LogoWhite from "../../assets/logo-white.png";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./styles.css";

const Header = ({ whiteVersion, hideCart }) => {
  //função para chamar o sidebar
  const openDrawer = () => {
    const event = new CustomEvent("openCart");
    window.dispatchEvent(event);
  };

  return (
    <div className="col-12 ">
      <header className="py-2 px-4 text-center header">
        <Link to="/">
          <img src={whiteVersion ? LogoWhite : Logo} className="img-fluid" />
        </Link>
      </header>
      {/**hideCart é uma função IF, para não aparacer o carrinho de compras no outro header */}
      {!hideCart && (
        <button
          onClick={() => openDrawer()}
          className="btn cart-button"
        >
          <span className="mdi mdi-cart"></span> 2 Itens
        </button>
      )}
    </div>
  );
};

export default Header;
