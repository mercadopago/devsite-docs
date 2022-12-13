# Ejemplo de código (todos los medios de pago)

Para facilitar y optimizar su proceso de integración, ve a continuación un ejemplo completo de cómo incluir la Cuenta de Mercado Pago como medio de pago con Payment Brick. 

> SERVER_SIDE
>
> h2
>
> Crea tu preferencia

----[mla, mlb, mlu, mco, mlc, mpe]---- 
> Requerido para Cuenta de Mercado Pago y Cuotas sin tarjeta.
------------

----[mlm]----
> Requerido para Cuenta de Mercado Pago y Meses sin tarjeta.
------------

----[mla, mlb, mlu, mpe, mlm]----
[[[
```php
<?php
  // SDK do Mercado Pago
  require __DIR__ .  '/vendor/autoload.php';
  // Agregar credenciales
  MercadoPago\SDK::setAccessToken('PROD_ACCESS_TOKEN');

  // Crear un objeto de preferencia
  $preference = new MercadoPago\Preference();

  // Crear un elemento en la preferencia
  $item = new MercadoPago\Item();
  $item->title = 'Meu producto';
  $item->quantity = 1;
  $item->unit_price = 75.56;
  $preference->items = array($item);

  // el $preference->purpose = 'wallet_purchase'; solo permite pagos registrados
  // para permitir pagos de guest, puede omitir esta propiedad
  $preference->purpose = 'wallet_purchase';
  $preference->save();
?>
```
```node
// SDK de Mercado Pago
const mercadopago = require ('mercadopago');
// Agregar credenciales
mercadopago.configure({
 access_token: 'PROD_ACCESS_TOKEN'
});
 
// Crear un objeto de preferencia
let preference = {
  // el "purpose": "wallet_purchase" solo permite pagos registrados
  // para permitir pagos de guest, puede omitir esta propiedad
  "purpose": "wallet_purchase",
  "items": [
    {
      "id": "item-ID-1234",
      "title": "Meu producto",
      "quantity": 1,
      "unit_price": 75.76
    }
  ]
};

mercadopago.preferences.create(preference)
  .then(function (response) {
    // Este valor es el ID de preferencia que se enviará al ladrillo al inicio
    const preferenceId = response.body.id;
  }).catch(function (error) {
    console.log(error);
  });
```
```java
// SDK de Mercado Pago
import com.mercadopago.MercadoPagoConfig;
// Agregar credenciales
MercadoPagoConfig.setAccessToken("PROD_ACCESS_TOKEN");

// Crear un objeto de preferencia
PreferenceClient client = new PreferenceClient();

// Crear un elemento en la preferencia
List<PreferenceItemRequest> items = new ArrayList<>();
PreferenceItemRequest item =
   PreferenceItemRequest.builder()
       .title("Meu producto")
       .quantity(1)
       .unitPrice(new BigDecimal("100"))
       .build();
items.add(item);

PreferenceRequest request = PreferenceRequest.builder()
  // el .purpose('wallet_purchase') solo permite pagos registrados
  // para permitir pagos de guest, puede omitir esta línea
  .purpose('wallet_purchase')
  .items(items).build();

client.create(request);
```
```ruby
# SDK de Mercado Pago
require 'mercadopago'
# Agregar credenciales
sdk = Mercadopago::SDK.new('PROD_ACCESS_TOKEN')

# Crear un objeto de preferencia
preference_data = {
  # el purpose: 'wallet_purchase', solo permite pagos registrados
  # para permitir pagos de guests, puede omitir esta propiedad
  purpose: 'wallet_purchase',
  items: [
    {
      title: 'Mi producto',
      unit_price: 75.56,
      quantity: 1
    }
  ]
}
preference_response = sdk.preference.create(preference_data)
preference = preference_response[:response]

# Este valor es el ID de preferencia que usará en el HTML en el inicio del Brick
@preference_id = preference['id']
```
```csharp
// SDK de Mercado Pago
 using MercadoPago.Config;
 // Agregar credenciales
MercadoPagoConfig.AccessToken = "PROD_ACCESS_TOKEN";

// Crear el objeto de request de preferencia
var request = new PreferenceRequest
{
  // el Purpose = 'wallet_purchase', solo permite pagos registrados
  // para permitir pagos de invitados, puede omitir esta propiedad
    Purpose = 'wallet_purchase',
    Items = new List<PreferenceItemRequest>
    {
        new PreferenceItemRequest
        {
            Title = "Mi producto",
            Quantity = 1,
            CurrencyId = "BRL",
            UnitPrice = 75.56m,
        },
    },
};

// Crea la preferencia usando el cliente
var client = new PreferenceClient();
Preference preference = await client.CreateAsync(request);
```
```python
# SDK de Mercado Pago
import mercadopago
# Agregar credenciales
sdk = mercadopago.SDK("PROD_ACCESS_TOKEN")

# Crear un elemento en la preferencia
preference_data = {
  # el "purpose": "wallet_purchase", solo permite pagos registrados
  # para permitir pagos de invitados, puede omitir esta propiedad
    "purpose": "wallet_purchase",
    "items": [
        {
            "title": "Mi elemento",
            "quantity": 1,
            "unit_price": 75.76
        }
    ]
}

preference_response = sdk.preference().create(preference_data)
preference = preference_response["response"]
```
```curl
curl -X POST \
  'https://api.mercadopago.com/checkout/preferences' \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -H 'Authorization: Bearer **PROD_ACCESS_TOKEN**' \
  -d '{
    "purpose": "wallet_purchase",
    "items": [
        {
            "title": "Mi producto",
            "quantity": 1,
            "unit_price": 75.76
        }
    ]
}'
```
]]]

