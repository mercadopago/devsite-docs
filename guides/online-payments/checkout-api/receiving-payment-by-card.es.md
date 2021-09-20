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

![API-integration-flowchart](/images/api/api-integration-flowchart-cardform-es.png)

> Si quieres realizar un flujo personalizado del pago, te compartimos todos los [métodos disponibles para integrar de forma avanzada](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/receiving-payment-by-card-core-methods).

----[mlb]----
Al usar nuestro Checkout Transparente de Mercado Pago, es importante tener en cuenta dos instancias: la de la captura de datos y la del envío de confirmación del pago.
------------
----[mla, mlm, mpe, mco, mlu, mlc]----
Al usar nuestro Checkout API de Mercado Pago, es importante tener en cuenta dos instancias: la de la captura de datos y la del envío de confirmación del pago.
------------

1. Primero, necesitas un frontend para que recolecte los datos de la tarjeta y que genere un token de seguridad con la información para poder crear el pago.
2. Segundo, un backend que tome el token generado y los datos del pago, como por ejemplo monto e ítem, pueda confirmar y efectuar el pago.

Tanto para el frontend como para el backend, recomendamos utilizar [nuestras librerías](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/previous-requirements#bookmark_utiliza_nuestras_librerías_siempre) para poder recolectar los datos sensibles de tus usuarios de manera segura.

> Puedes obtener más información en las [Referencias de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference).

<br>

> CLIENT_SIDE
>
> h2
>
> Captura los datos de la tarjeta

Para crear un pago es necesario hacer la captura de los datos de la tarjeta a través del navegador del comprador. Por cuestiones de seguridad, **es muy importante que los datos nunca lleguen a tus servidores**.

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Incluye y configura la librería MercadoPago.js

**Usa nuestra librería oficial para acceder a la API de Mercado Pago** desde tu frontend para recolectar los datos de forma segura y configura tu [clave pública]([FAKER][CREDENTIALS][URL]) de la siguiente manera:

```html
<body>
   <!-- Add step #2 -->
   <script src="https://sdk.mercadopago.com/js/v2"></script>
   <script>
       const mp = new MercadoPago('YOUR_PUBLIC_KEY');
       // Add step #3
   </script>
</body>
```

La información de la tarjeta será convertida en un token para que envíes los datos a tus servidores de modo seguro.

> Si aún no tienes cuenta para ver tus credenciales, [regístrate](https://www.mercadopago[FAKER][URL][DOMAIN]/registration-mp).

> Esta documentación utiliza la nueva versión de la librería. Para ver la versión anterior, ve a la [sección de Integrar pagos con tarjeta con MercadoPago.js V1](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/v1/receiving-payment-by-card).

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Agrega el formulario de pago

Para capturar los datos de la tarjeta, primero tienes que brindar un formulario para cargar toda la información.

Con la funcionalidad CardForm de la librería MercadoPago.js V2, puedes obtener y validar todo los datos necesarios como identificar el tipo y nombre del medio de pago, el banco emisor, la cantidad de cuotas y más.

CardForm te permite tener una implementación segura y una correcta tokenización de la información de la tarjeta.

Utiliza el siguiente formulario y agrega los estilos que desees.

```html
<!-- Step #2 -->
<form id="form-checkout" >
   <input type="text" name="cardNumber" id="form-checkout__cardNumber" />
   <input type="text" name="cardExpirationMonth" id="form-checkout__cardExpirationMonth" />
   <input type="text" name="cardExpirationYear" id="form-checkout__cardExpirationYear" />
   <input type="text" name="cardholderName" id="form-checkout__cardholderName"/>
   <input type="email" name="cardholderEmail" id="form-checkout__cardholderEmail"/>
   <input type="text" name="securityCode" id="form-checkout__securityCode" />
   <select name="issuer" id="form-checkout__issuer"></select>
   <select name="identificationType" id="form-checkout__identificationType"></select>
   <input type="text" name="identificationNumber" id="form-checkout__identificationNumber"/>
   <select name="installments" id="form-checkout__installments"></select>
   <button type="submit" id="form-checkout__submit">Pagar</button>
   <progress value="0" class="progress-bar">Cargando...</progress>
</form>
```

> GIT
> 
> Referencia técnica
> 
> Encuentra información sobre los distintos atributos en las [referencias técnicas](https://github.com/mercadopago/sdk-js).

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Integra el formulario con la librería MercadoPago.js

Ahora, para inicializar el CardForm, tienes que relacionar el ID de cada campo del formulario con los atributos correspondientes. La librería va a ser la responsable de completar, obtener y validar todos los datos necesarios al momento de confirmar el pago.

```javascript
// Step #3
const cardForm = mp.cardForm({
  amount: "100.5",
  autoMount: true,
  form: {
    id: "form-checkout",
    cardholderName: {
      id: "form-checkout__cardholderName",
      placeholder: "Titular de la tarjeta",
    },
    cardholderEmail: {
      id: "form-checkout__cardholderEmail",
      placeholder: "E-mail",
    },
    cardNumber: {
      id: "form-checkout__cardNumber",
      placeholder: "Número de la tarjeta",
    },
    cardExpirationMonth: {
      id: "form-checkout__cardExpirationMonth",
      placeholder: "Mes de vencimiento",
    },
    cardExpirationYear: {
      id: "form-checkout__cardExpirationYear",
      placeholder: "Año de vencimiento",
    },
    securityCode: {
      id: "form-checkout__securityCode",
      placeholder: "Código de seguridad",
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
      placeholder: "Número de documento",
    },
    issuer: {
      id: "form-checkout__issuer",
      placeholder: "Banco emisor",
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
    },
  },
});
```

La opción de callbacks acepta diferentes funciones que son activadas en diversos momentos del flujo. 

> GIT
> 
> Referencia técnica
> 
> Conoce más información sobre los callbacks en las [referencias técnicas](https://github.com/mercadopago/sdk-js).

Antes de enviar el formulario, generamos un token con la representación segura de la tarjeta y lo guardaremos en un `input` oculto que llamaremos `MPHiddenInputToken` para luego enviar el formulario a tus servidores.

> WARNING
>
> Importante
>
> Ten en cuenta que el token tiene una validez de 7 días y solo se pueda usar una vez.

<br>
<span></span>

> SERVER_SIDE
>
> h2
>
> Envía el pago a Mercado Pago

Para continuar el proceso de pago hacia Mercado Pago, es necesario que tu backend sepa recibir la información del formulario con el token generado y los datos completados.

Según el ejemplo dado, tu backend debería disponibilizar un endpoint `/process_payment`, para recibir allí todos los datos luego de realizar la acción submit.

Ya estando en tu backend con toda la información recolectada, es momento de enviar la solicitud a Mercado Pago a través de nuestras APIs. Los campos mínimos requeridos a enviar son: `token`, `transaction_amount`, `installments`, `payment_method_id` y el `payer.email`.

Ten en cuenta que para que este paso funcione es necesario que configures tu [clave privada]([FAKER][CREDENTIALS][URL]) y que para interactuar con nuestras APIs recomendamos utilizar la [SDK oficial de Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/previous-requirements#bookmark__instala_la_sdk_de_mercado_pago).

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

Te recomendamos usar los [mensajes de respuesta](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/handling-responses) y utilizar la comunicación sugerida en cada uno de los casos.

> NOTE
>
> Nota
>
> Evita pagos rechazados con nuestras [recomendaciones para mejorar la aprobación de tus pagos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/account/payment-rejections).

## Recibe notificaciones de pago

Por último, es importante que estés siempre informado sobre la creación de nuevos pagos y las actualizaciones de sus estados. Por ejemplo si fueron aprobados, rechazados o si se encuentran pendientes.

[Configura notificaciones webhooks](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/notifications/webhooks) o [notificaciones IPN](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/notifications/ipn).

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
> Si quieres implementar tu servidor con alguna otra tecnología, te dejamos un [ejemplo completo del formulario de pago](https://github.com/mercadopago/card-payment-sample/tree/master/client) en GitHub para que puedas descargar.

---
### Próximos pasos

> LEFT_BUTTON_REQUIRED_ES
>
> Prueba tu integración
>
> Revisa que esté todo bien en tu integración con los usuarios de prueba.
>
> [Prueba tu integración](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/testing)

----[mlc]----
> RIGHT_BUTTON_RECOMMENDED_ES
>
> Prueba tu integración
>
> Revisa que esté todo bien en tu integración con los usuarios de prueba.
>
> [Pruebas](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/testing)
------------

----[mla, mlb, mlm, mlu, mpe, mco]----
> RIGHT_BUTTON_RECOMMENDED_ES
>
> Integra otros medios de pago
>
> Conoce todas las opciones de pago disponibles y cómo ofrecerlas.
>
> [Integra otros medios de pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/other-payment-ways)
------------