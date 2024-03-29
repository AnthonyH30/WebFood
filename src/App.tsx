import { useContext } from 'react';
import AuthProvider, { AuthContext } from './Context/AuthContext';
import './Global/Global.scss';
import PrivateRoutes from './Routes/PrivateRoutes';
import PublicRoutes from './Routes/PublicRoutes';

const auth = false;

function App() {

  const {  } = useContext(AuthContext);

  return (
    <AuthProvider>
      {auth ? <PrivateRoutes /> : <PublicRoutes />}
    </AuthProvider>
  )
}

export default App;
