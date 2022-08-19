/* eslint-disable no-template-curly-in-string */
import React, {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../../assets/apiRoutes";
const Detail = () => {
  const { id, } = useParams();
  let [terminales, SetTerminales] = useState();

  useEffect(() => {

    fetch(`${BASE_URL}/terminales/${id}`)
      .then(response => response.json())
      .then(data => SetTerminales(data))
  }, [id]);
  return (
    <section className="col">
      <div className="card m-2 bg-primary">
        <div className="card-body">
          <h3 className="text-center text-light">{terminales.name}</h3>
          <h3 className="text-light"> Entrada por: {terminales.acceso}</h3>
          <img className="img-fluid w-100" src={terminales.image} alt={terminales.name} />
        </div>
      </div>
    </section>
  );
};

export default Detail;
