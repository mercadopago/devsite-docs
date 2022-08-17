# Valor del envío

El valor de envío, o flete, es el valor cobrado por el envío de los productos vendidos. Si este monto ya está establecido, es posible mostrarlo por separado del monto total de la compra en el momento del pago.

1. Envía un POST con los atributos `cost` y `mode` del parámetro `shipments` al endpoint [/checkout/preferences](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/preferences/_checkout_preferences/post).
2. En `cost`,  ingresa el valor del envío.
3. En `mode`, ingresa `not_specified`.
4. Ejecuta la solicitud en tu terminal.