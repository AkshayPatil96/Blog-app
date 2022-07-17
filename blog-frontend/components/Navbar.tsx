import React from "react";
import Link from "next/link";
import Menu from "./Menu";
import Search from "./search";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand link" href={"/"}>
                Coders-Write
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
                <span className="navbar-toggler-icon">hello</span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <Search />
                <Menu />
            </div>
        </nav>
    );
};

export default Navbar;
