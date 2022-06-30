# Receive payments with saved cards

In order for a customer to be able to make a payment with their cards previously saved in their account, it is necessary that a new capture of the card's security code is performed. This is because, for security reasons, Mercado Pago cannot store this data.

To receive payments from previously saved cards, follow the steps below.


## View saved cards

The first step is to display the list of saved cards to the buyer so that they can choose the option they want to use when making a payment. To do so, send a **GET** with the necessary attributes to the endpoint [/v1/customers/{customer_id}/cards](/developers/en/reference/cards/_customers_customer_id_cards/get) and execute the request or, if you prefer, use the SDKs Listed below.


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

Mercadopago.customers.search({
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

Data response from a saved card:

```json
[{
"id": "1490022319978",
"expiration_month": 12,
"expiration_year": 2020,
"first_six_digits": "415231",
"last_four_digits": "0001",
...
}]
```

## Create payment form

After displaying the saved cards, create the payment form using the code below directly in your project.

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


## Capture security code

After viewing the saved cards and creating the payment form, it is necessary to capture the card's security code. To do so, you must create a token by submitting the form with the card ID and security code using the Javascript below.


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



## Create payment

Once the token is obtained, it is necessary to create the payment with the corresponding value. When making a payment with a saved card, you must send the customer ID along with the token using the endpoint [/v1/payments](/developers/en/reference/payments/_payments/post) or one of the SDKs below.



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

var Mercadopago = require('mercadopago');
Mercadopago.configurations.setAccessToken(config.access_token);

var payment_data = {
transaction_amount: 100,
token: 'ff8080814c11e237014c1ff593b57b4d',
installments: 1,
payer: {
type: "customer"
id: "123456789-jxOV430go9fx2e"
}
};

Mercadopago.payment.create(payment_data).then(function (data) {
console.log(date);
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

import market
sdk = Mercadopago.SDK("ENV_ACCESS_TOKEN")

payment_data = {
"transaction_amount": 100,
"token": 'ff8080814c11e237014c1ff593b57b4d',
"installations": 1,
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

> PREV_STEP_CARD_EN
>
> Get cards list
>
> Learn how to consult the list of cards for a given customer.
>
> [Get cards list](/developers/en/docs/checkout-api/customer-management/get-cards-list)
