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


## Funcionamiento

![API-integration-flowchart](/images/api/api-integration-flowchart-coremethods-es.png)

> Si quieres realizar un flujo automatizado del pago, te recomendamos [utilizar la funcionalidad CardForm de MercadoPago.js V1](/developers/es/docs/checkout-api/payment-methods/receiving-payment-by-card-v1).

<br>

----[mlb]----
Al usar nuestro Checkout Transparente de Mercado Pago, es importante tener en cuenta dos instancias: la de la captura de datos y la del envío de confirmación del pago.
------------
----[mla, mlm, mpe, mco, mlu, mlc]----
Al usar nuestro Checkout API de Mercado Pago, es importante tener en cuenta dos instancias: la de la captura de datos y la del envío de confirmación del pago.
------------

1. Primero, necesitas un frontend para que recolecte los datos de la tarjeta y que genere un token de seguridad con la información para poder crear el pago.
2. Segundo, un backend que tome el token generado y los datos del pago, como por ejemplo monto e ítem, pueda confirmar y efectuar el pago.

Tanto para el frontend como para el backend, recomendamos utilizar [nuestras librerías](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/checkout-api/previous-requirements#bookmark_utiliza_nuestras_librerías_siempre) para poder recolectar los datos sensibles de tus usuarios de manera segura.

Puedes obtener más información en las [Referencias de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference).

<br>

> CLIENT_SIDE
>
> h2
>
> Captura los datos de la tarjeta

Para crear un pago es necesario hacer la captura de los datos de la tarjeta a través del navegador del comprador. Por cuestiones de seguridad, **es muy importante que los datos sensibles de la tarjeta nunca lleguen a tus servidores.**.

> NOTE
>
> Nota
>
> Esta documentación utiliza la antigua versión de la librería. Para ver la versión atual, ve a la [sección de integrar pagos con tarjeta con MercadoPago.js V2](/developers/es/docs/online-payments/checkout-api/receiving-payment-by-card-core-methods).

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Incluye la librería MercadoPago.js

**Usa nuestra librería oficial para acceder a la API de Mercado Pago** desde tu aplicación y recolectar los datos de forma segura.

```html
<script src="https://sdk.mercadopago.com/js/v2"></script>
```

La información de la tarjeta será convertida en un token para que envíes los datos a tus servidores de modo seguro.

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Agrega el formulario de pago

Para realizar la captura de datos sensibles de las tarjetas de tus clientes, **es muy importante que utilices nuestro formulario con los atributos correspondientes** para garantizar la seguridad de la información y la correcta generación del token. Por ejemplo, no debes utilizar el atributo `name` en los campos que tienen datos sensibles, de esta forma nunca llegarán a tus servidores.

Puedes agregar todo lo que necesites, modificar el atributo `label` sugerido y sumarle el estilo que quieras sin problemas.

En el siguiente ejemplo se asume que los datos `transactionAmount` y `description` se obtuvieron en el paso previo donde el cliente seleccionó el producto o servicio que desea pagar.


```html
<form id="form-checkout" method="POST" action="/process_payment">
       <input type="text" id="form-checkout__cardNumber" placeholder="Numero de tarjeta" />
       <input type="text" id="form-checkout__expirationMonth" placeholder="Mes de vencimiento (MM)" />
       <input type="text" id="form-checkout__expirationYear" placeholder="Año de vencimiento (YY o YYYY)" />
       <input type="text" name="cardholderName" id="form-checkout__cardholderName" placeholder="Titular de la tarjeta"/>
       <input type="email" name="cardholderEmail" id="form-checkout__cardholderEmail" placeholder="E-mail" />
       <input type="text" id="form-checkout__securityCode" placeholder="Código de seguridad"/>
       <select name="issuer" id="form-checkout__issuer">
           <option value="" disabled selected>Seleccione el emisor</option>
       </select>----[mla, mlb, mlu, mlc, mpe, mco]----
       <select name="identificationType" id="form-checkout__identificationType">
           <option value="" disabled selected>Tipo de documento</option>
       </select>------------
       <input type="text" name="identificationNumber" id="form-checkout__identificationNumber" placeholder="Número de documento" />
       <select name="installments" id="form-checkout__installments">
           <option value="" disabled selected>Elige la cantidad de cuotas</option>
       </select>
       <input id="token" name="token" type="hidden" />
       <input id="paymentMethodId" name="paymentMethodId" type="hidden" />
       <input id="transactionAmount" name="transactionAmount" type="hidden" value="100"/>
       <input id="description" name="description" type="hidden" value="product description" />
       <button type="submit" id="form-checkout__submit">Pagar</button>
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
<script>
const mp = new MercadoPago('YOUR_PUBLIC_KEY');
----[mla, mlb, mlu, mlc, mpe, mco]----
// Add Step #getIdentificationTypes------------
// Add Step #getPaymentMethods
// Add Step #getIssuers
// Add Step #getInstallments
// Add Step #createCardToken
</script>
```

> Si aún no tienes cuenta para ver tus credenciales, [regístrate](https://www.mercadopago[FAKER][URL][DOMAIN]/registration-mp).

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. Obtén los datos para tu formulario

----[mla, mlb, mlu, mlc, mpe, mco]----
#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Obtener tipos de documentos

Uno de los campos obligatorios es el tipo de número de documento. Utiliza la lista de documentos al momento de completar los datos.

Incluyendo el elemento de tipo select con el `id: 'form-checkout__identificationType'` que se encuentra en el formulario, podrás completar automáticamente las opciones disponibles cuando llames a la siguiente función:

```javascript
// Step #getIdentificationTypes

// Helper function to append option elements to a select input
function createSelectOptions(elem, options, labelsAndKeys = { label : "name", value : "id"}){
   const {label, value} = labelsAndKeys;

   elem.options.length = 0;

   const tempOptions = document.createDocumentFragment();

   options.forEach( option => {
       const optValue = option[value];
       const optLabel = option[label];

       const opt = document.createElement('option');
       opt.value = optValue;
       opt.textContent = optLabel;

       tempOptions.appendChild(opt);
   });

   elem.appendChild(tempOptions);
}

// Get Identification Types
(async function getIdentificationTypes () {
   try {
       const identificationTypes = await mp.getIdentificationTypes();
       const identificationTypeElement = document.getElementById('form-checkout__identificationType');

       createSelectOptions(identificationTypeElement, identificationTypes)
   }catch(e) {
       return console.error('Error getting identificationTypes: ', e);
   }
})()
```

> Encuentra más detalle en la [sección de Tipos de documentos](/developers/es/guides/additional-content/payment-localization/doc-type-by-country).

------------


#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Obtener método de pago de la tarjeta

Valida los datos de tus clientes mientras los completan para evitar errores y que puedas ofrecer correctamente las cuotas disponibles. Usa el siguiente código de ejemplo para identificar el medio de pago con los primeros 8 dígitos de la tarjeta.

```javascript
// Step #getPaymentMethods
const cardNumberElement = document.getElementById('form-checkout__cardNumber');

function clearHTMLSelectChildrenFrom(element) {
    const currOptions = [...element.children];
    currOptions.forEach(child => child.remove());
}

cardNumberElement.addEventListener('keyup', async () => {
   try {
       const paymentMethodElement = document.getElementById('paymentMethodId');
       const issuerElement = document.getElementById('form-checkout__issuer');
       const installmentsElement = document.getElementById('form-checkout__installments');
       let cardNumber = cardNumberElement.value;

       if (cardNumber.length < 8 && paymentMethodElement.value) {
           clearHTMLSelectChildrenFrom(issuerElement);
           clearHTMLSelectChildrenFrom(installmentsElement);
           paymentMethodElement.value = "";
           return
       }

       if (cardNumber.length >= 8 && !paymentMethodElement.value) {
           let bin = cardNumber.substring(0,8);
           const paymentMethods = await mp.getPaymentMethods({'bin': bin});

           const { id: paymentMethodId, additional_info_needed, issuer } = paymentMethods.results[0];

           // Assign payment method ID to a hidden input.
           paymentMethodElement.value = paymentMethodId;

           // If 'issuer_id' is needed, we fetch all issuers (getIssuers()) from bin.
           // Otherwise we just create an option with the unique issuer and call getInstallments().
           additional_info_needed.includes('issuer_id') ? getIssuers() : (() => {
               const issuerElement = document.getElementById('form-checkout__issuer');
               createSelectOptions(issuerElement, [issuer]);
  
               getInstallments();
           })()
       }
   }catch(e) {
       console.error('error getting payment methods: ', e)
   }
});
```

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Obtener banco emisor

Al completar los datos, es importante identificar el banco emisor de la tarjeta para evitar conflictos entre los distintos emisores y poder ofrecer las opciones de pago en cuotas correctas.

Agrega el siguiente código para obtener el `issuer_id`:

```javascript
// Step #getIssuers
const getIssuers = async () => {
   try {
       const cardNumber = document.getElementById('form-checkout__cardNumber').value;
       const paymentMethodId = document.getElementById('paymentMethodId').value;
       const issuerElement = document.getElementById('form-checkout__issuer');

       const issuers = await mp.getIssuers({paymentMethodId, bin: cardNumber.slice(0,8)});

       createSelectOptions(issuerElement, issuers);

       getInstallments();
   }catch(e) {
       console.error('error getting issuers: ', e)
   }
};
```

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Obtener cantidad de cuotas

Otro de los campos obligatorios para pagos con tarjetas es la cantidad de cuotas. Para obtener las cuotas disponibles, puedes utilizar la siguiente función de ejemplo para completar el campo sugerido de tipo _select_ denominado `installments`.

```javascript
// Step #getInstallments
const getInstallments = async () => {
   try {
       const installmentsElement = document.getElementById('form-checkout__installments')
       const cardNumber = document.getElementById('form-checkout__cardNumber').value; 

       const installments = await mp.getInstallments({
           amount: document.getElementById('transactionAmount').value,
           bin: cardNumber.slice(0,8),
           paymentTypeId: 'credit_card'
       });

       createSelectOptions(installmentsElement, installments[0].payer_costs, {label: 'recommended_message', value: 'installments'})
   }catch(e) {
       console.error('error getting installments: ', e)
   }
}
```

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5. Crea el token de la tarjeta

Antes de enviar el pago, debes crear el token que contendrá de manera segura toda la información de la tarjeta. Lo tienes que generar de la siguiente manera:

```javascript
// Step #createCardToken
const formElement = document.getElementById('form-checkout');
formElement.addEventListener('submit', e => createCardToken(e));

const createCardToken = async (event) => {
   try {
       const tokenElement = document.getElementById('token');

       if (!tokenElement.value) {
           event.preventDefault();

           const token = await mp.createCardToken({
               cardNumber: document.getElementById('form-checkout__cardNumber').value,
               cardholderName: document.getElementById('form-checkout__cardholderName').value,----[mla, mlb, mlu, mlc, mpe, mco]----
               identificationType: document.getElementById('form-checkout__identificationType').value,------------
               identificationNumber: document.getElementById('form-checkout__identificationNumber').value,
               securityCode: document.getElementById('form-checkout__securityCode').value,
               cardExpirationMonth: document.getElementById('form-checkout__expirationMonth').value,
               cardExpirationYear: document.getElementById('form-checkout__expirationYear').value
           });

           tokenElement.value = token.id;

           formElement.requestSubmit();
       }

   }catch(e) {
       console.error('error creating card token: ', e)
   }
}
```

El método `createCardToken` devolverá un token con la representación segura de la tarjeta.

Allí tomaremos el token ID de la respuesta y lo guardaremos en un atributo oculto que llamaremos `token`, para luego enviar el formulario a tus servidores.

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

Ten en cuenta que para que este paso funcione es necesario que configures tu [clave privada]([FAKER][CREDENTIALS][URL]) y que para interactuar con nuestras APIs recomendamos utilizar la [SDK oficial de Mercado Pago](/developers/es/guides/checkout-api/previous-requirements#bookmark__instala_la_sdk_de_mercado_pago).

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
        "type" => $_POST['identificationType'],------------
        "number" => $_POST['identificationNumber']
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
      type: req.body.identificationType,------------
      number: req.body.identificationNumber
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
    console.error(error)
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
    email: params[:email],
    identification: {----[mla, mlb, mlu, mlc, mpe, mco]----
      type: params[:identificationType],------------
      number: params[:identificationNumber]
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
            Type = Request["identificationType"],------------
            Number = Request["identificationNumber"],
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

> Conoce todos los campos disponibles para realizar un pago completo en las [Referencias de API](/developers/es/reference/payments/_payments/post).

## Mensajes de respuestas

Los posibles estados de un pago son:

![payment-status](/images/api/api-payment-status-es.png)
<br>
<br>

Para ayudar a mejorar la aprobación de tus pagos, es fundamental que puedas comunicar correctamente a tus clientes los resultados al realizar o crear un pago.

Esto ayudará a evitar casos de rechazos y contracargos en los casos de transacciones inicialmente aprobadas. Por ejemplo, permite que se puedan corregir los errores de carga de datos o ayudar a cambiar el medio de pago.

Te recomendamos usar los [mensajes de respuesta](/developers/es/guides/checkout-api/response-handling) y utilizar la comunicación sugerida en cada uno de los casos.

> NOTE
>
> Nota
>
> Evita pagos rechazados con nuestras [recomendaciones para mejorar la aprobación de tus pagos](/developers/es/guides/how-tos/improve-approval).

## Recibe notificaciones de pago

Por último, es importante que estés siempre informado sobre la creación de nuevos pagos y las actualizaciones de sus estados. Por ejemplo si fueron aprobados, rechazados o si se encuentran pendientes.

[Configura notificaciones webhooks](/developers/es/guides/notifications/webhooks/webhooks) o [notificaciones IPN](/developers/es/guides/checkout-api/additional-content/your-integrations/notifications/ipn).

