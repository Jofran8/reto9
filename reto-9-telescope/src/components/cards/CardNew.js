import PropTypes from 'prop-types';

const CardNew = ({ id, news, fecha, descripcion, imagen }) => {


  return (
    <article className="news__new" key={id}>
      <figure className="news__new-image-container">
        <img
          src={imagen}
          alt={descripcion}
          className="news__new-image-container" />
      </figure>

      <div className="news__new-data">
        <h2 className="news__new-data-news">{news}</h2>
        <h4 className="news__new-data-fecha">{fecha}</h4>
        <p className="news__new-data-about">{descripcion}</p>
      </div>

      <div className="news__new-button-container">
        <button className="news__new-button">Explore</button>
      </div>
    </article>
  );
}

CardNew.propTypes = {
  id: PropTypes.number.isRequired,
  news: PropTypes.string.isRequired,
  fecha: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired
}

CardNew.defaultProps = {
  imagen: 'https://ih1.redbubble.net/image.2171197402.8669/st,small,507x507-pad,600x600,f8f8f8.jpg',
  
}

export default CardNew;