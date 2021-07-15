---
sites_supported:
  - mla
  - mlb
  - mlm
---

# Crea un intento de pago

## Obtén el listado de dispositivos disponibles

- Endpoint: /point/integration-api/devices
- Descripción: 

``` cURL
curl --location --request GET 'https://api.mercadopago.com/point/integration-api/devices' \
--header 'x-access-token: ${ACCESS_TOKEN}'
```

## Crea un intento de pago

- Endpoint: /point/integration-api/devices/{device-id}/payment-intents
- Descripción: Encola un intento de pago en el dispositivo point especificado.

``` cURL
curl --location --request POST 
'https://api.mercadopago.com/point/integration-api/devices/{device-id}/payment-intents' \
--header 'X-Access-Token: ${ACCESS_TOKEN}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "amount": 1500,
    "description": "Point demo",
    "payment": {
        "type": "credit_card",
        "installments": 1
    },
    "additional_info": {
        "external_reference": "id-generated-at-pdv"
    }
}'
```

## Cancela un intento de pago

- Endpoint: /point/integration-api/devices/{device-id}/payment-intents
- Descripción: Elimina un intento de pago que hayas encolado a una terminal point

``` cURL
curl --location --request DELETE 'https://api.mercadopago.com/point/integration-api/devices/{device-id}/payment-intents' \
--header 'x-access-token: ${ACCESS_TOKEN}' \
--header 'x-test-scope: stg'
```
