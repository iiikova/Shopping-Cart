import React from "react";
import MenuItem from "./Menu-item/MenuItem";

export default function Menu({ menu, onAdd, increment }) {
  return (
    <div>
      <MenuItem key={menu.id} menu={menu} increment={increment} onAdd={onAdd}></MenuItem>
    </div>
  );
}
