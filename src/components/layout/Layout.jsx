import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "./layout.css";

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="layout">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="main-area">
        <Topbar onMenuClick={() => setSidebarOpen(true)} />
        <main className="content">{children}</main>
      </div>
    </div>
  );
}
