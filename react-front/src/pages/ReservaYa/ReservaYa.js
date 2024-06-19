import Cards from './Cards.js'; // importamos el componente cards
import './ReservaYa.css'; //estilos CSS
import {useState, useEffect} from 'react';
import axios from 'axios';

//COMPONENTE
const ReservaYa = () => {
  const url = "http://alquiler.somee.com/api/lavadora"

  // Declarar el estado para los datos de la API
  const[datosApi, setDatosApi]= useState([])

  // Utilizar useEffect para realizar una llamada a la API
  useEffect(() => {
    //DEFINICION DE FUNCION PARA REALIZAR LA CONSULTA Y ASIGNAR DATOS A datosApi
    const oDatos = async () => {
      try{
        //CONSULTANDO ALA API
        const response = await axios.get(url)
        //ASIGNANDO DATOS A satosApi atraves del MOD. SET
        setDatosApi(response.data)
        //MAJENO DE ERRORES
      }catch{
        console.error("erro al traer los datos: ")
      }
    }
    oDatos();
  }, []);

  


  return (
    <section className="main">
      {console.log(datosApi)}
      <div className="container-reservaYa">

        <div className="titulo">
          <h2>
            <strong>Soluciones de Lavado a tu Alcance </strong>
            <br/>
            ¡Reserva ya tu Lavadora!
          </h2>
        </div>

        <div className="row">
          {datosApi.map(lavadora => (
            <div key={lavadora.id} className="col-lg-3 col-md-3 col-sm-6 " id='ras'>
              <Cards lavadoraCard={lavadora} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ReservaYa;