import HeroHome from '../components/heros/HeroHome';
import CardNews from '../components/cards/CardNews';
import Services from '../components/Services';
import '../styles/scss/Home.scss';

const Home = () => {

  const company = {
    title: 'James Webb Space Telescope',
    slogan: 'Embark on a Journey of Discovery',
    
  };

  return (
    <>
      <HeroHome
        company={company}
      />
      <CardNews
        title=" LASTES NEWS "
        filter="?fecha_like=Mar"
      />
      <Services
        title=" RESOURCES "
        filter=""
        // filter="?_end='id'"
      />
    </>
  );
}

export default Home;