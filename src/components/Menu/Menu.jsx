import React from "react";
import MenuItem from "./Menu-item/MenuItem";

export default function Menu({ menu, onAdd }) {
  return (
    <div>
      <MenuItem key={menu.id} menu={menu} onAdd={onAdd}></MenuItem>
    </div>
  );
}
