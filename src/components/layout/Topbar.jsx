import { useLocation } from "react-router-dom";
import "./topbar.css";

export default function Topbar({ onMenuClick }) {
  const location = useLocation();

  const isSearchPage =
    location.pathname.startsWith("/contracts") ||
    location.pathname.startsWith("/blueprints");

  const getPageTitle = () => {
    if (location.pathname === "/contracts/new") return "Create Contract";
    if (location.pathname === "/blueprints/new") return "Create Blueprint";
    return "";
  };

  return (
    <header className="topbar">
      {/* LEFT */}
      <div className="top-left">
        {/* ☰ hamburger (mobile only) */}
        <button className="menu-btn" onClick={onMenuClick}>
          ☰
        </button>

        <span className="logo-icon">📄</span>
        <span className="logo-text">Contractly</span>
      </div>

      {/* CENTER */}
      <div className="top-center">
        {isSearchPage ? (
          <input
            className="search"
            placeholder="Search contracts or blueprints..."
          />
        ) : (
          <h2 className="page-title">{getPageTitle()}</h2>
        )}
      </div>

      {/* RIGHT */}
      <div className="top-right">
        <span className="admin-name">Administrator</span>
        <div className="avatar">A</div>
      </div>
    </header>
  );
}
