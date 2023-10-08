import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Login from "./pages/Login";
import RecuperacionContrasena1 from "./pages/RecuperacionContrasena1";
import RecuperacionContrasena2 from "./pages/RecuperacionContrasena2";
import RecuperacionContrasena3 from "./pages/RecuperacionContrasena3";
import Registro from "./pages/Registro";
import Clientes from "./pages/Clientes";
import Repartidores from "./pages/Repartidores";
import ConsultarPedidos from "./pages/ConsultarPedidos";
import Envios from "./pages/Envios";
import HabilitarSolicitud from "./pages/HabilitarSolicitud";
import "./style.scss";
import PersonalInfo from "./pages/PersonalInfo";
import Actualiza from "./pages/ActualizacionInfo";
const router = createBrowserRouter([
  {
    path: "/",
    element:<Login />,
  },
  {
    path: "/Actualiza-personal-Info",
    element:<Actualiza/>,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Personal-Info",
    element:
      <PersonalInfo />,
  },
  {
    path: "/Recuperacion-Contrasena1",
    element: <RecuperacionContrasena1 />,
  },
  {
    path: "/Recuperacion-Contrasena2",
    element: <RecuperacionContrasena2 />,
  },
  {
    path: "/Recuperacion-Contrasena3",
    element: <RecuperacionContrasena3 />,
  },
  {
    path: "/register",
    element: <Registro />,
  },
  {
    path: "/Clientes",
    element: 
      <Clientes />,
  },
  {
    path: "/Consultar-Pedidos",
    element: 
      <ConsultarPedidos />,
    
  },
  {
    path: "/Envios",
    element: 
      <Envios />,
    
  },
  {
    path: "/Habilitar-Solicitud",
    element: 
      <HabilitarSolicitud />,
    
  },
  {
    path: "/Repartidores",
    element: 
      <Repartidores />
    ,
    
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
