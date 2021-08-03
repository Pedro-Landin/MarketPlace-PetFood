import './styles.css';

const Product = () => {
  return (
    <div className="product col-3">
      <img
        src="https://th.bing.com/th/id/OIP.--tm_bgtUbTqSRR2UDRMOAHaHa?pid=ImgDet&rs=1"
        className="img-fluid align-center"
      />

      <button className="btn btn-primary rounded-circle">+</button>
      <h4>
          <label className="badge badge-primary">R$ 90,00</label>
      </h4>
      <small>
          <b>RAÇÃO FÓRMULA CÃES ADULTOS RAÇAS GRANDES FRANGO 15KG E 20KG</b>
      </small>
    </div>
  );
};

export default Product;
