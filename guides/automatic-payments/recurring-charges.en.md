# Create recurring charges

Follow the processes below to set up the receipt of recurring payments from your customers.

## Process the first payment 

For the first transaction, it will always be necessary to request the card information and process the payment with the security code (**CVV**). Once in your backend with all the collected information, it is time to send the request to Mercado Pago through our APIs.

The minimum required fields to send are: `token`, `transaction_amount`, `installments`, `payment_method_id` and `payer.email`. Remember that the more additional information is transmitted, the higher the chance of payment approval because the risk assessment will have more data to evaluate.

> WARNING
>
> Important
>
> For more information on how to send recurring payment information to the [v1/payments](/developers/en/reference/payments/_payments/post) endpoint with the aim of increasing the approval rate for these types of payments, visit the [Automatic payments messaging](/developers/en/docs/automatic-payments/recurring-charges/subscription-messaging) documentation.

Two flows should be considered for saving the customer's card data:

----[mlb]----
1. In the case where the affiliation includes the payment of the first installment, the first payment is processed with [Checkout Transparente](/developers/en/docs/checkout-api/integration-configuration/card/integrate-via-cardform) or [Checkout Bricks](/developers/en/docs/checkout-bricks/card-payment-brick/payment-submission) following the payment processes to Mercado Pago. For this, it is necessary that your backend can receive the information from the form with the generated token and the provided data.

------------
----[mla, mlm, mpe, mco, mlu, mlc]----
1. In the case where the affiliation includes the payment of the first installment, the first payment is processed with [Checkout API](/developers/en/docs/checkout-api/integration-configuration/card/integrate-via-cardform) or [Checkout Bricks](/developers/en/docs/checkout-bricks/card-payment-brick/payment-submission) following the payment processes to Mercado Pago. For this, it is necessary that your backend can receive the information from the form with the generated token and the provided data.

------------

2. In the case where the affiliation does not include the payment of a first installment, two flows should be considered:

- A first flow for **Visa** and **Master** cards with authentication via [Zero Dollar Auth](/developers/en/docs/zero-dollar-auth/integration).

