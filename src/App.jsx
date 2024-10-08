import React from 'react'
import Home from './Pages/Home/Home'
import RootElement from './RootElement/RootElement';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootElement />}>
      <Route index element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>     
      <Route path="/contact" element={<Contact />}></Route>     
    </Route>
  )
);

const App = () => {
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}

export default App
