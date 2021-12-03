import { Button, Typography, Box, Card } from "@mui/material";
import s from "./Order.module.scss";

export default function Order({ order, onAdd, onRemove }) {
  const itemsPrice = order.reduce((a, b) => a + b.price * b.amount, 0);
  const orderMenu = order.map((m) => {
    return (
      <div key={m.id} className={s.card} sx={{ maxWidth: 345 }}>
        <Typography variant="h4">{m.name}</Typography>
        <Typography variant="h5" color="text.secondary">
          {m.amount} x ${m.amount * m.price}
        </Typography>
        <Box>
          <Button
            style={{ marginRight: "5px" }}
            variant="contained"
            size="small"
            color="primary"
            onClick={() => onAdd(m)}
          >
            +
          </Button>
          <Button
            variant="contained"
            size="small"
            color="secondary"
            onClick={() => onRemove(m)}
          >
            -
          </Button>
        </Box>
      </div>
    );
  });
  return (
    <Card>
      <h1 style={{ textAlign: "center" }}>Order</h1>
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
            Total: {itemsPrice}
          </Typography>
        </Box>
      </div>
    </Card>
  );
}
