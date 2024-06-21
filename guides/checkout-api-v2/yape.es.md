# Yape

Yape es una aplicación móvil que simplifica el proceso de transferencias bancarias. Los usuarios pueden realizar transacciones de manera fácil y rápida directamente desde su celular, después de asociar su tarjeta de débito MultiRed a la aplicación.

Para realizar una transacción con Yape, el proceso comienza con la creación de un token, necesario para la etapa de creación del pago. Este token se puede generar de dos formas: directamente a través de una API o utilizando el SDK JS de Mercado Pago.

En esta documentación encontrarás todas las etapas necesarias para realizar la configuración y las pruebas de integración con Yape de forma completa.

## Integración vía SDK javascript

Con el Checkout Transparente, es posible ofrecer pagos a través de Yape utilizando el método de SDK JS para generar un token. Para ello, es necesario enviar los campos de celular y OTP (_One-time password_ encontrado en la aplicación Yape). Con el token, es posible crear un pago.

Para ofrecer pagos con Yape, sigue los siguientes pasos.

## Importar MercadoPago.js

La primera etapa del proceso de integración de pagos con Yape es la captura de los datos de OTP (_One-time password_) y celular para generar el token de pago. Esto se hace incluyendo la biblioteca MercadoPago.js en tu proyecto, seguida por el formulario para capturar los datos necesarios.

Utiliza el siguiente código para importar la biblioteca MercadoPago.js antes de añadir el formulario. Puedes importar la biblioteca vía HTML o vía Bash.

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

Las credenciales son claves únicas utilizadas para identificar una integración en tu cuenta. Se utilizan para capturar pagos en tiendas en línea y otras aplicaciones de forma segura.

Utiliza el código a continuación para configurar tu credencial, reemplazando el valor `YOUR_PUBLIC_KEY` por tu _Public key_ de producción disponible en la aplicación creada en [Tus integraciones](/developers/panel/app). Para más detalles, consulta [credenciales](/developers/pt/docs/checkout-api/additional-content/your-integrations/credentials).

```
const mp = new MercadoPago("YOUR_PUBLIC_KEY");
```

## Añadir formulario para captura de OTP y celular

Para generar un token Yape, es necesario completar el campo OTP, que representa el código generado en la aplicación Yape, y el número de celular. Para capturar estos datos, utiliza el siguiente HTML directamente en el proyecto:

```html
<form id="form-checkout">
  <div>
    <label for="payerPhone">Phone Number</label>
    <input id="form-checkout__payerPhone" name="payerPhone" type="text" />
  </div>
  <div>
    <label for="payerOTP">Phone Number</label>
    <input id="form-checkout__payerOTP" name="payerOTP" type="text" />
  </div>
  <div>
    <button onclick="handleYape()">Create YAPE</button>
  </div>
</form>
```

## Generar token

Después de completar la inclusión del formulario y obtener los datos necesarios, genera el token de Yape utilizando MercadoPago.js o a través de la API.

### Generar token vía MercadoPago.js

Utiliza el método `mp.yape.create` para generar un token de Yape, según el siguiente código:

```javascript
(async function handleYape () {
  const otp = docment.getElementById("checkout__payerOTP").value;
  const phoneNumber = docment.getElementById("checkout__payerPhone").value;
  const yapeOptions = {
    otp,
    phoneNumber
  };
  const yape = mp.yape(yapeOptions);
  const yapeToken = await yape.create();
  return yapeToken;
});
```

### Generar token vía API

Otra manera de generar el token es a través de una API. Para ello, utiliza el siguiente cURL, completando los parámetros según lo detallado en la tabla a continuación.

> NOTE
>
> Nota
>
> El token es de un solo uso por compra y debe ser enviado durante la etapa de creación del pago.