[[[
```php
<?php
  use MercadoPago\Client\Payment\PaymentClient;
  use MercadoPago\MercadoPagoConfig;


  MercadoPagoConfig::setAccessToken("YOUR_ACCESS_TOKEN");

  $client = new PaymentClient();
  $request_options = new RequestOptions();
  $request_options->setCustomHeaders(["X-Card-Validation: card_validation"]);

  $payment = $client->create([
    "token" => $_POST['token'],
    "payment_method_id" => $_POST['paymentMethodId'],
    "payer" => [
      "id" => $_POST['id'],
      "type" => $_POST['type']
    ],
    "description" => $_POST['description'],
    "transaction_amount" => (float) $_POST['transactionAmount']
  ], $request_options);
  echo implode($payment);
?>
```
```node
import { Payment, MercadoPagoConfig } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: '<ACCESS_TOKEN>' });

payment.create({
    body: { 
        token: req.token,
        payment_method_id: req.payment_method_id,
        payer: {
            id: req.id,
            type: req.type
        },
        description: req.description,
        transaction_amount: req.transaction_amount,
    },
    requestOptions: { 
        X-Card-Validation: 'card_validation' }
})
.then((result) => console.log(result))
.catch((error) => console.log(error));
```
```java
Map<String, String> customHeaders = new HashMap<>();
customHeaders.put("X-Card-Validation", "card_validation");

MPRequestOptions requestOptions = MPRequestOptions.builder()
    .customHeaders(customHeaders)
    .build();

MercadoPagoConfig.setAccessToken("YOUR_ACCESS_TOKEN");

PaymentClient client = new PaymentClient();

PaymentCreateRequest paymentCreateRequest =
   PaymentCreateRequest.builder()
       .transactionAmount(request.getTransactionAmount())
       .token(request.getToken())
       .description(request.getDescription())
       .paymentMethodId(request.getPaymentMethodId())
       .payer(
           PaymentPayerRequest.builder()
               .id(request.getPayer().getId())
               .type(request.getPayer().getType())
               .build())
       .build();

client.create(paymentCreateRequest, requestOptions);
```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('YOUR_ACCESS_TOKEN')

custom_headers = {
 'X-Card-Validation': 'card_validation'
}

custom_request_options = Mercadopago::RequestOptions.new(custom_headers: custom_headers)

payment_data = {
 transaction_amount: params[:transactionAmount].to_f,
 token: params[:token],
 description: params[:description],
 payment_method_id: params[:paymentMethodId],
 payer: {
   id: 'params[:id]',
   type: params[:type]
 }
}

payment_response = sdk.payment.create(payment_data, custom_request_options)
payment = payment_response[:response]

puts payment
```
```csharp
using System;
using MercadoPago.Client.Common;
using MercadoPago.Client.Payment;
using MercadoPago.Config;
using MercadoPago.Resource.Payment;

MercadoPagoConfig.AccessToken = "YOUR_ACCESS_TOKEN";

var requestOptions = new RequestOptions();
requestOptions.CustomHeaders.Add("X-Card-Validation", "card_validation");

var paymentRequest = new PaymentCreateRequest
{
   TransactionAmount = decimal.Parse(Request["transactionAmount"]),
   Token = Request["token"],
   Description = Request["description"],
   PaymentMethodId = Request["paymentMethodId"],
   Payer = new PaymentPayerRequest
   {
       Id = Request["id"],
       Type = Request["type"]
   },
};

var client = new PaymentClient();
Payment payment = await client.CreateAsync(paymentRequest, requestOptions);

Console.WriteLine(payment.Status);
```
```python
import mercadopago
sdk = mercadopago.SDK("ACCESS_TOKEN")

request_options = mercadopago.config.RequestOptions()
request_options.custom_headers = {
    'X-Card-Validation': 'card_validation'
}

payment_data = {
   "transaction_amount": float(request.POST.get("transaction_amount")),
   "token": request.POST.get("token"),
   "description": request.POST.get("description"),
   "payment_method_id": request.POST.get("payment_method_id"),
   "payer": {
       "id": request.POST.get("id"),
       "type": request.POST.get("type")
   }
}

payment_response = sdk.payment().create(payment_data, request_options)
payment = payment_response["response"]

print(payment)
```
```curl
curl --location --request POST 'https://api.mercadopago.com/v1/payments' \
--header 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
--header 'Content-Type: application/json' \
--header 'X-Card-Validation: card_validation' \
--data-raw '{
    "token": "TOKEN",
    "payment_method_id": "master",
    "payer": {
        "id": "{{customer_id}}",
        "type" : "customer",
    },
    "description": "validação de cartão com valor zero dollar master",
    "transaction_amount": 0
}'
```
]]]

- A second flow with the charge of a low amount and the refund of the money.

[[[
```php
<?php
  use MercadoPago\Client\Payment\PaymentClient;
  use MercadoPago\MercadoPagoConfig;


  MercadoPagoConfig::setAccessToken("YOUR_ACCESS_TOKEN");

  $client = new PaymentClient();
  $request_options = new RequestOptions();
  $request_options->setCustomHeaders(["X-Idempotency-Key: <SOME_UNIQUE_VALUE>"]);

  $payment = $client->create([
    "transaction_amount" => (float) $_POST['transactionAmount'],
    "token" => $_POST['token'],
    "description" => $_POST['description'],
    "installments" => $_POST['installments'],
    "payment_method_id" => $_POST['paymentMethodId'],
    "issuer_id" => $_POST['issuer'],
    "payer" => [
      "email" => $_POST['email'],
      "identification" => [
        "type" => $_POST['identificationType'],
        "number" => $_POST['number']
      ]
    ]
  ], $request_options);
  echo implode($payment);
?>
```
```node
import { Payment, MercadoPagoConfig } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: '<ACCESS_TOKEN>' });

payment.create({
    body: { 
        transaction_amount: req.transaction_amount,
        token: req.token,
        description: req.description,
        installments: req.installments,
        payment_method_id: req.paymentMethodId,
        issuer_id: req.issuer,
            payer: {
            email: req.email,
            identification: {
        type: req.identificationType,
        number: req.number
    }}},
    requestOptions: { idempotencyKey: '<SOME_UNIQUE_VALUE>' }
})
.then((result) => console.log(result))
.catch((error) => console.log(error));
```
```java
Map<String, String> customHeaders = new HashMap<>();
    customHeaders.put("x-idempotency-key", <SOME_UNIQUE_VALUE>);
 
