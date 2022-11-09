import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu";
import Nav from "./components/Nav";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Users from "./pages/Users";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
                <Route path={"/"} element={<Dashboard />} />
                <Route path={"/users"} element={<Users />} />
                <Route path={"/register"} element={<Register />} />
              </Routes>
      

      </BrowserRouter>
    </div>
  );
}

export default App;
