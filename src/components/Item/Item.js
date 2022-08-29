import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ItemCount from '../ItemCount/ItemCount';

const Item = ({data}) => {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="340"
          image={data.thumbnail}
          alt="Cinta de Correr"
          stock={data.available_quantity}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.seller.permalink}
          </Typography>
          <div className="Container">
          <Typography variant="body1" color="text.primary">
            $ {data.price}
          </Typography>
          <ItemCount stock={data.available_quantity}/>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Item;
