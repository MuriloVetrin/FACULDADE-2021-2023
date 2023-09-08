import React from "react";

const Navbar = ({ brand, sobre }) => {
  return (
    <nav className="navBar navbar-dark bg-dark">
      <div
        style={{
          textAlign: "center",
          padding: "20px",
        }}
      >
        <a className="navbar-brand text-uppercase p-5" href="/">
          {brand}
        </a>
        <a className="navbar-brand text-uppercase p-5" href="/sobre">
          {sobre}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
