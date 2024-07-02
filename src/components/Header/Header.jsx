import { useNavigate } from "react-router-dom";
import { LoginLink, LogoutLink } from "../Authentication/AuthLink";
import { useState } from "react";

import logo from "../../assets/bank-logo.svg";
import "./Header.css";

const Header = ({ logoutButton }) => {
    const navigate = useNavigate();

    return (
        <header className="header">
            <div onClick={() => navigate("/")} className="logo-container">
                <img src={logo} alt="Logo" className="logo-image" />
                <h1 className="logo-text">Commercial Bank Admin Portal</h1>
            </div>
            {logoutButton && (
                <button className="logout-button" onClick={async () => {
                    await LogoutLink().then(() => {
                        navigate("/admin/login");
                    });
                }}>
                    Logout
                </button>
            )}
        </header>
    );
};

export default Header
