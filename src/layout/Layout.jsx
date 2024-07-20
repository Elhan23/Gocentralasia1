import React from "react";
import NavBar from "./base/NavBar/NavBar";
import Header from "./base/Header/Header";
import Footer from "./base/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout({ children }) {
  return (
    <div>
      <NavBar />
      <Header />
      <main>
        {children}
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
