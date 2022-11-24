import logo from "./logo.svg";
import "./App.css";
import "animate.css/animate.min.css";
import Card from "./componets/Card";
import Install from "./componets/Install";
import Login from "./componets/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./componets/DashBoard";
function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/:name/" element={<Install />} />
        <Route path="/ex" element={<Card/>}/>
        <Route path="/dashboard" element={<DashBoard/>}/>
        <Route path="/dashboard/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
