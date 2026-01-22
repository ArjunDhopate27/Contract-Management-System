import { useState } from "react";
import "./Contracts.css";

import { contractsData } from "../../data/contractsData";
import ContractCard from "../../components/contractsCompo/ContractCard";

export default function Contracts() {
  const [selectedContract, setSelectedContract] = useState(null);

  return (
    <div className="contracts-page">
      {/* HEADER */}
      <div className="contracts-header">
        <h1>Contracts</h1>
      </div>

      {/* STATS */}
      <div className="stats">
        <div className="stat-card">
          <span>Active Contracts</span>
          <h2>128</h2>
        </div>
        <div className="stat-card yellow">
          <span>Pending Review</span>
          <h2>45</h2>
        </div>
        <div className="stat-card green">
          <span>Signed This Month</span>
          <h2>892</h2>
        </div>
      </div>

      {/* TABS */}
      <div className="table-header">
        <div className="tabs">
          <button className="active">All Contracts</button>
          <button>Active</button>
          <button>Pending</button>
          <button>Signed</button>
        </div>

        <button className="filter-btn">Advanced Filters</button>
      </div>

      {/* TABLE */}
      <div className="contracts-table">
        <table>
          <thead>
            <tr>
              <th>Contract Name</th>
              <th>Blueprint</th>
              <th>Status</th>
              <th>Created Date</th>
              <th className="right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {contractsData.map((c) => (
              <tr key={c.id}>
                <td className="contract-name">
                  <span className="doc">📄</span>
                  {c.title}
                </td>

                <td className="blueprint">
                  {c.blueprint || "Standard Template"}
                </td>

                <td>
                  <span
                    className={`status ${c.status
                      .replace(" ", "")
                      .toLowerCase()}`}
                  >
                    {c.status}
                  </span>
                </td>

                <td className="date">{c.date}</td>

                <td className="right">
                  <button
                    className="view-btn"
                    onClick={() => setSelectedContract(c)}
                  >
                    View
                  </button>
                  <button className="dots">⋮</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* FULL SIZE CONTRACT VIEW */}
      <ContractCard
        contract={selectedContract}
        onClose={() => setSelectedContract(null)}
      />
    </div>
  );
}
