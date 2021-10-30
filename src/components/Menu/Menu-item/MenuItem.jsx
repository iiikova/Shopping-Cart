import React from "react";
import s from "./MenuItem.module.css";

const MenuItem = ({ name, price, calories, status, test }) => (
    <div className={s.card} onClick={test}>
      <h1>{name}</h1>
      <p>{price}</p>
      <p>{calories}</p>
      <p>{status}</p>
    </div>
);

export default MenuItem;
