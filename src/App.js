import React, { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import Flower from './Components/Flower';
import Footer from './Components/Footer';
import Gallery from './Components/Gallery';
import Homepage from './Components/Homepage';
import NavBar from './Components/NavBar';
import MyFarm from './Components/MyFarm';
import Testimonials from './Components/Testimonials';

function App() {

  const [flowers, setFlowers] = useState([])

  useEffect(()=> {
    fetch("http://localhost:3000/data")
    .then((r)=> r.json())
    .then(data =>{
      console.log(data)
      setFlowers(data)
    })
  }, [])

  return (
    <div className="App">
        {/* <Routes>
          <Route path='/myfarm' element={<MyFarm flowers={flowers}/>}/>
        </Routes> */}
        <MyFarm flowers={flowers}/>
    </div>
  );
}

export default App;
