import { useState } from "react";
import PackageGrid from "./components/PackageGrid";
import PaymentMethod from "./components/PaymentMethod";
import OrderForm from "./components/OrderForm";
import "./App.css";

export default function App() {
  const [selected, setSelected] = useState(null);
  const [ffid, setFfid] = useState("");
  const [paymentMethod, setPaymentMethod] = useState(null);

  return (
    <div>
      <nav>
        <div className="logo">
          <div className="logo-mark"></div>FF RECARGAS
        </div>
        <a className="whatsapp-btn" href="https://wa.me/59170000000" target="_blank" rel="noreferrer">
          WhatsApp
        </a>
      </nav>

      <div className="hero-top">
        <div className="badge">⚡ Entrega Inmediata</div>
        <h1>Recarga tus diamantes de Free Fire</h1>
        <p>Rápido, seguro y sin complicaciones</p>
      </div>

      <div className="step">
        <div className="step-card">
          <div className="step-head">
            <div className="flag">1</div>
            <h2>Información del Usuario</h2>
          </div>
          <input
            className="id-input"
            placeholder="Ingresa tu ID"
            value={ffid}
            onChange={(e) => setFfid(e.target.value)}
          />
          <button className="id-btn" type="button">
            Ingrese su ID de usuario
          </button>
        </div>
      </div>

      <div className="step">
        <div className="step-card">
          <div className="step-head">
            <div className="flag">2</div>
            <h2>Seleccionar Producto</h2>
          </div>
          <PackageGrid selected={selected} onSelect={setSelected} />
        </div>
      </div>

      <div className="step">
        <div className="step-card">
          <div className="step-head">
            <div className="flag">3</div>
            <h2>Método de pago</h2>
          </div>
          <PaymentMethod method={paymentMethod} onSelect={setPaymentMethod} />
        </div>
      </div>

      <div className="step">
        <div className="step-card">
          <div className="step-head">
            <div className="flag">4</div>
            <h2>Confirmar y Pagar</h2>
          </div>
          <OrderForm selected={selected} ffid={ffid} paymentMethod={paymentMethod} />
        </div>
      </div>

      <footer>FF Recargas Bolivia</footer>
    </div>
  );
}
