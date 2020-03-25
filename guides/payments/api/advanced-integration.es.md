# Integración avanzada

## Recuerda tus clientes y sus tarjetas

Usa nuestras APIs para guardar la referencia de las tarjetas de tus clientes y poder brindarles una mejor experiencia. De esta manera, tus clientes no tienen que completar sus datos cada vez y pueden finalizar sus pagos más rápido.

### Crear un cliente y una tarjeta

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

  }).catch(function (error) {
   // Do Stuff...
  });

}).catch(function (error) {
 // Do Stuff...
});

```
```java

import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Customer customer = new Customer();
customer.setEmail("[FAKER][INTERNET][FREE_EMAIL]");
customer.save();

Card card = new Card();
card.setToken("9b2d63e00d66a8c721607214cedaecda");
card.setCustomerId(customer.getId());
card.save();

```
```ruby

require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

customer = MercadoPago::Customer.new()
customer.email = "test@test.com"
customer.save

card = MercadoPago::Card.new()
card.token = "9b2d63e00d66a8c721607214cedaecda"
card.customer_id = customer.id
card.save

```
```csharp

MercadoPago.SDK.SetAccessToken = "ENV_ACCESS_TOKEN";

  Customer customer = new Customer()
    {
      Email = "test@test.com"
    };
    customer.Save();

  Card card = new Card()
    {
      Token = "9b2d63e00d66a8c721607214cedaecda",
      CustomerId = customer.Id
    };

      card.Save();

```
```curl

curl -X POST \
'https://api.mercadopago.com/v1/customers/CUSTOMER_ID/cards?access_token=ENV_ACCESS_TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"token": "9b2d63e00d66a8c721607214cedaecda"}'

```

]]]

Respuesta

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

### Agrega nuevas tarjetas a un cliente

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

mercadopago.searchCustomer({
  qs: filters
}).then(function (customer) {
  card_data = {
    "token": "9b2d63e00d66a8c721607214cedaecda",
    "customer": customer.id
  }

  mercadopago.cards.create(card_data).then(function (card) {
    console.log(card);
  }).catch(function (error) {
   // Do Stuff...
  });
}).catch(function (error) {
  // Do Stuff...
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
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

customer = MercadoPago::Customer.load("247711297-jxOV430go9fx2e")

card = MercadoPago::Card.new()
card.token = "9b2d63e00d66a8c721607214cedaecda"
card.customer_id = customer.id
card.save

puts card

```
```csharp

MercadoPago.SDK.AccessToken = "ENV_ACCESS_TOKEN";

  Customer customer = Customer.FindById("247711297-jxOV430go9fx2e");

  Card card = new Card()
    {
      Token = "9b2d63e00d66a8c721607214cedaecda",
      CustomerId = customer.Id
    };

  card.Save();

  Console.WriteLine(card.Id);

```
```curl

curl -X POST \
'https://api.mercadopago.com/v1/customers/CUSTOMER_ID/cards?access_token=ENV_ACCESS_TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"token": "9b2d63e00d66a8c721607214cedaecda"}'
```

]]]

Respuesta


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

### Usa las tarjetas guardadas para un pago

Para que un cliente pueda hacer un pago con sus datos guardados, es necesario volver a capturar el código de seguridad. Mercado Pago no puede almacenar esa información por cuestiones de seguridad. 

#### 1. Muestra las tarjetas guardadas a tu cliente

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

  mercadopago.searchCustomer({
    qs: filters
  }).then(function (customer) {
    // customer.cards ...
  }).catch(function (error) {
    // Do Stuff...
  });

```
```java

  Customer customer = Customer.load(customerId)
  ArrayList<Cards> cards = customer.getCards();

```
```ruby

    customer = MercadoPago::Customer.load(customer_id);
    cards = customer.cards;

```
```csharp

customer = Customer.FindById("customer.Id");
List<Card> cards = customer.Cards; 

```
```curl

curl -X GET \
  'https://api.mercadopago.com/v1/customers/CUSTOMER_ID/cards/?access_token=ENV_ACCESS_TOKEN' \
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
    <select id="cardId" name="cardId" data-checkout='cardId'>
    <?php foreach ($cards["response"] as $card) { ?>
        <option value="<?php echo $card["id"]; ?>"
            first_six_digits="<?php echo $card["first_six_digits"]; ?>"
            security_code_length="<?php echo $card["security_code"]["length"]; ?>">
                <?php echo $card["payment_method"]["name"]; ?> ended in <?php echo $card["last_four_digits"]; ?>
        </option>
    <?php } ?>
    </select>
</li>
<li id="cvv">
    <label for="cvv">Security code:</label>
    <input type="text" id="cvv" data-checkout="securityCode" placeholder="123" />
