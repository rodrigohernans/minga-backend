import axios from "axios";
import mercadopago from "mercadopago";

export const crearOrden = async (req, res) => {

    const response = axios.get('https://api.mercadopago.com/checkout/preferences', req.body, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.MERCADOPAGO_KEY}`
        }
    })

    const produ = req.body
    console.log(produ)

    const preference = {
        items: [
            {
                title: "Donacion",
                quantity: 1,
                currency_id: "ARS",
                unit_price: produ.unit_price
            }],
        back_urls: {
            success: "http://localhost:3000",
            pending: "http://localhost:3000",
            failure: "http://localhost:3000", 
        },
        auto_return: "approved",
        "binary_mode": true
    };


    mercadopago.preferences.create(preference)
        .then(function (response) {

            if (req.body.unit_price) {
                return res.status(response.status).json({
                    response,
                })
            } else {
                console.log("Error obtained order")
            }
        })
        .catch(function (error) {
            console.log(error)
            return res.status(500).json({
                message: "Failed to creat payment"
            })
        })
}



/*
export const notificacionOrden = async (req, res) => {
    const datos = req.query
    console.log(datos)
    res.status(200)
}
 */


//esto como seria ............
        // En esta instancia deberás asignar el valor dentro de response.body.id por el ID de preferencia solicitado en el siguiente paso




















