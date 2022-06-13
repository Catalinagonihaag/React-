import logo from './Imagenes/Logo.png'
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container">
                <img src={logo} alt="" width="100" height="84"/>
                <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active"  aria-current="page" href="#">INICIO</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active"  aria-current="page" href="#">QUIENES SOMOS</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active"  aria-current="page" href="#">PRODUCTOS</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active"  aria-current="page" href="#">CONTACTO</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
 
    );
  }
