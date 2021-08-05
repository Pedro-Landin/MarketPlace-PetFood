import Header from "../../components/header";
import Product from "../../components/product/list";
import "./styles.css";

const Checkout = () => {
  return (
    <div class="container-checkout">
      <Header whiteVersion hideCart/>
      <div className="container mt-3">
        <div className="row justify-content-between">
          <div className="col-6">
            <span className="section-title">Dados de Entrega</span>
            <div className="row mb-3">
              <div className="col-12">
                <input
                  type="text"
                  placeholder="CEP"
                  className="form-control form-control-lg"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-6">
                <input
                  type="text"
                  placeholder="Cidade"
                  className="form-control form-control-lg"
                />
              </div>
              <div className="col-6 pl-0">
                <input
                  type="text"
                  placeholder="Logradouro"
                  className="form-control form-control-lg"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-5">
                <input
                  type="text"
                  placeholder="Número"
                  className="form-control form-control-lg"
                />
              </div>
              <div className="col-5 pl-0">
                <input
                  type="text"
                  placeholder="Bairro"
                  className="form-control form-control-lg"
                />
              </div>
              <div className="col-2 pl-0">
                <input
                  type="text"
                  placeholder="UF"
                  className="form-control form-control-lg"
                />
              </div>
            </div>

            <span className="section-title">Dados de Pagamento</span>
            <div className="row mb-3">
              <div className="col-12">
                <input
                  type="text"
                  placeholder="Número do Cartão"
                  className="form-control form-control-lg"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-6">
                <input
                  type="text"
                  placeholder="Validade"
                  className="form-control form-control-lg"
                />
              </div>
              <div className="col-6 pl-0">
                <input
                  type="text"
                  placeholder="CVV"
                  className="form-control form-control-lg"
                />
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-12 d-flex justify-content-between align-items-center">
                <b>Total:</b>
                <h3>R$ 30,00</h3>
              </div>
            </div>
            <div className="col-12">
              <button className="btn btn-block btn-lg btn-primary col-12">
                Finalizar Compra
              </button>
            </div>
          </div>
          <div className="col-5 ">
            <div className="box col mb-4">
              <h4>Minha Sacola (4)</h4>

              <div className="row products box-sidebar">
                {[1, 2, 3, 4, 5, 6, 7, 9].map((p) => (
                  <Product />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
