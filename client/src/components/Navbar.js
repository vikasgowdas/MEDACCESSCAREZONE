import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useAppContext } from "../context/appContext";
import Logo from "./Logo";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { toggleSidebar, logoutUser, user } = useAppContext();
  return (
    <Wrapper>
      <div className="nav-center">
        <button className="toggle-btn">
          <FaAlignLeft />
          {/* <Logo /> */}
        </button>

        <div className="navbar">
          {/* <h3 className="logo-text">dashboard</h3> */}
          <div className="nav-bar-link">
            <NavLink to="/">Dashboard </NavLink>
          </div>
          <div className="nav-bar-link">
            <NavLink to="/appointment">Appointment</NavLink>
          </div>
          <div className="nav-bar-link">
            <NavLink to="/all-medicines">Medicines</NavLink>
          </div>
          {user.role == "parmacy" ? (
            <div className="nav-bar-link">
              <NavLink to="/add-medicine"> Add Medicine </NavLink>
            </div>
          ) : (
            ""
          )}
          <div className="nav-bar-link">
            <NavLink to="/profile">Profile</NavLink>
          </div>
        </div>

        <div className="btn-container">
          <button className="btn" onClick={() => setShowLogout(!showLogout)}>
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
            <button className="dropdown-btn" onClick={logoutUser}>
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
