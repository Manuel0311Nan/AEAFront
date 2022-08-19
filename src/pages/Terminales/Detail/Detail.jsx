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
                 <a href="https://www.google.es/maps/dir/WFS+Servicios+Aeroportuarios+-++HDQ%E2%80%A6/PR+Sur,+Av.+Central,+61,+28042+Madrid/@40.4536317,-3.5737051,16.17z/data=!3m1!5s0xd423033ac9eea09:0x52074854acf8b775!4m14!4m13!1m5!1m1!1s0xd4231dcef01886b:0x3c3b0fb82e65c6be!2m2!1d-3.5780339!2d40.4548982!1m5!1m1!1s0xd4230338504f411:0x1c9db5b16f2d2273!2m2!1d-3.5666483!2d40.4550383!3e0?hl=es"><img
                  className="img-fluid "
                  src={terminalesDetail.image}
                  alt={terminalesDetail.name}
                /></a> 
                <h3 className="text-light text-center">
                  {" "}
                  Entrada por: {terminalesDetail.acceso}
                  </h3>
                  {terminalesDetail.doc.filter((info) =>
                    <h3 className="text-light mt-2 text-wrap">
                   {info[0]}
                </h3>)}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Detail;
