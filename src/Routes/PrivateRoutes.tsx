import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error from "../Pages/Error";
import Home from '../Pages/Home';

function PrivateRoutes(){
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </Router>
    )
}

export default PrivateRoutes;