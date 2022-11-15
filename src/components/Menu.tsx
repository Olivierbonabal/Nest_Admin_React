import { NavLink } from "react-router-dom";

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
            <NavLink to={'/'} className="nav-link">
              DashBoard
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to={'/users'} className="nav-link">
              Utilisateurs
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to={'/roles'} className="nav-link">
              Roles
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to={'/products'} className="nav-link">
              Produits
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
