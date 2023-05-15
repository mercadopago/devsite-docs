# Cómo obtener detalles de pago usando las API de Mercado Pago

En la nueva integración con Shopify, se ha producido un cambio en la información disponible en el atributo `payment_id` disponible en la consulta de la transacción relacionada con el pedido obtenido a través de la [API de Shopify endpoint](/admin/orders/{{order_id}}/transacciones.json). En el lugar donde se ingresó el **identificador único de pago de Mercado Pago**, ahora se ingresa el **identificador único de pago de Shopify**.

Con este cambio, para obtener detalles de pago utilizando las APIs de Mercado Pago, en lugar de consultar el pago directamente a través de su ID único (`id`), será necesario realizar una búsqueda utilizando su ID de referencia externa (`external_reference`), donde los detalles del pago se devolverán en una lista. Para hacerlo, realice un GET enviando el `external_reference` y el `access-token` (generado por el proceso de autenticación de OAuth) al endpoint [/v1/payments/search](/developers/es/reference/payments/_payments_search/get). 

Ejemplo:

```curl
curl --location --request GET 'https://api.mercadopago.com/v1/payments/search?access_token={{AccessToken}}&sort=date_created&criteria=desc&external_reference=njzY7fKb5HH5TgYwXO6jsh2xp&status=approved' \
```

Alternativamente, es posible obtener el ID de pago a través de una llamada a la [API de búsqueda de pagos](/developers/en/reference/pagos/_pagos/post) usando su referencia externa y consultarlo individualmente a través de la API de pagos. Para hacerlo, realice un GET enviando `external_reference` y `access-token` (generados por el proceso de autenticación de OAuth) al endpoint [/v1/payments/{id}](/developers/es/reference/payments/_payments/post).

Ejemplo:

```curl
curl -X GET \
        'https://api.mercadopago.com/v1/payments/search?access_token={{AccessToken}}&sort=date_created&criteria=desc&external_reference=njzY7fKb5HH5TgYwXO6jsh2xp&status=approved&attributes=results.id' \
```

Respuesta:

[[[
```response
{
    "results": [
        {
            "id": 56789012345
        }
    ]
}
```
```curl
curl -X GET \
      'https://api.mercadopago.com/v1/payments/56789012345' \
      -H 'Authorization: Bearer {{AccessToken}}'
```
]]]