import React from "react";
import Badge from '../CustomizedBadges/CustomizedBadges.js';
import s from './Header.module.scss'

export default function Header({order, onAdd, onRemove, onDelete}) {
  return (
    <div style={{textAlign: 'center', margin: '5px', display: 'flex', justifyContent: 'space-between'}}>
      <h1 >Shopping Cart</h1>
      <Badge 
          order={order}
          onAdd={onAdd}
          onRemove={onRemove}
          onDelete={onDelete} />
    </div>
  );
}
