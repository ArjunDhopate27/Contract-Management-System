import "./CreateContract.css";

export default function CreateContract() {
  return (
    <div className="cc-page">
      {/* HEADER */}
      <div className="cc-header">
        <h1>Create New Contract</h1>
        <button className="primary-btn">Save Contract</button>
      </div>

      <p className="subtitle">
        Draft your contract by selecting a template and filling in the required variables.
      </p>

      <div className="cc-layout">
        {/* LEFT PANEL */}
        <aside className="left-panel">
          <div className="panel-card">
            <h4>Contract Setup</h4>

            <label>Contract Name</label>
            <input placeholder="e.g. Q3 Employment Agreement" />

            <label>Select Blueprint</label>
            <select>
              <option>Employment Agreement (Standard)</option>
              <option>Non-Disclosure Agreement</option>
              <option>Service Agreement</option>
            </select>
          </div>

          <div className="info-box">
            <strong>ℹ Dynamic Generation</strong>
            <p>
              Fields on the right will update based on the selected blueprint variables.
            </p>
          </div>
        </aside>

        {/* RIGHT DOCUMENT */}
        <section className="document">
          <div className="doc-paper">
            <div className="doc-header">
              <div className="logo-box">🏢</div>
              <div className="doc-meta">
                <p className="draft">DRAFT CONTRACT</p>
                <p className="ref">Ref: #AUTO-2024-001</p>
              </div>
            </div>

            <h2 className="doc-title">Employment Agreement</h2>

            {/* FIELD */}
            <div className="doc-field">
              <label>Effective Date</label>
              <input type="date" />
            </div>

            <div className="doc-field">
              <label>Employee Full Name</label>
              <input placeholder="John Doe" />
            </div>

            <div className="doc-field textarea">
              <label>Role & Responsibility</label>
              <textarea placeholder="Brief description of duties..." />
            </div>

            <div className="doc-field checkbox">
              <label>Inclusions</label>
              <div className="checks">
                <label><input type="checkbox" defaultChecked /> Medical Insurance</label>
                <label><input type="checkbox" /> Stock Options</label>
              </div>
            </div>

            {/* SIGNATURE */}
            <div className="signatures">
              <div>
                <span>Company Representative</span>
                <div className="sign-box">Auto-generated</div>
              </div>
              <div>
                <span>Employee Signature</span>
                <div className="sign-box dashed">Sign Here</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

