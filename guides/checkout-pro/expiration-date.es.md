# Fecha de vencimiento

La fecha de vencimiento es el período máximo definido para realizar un pago. Con Checkout Pro es posible cambiar la fecha de vencimiento predeterminada para **pagos con boleto** enviando el parámetro `date_of_expiration` en la solicitud para crear la preferencia.

En este campo, la fecha establecida debe estar entre 1 día y 30 días a partir de la fecha de emisión del pago.

1. Envía un POST con el parámetro `date_of_expiration` informando la fecha y hora de vencimiento del artículo al endpoint [/checkout/preferences](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/preferences/_checkout_preferences/post). El valor debe seguir el formato ISO 8601 (yyyy-MM-dd'T'HH:mm:ssz)
2. Ejecuta la solicitud.

> WARNING
>
> Importante
>
> El período de compensación es de 1 a 2 días hábiles según el método de pago elegido. Por lo tanto, recomendamos establecer la fecha de vencimiento con al menos 3 días de diferencia para garantizar que se realice el pago. Además, si el pago se realiza después de la fecha de vencimiento, el monto se devolverá a la cuenta de Mercado Pago del pagador.