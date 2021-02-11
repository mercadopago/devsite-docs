---
  sites_supported:
      - mco
---

# Consideraciones IVA Colombia

> NOTE
>
> Nota
>
> Solo para Colombia.

El IVA (Impuesto al Valor Agregado) es una carga fiscal que recae sobre la venta de productos o la prestación de servicios dentro del territorio colombiano. Algunos productos así como algunos servicios están excluidos del IVA y otros tienen tarifas reducidas. En la actualidad, la tarifa general de este impuesto es del 19%.

## Impuestos en pagos online

Para procesar el IVA correctamente, te permitimos enviar el monto total (`transaction_amount`), neto (`net_amount`) e IVA (`taxes`) al momento de realizar el cobro a través de la API.

En este ejemplo te mostramos cómo enviar los datos:

```curl
curl -X POST \
        -H 'accept: application/json' \
        -H 'content-type: application/json' \
        -H 'Authorization: Bearer ACCESS_TOKEN' \
        'https://api.mercadopago.com/v1/payments' \
        -d '{
                "transaction_amount": 10000,
                "net_amount": 9500,
                "taxes":[{
                        "value": 500,
                        "type": "IVA"
                }],
                "token": "ff8080814c11e237014c1ff593b57b4d",
                "description": "Title of what you are paying for",
                "installments": 1,
                "payment_method_id": "visa",
                "payer": {
                        "email": "test_user_19653727@testuser.com"
                }
            }'
```

El IVA debe ser un monto determinado, no envíes un porcentaje. En caso que no envíes los atributos net_amount y taxes, se aplicará el IVA general (19%).

## Impuestos en pagos presenciales

Si estás integrando pagos presenciales, **deberás informar el monto total de IVA a pagar sobre el valor total de todos los productos discriminados en el listado de ítems**.

```curl
curl -X POST \
-H 'Authorization: Bearer ACCESS_TOKEN' \
https://api.mercadopago.com/mpmobile/instore/qr/USER_ID/EXTERNAL_ID \
-d \
{
    "external_reference": "order-id-1234",
    "notification_url": "www.yourserver.com/yourendpoint",
    "sponsor_id": 629437702,
    "items": [
        {
            "title": "Item 1",
            "currency_id": "COP",
            "unit_price": 6000,
            "quantity": 1
        },
         {
            "title": "Item 2",
            "currency_id": "COP",
            "unit_price": 4000,
            "quantity": 1
        }
    ],
    "taxes": [
        {
            "value": 500,
            "type": "IVA"
        }
    ]
}
```

En el caso que no envíes los atributos de taxes, se aplicará el IVA general (19%) sobre el valor total de la orden.