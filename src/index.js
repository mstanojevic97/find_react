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
import AdminFreight from '../src/pages/adminFreights'


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
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
