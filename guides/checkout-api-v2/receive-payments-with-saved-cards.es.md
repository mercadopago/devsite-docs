
# Recibir pagos con tarjetas guardadas

Para que un cliente pueda realizar un pago con las tarjetas previamente guardadas en su cuenta, se requiere una nueva captura del código de seguridad de la tarjeta. Esto se debe a que, por razones de seguridad, Mercado Pago no puede almacenar estos datos.

Para recibir pagos de tarjetas previamente guardadas, sigue los siguientes pasos.


## Exhibir tarjetas guardadas

La primera etapa consiste en mostrar al comprador la lista de tarjetas guardadas para que pueda elegir la opción que desea utilizar al efectuar el pago. Para eso, envía un GET con los atributos requeridos al endpoint [/v1/customers/{customer_id}/cards](/developers/es/reference/cards/_customers_customer_id_cards/get) y ejecuta la solicitud o, si lo prefieres, utiliza los SDKs que se indican a continuación.


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


## Crear formulario de pago

Después de exhibir las tarjetas guardadas, crea el formulario de pago utilizando el código que aparece a continuación directamente en tu proyecto.

[[[
```html
<style>
    #form-checkout {
      display: flex;
      flex-direction: column;
      max-width: 600px;
    }

    .container {
      height: 18px;
      display: inline-block;
      border: 1px solid rgb(118, 118, 118);
      border-radius: 2px;
      padding: 1px 2px;
    }
  </style>
  <form id="form-checkout" method="POST" action="/process_payment">
    <select type="text" id="form-checkout__cardId"></select>
    <div id="form-checkout__securityCode-container" class="container"></div>
    <input name="token" id="token" hidden>
    <button>Enviar</button>
  </form>

<script>
    const mp = new MercadoPago('TEST-2bf9f710-6a6e-47c8-a207-79f5e73b464c');

    const securityCodeElement = mp.fields.create('securityCode', {
      placeholder: "CVV"
    }).mount('form-checkout__securityCode-container');

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

    function appendCardToSelect() {
      const selectElement = document.getElementById('form-checkout__cardId');
      const tmpFragment = document.createDocumentFragment();
      customerCards.forEach(({ id, last_four_digits, payment_method }) => {
        const optionElement = document.createElement('option');
        optionElement.setAttribute('value', id)
        optionElement.textContent = `${payment_method.name} ended in ${last_four_digits}`
        tmpFragment.appendChild(optionElement);
      })
      selectElement.appendChild(tmpFragment)
    }

    appendCardToSelect();

</script>
```
]]]


## Capturar código de seguridad

Después de exhibir las tarjetas guardadas y crear el formulario de pago, es necesario realizar la captura del código de seguridad de la tarjeta. Para eso debes crear un token enviando el formulario con el ID de la tarjeta y el código de seguridad a través del siguiente Javascript.


[[[
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
]]]



## Crear pago

Después de obtener el token, es necesario crear el pago con el importe correspondiente. Al realizar un pago con una tarjeta guardada, se debe enviar el ID del cliente junto con el token utilizando el endpoint [/v1/payments](/developers/es/reference/payments/_payments/post) o uno de los SDKs que aparecen a continuación.



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

> PREV_STEP_CARD_ES
>
> Consultar lista de tarjetas
>
> Aprende cómo consultar la lista de tarjetas de un determinado cliente.
>
> [Ver lista de tarjetas](/developers/es/docs/checkout-api/customer-management/get-cards-list)
