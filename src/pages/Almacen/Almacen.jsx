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
            <h1 className="fw-light">Almacen</h1>
            <p className="lead text-muted">
              Facilidad para conocer las ubicaciones del almacén
            </p>
          </div>
        </div>
      </section>
      <>
      <SearchInput placeholder="Filtra por Ubicacion " onChange={onInputChange} />
        <section className="container">
        <table  class="display table table-striped text-center mx-1">
        <thead>
          <tr>
            <th className="col-2">Ubicacion</th>
            <th className="col-2">Planta</th>
            <th className="col-2">Nave</th>
          </tr>
        </thead>
        {filteredUbicaciones.map(ubicacion => (
        <tbody key={ubicacion._id}>
          <tr>
            <td className="text-start text-md-center">{ubicacion.ubicacion}</td>
            <td>{ubicacion.planta}</td>
            <td>{ubicacion.nave}</td>
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
