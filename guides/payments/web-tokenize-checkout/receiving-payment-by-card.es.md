# Recibir un pago con tarjeta

Con Mercado Pago puedes capturar los datos de la tarjeta de forma segura a través del Tokenizer.


### Paso 1: Incorporar datos del viewport

Establece el viewport agregando el siguiente código dentro de la etiqueta `<head>` de tu sitio Web:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
```

### Paso 2: Incorporar el código HTML

Este _fragmento de código HTML_ insertará un botón de pago. Cuando el comprador presione el botón se mostrará el checkout. Incluye el siguiente código en el lugar donde va a estar ubicado el botón dentro de tu sitio Web:

```html
<form action="https://www.mi-sitio.com/procesar-pago" method="POST">
  <script
    src="https://www.mercadopago.com.ar/integrations/v1/web-tokenize-checkout.js"
    data-public-key="ENV_PUBLIC_KEY"
    data-transaction-amount="100.00">
  </script>
</form>
```
Puedes encontrar tu public key en la página de [credenciales]([FAKER][CREDENTIALS][URL]).


> Encuentra toda la información sobre tus credenciales en nuestras [preguntas frecuentes](https://www.mercadopago.com.ar/developers/es/guides/faqs/credentials/).


### Paso 3: Obtener los datos

El *Web Tokenize Checkout* hará un `POST` a la URL que hayas definido en el atributo `action` del fragmento de código HTML (En el ejemplo: **/procesar-pago**) con ciertos datos. Debes utilizar dichos datos para realizar el pago.

#### Los datos son:

Dato | Descripción
---- | ------------
**token** | Identificador único de la tarjeta tokenizada
**payment_method_id** | Medio de pago elegido por el comprador
**installments** | Cantidad de cuotas elegidas por el comprador
**issuer_id** | ID del emisor de la tarjeta del comprador

_No recibirás ni el **transaction_amount** ni el **payer.email** por cuestiones de seguridad._

[[[
```php
<?php
  $token = $_REQUEST["token"];
  $payment_method_id = $_REQUEST["payment_method_id"];
  $installments = $_REQUEST["installments"];
  $issuer_id = $_REQUEST["issuer_id"];
?>
```
```java
String token = request.getParameter("token");
String payment_method_id = request.getParameter("payment_method_id");
Int installments = request.getParameter("installments");
Int issuer_id = request.getParameter("issuer_id");
```
```node
const token = req.body.token;
const payment_method_id = req.body.payment_method_id;
const installments = req.body.installments;
const issuer_id = req.body.issuer_id;
```
```ruby
token = request.body.token
payment_method_id = request.body.payment_method_id
installments = request.body.installments
issuer_id = request.body.issuer_id
```
```csharp
token = Request["token"]
payment_method_id = Request["payment_method_id"]
installments = Request["installments"]
issuer_id = Request["issuer_id"]
```
]]]

### Paso 4: Realizar el pago

Para realizar el pago, debes realizar un API call usando el [SDK de Mercado Pago](https://www.mercadopago.com.ar/developers/es/plugins_sdks) que corresponda con el lenguaje de programación que estés utilizando en tu sitio.

Solamente debes realizar un *API call* incluyendo los datos que recibiste del checkout:

[[[
```php
<?php 
    require_once 'vendor/autoload.php';

    MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");
    //...
    $payment = new MercadoPago\Payment();
    $payment->transaction_amount = [FAKER][NUMBER][BETWEEN][100, 200];
    $payment->token = $token;
    $payment->description = "[FAKER][COMMERCE][PRODUCT_NAME]";
    $payment->installments = $installments;
    $payment->payment_method_id = $payment_method_id;
    $payment->issuer_id = $issuer_id;
    $payment->payer = array(
    "email" => "[FAKER][INTERNET][FREE_EMAIL]"
    );
    // Guarda y postea el pago
    $payment->save();
    //...
    // Imprime el estado del pago
    echo $payment->status;
    //...
?>
```
```java
MercadoPago.SDK.setAccessToken("ENV_ACCESS_TOKEN");
//...
Payment payment = new Payment();
payment.setTransactionAmount([FAKER][NUMBER][BETWEEN][100, 200])
       .setToken(token)
       .setDescription("[FAKER][COMMERCE][PRODUCT_NAME]")
       .setInstallments(installments)
       .setPaymentMethodId(payment_method_id)
       .setIssuerId(issuer_id)
       .setPayer(new Payer()
         .setEmail("[FAKER][INTERNET][FREE_EMAIL]"));
// Guarda y postea el pago
payment.save();
//...
// Imprime el estado del pago
System.out.println(payment.getStatus());
//...
```
```node
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

var payment_data = {
  transaction_amount: [FAKER][NUMBER][BETWEEN][100, 200],
  token: token,
  description: '[FAKER][COMMERCE][PRODUCT_NAME]',
  installments: installments,
  payment_method_id: payment_method_id,
  issuer_id: issuer_id,
  payer: {
    email: '[FAKER][INTERNET][FREE_EMAIL]'
  }
};

// Guarda y postea el pago
mercadopago.payment.save(payment).then(function (data) {
  // ...    
  // Imprime el estado del pago
  Console.log(payment.status);
}).catch(function (error) {
  // ...
});

```
```ruby
require 'mercadopago'
MercadoPago::SDK.access_token = "ENV_ACCESS_TOKEN";

payment = MercadoPago::Payment.new()
payment.transaction_amount = [FAKER][NUMBER][BETWEEN][100, 200]
payment.token = token
payment.description = '[FAKER][COMMERCE][PRODUCT_NAME]'
payment.installments = installments
payment.payment_method_id = payment_method_id
payment.issuer_id = issuer_id
payment.payer = {
  email: "[FAKER][INTERNET][FREE_EMAIL]"
}
# Guarda y postea el pago
payment.save()

```
```csharp
using MercadoPago;
using MercadoPago.DataStructures.Payment;
using MercadoPago.Resources;
// ...
MercadoPago.SDK.SetAccessToken(ENV_ACCESS_TOKEN);
//...
Payment payment = new Payment()
{
    TransactionAmount = float.Parse("[FAKER][NUMBER][BETWEEN][100, 200]"),
    Token = token,
    Description = "[FAKER][COMMERCE][PRODUCT_NAME]",
    Installments = installments,
    PaymentMethodId = payment_method_id,
    IssuerId = issuer_id,
    Payer = new Payer(){
        Email = "[FAKER][INTERNET][FREE_EMAIL]"
    }
};
// Guarda y postea el pago
payment.Save();
//...
// Imprime el estado del pago
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

## Recomendaciones adicionales

### Tarjetas de prueba

Para realizar pagos de prueba (con tus credenciales de TEST), es necesario que utilices [tarjetas de prueba](https://www.mercadopago.com.ar/developers/es/guides/payments/api/testing).

### Promociones

Te recomendamos incluir el [link de promociones](https://www.mercadopago.com.ar/promociones) de **Mercado Pago**, o bien implementar uno de nuestros [banners de medios de pago](https://www.mercadopago.com.ar/developers/es/guides/banners/introduction/).
