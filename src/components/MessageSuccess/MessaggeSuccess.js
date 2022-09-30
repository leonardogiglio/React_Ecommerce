import React from 'react';
import { Alert } from '@mui/material';
import './MessaggeSuccess.css';

const MessaggeSuccess = ({ordersID}) => {
  return (
    <div className='ContenedorAlert'>
    <Alert severity="success">Gracias por su compra! Su número de seguimiento es: {ordersID}</Alert>
    </div>
  )
}

export default MessaggeSuccess;