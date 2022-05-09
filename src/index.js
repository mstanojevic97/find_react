import React from 'react';
import { render } from "react-dom";
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import Lala from "./pages/lala";
import MainLayout from "./layout/mainLayout";
import Admin from './pages/admin';
import AdminFreight from '../src/pages/adminFreights';
import Producer from '../src/pages/producer';
import Supplier from '../src/pages/supplier';
import LogOut from './pages/logOut'


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="lala" element={<Lala />} />
        <Route path="admin" element={<Admin />} />
        <Route path="freight" element={<AdminFreight />} />
        <Route path="producer" element={<Producer />} />
        <Route path="supplier" element={<Supplier />} />
        <Route path="logout" element={<LogOut/>}/>
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