------------

----[mlc, mco]----
[[[
```php
<?php
  // SDK do Mercado Pago
  require __DIR__ .  '/vendor/autoload.php';
  // Agregar credenciales
  MercadoPago\SDK::setAccessToken('PROD_ACCESS_TOKEN');

  // Crear un objeto de preferencia
  $preference = new MercadoPago\Preference();

  // Crear un elemento en la preferencia
  $item = new MercadoPago\Item();
  $item->title = 'Mi producto';
  $item->quantity = 1;
  $item->unit_price = 75.56;
  $preference->items = array($item);

  // el $preference->purpose = 'wallet_purchase'; solo permite pagos registrados
  // para permitir pagos de guest, puede omitir esta propiedad
  $preference->purpose = 'wallet_purchase';
  $preference->save();
?>
```
```node
// SDK de Mercado Pago
const mercadopago = require ('mercadopago');
// Agregar credenciales
mercadopago.configure({
 access_token: 'PROD_ACCESS_TOKEN'
});
 
// Crear un objeto de preferencia
let preference = {
  // el "purpose": "wallet_purchase" solo permite pagos registrados
  // para permitir pagos de guest, puede omitir esta propiedad
  "purpose": "wallet_purchase",
  "items": [
    {
      "id": "item-ID-1234",
      "title": "Mi producto",
      "quantity": 1,
      "unit_price": 75.76
    }
  ]
};

mercadopago.preferences.create(preference)
  .then(function (response) {
    // Este valor es el ID de preferencia que se enviará al ladrillo al inicio
    const preferenceId = response.body.id;
  }).catch(function (error) {
    console.log(error);
  });
```
```java
// SDK de Mercado Pago
import com.mercadopago.MercadoPagoConfig;
// Agregar credenciales
MercadoPagoConfig.setAccessToken("PROD_ACCESS_TOKEN");

// Crear un objeto de preferencia
PreferenceClient client = new PreferenceClient();

// Crear un elemento en la preferencia
List<PreferenceItemRequest> items = new ArrayList<>();
PreferenceItemRequest item =
   PreferenceItemRequest.builder()
       .title("Mi producto")
       .quantity(1)
       .unitPrice(new BigDecimal("100"))
       .build();
items.add(item);

PreferenceRequest request = PreferenceRequest.builder()
  // el .purpose('wallet_purchase') solo permite pagos registrados
  // para permitir pagos de guest, puede omitir esta línea
  .purpose('wallet_purchase')
  .items(items).build();

client.create(request);
```
```ruby
# SDK de Mercado Pago
require 'mercadopago'
# Agregar credenciales
sdk = Mercadopago::SDK.new('PROD_ACCESS_TOKEN')

# Crear un objeto de preferencia
preference_data = {
  # el purpose: 'wallet_purchase', solo permite pagos registrados
  # para permitir pagos de guests, puede omitir esta propiedad
  purpose: 'wallet_purchase',
  items: [
    {
      title: 'Mi producto',
      unit_price: 75.56,
      quantity: 1
    }
  ]
}
preference_response = sdk.preference.create(preference_data)
preference = preference_response[:response]

# Este valor es el ID de preferencia que usará en el HTML en el inicio del Brick
@preference_id = preference['id']
```
```csharp
// SDK de Mercado Pago
 using MercadoPago.Config;
 // Agregar credenciales
MercadoPagoConfig.AccessToken = "PROD_ACCESS_TOKEN";

// Crear el objeto de request de preferencia
var request = new PreferenceRequest
{
  // el Purpose = 'wallet_purchase', solo permite pagos registrados
  // para permitir pagos de invitados, puede omitir esta propiedad
    Purpose = 'wallet_purchase',
    Items = new List<PreferenceItemRequest>
    {
        new PreferenceItemRequest
        {
            Title = "Mi producto",
            Quantity = 1,
            CurrencyId = "BRL",
            UnitPrice = 75.56m,
        },
    },
};

// Crea la preferencia usando el cliente
var client = new PreferenceClient();
Preference preference = await client.CreateAsync(request);
```
```python
# SDK de Mercado Pago
import mercadopago
# Agregar credenciales
sdk = mercadopago.SDK("PROD_ACCESS_TOKEN")

# Crear un elemento en la preferencia
preference_data = {
  # el "purpose": "wallet_purchase", solo permite pagos registrados
  # para permitir pagos de invitados, puede omitir esta propiedad
    "purpose": "wallet_purchase",
    "items": [
        {
            "title": "Mi elemento",
            "quantity": 1,
            "unit_price": 75.76
        }
    ]
}

preference_response = sdk.preference().create(preference_data)
preference = preference_response["response"]
```
```curl
curl -X POST \
  'https://api.mercadopago.com/checkout/preferences' \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -H 'Authorization: Bearer **PROD_ACCESS_TOKEN**' \
  -d '{
    "purpose": "wallet_purchase",
    "items": [
        {
            "title": "Mi producto",
            "quantity": 1,
            "unit_price": 75.76
        }
    ]
}'
```
]]]

