import "./ContractCard.css";

export default function ContractCard({ contract, onClose }) {
  if (!contract) return null;

  return (
    <div className="contract-overlay">
      <div className="contract-card">
        <div className="card-header">
          <h2>{contract.title}</h2>
          <button onClick={onClose}>✖</button>
        </div>

        <div className="card-body">
          <p><strong>Status:</strong> {contract.status}</p>
          <p><strong>Effective Date:</strong> {contract.content.effectiveDate}</p>
          <p><strong>Party:</strong> {contract.content.employeeName}</p>
          <p><strong>Role / Service:</strong> {contract.content.role}</p>

          <h4>Inclusions</h4>
          <ul>
            {contract.content.inclusions.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
