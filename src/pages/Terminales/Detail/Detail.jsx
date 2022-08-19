/* eslint-disable no-template-curly-in-string */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../../assets/apiRoutes";
const Detail = () => {
  const { id } = useParams();

  console.log(id);

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
                {/* {terminalesDetail.doc.filter((info) => */}
                <h3 className="text-light mt-2 text-wrap">
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
