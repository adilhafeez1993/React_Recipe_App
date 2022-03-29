import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

// styles
import "./Navbar.css";

export default function Navbar() {
  const { color } = useTheme();

  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <Link to="/" className="brand">
          <h1>Cooking Ninja</h1>
        </Link>

        <Link to="/create">
          <h2>Create Recipe</h2>
        </Link>
      </nav>
    </div>
  );
}
