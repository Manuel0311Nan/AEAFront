import React, {useState,useEffect} from "react";
// import Detail from "./Detail/Detail";
import { Link } from "react-router-dom";
// import { BASE_URL } from "../../assets/apiRoutes";
const Terminales = ({terminales}) => {

//   let [terminales, setTerminales] = useState([]);
 
  // useEffect(() => {

  //   const fetchData = async () => {
  //     try {
  //       const data = await fetch(`${BASE_URL}/terminales`, {
  //         method: 'GET',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         }
  //       });

  //       const jsonData = await data.json();
  //       setTerminales(jsonData.data.terminales);


  //     } catch (error) {
  //       // logout(dispatch)
  //       // navigate('/users/login')
  //       return console.log(error, 'vaya, ha habido un error')
  //     }
  //     fetchData()
  //   }

  // }
  // useEffect(() => {
  //   fetch(`${BASE_URL}/terminales`)
  //     .then(response => response.json())
  //     .then(data => setUsers(data))
  // }, []);
  return (
    <main>
      <section class="py-5 text-center container">
        <div class="row py-lg-5">
          <div class="col-lg-6 col-md-8 mx-auto">
            <h1 class="fw-light">Terminales</h1>
            <p class="lead text-muted">
              Aquí encontrareis las terminales a las que diariamente debemos ir
              para hacer tanto entregas, recogidas o consultas
            </p>
          </div>
        </div>
      </section>
      <div class=" container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 ">
          {/* {terminales.map((terminal) => { */}
            <section className="col">
              <div className="card m-2 bg-primary">
                <img
                className="card-img-top bd-placeholder-img"
                src={terminales.logo}
                alt={terminales.name}
                >
                </img>
                <div className="card-body">
                  <h3 className="text-center text-light">{terminales.name}</h3>
                  <div>
                    <Link
                      className="btn btn-primary border-bottom"
                    to={`/Detail/${terminales.id}`}
                    >
                      Detail
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          {/* })} */}
          </div>
        </div>
    </main>
  );
};

export default Terminales;
