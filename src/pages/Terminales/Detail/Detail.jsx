/* eslint-disable no-template-curly-in-string */
import React from "react";
import { useParams} from "react-router-dom";
const Detail = (prueba) => {
  const { id, name } = useParams();
  console.log(id,name)
  console.log(prueba, 7)
  return (
    <section className="col">
      <div className="card m-2 bg-primary">
        {/* <img className="card-img-top bd-placeholder-img" src={props.logo} alt={props.name} /> */}
        <div className="card-body">
          <h3 className="text-center text-light">{name}</h3>
          {/* <img className="img-fluid w-100" src={props.image} alt={props.name} />
          <h3 className="text-light"> Entrada por: {props.entrada}</h3> */}
          {/* <Link className="btn btn-primary border-bottom" to={`/terminalesDetail/${props.id}`}>Detail
            <TerminalesDetail props={props } />
          </Link> */}

        </div>
      </div>
    </section>
  );
};

export default Detail;
