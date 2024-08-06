# Transações via Checkout Pro

Al realizar una solicitud de pago (`/checkout/preferences`), solo necesitas asignar el ID de tu cuenta de Mercado Pago al campo `sponsor_id` en el cuerpo de la solicitud.

Ejemplo:

```curl
curl --location --request POST 'https://api.mercadolibre.com/checkout/preferences' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{ACCESS_TOKEN}}' \
--data-raw '{
    "auto_return": "all",
    "back_urls": {
        "success": "https://httpbin.org/get?status=pago",
        "failure": "https://httpbin.org/get?status=recusado",
        "pending": "https://httpbin.org/get?status=pendente"
    },
    "redirect_urls": {
        "failure": "https://httpbin.org/get?status=redirectrecusado",
        "pending": "https://httpbin.org/get?status=redirectpendente",
        "success": "https://httpbin.org/get?status=redirectsuccess"
    },
    "notification_url": "https://webhook.site/d69d1102-b677-44f6-ae6d-104a7e813b93",
    "expires": false,
    "external_reference": "Pedido - Teste",
    "date_of_expiration": "2022-04-01T22:59:00.000-04:00",
    "sponsor_id": "{{ID de su cuenta Mercado Pago referente a su plataforma}}",
    "items": [
        {
            "id": "1234",
            "currency_id": "BRL",
            "title": "Producto",
            "category_id": "entertainment",
            "quantity": 1,
            "unit_price": 4
        },
        {
            "id": "1234",
            "currency_id": "BRL",
            "title": "Envío",
            "category_id": "entertainment",
            "quantity": 1,
            "unit_price": 1
        }
    ],
  
    "payment_methods": {
        "default_installments": null,
        "default_payment_method_id": null,
        "excluded_payment_types": []
    },
    "installments": null,
    "shipments": {
        "receiver_address": {
	         "zip_code": "95630000",
	         "street_name": "Avenida Shipments",
	         "street_number": "15"
        }
    }
}'
```

> WARNING
>
> ¡Atención!
>
> La información del campo `collector_id` no es la misma que la del `sponsor_id`.
> * El `collector-id` es el vendedor;
> * El `sponsor-id` es la plataforma (donde está el vendedor), como Vtex, LI, Adobe Commerce, etc.

> NOTE
>
> Nota
>
> Tanto el `collector` como el `sponsor-id` se pueden obtener en el paso [Cómo obtener el Sponsor ID](/developers/es/guides/integration-guide-for-partners/how-to-get-sponsor-id). Sin embargo, son cuentas de Mercado Pago diferentes.
Si envías la misma información en ambos campos, la API devolverá un error: "Invalid users involved".

> ¿Todavía tienes dudas sobre las credenciales? Accede al contenido [¿Dónde puedo encontrar las credenciales?](https://www.mercadopago.com.br/developers/pt/support/20214).