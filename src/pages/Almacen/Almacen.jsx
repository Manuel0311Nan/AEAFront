import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { BASE_URL } from "../../assets/apiRoutes";
const Almacen = () => {
  let [ubicaciones, setUbicaciones] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/almacen/`)
      .then((response) => response.json())
      .then((data) => setUbicaciones(data));
  }, []);

  return (
    <main>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Almacen</h1>
            <p className="lead text-muted">
              Facilidad para conocer las ubicaciones del almacén
            </p>
          </div>
        </div>
      </section>
      <section className="container ">
        {ubicaciones.map((ubicacion, key) => (
          <table key={ubicacion._id} class="display table table-striped text-center mx-1">
            <thead>
              <tr>
                <th className="col-3">Ubicacion</th>
                <th className="col-3">Planta</th>
                <th className="col-3">Nave</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{ubicacion.ubicacion}</td>
                <td>{ubicacion.planta}</td>
                <td>{ubicacion.nave}</td>
              </tr>
            </tbody>
          </table>
        ))}
      </section>
    </main>
  );
};

export default Almacen;
