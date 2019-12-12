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


# QR Payments in Gas Stations

## Flow

![Mercado Pago QR payment flow at gas stations](/images/mobile/qr-gas-flow.en.svg)

1. The user scans the QR code from the Mercado Pago or Mercado Libre app. The QR contains your POS_ID with the information of the position where the sale was made.

1. Our server consults your server for the last pending sale for that position in that branch.

1. Our server searches for the last outstanding order and, if it exists, return the order body.

1. Your server returns the order to our server and we create the purchase order on the user's smartphone.

1. The user follows the purchase flow and confirms the payment.

1. Immediately after the payment is processed, we send to your server a notification [INP](https://www.mercadopago.com.mx/developers/es/guides/notifications/ipn/) informing that there is a novelty.

1. With the payment identifier, you can [search](https://www.mercadopago.com.ar/developers/en/reference/payments/_payments_search/get/) the payment and continue with your internal processes.

   >
   > If the status is `approved`, the payment must be accredited. On the other hand, if it is `rejected`, the app will retry the payment requesting another means of payment.

1. That is all! Inform your customer that the payment was processed correctly.
## Concepts

First you must familiarize yourself with the following concepts since you will use them during the integration.

| Attribute                    | Description                                                  |
| ---------------------------- | ------------------------------------------------------------ |
| `ACCESS_TOKEN`               | It is the [access token](https://www.mercadopago.com/mlm/account/credentials) of the Mercado Pago account where the payments will be accredited. |
| `COLLECTOR_ID`               | It is the user number of the Mercado Pago account, it is the last 9 digits of your `access_token`, after the middle script. |
| `EXTERNAL_ID`                | It is the unique identifier of the supplier. It is an alphanumeric code defined by you, it can not contain spaces or special characters and the uppercase of the lowercase is not distinguished. |
| `SPONSOR_ID`                 | `COLLECTOR_ID` of a developer's Mercado Pago account. You must create an account by brand (YPF, Shell, Axion, etc). |
| `APIES`, `STORE_ID`, `STORE` | Unique identifier of the service station.                    |

## Objects

Within to the previous concepts, you must also know the objects with which we gonna work.

### POS Object

```json
{
    "name":"Pump 1",
    "external_id": "pos_1",
    "category": 473000,
    "store_id": "123456",
    "url": "api.integration.com?apies=1&pos=1"   
}
```

**Definitions**

- `name`: A string of up to 45 characters.
- `external_id`: It is the unique identifier of the Point of Sale. It is an alphanumeric code defined by you, it cannot contain spaces or special characters and uppercase letters are not case sensitive. A string of up to 40 characters.
- `category` : MCC code of the POS. The possible values are
  - Gastronomy: 621102
  - Gas Station: 473000
  - General: `null`
- `store_id`: It is an identifier number of the branch where the POS belongs. The id of the Store.
- `url`: Server URL of the management system that returns the pump data of a specific station.

### Order Object

```json
{
   "collector_id": 178106235,
   "sponsor_id": 334249281,
   "items":[
      {
         "title":" $500.00 Premium",
         "currency_id": "[FAKER][CURRENCY][ACRONYM]",
         "description":"$500.00 Premium",
         "quantity": 1.0,
         "unit_price": 500.00
      }
   ],
   "external_reference":"internal id",
   "notification_url":"https://www.mycompany.com/notification",
   "loyalty":{
      "program":"payback",
      "transaction_id":"45ea80da",
      "invoice_number":"3592",
      "transaction_date":"2018-09-21T12:33:13.000+00:00",
      "transaction_amount":500.00,
      "store_id":"802",
      "products":[
         {
            "code":"1",
            "quantity":1.0,
            "unit":"litre",
            "unit_price":500.00
         }
      ],
      "cashier_identification":{
         "type":"INE",
         "number":"00000000"
      },
      "period":"0000",
      "shift":"1",
      "affinity_plan":"7"
   }
}
```

**Definitions**

- `collector_id`: Long. Identifier of the MercadoPago account where the payments will be accredited.
- `sponsor_id`: Long. Identifier of a Mercado Pago account that develops the solution.
- `external_reference`: String. Reference to synchronize with your system.
- `notification_url`: String. URL that will receive the notifications sent, defined by the developer.
- `items`: Array. List of products, where each item is an `object` with the following fields:
  - `title`: String. Product name.
  - `quantity`: Integer.
  - `unit_price`: Decimal.
- `loyalty`: Objeto. Data needed to score points in a specific loyalty program:
  - `program`: String. Loyalty program (serviclub, payback, etc.)
  - `transaction_id`: String.
  - `invoice_number`: String.
  - `transaction_date`: String with ISO 8601 format.
  - `transaction_amount`: Decimal. Total amount.
  - `store_id`: String. Unique identifier of the business (identifier of the service station or APIES).
  - `products`: Array. List of products purchased with the following attributes
    - `code`: String. Product code.
    - `quantity`: Integer or decimal.
    - `unit_price`: Decimal.
    - `unit`: String. Metric unit.
  - `cashier_identification`: Object. Employee data.
    - `type`: String. Document type.
    - `number`: String. ID number.
  - `period`: String. Period number.
  - `shift`: String. Shift number.
  - `affinity_plan`: String.

### Payment Object

```json
{
    "id": 420101010101,
    "external_reference": "internal id",
    "status": "approved",
    "status_detail": "accredited",
    ...
}
```

**Definitions**

- `id`: Unique ID generated by Mercado Pago (you will need it to refund a payment).

- `external_reference`: Same alphanumeric string that you added when creating the order.

- `status`: Payment status.

  - `approved`

  - `rejected`

  - `refunded`

  - `charged_back`

- `status_detail`: Detailed information about the current status or the reason for rejection.

Consult the [full documentation](https://www.mercadopago.com.mx/developers/en/reference/payments/resource/) about this object in our API Reference.

## Settings

### URL Config

It is necessary that you have a URL in your management software that returns the pump data of a certain station. Also, should contain the additional parameters that are desired in the query (APIES of the station, supplier or pump identifier, etc.). For example: `https://www.mycompany.com/pay-mp?apies=6232&pos=1`

This URL (or endpoint) should return the information with which the body order where we will create the QR.

We recommend using the `external_reference` attribute to be able to associate the order (and its eventual payment) with the purchase. It is an alphanumeric code of up to 256 characters defined by the developer, cannot contain spaces or special characters and is not case sensitive.

If your system has a loyalty program, you must add the loyalty hash that provides the necessary information to credit the points to the buyer once the payment is approved.

The expected response of this endpoint contains the header `Content-Type: application/json` and should respond with an` HTTP 200 (OK) `status; In addition, you must include in the body a JSON corresponding to the `order` object.

In case of error, the URL should return a status code `HTTP 400 (Bad Request)`, and in the  response body a JSON with the following format:

```json
{
	"error": {
		"type": "XXX",
		"message": "YYYY"
	}
}
```

**Definitions**

| Type        | Description                                                  |
| ----------- | ------------------------------------------------------------ |
| in_process  | There is an order in process, the amount to be charged cannot yet be determined. |
| unavailable | There is no order with pending payment.                      |
| invalid     | Additional parameters (station id, position, etc.) are referred to an unknown location. |
| timeout     | The server of your system has not been able to communicate with any of the other systems (supplier, POS, Mercado Pago API) and has aborted. |

The `message` is optional, corresponds to a plain text explanation of the cause of the problem.

### Notify URL

Whether in the testing or production phase, you must inform the URL to [Mercado Pago](https://www.mercadopago.com.mx/developers/en/support) to set it up and start testing.

## Payments

### QR Creation

You must create a QR code for each POS with an `url`.

**API QR**

```bash
curl -X POST https://api.mercadopago.com/pos?access_token=ACCESS_TOKEN -d
'{
    "name":"Principal Pump",
    "fixed_amount": true,
    "category": 621102,
    "store_id": "123456",
    "external_id": "4lph4num3r1c"
}'
```

1. ### Receive payment

   After the user makes the payment you can obtain the data using any of the following ways:

   1. [IPN](https://www.mercadopago.com.mx/developers/es/guides/notifications/ipn/): When the payment is created, we send a notification via webhook to the URL configured in the `notification_url` of the order, you will need to be subscribed to merchant_order's type notifications.
   2. Do the [payment search](https://www.mercadopago.com.ar/developers/en/reference/payments/_payments_search/get/) using the `external_reference` as the search criteria.

## Refunds

There will be times when you will need to [refund](https://www.mercadopago.com.ar/developers/en/guides/manage-account/cancellations-and-refunds/) a payment totally or partially.

**Total Refund**

```bash
curl -X POST https://api.mercadopago.com/v1/payments/PAYMENT_ID/refunds?access_token=ACCESS_TOKEN
```

**Parcial Refund**

```bash
curl -X POST https://api.mercadopago.com/v1/payments/PAYMENT_ID/refunds?access_token=ACCESS_TOKEN -d '{ "amount": 10.50 }'
```

## Testing

Two test users must be created: one buyer and another collector. With the billing user, the QR must be created and with the other, enter the Mercado Pago or Mercado Libre apps.

> **NOTE**: If in the tests you will use a test account, all accounts must be tested. Otherwise, if you use a real account, all related accounts must be real. **If the `sponsor_id` is added in the testing phase, remember that you must be a test user.**

Consult the [test data](https://www.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/v1/testing): test users and test cards that can be used.

| Test cases                                                   | Expected response                                            |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| The user scans a valid QR code before placing the order.     | The app does not display an order.                           |
| The user scans a QR code with invalid parameters, meaning that it refers to a nonexistent account. | The app reports that an error has occurred.                  |
| The user scans a valid code, once the order has been placed and the sales order has been created. | La app muestra la orden.                                     |
| The user generates an approved payment.                      | The POS system receives the information of an approved payment. |
| The user generates an rejected payment.                      | The POS system receives the information of an rejected payment. |
| A return of a payment is made from the POS.                  | The return is impacted in the buyer's account.               |

### Errors

[Here](https://www.mercadopago.com.mx/developers/en/guides/payments/api/handling-responses/) you can find our error dictionary.

## Reports

Consult the [complete documentation](https://www.mercadopago.com.ar/ayuda/herramienta-conciliacion_2116) about the Mercado Pago reports.
