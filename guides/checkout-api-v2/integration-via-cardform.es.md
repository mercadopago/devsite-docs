# Tarjeta

La integración de los pagos con tarjeta se realiza a través de cardform. En este modo de integración, **MercadoPago.js** se encarga de los flujos necesarios para obtener la información requerida para la generación de un pago. Al inicializarlo, se realiza una búsqueda para recabar los tipos de documentos disponibles para el país correspondiente.

A medida que se introducen los datos de la tarjeta, se realiza una búsqueda automática de la información del emisor y las cuotas disponibles para ese método de pago. Con esto, la implementación del flujo es transparente para quien realiza la integración.

----[mlb]----
> NOTE
>
> Importante
>
> Además de las opciones disponibles en esta documentación, también es posible integrar **pagos con tarjeta** utilizando el **Brick de Card Payment**. Consulta la documentación [Renderizado por defecto](/developers/es/docs/checkout-bricks/card-payment-brick/default-rendering#editor_2) de Card Payment para obtener más detalles. También recomendamos adoptar el protocolo 3DS 2.0 para aumentar la probabilidad de que se aprueben sus pagos. Para obtener más información, consulte la documentación sobre [Cómo integrar 3DS con Checkout Transparente.](/developers/es/docs/checkout-api/how-tos/integrate-3ds)

------------
----[mla, mlm, mpe, mlc]----
> NOTE
>
> Importante
>
> Además de las opciones disponibles en esta documentación, también es posible integrar **pagos con tarjeta** utilizando el **Brick de Card Payment**. Consulta la documentación [Renderizado por defecto](/developers/es/docs/checkout-bricks/card-payment-brick/default-rendering#editor_2) de Card Payment para obtener más detalles. También recomendamos adoptar el protocolo 3DS 2.0 para aumentar la probabilidad de que se aprueben sus pagos. Para obtener más información, consulte la documentación sobre [Cómo integrar 3DS con ----[mlb]---- Checkout Transparente------------ ----[mla, mlm, mlu, mco, mlc, mpe]---- Checkout API ------------.](/developers/es/docs/checkout-api/how-tos/integrate-3ds)

------------
----[mlu, mco]----
> NOTE
>
> Importante
>
> Además de las opciones disponibles en esta documentación, también es posible integrar **pagos con tarjeta** utilizando el **Brick de CardPayment**. Consulta la documentación [Renderizado por defecto](/developers/es/docs/checkout-bricks/card-payment-brick/default-rendering#editor_2) de CardPayment para obtener más detalles.

------------

Consulta el siguiente diagrama que ilustra el proceso de pago con tarjeta utilizando Card Form.

![API-integration-flowchart](/images/api/api-integration-flowchart-cardform-2-es.png)

Para integrar los pagos con tarjeta en ----[mlb]---- Checkout Transparente------------ ----[mla, mlm, mlu, mco, mlc, mpe]---- Checkout API ------------ sigue las siguientes etapas.

##  Importar MercadoPago.js

La primera etapa del proceso de integración de pagos con tarjeta es la captura de los datos de la tarjeta. Esta captura se realiza a través de la inclusión de la biblioteca MercadoPago.js en tu proyecto, seguida del formulario de pago. Utiliza el siguiente código para importar la biblioteca antes de añadir el formulario de pago.

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

## Configurar credenciales

Las credenciales son claves únicas con las que identificamos una integración en tu cuenta. Se utilizan para capturar pagos en tiendas online y otras aplicaciones de forma segura.

Esta es la primera etapa de una estructura de código completa que se debe seguir para integrar correctamente pagos con tarjeta. 

[[[
```html
<script>
  const mp = new MercadoPago("YOUR_PUBLIC_KEY");
</script>
```
```javascript
import { loadMercadoPago } from "@mercadopago/sdk-js";

await loadMercadoPago();
const mp = new window.MercadoPago("YOUR_PUBLIC_KEY");

```
]]]

## Añadir formulario de pago

La captura de los datos de la tarjeta se realiza a través del CardForm de la biblioteca MercadoPago.js. Nuestro CardForm se conectará a tu formulario de pago HTML, facilitando la obtención y validación de todos los datos necesarios para procesar el pago.

Para añadir el formulario de pago, inserta el siguiente HTML directamente en el proyecto. 

----[mla, mlu, mpe, mco, mlb, mlc]----
[[[
```html
  <style>
    #form-checkout {
      display: flex;
      flex-direction: column;
      max-width: 600px;
    }

    .container {
      height: 18px;
      display: inline-block;
      border: 1px solid rgb(118, 118, 118);
      border-radius: 2px;
      padding: 1px 2px;
    }
  </style>
  <form id="form-checkout">
    <div id="form-checkout__cardNumber" class="container"></div>
    <div id="form-checkout__expirationDate" class="container"></div>
    <div id="form-checkout__securityCode" class="container"></div>
    <input type="text" id="form-checkout__cardholderName" />
    <select id="form-checkout__issuer"></select>
    <select id="form-checkout__installments"></select>
    <select id="form-checkout__identificationType"></select>
    <input type="text" id="form-checkout__identificationNumber" />
    <input type="email" id="form-checkout__cardholderEmail" />

    <button type="submit" id="form-checkout__submit">Pagar</button>
    <progress value="0" class="progress-bar">Cargando...</progress>
  </form>
```
]]]

------------
----[mlm]----
[[[
```html
  <style>
    #form-checkout {
      display: flex;
      flex-direction: column;
      max-width: 600px;
    }

    .container {
      height: 18px;
      display: inline-block;
      border: 1px solid rgb(118, 118, 118);
      border-radius: 2px;
      padding: 1px 2px;
    }
  </style>
  <form id="form-checkout">
    <div id="form-checkout__cardNumber" class="container"></div>
    <div id="form-checkout__expirationDate" class="container"></div>
    <div id="form-checkout__securityCode" class="container"></div>
    <input type="text" id="form-checkout__cardholderName" />
    <select id="form-checkout__issuer"></select>
    <select id="form-checkout__installments"></select>
    <input type="email" id="form-checkout__cardholderEmail" />

    <button type="submit" id="form-checkout__submit">Pagar</button>
    <progress value="0" class="progress-bar">Cargando...</progress>
  </form>
```
]]]

------------

## Inicializar formulario de pago

Después de añadir el formulario de pago, es necesario inicializarlo. Esta etapa consiste en relacionar el ID de cada campo del formulario con los atributos correspondientes. La biblioteca se encargará de rellenar, obtener y validar todos los datos necesarios en la confirmación del pago.  

> NOTE
>
> Importante
>
> Al enviar el formulario, se genera un token que representa de manera segura los datos de la tarjeta, también llamado **cardtoken**. Es posible acceder a él mediante la función `cardForm.getCardFormData()`, como se muestra a continuación en el callback `onSubmit`. Además, este token también se almacena en un campo oculto dentro del formulario, donde se puede encontrar con la nomenclatura `MPHiddenInputToken`. Ten en cuenta que puede ser utilizado **solo una vez** y caduca en un plazo de **7 días**.

----[mla, mlu, mpe, mco, mlb, mlc]----
[[[
```javascript

    const cardForm = mp.cardForm({
      amount: "100.5",
      iframe: true,
      form: {
        id: "form-checkout",
        cardNumber: {
          id: "form-checkout__cardNumber",
          placeholder: "Numero de tarjeta",
        },
        expirationDate: {
          id: "form-checkout__expirationDate",
          placeholder: "MM/YY",
        },
        securityCode: {
          id: "form-checkout__securityCode",
          placeholder: "Código de seguridad",
        },
        cardholderName: {
          id: "form-checkout__cardholderName",
          placeholder: "Titular de la tarjeta",
        },
        issuer: {
          id: "form-checkout__issuer",
          placeholder: "Banco emisor",
        },
        installments: {
          id: "form-checkout__installments",
          placeholder: "Cuotas",
        },        
        identificationType: {
          id: "form-checkout__identificationType",
          placeholder: "Tipo de documento",
        },
        identificationNumber: {
          id: "form-checkout__identificationNumber",
          placeholder: "Número del documento",
        },
        cardholderEmail: {
          id: "form-checkout__cardholderEmail",
          placeholder: "E-mail",
        },
      },
      callbacks: {
        onFormMounted: error => {
          if (error) return console.warn("Form Mounted handling error: ", error);
          console.log("Form mounted");
        },
        onSubmit: event => {
          event.preventDefault();

          const {
            paymentMethodId: payment_method_id,
            issuerId: issuer_id,
            cardholderEmail: email,
            amount,
            token,
            installments,
            identificationNumber,
            identificationType,
          } = cardForm.getCardFormData();

          fetch("/process_payment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              token,
              issuer_id,
              payment_method_id,
              transaction_amount: Number(amount),
              installments: Number(installments),
              description: "Descripción del producto",
              payer: {
                email,
                identification: {
                  type: identificationType,
                  number: identificationNumber,
                },
              },
            }),
          });
        },
        onFetching: (resource) => {
          console.log("Fetching resource: ", resource);

          // Animate progress bar
          const progressBar = document.querySelector(".progress-bar");
          progressBar.removeAttribute("value");

          return () => {
            progressBar.setAttribute("value", "0");
          };
        }
      },
    });
```
]]]

------------
----[mlm]----
[[[
```javascript

    const cardForm = mp.cardForm({
      amount: "100.5",
      iframe: true,
      form: {
        id: "form-checkout",
        cardNumber: {
          id: "form-checkout__cardNumber",
          placeholder: "Numero de tarjeta",
        },
        expirationDate: {
          id: "form-checkout__expirationDate",
          placeholder: "MM/YY",
        },
        securityCode: {
          id: "form-checkout__securityCode",
          placeholder: "Código de seguridad",
        },
        cardholderName: {
          id: "form-checkout__cardholderName",
          placeholder: "Titular de la tarjeta",
        },
        issuer: {
          id: "form-checkout__issuer",
          placeholder: "Banco emisor",
        },
        installments: {
          id: "form-checkout__installments",
          placeholder: "Cuotas",
        },        
        cardholderEmail: {
          id: "form-checkout__cardholderEmail",
          placeholder: "E-mail",
        },
      },
      callbacks: {
        onFormMounted: error => {
          if (error) return console.warn("Form Mounted handling error: ", error);
          console.log("Form mounted");
        },
        onSubmit: event => {
          event.preventDefault();

          const {
            paymentMethodId: payment_method_id,
            issuerId: issuer_id,
            cardholderEmail: email,
            amount,
            token,
            installments,
            identificationNumber,
            identificationType,
          } = cardForm.getCardFormData();

          fetch("/process_payment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              token,
              issuer_id,
              payment_method_id,
              transaction_amount: Number(amount),
              installments: Number(installments),
              description: "Descripción del producto",
              payer: {
                email,
                identification: {
                  type: identificationType,
                  number: identificationNumber,
                },
              },
            }),
          });
        },
        onFetching: (resource) => {
          console.log("Fetching resource: ", resource);

          // Animate progress bar
          const progressBar = document.querySelector(".progress-bar");
          progressBar.removeAttribute("value");

          return () => {
            progressBar.setAttribute("value", "0");
          };
        }
      },
    });
```
]]]

------------

> NOTE
>
> Importante
>
> Si necesitas añadir o modificar alguna lógica en el flujo de los métodos de Javascript consulta la documentación [Integración vía Métodos Core](/developers/es/docs/checkout-api/integration-configuration/card/integrate-via-core-methods)

## Enviar pago

Para continuar con el proceso de integración de pagos con tarjeta, es necesario que el backend reciba la información del formulario con el token generado y los datos completos como se indicó en las anteriores etapas.

En el ejemplo de la sección previa, enviamos todos los datos necesarios para la generación del pago al endpoint `process_payment` del backend.

Con toda la información recopilada en el backend, envía un **POST** con los atributos requeridos, prestando atención a los parámetros `token`, `transaction_amount`, `installments`, `payment_method_id` y `payer.email` al endpoint [/v1/payments](/developers/es/reference/payments/_payments/post) y ejecuta la solicitud o, si lo prefieres, envía la información utilizando nuestros SDKs.

> NOTE
>
> Importante
>
> Para aumentar las posibilidades de aprobación del pago y evitar que el análisis antifraude no autorice la transacción, recomendamos introducir toda la información posible sobre el comprador al realizar la solicitud. Para más detalles sobre cómo aumentar las posibilidades de aprobación, consulta [Cómo mejorar la aprobación de los pagos.](/developers/es/docs/checkout-api/how-tos/improve-payment-approval)
> <br><br>
> Además, deberás enviar obligatoriamente el atributo `X-Idempotency-Key` para asegurar la ejecución y reejecución de las solicitudes sin el riesgo de realizar la misma acción más de una vez por error. Para hacerlo, actualiza [nuestra biblioteca de SDKs](/developers/es/docs/sdks-library/landing), o bien genera un UUID V4 y envíalo en los _header_ de tus llamados.

[[[
```php
<?php
  use MercadoPago\Client\Payment\PaymentClient;
  use MercadoPago\Client\Common\RequestOptions;
  use MercadoPago\MercadoPagoConfig;

  MercadoPagoConfig::setAccessToken("YOUR_ACCESS_TOKEN");

  $client = new PaymentClient();
  $request_options = new RequestOptions();
  $request_options->setCustomHeaders(["X-Idempotency-Key: <SOME_UNIQUE_VALUE>"]);

  $payment = $client->create([
    "transaction_amount" => (float) $_POST['<TRANSACTION_AMOUNT>'],
    "token" => $_POST['<TOKEN>'],
    "description" => $_POST['<DESCRIPTION>'],
    "installments" => $_POST['<INSTALLMENTS>'],
    "payment_method_id" => $_POST['<PAYMENT_METHOD_ID'],
    "issuer_id" => $_POST['<ISSUER>'],
    "payer" => [
      "email" => $_POST['<EMAIL>'],
      "identification" => [
        "type" => $_POST['<IDENTIFICATION_TYPE'],
        "number" => $_POST['<NUMBER>']
      ]
    ]
  ], $request_options);
  echo implode($payment);
?>
```
```node
import { Payment, MercadoPagoConfig } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: '<ACCESS_TOKEN>' });

payment.create({
    body: { 
        transaction_amount: req.transaction_amount,
        token: req.token,
        description: req.description,
        installments: req.installments,
        payment_method_id: req.paymentMethodId,
        issuer_id: req.issuer,
            payer: {
            email: req.email,
            identification: {
        type: req.identificationType,
        number: req.number
    }}},
    requestOptions: { idempotencyKey: '<SOME_UNIQUE_VALUE>' }
})
.then((result) => console.log(result))
.catch((error) => console.log(error));
```
```java
===
Encuentra el estado del pago en el campo _status_.
===

Map<String, String> customHeaders = new HashMap<>();
    customHeaders.put("x-idempotency-key", <SOME_UNIQUE_VALUE>);
 
MPRequestOptions requestOptions = MPRequestOptions.builder()
    .customHeaders(customHeaders)
    .build();

MercadoPagoConfig.setAccessToken("YOUR_ACCESS_TOKEN");

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

client.create(paymentCreateRequest, requestOptions);
 
```
```ruby
===
Encuentra el estado del pago en el campo _status_.
===
require 'mercadopago'
sdk = Mercadopago::SDK.new('YOUR_ACCESS_TOKEN')

custom_headers = {
 'x-idempotency-key': '<SOME_UNIQUE_VALUE>'
}

custom_request_options = Mercadopago::RequestOptions.new(custom_headers: custom_headers)

payment_data = {
 transaction_amount: params[:transactionAmount].to_f,
 token: params[:token],
 description: params[:description],
 installments: params[:installments].to_i,
 payment_method_id: params[:paymentMethodId],
 payer: {
   email: params[:email],
   identification: {
     type: params[:identificationType],
     number: params[:identificationNumber]
   }
 }
}
 
payment_response = sdk.payment.create(payment_data, custom_request_options)
payment = payment_response[:response]
 
puts payment
 
```
```csharp
===
Encuentra el estado del pago en el campo _status_.
===
using System;
using MercadoPago.Client.Common;
using MercadoPago.Client.Payment;
using MercadoPago.Config;
using MercadoPago.Resource.Payment;
 
MercadoPagoConfig.AccessToken = "YOUR_ACCESS_TOKEN";

var requestOptions = new RequestOptions();
requestOptions.CustomHeaders.Add("x-idempotency-key", "<SOME_UNIQUE_VALUE>");
 
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
       {
           Type = Request["identificationType"],
           Number = Request["identificationNumber"],
       },
   },
};
 
var client = new PaymentClient();
Payment payment = await client.CreateAsync(paymentRequest, requestOptions);
 
Console.WriteLine(payment.Status);
 
```
```python
===
Encuentra el estado del pago en el campo _status_.
===
import mercadopago
sdk = mercadopago.SDK("ACCESS_TOKEN")

request_options = mercadopago.config.RequestOptions()
request_options.custom_headers = {
    'x-idempotency-key': '<SOME_UNIQUE_VALUE>'
}

payment_data = {
   "transaction_amount": float(request.POST.get("transaction_amount")),
   "token": request.POST.get("token"),
   "description": request.POST.get("description"),
   "installments": int(request.POST.get("installments")),
   "payment_method_id": request.POST.get("payment_method_id"),
   "payer": {
       "email": request.POST.get("email"),
       "identification": {
           "type": request.POST.get("type"), 
           "number": request.POST.get("number")
       }
   }
}
 
payment_response = sdk.payment().create(payment_data, request_options)
payment = payment_response["response"]
 
print(payment)
```
```go
accessToken := "{{ACCESS_TOKEN}}"


cfg, err := config.New(accessToken)
if err != nil {
   fmt.Println(err)
   return
}


client := payment.NewClient(cfg)


request := payment.Request{
   TransactionAmount: <transaction_amount>,
   Token: <token>,
   Description: <description>,
   PaymentMethodID:   <paymentMethodId>,
   Payer: &payment.PayerRequest{
      Email: <email>,
      Identification: &payment.IdentificationRequest{
         Type: <type>,
         Number: <number>,
      },
   },
}


resource, err := client.Create(context.Background(), request)
if err != nil {
   fmt.Println(err)
}


fmt.Println(resource)
```
```curl
===
Encuentra el estado del pago en el campo _status_.
===
 
curl -X POST \
   -H 'accept: application/json' \
   -H 'content-type: application/json' \
   -H 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
   -H 'X-Idempotency-Key: SOME_UNIQUE_VALUE' \
   'https://api.mercadopago.com/v1/payments' \
   -d '{
         "transaction_amount": 100,
         "token": "ff8080814c11e237014c1ff593b57b4d",
         "description": "Blue shirt",
         "installments": 1,
         "payment_method_id": "visa",
         "issuer_id": 310,
         "payer": {
           "email": "PAYER_EMAIL"
         }
   }'
 
```
]]]


La respuesta devolverá el siguiente resultado

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

> WARNING
>
> Atención
>
> Al crear un pago es posible recibir 3 estados diferentes: "Pendiente", "Rechazado" y "Aprobado". Para mantenerse al día con las actualizaciones, debe configurar su sistema para recibir notificaciones de pago y otras actualizaciones de estado. Consulte [Notificaciones](/developers/es/docs/checkout-api/additional-content/your-integrations/notifications) para obtener más detalles.

## Ejemplo de código

----[mlb]----
> GIT
>
> Checkout Transparente
>
> Para ejemplos completos de código, consulta nuestros [ejemplos completos de integración.](http://github.com/mercadopago/card-payment-sample/tree/1.0.0)
------------

----[mla, mlm, mpe, mco, mlu, mlc]----
> GIT
>
> Checkout API
>
> Para ejemplos completos de código, consulta nuestros [ejemplos completos de integración.](http://github.com/mercadopago/card-payment-sample/tree/1.0.0)
------------