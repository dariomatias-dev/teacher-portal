import { Link, useLocation } from "react-router-dom";

import { REPOSITORY } from "../data/repository";

export const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="navigation-bar">
      <div className="nav-brand">ACADEMIA</div>

      <div className="nav-links">
        <Link to="/" className={`nav-item ${pathname === "/" ? "active" : ""}`}>
          Início
        </Link>

        {REPOSITORY.map((t) => (
          <Link
            key={t.uid}
            to={`/teacher/${t.uid}`}
            className={`nav-item ${pathname.includes(t.uid) ? "active" : ""}`}
          >
            {t.name.split(" ").pop()}
          </Link>
        ))}
      </div>
    </nav>
  );
};
