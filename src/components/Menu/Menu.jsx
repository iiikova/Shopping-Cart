import React, { useState } from "react";
import state from "../state.js";
import MenuItem from "./Menu-item/MenuItem.jsx";
import s from "./Menu.module.css";

export default function Menu() {
  const [display, setDisplay] = useState(false);
  const [btn] = useState("show menu from state");

  const displayBtn = () => {
    display ? setDisplay(false) : setDisplay(true);
  };

  const renderMenu = state.menu.map((u) => {
    return <MenuItem name={u.name} price={u.price} calories={u.kkl} />;
  });

  return (
    <div>
      <button onClick={() => displayBtn()}>{btn}</button>
      {display ? renderMenu : null}
    </div>
  );
}
