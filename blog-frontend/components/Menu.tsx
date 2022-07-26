import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { RootStore } from "../utils/TypeScript";

const bfLoginLinks = [
  { label: "Login", path: "/login" },
  { label: "Register", path: "/register" },
];

const Menu = () => {
  const { auth } = useSelector((state: RootStore) => state);

  return (
    <ul className="navbar-nav ms-auto">
      {bfLoginLinks.map((link, index) => (
        <li key={index} className="nav-item">
          <Link href={link.path}>
            <a className="nav-link link">{link.label}</a>
          </Link>
        </li>
      ))}
      {bfLoginLinks.map((link, index) => (
        <li key={index} className="nav-item">
          <Link href={link.path}>
            <a className="nav-link link">{link.label}</a>
          </Link>
        </li>
      ))}

      <li className="nav-item dropdown">
        <span
          className="nav-link dropdown-toggle"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {auth.access_token && auth.user?.name}
        </span>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </li>
    </ul>``
  );
};

export default Menu;
