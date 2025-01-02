import {RouterProvider, Routes, Route, createBrowserRouter, Navigate, Link} from 'react-router-dom'
import "slick-carousel/slick/slick.css"
import { SpinBike } from './pages'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify'
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa6';

function App() {

  useEffect(() =>{
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  })

  const router = createBrowserRouter([{
    path: "*",
    Component: Root
  }])

  const WhatsLinkUs = "https://wa.link/b9s8p8";

  function Root() {
      return(
        <div>
           <div className="fixed bottom-1/3 md:right-10 right-5 bg-neutral-950 p-2 rounded-full flex justify-center items-center cursor-pointer z-50 shadow">
      <Link to={WhatsLinkUs} target="_blank" >
        <FaWhatsapp size={40} color='white'/>
      </Link>
      </div>
          <Routes>
            <Route path='/' element={<Navigate replace to="/spin" />} />
            <Route path='/spin' element={<SpinBike />} />
          </Routes>
          <ToastContainer />
        </div>
      )
  }

  return (
    <div>
      <RouterProvider  router={router}/>
    </div>
  )
}

export default App
