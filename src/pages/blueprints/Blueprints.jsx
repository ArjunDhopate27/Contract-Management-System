import "./Blueprints.css";

import { blueprintsData } from "../../data/blueprintsData";
import BlueprintsTable from "../../components/blueprintsCompo/BlueprintsTable";

export default function Blueprints() {
  return (
    <div className="bp-page">
      {/* HEADER */}
      <div className="bp-header">
        <div>
          <h1>Blueprints</h1>
          <p>Manage and create contract templates for your organization.</p>
        </div>

        <button className="create-btn">
          + Create New Blueprint
        </button>
      </div>

      {/* FILTER BAR */}
      <div className="bp-filters">
        <div className="tabs">
          <button className="active">All Blueprints</button>
          <button>Active</button>
          <button>Drafts</button>
        </div>

        <button className="filter-btn">⚙ Filters</button>
      </div>

      {/* TABLE (COMPONENT) */}
      <BlueprintsTable data={blueprintsData} />
    </div>
  );
}
