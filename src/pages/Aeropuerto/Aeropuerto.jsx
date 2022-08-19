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
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Aeropuerto</h1>
            <p className="lead text-muted">
              Aquí podrás encontrar facilmente los parkings del aeropuerto
            </p>
            <img
              className="img-fluid"
              src="https://res.cloudinary.com/manuelcodex/image/upload/v1660932124/terminales/AeropuertoZonas_apsowo.png"
              alt="..."
            ></img>
          </div>
        </div>
      </section>
      <div className="container ">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 d-flex flex-column justify-content-center align-items-center">
          {aeropuerto.map((aerop, key) => (
            <ul key={aerop._id} className="col ">
              <div className=" text-center ">
                <Link
                  className="btn btn-primary border-bottom p-3 "
                  to={`/detailaeropuerto/${aerop._id}`}
                >{aerop.parkings}

                </Link>
              </div>
            </ul>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Aeropuerto;