MPRequestOptions requestOptions = MPRequestOptions.builder()
    .customHeaders(customHeaders)
    .build();

MercadoPagoConfig.setAccessToken("YOUR_ACCESS_TOKEN");

PaymentClient client = new PaymentClient();

PaymentCreateRequest paymentCreateRequest =
   PaymentCreateRequest.builder()
       .transactionAmount(request.getTransactionAmount())
       .token(request.getToken())
       .description(request.getDescription())
       .installments(request.getInstallments())
       .paymentMethodId(request.getPaymentMethodId())
       .payer(
           PaymentPayerRequest.builder()
               .email(request.getPayer().getEmail())
               .firstName(request.getPayer().getFirstName())
               .identification(
                   IdentificationRequest.builder()
                       .type(request.getPayer().getIdentification().getType())
                       .number(request.getPayer().getIdentification().getNumber())
                       .build())
               .build())
       .build();

client.create(paymentCreateRequest, requestOptions);

```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('YOUR_ACCESS_TOKEN')

custom_headers = {
 'x-idempotency-key': '<SOME_UNIQUE_VALUE>'
}

custom_request_options = Mercadopago::RequestOptions.new(custom_headers: custom_headers)

payment_data = {
 transaction_amount: params[:transactionAmount].to_f,
 token: params[:token],
 description: params[:description],
 installments: params[:installments].to_i,
 payment_method_id: params[:paymentMethodId],
 payer: {
   email: params[:email],
   identification: {----[mla, mlb, mlu, mlc, mpe, mco]----
     type: params[:identificationType],------------
     number: params[:identificationNumber]
   }
 }
}
 
payment_response = sdk.payment.create(payment_data, custom_request_options)
payment = payment_response[:response]
 
puts payment
 
```
```csharp
using System;
using MercadoPago.Client.Common;
using MercadoPago.Client.Payment;
using MercadoPago.Config;
using MercadoPago.Resource.Payment;
 
MercadoPagoConfig.AccessToken = "YOUR_ACCESS_TOKEN";

var requestOptions = new RequestOptions();
requestOptions.CustomHeaders.Add("x-idempotency-key", "<SOME_UNIQUE_VALUE>");
 
var paymentRequest = new PaymentCreateRequest
{
   TransactionAmount = decimal.Parse(Request["transactionAmount"]),
   Token = Request["token"],
   Description = Request["description"],
   Installments = int.Parse(Request["installments"]),
   PaymentMethodId = Request["paymentMethodId"],
   Payer = new PaymentPayerRequest
   {
       Email = Request["email"],
       Identification = new IdentificationRequest
       {----[mla, mlb, mlu, mlc, mpe, mco]----
           Type = Request["identificationType"],------------
           Number = Request["identificationNumber"],
       },
   },
};
 
var client = new PaymentClient();
Payment payment = await client.CreateAsync(paymentRequest, requestOptions);
 
Console.WriteLine(payment.Status);
 
```
```python
import mercadopago
sdk = mercadopago.SDK("ACCESS_TOKEN")

request_options = mercadopago.config.RequestOptions()
request_options.custom_headers = {
    'x-idempotency-key': '<SOME_UNIQUE_VALUE>'
}

payment_data = {
   "transaction_amount": float(request.POST.get("transaction_amount")),
   "token": request.POST.get("token"),
   "description": request.POST.get("description"),
   "installments": int(request.POST.get("installments")),
   "payment_method_id": request.POST.get("payment_method_id"),
   "payer": {
       "email": request.POST.get("email"),
       "identification": {----[mla, mlb, mlu, mlc, mpe, mco]----
           "type": request.POST.get("type"), ------------
           "number": request.POST.get("number")
       }
   }
}
 
payment_response = sdk.payment().create(payment_data, request_options)
payment = payment_response["response"]
 
print(payment)
```
```curl
curl -X POST \
   -H 'accept: application/json' \
   -H 'content-type: application/json' \
   -H 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
   -H 'X-Idempotency-Key: SOME_UNIQUE_VALUE' \
   'https://api.mercadopago.com/v1/payments' \
   -d '{
         "transaction_amount": 100,
         "token": "ff8080814c11e237014c1ff593b57b4d",
         "description": "Blue shirt",
         "installments": 1,
         "payment_method_id": "visa",
         "issuer_id": 310,
         "payer": {
           "email": "PAYER_EMAIL"
         }
   }'
 
```
]]]

