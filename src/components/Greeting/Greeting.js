import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import '../Greeting/Greeting.css';

const ImageAvatars = ({nombre, img}) => {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Usuario" src={img} />
      <h6>Bienvenida: {nombre}</h6>
    </Stack>
  );
}

export default ImageAvatars;
