# Sponsor ID

## Introducción

### ¿Qué es?

El `sponsor_id` es un atributo disponible en la integración de todos los productos de Mercado Pago. Su rol es poder identificar a la persona o empresa que realizó la integración técnica.

### ¿Por qué debería usarlo?

A medida que incorpores cada vez más clientes y hagas crecer su volumen de operaciones (vinculado a tu `sponsor_id`), Mercado Pago te recompensará con diferentes beneficios. En breve anunciaremos nuestro programa de beneficios a desarrolladores, por lo cual te recomendamos empezar a utilizar este atributo lo antes posible para que ya se empiezen a contabilizar operaciones a tu favor.

### ¿Dónde obtengo mi sponsor_id?

Visita la siguiente [página](#) y registrate como desarrollador.
Una vez registrado obtendrás tu `sponsor_id`.

Los `sponsor_id` comienzan con **dev_** y continúan con caracteres alfanuméricos aleatorios.

> WARNING
>
> Nunca compartas tu `sponsor_id` con nadie.

## Uso en la integración

### Web Checkout

Para incoporar tu `sponsor_id` en este producto, incluílo a la hora de crear una preferencia:

```diff
curl -X POST \
  'https://api.mercadolibre.com/checkout/preferences?access_token='ACCESS_TOKEN' \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -d '{
    "items": [
        {
            "title": "Mi producto",
            "quantity": 1,
            "unit_price": 75.76
        }
    ],
+   "sponsor_id": "dev_c4ca4238a0b923820dcc509a6f75849b"
}'
```

### Web Tokenize Checkout / API

Para incoporar tu `sponsor_id` en este producto, incluílo a la hora de crear un pago:

```diff
curl -X POST \
  'https://api.mercadolibre.com/v1/payments?access_token='ACCESS_TOKEN' \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -d '{
    "transaction_amount": 100,
    "installments": 1,
    "payment_method_id": "visa",
    "token": "ff8080814c11e237014c1ff593b57b4d",
    "payer": {
      "email": "john.doe@gmail.com"
    },
+   "sponsor_id": "dev_c4ca4238a0b923820dcc509a6f75849b"
}'
```