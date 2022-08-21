import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { BASE_URL } from "../../assets/apiRoutes";
import { SearchInput } from "../../components/SearchInput/SearchInput";
// import { Ubicaciones } from "./Ubicaciones";
const Almacen = () => {
  let [ubicaciones, setUbicaciones] = useState([]);

  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    fetch(`${BASE_URL}/almacen/`)
      .then((response) => response.json())
      .then((data) => setUbicaciones(data));
  }, []);
  const onInputChange = (e) => {
    setKeyword(e.target.value.toLowerCase());
  };
  const filteredUbicaciones = ubicaciones.filter(ubicacion => ubicacion.ubicacion.toLowerCase().includes(keyword));

  return (
    <main>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Almacén</h1>
            <p className="lead text-muted">
              Filtra por ubicación para conocer donde se encuentra
            </p>
          </div>
          
        </div>
        <ul className="list-group bg-info col-md-3 col-6 ">
            Guía
            <li className="list-group-item"> <span className="fw-bold float-start">C:</span>Consumible</li>
            <li className="list-group-item"> <span className="fw-bold float-start">CHP:</span> Capítulo</li>
            <li className="list-group-item"> <span className="fw-bold float-start">T:</span> Tornillería</li>
            <li className="list-group-item"> <span className="fw-bold float-start">INT:</span> Interiores</li>
            <li className="list-group-item"> <span className="fw-bold float-start">ROT:</span> Rotables</li>
          </ul>
      </section>
      <>
      <SearchInput placeholder="Filtra por Ubicacion " onChange={onInputChange} />
        <section className="container mt-2">
        <table  class="display table table-hover  text-center mx-1">
        <thead>
          <tr>
            <th className="col-2 table-primary" >Ubicación</th>
            <th className="col-2">Planta</th>
            <th className="col-2 table-primary">Nave</th>
          </tr>
        </thead>
        {filteredUbicaciones.map(ubicacion => (
        <tbody key={ubicacion._id}>
          <tr>
            <td className="text-start text-md-center table-primary">{ubicacion.ubicacion}</td>
            <td>{ubicacion.planta}</td>
            <td className="text-start text-md-center table-primary">{ubicacion.nave}</td>
              </tr>
          </tbody>
          ))}
      </table>

  </section>
    </>
    </main>
  );
};

export default Almacen;