----[mlb]----
> For more information, follow the steps of our integration for card payments with [Checkout Transparente](/developers/en/docs/checkout-api/integration-configuration/card/integrate-via-cardform) or using the [Card Payment Brick.](/developers/en/docs/checkout-bricks/card-payment-brick/default-rendering)

------------
----[mla, mlm, mpe, mco, mlu, mlc]----
> For more information, follow the steps of our integration for card payments with [Checkout API](/developers/en/docs/checkout-api/integration-configuration/card/integrate-via-cardform) or using the [Card Payment Brick.](/developers/en/docs/checkout-bricks/card-payment-brick/default-rendering)

------------

## Associate card with the customer

After processing the first payment and ensuring that the card is valid, create a customer and associate it with the card used in the first payment.

To create a customer and associate it with your card, you need to send the `customer_id` and `card_token`. Each customer will be stored with the value `customer`, and each card with the value `card`.

Additionally, we recommend storing the card data whenever a payment is successfully completed. This allows the correct data to be stored for future purchases and optimizes the payment process for the buyer.

To create a customer and card, use one of the SDKs below.

[[[
```php
<?php
  MercadoPagoConfig::setAccessToken("YOUR_ACCESS_TOKEN");
  
  $client_customer = new CustomerClient();
  $customer = $client_customer->create(["email" => "my.user@example.com"]);
  $client = new CustomerCardClient();
  $customer_card = $client->create($customer->id, ["token" => "your_card_token"]);
?>
```
```node
const client = new MercadoPagoConfig({ accessToken: 'YOUR_ACCESS_TOKEN' });
const customer = new Customer(client);

const body = {
  email: "my.user@example.com"
};

customer.create({ body: body }).then((result) => {
  const customerCard = new CustomerCard(client);

  const body = {
    token : result.token,
  };

  customerCard.create({ customerId: 'customer_id', body })
     .then((result) => console.log(result));
})
```
```java

MercadoPagoConfig.setAccessToken("ENV_ACCESS_TOKEN");

CustomerClient customerClient = new CustomerClient();
CustomerCardClient customerCardClient = new CustomerCardClient();

CustomerRequest customerRequest = CustomerRequest.builder()
   .email("john@test.com")
   .build();
Customer customer = customerClient.create(customerRequest);

CustomerCardIssuer issuer = CustomerCardIssuer.builder()
   .id("3245612")
   .build();

CustomerCardCreateRequest cardCreateRequest = CustomerCardCreateRequest.builder()
   .token("9b2d63e00d66a8c721607214cedaecda")
   .issuer(issuer)
   .paymentMethodId("debit_card")
   .build();

customerCardClient.create(customer.getId(), cardCreateRequest);

```
```ruby

require 'mercadopago'

sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

customer_request = {
  email: 'john@yourdomain.com'
}
customer_response = sdk.customer.create(customer_request)
customer = customer_response[:response]

card_request = {
  token: '9b2d63e00d66a8c721607214cedaecda',
  issuer_id: '3245612',
  payment_method_id: 'visa'
}
card_response = sdk.card.create(customer['id'], card_request)
card = card_response[:response]

```
```csharp

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var customerRequest = new CustomerRequest
{
    Email = "test_payer_12345@testuser.com",
};
var customerClient = new CustomerClient();
Customer customer = await customerClient.CreateAsync(customerRequest);

var cardRequest = new CustomerCardCreateRequest
{
    Token = "9b2d63e00d66a8c721607214cedaecda"
};
CustomerCard card = await customerClient.CreateCardAsync(customer.Id, cardRequest);

```
```python

import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

customer_data = {
  "email": "test_payer_12345@testuser.com"
}
customer_response = sdk.customer().create(customer_data)
customer = customer_response["response"]

card_data = {
  "token": "9b2d63e00d66a8c721607214cedaecda",
  "issuer_id": "3245612",
  "payment_method_id": "visa"
}
card_response = sdk.card().create(customer["id"], card_data)
card = card_response["response"]

```
```curl

curl -X POST \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
  'https://api.mercadopago.com/v1/customers/CUSTOMER_ID/cards' \
  -d '{"token": "9b2d63e00d66a8c721607214cedaecda", "issuer_id": "3245612", "payment_method_id": "visa"}'

```
]]]

