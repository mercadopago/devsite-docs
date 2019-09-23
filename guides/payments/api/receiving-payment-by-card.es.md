# Recibir un pago con tarjeta

Con Mercado Pago puedes capturar los datos de la tarjeta de forma segura, manteniendo el control de la experiencia de compra que le brindas a tus usuarios.


## Captura los datos de tarjeta

La captura de datos de tarjeta es realizada desde el navegador de tu comprador. Es **muy importante que los datos nunca lleguen a tus servidores por cuestiones de seguridad**.

Mercado Pago cuenta con una librería Javascript para ayudarte a realizar esto de forma simple y segura.

### 1. Incluir MercadoPago.js

Para hacer uso de esta librería debes comenzar insertando el siguiente código en nuestro _checkout_:

```html
<script src="https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js"></script>
```

> NOTE
>
> Nota
>
> Es importante que la librería **siempre** se importe desde _https://secure.mlstatic.com_.

### 2. Configura tu _public key_

Tu clave pública es la que es la que te identifica para poder capturar los datos de tarjeta de forma segura. La _public key_ debe ser cargada después de incluir _MercadoPago.js_ y antes de realizar un _request_.

```javascript
window.Mercadopago.setPublishableKey(ENV_PUBLIC_KEY);
```

> NOTE
>
> Nota
>
> Esta es una clave pública del entorno de pruebas. Para capturar tarjetas reales deberás reemplazarla por tu [clave pública productiva](https://www.mercadopago.com/mla/account/credentials).


### 3. Capturar datos de tarjeta

#### Formulario

El siguiente paso es realizar la captura de los datos de tarjeta. Para hacer esto es importante contar con un formulario que utilice los siguientes atributos `data-checkout`:

```html
<form action="" method="post" id="pay" name="pay" >
    <fieldset>
        <ul>
            <li>
                <label for="email">Email</label>
                <input id="email" name="email" value="test_user_19653727@testuser.com" type="email" placeholder="your email"/>
            </li>
            <li>
                <label for="cardNumber">Credit card number:</label>
                <input type="text" id="cardNumber" data-checkout="cardNumber" placeholder="4509 9535 6623 3704" onselectstart="return false" onpaste="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" autocomplete=off />
            </li>
            <li>
                <label for="securityCode">Security code:</label>
                <input type="text" id="securityCode" data-checkout="securityCode" placeholder="123" onselectstart="return false" onpaste="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" autocomplete=off />
            </li>
            <li>
                <label for="cardExpirationMonth">Expiration month:</label>
                <input type="text" id="cardExpirationMonth" data-checkout="cardExpirationMonth" placeholder="12" onselectstart="return false" onpaste="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" autocomplete=off />
            </li>
            <li>
                <label for="cardExpirationYear">Expiration year:</label>
                <input type="text" id="cardExpirationYear" data-checkout="cardExpirationYear" placeholder="2015" onselectstart="return false" onpaste="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" autocomplete=off />
            </li>
            <li>
                <label for="cardholderName">Card holder name:</label>
                <input type="text" id="cardholderName" data-checkout="cardholderName" placeholder="APRO" />
            </li>
            <li>
                <label for="docType">Document type:</label>
                <select id="docType" data-checkout="docType"></select>
            </li>
            <li>
                <label for="docNumber">Document number:</label>
                <input type="text" id="docNumber" data-checkout="docNumber" placeholder="12345678" />
            </li>
        </ul>
        <input type="hidden" name="paymentMethodId" />
        <input type="submit" value="Pay!" />
    </fieldset>
</form>
```

> WARNING
>
> Importante
>
> Los campos que tienen datos sensibles no cuentan con el atributo `name`, de esta forma nunca llegarán a tus servidores.


----[mla, mlb, mlu, mco, mlc, mpe]----
#### Obtener el tipo de documento

Entre los campos requeridos se encuentra el tipo y número de documento.

Poder obtener el listado de documentos disponibles:

```javascript
window.Mercadopago.getIdentificationTypes();
```
------------

#### Obtener el medio de pago de la tarjeta

Es importante que obtengas el medio de pago de la tarjeta para poder realizar el pago. La función `getBin()` en el ejemplo debajo, obtiene los primeros 6 dígitos de la tarjeta. Estos dígitos son los que identifican el medio de pago y banco emisor de la dicha tarjeta.

El _callback_ llamado `setPaymentMethodInfo` recibe un _status_ y un _response_. La función almacena el id de la respuesta en el campo `paymentMethodId` (_input hidden_)

```javascript
function getBin() {
  const cardnumber = document.getElementById("cardnumber");
  return cardnumber.substring(0,6);
}

function guessingPaymentMethod(event) {
    var bin = getBin();

    if (event.type == "keyup") {
        if (bin.length >= 6) {
            window.Mercadopago.getPaymentMethod({
                "bin": bin
            }, setPaymentMethodInfo);
        }
    } else {
        setTimeout(function() {
            if (bin.length >= 6) {
                window.Mercadopago.getPaymentMethod({
                    "bin": bin
                }, setPaymentMethodInfo);
            }
        }, 100);
    }
};

function setPaymentMethodInfo(status, response) {
    if (status == 200) {
        const paymentMethodElement = document.querySelector('input[name=paymentMethodId]');

        if (paymentMethodElement) {
            paymentMethodElement.value = response[0].id;
        } else {
            const input = document.createElement('input');
            input.setattribute('name', 'paymentMethodId');
            input.setAttribute('type', 'hidden');
            input.setAttribute('value', response[0].id);     

            form.appendChild(input);
        }
    } else {
        alert(`payment method info error: ${response}`);  
    }
};
```

Para obtener el medio de pago, utiliza el método `MercadoPago.getPaymentMethod(jsonParam,callback)`. Este acepta dos parámetros: un objeto y una función de _callback_.

```javascript
window.Mercadopago.getPaymentMethod({
    "bin": bin
}, setPaymentMethodInfo);
```

#### Capturar los datos

Antes de enviar el formulario, debes capturar el evento `submit` y utilizar el método `window.Mercadopago.createToken(form, sdkRespondeHandler);`.

```javascript
doSubmit = false;
addEvent(document.querySelector('#pay'), 'submit', doPay);
function doPay(event){
    event.preventDefault();
    if(!doSubmit){
        var $form = document.querySelector('#pay');

        window.Mercadopago.createToken($form, sdkResponseHandler); // The function "sdkResponseHandler" is defined below

        return false;
    }
};

function sdkResponseHandler(status, response) {
    if (status != 200 && status != 201) {
        alert("verify filled data");
    }else{
        var form = document.querySelector('#pay');
        var card = document.createElement('input');
        card.setAttribute('name', 'token');
        card.setAttribute('type', 'hidden');
        card.setAttribute('value', response.id);
        form.appendChild(card);
        doSubmit=true;
        form.submit();
    }
};
```

Enviando el `form`, y utilizando los atributos `data-checkout` se realiza la captura de todos los campos.

El método `createToken` devolverá un *card_token*, lo cual es la representación segura de la tarjeta:

```json
{
    "id": "ff8080814cbd77a8014cc",
    "public_key": "TEST-b3d5b663-664a-4e8f-b759-de5d7c12ef8f",
    "card_id": null,
    "luhn_validation": true,
    "status": "active",
    "date_used": null,
    "card_number_length": 16,
    "date_created": "2015-04-16T13:06:25.525-04:00",
    "first_six_digits": "450995",
    "last_four_digits": "3704",
    "security_code_length": 3,
    "expiration_month": 6,
    "expiration_year": 2017,
    "date_last_updated": "2015-04-16T13:06:25.525-04:00",
    "date_due": "2015-04-24T13:06:25.531-04:00",
    "live_mode": false,
    "cardholder": {
        "identification": {
            "number": "23456789",
            "type": "type"
        },
        "name": "name"
    }
}
```

El segundo campo del método `createToken` es `sdkResponseHandler`, la cual es una función de _callback_ que será ejecutada al crear el `card_token`.

Utilizaremos esta para crear un campo oculto (_input hidden_), y almacenaremos el valor de `id`, para luego enviar el formulario a tus servidores.


## Recibir un pago con tarjeta

Debes obtener de los parametros enviados en el `POST` el id del `card_token` para realizar un pago único.

Los `card_token` tienen **una validez de 7 días** y son de único uso.

Para realizar el pago solamente debes realizar un _API call_:

[[[
```php
<?php  
    ===
    El valor de la propiedad **status** indicara el estado de un pago (**approved**, **rejected or **in_process**).
    ===

    MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");
    //...
    $payment = new MercadoPago\Payment();
    $payment->transaction_amount = [FAKER][NUMBER][BETWEEN][100, 200];
    $payment->token = "ff8080814c11e237014c1ff593b57b4d";
    $payment->description = "[FAKER][COMMERCE][PRODUCT_NAME]";
    $payment->installments = 1;
    $payment->payment_method_id = "visa";
    $payment->payer = array(
    "email" => "[FAKER][INTERNET][FREE_EMAIL]"
    );
    // Save and posting the payment
    $payment->save();
    //...
    // Print the payment status
    echo $payment->status;
    //...
?>
```
```java
===
El valor de **getStatus()** indicara el estado de un pago (**approved**, **rejected or **in_process**).
===

MercadoPago.SDK.setAccessToken("ENV_ACCESS_TOKEN");
//...
Payment payment = new Payment();
payment.setTransactionAmount([FAKER][NUMBER][BETWEEN][100, 200])
       .setToken("ff8080814c11e237014c1ff593b57b4d")
       .setDescription("[FAKER][COMMERCE][PRODUCT_NAME]")
       .setInstallments(1)
       .setPaymentMethodId("visa")
       .setPayer(new Payer()
         .setEmail("[FAKER][INTERNET][FREE_EMAIL]"));
// Save and posting the payment
payment.save();
//...
// Print the payment status
System.out.println(payment.getStatus());
//...
```
```node
===
El valor de la propiedad **status** indicara el estado de un pago (**approved**, **rejected or **in_process**).
===

var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

var payment_data = {
  transaction_amount: [FAKER][NUMBER][BETWEEN][100, 200],
  token: 'ff8080814c11e237014c1ff593b57b4d'
  description: '[FAKER][COMMERCE][PRODUCT_NAME]',
  installments: 3,
  payment_method_id: 'amex',
  issuer_id: 310,
  payer: {
    email: '[FAKER][INTERNET][FREE_EMAIL]'
  }
};
// Save and posting the payment
mercadopago.payment.save(payment_data).then(function (payment) {
  // ...
}).catch(function (error) {
  // ...
});

```
```ruby
===
El valor de la propiedad **status** indicara el estado de un pago (**approved**, **rejected or **in_process**).
===

require 'mercadopago'
MercadoPago::SDK.access_token = "ENV_ACCESS_TOKEN";

payment = MercadoPago::Payment.new()
payment.transaction_amount = [FAKER][NUMBER][BETWEEN][100, 200]
payment.token = 'ff8080814c11e237014c1ff593b57b4d'
payment.description = '[FAKER][COMMERCE][PRODUCT_NAME]'
payment.installments = 1
payment.payment_method_id = "visa"
payment.payer = {
  email: "[FAKER][INTERNET][FREE_EMAIL]"
}
# Save and posting the payment
payment.save()

```
```csharp
===
El valor de la propiedad **status** indicara el estado de un pago (**approved**, **rejected or **in_process**).
===

using MercadoPago;
using MercadoPago.DataStructures.Payment;
using MercadoPago.Resources;
// ...
MercadoPago.SDK.SetAccessToken("ENV_ACCESS_TOKEN");
//...
Payment payment = new Payment()
{
    TransactionAmount = float.Parse("[FAKER][NUMBER][BETWEEN][100, 200]"),
    Token = "ff8080814c11e237014c1ff593b57b4d",
    Description = "[FAKER][COMMERCE][PRODUCT_NAME]",
    Installments = 1,
    PaymentMethodId = "visa",
    Payer = new Payer(){
        Email = "[FAKER][INTERNET][FREE_EMAIL]"
    }
};
// Save and posting the payment
payment.Save();
//...
// Print the payment status
Console.log(payment.Status);
//...
```
]]]

> Los campos requeridos a enviar son `token`, `transaction_amount`, `payment_method_id` y el `payer.email`.

Respuesta:

```json
{
    "status": "approved",
    "status_detail": "accredited",
    "id": 3055677,
    "date_approved": "2017-02-23T00:01:10.000-04:00",
    "payer": {
        ...
    },
    "payment_method_id": "master",
    "payment_type_id": "credit_card",
    "refunds": [],
    ...
}
```

> NOTE
>
> Puedes ver más información sobre el [manejo de respuestas](https://www.mercadopago.com.ar/developers/es/guides/payments/api/handling-responses).

## Recibir un pago en cuotas

Para hacer uso de las [promociones](https://www.mercadopago.com.ar/promociones) que ofrece Mercado Pago, es importante que se envíe el campo `issuer_id` e `installments` al momento de crear un pago.

El campo `installments` corresponde a la cantidad de cuotas que el comprador elije. El `issuer_id` es el banco emisor de la tarjeta.

Para obtener las cuotas disponibles

```javascript

Mercadopago.getInstallments({
    "bin": bin,
    "amount": amount
}, setInstallmentInfo);
```

La respuesta cuenta con el `issuer_id` que debe ser enviado, y el mensaje recomendado para mostrar en cada una de las cuotas disponibles indicando el valor a pagar:

```json
[
  {
    "payment_method_id": "amex",
    "payment_type_id": "credit_card",
    "issuer": {
        "id": "310",
        ...,
        {
            "installments": 3,
            "installment_rate": 18.9,
            "discount_rate": 0,
            "labels": [
            ],
            "min_allowed_amount": 2,
            "max_allowed_amount": 250000,
            "recommended_message": "3 cuotas de $ 396,33 ($ 1.189,00)",
            "installment_amount": 396.33,
            "total_amount": 1189
        }
        ...,
    ]
  }
]
```

> NOTE
>
> Nota
>
> Debido a la [Resolución E 51/2017](https://www.boletinoficial.gob.ar/#!DetalleNormaBusquedaRapida/158269/20170125/resolucion%2051) de la Secretaría de Comercio Argentina, sobre precios transparentes, es necesario que cumplas con ciertas [exigencias adicionales](https://www.mercadopago.com.ar/developers/es/guides/localization/considerations-argentina).


Para crear el pago es importante enviar los datos indicados anteriormente:

[[[
```php
<?php  

    MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");
    //...
    $payment = new MercadoPago\Payment();
    $payment->transaction_amount = [FAKER][NUMBER][BETWEEN][100, 200];
    $payment->token = "ff8080814c11e237014c1ff593b57b4d";
    $payment->description = "[FAKER][COMMERCE][PRODUCT_NAME]";
    $payment->installments = 3;
    $payment->payment_method_id = "visa";
    $payment->issuer_id = 310;
    $payment->payer = array(
    "email" => "[FAKER][INTERNET][FREE_EMAIL]"
    );
    // Save and posting the payment
    $payment->save();
    //...
?>
```
```java

MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");
// ...
Payment payment = new Payment();
payment.setTransactionAmount([FAKER][NUMBER][BETWEEN][100, 200])
       .setToken("ff8080814c11e237014c1ff593b57b4d")
       .setDescription("[FAKER][COMMERCE][PRODUCT_NAME]")
       .setInstallments(3)
       .setIssuerId(310)
       .setPaymentMethodId("visa")
       .setPayer(new Payer()
         .setEmail("[FAKER][INTERNET][FREE_EMAIL]"));
// Save and posting the payment
payment.save
// ...
```
```node

var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

var payment_data = {
  transaction_amount: [FAKER][NUMBER][BETWEEN][100, 200],
  token: 'ff8080814c11e237014c1ff593b57b4d'
  description: '[FAKER][COMMERCE][PRODUCT_NAME]',
  installments: 3,
  payment_method_id: 'amex',
  issuer_id: 310,
  payer: {
    email: '[FAKER][INTERNET][FREE_EMAIL]'
  }
};
// Save and posting the payment
mercadopago.payment.save(payment_data).then(function (payment) {
  // ...
}).catch(function (error) {
  // ...
});

```
```ruby

require 'mercadopago'
# ...
MercadoPago::SDK.setAccessToken(ENV_ACCESS_TOKEN)
# ...
payment = MercadoPago::Payment.new()
payment.transaction_amount = [FAKER][NUMBER][BETWEEN][100, 200]
payment.token = 'ff8080814c11e237014c1ff593b57b4d'
payment.description = '[FAKER][COMMERCE][PRODUCT_NAME]'
payment.installments = 3
payment.payment_method_id = 'amex'
payment.issuer_id = 310
payment.payer = {
  email: "[FAKER][INTERNET][FREE_EMAIL]"
}
# Save and posting the payment
payment.save()
```
```csharp

using MercadoPago;
using MercadoPago.DataStructures.Payment;
using MercadoPago.Resources;
//...
MercadoPago.SDK.SetAccessToken("ENV_ACCESS_TOKEN");
//...
Payment payment = new Payment()
{
    TransactionAmount = float.Parse("[FAKER][NUMBER][BETWEEN][100, 200]"),
    Token = "ff8080814c11e237014c1ff593b57b4d",
    Description = "[FAKER][COMMERCE][PRODUCT_NAME]",
    Installments = 3,
    IssuerId = 310,
    PaymentMethodId = "visa",
    Payer = new Payer(){
        Email = "[FAKER][INTERNET][FREE_EMAIL]"
    }
};
// Save and posting the payment
payment.Save();
//...
```
]]]

### Aquí tienes un ejemplo de un pago completo

```json
 {
    "transaction_amount": 100,
    "token": "ff8080814c11e237014c1ff593b57b4d",
    "description": "Title of what you are paying for",
    "installments": 12,
    "payment_method_id": "visa",
    "payer": {
        "email": "test_user_19653727@testuser.com"
    },
    "external_reference": "Reference_1234",
    "metadata": {
        "key1": "value1",
        "key2": "value2"
    },
    "statement_descriptor": "MY E-STORE",
    "notification_url": "https://www.your-site.com/webhooks",
    "additional_info": {
        "items": [
            {
                "id": "item-ID-1234",
                "title": "Title of what you are paying for",
                "picture_url": "https://www.mercadopago.com/org-img/MP3/home/logomp3.gif",
                "description": "Item description",
                "category_id": "art", // Available categories at https://api.mercadopago.com/item_categories
                "quantity": 1,
                "unit_price": 100
            }
        ],
        "payer": {
            "first_name": "user-name",
            "last_name": "user-surname",
            "registration_date": "2015-06-02T12:58:41.425-04:00",
            "phone": {
                "area_code": "11",
                "number": "4444-4444"
            },
            "address": {
                "state_name": "State",
                "city_name": "City",
                "street_name": "Street",
                "street_number": 123,
                "zip_code": "5700"
            }
        },
        "shipments": {
            "receiver_address": {
                "zip_code": "5700",
                "street_name": "Street",
                "street_number": 123,
                "floor": 4,
                "apartment": "C"
            }
        }
    }
}
```

## Manejo de respuestas

Es **muy importante** comunicar correctamente los resultados recibidos al crear un pago. Esto ayudará a mejorar la conversión en los casos de rechazos, y evitar contracargos en los casos de transacciones aprobadas.

Te recomendamos leer el artículo sobre el [manejo de respuestas](https://www.mercadopago.com.ar/developers/es/guides/payments/api/handling-responses) y utilizar la comunicación sugerida en cada uno de los casos.

## Recibir una notificación del pago

Es importante que te enteres de cualquier actualización del estado de tu pago. Para esto se debe utilizar _Webhooks_.

Un _Webhook_ es una notificación que se envía de un servidor a otro mediante un request `HTTP POST`.

Puedes encontrar toda la información al respecto en el [artículo de webhooks](https://www.mercadopago.com.ar/developers/es/guides/notifications/webhooks).

### Próximos pasos

#### Recibe pagos con tarjetas guardadas

Puedes almacenar de forma segura las tarjetas de tus clientes y realizar pagos con una experiencia _one-click-to-buy_.

[Más información](https://www.mercadopago.com.ar/developers/es/guides/payments/api/customers-and-cards)
