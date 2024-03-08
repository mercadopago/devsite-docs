# Realizar cobranças recorrentes

Sigue los procesos a continuación para configurar la recepción de pagos recurrentes de tus clientes.

## Procesar el primer pago

Para la primera transacción, siempre será necesario solicitar los datos de la tarjeta y procesar el pago con el código de seguridad (**CVV**). Una vez que esté en su backend con toda la información recopilada, es el momento de enviar la solicitud a Mercado Pago a través de nuestras APIs.

Los campos mínimos requeridos para enviar son: `token`, `transaction_amount`, `installments`, `payment_method_id` y el `payer.email`. Recuerda que cuanta más información adicional envíes, mayor será la probabilidad de que el pago sea aprobado, ya que la evaluación de riesgos tendrá más datos para analizar.

Se deben considerar dos flujos para guardar los datos de la tarjeta del cliente:

----[mlb]----
1. En el caso de que la afiliación incluya el pago de la primera cuota, el primer pago se procesa con [Checkout Transparente](/developers/es/docs/checkout-api/integration-configuration/card/integrate-via-cardform) o [Checkout Bricks](/developers/es/docs/checkout-bricks/card-payment-brick/payment-submission) siguiendo los procesos de pago a Mercado Pago. Para ello, su backend debe poder recibir la información del formulario con el token generado y los datos proporcionados.

------------
----[mla, mlm, mpe, mco, mlu, mlc]----
1. En el caso de que la afiliación incluya el pago de la primera cuota, el primer pago se procesa con [Checkout API](/developers/es/docs/checkout-api/integration-configuration/card/integrate-via-cardform) o [Checkout Bricks](/developers/es/docs/checkout-bricks/card-payment-brick/payment-submission) siguiendo los procesos de pago a Mercado Pago. Para ello, su backend debe poder recibir la información del formulario con el token generado y los datos proporcionados.

------------

2. En el caso de que la afiliación no incluya el pago de una primera cuota, deben considerarse dos flujos:

- Un primer flujo para tarjetas **Visa** y **Master** con autenticación a través de [Zero Dollar Auth](/developers/es/docs/zero-dollar-auth/integration).

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

- Un segundo flujo con el cobro de un monto bajo y la devolución del dinero.

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
===
Encontre o estado do pagamento no campo _status_.
===

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
===
Encontre o estado do pagamento no campo _status_.
===
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
===
Encontre o status do pagamento no campo _status_.
===
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
===
Encontre o status do pagamento no campo _status_.
===
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
===
Encontre o status do pagamento no campo _status_.
===
 
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
> Para obtener más información, sigue los pasos de nuestra integración de pagos con tarjeta de [Checkout Transparente](/developers/es/docs/checkout-api/integration-configuration/card/integrate-via-cardform) o utilizando el [Brick de Card Payment.](/developers/es/docs/checkout-bricks/card-payment-brick/default-rendering)

------------
----[mla, mlm, mpe, mco, mlu, mlc]----
> Para obtener más información, sigue los pasos de nuestra integración de pagos con tarjeta de [Checkout API](/developers/es/docs/checkout-api/integration-configuration/card/integrate-via-cardform) o utilizando el [Brick de Card Payment.](/developers/es/docs/checkout-bricks/card-payment-brick/default-rendering)

------------

## Asociar tarjeta al cliente

Después de procesar el primer pago y asegurarse de que la tarjeta sea válida, crea un cliente y asígnales la tarjeta utilizada en el primer pago.

Para crear un cliente y asociarlo con su tarjeta, debes enviar el `customer_id` y el `card_token`. Cada cliente se almacenará con el valor `customer` y cada tarjeta con el valor `card`.

Además, recomendamos almacenar los datos de la tarjeta siempre que se complete con éxito un pago. Esto permite que se almacenen los datos correctos para compras futuras y optimiza el proceso de pago para el comprador.

Para crear un cliente y una tarjeta, utiliza uno de los siguientes SDK.

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
> Para obtener más información, consulta la sección de [Gestión de tarjetas y clientes de Checkout Transparente.](/developers/es/docs/checkout-api/customer-management)

------------
----[mla, mlm, mpe, mco, mlu, mlc]----
> Para obtener más información, consulta la sección de [Gestión de tarjetas y clientes de Checkout API.](/developers/es/docs/checkout-api/customer-management)

------------

## Obtener los datos del cliente

Para obtener los datos del cliente, como el ID, la dirección o la fecha de registro, puedes obtenerlos a través de nuestra API de clientes. Para ello, envía un **GET** con el correo electrónico del cliente al _endpoint_ [/v1/customers/search](/developers/es/reference/customers/_customers_search/get) y realiza la solicitud, o si lo prefieres, utiliza uno de los siguientes SDK.

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
> Para obtener más información, consulta la sección de [Gestión de tarjetas y clientes de Checkout Transparente](/developers/es/docs/checkout-api/customer-management) o la sección de renderizado por defecto del [Brick de Card Payment.](/developers/pt/docs/checkout-bricks/card-payment-brick/default-rendering)

