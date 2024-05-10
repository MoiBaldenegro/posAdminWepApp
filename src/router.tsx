// routes.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, LoginPage, CreateAccount, Config, Dashboard, Ventas, VentaTypes, Promociones, Caja, Reservaciones, Tableros, Usuarios, Mesas, Reportes, Ayuda } from './components';
import CatalogoRouter from './routes/catalogo';
import Landing from './pages/landing/landing';
import NotFound from './pages/notFound/notFound';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing/>} ></Route>
      <Route path="/home" element={<Home />}>
        <Route path="config" element={<Config />} />
        <Route path="catalogo/*" element={<CatalogoRouter />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="sales" element={<Ventas />} />
        <Route path="salesTypes" element={<VentaTypes />} />
        <Route path="discounts" element={<Promociones />} />
        <Route path="till" element={<Caja />} />
        <Route path="reservations" element={<Reservaciones />} />
        <Route path="panels" element={<Tableros />} />
        <Route path="users" element={<Usuarios />} />
        <Route path="tables" element={<Mesas />} />
        <Route path="reports" element={<Reportes />} />
        <Route path="help" element={<Ayuda />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/create/account" element={<CreateAccount />} />
      <Route path="*" element={<NotFound/>} ></Route>
    </Routes>
  );
};

export default AppRoutes;