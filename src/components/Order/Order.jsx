import react from "react";
import s from "./Order.module.scss";

export default function Order({ order }) {
  const orderMenu = order.map((m) => {
    return (
      <div className={s.card} >
          <h1>{m.name}</h1>
          <p>{m.price}</p>
          <p>{m.calories}</p>
          <p>{m.status}</p>
          <p>{m.description}</p>
      </div>
    );
  });
  return (
    <div className={s.order}>
      <h1>Order</h1>
      <div >{orderMenu}</div>
    </div>
  );
}
