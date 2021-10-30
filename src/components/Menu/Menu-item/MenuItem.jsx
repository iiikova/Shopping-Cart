import React from "react";
import s from "./MenuItem.module.css";

const MenuItem = ({ name, price, calories, status, description, pickItem }) => (
  <div className={status ? s.green : s.red}>
    <div
      className={s.card}
      onClick={() => pickItem(name, price, calories, status, description)}
    >
      <h1>{name}</h1>
      <p>{price}</p>
      <p>{calories}</p>
      <p >{status}</p>
      <p>{description}</p>
    </div>
  </div>
);

export default MenuItem;
