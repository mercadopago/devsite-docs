# Receive payments in Gateway mode

> WARNING
>
> Prerequisites
>
> * Have the [card information capture](receiving-payment-by-card.es.md#captura-los-datos-de-tarjeta) implemented.

## Additional attributes

Once you have completed the card information capture flow and have the card_token, you will be able to generate the payment.

To use the Gateway mode, two attributes are added to the payment processing flow:
processing_mode.
1. `merchant_account_id` _(optional)_
2. `processing_mode`

### processing\_mode

It is the mode that indicates if we will process the payments with your merchant numbers or those of Mercado Pago.

If this parameter is not sent in the *POST^, the default value is `aggregator`, indicating that the payment was processed using the merchant numbers of Mercado Pago.

If you want to process it with your merchant numbers, you must send the `gateway`. Automatically, according to the payment method and the BIN numbers, Mercado Pago will use the corresponding merchant number for that transaction.

> NOTE
>
> Note
>
> To request the registration of the Gateway mode and the configuration of your merchant numbers, contact your account manager.

### merchant_account_id

In more complex cases, it is useful to be able to determine the merchant number to be used for each payment.

The `merchant_account_id` attribute allows you to control this behavior. This ID will be the internal identifier of Mercado Pago that represents a particular merchant number.

## Create a payment

Once you have the id of the `card_token` you can make the payment by making an API call:

```php
<?php
  require ('mercadopago.php');

  // Setup your private key
  $mp = new MP('ENV_ACCESS_TOKEN');

  $payment_data = array(
      "transaction_amount" => 100,
      "token" => "ff8080814c11e237014c1ff593b57b4d",
      "payment_method_id" => "visa",
      "payer" => array (
          "email" => "test_user_19653727@testuser.com"
      ),
      "processing_mode" => "gateway",
      "merchant_account_id" => "ID"
  );

  $payment = $mp->post("/v1/payments", $payment_data);
?>
```

The expected response will be as follows:

```json
{
  "id": 1060255593,
  "operation_type": "regular_payment",
  "payment_method_id": "visa",
  ...
  "processing_mode": "gateway",
  "merchant_account_id": "#hashMerchantAccountID",
  "acquirer": "visa",
  "merchant_number": "1234567"
}
```

In addition to returning the `processing_mode` and `merchant_account_id` fields, two more fields are added:

* `acquirer`: Name of the acquirer
* `merchant_number`: Merchant number used to process the payment

## Create a payment in installments

To make use of your bank promotions, it is important to send the `installments` field and `processing_mode` in `gateway` when creating a payment.

The `installments` field corresponds to the number of installments selected by the customer.

In order to get the promotions and installments available:

```javascript
Mercadopago.getInstallments({
    "bin": bin,
    "amount": amount,
    "processing_mode": "gateway",
    "merchant_account_id": "ID"
}, setInstallmentInfo);
```

The response contains the information about the installments available indicating the amount payable:

```json
[
    {
        "payment_method_id": "amex",
        "payment_type_id": "credit_card",
        "processing_mode" : "gateway",
        "merchant_account_id" : "ID",
        "issuer": {
            "id": "303",
            "is_default": null,
            "name": "Banco Patagonia",
            "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/303.gif",
            "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/303.gif"
        },
        "payer_costs": [
            {
                "installments": 1,
                "installment_rate": 0,
                "discount_rate": 0
            }
        ]
        ...
    },
    {
        "payment_method_id": "amex",
        "payment_type_id": "credit_card",
        "processing_mode" : "gateway",
        "merchant_account_id" : "ID",
        ...
  }
]
```
