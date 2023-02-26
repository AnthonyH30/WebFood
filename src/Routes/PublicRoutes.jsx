import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Error from "../Pages/Error";
import Login from "../Pages/Login";

function PublicRoutes(){
    return(
        <Router>
            <Routes>
                <Route path='/' exact element={<Login />} />
                {/* <Route path='*' element={<Error />} /> */}
            </Routes>
        </Router>
    )
}

export default PublicRoutes;