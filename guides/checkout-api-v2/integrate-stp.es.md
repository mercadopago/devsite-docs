# Transferencias SPEI

Con el Checkout API de Mercado Pago puedes ofrecer pagos a través de **Transferências SPEI**. Este servicio permite realizar pagos desde cualquier banco o institución financiera utilizando tu CLABE **(Clave Bancaria Estandarizada)**.

Para una lista detallada de todos los medios de pago disponibles para integración, envía un **GET** con tu `access_token` al endpoint [/v1/payment_methods](/developers/es/reference/payment_methods/_payment_methods/get) y ejecuta la solicitud o, si lo prefieres, haz la solicitud utilizando uno de nuestros SDKs.

[[[
```php
<?php

MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

$payment_methods = MercadoPago::get("/v1/payment_methods");

?>
```
```node
var Mercadopago = require('mercadopago');
Mercadopago.configurations.setAccessToken(config.access_token);

var response = await Mercadopago.payment_methods.listAll();
var payment_methods = response.body;

```
```java
MercadoPagoConfig.setAccessToken("ENV_ACCESS_TOKEN");

PaymentMethodClient client = new PaymentMethodClient();
client.list();

```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

payment_methods_response = sdk.payment_methods.get()
payment_methods = payment_methods_response[:response]

```
```csharp
using MercadoPago.Client.PaymentMethod;
using MercadoPago.Config;
using MercadoPago.Resource;
using MercadoPago.Resource.PaymentMethod;

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var client = new PaymentMethodClient();
ResourcesList<PaymentMethod> paymentMethods = await client.ListAsync();

```
```python
import market
sdk = Mercadopago.SDK("ACCESS_TOKEN")

payment_methods_response = sdk.payment_methods().list_all()
payment_methods = payment_methods_response["response"]

```
```curl
curl -X GET \
-H 'accept: application/json' \
-H 'content-type: application/json' \
-H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
'https://api.mercadopago.com/v1/payment_methods' \

```
]]]

Para ofrecer pagos a través de **Transferencias SPEI**, sigue los siguientes pasos.

## Importar MercadoPago.js

Para realizar la integración de Checkout API, es necesario capturar los datos necesarios para procesar el pago.

Esta captura se realiza incluyendo la **biblioteca MercadoPago.js** en tu proyecto, seguida del formulario de pago. Utiliza el siguiente código para importar la biblioteca MercadoPago.js antes de añadir el formulario de pago.

[[[
```html
<body>
<script src="https://sdk.mercadopago.com/js/v2"></script>
</body>

```
```bash
npm install @mercadopago/sdk-js

```
]]]

## Configurar credencial

Las credenciales son claves únicas con las que identificamos una integración en tu cuenta. Se utilizan para capturar pagos en tiendas online y otras aplicaciones de forma segura.

Esta es la primera etapa de una estructura de código completa que se debe seguir para integrar correctamente los pagos. Presta atención a los siguientes bloques para añadirlos a los códigos como se indica.

[[[
```javascript
const mp = new MercadoPago('YOUR_PUBLIC_KEY');

```
]]]

## Añadir formulario de pago

Con la **biblioteca MercadoPago.js incluida** y las **credenciales configuradas**, añade el siguiente formulario de pago a tu proyecto para garantizar la captura segura de los datos de los compradores. En esta etapa es importante utilizar la lista que consultaste para obtener los medios de pago disponibles para crear las opciones de pago que deseas ofrecer.

[[[
```html
<form id="form-checkout" action="/process_payment" method="post">
    <div>
      <div>
        <label for="payerFirstName">Name</label>
        <input id="form-checkout__payerFirstName" name="payerFirstName" type="text">
      </div>
      <div>
        <label for="payerLastName">Last name</label>
        <input id="form-checkout__payerLastName" name="payerLastName" type="text">
      </div>
      <div>
        <label for="email">E-mail</label>
        <input id="form-checkout__email" name="email" type="text">
      </div>
    <div>
      <div>
        <input type="hidden" name="transactionAmount" id="transactionAmount" value="100">
        <input type="hidden" name="description" id="description" value="Nome do Produto">
        <br>
        <button type="submit">Pay</button>
      </div>
    </div>
  </form>

```
]]]

## Obtener tipos de documentos

Después de configurar la credencial y añadir el formulario de pago, es necesario obtener los tipos de documentos que se utilizarán para rellenar el formulario de pago.

Al incluir el elemento `select` con el id: `docType` que se encuentra en el formulario, será posible completar automáticamente las opciones disponibles al llamar la siguiente función:

[[[
```javascript
(async function getIdentificationTypes() {
try {
const identificationTypes = await mp.getIdentificationTypes();
const identificationTypeElement = document.getElementById('form-checkout__identificationType');

createSelectOptions(identificationTypeElement, identificationTypes);
} catch (e) {
return console.error('Error getting identificationTypes: ', e);
}
})();

function createSelectOptions(elem, options, labelsAndKeys = { label: "name", value: "id" }) {
const { label, value } = labelsAndKeys;

elem.options.length = 0;

const tempOptions = document.createDocumentFragment();

options.forEach(option => {
const optValue = option[value];
const optLabel = option[label];

const opt = document.createElement('option');
opt.value = optValue;
opt.textContent = optLabel;

tempOptions.appendChild(opt);
});

elem.appendChild(tempOptions);
}

```
]]]

## Enviar pago

Al finalizar la inclusión del formulario de pago y obtener los tipos de documentos, es necesario enviar el email del comprador, el tipo y número de documento, el medio de pago utilizado y el detalle del importe a pagar utilizando nuestra **API de Pagos** o uno de nuestros **SDKs**.

Para configurar pagos con **Transferencias SPEI**, envía un **POST** con los parámetros requeridos al endpoint [/v1/payments](/developers/es/reference/payments/_payments/post) y ejecuta la solicitud o, si lo prefieres, utiliza uno de nuestros SDKs indicados a continuación.

[[[
```php
<?php
require '../vendor/autoload.php';

MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

$payment = new MercadoPago\Payment();
$payment->transaction_amount = 5000;
$payment->description = "Título del producto";
$payment->payment_method_id = "clabe";

$payer = new MercadoPago\Payer();
$payer->email = $_POST['email'];
$payer->first_name = $_POST['payerFirstName']
$payer->last_name = $_POST['payerLastName']
$payer->entity_type = "individual";

$payment->payer = $payer;

$payment->save();

$response = array(
    'status' => $payment->status,
    'payment_link' => $payment->transaction_details->external_resource_url,
    'id' => $payment->id
);
echo json_encode($response);

?>

```
```node
const mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);
 
var payment = req.body;

var payment_data = {
 	transaction_amount: 5000,
 	description: 'Título del producto',
 	payment_method_id: 'clabe',
 	payer: {
 		entity_type: 'individual',
 		email: payment.email,
 		first_name: payment.payerFirstName,
            Last_name: payment.payerLastName
 	}
};

var payment = mercadopago.payment.save(payment_data)
 	.then(function(response) {
 		res.status(response.status).json({
 			status: response.body.status,
 			status_detail: response.body.status_detail,
 			id: response.body.id,
 		});
 	})
 	.catch(function(error) {
 		res.status(error.status).send(error);
 	});

var payment_link = payment.transaction_details.external_resource_url;

```
```java
MercadoPagoConfig.setAccessToken("YOUR_ACCESS_TOKEN");

  PaymentClient client = new PaymentClient();

  PaymentPayerRequest payer =
  	PaymentPayerRequest.builder()
  	.type("customer")
  	.email(request.getEmail())
      .firstName(request.getPayerFirstName())
      .lastName(request.getPayerLastName())
  	.entityType("individual")
  	.build();

  PaymentCreateRequest paymentCreateRequest = PaymentCreateRequest.builder()
  	.transactionAmount(new BigDecimal(5000))
  	.description("description")
  	.paymentMethodId("clabe")
  	.payer(payer)
  	.build();

  Payment payment = client.create(paymentCreateRequest);
  String paymentLink = payment.transactionDetails.externalResourceUrl;

```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ACCESS_TOKEN')

payment_data = {

  transaction_amount: 5000,
  description: "description",
  payment_method_id: "clabe",
  payer: {
    type: "customer",
    email: params[: email],
    entity_type: "individual",
    first_name: params[: payerFirstName]
    last_name: params[: payerLastName]
  }
}

payment_response = sdk.payment.create(payment_data)
payment = payment_response[: response]
payment_link = payment.transaction_details.external_resource_url;

```
```csharp
using System;
using MercadoPago.Client.Common;
using MercadoPago.Client.Payment;
using MercadoPago.Config;
using MercadoPago.Resource.Payment;

MercadoPagoConfig.AccessToken = "ACCESS_TOKEN";

var client = new PaymentClient();

var payer = new PaymentPayerRequest() {
    Type = "customer",
    Email = request.Email,
    EntityType = "individual",
    FirstName = request.PayerFirstName,
    LastName = request.PayerLastName
};

var paymentCreateRequest = new PaymentCreateRequest() {
  TransactionAmount = 5000,
    Description = "description",
    PaymentMethodId = "clabe",
    AdditionalInfo = additionalInfo,
    CallbackUrl = "https://your-site.com",
    Payer = payer
};

var payment = await client.CreateAsync(paymentCreateRequest);
var paymentLink = payment.TransactionDetails.externalResourceUrl; 

```
```python
import mercadopago
sdk = mercadopago.SDK("ACCESS_TOKEN")
 
payment_data = {
   "transaction_amount": 5000,
   "description": "description",
   "payment_method_id": "clabe",
   "payer": {
       "type": "customer",
       "email": request.POST.get("email"),
       "entity_type": "individual",
       "first_name": request.POST.get("first_name"),
       "last_name": request.POST.get("last_name"),
   }
}
 
payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]
Payment_link = payment.transaction_details.external_resource_url

```
```curl
curl --location --request POST 'https://api.mercadopago.com/v1/payments' \
-H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
-H 'Content-Type: application/json' \
--d '{
    "transaction_amount": 5000,
    "description": "Título del producto",
    "payment_method_id": "clabe",
    "payer": {
        "email": "test_user_19549678@testuser.com",
        "entity_type": "individual",
        "First_name": "John",
        "Last_name": "Doe"
    }
}'

```
]]]

