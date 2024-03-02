import React from "react";
import logo from "../assets/images/logo.jpg"

export default function Header() {
  return (
    <nav className="nav-bar">
      <p><img src={logo} alt = "logo" height="90"/></p>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/create">Create a Listing</a>
        </li>
      </ul>
    </nav>
  );
}
