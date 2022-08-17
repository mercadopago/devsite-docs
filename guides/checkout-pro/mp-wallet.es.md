# Billetera Mercado Pago

Billetera de Mercado Pago es un método de pago que te permite aceptar pagos únicamente de usuarios registrados. Al ofrecer esta opción, los usuarios podrán pagar con tarjeta, saldo disponible y Mercado de Crédito.

> WARNING
>
> Importante
>
> Al agregar esta opción, no será posible recibir pagos de usuarios no registrados en Mercado Pago, así como tampoco podrás recibir pagos vía efectivo o transferencia.

Para configurar pagos con la billetera de Mercado Pago, envía un POST con el parámetro `purpose` y el valor `wallet_purchase` al endpoint [/checkout/preferences](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/preferences/_checkout_preferences/post) y ejecuta la solicitud.

