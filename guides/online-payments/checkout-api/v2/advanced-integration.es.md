# Integración avanzada

## Recuerda tus clientes y sus tarjetas

Usa nuestras APIs para guardar la referencia de las tarjetas de tus clientes y poder brindarles una mejor experiencia. De esta manera, tus clientes no tienen que completar sus datos cada vez y pueden finalizar sus pagos más rápido.

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Crear un cliente y una tarjeta

Para crear un cliente y su tarjeta tienes que enviar el campo del e-mail y el token generado.
Vas a sumar a cada cliente con el valor `customer` y a la tarjeta como `card`.

[[[

```php

<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $customer = new MercadoPago\Customer();
  $customer->email = "test@test.com";
  $customer->save();

  $card = new MercadoPago\Card();
  $card->token = "9b2d63e00d66a8c721607214cedaecda";
  $card->customer_id = $customer->id();
  $card->save();

?>

```
```node

var mercadopago = require('mercadopago');
mercadopago.configure({
    access_token: 'ENV_ACCESS_TOKEN'
});

var customer_data = { "email": "test@test.com" }

mercadopago.customers.create(customer_data).then(function (customer) {

  var card_data = {
    "token": "9b2d63e00d66a8c721607214cedaecda",
    "customer": customer.id
  }

  mercadopago.cards.create(card_data).then(function (card) {
    console.log(card);
  });

});

```
```java

import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Customer customer = new Customer();
customer.setEmail("john@yourdomain.com");
customer.save();

Card card = new Card();
card.setToken("9b2d63e00d66a8c721607214cedaecda");
card.setCustomerId(customer.getId());
card.save();

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
  token: '9b2d63e00d66a8c721607214cedaecda'
}
card_response = sdk.card.create(customer['id'], card_request)
card = card_response[:response]

```
```csharp

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var customerRequest = new CustomerRequest
{
    Email = "test@test.com",
};
var customerClient = new CustomerClient();
Customer customer = await customerClient.CreateAsync(customerRequest);

var cardRequest = new CustomerCardCreateRequest
{
    Token = "9b2d63e00d66a8c721607214cedaecda",
};
CustomerCard card = await customerClient.CreateCardAsync(customer.Id, cardRequest);

```
```python

import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

customer_data = {
  "email": "test@test.com"
}
customer_response = sdk.customer().create(customer_data)
customer = customer_response["response"]

card_data = {
  "token": "9b2d63e00d66a8c721607214cedaecda"
}
card_response = sdk.card().create(customer["id"], card_data)
card = card_response["response"]

```
```curl

curl -X POST \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
  'https://api.mercadopago.com/v1/customers/CUSTOMER_ID/cards' \
  -d '{"token": "9b2d63e00d66a8c721607214cedaecda"}'

```

]]]

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Respuesta

```json
{
    "id": "123456789-jxOV430go9fx2e",
    "email": "test@test.com",
    ...
    "default_card": "1490022319978",
    "default_address": null,
    "cards": [{
        "id": "1490022319978",
        "expiration_month": 12,
        "expiration_year": 2020,
        "first_six_digits": "415231",
        "last_four_digits": "0001",
        ...
    }],
    "addresses": [],
    "live_mode": false
}
```

> NOTE
>
> Nota
>
> Te recomendamos almacenar los datos de tarjeta luego de realizar un pago de forma exitosa para guardar datos correctos.

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Agrega nuevas tarjetas a un cliente

Para agregar nuevas tarjetas a un cliente, debes crear un token y hacer un `HTTP POST` al `customer`.

