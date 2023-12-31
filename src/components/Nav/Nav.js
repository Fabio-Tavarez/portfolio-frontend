import React from "react";
import { Link } from "react-router-dom";
import "./nav.css"

function Nav() {
  return (
    <nav>
      <h1>Manga Haven</h1>
      <Link to="/">Browse our Products</Link>
      <Link to="/create-book">Add a new book</Link>
    </nav>
  );
}

export default Nav;
