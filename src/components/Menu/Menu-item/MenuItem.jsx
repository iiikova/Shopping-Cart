import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

import React from "react";
import s from "./MenuItem.module.scss";

const MenuItem = ({ menu, onAdd, increment }) => {
  const renMenu = menu.map((v, i) => {
    return (
      <Card
        key={v.id}
        className={s.card}
        sx={{ maxWidth: 345, minHeight: 300 }}
      >
        <CardActionArea>
          {/* <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          /> */}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {v.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {v.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <div style={{ marginLeft: "10px" }}>
          <Typography
            style={{ marginTop: "30px", marginLeft: "8px" }}
            component="h2"
            variant="h2"
            variant="body3"
            color="text.secondary"
          >
            Price: {v.price}
          </Typography>
          <CardActions>
            <Button size="small" variant="contained" onClick={() => onAdd(v)}>
              Add
            </Button>
          </CardActions>
        </div>
      </Card>
    );
  });

  return <div className={s.wrap}>{renMenu}</div>;
};

export default MenuItem;
