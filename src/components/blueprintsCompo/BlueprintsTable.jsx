export default function BlueprintsTable({ data }) {
  return (
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
          {data.map((b) => (
            <tr key={b.id}>
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
  );
}
