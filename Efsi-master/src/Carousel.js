import inodoro from './Imagenes/slider.png'
export default function Carousel() {
    return (
        <div id="carousel" className="carousel slide" data-bs-ride="false">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" className="active" aria-current="true"
              aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={inodoro} className="d-block w-100" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h5>ELIJA SANITARIOS CAMPANA PARA SU HOGAR</h5>
                <p>Lo que Ud. necesita</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={inodoro} className="d-block w-100" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h5>ELIJA SANITARIOS CAMPANA PARA SU HOGAR</h5>
                <p>Lo que Ud. necesita</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={inodoro} className="d-block w-100" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h5>ELIJA SANITARIOS CAMPANA PARA SU HOGAR</h5>
                <p>Lo que Ud. necesita</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>      
    );
  }
