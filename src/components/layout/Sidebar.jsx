import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar({ open, onClose }) {
  return (
    <aside className={`sidebar ${open ? "open" : ""}`}>
      <div className="sidebar-header">
        <h2 className="logo">Contractly</h2>
        <button className="close-btn" onClick={onClose}>✕</button>
      </div>

      <nav onClick={onClose}>
        <NavLink to="/contracts">Contracts</NavLink>
        <NavLink to="/contracts/new">Create Contract</NavLink>
        <NavLink to="/blueprints">Blueprints</NavLink>
        <NavLink to="/blueprints/new">Create Blueprint</NavLink>
      </nav>
    </aside>
  );
}
