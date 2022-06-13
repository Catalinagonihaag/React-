import './App.css';
import './bootstrap.min.css';
import Navbar from './Navbar.js';
import Carousel from './Carousel.js';
import Destacados from './Destacados.js';
import MuebleColgante from './MuebleColgante.js';
import Marcas from './Marcas.js';
import Cotizadoo from './Cotizadoo.js';
import LineaGris from './LineaGris.js';
import Footer from './Footer.js';


function App() {
  return (
    <div className="App">
        <Navbar/>
        <Carousel/>
        <Destacados/>
        <MuebleColgante/>
        <LineaGris/>
        <Marcas/>
        <Cotizadoo/>
        <Footer/>

    </div>
  );
}

export default App;
