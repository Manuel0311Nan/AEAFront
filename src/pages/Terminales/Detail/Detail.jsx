/* eslint-disable no-template-curly-in-string */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../../assets/apiRoutes";
import { Link } from "react-router-dom";
const Detail = () => {
  const { id } = useParams();

  let [terminalesDetail, SetTerminalesDetail] = useState();

  useEffect(() => {
    fetch(`${BASE_URL}/terminales/${id}`)
      .then((response) => response.json())
      .then((data) => SetTerminalesDetail(data));
  }, [id]);
  return (
    <>
      {!terminalesDetail ? (
        <p>Cargando...</p>
      ) : (
        <>
            <section className="col container">
              <div className="container d-flex  justify-content-center">
            <Link
                  to="/terminales"
                  className=" btn text-primary fw-bold align-content-center w-25 mb-2"
                >Volver</Link></div>
            <div className="card m-2  d-flex flex-column align-items-center">
              <img
                className="img-fluid w-25"
                src={terminalesDetail.logo}
                alt={terminalesDetail.logo}
              />
              <div className="card-body ">
                <h3 className="text-center fw-bold text-primary">
                  {terminalesDetail.name}
                </h3>
                <a href={terminalesDetail.destiny}>
                  <img
                    className="img-fluid "
                    src={terminalesDetail.image}
                    alt={terminalesDetail.name}
                  />
                </a>
                <h3 className="fw-bold text-primary text-center">
                  {" "}
                  Entrada por: {terminalesDetail.acceso}
                </h3>
                  <ul className=" text-primary mt-2 ">
                    {" "}
                   <li className="h6 list-group-item fw-bold "> Entregas</li>
                    <li className="h6 list-group-item text-wrap lh-base">{terminalesDetail.doc[0]}</li>
                    <br></br>
                    <li className="h6 list-group-item text-wrap lh-base">{terminalesDetail.doc[1]}</li>
                    <li className="h6 list-group-item fw-bold">Salidas</li>
                    <li className="h6 list-group-item lh-base">{terminalesDetail.doc[2]}</li>
                    <br></br>
                    <li className="h6 list-group-item lh-base">{terminalesDetail.doc[3]}</li>
                  </ul>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Detail;
