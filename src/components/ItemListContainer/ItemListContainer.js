import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = ({nombre, descripcion, precio, img, stock}) => {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="340"
          image={img}
          alt="Cinta de Correr"
          stock={stock}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {descripcion}
          </Typography>
          <div className="Container">
          <Typography variant="body1" color="text.primary">
            {precio}
          </Typography>
          <ItemCount stock={stock}/>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ItemListContainer;
