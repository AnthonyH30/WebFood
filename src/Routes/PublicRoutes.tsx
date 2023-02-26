import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Error from "../Pages/Error";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

function PublicRoutes(){
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/register' element={<Register />} />
                {/* <Route path='*' element={<Error />} /> */}
            </Routes>
        </Router>
    )
}

export default PublicRoutes;