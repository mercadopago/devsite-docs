# Integración simplificada

La integración simplificada de Fintoc te permitirá ofrecer este medio de pago en checkouts de tiendas online accedidos a través de navegadores web, o en su versión *mobile*. 

En dos simples pasos, podrás redirigir a los compradores a Mercado Pago, donde podrán realizar el pago mediante un *widget* de Fintoc ya configurado, sin esfuerzos de integración extra.

En esta documentación te guiaremos en el paso a paso necesario para realizar esta integración y, además, te ofreceremos un flujo de prueba para que puedas comprobar que la misma fue exitosa.

## Crear pago

Para iniciar el proceso de implementación de Fintoc, es necesario crear un pago. Envía un **POST** con los **atributos obligatorios requeridos, descritos en la tabla debajo**, al endpoint [/v1/payments](/developers/es/reference/payments/_payments/post) y ejecuta la solicitud o, si lo prefieres, envía la información utilizando nuestros SDKs.

> WARNING
>
> Importante
>
> Para esta etapa, al realizar la solicitud vía API o SDKs, es necesario que envíes tu Access Token de producción. Consulta más información en [Credenciales](/developers/es/docs/checkout-api/additional-content/your-integrations/credentials).

[[[
```php
MercadoPagoConfig::setAccessToken("YOUR_ACCESS_TOKEN");
    
$client = new PaymentClient();

$createRequest = [
  "description" => "Titulo del producto",
  "payer" => [
     "email" => "test_user_123@testuser.com",
  ],
  "payment_method_id" => "fintoc",
  "transaction_amount" => 5000,
  "callback_url" => "https://www.your-site.com",
  "point_of_interaction" => [
    "type" => "CHECKOUT",
    "sub_type" => "INTER_PSP"
  ]
];

    $client->create($createRequest, $request_options);

```
```node
const mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

var payment = req.body;

var payment_data = {
  transaction_amount: 5000,
  callback_url: 'https://www.your-site.com',
  point_of_interaction: {
   type: 'CHECKOUT',
   sub_type: 'INTER_PSP'
  },
  description: 'Titulo del producto',
  payment_method_id: 'fintoc',
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
```java
MercadoPagoConfig.setAccessToken("YOUR_ACCESS_TOKEN");

PaymentClient client = new PaymentClient();

PaymentCreateRequest createRequest =
    PaymentCreateRequest.builder()
        .description("Titulo del producto")
        .paymentMethodId("fintoc")
        .payer(PaymentPayerRequest.builder()
            .email("test_user_123@testuser.com")
            .build())
        .transactionAmount(new BigDecimal("5000"))
        .callbackUrl("https://www.your-site.com")
        .pointOfInteraction(PaymentPointOfInteractionRequest
        .builder().type("CHECKOUT").subType("INTER_PSP").build())
        .build();

client.create(createRequest);

```
```ruby
require 'mercadopago'

sdk = Mercadopago::SDK.new('YOUR_ACCESS_TOKEN')

custom_headers = {
 'x-idempotency-key': '<SOME_UNIQUE_VALUE>'
}

custom_request_options = Mercadopago::RequestOptions.new(custom_headers: custom_headers)

payment_object = {
  description: 'Titulo del producto',
  payer: {
    email: 'test_user_123@testuser.com',
  },
  payment_method_id: 'fintoc',
  transaction_amount: 5000,
  callback_url: 'https://www.your-site.com',
  point_of_interaction: {
   type: 'CHECKOUT',
   sub_type: 'INTER_PSP'
  }

}

payment_response = sdk.payment.create(payment_request, custom_request_options)
payment_response[:response]

```
```csharp
MercadoPagoConfig.AccessToken = "YOUR_ACCESS_TOKEN

var paymentPayerRequest = new PaymentPayerRequest
{
    Email = "test_user_123@testuser.com",
};

var paymentPointOfInteractionRequest = new PaymentPointOfInteraction
{
    Type = "CHECKOUT",
    SubType = "INTER_PSP"
};

var request = new PaymentCreateRequest
{
    Description = "Titulo del producto",
    Payer = paymentPayerRequest,
    PaymentMethodId = "fintoc",
    TransactionAmount = (decimal?)5000,
    CallbackUrl = "https://www.your-site.com",
    PointOfInteraction = paymentPointOfInteractionRequest
};

var client = new PaymentClient();
Payment payment = await client.CreateAsync(request, requestOptions);

```
```python
import mercadopago
sdk = mercadopago.SDK("YOUR_ACCESS_TOKEN")

request_options = mercadopago.config.RequestOptions()
request_options.custom_headers = {
'x-idempotency-key': '<SOME_UNIQUE_VALUE>'
}

payment_data = {
    "description": "Titulo del producto",
    "payer": {
        "email": "test_user_123@testuser.com",
    },
    "payment_method_id": "fintoc",
    "transaction_amount": 5000,
    "callback_url": "https://www.your-site.com",
    "point_of_interaction": {
        "type": "CHECKOUT",
        "sub_type": "INTER_PSP"
    },
}

payment_response = sdk.payment().create(payment_data, request_options)
payment = payment_response["response"]

```
```Go
package main

import (
	"context"
	"fmt"

	"github.com/mercadopago/sdk-go/pkg/config"
	"github.com/mercadopago/sdk-go/pkg/payment"
)

func main() {
	accessToken := "YOUR_ACCESS_TOKEN"

	cfg, err := config.New(accessToken)
	if err != nil {
		fmt.Println(err)
		return
	}

	client := payment.NewClient(cfg)

	request := payment.Request{
		TransactionAmount: 5000,
               Description: "Titulo del producto",
		PaymentMethodID:   "fintoc",
		Payer: &payment.PayerRequest{
			Email: "test_user_123@testuser.com",
		},
		CallbackURL: "https://www.your-site.com",
               PointOfInteraction: &payment.PointOfInteraction{
                Type: "CHECKOUT",
                SubType: "INTER_PSP",
         }
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
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer ' \
--data-raw '{
    "transaction_amount": 2000,
    "payment_method_id": "fintoc",
    "description": "description",
    "callback_url": "https://www.your-site.com",
    "point_of_interaction": {
      "type": "CHECKOUT",
      "sub_type": "INTER_PSP"
    },
    "payer": {
        "email": "mail@mail.com.br"
    }
}'

```
]]]

| Atributo | Tipo | Descripción | Ejemplo |
|---|---|---|---|
| `transaction_amount` | number | Monto de la transacción. | 2000 |
| `payment_method_id` | string | Identificador del medio de pago. **Siempre debe ser `fintoc`**. | fintoc |
| `description` | string | Descripción del motivo del pago.  | Producto1 |
| `callback_url` | string | URL a la cual Mercado Pago hace la redirección final en caso de éxito o error. | https://www.your-site.com |
| `point_of_interaction.type` | string | Información de la aplicación que procesa el pago. Para el atributo `type`, debe ser siempre `CHECKOUT` | CHECKOUT |
| `point_of_interaction.sub_type` | string | Identificador secundario del tipo de pago. Para el atributo `sub_type`, debe ser siempre `INTER_PSP` | INTER_PSP |

> WARNING
>
> Atención
>
> El pago con Fintoc creado es **válido sólo por 10 minutos**. Pasado ese tiempo, caducará y deberás crear otro.

En la respuesta a la creación del pago, dentro del nodo `data` y entre otros parámetros, encontrarás el campo `external_resource_url`, que contendrá la URL necesaria para redireccionar al comprador al sitio de Mercado Pago, para así finalizar la transacción.

A continuación, puedes ver un ejemplo de respuesta a esta solicitud, en la que se omitió información para mostrar los campos más relevantes.

```json
{
    "id": 82512912106,
    ...
    "payment_method_id": "fintoc",
    "payment_type_id": "bank_transfer",
    "payment_method": {
        "id": "fintoc",
        "type": "bank_transfer",
        "data": {
            "reference_id": "82512912106",
            "external_reference_id": "pi_2nGAKKSDoWG8ALR8_sec_Vfwt2rhBdjxYLhVpWupimnnp",
            "external_resource_url": "https://mercadopago.cl/banktransfer..."
        }
    },
    "status": "pending",
    ...
}

```

> NOTE
>
> Nota
>
> En caso de recibir algún error al crear el pago, consulta la lista de errores posibles en nuestra [Referencia de API](/developers/es/reference/payments/_payments/post).

## Realizar la redirección a Mercado Pago

Una vez creado el pago, es necesario redirigir al comprador a Mercado Pago, pantalla que ya estará preparada con el *widget* de Fintoc necesario para realizar el pago. 

Para esto, haz la redirección a la URL almacenada en el campo `external_resource_url`, que fue devuelta en la respuesta a la creación del pago. 

```json
{
   …
        "data": {
            "reference_id": "82512912106",
            "external_reference_id": "pi_2nGAKKSDoWG8ALR8_sec_Vfwt2rhBdjxYLhVpWupimnnp",
            "external_resource_url": "https://mercadopago.cl/banktransfer..."
        }
   …
}
```

> WARNING
>
> Atención
>
> Mercado Pago sólo lleva adelante la experiencia de pago del comprador, y no el tratamiento de éxito o error en su procesamiento. Una vez este se haya finalizado, se hará la redirección a la URL registrada como `callback_url` por el integrador, quien debe hacer ese tratamiento.

Si lo deseas, es posible **pre-seleccionar la institución financiera y el nombre del comprador**, para que, en su apertura, el *widget* ya cuente con estos datos y no deban ser completados manualmente. Para ello, agrega a la `external_resource_url` los *query params* indicados en el siguiente ejemplo:

```external_resource_url

https://www.mercadopago.cl/sandbox/payments/1319503224/bank_transfer/fintoc?caller_id=[…]b96-ab4bcf820559&username=JohnDoe&instutuion_id=banco_estado

```

| Query param | Descripción | Ejemplo |
|---|---|---|
| `username` | Parámetro utilizado para completar predeterminadamente el nombre del comprador. | `JohnDoe` |
| `institution_id` | Parámetro utilizado para completar predeterminadamente la institución financiera para realizar el pago. Consulta cuáles son las instituciones disponibles accediendo a la [documentación de Fintoc](https://docs.fintoc.com/docs/payment-initiation-countries-and-institutions). | `banco_estado` |

> WARNING
>
> Importante
> 
> Los **reembolsos** de pagos efectuados por medio de Fintoc podrán solicitarse a través de la sección **"Actividades"** dentro del [Panel de Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/home) del vendedor. Pueden tomar **hasta 72 horas en ser procesados**. Ten en cuenta que, en caso de solicitarlos después de las 14:00 hs., el plazo del procesamiento se contará partir del día siguiente. 


## Probar integración simplificada

Para probar el funcionamiento de tu integración y del procesamiento de pagos con Fintoc, debes [Crear un pago]() utilizando tus [credenciales de prueba de Mercado Pago](/developers/es/docs/checkout-api/additional-content/your-integrations/credentials#bookmark_obtener_credenciales:~:text=sistema%20o%20intruso.-,Credenciales%20de%20prueba,-Las%20credenciales%20de). 

Puedes probar distintos escenarios de pago a partir de los **últimos dos dígitos enviados en el campo `amount`**, que te permitirán definir casos de éxito o error. Sigue las indicaciones de la tabla a continuación para cada caso:

| Escenario | Últimos dígitos del campo `amount` | Ejemplo |
|---|---|---|
| Pago exitoso | 01 | `amount: 10701` |
| Pago exitoso | 02 | `amount: 10702` |
| Pago rechazado | 03 | `amount: 10703` |
| Pago exitoso | 04 | `amount: 10704` |
| Pago exitoso | 05 | `amount: 17505` |
| Pago exitoso | 06 | `amount: 3006` |
| Pago exitoso | 07 | `amount: 3007` |
| Pago exitoso | 08 | `amount: 3008` |
| Pago exitoso | 09 | `amount: 3009` |

Dentro del *iframe*, deberás **seleccionar un banco** para realizar la transacción de prueba, que puede ser cualquiera de los exhibidos.  Allí, deberás **iniciar sesión** simulando un usuario comprador con alguna de las **cuentas de prueba** que disponibilizamos a continuación:

| Usuario | Contraseña |
|---|---|
| 41614850-3 | jonsnow |
| 40427672-7 | jonsnow |
| 41579263-8 | jonsnow |

En la pantalla siguiente, todavía dentro del ambiente de pruebas, se te solitirá seleccionar una cuenta desde la cual será pagada esa transacción de prueba. **En ningún caso se trata de cuentas ni dinero reales**. 

De la cuenta seleccionada dependerá el código de autorización MFA que debe ser ingresado posteriormente, como mostramos a continuación.

| Número de cuenta | Tipo de MFA | Código |
|---|---|---|
| 813990168 | Dispositivo de seguridad | 000000 |
| 422159212 | Aplicación móvil | N/A |
| 5233137377 | Aplicación móvil | N/A |
| 170086177 | SMS | 0000 |
| 746326042 | Tarjeta de coordenadas | ['00', '00', '00'] |
| 4420245701 | Tarjeta de coordenadas | ['00', '00', '00'] |

Por último, luego de ingresar el código correcto, haz clic en el botón **Pagar** y valida el resultado del pago de acuerdo al monto ingresado para la transacción. 

De esta manera, habrás concluído tus pruebas con Fintoc y podrás comenzar a operar en un entorno productivo.

