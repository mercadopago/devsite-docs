# Automatic payments messaging

Automatic payments messaging, or **Subscription Messaging**, involves information about recurring payments (previous payment ID, subscription ID, number of times the payment will be generated, and POI with `type = SUBSCRIPTIONS`) that is sent to the [Payments API](/developers/en/reference/payments/_payments/post) with the aim of increasing the approval rate for these types of payments.

> WARNING
>
> Important
>
> In the case of recurring payment transactions with the Visa brand, it will be necessary to send the transaction identifier (TID) in messaging transactions. For more information on how to send the TID, check the documentation [Network Transaction ID - TID](/developers/en/docs/automatic-payments/recurring-charges/network-transaction-id).

## Configuration

See below how to send recurring payment information to the [create payment request](/developers/en/reference/payments/_payments/post).

### Process the first payment

For the **first payment** in the automatic payment messaging, send the information below to the [v1/payments](/developers/en/reference/payments/_payments/post) endpoint, through the `point_of_interaction` parameter, or use one of our SDKs below.


- Indicate that the type is subscription (`type = SUBSCRIPTIONS`);
- Indicate that it is the first transaction (`first_time_use = TRUE`);
- Indicate the payment `subscription_id` (we suggest using the `collector` + a unique subscription `ID` per user);
- Number of installments (`subscription_sequence`);
- Frequency of the charges (`invoice_period`);
- Billing date (`billing_date`).

