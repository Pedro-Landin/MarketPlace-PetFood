import Header from "../../components/header";
import Illustration from "../../assets/illustration.png";

const Cadastro = () => {
  return (
    /**Tela de fundo */
    <div className="container-fluid h-100 bg-primary ">
      {/**Logo PetFood */}
      <Header whiteVersion/>

      {/**Middle da pagina*/}
      <div className="row">
        {/**Imagem de ilustração  */}
        <div className="col-6 text-right my-auto">
          <img src={Illustration} className="img-fluid" />
        </div>
        {/**Formulario */}
        <div className="col-6 ">
          <div className="box col-9">
            <h2 className="text-center ">
              Falta pouco pra fazer o seu pet feliz.
            </h2>
            <br />
            <br />
            <input
              type="text"
              className="form-control form-constrol-lg mb-3"
              placeholder="Nome Completo"
            />

            <input
              type="text"
              className="form-control form-constrol-lg mb-3"
              placeholder="E-mail"
            />

            <input
              type="text"
              className="form-control form-constrol-lg mb-3"
              placeholder="Telefone"
            />

            <input
              type="text"
              className="form-control form-constrol-lg mb-3"
              placeholder="CPF"
            />

            <input
              type="date"
              className="form-control form-constrol-lg mb-3"
              placeholder="Data de Nascimento"
            />

            <button className="btn btn-outline-secondary btn-lg btn-block col-12">
              Finalizar Pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