------------

> CLIENT_SIDE
>
> h2
>
> Configurar la integración

----[mla, mlu, mco, mlc, mpe]---- 
```html
<!DOCTYPE html>
<html lang="en">
 
<head>
 <meta charset="UTF-8">
 <meta http-equiv="X-UA-Compatible" content="IE=edge">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>Bricks</title>
</head>
 
<body>
 <div id="paymentBrick_container"></div>
 <script src="https://sdk.mercadopago.com/js/v2"></script>
 <script>
   const mp = new MercadoPago('YOUR_PUBLIC_KEY');
   const bricksBuilder = mp.bricks();
   const renderPaymentBrick = async (bricksBuilder) => {
     const settings = {
       initialization: {
         /*
           "amount" es el monto a ser pago
           por todos los medios de pago a excepción de la Cuenta de Mercado Pago,
           que tiene su valor de procesamiento determinado en el backend a través de "preferenceId"
         */
         amount: 100, // cantidad de procesamiento a realizar
         preferenceId: '<PREFERENCE_ID>', // preferenceId generado en el backend
       },
       customization: {
         paymentMethods: {
           creditCard: 'all',
           debitCard: 'all',
           ticket: 'all',
           mercadoPago: 'all',
         },
       },
       callbacks: {
         onReady: () => {
           /*
             Callback llamado cuando Brick está listo
             Aquí puedes ocultar loadings de su sitio, por ejemplo.
           */
         },
         onSubmit: ({ selectedPaymentMethod, formData }) => {
           // callback llamado al hacer clic en el botón de envío de datos
 
           return new Promise((resolve, reject) => {
             let url = undefined;
 
             if (selectedPaymentMethod === 'credit_card' || selectedPaymentMethod === 'debit_card') {
               url = 'process_payment_card';
             } else if (selectedPaymentMethod === 'ticket') {
               url = 'process_payment_ticket';
             }
 
             if (url) {
               fetch(url, {
                 method: "POST",
                 headers: {
                   "Content-Type": "application/json",
                 },
                 body: JSON.stringify(formData)
               })
                 .then((response) => {
                   // recibir el resultado del pago
                   resolve();
                 })
                 .catch((error) => {
                   // manejar la respuesta de error al intentar crear el pago
                   reject();
                 })
             } else if (
               selectedPaymentMethod === 'wallet_purchase' ||
               selectedPaymentMethod === 'onboarding_credits'
             ) {
               /*
                 wallet_purchase (Cuenta de Mercado Pago) e
                 onboarding_credits (Cuotas sin tarjeta)
                 no necesita ser enviado desde el backend
		           */
               resolve();
             } else {
               reject();
             }
           });
         },
         onError: (error) => {
           // callback llamado para todos los casos de error de Brick
           console.error(error);
         },
       },
     };
     window.paymentBrickController = await bricksBuilder.create(
       'payment',
       'paymentBrick_container',
       settings
     );
   };
   renderPaymentBrick(bricksBuilder);
 </script>
</body>
 
</html>
```
------------
----[mlm]---- 
```html
<!DOCTYPE html>
<html lang="en">
 
<head>
 <meta charset="UTF-8">
 <meta http-equiv="X-UA-Compatible" content="IE=edge">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>Bricks</title>
</head>
 
<body>
 <div id="paymentBrick_container"></div>
 <script src="https://sdk.mercadopago.com/js/v2"></script>
 <script>
   const mp = new MercadoPago('YOUR_PUBLIC_KEY');
   const bricksBuilder = mp.bricks();
   const renderPaymentBrick = async (bricksBuilder) => {
     const settings = {
       initialization: {
         /*
           "amount" es el monto a ser pago
           por todos los medios de pago a excepción de la Cuenta de Mercado Pago,
           que tiene su valor de procesamiento determinado en el backend a través de "preferenceId"
         */
         amount: 100, // cantidad de procesamiento a realizar
         preferenceId: '<PREFERENCE_ID>', // preferenceId generado en el backend
       },
       customization: {
         paymentMethods: {
           creditCard: 'all',
           debitCard: 'all',
           ticket: 'all',
           mercadoPago: 'all',
         },
       },
       callbacks: {
         onReady: () => {
           /*
             Callback llamado cuando Brick está listo
             Aquí puedes ocultar loadings de su sitio, por ejemplo.
           */
         },
         onSubmit: ({ selectedPaymentMethod, formData }) => {
           // callback llamado al hacer clic en el botón de envío de datos
 
           return new Promise((resolve, reject) => {
             let url = undefined;
 
             if (selectedPaymentMethod === 'credit_card' || selectedPaymentMethod === 'debit_card') {
               url = 'process_payment_card';
             } else if (selectedPaymentMethod === 'ticket') {
               url = 'process_payment_ticket';
             }
 
             if (url) {
               fetch(url, {
                 method: "POST",
                 headers: {
                   "Content-Type": "application/json",
                 },
                 body: JSON.stringify(formData)
               })
                 .then((response) => {
                   // recibir el resultado del pago
                   resolve();
                 })
                 .catch((error) => {
                   // manejar la respuesta de error al intentar crear el pago
                   reject();
                 })
             } else if (
               selectedPaymentMethod === 'wallet_purchase' ||
               selectedPaymentMethod === 'onboarding_credits'
             ) {
               /*
                 wallet_purchase (Cuenta de Mercado Pago) e
                 onboarding_credits (Meses sin tarjeta)
                 no necesita ser enviado desde el backend
		           */
               resolve();
             } else {
               reject();
             }
           });
         },
         onError: (error) => {
           // callback llamado para todos los casos de error de Brick
           console.error(error);
         },
       },
     };
     window.paymentBrickController = await bricksBuilder.create(
       'payment',
       'paymentBrick_container',
       settings
     );
   };
   renderPaymentBrick(bricksBuilder);
 </script>
</body>
 
</html>
```
------------
----[mlb]----
```html
<!DOCTYPE html>
<html lang="en">
 
<head>
 <meta charset="UTF-8">
 <meta http-equiv="X-UA-Compatible" content="IE=edge">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>Bricks</title>
</head>
 
<body>
 <div id="paymentBrick_container"></div>
 <script src="https://sdk.mercadopago.com/js/v2"></script>
 <script>
   const mp = new MercadoPago('YOUR_PUBLIC_KEY');
   const bricksBuilder = mp.bricks();
   const renderPaymentBrick = async (bricksBuilder) => {
     const settings = {
       initialization: {
         /*
           "amount" es el monto a ser pago
           por todos los medios de pago a excepción de la Cuenta de Mercado Pago,
           que tiene su valor de procesamiento determinado en el backend a través de "preferenceId"
         */
         amount: 100, // cantidad de procesamiento a realizar
         preferenceId: '<PREFERENCE_ID>', // preferenceId generado en el backend
       },
       customization: {
         paymentMethods: {
           creditCard: 'all',
           debitCard: 'all',
           ticket: 'all',
           bankTransfer: 'all',
           mercadoPago: 'all',
         },
       },
       callbacks: {
         onReady: () => {
           /*
             Callback llamado cuando Brick está listo
             Aquí puedes ocultar loadings de su sitio, por ejemplo.
           */
         },
         onSubmit: ({ selectedPaymentMethod, formData }) => {
           // callback llamado al hacer clic en el botón de envío de datos
 
           return new Promise((resolve, reject) => {
             let url = undefined;
 
             if (selectedPaymentMethod === 'credit_card' || selectedPaymentMethod === 'debit_card') {
               url = 'process_payment_card';
             } else if (selectedPaymentMethod === 'bank_transfer') {
               url = 'process_payment_pix';
             } else if (selectedPaymentMethod === 'ticket') {
               url = 'process_payment_ticket';
             }
 
             if (url) {
               fetch(url, {
                 method: "POST",
                 headers: {
                   "Content-Type": "application/json",
                 },
                 body: JSON.stringify(formData)
               })
                 .then((response) => {
                   // recibir el resultado del pago
                   resolve();
                 })
                 .catch((error) => {
                   // manejar la respuesta de error al intentar crear el pago
                   reject();
                 })
             } else if (
               selectedPaymentMethod === 'wallet_purchase' ||
               selectedPaymentMethod === 'onboarding_credits'
             ) {
               /*
                 wallet_purchase (Cuenta de Mercado Pago) e
                 onboarding_credits (Cuotas sin tarjeta)
                 no necesita ser enviado desde el backend
		           */
               resolve();
             } else {
               reject();
             }
           });
         },
         onError: (error) => {
           // callback llamado para todos los casos de error de Brick
           console.error(error);
         },
       },
     };
     window.paymentBrickController = await bricksBuilder.create(
       'payment',
       'paymentBrick_container',
       settings
     );
   };
   renderPaymentBrick(bricksBuilder);
 </script>
</body>
</html>
```
------------

