import ReactDOM from 'react-dom/client';
import './fonts/fonts.css';
import './index.css';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './pages/landing/landing.tsx';
// update
import {
  Config,
  CreateAccount,
  Dashboard,
  Home,
  LoginPage,
  Mesas,
  Reportes,
  Tableros,
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
import Cuentas from './components/main/periodoOperativo/cuentas/cuentas.tsx';
import Pagos from './components/main/periodoOperativo/pagos/pagos.tsx';
import Cancelaciones from './components/main/periodoOperativo/cancelaciones/cancelaciones.tsx';
import Turnos from './components/main/usuarios/turnos/turnos.tsx';
import Departamentos from './components/main/usuarios/departamentos/departamentos.tsx';
import Perfiles from './components/main/usuarios/perfiles/perfiles.tsx';
import Empleados from './components/main/usuarios/empleados/empleados.tsx';
import Autorizaciones from './components/main/usuarios/autorizaciones/autorizaciones.tsx';
import Asistencias from './components/main/usuarios/asistentes/asistencias.tsx';
import GetStarted from './pages/getStarted.tsx/getStarted.tsx';
import ConfigPos from './components/main/configuracion/configPos/configPos.tsx';
import ReOpenings from './components/main/periodoOperativo/reaperturas/reaperturas.tsx';
import Discounts from './components/main/periodoOperativo/descuentos/descuentos.tsx';
import Courtesies from './components/main/periodoOperativo/Cortesias/cortesias.tsx';
import CashierClose from './components/main/periodoOperativo/cierreDeCaja/cierreDeCaja.tsx';
import Incoming from './components/main/periodoOperativo/IngresosEgresos/ingresos.tsx';
import CashWithdrawals from './components/main/periodoOperativo/retirosParciales/retirosParciales.tsx';
import HistoricoDeVentas from './components/main/historialDeVentas/historicoDeCuentas/historicoDeVentas.tsx';
import HistoricoDePagos from './components/main/historialDeVentas/historicoDePagos/historicoDePagos.tsx';
import HistoricoDeDescuentos from './components/main/historialDeVentas/historicoDeDescuentos/historicoDeDescuentos.tsx';
import HistoricoDeCancelaciones from './components/main/historialDeVentas/historicoDeCancelaciones/historicoDeCancelaciones.tsx';
import HistoricoDeCierresDeCaja from './components/main/historialDeVentas/historicoDeCierresDeCaja/historicoDeCierresDeCaja.tsx';
import HistoricoIngresosEgresos from './components/main/historialDeVentas/historicoIngresosEgresos/historicoIngresosEgresos.tsx';
import HistoricoDeRetiros from './components/main/historialDeVentas/historicoDeRetiros/historicoDeRetiros.tsx';
import HistoricoDePeriodosOperativos from './components/main/historialDeVentas/historicoDePeriodosOpertivos/historicoDePeriodosOperativos.tsx';
import HistoricoDeCortesias from './components/main/historialDeVentas/historicoDeCortesias/historicoDeCortesias.tsx';
import HistoricoDeReaperturas from './components/main/historialDeVentas/historicoDeReaperturas/historicoDeReaperturas.tsx';
import Groups from './components/main/catalogo/groups/groups.tsx';
import { SellTypes } from './lib/autorizations.lib.ts';

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
            path: 'dashboard',
            element: <Main />,
            children: [
              {
                path: 'index',
                element: <Dashboard />,
              },
            ],
          },
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
                path: 'groups',
                element: <Groups />,
              },
              {
                path: 'sell-types',
                element: <VentaTypes />,
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
                path: 'reopenings',
                element: <ReOpenings />,
              },
              {
                path: 'discounts',
                element: <Discounts />,
              },
              {
                path: 'cancellations',
                element: <Cancelaciones />,
              },
              {
                path: 'courtesies',
                element: <Courtesies />,
              },
              {
                path: 'close-till',
                element: <CashierClose />,
              },
              {
                path: 'incoming',
                element: <Incoming />,
              },
              {
                path: 'withdrawals',
                element: <CashWithdrawals />,
              },
            ],
          },
          {
            path: 'history',
            element: <Main />,
            children: [
              {
                path: 'sells',
                element: <HistoricoDeVentas />,
              },
              {
                path: 'payments',
                element: <HistoricoDePagos />,
              },
              {
                path: 'reopenings',
                element: <HistoricoDeReaperturas />,
              },
              {
                path: 'discounts',
                element: <HistoricoDeDescuentos />,
              },
              {
                path: 'cancellations',
                element: <HistoricoDeCancelaciones />,
              },
              {
                path: 'courtesies',
                element: <HistoricoDeCortesias />,
              },
              {
                path: 'close-till',
                element: <HistoricoDeCierresDeCaja />,
              },
              {
                path: 'incoming',
                element: <HistoricoIngresosEgresos />,
              },
              {
                path: 'withdrawals',
                element: <HistoricoDeRetiros />,
              },
              {
                path: 'periods',
                element: <HistoricoDePeriodosOperativos />,
              },
            ],
          },
          {
            path: 'tables',
            element: <Main />,
            children: [
              {
                path: 'index',
                element: <Mesas />,
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
          {
            path: 'panels',
            element: <Main />,
            children: [
              {
                path: 'index',
                element: <Tableros />,
              },
            ],
          },
          {
            path: 'config',
            element: <Main />,
            children: [
              {
                path: 'admin',
                element: <Config />,
              },
              {
                path: 'pos',
                element: <ConfigPos />,
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
