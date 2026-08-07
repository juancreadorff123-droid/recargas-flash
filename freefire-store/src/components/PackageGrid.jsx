import { packages, cards } from "../data/packages";

export default function PackageGrid({ selected, onSelect }) {
  const all = [...packages, ...cards];

  return (
    <div className="product-grid">
      {all.map((p) => (
        <div
          key={p.id}
          className={`product-card ${selected?.id === p.id ? "selected" : ""}`}
          onClick={() => onSelect(p)}
        >
          <div className="price">{p.price} Bs.</div>
          <div className="name">
            {p.amount ? `Diamantes ${p.amount} ${p.bonus}` : p.name}
          </div>
        </div>
      ))}
    </div>
  );
}
