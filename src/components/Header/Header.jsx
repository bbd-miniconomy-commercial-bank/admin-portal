import React from 'react';
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo_large.svg";
import title from "../../assets/bank-l-title.svg"
import "./Header.css";

const Header = ({ isLoggedIn, handleLogout }) => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div onClick={() => navigate("/")} className="logo-container">
        <img src={logo} alt="Logo" className="logo-image" />
        <h1 className="logo-text">Commercial Bank Admin Portal</h1>
      </div>
      {isLoggedIn && (
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      )}
    </header>
  );
};

export default Header;
