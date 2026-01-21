import "./CreateBlueprint.css";

export default function CreateBlueprint() {
  return (
    <div className="cb-page">
      {/* TOP BAR */}
      <div className="cb-top">
        <h2>Create New Blueprint</h2>

        <div className="top-actions">
          <button className="ghost-btn">Cancel</button>
          <button className="primary-btn">Save Blueprint</button>
        </div>
      </div>

      {/* SUBTITLE */}
      <p className="subtitle">
        Define the structure and fields for your contract documents to automate your workflow.
      </p>

      {/* GENERAL INFO */}
      <div className="card">
        <h3>General Information</h3>
        <p>Give your blueprint a recognizable name.</p>

        <label>Blueprint Name</label>
        <input placeholder="e.g. Standard Employment Agreement" />
      </div>

      {/* DOCUMENT FIELDS */}
      <div className="fields-header">
        <div>
          <h3>Document Fields</h3>
          <p>Configure the dynamic fields for this blueprint.</p>
        </div>

        <button className="add-btn">+ Add Field</button>
      </div>

      {/* FIELD ROW 1 */}
      <div className="field-row">
        <div>
          <label>Field Type</label>
          <select>
            <option>Short Text</option>
            <option>Date</option>
            <option>Email</option>
            <option>Signature</option>
          </select>
        </div>

        <div className="grow">
          <label>Field Label</label>
          <input placeholder="Full Name" />
        </div>

        <div>
          <label>X Coord</label>
          <input type="number" placeholder="0" />
        </div>

        <div>
          <label>Y Coord</label>
          <input type="number" placeholder="0" />
        </div>

        <button className="delete">🗑</button>
      </div>

      {/* FIELD ROW 2 */}
      <div className="field-row">
        <div>
          <label>Field Type</label>
          <select>
            <option>Signature</option>
          </select>
        </div>

        <div className="grow">
          <label>Field Label</label>
          <input placeholder="Employee Signature" />
        </div>

        <div>
          <label>X Coord</label>
          <input type="number" value="120" />
        </div>

        <div>
          <label>Y Coord</label>
          <input type="number" value="450" />
        </div>

        <button className="delete">🗑</button>
      </div>

      {/* ADD MORE */}
      <div className="add-more">
        + Add another field to this blueprint
      </div>

      {/* FOOTER */}
      <div className="footer">
        <span>✔ All changes are automatically saved to draft.</span>

        <div>
          <button className="ghost-btn">Discard</button>
          <button className="primary-btn">Save Blueprint</button>
        </div>
      </div>
    </div>
  );
}

