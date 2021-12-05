import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import s from "./CustomizeBadges.scss";
import Order from "../Order/Order";

import { Button, Box, Card, Typography, Modal } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 2,
    top: 4,
    border: `1px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function CustomizedBadges({ order, onAdd, onRemove, onDelete }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
              style={{ height: "60px", width: "50px", objectFit: "cover" }}
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
              marginLeft: "10px",
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
    <div>
      <div className={s.modal}>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          {orderMenu.length !== 0 ? (
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h5" component="h2">
                My order:
              </Typography>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {orderMenu}
              </Typography>
              <hr />
              <Typography
                id="modal-modal-title"
                variant="h5"
                component="h5"
                style={{ marginTop: "10px" }}
              >
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
          ) : (
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h5" component="h2">
               Please order...
              </Typography>
            </Box>
          )}
        </Modal>
      </div>

      <div>
        <IconButton aria-label="cart" onClick={handleOpen}>
          <StyledBadge
            badgeContent={order.map((m) => m.amount).reduce((a, b) => a + b, 0)}
            color="primary"
          >
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
      </div>
    </div>
  );
}
