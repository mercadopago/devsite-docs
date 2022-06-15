# Receber pagamentos com cartões salvos

Para que um cliente possa fazer um pagamento com seus cartões previamente salvos em sua conta, é necessário que uma nova captura do código de segurança do cartão seja realizada. Isso acontece pois, por segurança, o Mercado Pago não pode armazenar esses dados.

Para receber pagamentos a partir de cartões previamente salvos, siga as etapas abaixo.


## Exibir cartões salvos

A primeira etapa é exibir para o comprador a lista de cartões salvos para que seja possível escolher a opção que deseja utilizar ao realizar um pagamento. Para isso, envie um GET com os atributos necessários ao endpoint [/v1/customers/{customer_id}/cards](/developers/pt/reference/cards/_customers_customer_id_cards/get) e execute a requisição ou, se preferir, utilize os SDKs listados abaixo.


[[[

```php

<?php
    $customer = MercadoPago\Customer::find_by_id($id);
    $cards = $customer->cards();
?>

```
```node

  var filters = {
    id: customer_id
  };

  mercadopago.customers.search({
    qs: filters
  }).then(function (customer) {
    console.log(customer);
  });

```
```java

MercadoPagoConfig.setAccessToken("ENV_ACCESS_TOKEN");

CustomerClient customerClient = new CustomerClient();

Customer customer = customerClient.get("247711297-jxOV430go9fx2e");
customerClient.listCards(customer.getId());

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


## Criar formulário de pagamento

Após exibir os cartões salvos, crie o formulário de pagamento utilizando o código abaixo diretamente em seu projeto.

[[[
```html

<li>
   <label>Payment Method:</label>
   <select id="cardId" name="cardId"></select>
</li>
<li id="cvv">
   <label for="cvv">Security code:</label>
   <input type="text" id="cvv" placeholder="123" />
</li>
<script>
   const customerCards = [{
       "id": "3502275482333",
       "last_four_digits": "9999",
       "payment_method": {
           "name": "amex",
       },
       "security_code": {
           "length": 4,
       }
   }];

   // Append customer cards to select element
   const selectElement = document.getElementById('cardId');
   const tmpFragment = document.createDocumentFragment();
   customerCards.forEach(({id, last_four_digits, payment_method}) => {
       const optionElement = document.createElement('option');
       optionElement.setAttribute('value', id)
       optionElement.textContent = `${payment_method.name} ended in ${last_four_digits}`
       tmpFragment.appendChild(optionElement);
   })
   selectElement.appendChild(tmpFragment)
</script>
```
]]]


## Capturar código de segurança

Após exibir os cartões salvos e criar o formulário de pagamento, é necessário realizar a captura do código de segurança do cartão. Para isso, deve-se criar um token enviando o formulário com o ID do cartão e o código de segurança através do Javascript abaixo.


[[[
```javascript
(async function createToken() {
       try {
           const token = await mp.createCardToken({
               cardId: document.getElementById('cardId').value,
               securityCode: document.getElementById('cvv').value,
           })

            // Use the received token to make a POST request to your backend
           console.log('token received: ', token.id)
       }catch(e) {
           console.error('error creating token: ', e)
       }
   })()
```
]]]



## Criar pagamento

Uma vez obtido o token, é preciso criar o pagamento com o valor correspondente. Ao realizar um pagamento com um cartão guardado, deve-se enviar o ID do cliente junto do token utilizando o endpoint [/v1/payments](/developers/pt/reference/payments/_payments/post) ou um dos SDKs abaixo.



[[[
```php

<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment = new MercadoPago\Payment();

  $payment->transaction_amount = 100;
  $payment->token = "ff8080814c11e237014c1ff593b57b4d";
  $payment->installments = 1;
  $payment->payer = array(
        "type" => "customer",
        "id" => "123456789-jxOV430go9fx2e"
    );

  $payment->save();

?>

```
```node

var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

var payment_data = {
  transaction_amount: 100,
  token: 'ff8080814c11e237014c1ff593b57b4d',
  installments: 1,
  payer: {
    type: "customer"
    id: "123456789-jxOV430go9fx2e"
  }
};

mercadopago.payment.create(payment_data).then(function (data) {
  console.log(data);
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