------------
----[mla, mlm, mpe, mco, mlu, mlc]----
> Para obtener más información, consulta la sección de [Gestión de tarjetas y clientes de Checkout API](/developers/es/docs/checkout-api/customer-management) o la sección de renderizado por defecto del [Brick de Card Payment.](/developers/pt/docs/checkout-bricks/card-payment-brick/default-rendering)

------------

## Obtener la tarjeta asociada al cliente

Habiendo obtenido el ID del cliente, úsalo para localizar la tarjeta asociada.

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
> Para obtener más información, consulta la sección de [Gestión de tarjetas y clientes de Checkout Transparente.](/developers/es/docs/checkout-api/customer-management)

------------
----[mla, mlm, mpe, mco, mlu, mlc]----
> Para obtener más información, consulta la sección de [Gestión de tarjetas y clientes de Checkout API.](/developers/es/docs/checkout-api/customer-management)

------------

## Generar un token de tarjeta

Después de localizar los datos de la tarjeta asociada al cliente, utiliza el código _JavaScript_ a continuación para tokenizar la tarjeta utilizando su ID y el código de seguridad.

```javascript

 const formElement = document.getElementById('form-checkout');
    formElement.addEventListener('submit', e => createCardToken(e));
    const createCardToken = async (event) => {
      try {
        const tokenElement = document.getElementById('token');
        if (!tokenElement.value) {
          event.preventDefault();
          const token = await mp.fields.createCardToken({
            cardId: document.getElementById('form-checkout__cardId').value
          });
          tokenElement.value = token.id;
          console.log(tokenElement);
        }
      } catch (e) {
        console.error('error creating card token: ', e)
      }
    }
```

----[mlb]----
> NOTE
>
> Importante
>
> Sigue el paso a paso y evita pagos fraudulentos con nuestras recomendaciones para [mejorar la aprobación de tus pagos.](/developers/es/docs/checkout-api/how-tos/improve-payment-approval)
> <br><br>
> Para obtener más información, consulta la sección de [Gestión de tarjetas y clientes de Checkout Transparente.](/developers/es/docs/checkout-api/customer-management)

------------
----[mla, mlm, mpe, mco, mlu, mlc]----
> NOTE
>
> Importante
>
> Sigue el paso a paso y evita pagos fraudulentos con nuestras recomendaciones para [mejorar la aprobación de tus pagos.](/developers/es/docs/checkout-api/how-tos/improve-payment-approval)
> <br><br>
>  Para obtener más información, consulta la sección de [Gestión de tarjetas y clientes de Checkout API.](/developers/es/docs/checkout-api/customer-management)

------------

## Realizar cobros

Utiliza el token generado anteriormente para registrar el pago, indicando el ID del cliente asociado a la tarjeta.

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
> Para obtener más información, consulta la sección de [Gestión de tarjetas y clientes de Checkout Transparente](/developers/es/docs/checkout-api/customer-management) o la sección de renderizado por defecto del [Brick de Card Payment.](/developers/pt/docs/checkout-bricks/card-payment-brick/default-rendering)

------------
----[mla, mlm, mpe, mco, mlu, mlc]----
> Para obtener más información, consulta la sección de [Gestión de tarjetas y clientes de Checkout API](/developers/es/docs/checkout-api/customer-management) o la sección de renderizado por defecto del [Brick de Card Payment.](/developers/pt/docs/checkout-bricks/card-payment-brick/default-rendering)

------------

## Actualizar tarjetas

En caso necesario, es posible agregar nuevas tarjetas a un cliente específico. Para ello, busca al cliente y establece los nuevos datos de la tarjeta utilizando uno de los códigos disponibles a continuación.

> NOTE
>
> Importante
>
> En caso de que sea necesario eliminar una tarjeta antes de agregar nuevas tarjetas a un cliente, envía una solicitud **DELETE** al _endpoint_ [/v1/customers/{customer_id}/cards/{id}](/developers/es/reference/cards/_customers_customer_id_cards_id/delete) proporcionando el `customer_id` y el `id` de la tarjeta que deseas eliminar. Después de que la solicitud se ejecute con éxito, podrás agregar la nueva tarjeta.

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
> Para obtener más información, consulta la sección de [Gestión de tarjetas y clientes de Checkout Transparente.](/developers/es/docs/checkout-api/customer-management)

------------
----[mla, mlm, mpe, mco, mlu, mlc]----
> Para obtener más información, consulta la sección de [Gestión de tarjetas y clientes de Checkout API.](/developers/es/docs/checkout-api/customer-management)

------------