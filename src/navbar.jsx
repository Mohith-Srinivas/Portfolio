import React, { useState } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {

  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Education", path: "/education" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">

        <div className="nav-left">
          <MenuIcon
            className="menu-icon"
            onClick={() => setOpen(true)}
          />

          <NavLink to="/" className="logo">
            Portfolio
          </NavLink>
        </div>

      </nav>


      {/* OVERLAY */}
      {open && (
        <div
          className="overlay"
          onClick={() => setOpen(false)}
        ></div>
      )}


      {/* SIDEBAR */}
      <div className={`sidebar ${open ? "active" : ""}`}>

        <div className="sidebar-header">
          <h2>Portfolio</h2>

          <CloseIcon
            className="close-icon"
            onClick={() => setOpen(false)}
          />
        </div>

        <ul className="menu">
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive ? "active-link" : ""
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

      </div>
    </>
  );
}

export default Navbar;