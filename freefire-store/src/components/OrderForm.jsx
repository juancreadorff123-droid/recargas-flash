import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/config";

export default function OrderForm({ selected, ffid, paymentMethod }) {
  const [status, setStatus] = useState(null); // null | "sending" | "done" | "error"

  const canSubmit = selected && ffid.trim() && paymentMethod;
  const productName = selected
    ? selected.amount
      ? `Diamantes ${selected.amount} ${selected.bonus}`
      : selected.name
    : null;

  const handleSubmit = async () => {
    if (!canSubmit) return;
    setStatus("sending");
    try {
      // Guarda el pedido en Firestore (colección "orders")
      await addDoc(collection(db, "orders"), {
        ffid: ffid.trim(),
        product: productName,
        price: selected.price,
        paymentMethod,
        status: "pendiente",
        createdAt: serverTimestamp(),
      });
      setStatus("done");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <>
      <div className="summary-row">
        {selected ? (
          <>
            Producto: <b>{productName}</b> &nbsp;·&nbsp; Total: <b>{selected.price} Bs.</b>
            {paymentMethod && (
              <>
                &nbsp;·&nbsp; Pago: <b>{paymentMethod}</b>
              </>
            )}
          </>
        ) : (
          "Selecciona un producto arriba para continuar."
        )}
      </div>

      <button className="confirm-btn" disabled={!canSubmit || status === "sending"} onClick={handleSubmit}>
        {status === "sending" ? "Enviando..." : "Confirmar pedido"}
      </button>

      <div className="note">
        Escanea el QR de tu método elegido, paga y confirma. Te contactamos por WhatsApp para validar.
      </div>

      {status === "done" && (
        <div className="note" style={{ color: "#3ee6cf" }}>
          ¡Pedido registrado! Te contactamos para confirmar el pago.
        </div>
      )}
      {status === "error" && (
        <div className="note" style={{ color: "#ff5a1f" }}>
          Hubo un error al enviar el pedido. Intenta de nuevo.
        </div>
      )}
    </>
  );
}
