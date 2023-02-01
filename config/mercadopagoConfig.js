// SDK de Mercado Pago

import mercadopago from "mercadopago";

// Agrega credenciales
const tokenConfig = mercadopago.configure({access_token: process.env.MERCADOPAGO_KEY ,
});

export default tokenConfig 
