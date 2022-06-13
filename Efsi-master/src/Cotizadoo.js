import ferrum from './Imagenes/ferrum.png'
import delta from './Imagenes/delta.png'
import negativo from './Imagenes/Logo-Negativo.png'
import ips from './Imagenes/logo_ips.png'



export default function Cotizadoo() {
    return (

        <div class="container">
        <div class="row align-items-center">
          <div class="col-md text-center" id="ferrum">
            <img src={ferrum}/>         
             </div>
          <div class="col-md text-center" id="delta">
            <img src={delta}/>
         </div>
          <div class="col-md text-center" id="Logo-Negativo">
            <img src={negativo}/>
          </div>
          <div class="col-md text-center" id="logo_ips">
            <img src={ips}/>
          </div>
        </div>
      </div>
    
    );
  }
 