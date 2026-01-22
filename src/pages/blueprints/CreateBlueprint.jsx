import { useState } from "react";
import "./CreateBlueprint.css";

export default function CreateBlueprint() {
  //  fixed + initial fields
  const [fields, setFields] = useState([
    {
      id: "name",
      type: "Short Text",
      label: "Full Name",
      x: 0,
      y: 0,
      fixed: true,
    },
    {
      id: "signature",
      type: "Signature",
      label: "Employee Signature",
      x: 120,
      y: 450,
      fixed: true,
    },
  ]);

  // ➕ Add new field BEFORE signature
  const addField = () => {
    const newField = {
      id: Date.now(),
      type: "Short Text",
      label: "New Field",
      x: 0,
      y: 0,
      fixed: false,
    };

    setFields((prev) => {
      const signatureIndex = prev.findIndex(
        (f) => f.type === "Signature"
      );

      const updated = [...prev];
      updated.splice(signatureIndex, 0, newField);
      return updated;
    });
  };

  // ❌ delete (only non-fixed)
  const deleteField = (id) => {
    setFields((prev) => prev.filter((f) => f.id !== id));
  };

  // ✏️ update field
  const updateField = (id, key, value) => {
    setFields((prev) =>
      prev.map((f) =>
        f.id === id ? { ...f, [key]: value } : f
      )
    );
  };

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

      {/* DOCUMENT FIELDS HEADER */}
      <div className="fields-header">
        <div>
          <h3>Document Fields</h3>
          <p>Configure the dynamic fields for this blueprint.</p>
        </div>

        <button className="add-btn" onClick={addField}>
          + Add Field
        </button>
      </div>

      {/* FIELDS */}
      {fields.map((field) => (
        <div className="field-row" key={field.id}>
          <div>
            <label>Field Type</label>
            <select
              value={field.type}
              disabled={field.fixed}
              onChange={(e) =>
                updateField(field.id, "type", e.target.value)
              }
            >
              <option>Short Text</option>
              <option>Date</option>
              <option>Email</option>
              <option>Signature</option>
            </select>
          </div>

          <div className="grow">
            <label>Field Label</label>
            <input
              value={field.label}
              onChange={(e) =>
                updateField(field.id, "label", e.target.value)
              }
            />
          </div>

          <div>
            <label>X Coord</label>
            <input
              type="number"
              value={field.x}
              onChange={(e) =>
                updateField(field.id, "x", e.target.value)
              }
            />
          </div>

          <div>
            <label>Y Coord</label>
            <input
              type="number"
              value={field.y}
              onChange={(e) =>
                updateField(field.id, "y", e.target.value)
              }
            />
          </div>

          {!field.fixed && (
            <button
              className="delete"
              onClick={() => deleteField(field.id)}
            >
              🗑
            </button>
          )}
        </div>
      ))}

      {/* 💙 PRETTY ADD MORE (ALIVE) */}
      <div className="add-more" onClick={addField}>
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