| Campo         | Tipo   | Descripción                                                                                                                    | Obligatorio/Opcional                              | Ejemplos/Posibles valores                 |
|---------------|--------|---------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------|-------------------------------------------|
| `phoneNumber` | number | Número de celular del pagador obtenido en la etapa Capturar los datos de celular y OTP.                                         | Obligatorio                                       | 123214234342                              |
| `otp`         | number | Código único y numérico de 6 dígitos encontrado en la app de Yape. Este campo se obtiene en la etapa Capturar los datos de celular y OTP. | Obligatorio                                       | 123344                                    |
| `requestId`   | string | Campo generado automáticamente por el SDK JS, no siendo necesario enviarlo. Debe enviarse solo en las integraciones realizadas vía cURL. | Obligatorio para integraciones realizadas vía cURL | aaaaaaaa-bbbb-1ccc-8ddd-eeeeeeeeeeee      |

```curl
curl --location 'https://api.mercadopago.com/platforms/pci/yape/v1/payment?public_key=<PUBLIC_KEY>' \
--header 'Content-Type: application/json' \
--data '{
   "phoneNumber": "123214234342",
   "otp": "123344",
   "requestId": "3127367123234234"
}
``` 

Ejemplo de la respuesta:

```json
{
    "live_mode": true,
    "luhn_validation": null,
    "require_esc": null,
    "cloned": false,
    "cardholder": {
        "identification": {
            "number": null,
            "type": null,
            "subtype": null
        },
        "name": "yape"
    },
    "security_code_id": 8069792005119486812,
    "security_code_length": 6,
    "card_number_length": 9,
    "expiration_month": 5,
    "expiration_year": 2024,
    "card_present_id": null,
    "card_id": null,
    "client_id": 7775327892346559,
    "present": null,
    "id": "45d013f72bf42717a1625f4c508fc20f",
    "card_number_id": "FFTSHQTOSJTXGFVFGJKCBAIVOUISTFZBDRTQWLYJ",
    "creation_date": null,
    "due_date": null,
    "last_modified_date": null,
    "product_id": null,
    "trust_level": "unknown",
    "public_key": "APP_USR-352587ca-674b-4ae4-a348-8583ab39b4ac",
    "site_id": "MPE",
    "status": "active",
    "transaction_id": null,
    "trunc_card_number": null,
    "used_date": null,
    "bin": "111111",
    "version": 0,
    "client_header": null,
    "first_six_digits": "111111",
    "last_four_digits": "6789"
}
```

## Crear pago

Después de añadir el formulario para capturar los datos de celular y OTP y generar el token, utiliza nuestra API de Pagos o uno de nuestros SDKs para enviar el token y crear el pago.

Para crear el pago, envía el token, proporcionado por el SDK JS de Mercado Pago, y los otros datos necesarios al endpoint [/v1/payments](/developers/es/reference/payments/_payments/post). Estos datos incluyen 'transaction_amount', 'installments', 'payment_method_id' (específicamente 'yape'), y la información del pagador. Si prefieres, también es posible hacer la solicitud utilizando uno de nuestros SDKs.

El detalle de cada uno de los parámetros mencionados anteriormente, así como sus respectivos valores posibles, está descrito en la tabla a continuación.

> WARNING
>
> Importante
>
> Para esta etapa, al hacer la solicitud a través de la API o SDKs, es necesario enviar tu clave privada (_access_token_ de producción).

