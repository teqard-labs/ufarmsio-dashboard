import "./App.css";
import "animate.css/animate.min.css";
import Card from "./componets/Card";
import Install from "./componets/Install";
import Login from "./componets/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./componets/Farmdashboard";
import Requests from "./componets/Requests";
import PlantData from "./componets/Plant_data";
import MyFarms from "./componets/DashBoard";
import React from "react";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/:name/" element={<Install />} />
        <Route path="/ex" element={<Card/>}/>
        <Route path="/dashboard" element={<DashBoard/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/myfarms" element={<MyFarms/>}/>
        <Route path="/requests" element={<Requests/>}/>

        {/* <Route path="/data" element={<PlantData/>}/> */}
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>

    
  );

  function Home(){
    window.location.replace('https://r0king.github.io/ufarmio-website/');
    return null;
  }
}

export default App;
