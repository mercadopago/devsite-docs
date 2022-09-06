# Fecha de vencimiento

La fecha de vencimiento es el período máximo definido para realizar un pago. Con Checkout Pro es posible cambiar la fecha de vencimiento predeterminada a **pagos en efectivo** enviando el campo `date_of_expiration` en el request de creación de preferencias.

> NOTE
>
> Importante
>
> El período de compensación es de 1 a 2 días hábiles según el medio de pago elegido. Por lo tanto, recomendamos establecer la fecha de vencimiento con al menos 3 días de diferencia para garantizar que se realice el pago. Además, si el pago se realiza después de la fecha de vencimiento, el monto se devolverá a la cuenta de Mercado Pago del pagador.


Para cambiar la fecha de vencimiento, envía un **POST** con el parámetro `date_of_expiration` con la fecha y hora del vencimiento del ítem al endpoint [/checkout/preferences](/developers/es/reference/preferences/_checkout_preferences/post) y ejecuta el request.


[[[
```json
===
La fecha usa el formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
"date_of_expiration": "2020-05-30T23:59:59.000-04:00"
```
]]]
