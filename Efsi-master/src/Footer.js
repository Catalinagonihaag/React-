import mail from './Imagenes/mail.png'
import byn from './Imagenes/logo_byn.png'
import ubicacion from './Imagenes/ubicacion.png'
import celular from './Imagenes/celular.png'





export default function Footer() {
    return (

        <footer className="p-5">

        <div className="row align-items-end">
          <div className="col">
            <img src={byn}/>
          </div>
          <div className="col">
            <p className="text-start">
            <img src={ubicacion}/>Beiro 3300 - Villa del Parque
            <p className="text-start">
            <img src={mail}/>contacto@sanitarioscampana.com.ar
            </p>
            </p>
          </div>
          <div className="col" id="Telefono">
            <p>
            <img src={celular}/>4503-6015
            </p>
          </div>
        </div>
    
      </footer>
    
    );
  }
 