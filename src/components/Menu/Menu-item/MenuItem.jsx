import React from "react";
import s from "./MenuItem.module.css";

const MenuItem = ({ name, price, calories }) => (
  <div className={s.block}>
    <h1>{name}</h1>
    <p>{price}</p>
    <p>{calories}</p>
  </div>
);

export default MenuItem;
