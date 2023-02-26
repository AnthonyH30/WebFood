import './Global/Global.scss';
import PrivateRoutes from './Routes/PrivateRoutes';
import PublicRoutes from './Routes/PublicRoutes';
const auth = true;

function App() {
  return (
    <>
      {auth ? <PrivateRoutes /> : <PublicRoutes />}
    </>
  )
}

export default App