----[mlb]----
> For more information, check the section [Cards and customers management in Checkout Transparente.](/developers/en/docs/checkout-api/customer-management)

------------
----[mla, mlm, mpe, mco, mlu, mlc]----
> For more information, check the section [Cards and customers management in Checkout API.](/developers/en/docs/checkout-api/customer-management)

------------

## Get customer data

To obtain customer data such as ID, address or registration date, you can retrieve them through our customer API. To do this, send a **GET** with the customer's email to the endpoint [/v1/customers/search](/developers/en/reference/customers/_customers_search/get) and execute the request, or if you prefer, use one of the SDKs below.

[[[
```php
<?php
  MercadoPagoConfig::setAccessToken("YOUR_ACCESS_TOKEN");
  
  $client = new CustomerClient();

  $customer = $client->search(1, 0, ["email" => "my.user@example.com"]);
?>
```
```node
import { Customer, MercadoPagoConfig } from '@src/index';

const client = new MercadoPagoConfig({ accessToken: '<ACCESS_TOKEN>' });
const customer = new Customer(client);

customer.search({ options: { email: '<EMAIL>' } }).then(console.log).catch(console.log);
```
```java

CustomerClient client = new CustomerClient();

Map<String, Object> filters = new HashMap<>();
filters.put("email", "test_payer_12345@testuser.com");

MPSearchRequest searchRequest =
   MPSearchRequest.builder().offset(0).limit(0).filters(filters).build();

client.search(searchRequest);


```
```ruby

customers_response = sdk.customer.search(filters: { email: 'test_payer_12345@testuser.com' })
customers = customers_response[:response]

```
```csharp

var searchRequest = new SearchRequest
{
    Filters = new Dictionary<string, object>
    {
        ["email"] = "test_payer_12345@testuser.com",
    },
};
ResultsResourcesPage<Customer> results = await customerClient.SearchAsync(searchRequest);
IList<Customer> customers = results.Results;

```
```python

filters = {
    "email": "test_payer_12345@testuser.com"
}

customers_response = sdk.customer().search(filters=filters)
customers = customers_response["response"]

```
```curl

curl -X GET \
  -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
  'https://api.mercadopago.com/v1/customers/search' \
  -d '{
    "email": "test_user_19653727@testuser.com"
}'
```
]]]

----[mlb]----
> For more information, check the section [Cards and customers management in Checkout Transparente.](/developers/en/docs/checkout-api/customer-management) or the section [Default rendering in Card Payment Brick.](/developers/pt/docs/checkout-bricks/card-payment-brick/default-rendering)

------------
----[mla, mlm, mpe, mco, mlu, mlc]----
> For more information, check the section [Cards and customers management in Checkout API.](/developers/en/docs/checkout-api/customer-management) or the section [Default rendering in Card Payment Brick.](/developers/pt/docs/checkout-bricks/card-payment-brick/default-rendering)

------------

## Get the card associated with the customer

Having obtained the customer ID, use it to locate the associated card.

[[[
```php
<?php
  $customer_client = new CustomerClient();
  $cards = $client->list("customer_id");
  echo implode ($cards);
?>
```
```node
const client = new MercadoPagoConfig({ accessToken: 'access_token' });
const customerCard = new CustomerCard(client);

customerCard.list({ customerId: '<CUSTOMER_UD>' }).then(console.log).catch(console.log);
```
```java

MercadoPagoConfig.setAccessToken("ENV_ACCESS_TOKEN");

CustomerCardClient customerCardClient = new CustomerCardClient();

MPResourceList<CustomerCard> list = customerCardClient.listAll("000000000-abcdEfghiJklM");
List<CustomerCard> customerCards = list.getResults();

```
```ruby

cards_response = sdk.card.list(customer_id)
cards = cards_response[:response]

```
```csharp

var customerClient = new CustomerClient();
ResourcesList<CustomerCard> customerCards = await customerClient.ListCardsAsync("CUSTOMER_ID");

```
```python

cards_response = sdk.card().list_all(customer_id)
cards = cards_response["response"]

```
```curl

curl -X GET \
  -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
  'https://api.mercadopago.com/v1/customers/CUSTOMER_ID/cards' \

```
]]]

