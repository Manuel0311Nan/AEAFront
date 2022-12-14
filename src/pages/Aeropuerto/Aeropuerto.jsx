import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../assets/apiRoutes";
import { Link } from "react-router-dom";

const Aeropuerto = () => {
  let [aeropuerto, setAeropuerto] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/parking/`)
      .then((response) => response.json())
      .then((data) => setAeropuerto(data));
  }, []);

  return (
    <main>
      <section className="mt-1 text-center container">
        <div className="row pb-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Aeropuerto</h1>
            <p className="lead text-muted">
              Aquí podrás encontrar facilmente los parkings del aeropuerto
            </p>
            <img
              className="img-fluid"
              src="https://res.cloudinary.com/manuelcodex/image/upload/v1660932124/terminales/AeropuertoZonas_apsowo.png"
              alt="..."
              // useMap="#mapa"
            >
            </img>
            {/* <map id="mapa">
                <area alt="70s" shape="CIRCLE" coords="321, 434, 50" href="https://aeaback.herokuapp.com/detailaeropuerto/62ff6cb7eb4f058956f83560"></area>
            </map> */}
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row  row-cols-2 row-cols-sm-5">
          {aeropuerto.map((aerop, key) => (
              <div key={aerop._id} className="my-1">
                <Link
                  className="btn btn-primary border-bottom p-4 fw-bold"
                  to={`/detailaeropuerto/${aerop._id}`}
                >Parkings: {aerop.parkings[0] + aerop.parkings[1]}
                </Link>
              </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Aeropuerto;
