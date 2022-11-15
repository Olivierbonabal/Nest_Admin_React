import React from "react";
import { Link, NavLink } from "react-router-dom";

//Method hooks
const Menu = () => {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">

          <li className="nav-item">
            <NavLink to={'/'}className="nav-link">
              DashBoard
            </NavLink>
          </li>

          <li className="nav-item">
            <Link to={'/users'} className="nav-link">
              Users
            </Link>
          </li>

        </ul>
      </div>

    </nav>
  );
};

export default Menu;
