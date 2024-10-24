# Integración avanzada

La integración avanzada de Fintoc te permitirá ofrecer este medio de pago en checkouts de tiendas online a las que se accede por medio de navegadores web. 

Mediante nuestros SDKs, podrás utilizar distintos métodos que te permitirán controlar la experiencia de pago de los usuarios dentro de la misma tienda, de manera transparente y adaptable a tus necesidades.

En esta documentación te guiaremos en el paso a paso necesario para realizar esta integración y, además, te ofreceremos un flujo de prueba para que puedas comprobar que la misma fue exitosa.

## Importar MercadoPago.js

Para integrar Fintoc e inicializar posteriormente el *widget*, primero es necesario capturar los datos necesarios para procesar el pago incluyendo la biblioteca MercadoPago.js en tu proyecto. Utiliza el siguiente código para hacerlo vía `html` o `bash`.

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

Las [credenciales](/developers/es/docs/checkout-api/additional-content/your-integrations/credentials) son claves únicas con las que identificamos una integración en tu cuenta. Se utilizan para capturar pagos en tiendas online y otras aplicaciones de forma segura.

Utiliza el código debajo para configurar las credenciales en tu integración, sustituyendo `"YOUR_PUBLIC_KEY"` por la clave pública (*Public Key*) de producción asignada a tu aplicación.

```javascript
const mp = new MercadoPago('YOUR_PUBLIC_KEY');

```

## Crear pago

Para iniciar el proceso de implementación de Fintoc, es necesario crear un pago. El mismo devolverá, dentro del nodo `data` y entre otros parámetros, el campo `external_reference_id`, cuyo valor representa un token que debes almacenar para utilizarlo en la inicialización del *widget* de Fintoc en tu frontend.

Para esto, envía un **POST** con los **atributos obligatorios requeridos** al endpoint [/v1/payments](/developers/es/reference/payments/_payments/post) y ejecuta la solicitud o, si lo prefieres, envía la información utilizando nuestros SDKs.

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
MercadoPagoConfig.AccessToken = "YOUR_ACCESS_TOKEN"

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
| `callback_url` | string | URL a la cual Mercado Pago hace la redirección final. | https://www.your-site.com |
| `point_of_interaction.type` | string | Información de la aplicación que procesa el pago. Para el atributo `type`, debe ser siempre `CHECKOUT` | CHECKOUT |
| `point_of_interaction.sub_type` | string | Identificador secundario del tipo de pago. Para el atributo `sub_type`, debe ser siempre `INTER_PSP` | INTER_PSP |

A continuación, puedes ver un ejemplo de respuesta a esta solicitud, en la que se omitió información para mostrar los campos más relevantes.

> WARNING
>
> Importante
>
> Recuerda almacenar el valor del campo `external_reference_id` para utilizarlo en la inicialización del *widget*. Ten en cuenta que **es válido sólo por 10 minutos**. Pasado ese tiempo, caducará y deberás crear otro pago.

```json
{
  ...
    "id":"<PAYMENT_ID>",
  "payment_method_id": "fintoc",
  "payment_method": {
    "data": {
      "external_reference_id": "<WIDGET_TOKEN>",
    }
   ...
  }
}
```

> NOTE
>
> Nota
>
> En caso de recibir algún error al crear el pago, consulta la lista de errores posibles en nuestra [Referencia de API](/developers/es/reference/payments/_payments/post).


## Inicializar Fintoc

Para finalizar el pago, es necesario inicializar el *iframe* e implementar el *widget* de Fintoc en el frontend. Para eso, utiliza el método `mp.fintoc()`, que disponibilizamos dentro de nuestros SDKs, y que te permitirá inicializar los recursos existentes.

```javascript
 const fintoc = mp.fintoc();

```

Luego, abre el *widget* de pago de Fintoc utilizando el metodo `mp.fintoc.open()` y enviando los parámetros necesarios, como se indica a continuación.

