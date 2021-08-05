import LogoWhite from "../../assets/logo-white.png";
import Logo from "../../assets/logo.png";
import "./styles.css";

const Header = ({ whiteVersion, hideCart }) => {
  //função para chamar o sidebar
  const openDrawer = () => {
    const event = new CustomEvent("openCart");
    window.dispatchEvent(event);
  };

  return (
    <div className="col-12">
      <header className="py-4 px-4 text-center">
        <img src={whiteVersion ? LogoWhite : Logo} className="img-fluid" />
      </header>
      {/**hideCart é uma função IF, para não aparacer o carrinho de compras no outro header */}
      {!hideCart && (
        <button
          onClick={() => openDrawer()}
          className="btn btn-secondary cart-button"
        >
          <span className="mdi mdi-cart"></span> 2 Itens
        </button>
      )}
    </div>
  );
};

export default Header;
