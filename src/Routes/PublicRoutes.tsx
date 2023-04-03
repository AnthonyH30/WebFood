import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error from "../Pages/Error";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import PrivateRoutes from "./PrivateRoutes";

function PublicRoutes(){
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='*' element={<Error />} />
                <Route path='/home' element={<PrivateRoutes />}>
                    <Route path='/home' element={<Home />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default PublicRoutes;