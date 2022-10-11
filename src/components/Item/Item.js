import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

const Item = ({ info }) => {
  return (
    <Link to={`/detalle/${info.id}`}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="340"
            image={info.img}
            alt="Cinta de Correr"
            stock={info.stock}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {info.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {info.desc}
            </Typography>
            <div className="Container">
              <Typography variant="body1" color="text.primary">
                $ {info.price}
              </Typography>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default Item;
