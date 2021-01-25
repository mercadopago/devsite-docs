---
sites_supported:
- mla
- mpe
- mco
- mlu
- mlm
- mlc
- mlb
---

# How to integrate QR unattended model 

> WARNING
>
> Commercial contact required
>
> This product is only available through prior contact with one of our executives.

To integrate QR unattended model you need to:

1. Create a service that will be called when a payment request is received and its associate logic.

    1.1 Order information **isn’t available yet**.
    
    1.2 Order information **is available**.

2. Declare your domain URL to Mercado Pago

## 1. Create a service that will be called when a payment request is received.

You need to **create a service that Mercado Pago will call each time a QR payment is requested**. For example:

> https://www.mybusiness.com/pay-mp?storeid=6232&posid=1 

This service will return the information needed to charge a customer. The URL service is declared on Point of Sale URL field.

## Service logics

Implement the next logics on the service to support the following cases:

### 1.1 Order informations isn’t available yet

In some cases, order data may not be available yet when a customer tries to pay. I.e, when filling the tank at a gas station.

In those cases, service must answer with an error message, so the user sees a waiting screen. Service must return a status code `HTTP 400 (Bad Request)` with the following format:

```json
{
"error": 
{  "type": "XXX",
"message": "YYYY" }
}
```

### Attributes

| Type          |  Description                                                 |
| ------------- | ------------------------------------------------------------ |
| `in_process`     | An order is being processed but an amount is not defined yet.  |
| `unavailable`           | There’s no order being processed or pending.   |

A `message` is a plain text that can come with the declared type and is optional.


### 1.2 Order infromation is available

If order exits and is ready to be paid, service must return its information. 

The answer expected from this service must contain the header `Content-Type: application/json` and the status `HTTP 200 (OK)`.

Answer should contain the following message from the order: 

```json
{
   "collector_id": 178106235,
   "sponsor_id": 334249281,
   "items":[
      {
         "title":" $500.00 de SUPER",
         "currency_id": [FAKER][CURRENCY][ACRONYM],
         "description":"$500.00 de SUPER",
         "quantity": 1.0,
         "unit_price": 500.00
      }
   ],
   "external_reference":"45ea80da",
   "notification_url":"https://www.tusitio.com"
}
```

You should use the field `external_reference` to be able to identify the order from your system inside Mercado Pago. 

### Attributes

| Atributo | Tipo (type) | Descripción |
| --- | --- | --- |
| `collector_id` | Long | Mercado Pago account identifier, to which payments will be imputed. |
| `sponsor_id` | Long | Mercado Pago account identifier from integrative system. |
| `items.title` | String | Product title. |
| `items.currency_id` | String(3) | Currency identifier in ISO-4217 format. |
| `items.description` | String | Product description. |
| `items.quantity` | Integer | Product quantity. |
| `items.unit_price` | Decimal | Unitary price. |
| `external_reference` | String (256) | Reference to link an order in Mercado Pago with a shopping order from your system. Usually, is the receipt number. |
| `notification_url` | String | URL to which the notification will be send. |

## 2. Declare your domain URL to Mercado Pago

You must inform your domain URL to your assigned technical advisor. Mercado Pago will use it for each transaction. 

> WARNING
> 
> IMPORTANT
> 
> Your integration won’t work if you don’t complete this step.


---

### Next steps


> LEFT_BUTTON_REQUIRED_EN
>
> Advanced Integration
>
> Learn the options to take your integration to the next level.
>
> [Advanced Integration](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/in-person-payments/qr-code/advanced-integration)


> RIGHT_BUTTON_RECOMMENDED_EN
>
> Test your integration
>
> Try the most frequent use cases to validate your integration.
>
> [Test your integration](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/in-person-payments/qr-code/integration-test)