```javascript
               async function openFintoc() {
                  try {
                    await fintoc.open({
                      institutionId: document.querySelector('#fintoc-institutionId').value,
                      username: document.querySelector('#fintoc-username').value,
                      widgetToken: <EXTERNAL_REFERENCE_ID>
                      onSuccess,
                      onExit,
                      onEvent,
                    })
                  } catch(e) {
                    console.error(e)
                  }
                }

```

| Atributo | Tipo | Descripción | Requerido/opcional |
|---|---|---|---|
| `institutionId` | string | Identificador de la [institución financiera](https://docs.fintoc.com/docs/payment-initiation-countries-and-institutions). Cuando es incluido, se preselecciona la institución que aparecerá en la apertura del *widget*. Por ejemplo,  el valor `cl_banco_de_chile` indicará que el *widget* se abra con Banco Estado. | Opcional |
| `username` | string | Identifica la cuenta del usuario. Si es completado, asegura que al momento de seleccionar el banco con el que se realizará la transacción, el usuario ya esté identificado y sólo tenga que proporcionar su contraseña. | Opcional |
| `widgetToken` | string | Token creado en el backend al momento de crear un pago. Es el valor recibido para el parámetro `external_reference_id`, que inicializa y configura el *widget*. | Requerido  |
| `onSuccess` | function | *Callback* que será llamado luego de una creación exitosa del enlace. | Requerido |
| `onExit` | function | *Callback* que será llamado cuando de que el usuario cierre el enlace antes de tiempo. | Requerido |
| `onEvent` | function | *Callback* que será llamado cada vez que el usuario ejecute alguna acción en el *widget*.  | Requerido |

> WARNING
>
> Importante
> 
> Los **reembolsos** de pagos efectuados por medio de Fintoc podrán solicitarse a través de la sección **"Actividades"** dentro del [Panel de Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/home) del vendedor. Pueden tomar **hasta 72 horas en ser procesados**. Ten en cuenta que, en caso de solicitarlos después de las 14:00 hs., el plazo del procesamiento se contará partir del día siguiente. 

## Cerrar y eliminar Fintoc

Si fuera necesario, es posible cerrar y eliminar el *iframe* de Fintoc previamente inicializado utilizando estos dos métodos. 

### - Cerrar Fintoc
Utiliza el método `mp.fintoc.close()` para cerrar el iframe sin destruir el 
*widget*, ocultándolo para el usuario.

```javascript
function closeFintoc() {
      fintoc.close()
}
```

### - Eliminar Fintoc
Utiliza el método `mp.fintoc.destroy()` cuando necesites eliminar directamente la instancia de tu aplicación.

```javascript
function destroyFintoc() {
      fintoc.destroy()
}

```

En caso de requerir volver a inicializarla, puedes hacerlo llamando nuevamente al método `mp.fintoc.open()`.

## Probar integración avanzada

Prueba el funcionamiento de tu integración y del procesamiento de pagos con Fintoc utilizando un ambiente sandbox preestablecido y tus **credenciales de prueba de Mercado Pago**. 

Para inicializar este ambiente, instancia el *widget* de Fintoc agregando el parámetro `sandbox: true` al método `mp.fintoc`:

```javascript
 const fintoc = mp.fintoc({sandbox: true});
```

Una vez instanciado el *scope* de pruebas de Fintoc, continúa con la apertura del *widget*, como es descrito en la etapa [Inicializar Fintoc](/developers/es/docs/checkout-api/integration-configuration/fintoc/advanced-integration#bookmark_inicializar_fintoc). 

```javascript
async function openFintoc() {
                  try {
                    await fintoc.open({...})
                  } catch(e) {
                    console.error(e)
                  }


```

Puedes probar  distintos escenarios de pago a partir de los **últimos dos dígitos enviados en el campo `amount`**, que te permitirán definir casos de éxito o error. Sigue las indicaciones de la tabla a continuación para cada caso:

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

