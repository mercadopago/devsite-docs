---
  sites_supported:
      - mla
      - mco
---

# Web Tokenize Checkout

> INFO
>
> ¿Qué es tokenizar?
>
> La tokenización es el proceso por el cual se cifra de forma segura un número de tarjeta de crédito

Con el *Web Tokenize Checkout* de **Mercado Pago** olvídate de la complejidad del armado de tu formulario para la selección de los medios de pago y la tokenización. Esta integración simple te proporciona un formulario con el diseño y el front-end listo.

Integra el *Web Tokenize Checkout* en tu sitio para brindarle a tus compradores una estilizada experiencia que **Mercado Pago**  mantiene en constante mejora.

Los datos sensibles de las tarjetas de crédito y débito son cifrados y almacenados por **Mercado Pago** (con su correspondiente cumplimiento PCI), sin que sean transmitidos a tus servidores.

---

## Consideraciones importantes

Para garantizar la mejor experiencia y seguridad para tus compradores te recomendamos tomar en cuenta:

## Navegación

Evita el uso del hash `#` en la URL de tu sitio web que contiene el *Web Tokenize Checkout* ya que **Mercado Pago** utiliza una técnica para permitir una navegación transparente entre el checkout y tu sitio y esto puede llegar a interferir en la experiencia.

## Soporte de Navegadores

Para garantizar una navegación segura y cumplir con las normativas PCI, el *Web Tokenize Checkout* no brinda una experiencia de pago en los navegadores que no soporten el protocolo TLS 1.0 o mayor.

En el caso de que el comprador tenga un navegador no soportado, se le indicará que no podrá realizar la compra hasta que lo actualice.

### Desktop web

Navegador | Soporte
--------- | --------
**Chrome** | Completo
**Firefox** | Completo
**Internet Explorer** | 7,8,9,11
**Edge** | Completo
**Safari** | Completo
**Opera** | Completo

### Mobile web

Navegador | Soporte
--------- | --------
**Chrome** | Completo
**Firefox** | Completo
**Windows Phone (Internet Explorer Mobile)** | _No_
**Safari Mobile** | Completo
**Opera Mini** | _Básico_
**Android Browser** | _No_

## Integración

### Paso 1: Incorporar el viewport

Establece el viewport agregando el siguiente código dentro de la etiqueta `&lt;head&gt;` de tu sitio web:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
```

### Paso 2: Incluír el snippet

Este *snippet* insertará un botón de pago. Cuando el comprador presione el botón se levantará el checkout. Incluye el siguiente código en el lugar donde va a estar ubicado el botón dentro de tu sitio web:

```html
<form action="/procesar-pago" method="POST">
  <script
  src="https://beta.mercadopago.com.ar/integrations/v1/checkout.js"
  data-public-key="ENV_PUBLIC_KEY"
  data-transaction-amount="100.00">
  </script>
</form>
```

> NOTE
>
> Nota
>
> Puedes encontrar tu public key en la página de [credenciales](https://www.mercadopago.com.ar/account/credentials)

### Paso 3: Obtener los datos

El *Web Tokenize Checkout* hará un `POST` a la URL que hayas definido en el atributo `action` del snippet (En el ejemplo: **/procesar-pago**) con ciertos datos. Debes utilizar dichos datos para realizar el pago.

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

Para realizar el pago, debes realizar un API call usando el [SDK de Mercado Pago](http://beta.mercadopago.com/developers/es/plugins) que corresponda con el lenguaje de programación que estés utilizando en tu sitio.

Solamente debes realizar un *API call* incluyendo los datos que recibiste del checkout:

[[[
```php
<?php  
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

### Promociones

Te recomendamos incluir el [link de promociones](https://www.mercadopago.com.ar/promociones) de **Mercado Pago**, o bien implementar uno de nuestros [banners de medios de pago](https://www.mercadopago.com/mla/com.mercadopago.web.landing.LandingController?id=banners).