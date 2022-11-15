import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RoleCreate from "./pages/roles/RoleCreate";
import Roles from "./pages/roles/Roles";
import UserCreate from "./pages/users/UserCreate";
import UserEdit from "./pages/users/UserEdit";
import Users from "./pages/users/Users";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} index element={<Dashboard />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/users"} element={<Users />} />
          <Route path={"/users/create"} element={<UserCreate />} />
          <Route path={"/users/:id/edit"} element={<UserEdit />} />
          <Route path={"/roles"} index element={<Roles />} />
          <Route path={"/roles/create"} index element={<RoleCreate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
