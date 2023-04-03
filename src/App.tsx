import { useContext } from 'react';
import AuthProvider, { AuthContext } from './Context/AuthContext';
import './Global/Global.scss';
import PublicRoutes from './Routes/PublicRoutes';
import PrivateRoutes from './Routes/PrivateRoutes';


function App() {

  return(
    <PublicRoutes />
  )
}

export default App;
