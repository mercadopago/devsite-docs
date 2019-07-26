# Sponsor ID

## Introduction

### What is a Sponsor ID?

The `sponsor_id` is an attribute available in the technical integration of all Mercado Pago Products. Its role is to identify the person or company that was responsible for the integration.

### Why should I use it?

As you keep integrating Mercado Pago in more clients and make their payment volume grow (all related to your `sponsor_id`), Mercado Pago will reward you with different benefits. We will soon announce our benefit program for developers, that's why we recommend integrating your `sponsor_id` so it starts counting in your favor as soon as possible. 

### Where can I get my sponsor_id?

Visit the following [page](#) and sign-up as a developer.
Once registered you will obtain your `sponsor_id`.

The `sponsor_id` start with **dev_** and continue with random alpha-numeric characters.

> WARNING
>
> Don't share your `sponsor_id` with anyone.

## Integration usage

### Web Checkout

To add your `sponsor_id` in this product, add it at the time of creating a preference:

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

To add your `sponsor_id` in this product, add it at the time of creating a payment:

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