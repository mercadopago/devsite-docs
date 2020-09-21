---
  sites_supported:
      - mco
---

# Consideraciones IVA Colombia

> NOTE
>
> Nota
>
> Sólo para Colombia.

El IVA (Impuesto al Valor Agregado) es una carga fiscal que recae sobre la venta de productos o la prestación de servicios dentro del territorio colombiano. Algunos productos así como algunos servicios están excluidos del IVA y otros tienen tarifas reducidas. En la actualidad, la tarifa general de este impuesto es del 19%.

A efectos de poder procesar tu IVA correctamente, te permitimos enviar el monto total (transaction_amount), neto (net_amount) e IVA (taxes) al momento de Realizar el cobro a través de la API.

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
