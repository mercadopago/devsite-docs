---
  indexable: false
---

# Liberación flexible

Al momento de la integración se configura un rango de días en el cual se podrá liberar el dinero de los vendedores.

Esta liberación se setea en cada pago con el campo `money_release_days` y puede modificarse posteriormente.

> NOTE
>
> Nota
>
> Por defecto se setea el máximo número de días del rango de liberación configurado en el Marketplace.

```json
{
  ...
  "disbursements": [
    {
      ...
      "money_release_days": 15
    },
    {
      ...
      "money_release_days": 30
    }
  ],
  ...
}
```

Una vez creado, se puede cambiar la fecha de liberación tanto del Advanced Payment completo o de un `disbursement` individual.

> NOTE
>
> Nota
>
> Esta fecha debe estar dentro del rango de liberaciones definida anteriormente.

#### Request: Cambio de fecha para un Advanced Payment completo

```curl
curl -X POST \
    -H 'Accept: application/json' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer MKT_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/advanced_payments/ID/disburses' \
    -d '{...}'
```

#### Request: Cambio de fecha para un Disbursement individual

```curl
curl -X POST \
    -H 'Accept: application/json' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer MKT_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/advanced_payments/ID/disbursements/DISBURSEMENT_ID/disburses' \
    -d '{...}'
```

En el `body` debemos definir la nueva fecha de liberación.

```json
{
  "money_release_date": "2018-07-10T10:23:18.000-04:00"
}
```

Una vez solicitado el cambio, se procesará de forma asíncrona y el resultado se notificará via Webhook.

> NOTE
>
> Nota
>
> Para recibir las notificaciones de este evento, deberás [configurar previamente una URL a la cual Mercado Pago tenga acceso](https://www.mercadopago.com/mla/account/webhooks).