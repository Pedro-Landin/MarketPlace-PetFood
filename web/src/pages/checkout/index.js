import Header from "../../components/header";

const Checkout = () => {
  return (
    <div class="container-checkout">
      <Header whiteVersion />
      <div className="container mt-4">
        <div className="row">
          <div className="col-6">
            <span>Dados de Entrega</span>
            <div className="row mb-3">
              <div className="col-12">
                <input
                  type="text"
                  placeholder="CEP"
                  className="form-control form-control-lg"
                />
              </div>
            </div>
          </div>
          <div className="col-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