> SERVER_SIDE
>
> h2
>
> Envía el pago a Mercado Pago

----[mla, mlb, mlu, mco, mlc, mpe]---- 
> Los pagos con **Cuenta de Mercado Pago** no necesitan ser enviados a través del backend. Si el usuario selecciona esta opción como medio de pago, el `preferenceId` enviado en la inicialización del Brick es el encargado de redirigir al comprador al sitio web de Mercado Pago, donde el pago se realizará directamente en nuestro sitio. Para redirigir al comprador a tu sitio, puede configurar `back_urls` como se describe [en este artículo.](/developers/es/docs/checkout-bricks/payment-brick/additional-customization/preferences#bookmark_redirigir_al_comprador_a_tu_sitio_web)

------------

----[mlm]----
> Los pagos con **Meses de Mercado Pago** no necesitan ser enviados a través del backend. Si el usuario selecciona esta opción como medio de pago, el `preferenceId` enviado en la inicialización del Brick es el encargado de redirigir al comprador al sitio web de Mercado Pago, donde el pago se realizará directamente en nuestro sitio. Para redirigir al comprador a tu sitio, puede configurar `back_urls` como se describe [en este artículo.](/developers/es/docs/checkout-bricks/payment-brick/additional-customization/preferences#bookmark_redirigir_al_comprador_a_tu_sitio_web)

------------

* Para el endpoint `/process_payment_card`:

[[[
```php
===
Puedes encontrar el estado del pago en el valor _status_.
===
<?php
    require_once 'vendor/autoload.php';

    MercadoPago\SDK::setAccessToken("YOUR_ACCESS_TOKEN");

    $payment = new MercadoPago\Payment();
    $payment->transaction_amount = (float)$_POST['transactionAmount'];
    $payment->token = $_POST['token'];
    $payment->description = $_POST['description'];
    $payment->installments = (int)$_POST['installments'];
    $payment->payment_method_id = $_POST['paymentMethodId'];
    $payment->issuer_id = (int)$_POST['issuer'];

    $payer = new MercadoPago\Payer();
    $payer->email = $_POST['cardholderEmail'];
    $payer->identification = array(----[mla, mlb, mlu, mlc, mpe, mco]----
        "type" => $_POST['identificationType'],------------
        "number" => $_POST['identificationNumber']
    );
    $payer->first_name = $_POST['cardholderName'];
    $payment->payer = $payer;

    $payment->save();

    $response = array(
        'status' => $payment->status,
        'status_detail' => $payment->status_detail,
        'id' => $payment->id
    );
    echo json_encode($response);

?>
```
```node
===
Puedes encontrar el estado del pago en el valor _status_.
===
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken("YOUR_ACCESS_TOKEN");

var payment_data = {
  amount: req.body.amount,
  ...
}
mercadopago.payment.save(payment_data)
  .then(function(response) {
    const { status, status_detail, id } = response.body;
    res.status(response.status).json({ status, status_detail, id });
  })
  .catch(function(error) {
    console.error(error);
  });
```
```java
===
Puedes encontrar el estado del pago en el valor _status_.
===

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

client.create(paymentCreateRequest);

```
```ruby
===
Puedes encontrar el estado del pago en el valor _status_.
===
require 'mercadopago'
sdk = Mercadopago::SDK.new('YOUR_ACCESS_TOKEN')

payment_data = {
  transaction_amount: params[:transactionAmount].to_f,
  token: params[:token],
  description: params[:description],
  installments: params[:installments].to_i,
  payment_method_id: params[:paymentMethodId],
  payer: {
    email: params[:cardholderEmail],
    identification: {----[mla, mlb, mlu, mlc, mpe, mco]----
      type: params[:identificationType],------------
      number: params[:identificationNumber]
    },
    first_name: params[:cardholderName]
  }
}

payment_response = sdk.payment.create(payment_data)
payment = payment_response[:response]

puts payment

```
```csharp
===
Puedes encontrar el estado del pago en el valor _status_.
===
using System;
using MercadoPago.Client.Common;
using MercadoPago.Client.Payment;
using MercadoPago.Config;
using MercadoPago.Resource.Payment;

MercadoPagoConfig.AccessToken = "YOUR_ACCESS_TOKEN";

var paymentRequest = new PaymentCreateRequest
{
    TransactionAmount = decimal.Parse(Request["transactionAmount"]),
    Token = Request["token"],
    Description = Request["description"],
    Installments = int.Parse(Request["installments"]),
    PaymentMethodId = Request["paymentMethodId"],
    Payer = new PaymentPayerRequest
    {
        Email = Request["cardholderEmail"],
        Identification = new IdentificationRequest
        {----[mla, mlb, mlu, mlc, mpe, mco]----
            Type = Request["identificationType"],------------
            Number = Request["identificationNumber"],
        },
        FirstName = Request["cardholderName"]
    },
};

var client = new PaymentClient();
Payment payment = await client.CreateAsync(paymentRequest);

Console.WriteLine(payment.Status);

```
```python
===
Puedes encontrar el estado del pago en el valor _status_.
===
import mercadopago
sdk = mercadopago.SDK("ACCESS_TOKEN")

payment_data = {
    "transaction_amount": float(request.POST.get("transaction_amount")),
    "token": request.POST.get("token"),
    "description": request.POST.get("description"),
    "installments": int(request.POST.get("installments")),
    "payment_method_id": request.POST.get("payment_method_id"),
    "payer": {
        "email": request.POST.get("cardholderEmail"),
        "identification": {----[mla, mlb, mlu, mlc, mpe, mco]----
            "type": request.POST.get("identificationType"), ------------
            "number": request.POST.get("identificationNumber")
        }
        "first_name": request.POST.get("cardholderName")
    }
}

payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]

print(payment)
```
```curl
===
Puedes encontrar el estado del pago en el valor _status_.
===
curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -H 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/payments' \
    -d '{
          "transaction_amount": 100,
          "token": "ff8080814c11e237014c1ff593b57b4d",
          "description": "Blue shirt",
          "installments": 1,
          "payment_method_id": "visa",
          "issuer_id": 310,
          "payer": {
            "email": "test@test.com"
          }
    }'

```
]]]

----[mlb]----

* Para el endpoint `/process_payment_pix`:

[[[
```php
<?php
 require_once 'vendor/autoload.php';

 MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

 $payment = new MercadoPago\Payment();
 $payment->transaction_amount = 100;
 $payment->description = "Título del producto";
 $payment->payment_method_id = "pix";
 $payment->payer = array(
     "email" => "test@test.com",
     "first_name" => "Test",
     "last_name" => "User",
     "identification" => array(
         "type" => "CPF",
         "number" => "19119119100"
      ),
     "address"=>  array(
         "zip_code" => "06233200",
         "street_name" => "Av. das Nações Unidas",
         "street_number" => "3003",
         "neighborhood" => "Bonfim",
         "city" => "Osasco",
         "federal_unit" => "SP"
      )
   );

 $payment->save();

?>
```
```node
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

var payment_data = {
  transaction_amount: 100,
  description: 'Título del producto',
  payment_method_id: 'pix',
  payer: {
    email: 'test@test.com',
    first_name: 'Test',
    last_name: 'User',
    identification: {
        type: 'CPF',
        number: '19119119100'
    },
    address:  {
        zip_code: '06233200',
        street_name: 'Av. das Nações Unidas',
        street_number: '3003',
        neighborhood: 'Bonfim',
        city: 'Osasco',
        federal_unit: 'SP'
    }
  }
};

mercadopago.payment.create(payment_data).then(function (data) {

}).catch(function (error) {

});

```
```java
MercadoPagoConfig.setAccessToken("ENV_ACCESS_TOKEN");

PaymentClient client = new PaymentClient();

PaymentCreateRequest paymentCreateRequest =
   PaymentCreateRequest.builder()
       .transactionAmount(new BigDecimal("100"))
       .description("Título del producto")
       .paymentMethodId("pix")
       .dateOfExpiration(OffsetDateTime.of(2023, 1, 10, 10, 10, 10, 0, ZoneOffset.UTC))
       .payer(
           PaymentPayerRequest.builder()
               .email("test@test.com")
               .firstName("Test")
               .identification(
                   IdentificationRequest.builder().type("CPF").number("19119119100").build())
               .build())
       .build();

client.create(paymentCreateRequest);
```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

payment_request = {
  transaction_amount: 100,
  description: 'Título del producto',
  payment_method_id: 'pix',
  payer: {
    email: 'test@test.com',
    identification: {
      type: 'CPF',
      number: '19119119100',
    }
  }
}

payment_response = sdk.payment.create(payment_request)
payment = payment_response[:response]

```
```csharp

using MercadoPago.Config;
using MercadoPago.Client.Common;
using MercadoPago.Client.Payment;
using MercadoPago.Resource.Payment;

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var request = new PaymentCreateRequest
{
    TransactionAmount = 105,
    Description = "Título del producto",
    PaymentMethodId = "pix",
    Payer = new PaymentPayerRequest
    {
        Email = "test@test.com",
        FirstName = "Test",
        LastName = "User",
        Identification = new IdentificationRequest
        {
            Type = "CPF",
            Number = "191191191-00",
        },
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
    "description": "Título del producto",
    "payment_method_id": "pix",
    "payer": {
        "email": "test@test.com",
        "first_name": "Test",
        "last_name": "User",
        "identification": {
            "type": "CPF",
            "number": "191191191-00"
        },
        "address": {
            "zip_code": "06233-200",
            "street_name": "Av. das Nações Unidas",
            "street_number": "3003",
            "neighborhood": "Bonfim",
            "city": "Osasco",
            "federal_unit": "SP"
        }
    }
}

payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]
```
```curl
curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/payments' \
    -d '{
      "transaction_amount": 100,
      "description": "Título del producto",
      "payment_method_id": "pix",
      "payer": {
        "email": "test@test.com",
        "first_name": "Test",
        "last_name": "User",
        "identification": {
            "type": "CPF",
            "number": "19119119100"
        },
        "address": {
            "zip_code": "06233200",
            "street_name": "Av. das Nações Unidas",
            "street_number": "3003",
            "neighborhood": "Bonfim",
            "city": "Osasco",
            "federal_unit": "SP"
        }
      }
    }'
```
]]]

* Para o endpoint `/process_payment_ticket`:

[[[
```php
<?php

 require_once 'vendor/autoload.php';

 MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

 $payment = new MercadoPago\Payment();
 $payment->transaction_amount = 100;
 $payment->description = "Título del producto";
 $payment->payment_method_id = "bolbradesco";
 $payment->payer = array(
     "email" => "test@test.com",
     "first_name" => "Test",
     "last_name" => "User",
     "identification" => array(
         "type" => "DNI",
         "number" => "19119119"
      ),
     "address"=>  array(
         "zip_code" => "1264",
         "street_name" => "Av. Caseros",
         "street_number" => "3039",
         "neighborhood" => "Parque Patricios",
         "city" => "Buenos Aires",
         "federal_unit" => "BA"
      )
   );

 $payment->save();

?>
```
```node
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

var payment_data = {
  transaction_amount: 100,
  description: 'Título del producto',
  payment_method_id: 'bolbradesco',
  payer: {
    email: 'test@test.com',
    first_name: 'Test',
    last_name: 'User',
    identification: {
        type: 'DNI',
        number: '19119119'
    },
    address:  {
        zip_code: '1264',
        street_name: 'Av. Caseros',
        street_number: '3039',
        neighborhood: 'Parque Patricios',
        city: 'Buenos Aires',
        federal_unit: 'BA'
    }
  }
};

mercadopago.payment.create(payment_data).then(function (data) {

}).catch(function (error) {

});
```
```java
PaymentClient client = new PaymentClient();

PaymentCreateRequest paymentCreateRequest =
   PaymentCreateRequest.builder()
       .transactionAmount(new BigDecimal("100"))
       .description("Título del producto")
       .paymentMethodId("bolbradesco")
       .dateOfExpiration(OffsetDateTime.of(2023, 1, 10, 10, 10, 10, 0, ZoneOffset.UTC))
       .payer(
           PaymentPayerRequest.builder()
               .email("test@test.com")
               .firstName("Test")
               .lastName("User")
               .identification(
                   IdentificationRequest.builder().type("CPF").number("19119119100").build())
               .build())
       .build();

client.create(paymentCreateRequest);
```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

payment_request = {
  transaction_amount: 100,
  description: 'Título del producto',
  payment_method_id: 'bolbradesco',
  payer: {
    email: 'test@test.com',
    first_name: 'Test',
    last_name: 'User',
    identification: {
      type: 'DNI',
      number: '19119119',
    },
    address: {
      zip_code: '1264',
      street_name: 'Av. Caseros',
      street_number: '3039',
      neighborhood: 'Parque Patricios',
      city: 'Buenos Aires',
      federal_unit: 'BA'
    }
  }
}

payment_response = sdk.payment.create(payment_request)
payment = payment_response[:response]
```
```csharp
using MercadoPago.Config;
using MercadoPago.Client.Common;
using MercadoPago.Client.Payment;
using MercadoPago.Resource.Payment;

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var request = new PaymentCreateRequest
{
    TransactionAmount = 105,
    Description = "Título del producto",
    PaymentMethodId = "bolbradesco",
    Payer = new PaymentPayerRequest
    {
        Email = "test@test.com",
        FirstName = "Test",
        LastName = "User",
        Identification = new IdentificationRequest
        {
            Type = "DNI",
            Number = "19119119",
        },
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
    "description": "Título del producto",
    "payment_method_id": "bolbradesco",
    "payer": {
        "email": "test@test.com",
        "first_name": "Test",
        "last_name": "User",
        "identification": {
            "type": "DNI",
            "number": "19119119"
        },
        "address": {
            "zip_code": "1264",
            "street_name": "Av. Caseros",
            "street_number": "3039",
            "neighborhood": "Parque Patricios",
            "city": "Buenos Aires",
            "federal_unit": "BA"
        }
    }
}

payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]
```
```curl
curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/payments' \
    -d '{
      "transaction_amount": 100,
      "description": "Título del producto",
      "payment_method_id": "bolbradesco",
      "payer": {
        "email": "test@test.com",
        "first_name": "Test",
        "last_name": "User",
        "identification": {
            "type": "DNI",
            "number": "19119119"
        },
        "address": {
            "zip_code": "1264",
            "street_name": "Av. Caseros",
            "street_number": "3039",
            "neighborhood": "Parque Patricios",
            "city": "Buenos Aires",
            "federal_unit": "BA"
        }
      }
    }'
```
]]]

------------

----[mla]----
* Para el endpoint `/process_payment_ticket`:

[[[
```php
<?php
 
 require_once 'vendor/autoload.php';
 
 MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");
 
 $payment = new MercadoPago\Payment();
 $payment->transaction_amount = 100;
 $payment->description = "Título del producto";
 $payment->payment_method_id = "rapipago";
 $payment->payer = array(
     "email" => "test@test.com",
   );
 
 $payment->save();
 
?>
```
```node
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);
 
var payment_data = {
  transaction_amount: 100,
  description: 'Título del producto',
  payment_method_id: 'rapipago',
  payer: {
    email: 'test@test.com',
  }
};
 
mercadopago.payment.create(payment_data).then(function (data) {
 
}).catch(function (error) {
 
});
```
```java
PaymentClient client = new PaymentClient();
 
PaymentCreateRequest paymentCreateRequest =
   PaymentCreateRequest.builder()
       .transactionAmount(new BigDecimal("100"))
       .description("Título del producto")
       .paymentMethodId("rapipago")
       .dateOfExpiration(OffsetDateTime.of(2023, 1, 10, 10, 10, 10, 0, ZoneOffset.UTC))
       .payer(
           PaymentPayerRequest.builder()
               .email("test@test.com")
               .build())
       .build();
 
client.create(paymentCreateRequest);
```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')
 
payment_request = {
  transaction_amount: 100,
  description: 'Título del producto',
  payment_method_id: 'rapipago',
  payer: {
    email: 'test@test.com',
  }
}
 
payment_response = sdk.payment.create(payment_request)
payment = payment_response[:response]
```
```csharp
using MercadoPago.Config;
using MercadoPago.Client.Common;
using MercadoPago.Client.Payment;
using MercadoPago.Resource.Payment;
 
MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";
 
var request = new PaymentCreateRequest
{
    TransactionAmount = 105,
    Description = "Título del producto",
    PaymentMethodId = "rapipago",
    Payer = new PaymentPayerRequest
    {
        Email = "test@test.com",    
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
    "description": "Título del producto",
    "payment_method_id": "rapipago",
    "payer": {
        "email": "test@test.com",
    }
}
 
payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]
```
```curl
curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/payments' \
    -d '{
      "transaction_amount": 100,
      "description": "Título del producto",
      "payment_method_id": "rapipago",
      "payer": {
        "email": "test@test.com",
      }
    }'
```
]]]

------------

----[mlm]----
* Para el endpoint `/process_payment_ticket`:

[[[
```php
<?php
 
 require_once 'vendor/autoload.php';
 
 MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");
 
 $payment = new MercadoPago\Payment();
 $payment->transaction_amount = 100;
 $payment->description = "Título del producto";
 $payment->payment_method_id = "oxxo";
 $payment->payer = array(
     "email" => "test@test.com",
   );
$payment->metadata = array(
     "payment_point" => "oxxo",
   );
 
 $payment->save();
 
?>
```
```node
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);
 
var payment_data = {
  transaction_amount: 100,
  description: 'Título del producto',
  payment_method_id: 'oxxo',
  payer: {
    email: 'test@test.com',
  },
  metadata: {
    payment_point: 'oxxo',
  },
};
 
mercadopago.payment.create(payment_data).then(function (data) {
 
}).catch(function (error) {
 
});
```
```java
PaymentClient client = new PaymentClient();
PaymentCreateRequest paymentCreateRequest =
  PaymentCreateRequest.builder()
      .transactionAmount(new BigDecimal("100"))
      .description("Título del producto")
      .paymentMethodId("oxxo")
      .dateOfExpiration(OffsetDateTime.of(2023, 1, 10, 10, 10, 10, 0, ZoneOffset.UTC))
      .payer(
          PaymentPayerRequest.builder()
              .email("test@test.com").build()
      )
      .metadata(
          Map.of('payment_point', 'oxxo')
      )
      .build()
client.create(paymentCreateRequest);
```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')
 
payment_request = {
  transaction_amount: 100,
  description: 'Título del producto',
  payment_method_id: 'oxxo',
  payer: {
    email: 'test@test.com',
  },
  metadata: {
    payment_point: 'oxxo',
  }
}
 
payment_response = sdk.payment.create(payment_request)
payment = payment_response[:response]
```
```csharp
using MercadoPago.Config;
using MercadoPago.Client.Common;
using MercadoPago.Client.Payment;
using MercadoPago.Resource.Payment;
 
MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";
 
var request = new PaymentCreateRequest
{
    TransactionAmount = 105,
    Description = "Título del producto",
    PaymentMethodId = 'oxxo',
    Payer = new PaymentPayerRequest
    {
        Email = "test@test.com",
    },
    Metadata = new Dictionary<string, object>
    {
	["payment_point"] = "oxxo",
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
    "description": "Título del producto",
    "payment_method_id": "oxxo",
    "payer": {
        "email": "test@test.com",
    },
    "metadata": {
        "payment_point": "oxxo",
    }
}
 
payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]
```
```curl
curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/payments' \
    -d '{
      "transaction_amount": 100,
      "description": "Título del producto",
      "payment_method_id": "oxxo",
      "payer": {
        "email": "test@test.com",
      }
"metadata": {
        "payment_point": "oxxo",
      }
 
    }'
```
]]]

------------