----[mlb]----
> For more information, check the section [Cards and customers management in Checkout Transparente.](/developers/en/docs/checkout-api/customer-management)

------------
----[mla, mlm, mpe, mco, mlu, mlc]----
> For more information, check the section [Cards and customers management in Checkout API.](/developers/en/docs/checkout-api/customer-management)

------------

## Generate a card token

After locating the data of the card associated with the customer, use the snippets below to tokenize the card using its ID (`card_id`). Tokenization provides a more secure digital payment experience by replacing the credit card number with an alternative number, the token.

[[[
```php
<?php

use MercadoPago\Client\CardToken\CardTokenClient;
use MercadoPago\Exceptions\MPApiException;
use MercadoPago\MercadoPagoConfig;

require_once 'vendor/autoload.php';

MercadoPagoConfig::setAccessToken("<ACCESS_TOKEN>");

$client = new CardTokenClient();

try {
    $request = [
        "card_id" => "cardId"
    ];

    $card_token = $client->create($request);
    var_dump($card_token);
} catch (MPApiException $e) {
    echo "Status code: " . $e->getApiResponse()->getStatusCode() . "\n";
    echo "Content: ";
    var_dump($e->getApiResponse()->getContent());
    echo "\n";
} catch (\Exception $e) {
    echo $e->getMessage();
}
```
```node
import { MercadoPagoConfig, CardToken } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: '<ACCESS_TOKEN>' });
const cardToken = new CardToken(client);

const body = {
	card_id : '<CARD_ID>'
};

cardToken.create({ body }).then(console.log).catch(console.log);
```
```java
import com.mercadopago.client.cardtoken.CardTokenClient;
import com.mercadopago.client.cardtoken.CardTokenRequest;
import com.mercadopago.exceptions.MPApiException;
import com.mercadopago.exceptions.MPException;
import com.mercadopago.resources.CardToken;

public class App {
    public static void main(String[] args){
        MercadoPagoConfig.setAccessToken("<ACCESS_TOKEN>");
        
        CardTokenRequest request = CardTokenRequest.builder().cardId("<CARD_ID>").build();
        CardTokenClient client = new CardTokenClient();

        try {
            CardToken cardToken = client.create(request);
            System.out.println(cardToken);
        } catch (MPApiException ex) {
            System.out.printf(
                    "MercadoPago Error. Status: %s, Content: %s%n",
                    ex.getApiResponse().getStatusCode(), ex.getApiResponse().getContent());
        } catch (MPException ex) {
            ex.printStackTrace();
        }
    }
}
```
```dotnet
using System;
using MercadoPago.Config;
using MercadoPago.Client.CardToken;
using MercadoPago.Resource.CardToken;

MercadoPagoConfig.AccessToken = "<ACCESS_TOKEN>";

var request = new CardTokenRequest
{
    CardId = "<CARD_ID>"
};

var client = new CardTokenClient();
CardToken cardToken = await client.CreateAsync(request);

Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(cardToken));
```
```ruby
require_relative '../lib/mercadopago.rb'

sdk = Mercadopago::SDK.new('<ACCESS_TOKEN>')

card_token_request = {
  card_id: '<CARD_ID>'
}

card_token_response = sdk.card_token.create(card_token_request)
card_token = card_token_response[:response]
puts card_token
```
```python
import mercadopago

sdk = mercadopago.SDK("<ACCESS_TOKEN>")

card_token_data = {
    "card_id": "<CARD_ID>"
}

result = sdk.card_token().create(card_token_data)
card_token = result["response"]

print(card_token)
```
```curl
curl --location --request POST 'https://api.mercadopago.com/v1/card_tokens' \
--header 'Authorization: Bearer {{access_token}}' \
--header 'Content-Type: application/json' \
--data-raw '{
 "card_id": {{card_id}}
}'
```
]]]

----[mlb]----
> NOTE
>
> Important
>
> Follow the step-by-step guide and prevent fraudulent payments with our recommendations to [improve the approval of your payments.](/developers/en/docs/checkout-api/how-tos/improve-payment-approval)
> <br><br>
>  For more information, check the section [Cards and customers management in Checkout Transparente.](/developers/en/docs/checkout-api/customer-management)

