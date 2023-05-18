# Cómo obtener detalles de pago usando las API de Mercado Pago

En la nueva integración con Shopify, se ha producido un cambio en la información disponible en el atributo `payment_id` disponible en la consulta de la transacción relacionada con el pedido obtenido a través de la [API de Shopify endpoint](https://shopify.dev/docs/api/admin-rest/2023-04/resources/transaction). En el atributo `payment_id` presente en la respuesta de la API de Shopify, donde antes se mostraba el ID único (`id`) de pago de Mercado Pago, ahora se informa el ID único (`id`) de pago de Shopify.

Con este cambio, para obtener detalles de pago utilizando las APIs de Mercado Pago, en lugar de consultar el pago directamente a través de su ID único (`id`), será necesario realizar una búsqueda utilizando su ID de referencia externa (`external_reference`) para devolver una lista de objetos que se refieren a los pagos.

Para hacerlo, realice un GET enviando el `external_reference` y el `access-token` (obtenido en la sección [Credenciales](/developers/es/docs/shopify/additional-content/credentials) en tu [Dashboard](https://www.mercadopago.com/developers/panel/app) o en tu cuenta [Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/account/credentials)) al endpoint [/v1/payments/search](/developers/es/reference/payments/_payments_search/get). 

Ejemplo:

```curl
curl --location --request GET 'https://api.mercadopago.com/v1/payments/search?access_token={{AccessToken}}&sort=date_created&criteria=desc&external_reference=njzY7fKb5HH5TgYwXO6jsh2xp&status=approved' \
```

Alternativamente, puede obtener una lista de solo los ID de pago asociados con una transacción de Shopify desde una llamada a la [API de búsqueda de pagos](/developers/en/reference/pagos/_pagos/post) usando su referencia externa y consultarlo individualmente a través de la API de pagos. 

Para hacerlo, realice un GET enviando `external_reference` y `access-token` (generados por el proceso de autenticación de OAuth) al endpoint [/v1/payments/{id}](/developers/es/reference/payments/_payments/post).

Ejemplo:

```curl
curl -X GET \
        'https://api.mercadopago.com/v1/payments/search?access_token={{AccessToken}}&sort=date_created&criteria=desc&external_reference=njzY7fKb5HH5TgYwXO6jsh2xp&status=approved&attributes=results.id' \
```

Respuesta:

```response
{
    "results": [
        {
            "id": 12345678909
        }
    ]
}
```

Finalmente, cada pago devuelto en la lista se puede consultar con el `curl` a continuación.

```curl
curl -X GET \
      'https://api.mercadopago.com/v1/payments/56789012345' \
      -H 'Authorization: Bearer {{AccessToken}}'
```