| Campo               | Tipo    | Descripción                                                                                                                                       | Obligatorio/Opcional | Ejemplos/Posibles valores                |
|---------------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------|----------------------|------------------------------------------|
| `token`             | string  | Token proporcionado por el SDK JS de Mercado Pago. Para saber más, consulta la sección [Generar token](/developers/pt/docs/checkout-api/integration-configuration/yape#bookmark_generar_token).                                  | Obligatorio          | "f8ae90c6a83e71d698d5ea927f851034"        |
| `transaction_amount`| number  | Valor de la transacción. Existe un límite máximo de valor que puede ser de S/500, S/900 o S/2000, configurado directamente en la propia aplicación Yape. | Obligatorio          | 2000                                      |
| `description`       | string  | Título del producto.                                                                                                                              | Opcional             | "Video game"                             |
| `installments`      | number  | Cantidad de cuotas. Al tratarse de un pago con tarjeta de débito, la cantidad de cuotas será 1.                                                    | Obligatorio          | 1                                         |
| `payment_method_id` | string  | "yape" para todos los casos.                                                                                                                      | Obligatorio          | "yape"                                   |
| `payer.email`       | string  | Email del pagador.                                                                                                                                | Obligatorio          | "test_user_12345@testuser.com"            |


[[[
```java
MercadoPagoConfig.setAccessToken("ENV_ACCESS_TOKEN");

PaymentClient client = new PaymentClient();

PaymentCreateRequest createRequest =
    PaymentCreateRequest.builder()
        .description("Titulo del producto")
        .installments(1)
        .payer(PaymentPayerRequest.builder()
            .email("test_user_123@testuser.com")
            .build())
        .paymentMethodId("yape")
        .token("ff8080814c11e237014c1ff593b57b4d")
        .transactionAmount(new BigDecimal("5000"))
        .build();

client.create(createRequest);
```
```php
MercadoPagoConfig::setAccessToken("ENV_ACCESS_TOKEN");
    
$client = new PaymentClient();

$createRequest = [
  "description" => "Titulo del producto",
  "installments" => 1,
  "payer" => [
     "email" => "test_user_123@testuser.com",
  ],
  "payment_method_id" => "yape",
  "token" => "ff8080814c11e237014c1ff593b57b4d",
  "transaction_amount" => 5000,
];

    $client->create($createRequest, $request_options);
```
```node
const mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

var payment = req.body;

var payment_data = {
  token: '<ff8080814c11e237014c1ff593b57b4d>',
  transaction_amount: 5000,
  installments: 1,
  description: 'Titulo del producto',
  payment_method_id: 'yape',
  payer: {
    email: payment.email,
  }
};

var payment = mercadopago.payment.save(payment_data)
  .then(function (response) {
    res.status(response.status).json({
      status: response.body.status,
      status_detail: response.body.status_detail,
      id: respose.body.id,
    });
  })
  .catch(function (error) {
    res.status(error.status).send(error);
});

var payment_link = payment.transaction_details.external_resource_url;
```
```python
import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

request_options = mercadopago.config.RequestOptions()
request_options.custom_headers = {
\t'x-idempotency-key': '<SOME_UNIQUE_VALUE>'
}

payment_data = {
\t"description": "Titulo del producto",
\t"installments": 1,
\t"payer": {
\t\t"email": "test_user_123@testuser.com",
\t},
\t"payment_method_id": "yape",
\t"token": "ff8080814c11e237014c1ff593b57b4d",
\t"transaction_amount": 5000
}

payment_response = sdk.payment().create(payment_data, request_options)
payment = payment_response["response"]
```
```dotnet
MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN

var paymentPayerRequest = new PaymentPayerRequest
{
    Email = "test_user_123@testuser.com",
};

var request = new PaymentCreateRequest
{
    Description = "Titulo del producto",
    Installments = 1,
    Payer = paymentPayerRequest,
    PaymentMethodId = "yape",
    TransactionAmount = (decimal?)5000,
    Token = "ff8080814c11e237014c1ff593b57b4d"
};

var client = new PaymentClient();
Payment payment = await client.CreateAsync(request, requestOptions);
```
```ruby
require 'mercadopago'

sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

custom_headers = {
 'x-idempotency-key': '<SOME_UNIQUE_VALUE>'
}

custom_request_options = Mercadopago::RequestOptions.new(custom_headers: custom_headers)

payment_object = {
  description: 'Titulo del producto',
  installments: 1,
  payer: {
    email: 'test_user_123@testuser.com',
  },
  payment_method_id: 'yape',
  token: 'ff8080814c11e237014c1ff593b57b4d',
  transaction_amount: 5000
}

payment_response = sdk.payment.create(payment_request, custom_request_options)
payment_response[:response]
```
```go
package main

import (
	"context"
	"fmt"

	"github.com/mercadopago/sdk-go/pkg/config"
	"github.com/mercadopago/sdk-go/pkg/payment"
)

func main() {
	accessToken := "ENV_ACCESS_TOKEN"

	cfg, err := config.New(accessToken)
	if err != nil {
		fmt.Println(err)
		return
	}

	client := payment.NewClient(cfg)

	request := payment.Request{
		TransactionAmount: 5000,
            Description: "Titulo del producto",
		PaymentMethodID:   "yape",
		Payer: &payment.PayerRequest{
			Email: "test_user_123@testuser.com",
		},
		Token:        "ff8080814c11e237014c1ff593b57b4d",
		Installments: 1,
	}

	resource, err := client.Create(context.Background(), request)
	if err != nil {
		fmt.Println(err)
		return
	}

	fmt.Println(resource)
}
```
```curl
curl --location 'https://api.mercadopago.com/v1/payments' \
--header 'Authorization: Bearer <ACCESS_TOKEN>' \
--header 'Content-Type: application/json' \
--header 'x-idempotency-key: <IDEMPOTENCY_KEY>' \
--data-raw '{
   "token": "ff8080814c11e237014c1ff593b57b4d",
   "transaction_amount": 5000,
   "description": "Título del producto",
   "installments": 1,
   "payment_method_id": "yape",
   "payer": {
    "email": "test_user_1295925766@testuser.com"
   }
}'
```
]]]

Ejemplo de la respuesta. Ten en cuenta que algunas informaciones fueron omitidas para mostrar los campos más relevantes.

```json
{
    "id": 74581527758,
    ...
    "payment_method_id": "yape",
    "payment_type_id": "debit_card",
    "payment_method": {
        "id": "yape",
        "type": "debit_card",
        "issuer_id": "12759",
        "data": {
            "routing_data": {
                "merchant_account_id": "462540702"
            }
        }
    },
    "status": "approved",
    "status_detail": "accredited",
    ...
}
```

Por ser una transacción con tarjeta de débito, los estados de pago posibles son **aprobado** o **rechazado**. Además, se aplican las mismas [políticas de reembolso y cancelación](/developers/es/docs/checkout-api/payment-management/cancellations-and-refunds).

> NOTE
>
> Nota
>
> En caso de que ocurra algún error al generar un pago, consulta la lista de posibles errores en la sección [Referencia de API](/developers/es/reference/payments/_payments/post).

## Probar la integración

Es posible utilizar un OTP y números de celular de prueba para simular diferentes respuestas de pago en una transacción, sin la necesidad de usar números de celular y OTPs reales. Esto permite reproducir los estados mapeados en _payments_.

Para probar la integración, ingresa el OTP y uno de los números de celular listados en la tabla a continuación en el formulario de Checkout para simular escenarios de éxito y falla en la implementación.

> NOTE
>
> Nota
>
> Para probar la integración, recomendamos utilizar las credenciales de prueba. Para saber más, lee la [documentación](/developers/es/docs/checkout-api/additional-content/your-integrations/credentials).

| Celular       | OTP     | Estado previsto en `payments`                  |
|---------------|---------|-----------------------------------------------|
| 111111111     | 123456  | `approved`                                    |
| 111111112     | 123456  | `cc_rejected_call_for_authorize`              |
| 111111113     | 123456  | `cc_amount_rate_limit_exceeded`               |
| 111111114     | 123456  | `cc_unsupported_unsupported`                  |
| 111111115     | 123456  | `cc_rejected_card_type_not_allowed`           |
| 111111116     | 123456  | `cc_rejected_max_attempts`                    |
| 111111117     | 123456  | `cc_rejected_bad_filled_security_code`        |
| 111111118     | 123456  | `cc_rejected_form_error`                      |

Los procedimientos para generar el token de Yape y crear el pago son los mismos: es necesario proporcionar el número de celular y el OTP de la tabla anterior. Si tienes dudas sobre cómo generar el token Yape o crear el pago, consulta las documentaciones [Generar token de YAPE](/developers/es/docs/checkout-api/integration-configuration/yape#bookmark_generar_token) y [Crear pago](/developers/es/docs/checkout-api/integration-configuration/yape#bookmark_cear_pago) respectivamente.