</li>
```

#### 2. Captura el código de seguridad

El cliente tiene que ingresar el código de seguridad en un flujo similar al que realizaste para la [captura de los datos de la tarjeta](). Debes crear un token enviando el formulario con el ID de la tarjeta y el código de seguridad.

```javascript 
doSubmit = false;
addEvent(document.querySelector('#pay'),'submit', doPay);function doPay(event){
    event.preventDefault();
    if(!doSubmit){
        var $form = document.querySelector('#pay');

        Mercadopago.createToken($form, sdkResponseHandler); 

// The function "sdkResponseHandler" is defined below

        return false;
    }
};
```

#### 3. Crea el pago

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
    type: "customer"
    id: "123456789-jxOV430go9fx2e"
  }
};

mercadopago.payment.create(payment_data).then(function (data) {
  // Do Stuff...
}).catch(function (error) {
  // Do Stuff...
});

```
```java

import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Payer payer = new Payer();
payer.type = "customer";
payer.id = "123456789-jxOV430go9fx2e";

Payment payment = new Payment();
payment.setTransactionAmount(100);
payment.setInstallments(1);
payment.setToken('ff8080814c11e237014c1ff593b57b4d');
payment.setPayer(payer);

payment.save();

```
```ruby

require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

payment = MercadoPago::Payment.new()
payment.transaction_amount = 100
payment.token = 'ff8080814c11e237014c1ff593b57b4d'
payment.installments = 1
payment.payer = {
  type: "customer"
  id: "123456789-jxOV430go9fx2e"
}

payment.save()

```
```curl

curl -X POST \
  'https://api.mercadopago.com/v1/payments?access_token=ENV_ACCESS_TOKEN' \
  -H 'Content-Type: application/json' \
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


### Busca un cliente creado

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

  mercadopago.searchCustomer({
    qs: filters
  }).then(function (customer) {
    // customer.cards ...
  }).catch(function (error) {
    // Do Stuff...
  });

```
```java

  Map<String, String> filters = new HashMap<>();
  filters.put("email", "test@test.com");

  ArrayList<Customer> customers = MercadoPago\Customer::search(filters).resources();


```
```ruby

    customers = MercadoPago::Customer.search(email: "test@test.com");

```
```curl

curl -X GET \
  'https://api.mercadopago.com/v1/customers/search?access_token=ENV_ACCESS_TOKEN' \
  -d '{
	"email": "test_user_19653727@testuser.com"
}'

```

]]]

Respuesta

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

Consulta el listado de tarjetas de un cliente

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

  mercadopago.searchCustomer({
    qs: filters
  }).then(function (customer) {
    // customer.cards ...
  }).catch(function (error) {
    // Do Stuff...
  });

```
```java

  Customer customer = Customer.load(customerId)
  ArrayList<Cards> cards = customer.getCards();

```
```ruby

    customer = MercadoPago::Customer.load(customer_id);
    cards = customer.cards;

```
```curl

curl -X GET \
  'https://api.mercadopago.com/v1/customers/CUSTOMER_ID/cards/?access_token=ENV_ACCESS_TOKEN' \

