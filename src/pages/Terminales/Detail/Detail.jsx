/* eslint-disable no-template-curly-in-string */
import React, {useState} from "react";
import { Link } from "react-router-dom";

const Detail = (props) => {
  
  return (
    <section className="col">
      <div className="card m-2 bg-primary">
        <img className="card-img-top bd-placeholder-img" src={props.logo} alt={props.name} />
        <div className="card-body">
          <h3 className="text-center text-light">{props.name}</h3>
          {/* <img className="img-fluid w-100" src={props.image} alt={props.name} />
          <h3 className="text-light"> Entrada por: {props.entrada}</h3> */}
          <Link className="btn btn-primary border-bottom" to={"/terminalesDetail/${props.id}"}>Detail</Link>
        </div>
      </div>
    </section>
  );
};

export default Detail;
