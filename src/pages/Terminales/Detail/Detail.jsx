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
            <Link
                  to="/terminales"
                  className=" btn btn-light border-primary text-primary fw-bold  align-self-center mb-2"
                >Volver</Link>
            <div className="card m-2 bg-primary d-flex flex-column align-items-center">
              <img
                className="img-fluid w-25"
                src={terminalesDetail.logo}
                alt={terminalesDetail.logo}
              />
              <div className="card-body ">
                <h3 className="text-center text-light">
                  {terminalesDetail.name}
                </h3>
                <a href={terminalesDetail.destiny}>
                  <img
                    className="img-fluid "
                    src={terminalesDetail.image}
                    alt={terminalesDetail.name}
                  />
                </a>
                <h3 className="text-light text-center">
                  {" "}
                  Entrada por: {terminalesDetail.acceso}
                </h3>
                  <h3 className="text-light mt-2 text-wrap">
                  {" "}
                  {terminalesDetail.doc}
                  </h3>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Detail;
