import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import { BASE_URL } from "../../assets/apiRoutes";
const Flota = () => {

  let [flotas, setFlotas] = useState([]);
 
  useEffect(() => {

    fetch(`${BASE_URL}/flota/`)
      .then(response => response.json())
      .then(data => setFlotas(data))
  }, []);

  return (
    <main>
            <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Flota</h1>
            <p className="lead text-muted">
              Todos los aviones que actualmente tiene Air Europa actualizados con sus matrículas
            </p>
          </div>
        </div>
      </section>
      <section className=" container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 ">
          {flotas.map((flota, key) => (
            <section key={flota._id} className="col">
              <div className="card m-2 bg-primary">
                <h1
                className="text-center text-light fw-bold p-2"
                >
                {flota.typeName}
                </h1>
                <Link to={`/detailFlota/${flota._id}`}>
                <div className="card-body">
                  <img className='w-100' src={flota.image[0]} alt={flota.typeName}></img>
                </div>
                </Link>
              </div>
            </section>
          ))}
        </div>
        </section>
    </main>
  )
}

export default Flota