[[[
```php
<?php
use MercadoPago\Client\Payment\PaymentClient;
use MercadoPago\MercadoPagoConfig;


MercadoPagoConfig::setAccessToken("ENV_ACCESS_TOKEN");

$customer_client = new CustomerClient();
$cards = $client->list("customer_id");

$client = new PaymentClient();
$request_options = new RequestOptions();
$request_options->setCustomHeaders(["X-Idempotency-Key: <SOME_UNIQUE_VALUE>"]);

$payment = $client->create([
    "transaction_amount" => (float) $_POST['transactionAmount'],
    "token" => $_POST['token'],
    "description" => $_POST['description'],
    "installments" => (int) $_POST['installments'],
    "payment_method_id" => $_POST['paymentMethodId'],
    "payer" => [
        "id" => $_POST['id'],
        "type" => $_POST['type']
    ],
    "point_of_interaction" => [
    "type"  => $_POST['type'],
    "transaction_data"  => [
        "first_time_use"  => $_POST['first_time_use'],
        "subscription_id"  => "COLLECTORPADRE-SUBSCRIPCION_ID",
        "subscription_sequence" => [
            "number"  => (int) $_POST['number'],
            "total"  => (int) $_POST['total']
        ],
        "invoice_period"  => [
            "period"  => (int) $_POST['period'],
            "type" => $_POST['type']
        ],
        "billing_date" => $_POST['billing_date'],
    ]
]

], $request_options);
echo implode($payment);
?>
```
```node
import { Payment, MercadoPagoConfig } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: '<ENV_ACCESS_TOKEN>' });
const customerClient = new Customer(client);

customerClient.listCards({ customerId: '<CUSTOMER_ID>' })
    .then((result) => {

        const payment = new Payment(client);

        const body = {
            transaction_amount: req.transaction_amount,
            token: req.token,
            description: req.description,
            installments: req.installments,
            payment_method_id: req.payment_method_id,
            payer: {
                id: req.id,
                type: req.type
            },
            point_of_interaction: {
                type: req.type,
                transaction_data: {
                    first_time_use: req.first_time_use,
                    subscription_id: req.subscription_id,
                    subscription_sequence: {
                        number: req.number,
                        total: req.total
                    },
                    invoice_period: {
                        period: req.period,
                        type: req.type
                    },
                    billing_date: req.billing_date
                }
            }

        };

        payment.create({ body: body }).then((result) => console.log(result));
    });
```
```java
Map<String, String> customHeaders = new HashMap<>();
customHeaders.put("x-idempotency-key", <SOME_UNIQUE_VALUE>);
 
MPRequestOptions requestOptions = MPRequestOptions.builder()
    .customHeaders(customHeaders)
    .build();

MercadoPagoConfig.setAccessToken("ENV_ACCESS_TOKEN");

PaymentClient client = new PaymentClient();

PaymentCreateRequest request = PaymentCreateRequest.builder()
        .transactionAmount(request.getTransactionAmount())
        .installments(request.getInstallments())
        .token(request.getToken())
        .payer(PaymentPayerRequest.builder()
                        .id(request.getPayer().getId())
                        .type(request.getPayer().getType())
                        .build())
        .pointOfInteraction(PointOfInteraction.builder()
                .type(request.getPointOfInteraction().getType())
                .transactionData(TransactionData.builder()
                        .firstTimeUse(request.getTransactionData().getFirstTimeUse())
                        .subscriptionId(request.getTransactionData().getSubscriptionId())
                        .subscriptionSequence(SubscriptionSequence.builder()
                                .number(request.getTransactionData().getSubscriptionSequence().getNumber())
                                .total(request.getTransactionData().getSubscriptionSequence().getTotal())
                                .build())
                        .invoicePeriod(InvoicePeriod.builder()
                                .period(request.getTransactionData().getInvoicePeriod().getPeriod())
                                .type(request.getTransactionData().getInvoicePeriod().getType())
                                .build())
                        .billingDate(request.getTransactionData().getBillingDate())
                        .build())
                .build())
        .build();

client.create(request);
```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

custom_headers = {
 'x-idempotency-key': '<SOME_UNIQUE_VALUE>'
}

custom_request_options = Mercadopago::RequestOptions.new(custom_headers: custom_headers)

payment_request = {
 transaction_amount: params[:transactionAmount].to_f,
 token: params[:token],
 description: params[:description],
 payment_method_id: params[:paymentMethodId],
 payer: {
   id: params[:id],
   type: params[:type]
 },
 point_of_interaction: {
    type: params[:type],
    transaction_data: {
      first_time_use: params[:first_time_use],
      subscription_id: params[:subscription_id],
      subscription_sequence: {
        number: params[:number],
        total: params[:total]
      },
      invoice_period: {
        period: params[:period],
        type: params[:type]
      },
      billing_date: params[:billing_date],
    }
}
 
payment_response = sdk.payment.create(payment_request, custom_request_options)
payment = payment_response[:response]
```
```csharp
using MercadoPago.Config;
using MercadoPago.Client.Payment;
using MercadoPago.Resource.Payment;

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var requestOptions = new RequestOptions();
requestOptions.CustomHeaders.Add("x-idempotency-key", "<SOME_UNIQUE_VALUE>");

var request = new PaymentCreateRequest
{
    TransactionAmount = decimal.Parse(Request["transactionAmount"]),
    Token = Request["token"],
    Description = Request["description"],
    PaymentMethodId = Request["paymentMethodId"],
    Installments = Request["installments"],
    Payer = new PaymentPayerRequest
    {
       Id = Request["id"],
       Type = Request["type"]
   },
    PointOfInteraction = new PointOfInteractionRequest
    {
         Type = Request["type"],
         TransactionData = new TransactionDataRequest
         {
              FirstTimeUse = Request["firstTimeUse"],
              SubscriptionId = Request["subscriptionId"],
              SubscriptionSequence = new SubscriptionSequenceRequest
              {
                Number = Request["number"],
                Total = Request["total"]
              },
              InvoicePeriod = new InvoicePeriodRequest
              {
                Period = Request["period"],
                Type = Request["type"]
              },
              BillingDate = Request["billingDate"]
         }
    }
};

var client = new PaymentClient();
Payment payment = await client.CreateAsync(paymentRequest, requestOptions);
```
```python
import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

request_options = mercadopago.config.RequestOptions()
request_options.custom_headers = {
    'x-idempotency-key': '<SOME_UNIQUE_VALUE>'
}

payment_data = {
   "transaction_amount": float(request.POST.get("transaction_amount")),
   "token": request.POST.get("token"),
   "description": request.POST.get("description"),
   "payment_method_id": request.POST.get("payment_method_id"),
   "payer": {
       "id": request.POST.get("id"),
       "type": request.POST.get("type")
   },
    "point_of_interaction": {
         "type": request.POST.get("type"),
         "transaction_data": {
              "first_time_use": bool(request.POST.get("first_time_use")),
              "subscription_id": request.POST.get("subscription_id"),
              "subscription_sequence": {
                "number": int(request.POST.get("number")),
                "total": int(request.POST.get("total"))
              },
              "invoice_period": {
                "period": int(request.POST.get("period")),
                "type": request.POST.get("type")
              },
              "billing_date": request.POST.get("billing_date")
         }
    }
}
```
```curl
curl --location 'https://api.mercadopago.com/v1/payments' \
--header 'Authorization: Bearer ENV_ACCESS_TOKEN' \
--header 'Content-Type: application/json' \
--data '{
    "description": "{{description}}",
    "token": "{{card_token}}",
    "payer": {
        "id": "{{customer_id}}",
        "type": "{{type}}"
    },
    "payment_method_id": "{{payment_method_id}}",
    "transaction_amount": {{transaction_amount}},
    "point_of_interaction": {
        "type": "{{type}}",
        "transaction_data": {
            "first_time_use": {{first_time_use}},
            "subscription_id": "{{subscription_id}}",
            "subscription_sequence": {
                "number": {{subscription_number}},
                "total": {{subscription_total}}
            },
            "invoice_period": {
                "period": {{invoice_period}},
                "type": "{{invoice_type}}"
            },
            "billing_date": "{{billing_date}}",
            "user_present": {{user_present}}
        }
    }
}'
```
]]]

| Parameter  | Type  | Description  | Example |
| --- | --- | --- | --- |
| type | string | Indicates the type of Point of Interaction (POI) 	 | SUBSCRIPTIONS |
| first_time_use| boolean | Indicates if it is the first payment of the subscription | 'true' or 'false' |
| subscription_id | string | Subscription identifier | "COLLECTORPADRE-SUBSCRIPCION_ID" |
| subscription_sequence.number |integer | Indicates the number of the subsequent payment	  | 3 |
| subscription_sequence.total |integer | Indicates the total number of the subscription. For permanent subscriptions, set to 'null' | 12 |
| invoice_period.period |integer | Indicates the frequency of the recurring payment	 | 1 |
| invoice_period.type | string | Indicates the type of recurring payment period | 'daily', 'monthly' or 'yearly' |
| user_present | boolean | Indicates if there was user intervention at the time of payment creation |'true' or 'false' |
| billing_date | string | Billing date | 2024-03-16 |
| payment_reference.id | string | Validation OK payment ID | 20792195335 |
| transaction_amount | number | Payment amount |100 |
| token | string | Card token | 12346622341 |
| description | string | Payment description | "Test payment" |
| payment_method_id | string | Indicates the identifier of the selected payment method | master |
| payer.email | string | Payer's email | buyer@examplemail.com |
| payer.type | string | Type of payer identification associated | 'guest' or 'customer' |

Example:

```json
{
    "payer": {...},
    "transaction_amount": 20,
    "description": "...",
    "token": "....",
    "statement_descriptor": "PRUEBA",
    "issuer_id": ...,
    "payment_method_id": "...",
    "amounts": {...},
    "installments": 1,
    "pos_id": "....",
    "external_reference": "...",
    "point_of_interaction": {
        "type": "SUBSCRIPTIONS",
        "transaction_data": {
            "first_time_use": true,
            "subscription_id": "COLLECTORPADRE-SUBSCRIPCION_ID",
            "subscription_sequence": {
                "number": 1,
                "total": 12
            },
            "invoice_period": {
                "period": 1,
                "type": "monthly"
            },
            "payment_reference": {
                "id": "20792195335"
            },
            "user_present": true/false,
            "billing_date": "2024-03-16"
        }
    }
}
```

### Process subsequent payments

For **subsequent payments** in the recurrence messaging, resend the information from the first payment (**altering the data shown below**) to the [v1/payments](/developers/en/reference/payments/_payments/post) endpoint, through the `point_of_interaction` parameter, or use one of our SDKs mentioned above.

- Indicate that **it is not** the first transaction (`first_time_use = FALSE`);
- Indicate the payment `subscription_id` (we suggest using the `collector` + a unique subscription `ID `per user);
- Current installment number (`subscription_sequence = number`);
- Total number of installments (`subscription_sequence = total`);
- Frequency of the charges (`invoice_period`);
- Billing date (`billing_date`);
- User is present when making the payment (`user_present`);
- Reference number of the first payment (`payment_reference`).

> WARNING
>
> Attention
> 
> In the `payment_reference.id`, the ID of the first payment in the sequence should remain.

Example:

```json
{
    "payer": {...},
    "transaction_amount": 20,
    "description": "...",
    "token": "....",
    "statement_descriptor": "PRUEBA",
    "issuer_id": ...,
    "payment_method_id": "...",
    "amounts": {...},
    "installments": 1,
    "pos_id": "....",
    "external_reference": "...",
    "point_of_interaction": {
        "type": "SUBSCRIPTIONS",
        "transaction_data": {
            "first_time_use": false,
            "subscription_sequence": {
                "number": 3,
                "total": 12
            },
            "invoice_period": {
                "period": 1,
                "type": "monthly"
            },
            "payment_reference": {
                "id": "20792195335"
            },
            "user_present": true/false,
            "billing_date": "2024-03-16"
        }
    }
}
```