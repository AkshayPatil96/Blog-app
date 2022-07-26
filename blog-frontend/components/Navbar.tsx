import React from "react";
import Link from "next/link";
import Menu from "./Menu";
import Search from "./search";
import { useSelector } from "react-redux";
import { RootStore } from "../utils/TypeScript";

const Navbar = () => {
  const { auth } = useSelector((state: RootStore) => state);

  return (
    <nav className="navbar navbar-expand-lg">
      <Link href={"/"}>
        <a className="navbar-brand link">Coders-Write</a>
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon">
          {auth.access_token && auth.user?.name}
        </span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <Search />

        <Menu />
      </div>
    </nav>
  );
};

export default Navbar;
