import { Card } from "@mui/material";
import React from "react";
import s from "./Menu.module.scss";
import MenuItem from "./Menu-item/MenuItem";

export default function Menu({ menu, onAdd, increment }) {
  return (
    <Card className={s.card}>
      <MenuItem key={menu.id} menu={menu} increment={increment} onAdd={onAdd}></MenuItem>
    </Card>
  );
}
