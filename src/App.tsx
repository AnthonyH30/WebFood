import React from "react";
import './Global/Global.scss';
import PrivateRoutes from './Routes/PrivateRoutes';
import PublicRoutes from './Routes/PublicRoutes';
const auth = false;

function App() {
  return (
    <>
      {auth ? <PrivateRoutes /> : <PublicRoutes />}
    </>
  )
}

export default App
