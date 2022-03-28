import PropTypes from "prop-types";

const Service = ({ service }) => {
  const { id, nombre, descripcion } = service;
  return (
    <article className="services__service">
      <div className="services__service-data">
        <h2 className="services__service-data-nombre">{nombre}</h2>
        <p className="services__service-data-about">{descripcion}</p>
      </div>
      <div className="services__service-button-container">
        
        <button className="services__service-button">Watch</button>
      </div>
    </article>
  );
}

Service.propTypes = {
  service: PropTypes.object
}

export default Service;