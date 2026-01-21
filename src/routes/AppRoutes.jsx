import { Routes, Route, Navigate } from "react-router-dom";

import Contracts from "../pages/contracts/Contracts";
import CreateContract from "../pages/contracts/CreateContract";
import Blueprints from "../pages/blueprints/Blueprints";
import CreateBlueprint from "../pages/blueprints/CreateBlueprint";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/contracts" />} />

      <Route path="/contracts" element={<Contracts />} />
      <Route path="/contracts/new" element={<CreateContract />} />

      <Route path="/blueprints" element={<Blueprints />} />
      <Route path="/blueprints/new" element={<CreateBlueprint />} />
    </Routes>
  );
}
