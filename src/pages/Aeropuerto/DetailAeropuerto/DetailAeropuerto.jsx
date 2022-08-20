import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../../assets/apiRoutes";
import { Link } from "react-router-dom";
export const DetailAeropuerto = () => {
  const { id } = useParams();

  let [aeropuertoDetail, SetAeropuertoDetail] = useState();

  useEffect(() => {
    fetch(`${BASE_URL}/parking/${id}`)
      .then((response) => response.json())
      .then((data) => SetAeropuertoDetail(data));
  }, [id]);
  console.log(aeropuertoDetail);
  return (
    <>
      {!aeropuertoDetail ? (
        <p>Cargando...</p>
      ) : (
        <>
            <section className="container">
            <Link
                  to="/aeropuerto"
                  className=" btn btn-light text-primary border-primary fw-bold align-self-center mb-2"
                >Volver</Link>
            <div className="card m-2 bg-primary">
              <div className="d-flex flex-md-row flex-column justify-content-center align-items-center">
                <div className=" text-center col-5">
                  <h3 className="fw-bold text-light w-100">
                    Nº de parkings: {aeropuertoDetail.parkings}
                  </h3>
                  <h3 className="text-light fw-bold ">
                    {" "}
                    Zona: {aeropuertoDetail.zona}
                  </h3>
                </div>
                <div className="col-10 col-md-5 ">
                  <img
                    className="card-img my-3"
                    src={aeropuertoDetail.image}
                    alt="..."
                  ></img>
                </div>
              </div>

              
            </div>
          </section>
        </>
      )}
    </>
  );
};
export default DetailAeropuerto;