La respuesta mostrará el status `pendiente` hasta que el comprador realice el pago. Además, en la respuesta a la solicitud, el parámetro transaction_details.`payment_method.data.external_resource_url` devolverá una URL que contiene las instrucciones para que el comprador efectúe el pago. Puedes redirigirlo a este mismo link para finalizar el flujo de pago.

[[[
```json
{
    "id": 51096146182,
    "version": null,
    "date_created": "2023-05-10T13:43:14.586-04:00",
    ...
    "payment_method_id": "clabe",
    "payment_type_id": "bank_transfer",
    "payment_method": {
        "id": "clabe",
        "type": "bank_transfer",
        "data": {
            "reference_id": "6410293433784980810",
            "external_reference_id": "1009",
            "external_resource_url": "https://www.mercadopago.com.mx/payments/51096146182/ticket?caller_id=34728475&hash=f3a8630a-f06a-48e4-b2a6-f95750af7346"
        }
    },
    "status": "pending",
    ...
}

```
]]]

> NOTE
>
> Importante
>
> En caso de recibir un error al generar un pago, puedes consultar el listado de errores posibles en la sección [Referencia de API](/developers/es/reference/payments/_payments/post).

## Visualización del pago

Para que el usuario pueda realizar la transferencia, diríjalo directamente a la URL disponible en `external_resource_url` o póngala a su disposición mediante un botón, siguiendo el ejemplo a continuación.

[[[
```html
<a href="https://www.mercadopago.com.co/payments/123456789/ticket?caller_id=123456&hash=123e4567-e89b-12d3-a456-426655440000" target="_blank">Pagar con Transferencias SPEI</a>

```
]]]

