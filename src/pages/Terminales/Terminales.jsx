import React, {useState,useEffect} from "react";
// import Detail from "./Detail/Detail";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../assets/apiRoutes";

const Terminales = () => {

  let [terminales, setTerminales] = useState([]);
 
  useEffect(() => {

    fetch(`${BASE_URL}/terminales/`)
      .then(response => response.json())
      .then(data => setTerminales(data))
  }, []);
  console.log(terminales)

  return (
    <main>
      <section class="py-5 text-center container">
        <div class="row py-lg-5">
          <div class="col-lg-6 col-md-8 mx-auto">
            <h1 class="fw-light">Terminales</h1>
            <p class="lead text-muted">
              Aquí encontrareis las terminales a las que diariamente debemos ir
              para hacer tanto entregas, recogidas o consultas
            </p>
          </div>
        </div>
      </section>
      <div className=" container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 ">
          {terminales.map((terminal, key) => (
            <section key={terminal._id} className="col">
              <div className="card m-2 bg-primary">
                <img
                className="card-img-top p-2"
                src={terminal.logo}
                alt={terminal.name}
                >
                </img>
                <div className="card-body">
                  <h3 className="text-center text-light">{terminal.name}</h3>
                  <div>
                    <Link
                      className="btn btn-primary border-bottom"
                    to={`/detail/${terminal._id}`}
                    >
                      Detail
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          ))}
          </div>
        </div>
    </main>
  );
};

export default Terminales;
