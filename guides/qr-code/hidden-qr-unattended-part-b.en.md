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

In those cases, service must answer with an error message, so the user sees a waiting screen. Service must return a status code `HTTP 202 (ACCEPTED)` with the following format:

```json
{
  "status": {
    "status_detail": "<STATUS_DETAIL_TYPE>",
    "message": "<MESSAGE>"
  }
}
```

### Attributes

| Type          |  Description                                                 |
| ------------- | ------------------------------------------------------------ |
| `in_process`     | An order is being processed but an amount is not defined yet.  |
| `notihing_to_pay`           | The processed order has no remaining amount to pay |
| `Waiting_for_order`           | Order not received yet |

A `message` is a plain text that can come with the declared type and is optional.

### 1.2 Order infromation is available

If order exits and is ready to be paid, service must return its information. 

The answer expected from this service must contain the header `Content-Type: application/json`, `order-version: “2”` and `client-id: “<CLIENT_ID>”` along with the status `HTTP 200 (OK)`.(The client-id header is only required if you are using [OAuth](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/docs/qr-code/additional-content/security/oauth/introduction), which will be the last digits of the access token of the administrator account).

Answer should contain the following message from the order: 

```json
{
    "external_reference": "<EXTERNAL_REFERENCE>",
    "total_amount": <TOTAL_AMOUNT>,
    "items": [
        {
            "sku_number": "<SKU_NUMBER>",
            "category": "<ITEM_CATEGORY>",
            "title": "<ITEM_TITLE>",
            "description": "<ITEM_DESC>",
            "quantity": <ITEM_QUANTITY>,
            "unit_measure": "<ITEM_UNIT_MEASURE>",
            "unit_price": <ITEM_UNIT_PRICE>,
            "total_amount": <ITEM_TOTAL_AMOUNT>,
        }
    ],
    "title": "<PURCHASE_TITLE>",
    "description": "<PURCHASE_DESC>",
    "notification_url": "<NOTIFICATION_URL>",
    "sponsor": {
        "id": <SPONSOR_ID>
    },
    ----[mco]----

    "taxes": [
      {
        "type": "<TAX_TYPE>",
        "value": "<TAX_VALUE>",
        "percentage": "<TAX_PERCENTAGE>"
      }
    ],

    ------------
    "marketplace_fee": <MARKETPLACE_FEE_NUMBER>
}

```

You should use the field `external_reference` to be able to identify the order from your system inside Mercado Pago. 

### Attributes

| Atributo | Tipo (type) | Descripción |
| --- | --- | --- |
| `external_reference` | String (256) | Reference to link an order in Mercado Pago with a shopping order from your system. Usually, is the receipt number. |
| `total_amount` | _Double_ | Sum of the `total_amount` in the item array. |
| `items.sku_number` | _String_ | Product code. |
| `items.category` | _String_ | Product category. |
| `items.title` | String | Product title. |
| `items.description` | String | Product description. |
| `items.quantity` | Integer | Product quantity. |
| `items.unit_measure` | _string_ | Unit measure for the product ("unit"). |
| `items.unit_price` | _Double_ | Unitary price. |
| `items.total_amount` | _Double_ | total price of the item. |
| `title` | _Long_ | purchase title.  |
| `description` | _Long_ | Purchase description.  |
| `notification_url` | String | URL to which the notification will be send. |
| `sponsor.id` | Long | Mercado Pago account identifier from integrative system. |
| `marketplace_fee` | _Double_ | fee amount to be collected by marketplace due from the [OAuth](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/docs/qr-code/additional-content/security/oauth/introduction) process |


## 2. Declare your domain URL to Mercado Pago

You must inform your domain URL to your assigned technical advisor. Mercado Pago will use it for each transaction. 

> WARNING
> 
> IMPORTANT
> 
> Your integration won’t work if you don’t complete this step.

---