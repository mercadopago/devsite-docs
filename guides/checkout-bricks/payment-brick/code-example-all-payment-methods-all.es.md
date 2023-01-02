# Ejemplo de código (todos los medios de pago)

Para facilitar y optimizar su proceso de integración, ve a continuación un ejemplo completo de cómo incluir la Cuenta de Mercado Pago como medio de pago con Payment Brick. 

> SERVER_SIDE
>
> h2
>
> Crea tu preferencia

> Requerido para Cuenta de Mercado Pago.

----[mlu, mpe]----
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
  $item->title = 'Meu produto';
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
      "title": "Meu produto",
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
       .title("Meu produto")
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
      title: 'Meu produto',
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
            Title = "Meu produto",
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
  $item->title = 'Meu produto';
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
      "title": "Meu produto",
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
       .title("Meu produto")
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
      title: 'Meu produto',
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
            Title = "Meu produto",
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
            //  callback llamado al hacer clic en el botón de envío de datos

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
              } else if (selectedPaymentMethod === 'wallet_purchase') {
                // wallet_purchase (Cuenta de Mercado Pago) no necesita ser enviado desde el backend
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

> SERVER_SIDE
>
> h2
>
> Envía el pago a Mercado Pago

> Los pagos con **Cuenta de Mercado Pago** no necesitan ser enviados a través del backend. Si el usuario selecciona esta opción como medio de pago, el `preferenceId` enviado en la inicialización del Brick es el encargado de redirigir al comprador al sitio web de Mercado Pago, donde el pago se realizará directamente en nuestro sitio. Para redirigir al comprador a tu sitio, puede configurar `back_urls` como se describe [en este artículo.](/developers/es/docs/checkout-bricks/payment-brick/additional-customization/preferences#bookmark_redirigir_al_comprador_a_tu_sitio_web)

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