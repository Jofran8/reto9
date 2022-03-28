import Swal from 'sweetalert2';
import useApi from '../../hooks/useApi';
import Spinner from '../Spinner';
import CardNew from './CardNew';
import PropTypes from 'prop-types';

const CardNews = ({ title, filter }) => {

  const recurso = `/news${filter}`;

  const [news, error] = useApi(recurso);

  if (error) {
    Swal.fire({
      position: 'center',
      title: '¡Ha ocurrido un error! Contactar con soporte.',
      text: error,
      icon: 'error',
      confirmButtonText: 'Aceptar',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    });
  }

  return (
    <section className={`news ${filter ? '' : 'news--pt-4'} animate__animated animate__fadeIn`}>
      <div className="news-container">
        <h1 className="news__title">{title}</h1>
        {
          news.length === 0
            ?
            (
              <Spinner />
            )
            :
            (
              <div className="news__news">
                {news.map(({ id, news, fecha, descripcion, imagen }) => {
                  return (
                    <CardNew
                      key={id}
                      id={id}
                      news={news}
                      fecha={fecha}
                      descripcion={descripcion}
                      imagen={imagen}
                    />
                  );
                })}
              </div>
            )
        }
      </div>
    </section>
  );
}

CardNew.propTypes = {
  title: PropTypes.string,
  filter: PropTypes.string
}

export default CardNews;