------------
----[mla, mlm, mpe, mco, mlu, mlc]----
> NOTE
>
> Important
>
> Follow the step-by-step guide and prevent fraudulent payments with our recommendations to [improve the approval of your payments.](/developers/en/docs/checkout-api/how-tos/improve-payment-approval)
> <br><br>
>  For more information, check the section [Cards and customers management in Checkout API.](/developers/en/docs/checkout-api/customer-management)

------------

## Create charges

Use the previously generated token to register the payment, indicating the customer ID associated with the card.

----[mlc]----

> WARNING
>
> Important
>
> The charge value must be an integer. In other words, **decimal places cannot be used**.

------------

[[[
```php
<?php
  use MercadoPago\Client\Payment\PaymentClient;


  MercadoPagoConfig::setAccessToken("YOUR_ACCESS_TOKEN");

  $customer_client = new CustomerClient();
  $cards = $client->list("customer_id");
  
  $client = new PaymentClient();
  $request_options = new RequestOptions();
  $request_options->setCustomHeaders(["X-Idempotency-Key: <SOME_UNIQUE_VALUE>"]);

  $payment = $client->create([
    "transaction_amount" => 100.0,
    "token" => $cards[0]-> token,
    "description" => "My product",
    "installments" => 1,
    "payment_method_id" => "visa",
    "issuer_id" => "123",
    "payer" => [
      "type" => "customer",
      "id" => "1234"
    ]
  ], $request_options);
  echo implode($payment);
?>
```
```node
const client = new MercadoPagoConfig({ accessToken: 'access_token' });
const customerClient = new Customer(client);

customerClient.listCards({ customerId: '<CUSTOMER_ID>' })
	.then((result) => {

  const payment = new Payment(client);

  const body = {
    transaction_amount: 100,
    token: result[0].token,
    description: 'My product',
    installments: 1,
    payment_method_id: 'visa',
    issuer_id: 123,
    payer: {
      type: 'customer',
      id: '123'
  }
};

  payment.create({ body: body }).then((result) => console.log(result));
});
```
```java

MercadoPagoConfig.setAccessToken("ENV_ACCESS_TOKEN");

PaymentClient client = new PaymentClient();

PaymentCreateRequest request = PaymentCreateRequest.builder()
   .transactionAmount(new BigDecimal("100"))
   .installments(1)
   .token("ff8080814c11e237014c1ff593b57b4d")
   .payer(PaymentPayerRequest.builder()
       .type("customer")
       .id("247711297-jxOV430go9fx2e")
       .build())
   .build();

client.create(request);

```
```ruby

require 'mercadopago'

sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

payment_request = {
  token: 'ff8080814c11e237014c1ff593b57b4d',
  installments: 1,
  transaction_amount: 100,
  payer: {
    type: 'customer',
    id: '123456789-jxOV430go9fx2e'
  }
}
payment_response = sdk.payment.create(payment_request)
payment = payment_response[:response]

```
```csharp

using MercadoPago.Config;
using MercadoPago.Client.Payment;
using MercadoPago.Resource.Payment;

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var request = new PaymentCreateRequest
{
    TransactionAmount = 100,
    Token = "ff8080814c11e237014c1ff593b57b4d",
    Installments = 1,
    Payer = new PaymentPayerRequest
    {
        Type = "customer",
        Email = "test_payer_12345@testuser.com",
    },
};

var client = new PaymentClient();
Payment payment = await client.CreateAsync(request);

```
```python

import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

payment_data = {
    "transaction_amount": 100,
    "token": 'ff8080814c11e237014c1ff593b57b4d',
    "installments": 1,
    "payer": {
        "type": "customer",
        "id": "123456789-jxOV430go9fx2e"
    }
}

payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]

```
```curl

curl -X POST \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
  'https://api.mercadopago.com/v1/payments' \
  -d '{
  transaction_amount: 100,
  token: "ff8080814c11e237014c1ff593b57b4d",
  installments: 1,
  payer: {
      type: "customer",
    id: "123456789-jxOV430go9fx2e"
  }
}'

```
]]]

----[mlb]----
> For more information, check the section [Cards and customers management in Checkout Transparente.](/developers/en/docs/checkout-api/customer-management) or the section [Default rendering in Card Payment Brick.](/developers/pt/docs/checkout-bricks/card-payment-brick/default-rendering)

