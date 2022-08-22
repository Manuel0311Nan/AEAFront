import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bgNavbar ">
      <div className="container-fluid d-flex flex-column">
        <div
          className="collapse navbar-collapse fw-bold"
          id="navbarSupportedContent"
        >
          <a
            className="navbar-brand d-flex justify-content-center"
            href="/home"
            alt=""
          >
            {" "}
            <img
              className="img-fluid w-25 align-content-center"
              src="https://res.cloudinary.com/manuelcodex/image/upload/v1660476846/terminales/logo_gz68ak.png"
              alt="logo"
            />
          </a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center">
            <Link
              to="/home"
              className="nav-item align-self-center shadowLink nav-link active"
            >
              Descubre la app
            </Link>
            <Link
              to="/aeropuerto"
              className="nav-item align-self-center shadowLink nav-link active"
            >
              Aeropuerto
            </Link>
            <Link
              to="/almacen"
              className="nav-item align-self-center shadowLink nav-link active"
            >
              Almacén
            </Link>
            <Link
              to="/flota"
              className="nav-item align-self-center shadowLink nav-link active"
            >
              Flota
            </Link>
            <Link
              to="/terminales"
              className="nav-item align-self-center shadowLink nav-link active"
            >
              Terminales
            </Link>
          </ul>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
};

export default Header;
