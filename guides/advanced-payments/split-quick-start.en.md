# Quick Start

### Marketplace payments with split

> WARNING
>
> Prerequisites
>
> Contact your account executive to correctly configure your Marketplace.
> This guide assumes that you have already created and correctly configured your [Marketplace](https://www.mercadopago.com.br/developers/en/guides/marketplace/api/introduction/) and know how to [generate a card token](https://www.mercadopago.com.br/developers/en/guides/payments/api/receiving-payment-by-card).
> 
> Your sellers must have a MP account and must [give you permission to collect payments on their behalf](https://www.mercadopago.com.br/developers/en/guides/advanced-payments/sellers-permissions).

The shopping cart business model consists of a payment for the total amount of the transaction, made by the Buyer, which is divided into the corresponding payments to each Seller for the sale of their product. In turn, for each payment made to Sellers, the Marketplace may retain a portion of the sale amount as commission.

Next we see how to create an Advanced Payment where the buyer pays with a credit card and the split is made for two sellers:

#### Request
```curl
curl -X POST \
    -H 'Accept":"application/json' \
    -H 'Content-Type: application/json' \
    'https://api.mercadopago.com/v1/advanced_payments?access_token=MKT_ACCESS_TOKEN' \
    -d '{...}'
```

> NOTE
> 
> Note
> 
> The parameter MKT_ACCESS_TOKEN is the access_token of your application.

The following fields are set within the `body`:
* `payer`: Buyer information.
* `payments`: Buyer payment for the total amount of the transaction.
* `disbursements`: Basically the rules of division of payments for the Sellers are defined.
    * `collector_id`: Seller’s Mercado Pago account ID.
    * `application_fee`: Commission the Marketplace retains.
    * `money_release_days`: Amount of days in which the Seller's money will be released from the approval of the payment.
* `external_reference`: Identifier that defines the Marketplace for this particular Advanced Payment.

```json
{
  "payer": {
    "email": "test@user.com"
  },  
  "payments": [
    {
      "payment_method_id": "visa",
      "payment_type_id": "credit_card",
      "token": "jhuyt786r5yhfcgjvhkuoy7t86r75erdfhcgv",
      "transaction_amount": 1000,
      "installments": 1,
      "processing_mode": "aggregator"
    }
  ],
  "disbursements": [
    {
      "amount": 200,
      "external_reference": "ref-collector-1",
      "collector_id": 44444444,
      "application_fee": 20,
      "money_release_days": 30
    },
    {
      "amount": 800,
      "external_reference": "ref-collector-2",
      "collector_id": 55555555,
      "application_fee": 80,
      "money_release_days": 30
    }
  ],
  "external_reference": "ref-transaction"
}
```

The successful response will be an `HTTP Status 201 Created` and will return the complete Advanced Payment. Otherwise it will return the `HTTP Status` corresponding to the error and a clarifying message.

```json
{
  "id": 64576879,
  "status": "approved",
  "payments": [
    {
      "id": 967654546,
      ...
    }
  ],
  "disbursements": [
    {
      "id": 987654,
      ...
    },
    {
      "id": 456678,
      ...
    }
  ],
  ...
}
```

In your Mercado Pago account you will see the amount of your commissions credited and each Seller will see in his account the updated balance with the corresponding amount.

### Wallet Payments

The Wallet Payments modality allows a Seller to process payments with the Payer's permission to access their wallet and without having to request card information or selection of payment method in each transaction.

> WARNING
>
> Prerequisites
>
> To be able to make payments in the Wallet mode, you must correctly configure your application following the [integration guide](https://www.mercadopago.com.br/developers/en/guides/advanced-payments/wallet-config-application).

#### Request
```curl
curl -X POST \
    -H 'Accept":"application/json' \
    -H 'Content-Type: application/json' \
    'https://api.mercadopago.com/v1/advanced_payments?access_token=SELLER_TOKEN' \
    -d '{...}'
```

Inside the `body` a `wallet_payment` object is defined that will contain the details for the payment:
* `transaction_amount`: Transaction amount.
* `description`: Transaction description.
* `external_reference`: Identifier of the transaction defined by the Seller.
* `access_token`: Payer credentials obtained by requesting permits with MP Connect.

#### Body
```json
{
   "wallet_payment":{
      "transaction_amount":700.50,
      "description":"Payment Google",
      "external_reference":"Pago_123",
      "access_token":"PAYER_ACCESS_TOKEN"      
   }
}
```

The successful response will be an `HTTP Status 201 Created` and will return the complete Advanced Payment. Otherwise it will return the `HTTP Status` corresponding to the error and a clarifying message.

```json
{
   "id":90458724,
   "status":"approved",
   "wallet_payment":{
      "transaction_amount":700.50,
      "description":"Payment Google Pay"
   },
   "payments":[
      {
         "id":3870106238,
         "status":"approved",
         "status_detail":"accredited",
         "payment_type_id":"account_money",
         "payment_method_id":"account_money",
         "transaction_amount":700.50,
         "description":"Payment Google Pay",
         "capture":true
      }
   ],
   "payer":{
      "id":786547
   },
   ... 
}
```
