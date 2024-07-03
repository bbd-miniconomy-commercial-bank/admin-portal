import Header from "../../components/Header/Header.jsx"
import Navigation from "../../components/Navigation/Navigation.jsx";
import React from 'react';
import { Outlet } from "react-router-dom";

const Main = ({ isLoggedIn, handleLogout }) => {
  return (
    <div>
      <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      {isLoggedIn && <Navigation />}
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Main;