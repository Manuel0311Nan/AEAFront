import React from "react";

const Detail = (props) => {
  return (
    <section className="col">
      <div className="col card m-2 bg-primary">
        <img className="p-2" src={props.logo} alt={props.name} />
        <div class="card-body h-100 ">
          <h3 className="text-center text-light">{props.name}</h3>
          <img className="img-fluid w-100" src={props.image} alt={props.name} />
          <h3 className="text-light"> Entrada por: {props.entrada}</h3>
        </div>
      </div>
    </section>
  );
};

export default Detail;
