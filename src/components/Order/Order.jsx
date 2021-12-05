import { Button, Typography, Box, Card } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

import s from "./Order.module.scss";

export default function Order({ order, onAdd, onRemove, onDelete }) {
  const itemsPrice = order.reduce((a, b) => a + b.price * b.amount, 0);
  const orderMenu = order.map((m) => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "5px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <img
              src={m.img}
              style={{ height: "50px", width: "50px", objectFit: "cover" }}
              alt="img"
            />
          </div>

          <div style={{ marginLeft: "10px" }}>
            <p>
              <strong>{m.name}</strong>
            </p>
            <p>
              Price: {m.price} x {m.amount}
            </p>
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <IconButton aria-label="add" size="small">
              <AddIcon fontSize="inherit" onClick={() => onAdd(m)} />
            </IconButton>
            <IconButton aria-label="remove" size="small">
              <RemoveIcon fontSize="inherit" onClick={() => onRemove(m)} />
            </IconButton>
          </div>

          <div
          style={{
              display: "flex",
              justifyContent: "center",
              marginLeft: '10px'
            }}
          >
            <IconButton aria-label="delete" size="small">
              <DeleteIcon fontSize="inherit" onClick={() => onDelete(m)} />
            </IconButton>
          </div>
        </div>
      </div>
    );
  });

  return (
    <Card className={s.order}>
      <div>
        {orderMenu.length === 0 ? (
          <Box sx={{ p: 2 }}>
            <h2>Please order...</h2>
          </Box>
        ) : (
          orderMenu
        )}
      </div>
      <div>
        <hr />
        <Box sx={{ p: 2 }}>
          <Typography variant="h5" color="text.secondary">
            Total Price: {itemsPrice}
          </Typography>
          <Button
            style={{ width: "100%", marginTop: "20px" }}
            variant="contained"
            size="small"
            color="success"
          >
            Payment
          </Button>
        </Box>
      </div>
    </Card>
  );
}
