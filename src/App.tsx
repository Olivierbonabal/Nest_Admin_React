import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Products from "./pages/products/Products";
import Register from "./pages/Register";
import RoleCreate from "./pages/roles/RoleCreate";
import RoleEdit from "./pages/roles/RoleEdit";
import Roles from "./pages/roles/Roles";
import UserCreate from "./pages/users/UserCreate";
import UserEdit from "./pages/users/UserEdit";
import Users from "./pages/users/Users";
import ProductCreate from './pages/products/ProductCreate';
import ProductEdit from "./pages/products/ProductEdit";
import Orders from './pages/orders/Orders';
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} index element={<Dashboard />} />
          <Route path={"/profile"} element={<Profile />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/users"} element={<Users />} />
          <Route path={"/users/create"} element={<UserCreate />} />
          <Route path={"/users/:id/edit"} element={<UserEdit />} />
          <Route path={"/roles"} index element={<Roles />} />
          <Route path={"/roles/create"} index element={<RoleCreate />} />
          <Route path={"/roles/edit"} index element={<RoleEdit />} />
          <Route path={"/products"} index element={<Products />} />
          <Route path={"/products/create"} index element={<ProductCreate />} />
          <Route path={"/products/:id/edit"} index element={<ProductEdit />} />
          <Route path={"/orders"} index element={<Orders />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
