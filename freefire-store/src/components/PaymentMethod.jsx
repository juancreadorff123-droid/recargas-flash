import qrAltoke from "../assets/qr-altoke.png";
import qrYape from "../assets/qr-yape.png";

export default function PaymentMethod({ method, onSelect }) {
  return (
    <>
      <div className="pm-subtitle">Selecciona tu método de pago favorito</div>
      <div className="pm-grid">
        <div className="pm-option">
          <div className="pm-label">Altoke</div>
          <div
            className={`pm-box ${method === "Altoke" ? "selected" : ""}`}
            onClick={() => onSelect("Altoke")}
          >
            <img src={qrAltoke} alt="QR Altoke" />
          </div>
        </div>
        <div className="pm-option">
          <div className="pm-label">Yape</div>
          <div
            className={`pm-box ${method === "Yape" ? "selected" : ""}`}
            onClick={() => onSelect("Yape")}
          >
            <img src={qrYape} alt="QR Yape" />
          </div>
        </div>
      </div>
    </>
  );
}
