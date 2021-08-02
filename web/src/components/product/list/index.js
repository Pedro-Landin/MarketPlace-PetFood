import './styles.css';

const Product = () => {
  return (
    <div className="product-list col-12">
      <div className="row">
        <div className="col-3">
          <img
            src="https://th.bing.com/th/id/OIP.DBlhX4_fZN_v4nqnQj2I_AHaHa?w=214&h=214&c=7&o=5&pid=1.7"
            className="img-fluid"
          />
        </div>
        <div className="col-6">
            <h6>
                <label className="badge badge-primary">R$ 30,00</label>
            </h6>
          <small>
            <b>Nome do Produto</b>
          </small>
        </div>
        <div className="col-3">
          <button className="btn btn-secondary rounded-circle">-</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
