----[mlb]----
# Integra Checkout Transparente para pagos con tarjetas
------------
----[mla, mlm, mpe, mco, mlu, mlc]----
# Integra Checkout API para pagos con tarjetas
------------

----[mlb]----
La integración del Checkout Transparente de Mercado Pago para tarjetas permite que puedas ofrecer una opción de pagos completa dentro de tu sitio. Toda la experiencia sucede en tu tienda para que los clientes no tengan que salir al momento de realizar la compra.
------------
----[mla, mlm, mpe, mco, mlu, mlc]----
La integración del Checkout API de Mercado Pago para tarjetas permite que puedas ofrecer una opción de pagos completa dentro de tu sitio. Toda la experiencia sucede en tu tienda para que los clientes no tengan que salir al momento de realizar la compra.
------------

Usa los [ejemplos descargables](#bookmark_ejemplos_descargables) para conocer la integración completa o para adaptarlos según lo que necesites.

## ¿Cómo funciona?

![API-integration-flowchart](/images/api/api-integration-flowchart-es.png)

<br>

----[mlb]----
Al usar nuestro Checkout Transparente de Mercado Pago, es importante tener en cuenta dos instancias: la de la captura de datos y la del envío de confirmación del pago.
------------
----[mla, mlm, mpe, mco, mlu, mlc]----
Al usar nuestro Checkout API de Mercado Pago, es importante tener en cuenta dos instancias: la de la captura de datos y la del envío de confirmación del pago.
------------

1. Primero, necesitas un frontend para que recolecte los datos de la tarjeta y que genere un token de seguridad con la información para poder crear el pago.
2. Segundo, un backend que tome el token generado y los datos del pago, como por ejemplo monto e ítem, pueda confirmar y efectuar el pago.

Tanto para el frontend como para el backend, recomendamos utilizar [nuestras librerías](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/v1/previous-requirements/#bookmark_utiliza_nuestras_librerías_siempre) para poder recolectar los datos sensibles de tus usuarios de manera segura.

> Puedes obtener más información en las [Referencias de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference).

<br>

> CLIENT_SIDE
>
> h2
>
> Captura los datos de la tarjeta

----[mlb]----
> INFO
>
> Nueva versión MercadoPago.js
>
> Utiliza la librería MercadoPago.js V2 para crear tu formulario de tarjeta con la funcionalidad CardForm y autogenerar la lógica de negocio necesaria para realizar el pago.<br><br>[Integrar Checkout Transparente con MercadoPago.js V2](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/receiving-payment-by-card)
------------
----[mla, mlm, mpe, mco, mlu, mlc]----
> INFO
>
> Nueva versión MercadoPago.js
>
> Utiliza la librería MercadoPago.js V2 para crear tu formulario de tarjeta con la funcionalidad CardForm y autogenerar la lógica de negocio necesaria para realizar el pago.<br><br>[Integrar Checkout API con MercadoPago.js V2](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/receiving-payment-by-card)
------------

Para crear un pago es necesario hacer la captura de los datos de la tarjeta a través del navegador del comprador. Por cuestiones de seguridad, **es muy importante que los datos nunca lleguen a tus servidores**.

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Incluye la librería MercadoPago.js

**Usa nuestra librería oficial para acceder a la API de Mercado Pago** desde tu aplicación y recolectar los datos de forma segura.

```html
<script src="https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js"></script>
```

La información de la tarjeta será convertida en un token para que envíes los datos a tus servidores de modo seguro.

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Agrega el formulario de pago

Para realizar la captura de datos sensibles de las tarjetas de tus clientes, **es muy importante que utilices nuestro formulario con los atributos correspondientes** para garantizar la seguridad de la información y la correcta generación del token. Por ejemplo, debes respetar los atributos `data-checkout` y no colocar el atributo `name` en los campos que tienen datos sensibles, de esta forma nunca llegarán a tus servidores.

Puedes agregar todo lo que necesites, modificar el atributo `label` sugerido y sumarle el estilo que quieras sin problemas.

En el siguiente ejemplo se asume que los datos `transactionAmount` y `description` se obtuvieron en el paso previo donde el cliente seleccionó el producto o servicio que desea pagar.

```html
<form action="/process_payment" method="post" id="paymentForm">
   <h3>Detalles del comprador</h3>
     <div>
       <div>
         <label for="email">E-mail</label>
         <input id="email" name="email" type="text" value="test@test.com"/>
       </div>----[mla, mlb, mlu, mlc, mpe, mco]----
       <div>
         <label for="docType">Tipo de documento</label>
         <select id="docType" name="docType" data-checkout="docType" type="text"></select>
       </div>------------
       <div>
         <label for="docNumber">Número de documento</label>
         <input id="docNumber" name="docNumber" data-checkout="docNumber" type="text"/>
       </div>
     </div>
   <h3>Detalles de la tarjeta</h3>
     <div>
       <div>
         <label for="cardholderName">Titular de la tarjeta</label>
         <input id="cardholderName" data-checkout="cardholderName" type="text">
       </div>
       <div>
         <label for="">Fecha de vencimiento</label>
         <div>
           <input type="text" placeholder="MM" id="cardExpirationMonth" data-checkout="cardExpirationMonth"
             onselectstart="return false" onpaste="return false"
             oncopy="return false" oncut="return false"
             ondrag="return false" ondrop="return false" autocomplete=off>
           <span class="date-separator">/</span>
           <input type="text" placeholder="YY" id="cardExpirationYear" data-checkout="cardExpirationYear"
             onselectstart="return false" onpaste="return false"
             oncopy="return false" oncut="return false"
             ondrag="return false" ondrop="return false" autocomplete=off>
         </div>
       </div>
       <div>
         <label for="cardNumber">Número de la tarjeta</label>
         <input type="text" id="cardNumber" data-checkout="cardNumber"
           onselectstart="return false" onpaste="return false"
           oncopy="return false" oncut="return false"
           ondrag="return false" ondrop="return false" autocomplete=off>
       </div>
       <div>
         <label for="securityCode">Código de seguridad</label>
         <input id="securityCode" data-checkout="securityCode" type="text"
           onselectstart="return false" onpaste="return false"
           oncopy="return false" oncut="return false"
           ondrag="return false" ondrop="return false" autocomplete=off>
       </div>
       <div id="issuerInput">
         <label for="issuer">Banco emisor</label>
         <select id="issuer" name="issuer" data-checkout="issuer"></select>
       </div>
       <div>
         <label for="installments">Cuotas</label>
         <select type="text" id="installments" name="installments"></select>
       </div>
       <div>
         <input type="hidden" name="transactionAmount" id="transactionAmount" value="100" />
         <input type="hidden" name="paymentMethodId" id="paymentMethodId" />
         <input type="hidden" name="description" id="description" />
         <br>
         <button type="submit">Pagar</button>
         <br>
       </div>
   </div>
 </form>
```

> NOTE
>
> Nota
>
> Ten en cuenta que es necesario que el formulario se encuentre antes de todos los pasos siguientes para su correcto funcionamiento.

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Configura tu clave pública

Agrega tu [clave pública]([FAKER][CREDENTIALS][URL]) de la siguiente manera:

```javascript
window.Mercadopago.setPublishableKey("YOUR_PUBLIC_KEY");
```

> Si aún no tienes cuenta para ver tus credenciales, [regístrate](https://www.mercadopago[FAKER][URL][DOMAIN]/registration-mp).

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. Obtén los datos para tu formulario

----[mla, mlb, mlu, mlc, mpe, mco]----
#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Obtener tipos de documentos

Uno de los campos obligatorios es el tipo de número de documento. Utiliza la lista de documentos al momento de completar los datos.

Incluyendo el elemento de tipo _select_ con `id = docType` que se encuentra en el formulario, MercadoPago.js completará automáticamente las opciones disponibles cuando llames a la siguiente función:

```javascript
window.Mercadopago.getIdentificationTypes();
```

> Encuentra más detalle en la [sección de Tipos de documentos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/resources/localization/identification-types).

------------


#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Obtener método de pago de la tarjeta

Valida los datos de tus clientes mientras los completan para evitar errores y que puedas ofrecer correctamente las cuotas disponibles. Usa el siguiente código de ejemplo para identificar el medio de pago con los primeros 8 dígitos de la tarjeta.

```javascript
document.getElementById('cardNumber').addEventListener('change', guessPaymentMethod);

function guessPaymentMethod(event) {
   let cardnumber = document.getElementById("cardNumber").value;
   if (cardnumber.length >= 8) {
       let bin = cardnumber.substring(0,8);
       window.Mercadopago.getPaymentMethod({
           "bin": bin
       }, setPaymentMethod);
   }
};

function setPaymentMethod(status, response) {
   if (status == 200) {
       let paymentMethod = response[0];
       document.getElementById('paymentMethodId').value = paymentMethod.id;

       getIssuers(paymentMethod.id);
   } else {
       alert(`payment method info error: ${response}`);
   }
}
```

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Obtener banco emisor

Al completar los datos, es importante identificar el banco emisor de la tarjeta para evitar conflictos entre los distintos emisores y poder ofrecer las opciones de pago en cuotas correctas.

Agrega el siguiente código para obtener el `issuer_id`:

```javascript
function getIssuers(paymentMethodId) {
   window.Mercadopago.getIssuers(
       paymentMethodId,
       setIssuers
   );
}

function setIssuers(status, response) {
   if (status == 200) {
       let issuerSelect = document.getElementById('issuer');
       response.forEach( issuer => {
           let opt = document.createElement('option');
           opt.text = issuer.name;
           opt.value = issuer.id;
           issuerSelect.appendChild(opt);
       });

       getInstallments(
           document.getElementById('paymentMethodId').value,
           document.getElementById('transactionAmount').value,
           issuerSelect.value
       );
   } else {
       alert(`issuers method info error: ${response}`);
   }
}
```

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Obtener cantidad de cuotas

Otro de los campos obligatorios para pagos con tarjetas es la cantidad de cuotas. Para obtener las cuotas disponibles, puedes utilizar la siguiente función de ejemplo para completar el campo sugerido de tipo _select_ denominado `installments`.

```javascript
function getInstallments(paymentMethodId, transactionAmount, issuerId){
   window.Mercadopago.getInstallments({
       "payment_method_id": paymentMethodId,
       "amount": parseFloat(transactionAmount),
       "issuer_id": parseInt(issuerId)
   }, setInstallments);
}

function setInstallments(status, response){
   if (status == 200) {
       document.getElementById('installments').options.length = 0;
       response[0].payer_costs.forEach( payerCost => {
           let opt = document.createElement('option');
           opt.text = payerCost.recommended_message;
           opt.value = payerCost.installments;
           document.getElementById('installments').appendChild(opt);
       });
   } else {
       alert(`installments method info error: ${response}`);
   }
}
```

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5. Crea el token de la tarjeta

Antes de enviar el pago, debes crear el token que contendrá de manera segura toda la información de la tarjeta. Lo tienes que generar de la siguiente manera:

```javascript
doSubmit = false;
document.getElementById('paymentForm').addEventListener('submit', getCardToken);
function getCardToken(event){
   event.preventDefault();
   if(!doSubmit){
       let $form = document.getElementById('paymentForm');
       window.Mercadopago.createToken($form, setCardTokenAndPay);
       return false;
   }
};

function setCardTokenAndPay(status, response) {
   if (status == 200 || status == 201) {
       let form = document.getElementById('paymentForm');
       let card = document.createElement('input');
       card.setAttribute('name', 'token');
       card.setAttribute('type', 'hidden');
       card.setAttribute('value', response.id);
       form.appendChild(card);
       doSubmit=true;
       form.submit();
   } else {
       alert("Verify filled data!\n"+JSON.stringify(response, null, 4));
   }
};
```

El método `createToken` devolverá un `card_token` con la representación segura de la tarjeta. El segundo campo del método `createToken` es la función de `callback` que procesará la respuesta (en este caso usamos la función `setCardTokenAndPay`). Allí tomaremos el ID de la respuesta y lo guardaremos en un atributo oculto que llamaremos `token`, para luego enviar el formulario a tus servidores.

> WARNING
>
> Importante
>
> Ten en cuenta que el token tiene una validez de 7 días y solo se puede usar una vez.

<br>
<span></span>

> SERVER_SIDE
>
> h2
>
> Envía el pago a Mercado Pago

Para continuar el proceso de pago hacia Mercado Pago, es necesario que tu backend sepa recibir la información del formulario con el token generado y los datos completados.

Según el ejemplo dado, tu backend debería disponibilizar un endpoint `/process_payment`, que fue definido en el atributo `action` del formulario, para recibir allí todos los datos luego de realizar la acción `submit`.

Ya estando en tu backend con toda la información recolectada, es momento de enviar la solicitud a Mercado Pago a través de nuestras APIs. Los campos mínimos requeridos a enviar son: `token`, `transaction_amount`, `installments`, `payment_method_id` y el `payer.email`.

Ten en cuenta que para que este paso funcione es necesario que configures tu [clave privada]([FAKER][CREDENTIALS][URL]) y que para interactuar con nuestras APIs recomendamos utilizar la [SDK oficial de Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/v1/previous-requirements/#bookmark__instala_la_sdk_de_mercado_pago).

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
    $payer->email = $_POST['email'];
    $payer->identification = array(----[mla, mlb, mlu, mlc, mpe, mco]----
        "type" => $_POST['docType'],------------
        "number" => $_POST['docNumber']
    );
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
  transaction_amount: Number(req.body.transactionAmount),
  token: req.body.token,
  description: req.body.description,
  installments: Number(req.body.installments),
  payment_method_id: req.body.paymentMethodId,
  issuer_id: req.body.issuer,
  payer: {
    email: req.body.email,
    identification: {----[mla, mlb, mlu, mlc, mpe, mco]----
      type: req.body.docType,------------
      number: req.body.docNumber
    }
  }
};

mercadopago.payment.save(payment_data)
  .then(function(response) {
    res.status(response.status).json({
      status: response.body.status,
      status_detail: response.body.status_detail,
      id: response.body.id
    });
  })
  .catch(function(error) {
    res.status(response.status).send(error);
  });
```
```java
===
Puedes encontrar el estado del pago en el valor _status_.
===

MercadoPago.SDK.setAccessToken("YOUR_ACCESS_TOKEN");

Payment payment = new Payment();
payment.setTransactionAmount(Float.valueOf(request.getParameter("transactionAmount")))
       .setToken(request.getParameter("token"))
       .setDescription(request.getParameter("description"))
       .setInstallments(Integer.valueOf(request.getParameter("installments")))
       .setPaymentMethodId(request.getParameter("paymentMethodId"));

Identification identification = new Identification();----[mla, mlb, mlu, mlc, mpe, mco]----
identification.setType(request.getParameter("docType"))
              .setNumber(request.getParameter("docNumber"));------------ ----[mlm]----
identification.setNumber(request.getParameter("docNumber"));------------

Payer payer = new Payer();
payer.setEmail(request.getParameter("email"))
     .setIdentification(identification);

payment.setPayer(payer);

payment.save();

System.out.println(payment.getStatus());

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
    email: params[:email],
    identification: {----[mla, mlb, mlu, mlc, mpe, mco]----
      type: params[:docType],------------
      number: params[:docNumber]
    }
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
        Email = Request["email"],
        Identification = new IdentificationRequest
        {----[mla, mlb, mlu, mlc, mpe, mco]----
            Type = Request["docType"],------------
            Number = Request["docNumber"],
        },
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
        "email": request.POST.get("email"),
        "identification": {----[mla, mlb, mlu, mlc, mpe, mco]----
            "type": request.POST.get("type"), ------------
            "number": request.POST.get("number")
        }
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

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Respuesta

```json
{
    "status": "approved",
    "status_detail": "accredited",
    "id": 3055677,
    "date_approved": "2019-02-23T00:01:10.000-04:00",
    "payer": {
        ...
    },
    "payment_method_id": "visa",
    "payment_type_id": "credit_card",
    "refunds": [],
    ...
}
```

> Conoce todos los campos disponibles para realizar un pago completo en las [Referencias de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/payments/_payments/post).

## Mensajes de respuestas

Los posibles estados de un pago son:

![payment-status](/images/api/api-payment-status-es.png)
<br>
<br>

Para ayudar a mejorar la aprobación de tus pagos, es fundamental que puedas comunicar correctamente a tus clientes los resultados al realizar o crear un pago.

Esto ayudará a evitar casos de rechazos y contracargos en los casos de transacciones inicialmente aprobadas. Por ejemplo, permite que se puedan corregir los errores de carga de datos o ayudar a cambiar el medio de pago.

Te recomendamos usar los [mensajes de respuesta](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/v1/handling-responses) y utilizar la comunicación sugerida en cada uno de los casos.

> NOTE
>
> Nota
>
> Evita pagos rechazados con nuestras [recomendaciones para mejorar la aprobación de tus pagos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/account/payment-rejections).

## Recibe notificaciones de pago

Por último, es importante que estés siempre informado sobre la creación de nuevos pagos y las actualizaciones de sus estados. Por ejemplo si fueron aprobados, rechazados o si se encuentran pendientes.

[Configura notificaciones webhooks](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/notifications/webhooks/webhooks) o [notificaciones IPN](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/notifications/ipn/introduction).

## Ejemplos descargables

----[mlb]----
> GIT
>
> Checkout Transparente
>
> Te dejamos [ejemplos completos de integración](http://github.com/mercadopago/card-payment-sample) en GitHub para PHP o NodeJS para que puedas descargar al instante.
------------
----[mla, mlm, mpe, mco, mlu, mlc]----
> GIT
>
> Checkout API
>
> Te dejamos [ejemplos completos de integración](http://github.com/mercadopago/card-payment-sample) en GitHub para PHP o NodeJS para que puedas descargar al instante.
------------

<span></span>

> GIT
>
> Formulario de pago
>
> Si quieres implementar tu servidor con alguna otra tecnología, te dejamos un [ejemplo completo del formulario de pago](https://github.com/mercadopago/card-payment-sample) en GitHub para que puedas descargar.

---
### Próximos pasos

> LEFT_BUTTON_REQUIRED_ES
>
> Prueba tu integración
>
> Revisa que esté todo bien en tu integración con los usuarios de prueba.
>
> [Prueba tu integración](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/v1/testing)

> RIGHT_BUTTON_RECOMMENDED_ES
>
> Integra otros medios de pago
>
> Conoce todas las opciones de pago disponibles y cómo ofrecerlas.
>
> [Integra otros medios de pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/v1/other-payment-ways)
