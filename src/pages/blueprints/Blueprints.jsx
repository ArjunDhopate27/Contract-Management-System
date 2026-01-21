import "./Blueprints.css";

const blueprints = [
  {
    name: "Standard NDA",
    category: "Legal · General",
    fields: 12,
    date: "Oct 24, 2023",
  },
  {
    name: "Service Agreement",
    category: "Sales · Clients",
    fields: 18,
    date: "Oct 20, 2023",
  },
  {
    name: "Employment Contract",
    category: "HR · Hiring",
    fields: 25,
    date: "Oct 15, 2023",
  },
  {
    name: "Partnership Deed",
    category: "Legal · Business",
    fields: 30,
    date: "Oct 12, 2023",
  },
  {
    name: "Lease Agreement",
    category: "Operations · Real Estate",
    fields: 22,
    date: "Oct 05, 2023",
  },
];

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

      {/* TABLE */}
      <div className="bp-table">
        <table>
          <thead>
            <tr>
              <th>Blueprint Name</th>
              <th>Dynamic Fields</th>
              <th>Created Date</th>
              <th className="right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {blueprints.map((b, i) => (
              <tr key={i}>
                <td>
                  <div className="name-cell">
                    <div className="icon">📄</div>
                    <div>
                      <div className="title">{b.name}</div>
                      <div className="sub">{b.category}</div>
                    </div>
                  </div>
                </td>

                <td>
                  <span className="field-pill">{b.fields} Fields</span>
                </td>

                <td className="date">{b.date}</td>

                <td className="right">
                  <button className="icon-btn">👁</button>
                  <button className="use-blueprint">
                    Use Blueprint
                  </button>
                  <button className="icon-btn">⋮</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
