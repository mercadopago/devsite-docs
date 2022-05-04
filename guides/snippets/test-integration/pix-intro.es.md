# Pagos con Pix

Puedes ofrecer la opción de recibir pagos instantáneamente con Pix (`bank_transfer`) desde cualquier banco o billetera digital, ya sea a través de un **código QR** o un **código de pago** donde puede establecer una fecha de vencimiento para que se realice el pago.

```json
[
    {
        "id": "pix",
        "name": "PIX",
        "payment_type_id": "bank_transfer",
        "status": "active",
        "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/pix.gif",
        "thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/pix.gif",
        "deferred_capture": "does_not_apply",
        "settings": [],
        "additional_info_needed": []
    },
    {
        "...": "..."
    }
]
```

> WARNING
>
> Importante
>
> Recuerde que, por el momento, el Banco Central de Brasil está abierto de lunes a viernes de 9:00 am a 6:00 pm, y si solicita el registro fuera de este horario, lo confirmaremos el siguiente día hábil. Además, no hay límite de valor de Pix para el día (entre las 6 a. M. Y las 8 p. M.) Y, por la noche (entre las 8 p. M. Y las 6 a. M.), Hay un límite máximo de R $ 1.000 que se pueden mover durante estas horas.

## Registrar clave Pix

Para empezar a utilizar Pix como método de pago, debes tener registrada una clave Pix en la cuenta del vendedor, de esta forma será posible identificar tu cuenta y además te permitirá utilizar todas las funcionalidades del método de pago en cuestión.

Vea cómo registrar su clave Pix:

1. Descarga la aplicación de Mercado Pago en tu teléfono.
2. Desde la página de inicio de su cuenta, haga clic en **Pix** en la esquina superior derecha.
3. Luego haga clic en Registrarse.
4. Elija uno o más datos que se registrarán como **claves Pix** y complete la información necesaria.
5. Validar el registro de la clave Pix con el código de seguridad enviado por Mercado Pago. Podrás ver el estado de tus claves registradas y administrarlas a través de la app de Mercado Pago.