import React from 'react';
import { Home } from '../pages/Home/Home';
import Aeropuerto from "../pages/Aeropuerto/Aeropuerto";
import Almacen from "../pages/Almacen/Almacen";
import Flota from "../pages/Flota/Flota";
import Terminales from "../pages/Terminales/Terminales";
// import TerminalesDetail from '../pages/TerminalesDetail/TerminalesDetail';
import Detail from '../pages/Terminales/Detail/Detail';
const routes = [
    {
        path: "/",
        element: <Home/>,
        isPrivate:false
    },
    {
        path: "/aeropuerto",
        element: <Aeropuerto/>,
        isPrivate:false
    },
    {
        path: "/almacen",
        element: <Almacen/>,
        isPrivate:false
    },
    {
        path: "/flota",
        element: <Flota/>,
        isPrivate:false
    },
    {
        path: "/terminales",
        element: <Terminales/>,
        isPrivate:false
    }
    ,
    {
        path: "/detail/:id",
        element: <Detail/>,
        isPrivate:false
    }
]

export default routes