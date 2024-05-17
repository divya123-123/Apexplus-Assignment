import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/" className="onclick">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/addscenario" className="onclick">
            AddScenario
          </NavLink>
        </li>
        <li>
          <NavLink to="/allscenarios" className="onclick">
            AllScenarios
          </NavLink>
        </li>
        <li>
          <NavLink to="/addvehicle" className="onclick">
            AddVehicle
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