------------
----[mla, mlm, mpe, mco, mlu, mlc]----
> For more information, check the section [Cards and customers management in Checkout API.](/developers/en/docs/checkout-api/customer-management) or the section [Default rendering in Card Payment Brick.](/developers/pt/docs/checkout-bricks/card-payment-brick/default-rendering)

------------

## Update cards

If necessary, it is possible to add new cards to a specific customer. To do this, locate the customer and define the new card details using one of the available codes below.

> WARNING
>
> Important
>
> If it is necessary to delete a card before adding new cards to a customer, send a **DELETE** to the endpoint [/v1/customers/{customer_id}/cards/{id}](/developers/en/reference/cards/_customers_customer_id_cards_id/delete) providing the `customer_id` and `id` of the card you want to delete. After the successful execution of the request, you can add the new card.

[[[
```php
<?php
  MercadoPagoConfig::setAccessToken("YOUR_ACCESS_TOKEN");
  
  $customer_client = new CustomerClient();
  $customer = $customer_client->get("1234");

  $card_client = new CustomerCardClient();
  
  $customer_card = $client->create($customer->id, [
    "token" => "your_card_token",
    "issuer_id" => "2345",
    "payment_method_id" => "debit_card"
  ]);

  echo implode($customer_card);
?>
```
```node
const client = new MercadoPagoConfig({ accessToken: 'access_token' });
const customerClient = new Customer(client);

const customer = customerClient.get({ customerId: '<CUSTOMER_ID>' })
	.then((result) => {

  const cardClient = new CustomerCard(client);

  const body = {
       token : result.token,
       issuer_id: '2345',
       payment_method: 'debit_card' 
  };

cardClient.create({ customerId: customer, body: body })
.then(console.log).catch(console.log);
});
```
```java

MercadoPagoConfig.setAccessToken("ENV_ACCESS_TOKEN");

CustomerClient customerClient = new CustomerClient();
CustomerCardClient customerCardClient = new CustomerCardClient();

Customer customer = customerClient.get("247711297-jxOV430go9fx2e");

CustomerCardIssuer issuer = CustomerCardIssuer.builder()
   .id("3245612")
   .build();

CustomerCardCreateRequest cardCreateRequest = CustomerCardCreateRequest.builder()
   .token("9b2d63e00d66a8c721607214cedaecda")
   .issuer(issuer)
   .paymentMethodId("debit_card")
   .build();

customerCardClient.create(customer.getId(), cardCreateRequest);

```
```ruby

require 'mercadopago'

sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

customer_response = sdk.customer.get('247711297-jxOV430go9fx2e')
customer = customer_response[:response]

card_request = {
  token: '9b2d63e00d66a8c721607214cedaecda',
  issuer_id: '3245612',
  payment_method_id: 'debit_card'
}
card_response = sdk.card.create(customer['id'], card_request)
card = card_response[:response]

puts card

```
```csharp

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var customerClient = new CustomerClient();
Customer customer = await customerClient.GetAsync("247711297-jxOV430go9fx2e");

var cardRequest = new CustomerCardCreateRequest
{
    Token = "9b2d63e00d66a8c721607214cedaecda",
};
CustomerCard card = await customerClient.CreateCardAsync(customer.Id, cardRequest);

Console.WriteLine(card.Id);

```
```python

import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

customer_response = sdk.customer().get("247711297-jxOV430go9fx2e")
customer = customer_response["response"]

card_data = {
  "token": "9b2d63e00d66a8c721607214cedaecda",
  "issuer_id": "3245612",
  "payment_method_id": "debit_card"
}
card_response = sdk.card().create(customer["id"], card_data)
card = card_response["response"]

print(card)

```
```curl

curl -X GET \
  -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
  'https://api.mercadopago.com/v1/customers/CUSTOMER_ID/cards' \

curl -X POST \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/customers/CUSTOMER_ID/cards' \
    -d '{"token": "9b2d63e00d66a8c721607214cedaecda", "issuer": {"id": "3245612"}, "payment_method_id":"debit_card"}'
```
]]]

----[mlb]----
> For more information, check the section [Cards and customers management in Checkout Transparente.](/developers/en/docs/checkout-api/customer-management)

------------
----[mla, mlm, mpe, mco, mlu, mlc]----
> For more information, check the section [Cards and customers management in Checkout API.](/developers/en/docs/checkout-api/customer-management)

------------