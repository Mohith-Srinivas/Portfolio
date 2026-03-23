import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./navbar.css";

/* Material UI */

import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  IconButton
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import PsychologyIcon from "@mui/icons-material/Psychology";
import WorkIcon from "@mui/icons-material/Work";
import ContactMailIcon from "@mui/icons-material/ContactMail";

function Navbar() {

  const [open, setOpen] = useState(false);

  const menuItems = [
    { text: "Home", path: "/", icon: <HomeIcon sx={{color:"white"}}/> },
    { text: "Education", path: "/education", icon: <SchoolIcon sx={{color:"white"}}/> },
    { text: "Skills", path: "/skills", icon: <PsychologyIcon sx={{color:"white"}}/> },
    { text: "Projects", path: "/projects", icon: <WorkIcon sx={{color:"white"}}/> },
    { text: "Contact", path: "/contact", icon: <ContactMailIcon sx={{color:"white"}}/> }
  ];

  return (
    <nav className="navbar">

      {/* LEFT SECTION */}
      <div className="left-section">

        <IconButton
          className="menu-btn"
          onClick={() => setOpen(true)}
        >
          <MenuIcon sx={{ color: "white", fontSize: 30 }} />
        </IconButton>

        <NavLink to="/" className="logo">
          Portfolio
        </NavLink>

      </div>


      {/* DESKTOP NAVIGATION */}

      <ul className="nav-links">

        <li>
          <NavLink to="/" end className={({isActive}) => isActive ? "active-link" : ""}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/education" className={({isActive}) => isActive ? "active-link" : ""}>
            Education
          </NavLink>
        </li>

        <li>
          <NavLink to="/skills" className={({isActive}) => isActive ? "active-link" : ""}>
            Skills
          </NavLink>
        </li>

        <li>
          <NavLink to="/projects" className={({isActive}) => isActive ? "active-link" : ""}>
            Projects
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" className={({isActive}) => isActive ? "active-link" : ""}>
            Contact
          </NavLink>
        </li>

      </ul>


      {/* MOBILE SIDEBAR */}

      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx:{
            background:"rgba(13,44,79,0.95)",
            color:"white",
            backdropFilter:"blur(12px)"
          }
        }}
      >

        <List sx={{ width: 260 }}>

          {menuItems.map((item) => (

            <ListItem key={item.text} disablePadding>

              <ListItemButton
                component={NavLink}
                to={item.path}
                onClick={() => setOpen(false)}
              >

                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>

                <ListItemText primary={item.text} />

              </ListItemButton>

            </ListItem>

          ))}

        </List>

      </Drawer>

    </nav>
  );
}

export default Navbar;