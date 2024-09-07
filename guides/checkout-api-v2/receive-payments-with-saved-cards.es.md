# Recibir pagos con tarjetas guardadas

Para que un cliente pueda realizar un pago con las tarjetas previamente guardadas en su cuenta, se requiere una nueva captura del código de seguridad de la tarjeta. Esto se debe a que, por razones de seguridad, Mercado Pago no puede almacenar estos datos.

Para recibir pagos de tarjetas previamente guardadas, sigue los siguientes pasos.

## Exhibir tarjetas guardadas

La primera etapa consiste en mostrar al comprador la lista de tarjetas guardadas para que pueda elegir la opción que desea utilizar al efectuar el pago. Para eso, envía un GET con los atributos requeridos al endpoint [/v1/customers/{customer_id}/cards](/developers/es/reference/cards/_customers_customer_id_cards/get) y ejecuta la solicitud o, si lo prefieres, utiliza los SDKs que se indican a continuación.

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
```go
package main

import (
	"context"
	"fmt"

	"github.com/mercadopago/sdk-go/pkg/config"
	"github.com/mercadopago/sdk-go/pkg/customercard"
)

func main() {
	accessToken := "{{ACCESS_TOKEN}}"

	cfg, err := config.New(accessToken)
	if err != nil {
		fmt.Println(err)
		return
	}

	client := customercard.NewClient(cfg)

	resources, err := client.List(context.Background(), "<CUSTOMER_ID>")
	if err != nil {
		fmt.Println(err)
		return
	}

	for _, v := range resources {
		fmt.Println(v)
	}
}
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
```go
accessToken := "{{ACCESS_TOKEN}}"


cfg, err := config.New(accessToken)
if err != nil {
   fmt.Println(err)
   return
}


client := payment.NewClient(cfg)


request := payment.Request{
   TransactionAmount: 100,
   Token: "ff8080814c11e237014c1ff593b57b4d",
   Description: "My product",
   Installments: 1,
   PaymentMethodID:  "master",
   Payer: &payment.PayerRequest{
      Email: "test_user_12345@testuser.com",
      Identification: &payment.IdentificationRequest{
         Type: "CPF",
         Number: "01234567890",
      },
   },
}


resource, err := client.Create(context.Background(), request)
if err != nil {
   fmt.Println(err)
}


fmt.Println(resource)
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