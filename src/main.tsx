import ReactDOM from 'react-dom/client';
import './fonts/fonts.css';
import './index.css';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './pages/landing/landing.tsx';
import {
  Caja,
  CreateAccount,
  Home,
  LoginPage,
  Reportes,
  VentaTypes,
} from './components.tsx';
import NotFound from './pages/notFound/notFound.tsx';
import ProtectedRoute from './pages/protectedRoute/protectedRoute.tsx';
import Categorias from './components/main/catalogo/categorias/categorias.tsx';
import ProductosYPrecios from './components/main/catalogo/productosYPrecios/productosYPrecios.tsx';
import Complementos from './components/main/catalogo/complementos/complementos.tsx';
import Modificaciones from './components/main/catalogo/modificaciones/modificaciones.tsx';
import MenusYRecetas from './components/main/catalogo/menusYRecetas/menusYRecetas.tsx';
import Main from './components/main/main.tsx';
import Cuentas from './components/main/ventas/cuentas/cuentas.tsx';
import Pagos from './components/main/ventas/pagos/pagos.tsx';
import Cancelaciones from './components/main/ventas/cancelaciones/cancelaciones.tsx';
import Turnos from './components/main/usuarios/turnos/turnos.tsx';
import Departamentos from './components/main/usuarios/departamentos/departamentos.tsx';
import Perfiles from './components/main/usuarios/perfiles/perfiles.tsx';
import Empleados from './components/main/usuarios/empleados/empleados.tsx';
import Autorizaciones from './components/main/usuarios/autorizaciones/autorizaciones.tsx';
import Asistencias from './components/main/usuarios/asistentes/asistencias.tsx';
import GetStarted from './pages/getStarted.tsx/getStarted.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/auth/register',
    element: <CreateAccount />,
  },
  {
    path: '/get-started',
    element: <GetStarted />,
  },
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        path: 'home',
        element: <Home />,
        children: [
          {
            path: 'catalogo',
            element: <Main />,
            children: [
              {
                path: 'categories',
                element: <Categorias />,
              },
              {
                path: 'products&prices',
                element: <ProductosYPrecios />,
              },
              {
                path: 'dishes',
                element: <Complementos />,
              },
              {
                path: 'modifications',
                element: <Modificaciones />,
              },
              {
                path: 'menus&recipes',
                element: <MenusYRecetas />,
              },
            ],
          },
          {
            path: 'ventas',
            element: <Main />,
            children: [
              {
                path: 'bills',
                element: <Cuentas />,
              },

              {
                path: 'payments',
                element: <Pagos />,
              },
              {
                path: 'cancellations',
                element: <Cancelaciones />,
              },
            ],
          },
          {
            path: 'sellTypes',
            element: <Main />,
            children: [
              {
                path: 'sellTypes',
                element: <VentaTypes />,
              },
            ],
          },
          {
            path: 'till',
            element: <Main />,
            children: [
              {
                path: 'till',
                element: <Caja />,
              },
            ],
          },
          {
            path: 'usuarios',
            element: <Main />,
            children: [
              {
                path: 'shifts',
                element: <Turnos />,
              },
              {
                path: 'departaments',
                element: <Departamentos />,
              },
              {
                path: 'profiles',
                element: <Perfiles />,
              },
              {
                path: 'employees',
                element: <Empleados />,
              },
              {
                path: 'authorizations',
                element: <Autorizaciones />,
              },
              {
                path: 'assistants',
                element: <Asistencias />,
              },
            ],
          },
          {
            path: 'reports',
            element: <Main />,
            children: [
              {
                path: 'reports',
                element: <Reportes />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
// aqui le main.tsx // import { Outlet } from "react-router-dom";
