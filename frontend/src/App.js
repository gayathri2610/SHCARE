import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import Aboutus from "./Components/Aboutus";
import Tracker from "./Components/Tracker";
import Login from "./Components/Login";
import Forgot from "./Components/Forgot";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div
        className=""
        style={{
          backgroundColor: "#EDE6DB",
        }}
      ></div>
      <Routes>
        <Route path="/h" element={<Home />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<Forgot />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
