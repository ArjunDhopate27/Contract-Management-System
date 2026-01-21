import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="logo">Contractly</h2>

      <nav>
        <NavLink to="/contracts">Contracts</NavLink>
        <NavLink to="/contracts/new">Create Contract</NavLink>
        <NavLink to="/blueprints">Blueprints</NavLink>
        <NavLink to="/blueprints/new">Create Blueprint</NavLink>
      </nav>
    </aside>
  );
}
