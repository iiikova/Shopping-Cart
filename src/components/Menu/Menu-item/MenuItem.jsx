import React from "react";
import s from "./MenuItem.module.css";

const MenuItem = ({ name, price, calories, status, description, test }) => (
  <div
    className={s.card}
    onClick={() => test(name, price, calories, status, description)}
  >
    <h1>{name}</h1>
    <p>{price}</p>
    <p>{calories}</p>
    <p>{status}</p>
    <p>{description}</p>
  </div>
);

export default MenuItem;
