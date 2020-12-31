import React from "react";
import { Link } from "react-router-dom";

const headerStyle = {
  backgroundColor: "#333333",
  color: "#ffffff",
  textAlign: "center",
  padding: "10px",
};

const linkStyle = {
  color: "#ffffff",
  textDecoration: "none",
};

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1>Todo List</h1>
      <Link style={linkStyle} to="/">
        Home
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/about">
        About
      </Link>
    </header>
  );
}
