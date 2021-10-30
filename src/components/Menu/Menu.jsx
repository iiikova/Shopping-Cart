import React, { useState } from "react";
import MenuItem from "./Menu-item/MenuItem.jsx";
import s from "./Menu.module.scss";

export default function Menu({ menu, pickItem }) {
  const renderMenu = menu.map((u) => {
    return (
      <MenuItem
        pickItem={pickItem}
        key={u.id}
        name={u.name}
        price={u.price}
        calories={u.kkl}
        description={u.description}
        status={u.status}
      />
    );
  });

  return (
    <div className={s.ss}>
      <h1>Menu</h1>
      <div>{renderMenu}</div>
    </div>
  );
}