```

]]]

Respuesta

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

## Manejo de respuesta de error

Ofrece a tus clientes información clara y precisa sobre los posibles errores en el ingreso de datos de la tarjeta o el estado del pago realizado. Esto permite notificarlos sobre qué acción pueden realizar para solucionarlo o comunicarles si tienen que realizar algún paso extra. 

Por ejemplo, si la tarjeta no tiene saldo suficiente para la compra, puedes recomendarles que vuelva a intentar con otro medio de pago para completar la operación.

### Resultados de creación de un cobro

#### HTTP Status 201 OK

Estado | `status_detail` | Comunicación sugerida
------------ | ------------- | -------------
approved | `accredited` | ¡Listo! Se acreditó tu pago. En tu resumen verás el cargo de `amount` como `statement_descriptor`.
in_process | `pending_contingency` | Estamos procesando tu pago.<br/><br/>No te preocupes, menos de 2 días hábiles te avisaremos por e-mail si se acreditó.
in_process | `pending_review_manual` | Estamos procesando tu pago.<br/><br/>No te preocupes, menos de 2 días hábiles te avisaremos por e-mail si se acreditó o si necesitamos más información.
rejected | `cc_rejected_bad_filled_card_number` | Revisa el número de tarjeta.
rejected | `cc_rejected_bad_filled_date` | Revisa la fecha de vencimiento.
rejected | `cc_rejected_bad_filled_other` | Revisa los datos.
rejected | `cc_rejected_bad_filled_security_code` | Revisa el código de seguridad de la tarjeta.
rejected | `cc_rejected_blacklist` | No pudimos procesar tu pago.
rejected | `cc_rejected_call_for_authorize` | Debes autorizar ante `payment_method_id` el pago de `amount`.
rejected | `cc_rejected_card_disabled` | Llama a `payment_method_id` para activar tu tarjeta o usa otro medio de pago.<br/><br/>El teléfono está al dorso de tu tarjeta.
rejected | `cc_rejected_card_error` | No pudimos procesar tu pago.
rejected | `cc_rejected_duplicated_payment` | Ya hiciste un pago por ese valor.<br/><br/>Si necesitas volver a pagar usa otra tarjeta u otro medio de pago.
rejected | `cc_rejected_high_risk` | Tu pago fue rechazado.<br/><br/>Elige otro de los medios de pago, te recomendamos con medios en efectivo.
rejected | `cc_rejected_insufficient_amount` | Tu `payment_method_id` no tiene fondos suficientes.
rejected | `cc_rejected_invalid_installments` | `payment_method_id` no procesa pagos en `installments` cuotas.
rejected | `cc_rejected_max_attempts` | Llegaste al límite de intentos permitidos.<br/><br/>Elige otra tarjeta u otro medio de pago.
rejected | `cc_rejected_other_reason` | `payment_method_id` no procesó el pago.

### Errores de ingreso de datos

#### HTTP Status 400 Bad Request

Código | Descripción | Comunicación sugerida
------------ | ------------- | -------------
205 | parameter cardNumber can not be null/empty | Ingresa el número de tu tarjeta.
208 | parameter cardExpirationMonth can not be null/empty | Elige un mes.
209 | parameter cardExpirationYear can not be null/empty | Elige un año.
212 | parameter docType can not be null/empty | Ingresa tu tipo de documento.
213 | The parameter cardholder.document.subtype can not be null or empty | Ingresa tu documento.
214 | parameter docNumber can not be null/empty | Ingresa tu documento.
220 | parameter cardIssuerId can not be null/empty | Ingresa tu banco.
221 | parameter cardholderName can not be null/empty | Ingresa el nombre y apellido.
224 | parameter securityCode can not be null/empty | Ingresa el código de seguridad.
E301 | invalid parameter cardNumber | Ingresa un número de tarjeta válido.
E302 | invalid parameter securityCode | Revisa el código de seguridad.
316 | invalid parameter cardholderName | Ingresa un nombre válido.
322 | invalid parameter docType | El tipo de documento es inválido.
323 | invalid parameter cardholder.document.subtype | Revisa tu documento.
324 | invalid parameter docNumber | El documento es inválido.
325 | invalid parameter cardExpirationMonth | El mes es inválido
326 | invalid parameter cardExpirationYear | El año es inválido
default | Otro código de error | Revisa los datos.

### Errores en la creación del token de tarjeta

Estado | `status_detail` | Comunicación sugerida
------------ | ------------- | -------------
106 | Cannot operate between users from different countries | No puedes realizar pagos a otros países.
109 | Invalid number of shares for this payment_method_id | `payment_method_id` no `procesa pagos en `installments` cuotas.<br/><br/>Elige otra tarjeta u otro medio de pago.
126 | The action requested is not valid for the current payment state | No pudimos procesar tu pago.
129 | Cannot pay this amount with this paymentMethod | `payment_method_id` no procesa pagos del monto seleccionado.<br/><br/>Elige otra tarjeta u otro medio de pago.
145 | Invalid users involved | No pudimos procesar tu pago.
150 | The payer_id cannot do payments currently | No puedes realizar pagos.
151 | The payer_id cannot do payments with this payment_method_id | No puedes realizar pagos.
160 | Collector not allowed to operate | No pudimos procesar tu pago.
204 | Unavailable payment_method | `payment_method_id` no está disponible en este momento.<br/><br/>Elige otra tarjeta u otro medio de pago.
801 | Already posted the same request in the last minute | Realizaste un pago similar hace instantes.<br/><br/>Intenta de nuevo en unos minutos.
default | Otro código de error | No pudimos procesar tu pago.

## Cancelaciones y devoluciones

Las cancelaciones se efectúan cuando el pago en efectivo no se concretó antes de la fecha de vencimiento y el vendedor decide cancelarlo. Y las devoluciones suceden cuando el pago se realizó pero el vendedor decide anularlo total o parcialmente.

Puedes encontrar toda la información en la [sección Devoluciones y cancelaciones](https://www.mercadopago.com.ar/developers/es/guides/manage-account/cancellations-and-refunds/).

### Próximos pasos

> LEFT_BUTTON_REQUIRED_ES
>
> Otras funcionalidades
>
> Adapta la integración a las necesidades específicas de tu negocio. 
>
> [Otras funcionalidades](https://www.mercadopago.com.ar/developers/es/guides/payments/api/configurations/)

> RIGHT_BUTTON_RECOMMENDED_ES
>
> Referencias de API
>
> Encuentra toda la información necesaria para interactuar con nuestras APIs.
>
> [Referencias de API](https://www.mercadopago.com.ar/developers/es/reference/)
