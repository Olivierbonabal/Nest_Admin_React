import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { User } from "../models/user";

const Nav = () => {

  const [user, setUser] = useState(new User());

  //User ANONYME=====>>
  useEffect(() => {
    (
      async () => {
      const { data } = await axios.get(
        "user"
        //les cookies plutot ds l'index...
        // withCredentials: true,
      );

      setUser(new User(
        data.id,
        data.first_name,
        data.last_name,
        data.email,
        data.role
      ));
    })();
  }, []);

  const logout = async () => {
    await axios.post("logout", {});
  };

  return (
    <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">
        Nest_React 📊 DashBoard 
      </a>

      <ul className="my-2 my-md-0 mr-md-3">
        <Link className="p-2 text-white" to={"/profile"}>

          {/* {user?.first_name} {user?.last_name} */}
          {/* Faire 1 models */}
          
          {user.name}
        </Link>

        <Link
          className="p-2 text-white text-decoration-none"
          onClick={logout}
          to={"/login"}
        >
          Deconnexion
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
