/* eslint-disable no-template-curly-in-string */
import React, {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../../assets/apiRoutes";
const Detail = () => {
  const { id } = useParams();

  console.log(id)

  let [terminalesDetail, SetTerminalesDetail] = useState();

  useEffect(() => {

    fetch(`${BASE_URL}/terminales/${id}`)
      .then(response => response.json())
      .then(data => SetTerminalesDetail(data))
  }, [id]);
  return (
      <>
    {!terminalesDetail ? <p>Cargando...</p> :
      <>
        <section className="col">
        <div className="card m-2 bg-primary">
        <div className="card-body">
          <h3 className="text-center text-light">{terminalesDetail.name}</h3>
          <h3 className="text-light"> Entrada por: {terminalesDetail.acceso}</h3>
          <img className="img-fluid w-100" src={terminalesDetail.image} alt={terminalesDetail.name} />
        </div>
      </div>
    </section>
    </>
}

</>);
}


export default Detail;
