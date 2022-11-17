import { NavLink } from "react-router-dom";
import { Basket, ClipboardData, Gear, PersonCircle, Table } from 'react-bootstrap-icons';

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
            <div className="gap-3">
              <Table color="red" size={20} className="my-2"/>
              </div>
              DashBoard
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to={'/users'} className="nav-link">
            <div className="gap-3">
              <PersonCircle color="red" size={20} className="my-2"/>
              </div>
              Utilisateurs
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to={'/roles'} className="nav-link">
            <div className="gap-3">
              <Gear color="red" size={20} className="my-2"/>
              </div>
              Attribution des Roles
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to={'/products'} className="nav-link">
            <div className="gap-3">
              <Basket color="red" size={20} className="my-2"/>
              </div>
              Les Produits
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to={'/orders'} className="nav-link">
            <div className="gap-3">
              <ClipboardData color="red" size={20} className="my-2"/>
              </div>
              Les Commandes
            </NavLink>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Menu;
