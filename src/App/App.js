import './App.scss';
import Header from '../components/Header/index';
import Footer from '../components/Footer/index';
import BootstrapCarousel from '../components/Carousel/CarouselBootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Redirect,
} from "react-router-dom"

import Home from '../components/Home';
import Accessoire from '../components/Accessoire';
import Openbox from '../components/Openbox';
import Contact from '../components/Contact';

function App() {
  return (

    <div className="App">
      <Router>
        <Header />
        <div className='espace_header'></div>
        <BootstrapCarousel />
        <p className='bienvenudo'>
          Celulares Open Box de iPhone al mejor precio del mercado.
          Somos tienda física!!!
        </p>
        <Routes>
          <Route path="/home"  element={<Home /> } />
          <Route path="/accessoire" element={<Accessoire />} />
          <Route path="/openbox" element={<Openbox />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />

      </Router>
    </div>

  );
}

export default App;
