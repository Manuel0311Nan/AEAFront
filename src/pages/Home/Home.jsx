import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <main id="home" className=" d-flex flex-column align-items-center backg  ">
  <Link  to="/home" className="row bgNavbar mt-3 text-decoration-none text-dark">
  <img className="img-fluid col-sm container-fluid" src="https://res.cloudinary.com/manuelcodex/image/upload/v1660476607/terminales/aeafirst_jzv5af.jpg" alt="logo"/>
  <h1 className=" col-sm align-self-center text-center  fw-bold">AEA <p className="h6 col-sm fst-italic ">Descubre todo lo que necesitas para aprender a trabajar en Air Europa deslizando</p></h1>
</Link>
<Link to="/aeropuerto" className="row bgNavbar mt-3 text-decoration-none text-dark">
<img className="img-fluid col-sm container-fluid" src="https://res.cloudinary.com/manuelcodex/image/upload/v1660476607/terminales/aeropuerto_zdr2mn.jpg" alt="logo"/>
  <h1 className=" col-sm align-self-center text-center  fw-bold"> Aeropuerto   <p className="h6 col-sm fst-italic">Alguna duda del aeropuerto, busca un parking clickando en la imagen!</p></h1>
</Link>
<Link to="/almacen" className="row bgNavbar mt-3 text-decoration-none text-dark">
<img className="img-fluid col-sm container-fluid" src="https://res.cloudinary.com/manuelcodex/image/upload/v1660476607/terminales/almacen_fockhm.jpg" alt="logo"/>
  <h1 className="col-sm align-self-center text-center  fw-bold h-lg-100">Almacén <p className="h6 col-sm fst-italic">¿Ubicaciones del almacen, detalles de como trabajar? Entra y resuelve tus duda</p></h1>
</Link>
<Link to="/flota" className="row bgNavbar mt-3 text-decoration-none text-dark">
  <img className="col-sm container-fluid img-fluid" src="https://res.cloudinary.com/manuelcodex/image/upload/v1660476606/terminales/avion_n387mv.jpg" alt="logo"/>
  <h1 className=" col-sm align-self-center text-center fw-bold ">Flota <p className="h6 col-sm fst-italic">¿Quieres conocer más acerca de la flota de Air Europa, click en la imagen</p></h1>
</Link>
<Link to="/terminales" className="row bgNavbar mt-3 mb-1 text-decoration-none text-dark" >
  <a className=" col-sm container-fluid img-fluid" href="/terminales" width="200" alt=""> <img className="img-fluid" src="https://res.cloudinary.com/manuelcodex/image/upload/v1660476606/terminales/terminales_ygpzu6.jpg" alt="logo"/> </a>
  <h1 className=" col-sm align-self-center text-center  fw-bold">Terminales <p className="h6 col-sm fst-italic">¿Alguna de la documentación que necesitas o donde se encuentra alguna de las terminales?</p></h1>
</Link>
</main>
  )
}
