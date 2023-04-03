import { useContext } from 'react';
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function PrivateRoutes(){

    const { signed } = useContext(AuthContext)

    return signed ? <Outlet /> : <Navigate to="/" />
}

export default PrivateRoutes;