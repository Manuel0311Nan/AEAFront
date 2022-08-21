import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../../assets/apiRoutes";
import { Link } from "react-router-dom";
const DetailFlota = () => {
  const { id } = useParams();

  let [flotaDetail, SetFlotaDetail] = useState();

  useEffect(() => {
    fetch(`${BASE_URL}/flota/${id}`)
      .then((response) => response.json())
      .then((data) => SetFlotaDetail(data));
  }, [id]);

  return (
    <>
      {!flotaDetail ? (
        <p>Cargando...</p>
      ) : (
        <>
            <section className="col container">
            <div className="container d-flex  justify-content-center">
            <Link
                  to="/flota"
                  className=" btn text-primary fw-bold align-content-center w-25 mb-2"
                >Volver</Link></div>
            <div className="card m-2 bg-primary ">
              <div className="card-body d-flex flex-column align-items-center">
                <h3 className="text-center fw-bold text-light">
                  {flotaDetail.typeName}
                </h3>

                {/* <h3 className="text-light mt-2 text-center">
                  {" "}
                  {flotaDetail.matriculas}
                </h3> */}

                <h3 className="text-light fw-bold text-center">
                  {" "}
                  Pasajeros: {flotaDetail.pasajeros}
                </h3>
                {/* <ul>
                    {flotaDetail.matriculas.map((d) => (
                    <li key={d[0]}>{d.name}</li>
                  ))}
                </ul> */}
                <div className="text-light  mt-2 text-center">
                  <span className="t material-symbols-outlined">
                    radio_button_checked
                  </span>
                  <h3 className="fw-bold"> {flotaDetail.wheelColor[0]}</h3>

                  <br></br>
                  <span className=" material-symbols-outlined">
                    radio_button_checked
                  </span>
                  <h3 className="fw-bold"> {flotaDetail.wheelColor[1]}</h3>
                </div>
                {/* <img
                className="img-fluid w-25"
                src={flotaDetail.image[1]}
                alt={flotaDetail.image}
              /> */}
                <div
                  id="carouselExampleControls"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner h-50">
                    <div className="carousel-item active">
                      <img
                        src={flotaDetail.image[0]}
                        className="d-block w-100"
                        alt="..."
                      ></img>
                    </div>
                    <div className="carousel-item">
                      <img
                        src={flotaDetail.image[1]}
                        className="d-block w-100 "
                        alt="..."
                      ></img>
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                  >
                    <span className="material-symbols-outlined text-dark">
                      arrow_back_ios
                    </span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                  >
                    <span className="material-symbols-outlined text-dark">
                      arrow_forward_ios
                    </span>
                  </button>
                </div>
                </div>

            </div>
          </section>
        </>
      )}
    </>
  );
};
export default DetailFlota;
