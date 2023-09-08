import React from "react";

const Footer = ({ name }) => {
  return (
    <footer className="navBar navbar-dark bg-dark">
      <div
        style={{
          textAlign: "center",
          padding: "20px",
        }}
      >
        <a className="navbar-brand">{name}</a>
      </div>
    </footer>
  );
};

export default Footer;
