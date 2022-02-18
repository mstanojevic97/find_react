import React from 'react';
import { render } from "react-dom";
import './index.css';
import Hello from './components/hello';
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


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path='hello' element={<Hello/>} />
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="lala" element={<Lala />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
