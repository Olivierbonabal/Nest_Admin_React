import { NavLink } from "react-router-dom";
import { Basket, Gear, PersonCircle, Table } from 'react-bootstrap-icons';

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
              <Table/>
              DashBoard
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to={'/users'} className="nav-link">
              <PersonCircle/>
              Utilisateurs
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to={'/roles'} className="nav-link">
              <Gear/>
              Roles
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to={'/products'} className="nav-link">
              <Basket/>
              Produits
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