[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $customer = MercadoPago\Customer::find_by_id("247711297-jxOV430go9fx2e");

  $card = new MercadoPago\Card();
  $card->token = "9b2d63e00d66a8c721607214cedaecda";
  $card->customer_id = $customer->id;
  $card->save();

  print_r($card);

?>

```
```node

var mercadopago = require('mercadopago');
mercadopago.configure({
    access_token: 'ENV_ACCESS_TOKEN'
});

var filters = {
  id: "247711297-jxOV430go9fx2e"
};

mercadopago.customers.search({
  qs: filters
}).then(function (customer) {
  card_data = {
    "token": "9b2d63e00d66a8c721607214cedaecda",
    "customer": customer.id
  }

  mercadopago.cards.create(card_data).then(function (card) {
    console.log(card);
  });
});


```
```java

import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Customer customer = Customer.load("247711297-jxOV430go9fx2e")

Card card = new Card();
card.setToken("9b2d63e00d66a8c721607214cedaecda");
card.setCustomerId(customer.getID());
card.save();

System.out.print(card.toString());

```
```ruby

require 'mercadopago'

sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

customer_response = sdk.customer.get('247711297-jxOV430go9fx2e')
customer = customer_response[:response]

card_request = {
  token: '9b2d63e00d66a8c721607214cedaecda'
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
  "token": "9b2d63e00d66a8c721607214cedaecda"
}
card_response = sdk.card().create(customer["id"], card_data)
card = card_response["response"]

print(card)

```
```curl
curl -X POST \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
  'https://api.mercadopago.com/v1/customers' \
  -d '{"email": "test@test.com"}'

curl -X POST \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
  'https://api.mercadopago.com/v1/customers/CUSTOMER_ID/cards' \
  -d '{"token": "9b2d63e00d66a8c721607214cedaecda"}'
```

]]]

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Respuesta


```json
{
    "id": "1493990563105",
    "expiration_month": 12,
    "expiration_year": 2020,
    "first_six_digits": "503175",
    "last_four_digits": "0604",
    "payment_method": {
        "id": "master",
        "name": "master",
        "payment_type_id": "credit_card",
        "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/master.gif",
        "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/master.gif"
    },
    "security_code": {
        "length": 3,
        "card_location": "back"
    },
    "issuer": {
        "id": 3,
        "name": "Mastercard"
    },
    "cardholder": {
        "name": "Card holdername",

        "identification": {
            "number": "12345678",
            "type": "DNI"
        }

    },
    "date_created": "2017-05-05T09:22:30.893-04:00",
    "date_last_updated": "2017-05-05T09:22:30.893-04:00",
    "customer_id": "255276729-yLOTNHQjpDWw1X",
    "user_id": "255276729",
    "live_mode": false
}
```

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Usa las tarjetas guardadas para un pago

Para que un cliente pueda hacer un pago con sus datos guardados, es necesario volver a capturar el código de seguridad. Mercado Pago no puede almacenar esa información por cuestiones de seguridad.

<br>

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Muestra las tarjetas guardadas a tu cliente

Primero, obtén el listado de guardadas para que tu cliente pueda elegir con cuál quiere pagar:

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

  Customer customer = Customer.load(customerId)
  ArrayList<Cards> cards = customer.getCards();

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

Respuesta de datos de una tarjeta guardada:

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

Y puedes armar el formulario de la siguiente manera:

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
<br>

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Captura el código de seguridad

El cliente tiene que ingresar el código de seguridad en un flujo similar al que realizaste para la [captura de los datos de la tarjeta](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/receiving-payment-by-card/#bookmark_captura_los_datos_de_la_tarjeta). Debes crear un token enviando el formulario con el ID de la tarjeta y el código de seguridad.

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

----[mla, mlm, mpe, mco, mlu, mlc]----
> Esta documentación utiliza la nueva versión de MercadoPago.js. Para ver la versión anterior, ve a la [sección de Checkout API antigua](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/advanced-integration).
------------
----[mlb]----
> Esta documentación utiliza la nueva versión de MercadoPago.js. Para ver la versión anterior, ve a la [sección de Checkout Transparente antigua](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/advanced-integration).
------------

<br>

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Crea el pago

Una vez obtenido el token, puedes generar el pago por el monto correspondiente. Al ser un pago con tarjeta guardada, debes enviar el ID del cliente junto al token.

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
    type: "customer",
    id: "123456789-jxOV430go9fx2e"
  }
};

mercadopago.payment.create(payment_data).then(function (data) {
  console.log(data);
});

```
```java

import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Payer payer = new Payer();
payer.type = "customer";
payer.id = "123456789-jxOV430go9fx2e";

Payment payment = new Payment();
payment.setTransactionAmount(100f);
payment.setInstallments(1);
payment.setToken('ff8080814c11e237014c1ff593b57b4d');
payment.setPayer(payer);

payment.save();

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
        Email = "test_payer_99999999@testuser.com",
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


### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Busca un cliente creado

Puedes buscar información sobre tu cliente si lo necesitas. Por ejemplo, en el caso que no sepas cuál es el ID asignado. El parámetro requerido para obtenerlo es el e-mail.

[[[

```php

<?php

  $filters = array(
    "id"=>"247711297-jxOV430go9fx2e"
  );

  $customers = MercadoPago\Customer::search($filters);

?>

```
```node

  var filters = {
    email: "test@test.com"
  };

  mercadopago.customers.search({
    qs: filters
  }).then(function (customer) {
    console.log(customer);
  });

```
```java

  Map<String, String> filters = new HashMap<>();
  filters.put("email", "test@test.com");

  ArrayList<Customer> customers = MercadoPago\Customer::search(filters).resources();


```
```ruby

customers_response = sdk.customer.search(filters: { email: 'test@test.com' })
customers = customers_response[:response]

```
```csharp

var searchRequest = new SearchRequest
{
    Filters = new Dictionary<string, object>
    {
        ["email"] = "test@test.com",
    },
};
ResultsResourcesPage<Customer> results = await customerClient.SearchAsync(searchRequest);
IList<Customer> customers = results.Results;

```
```python

filters = {
    "email": "test@test.com"
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

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Respuesta

```json
{
    "paging": {
        "limit": 10,
        "offset": 0,
        "total": 1
    },
    "results": [
        {
            "address": {
                "id": null,
                "street_name": null,
                "street_number": null,
                "zip_code": null
            },
            "addresses": [],
            "cards": [
                {
                    ...
                }
            ],
            "date_created": "2017-05-05T00:00:00.000-04:00",
            "date_last_updated": "2017-05-05T09:23:25.021-04:00",
            "date_registered": null,
            "default_address": null,
            "default_card": "1493990563105",
            "description": null,
            "email": "test@test.com",
            "first_name": null,
            "id": "123456789-jxOV430go9fx2e",
            "identification": {
                "number": null,
                "type": null
            },
            "last_name": null,
            "live_mode": false,
            "metadata": {},
            "phone": {
                "area_code": null,
                "number": null
            }
        }
    ]
}
```

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Consulta el listado de tarjetas de un cliente

[[[
```php

<?php
    $customer = MercadoPago\Customer::find_by_id($customer_id);
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

  Customer customer = Customer.load(customerId)
  ArrayList<Cards> cards = customer.getCards();

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
  'https://api.mercadopago.com/v1/customers/CUSTOMER_ID/cards/' \

```

]]]

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Respuesta

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

## Cancelaciones y devoluciones

----[mla, mlm, mco, mlu, mlb, mlc]----
Las cancelaciones se efectúan cuando el pago en efectivo no se concretó antes de la fecha de vencimiento y el vendedor decide cancelarlo. Y las devoluciones suceden cuando el pago se realizó pero el vendedor decide anularlo total o parcialmente.
------------

----[mpe]----
Las cancelaciones se efectúan cuando el pago en efectivo no se concretó antes de la fecha de vencimiento y el vendedor decide cancelarlo. Y las devoluciones suceden cuando el pago se realizó pero el vendedor decide anularlo totalmente.
------------

Puedes encontrar toda la información en la [sección Devoluciones y cancelaciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/account/cancellations-and-refunds).

---
### Próximos pasos

> LEFT_BUTTON
>
> Otras funcionalidades
>
> Adapta la integración a las necesidades específicas de tu negocio.
>
> [Otras funcionalidades](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/v2/other-features)

> RIGHT_BUTTON_RECOMMENDED_ES
>
> Referencias de API
>
> Encuentra toda la información necesaria para interactuar con nuestras APIs.
>
> [Referencias de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference)
