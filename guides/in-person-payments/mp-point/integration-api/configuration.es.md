---
sites_supported:
  - mla
  - mlb
  - mlm
---

# Configura la API

## Registra tu Access Token

``` cURL
curl --location --request POST 'https://api.mercadopago.com/point/integration-api/integrator' \
--header 'X-Access-Token: ${ACCESS_TOKEN}'
```

## Prepara tu Webhook

## Registro Webhook (opcional)

``` cURL
curl --location --request PATCH 'https://api.mercadopago.com/point/integration-api/integrator' \
--header 'X-Access-Token: ${ACCESS_TOKEN}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "webhook": "https://your-server-ip:port/webhook"
}'
```

## Valida tu Registro de Webhook (opcional)

``` cURL
curl --location --request POST 'https://api.mercadopago.com/point/integration-api/integrator/check' \
--header 'X-Access-Token: ${ACCESS_TOKEN}'
```

---
### Próximos pasos

> LEFT_BUTTON_REQUIRED_ES
>
> Crea tu primer intento de pago
>
> Mediante la API puedes crear intentos de pago para ser procesados por tus terminales Point.
>
> [Requisitos previos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/in-person-payments/mp-point/integration-api/create-payment-intent)