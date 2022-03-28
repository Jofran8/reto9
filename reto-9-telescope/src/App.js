import Header from './components/Header';
import Home from './pages/Home';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import News from './pages/News';

function App() {
  return (
    <Router>
      <Header />
      <main className='main'>
        <Routes>
          <Route path="/news" element={<News />} />
          <Route path="/nosotros" element={<section className="section animate__animated animate__fadeIn">About us</section>} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
