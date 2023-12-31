import React, { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [activeLink, setActiveLink] = useState(false)
  return (
    <>
      <header className="d-flex justify-content-center py-3 custom-header">
        <nav className="nav nav-pills">
          <Link
            to="/"
            className={`nav-link ${!activeLink ? "active" : ""}`}

            onClick={() => setActiveLink(!activeLink)}
          >
            Accueil
          </Link>
          <Link
            to="/produits"
            className={`nav-link ${activeLink ? "active" : ""}`}
            onClick={() => setActiveLink(!activeLink)}
          >
            Produits
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
