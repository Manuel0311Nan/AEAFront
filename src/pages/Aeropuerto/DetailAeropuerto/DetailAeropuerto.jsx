import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../../assets/apiRoutes";
export const DetailAeropuerto = () => {

  const { id } = useParams();

  let [aeropuertoDetail, SetAeropuertoDetail] = useState();

  useEffect(() => {
    fetch(`${BASE_URL}/parking/${id}`)
      .then((response) => response.json())
      .then((data) => SetAeropuertoDetail(data));
  }, [id]);
    
  return (
    <>
      {!aeropuertoDetail ? (
        <p>Cargando...</p>
      ) : (
        <>
          <section className="col container">
            <div className="card m-2 bg-primary ">
              <div className="card-body d-flex flex-column align-items-center">
                <h3 className="text-center fw-bold text-light">
                  {aeropuertoDetail.parkings}
                </h3>
                <h3 className="text-light fw-bold text-center">
                  {" "}
                  Zona: {aeropuertoDetail.zona}
                </h3>
                <h3 className="text-light fw-bold text-center">
                  {" "}
                  {aeropuertoDetail.image}
                </h3>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};
export default DetailAeropuerto;
