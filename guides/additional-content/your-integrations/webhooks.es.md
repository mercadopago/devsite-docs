# Webhooks

Webhooks (también conocido como devolución de llamada web) es un método simple que facilita que una aplicación o sistema proporcione información en tiempo real cada vez que ocurre un evento, es decir, es una forma de recibir datos pasivamente entre dos sistemas a través de un `HTTP POST`.

Las notificaciones Webhooks se pueden configurar para una o más aplicaciones creadas en [Tus integraciones](/developers/panel/app). También es posible configurar una URL de prueba que, junto con las credenciales de prueba, permitirá verificar el correcto funcionamiento de las notificaciones previo a salir a producción.

Una vez configurada, la notificación Webhook será enviada cada vez que ocurra uno o más eventos registrados, evitando la necesidad de verificaciones constantes y, consecuentemente, previniendo la sobrecarga del sistema y la pérdida de datos en situaciones críticas.

Para configurar notificaciones Webhooks, puedes elegir una de las opciones a continuación. 

| Tipo de configuración | Descripción |
|---|---|
| [Configuración a través de Tus integraciones](/developers/es/docs/your-integrations/notifications/webhooks#configuracinatravsdetusintegraciones) | Permite configurar notificaciones para cada una de tus aplicaciones, identificar cuentas distintas en caso de ser necesario, y validar el origen de la notificación utilizando una firma secreta----[mla, mlb, mlu, mlc]---- (excepto en notificaciones para integraciones con Código QR)------------. |
| [Configuración durante la creación de pagos](/developers/es/docs/your-integrations/notifications/webhooks#configuracinalcrearpagos) | Permite la configuración específica de notificaciones para cada pago, preferencia u orden ----[mla]----No está permitida para integraciones con Mercado Pago Point ni Mercado Pago Delivery----------------[mlb, mlm]----No está permitida para integraciones con Mercado Pago Point------------. |

> WARNING
>
> Importante
>
> Las URLs configuradas durante la creación de un pago tendrán prioridad por sobre aquellas configuradas a través de Tus integraciones.

Una vez que las notificaciones sean configuradas, consulta las [acciones necesarias después de recibir una notificación](/developers/es/docs/your-integrations/notifications/webhooks#accionesnecesariasdespusderecibirlanotificacin) para validar que las mismas fueron debidamente recibidas.


## Configuración a través de Tus integraciones

Puedes configurar notificaciones para cada una de tus aplicaciones directamente desde [Tus integraciones](/developers/panel/app) de manera eficiente y segura. En este apartado, explicaremos cómo:
 1. Indicar las URLs de notificación y configurar eventos
 2. Validar el origen de una notificación
 3. Simular el recibimiento de una notificación

> WARNING
>
> Importante
>
> Este método de configuración no está disponible para integraciones con ----[mla, mlb, mlu, mlc]----Código QR ni------------ Suscripciones. Para configurar notificaciones con alguna de estas dos integraciones, utiliza el método [Configuración durante la creación de un pago](/developers/es/docs/your-integrations/notifications/webhooks#configuracinalcrearpagos).


### 1. Indicar URLs de notificación y configurar eventos

Para configurar notificaciones Webhooks mediante Tus integraciones, es necesario indicar las URLs a las que las mismas serán enviadas y especificar los eventos para los cuales deseas recibirlas. 

Para hacerlo, sigue el paso a paso a continuación:

1. Ingresa a [Tus Integraciones](/developers/panel/app) y selecciona la aplicación para la que deseas activar las notificaciones. En caso de que aún no hayas creado una aplicación, accede a la [documentación sobre el Panel del Desarrollador](/developers/es/docs/your-integrations/dashboard) y sigue las instrucciones para poder hacerlo.
2. En el menú de la izquierda, selecciona **Webhooks > Configurar notificaciones**, y configura las URLs que serán utilizadas para recibirlas. Recomendamos utilizar dos URLs diferentes para el modo de pruebas y el modo producción:
    * **URL modo pruebas:** proporciona una URL que permita probar el correcto funcionamiento de las notificaciones de la aplicación durante la etapa de desarrollo. La prueba de estas notificaciones deberá ser realizada exclusivamente con **credenciales de prueba del usuario productivo** con el que creaste la aplicación.
    * **URL modo producción:** proporciona una URL para recibir notificaciones con tu integración productiva. Estas notificaciones deberán ser configuradas con tus **credenciales productivas**.

![webhooks](/images/dashboard/webhooks-es.png)

> NOTE
>
> Nota
> 
> En caso de ser necesario identificar múltiples cuentas, agrega el parámetro `?cliente=(nombredelvendedor)` al final de la URL indicada para identificar a los vendedores.

3. Selecciona los **eventos** de los que recibirás notificaciones, que serán enviadas en formato `JSON` a través de un `HTTP POST` a la URL especificada anteriormente. Un evento puede ser cualquier actualización sobre el tópico reportado, incluyendo cambios de status o atributos. Consulta la tabla a continuación para ver qué eventos pueden ser configurados teniendo en cuenta la solución de Mercado Pago integrada y las particularidades de negocio.

| Eventos | Nombre en Tus integraciones | Tópico | Productos asociados |
|---|---|---|---|
| Creación y actualización de pagos | Pagos | `payment` | Checkout ----[mlb]----Transparente ----------------[mla, mlu, mlc, mlm, mco, mpe]----API------------<br>Checkout Pro<br>Checkout Bricks<br>Suscripciones<br>Wallet Connect |
| Pago recurrente de una suscripción (creación y actualización) | Planes y suscripciones | `subscription_authorized_payment` | Suscripciones |
| Vinculación de una suscripción (creación y actualización) | Planes y suscripciones | `subscription_preapproval` | Suscripciones |
| Vinculación de un plan de suscripción (creación y actualización) | Planes y suscripciones | `subscription_preapproval_plan` | Suscripciones |
| Vinculación y desvinculación de cuentas conectadas a través de OAuth. | Vinculación de aplicaciones | `mp-connect` | Todos los productos que hayan implementado OAuth |
| Transacciones de Wallet Connect | Wallet Connect | `wallet_connect` | Wallet Connect |
| Alertas de fraude luego del procesamiento de un pedido | Alertas de fraude | `stop_delivery_op_wh` | Checkout ----[mlb]----Transparente ----------------[mla, mlu, mlc, mlm, mco, mpe]----API------------<br>Checkout PRO |
| Creación de reclamos y reembolsos | Reclamos | `topic_claims_integration_wh` | Checkout ----[mlb]----Transparente ----------------[mla, mlu, mlc, mlm, mco, mpe]----API------------<br>Checkout Pro<br>Checkout Bricks<br>Suscripciones<br>----[mla, mlm, mlb]----Mercado Pago Point------------<br>Código QR<br>Wallet Connect |
| Recuperación y actualización información de tarjetas dentro de Mercado Pago. | Card Updater | `topic_card_id_wh` | Checkout Pro<br>Checkout ----[mlb]----Transparente ----------------[mla, mlu, mlc, mlm, mco, mpe]----API------------<br>Checkout Bricks |
| Creación, actualización o cierre de órdenes comerciales |  Órdenes comerciales | `topic_merchant_order_wh` | Checkout Pro<br>Código QR  |
| Apertura de contracargos, cambios de status y modificaciones referentes a las liberaciones de dinero.   |   Contracargos | `topic_chargebacks_wh`  | Checkout Pro<br>Checkout ----[mlb]----Transparente ----------------[mla, mlu, mlc, mlm, mco, mpe]----API------------ <br>Checkout Bricks |
----[mla]---- | Creación, actualización o cancelación de pedidos. | Delivery (proximity marketplace) | `delivery` | Mercado Pago Delivery | ------------
----[mla, mlm, mlb]---- | Finalización, cancelación o errores al procesar intenciones de pago de dispositivos Mercado Pago Point. | Integraciones Point | `point_integration_wh` | Mercado Pago Point | ------------

> WARNING
>
> Importante
>
> En caso de dudas sobre los tópicos a activar o los eventos que serán notificados, consulta la documentación [Información adicional sobre notificaciones](/developers/es/docs/your-integrations/notifications/additional-info). 

5. Por último, haz clic en **Guardar**. Esto generará una **clave secreta** exclusiva para la aplicación, que permitirá validar la autenticidad de las notificaciones recibidas, garantizando que hayan sido enviadas por Mercado Pago. Ten en cuenta que esta clave generada no tiene plazo de caducidad y su renovación periódica no es obligatoria, aunque sí recomendada. Para hacerlo, basta con cliquear en el botón **Restablecer**. 



----[mla, mlb, mlu, mlc]----
> WARNING
> 
> Importante
> 
> Las notificaciones de Código QR no pueden ser validadas utilizando la clave secreta, por eso deberás continuar directamente con la etapa “Simular el recibimiento de una notificación”. Para verificar el origen de las notificaciones de integraciones con Código QR, entra en contacto con [Soporte de Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/support/center).
------------

### 2. Validar origen de una notificación

Las notificaciones enviadas por Mercado Pago serán semejantes al siguiente ejemplo para un alerta del tópico `payment`:

```json
{
 "id": 12345,
 "live_mode": true,
 "type": "payment",
 "date_created": "2015-03-25T10:04:58.396-04:00",
 "user_id": 44444,
 "api_version": "v1",
 "action": "payment.created",
 "data": {
     "id": "999999999"
 }
}
```


Mercado Pago siempre incluirá la clave secreta en las notificaciones Webhooks que serán recibidas, lo que permitirá validar su autenticidad para proporcionar mayor seguridad y prevenir posibles fraudes. 

Esta clave será enviada en el _header_ `x-signature`, que será similar al ejemplo debajo.

```x-signature

`ts=1704908010,v1=618c85345248dd820d5fd456117c2ab2ef8eda45a0282ff693eac24131a5e839`

```

Para confirmar la validación, es necesario extraer la clave contenida en el *header* y compararla con la clave otorgada para tu aplicación en Tus integraciones. Esto podrá ser hecho siguiendo el paso a paso a continuación. Además, al final, disponibilizamos nuestros SDKs con ejemplos de códigos completos para facilitar el proceso.

1. Para extraer el _timestamp_ (`ts`) y la clave del _header_ `x-signature`, divide el contenido del _header_ por el carácter `,`, lo que resultará en una lista de elementos. El valor para el prefijo `ts` es el _timestamp_ (en milisegundos) de la notificación y `v1` es la clave encriptada. Siguiendo el ejemplo presentado anteriormente, `ts=1704908010` y `v1=618c85345248dd820d5fd456117c2ab2ef8eda45a0282ff693eac24131a5e839`.
2. Utilizando el _template_ a continuación, sustituye los parámetros con los datos recibidos en tu notificación.

```template
id:[data.id_url];request-id:[x-request-id_header];ts:[ts_header];
```

 * Los parámetros con el sufijo `_url` provienen de _query params_. Ejemplo: `[data.id_url]` se sustituirá por el valor correspondiente al ID del evento (`data.id`). Este query param puede ser hallado en la notificación recibida.
 * `[ts_header]` será el valor `ts` extraído del _header_ `x-signature`.
 * `[x-request-id_header]` deberá ser sustituido por el valor recibido en el _header_ `x-request-id`.

> WARNING
>
> Importante
> 
> Si alguno de los valores presentados en el modelo anterior no está presente en la notificación recibida, debes removerlo.

3. En [Tus integraciones](/developers/panel/app), selecciona la aplicación integrada, ve a la sección de Webhooks y revela la clave secreta generada.
4. Genera la contraclave para la validación. Para hacer esto, calcula un [HMAC](https://es.wikipedia.org/wiki/HMAC) con la función de `hash SHA256` en base hexadecimal, utilizando la **clave secreta** como clave y el _template_ con los valores como mensaje.

[[[
```php
$cyphedSignature = hash_hmac('sha256', $data, $key);
```
```node
const crypto = require('crypto');
const cyphedSignature = crypto
    .createHmac('sha256', secret)
    .update(signatureTemplateParsed)
    .digest('hex'); 
```
```java
String cyphedSignature = new HmacUtils("HmacSHA256", secret).hmacHex(signedTemplate);
```
```python
import hashlib, hmac, binascii

cyphedSignature = binascii.hexlify(hmac_sha256(secret.encode(), signedTemplate.encode()))
```
]]]

5. Finalmente, compara la clave generada con la clave extraída del _header_, asegurándote de que tengan una correspondencia exacta. Además, puedes usar el _timestamp_ extraído del _header_ para compararlo con un _timestamp_ generado en el momento de la recepción de la notificación, con el fin de establecer una tolerancia de demora en la recepción del mensaje.

A continuación, puedes ver ejemplos de código completo:

[[[
```php
<?php
// Obtain the x-signature value from the header
$xSignature = $_SERVER['HTTP_X_SIGNATURE'];
$xRequestId = $_SERVER['HTTP_X_REQUEST_ID'];

// Obtain Query params related to the request URL
$queryParams = $_GET;

// Extract the "data.id" from the query params
$dataID = isset($queryParams['data.id']) ? $queryParams['data.id'] : '';

// Separating the x-signature into parts
$parts = explode(',', $xSignature);

// Initializing variables to store ts and hash
$ts = null;
$hash = null;

// Iterate over the values to obtain ts and v1
foreach ($parts as $part) {
    // Split each part into key and value
    $keyValue = explode('=', $part, 2);
    if (count($keyValue) == 2) {
        $key = trim($keyValue[0]);
        $value = trim($keyValue[1]);
        if ($key === "ts") {
            $ts = $value;
        } elseif ($key === "v1") {
            $hash = $value;
        }
    }
}

// Obtain the secret key for the user/application from Mercadopago developers site
$secret = "your_secret_key_here";

// Generate the manifest string
$manifest = "id:$dataID;request-id:$xRequestId;ts:$ts;";

// Create an HMAC signature defining the hash type and the key as a byte array
$sha = hash_hmac('sha256', $manifest, $secret);
if ($sha === $hash) {
    // HMAC verification passed
    echo "HMAC verification passed";
} else {
    // HMAC verification failed
    echo "HMAC verification failed";
}
?>
```
```javascript
// Obtain the x-signature value from the header
const xSignature = headers['x-signature']; // Assuming headers is an object containing request headers
const xRequestId = headers['x-request-id']; // Assuming headers is an object containing request headers

// Obtain Query params related to the request URL
const urlParams = new URLSearchParams(window.location.search);
const dataID = urlParams.get('data.id');

// Separating the x-signature into parts
const parts = xSignature.split(',');

// Initializing variables to store ts and hash
let ts;
let hash;

// Iterate over the values to obtain ts and v1
parts.forEach(part => {
    // Split each part into key and value
    const [key, value] = part.split('=');
    if (key && value) {
        const trimmedKey = key.trim();
        const trimmedValue = value.trim();
        if (trimmedKey === 'ts') {
            ts = trimmedValue;
        } else if (trimmedKey === 'v1') {
            hash = trimmedValue;
        }
    }
});

// Obtain the secret key for the user/application from Mercadopago developers site
const secret = 'your_secret_key_here';

// Generate the manifest string
const manifest = `id:${dataID};request-id:${xRequestId};ts:${ts};`;

// Create an HMAC signature
const hmac = crypto.createHmac('sha256', secret);
hmac.update(manifest);

// Obtain the hash result as a hexadecimal string
const sha = hmac.digest('hex');

if (sha === hash) {
    // HMAC verification passed
    console.log("HMAC verification passed");
} else {
    // HMAC verification failed
    console.log("HMAC verification failed");
}
```
```python
import hashlib
import hmac
import urllib.parse

# Obtain the x-signature value from the header
xSignature = request.headers.get("x-signature")
xRequestId = request.headers.get("x-request-id")

# Obtain Query params related to the request URL
queryParams = urllib.parse.parse_qs(request.url.query)

# Extract the "data.id" from the query params
dataID = queryParams.get("data.id", [""])[0]

# Separating the x-signature into parts
parts = xSignature.split(",")

# Initializing variables to store ts and hash
ts = None
hash = None

# Iterate over the values to obtain ts and v1
for part in parts:
    # Split each part into key and value
    keyValue = part.split("=", 1)
    if len(keyValue) == 2:
        key = keyValue[0].strip()
        value = keyValue[1].strip()
        if key == "ts":
            ts = value
        elif key == "v1":
            hash = value

# Obtain the secret key for the user/application from Mercadopago developers site
secret = "your_secret_key_here"

# Generate the manifest string
manifest = f"id:{dataID};request-id:{xRequestId};ts:{ts};"

# Create an HMAC signature defining the hash type and the key as a byte array
hmac_obj = hmac.new(secret.encode(), msg=manifest.encode(), digestmod=hashlib.sha256)

# Obtain the hash result as a hexadecimal string
sha = hmac_obj.hexdigest()
if sha == hash:
    # HMAC verification passed
    print("HMAC verification passed")
else:
    # HMAC verification failed
    print("HMAC verification failed")
```
```go
import (
	"crypto/hmac"
	"crypto/sha256"
	"encoding/hex"
	"fmt"
	"net/http"
	"strings"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		// Obtain the x-signature value from the header
		xSignature := r.Header.Get("x-signature")
		xRequestId := r.Header.Get("x-request-id")

		// Obtain Query params related to the request URL
		queryParams := r.URL.Query()

		// Extract the "data.id" from the query params
		dataID := queryParams.Get("data.id")

		// Separating the x-signature into parts
		parts := strings.Split(xSignature, ",")

		// Initializing variables to store ts and hash
		var ts, hash string

		// Iterate over the values to obtain ts and v1
		for _, part := range parts {
			// Split each part into key and value
			keyValue := strings.SplitN(part, "=", 2)
			if len(keyValue) == 2 {
				key := strings.TrimSpace(keyValue[0])
				value := strings.TrimSpace(keyValue[1])
				if key == "ts" {
					ts = value
				} else if key == "v1" {
					hash = value
				}
			}
		}

		// Get secret key/token for specific user/application from Mercadopago developers site
		secret := "your_secret_key_here"

		// Generate the manifest string
		manifest := fmt.Sprintf("id:%v;request-id:%v;ts:%v;", dataID, xRequestId, ts)

		// Create an HMAC signature defining the hash type and the key as a byte array
		hmac := hmac.New(sha256.New, []byte(secret))
		hmac.Write([]byte(manifest))

		// Obtain the hash result as a hexadecimal string
		sha := hex.EncodeToString(hmac.Sum(nil))

if sha == hash {
    // HMAC verification passed
    fmt.Println("HMAC verification passed")
} else {
    // HMAC verification failed
    fmt.Println("HMAC verification failed")
}

	})
}
```
]]]

### 3. Simular la recepción de la notificación

Para garantizar que las notificaciones sean configuradas correctamente, es necesario simular su recepción. Para hacerlo, sigue el paso a paso a continuación.

1. Después de configurar las URLs y los Eventos, haz clic en **Guardar** para guardar la configuración.
2. Luego, haz clic en **Simular** para probar si la URL indicada está recibiendo las notificaciones correctamente.
3. En la pantalla de simulación, selecciona la URL que se va a probar, que puede ser **la URL de prueba o la de producción**.
4. A continuación, elige el **tipo de evento** e ingresa la **identificación** que se enviará en el cuerpo de la notificación.
5. Por último, haz clic en **Enviar prueba** para verificar la solicitud, la respuesta proporcionada por el servidor y la descripción del evento.


## Configuración al crear pagos

Durante el proceso de creación de pagos, preferencias u órdenes presenciales, es posible configurar la URL de notificación de forma más específica para cada pago utilizando el campo `notification_url` e implementando un receptor de notificaciones. 

----[mla]----
> WARNING
>
> Importante
> 
> No es posible configurar notificaciones para los tópicos `point_integration_wh` y `delivery` utilizando este método. Para activar estos tópicos, utiliza la [configuración a través de Tus integraciones](/developers/es/docs/your-integrations/notifications/webhooks#configuracinatravsdetusintegraciones).

------------

----[mlb, mlm]----

> WARNING
>
> Importante
>
> No es posible configurar notificaciones para el tópico `point_integration_wh` utilizando este método. Para activarlo, utiliza la [configuración a través de Tus integraciones](/developers/es/docs/your-integrations/notifications/webhooks#configuracinatravsdetusintegraciones).

------------

A continuación, explicamos cómo configurar notificaciones al crear un pago utilizando nuestros SDKs.

1. En el campo `notification_url`, indica la URL desde la que se recibirán las notificaciones, como se muestra a continuación. Para recibir exclusivamente Webhooks y no IPN, agrega el parámetro `source_news=webhooks` a la `notification_url`. Por ejemplo: `https://www.yourserver.com/notifications?source_news=webhooks`.


[[[
```php
<?php 
$client = new PaymentClient();

        $body = [
            'transaction_amount' => 100,
            'token' => 'token',
            'description' => 'description',
            'installments' => 1,
            'payment_method_id' => 'visa',
            'notification_url' => 'http://test.com',
            'payer' => array(
                'email' => 'test@test.com',
                'identification' => array(
                    'type' => 'CPF',
                    'number' => '19119119100'
                )
            )
        ];

$client->create(body);
?>
```
```node
const client = new MercadoPagoConfig({ accessToken: 'ACCESS_TOKEN' });
const payment = new Payment(client);

const body = {
 transaction_amount: '100',
  token: 'token',
  description: 'description',
  installments: 1,
  payment_method_id: 'visa',
  notification_url: 'http://test.com',
  payer: {
    email: 'test@test.com',
    identification: {
      type: 'CPF',
      number: '19119119100'
    }
  }
};

payment.create({ body: body, requestOptions: { idempotencyKey: '<SOME_UNIQUE_VALUE>' } }).then(console.log).catch(console.log);
```
```java
MercadoPago.SDK.setAccessToken("YOUR_ACCESS_TOKEN");


Payment payment = new Payment();
payment.setTransactionAmount(Float.valueOf(request.getParameter("transactionAmount")))
      .setToken(request.getParameter("token"))
      .setDescription(request.getParameter("description"))
      .setInstallments(Integer.valueOf(request.getParameter("installments")))
      .setPaymentMethodId(request.getParameter("paymentMethodId"))
      .setNotificationUrl("http://requestbin.fullcontact.com/1ogudgk1");


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
require 'mercadopago'
sdk = Mercadopago::SDK.new('YOUR_ACCESS_TOKEN')


payment_data = {
 transaction_amount: params[:transactionAmount].to_f,
 token: params[:token],
 description: params[:description],
 installments: params[:installments].to_i,
 payment_method_id: params[:paymentMethodId],
 notification_url: "http://requestbin.fullcontact.com/1ogudgk1",
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
   NotificationUrl = "http://requestbin.fullcontact.com/1ogudgk1",


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
import mercadopago
sdk = mercadopago.SDK("ACCESS_TOKEN")


payment_data = {
   "transaction_amount": float(request.POST.get("transaction_amount")),
   "token": request.POST.get("token"),
   "description": request.POST.get("description"),
   "installments": int(request.POST.get("installments")),
   "payment_method_id": request.POST.get("payment_method_id"),
   "notification_url" =  "http://requestbin.fullcontact.com/1ogudgk1",
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
```go
accessToken := "{{ACCESS_TOKEN}}"


cfg, err := config.New(accessToken)
if err != nil {
   fmt.Println(err)
   return
}


client := payment.NewClient(cfg)


request := payment.Request{
   TransactionAmount: <transactionAmount>,
   Token: <token>,
   Description: <description>,
   Installments: <installments>,
   PaymentMethodID:   <paymentMethodId>,
   NotificationURL: "https:/mysite.com/notifications/new",
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
         "notification_url": "http://requestbin.fullcontact.com/1ogudgk1",
         "payer": {
           "email": "test@test.com"


         }
   }'


```
]]]

2. Implementa el receptor de notificaciones usando el siguiente código como ejemplo:

```php
<?php
 MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");
 switch($_POST["type"]) {
     case "payment":
         $payment = MercadoPago\Payment::find_by_id($_POST["data"]["id"]);
         break;
     case "plan":
         $plan = MercadoPago\Plan::find_by_id($_POST["data"]["id"]);
         break;
     case "subscription":
         $plan = MercadoPago\Subscription::find_by_id($_POST["data"]["id"]);
         break;
     case "invoice":
         $plan = MercadoPago\Invoice::find_by_id($_POST["data"]["id"]);
         break;
     case "point_integration_wh":
         // $_POST contiene la informaciòn relacionada a la notificaciòn.
         break;
 }
?>
```

Luego de realizar la configuración  necesaria, la notificación Webhook será enviada con formato `JSON`. Puedes ver a continuación un ejemplo de notificación del tópico `payment`, y las descripciones de la información enviada en la tabla debajo.

> WARNING
>
> Importante
>
> Los pagos de prueba, creados con credenciales de prueba, no enviarán notificaciones. La única vía para probar la recepción de notificaciones es mediante la [Configuración a través de Tus integraciones](/developers/es/docs/your-integrations/notifications/webhooks#configuracinatravsdetusintegraciones).

```json
{
 "id": 12345,
 "live_mode": true,
 "type": "payment",
 "date_created": "2015-03-25T10:04:58.396-04:00",
 "user_id": 44444,
 "api_version": "v1",
 "action": "payment.created",
 "data": {
     "id": "999999999"
 }
}
```

| Atributo | Descripción | Ejemplo en el JSON |
| --- | --- | --- |
| **id** | ID de la notificación | `12345` |
| **live_mode** | Indica si la URL ingresada es válida.| `true` |
| **type** | Tipo de notificacion recebida e acuerdo con el tópico previamente seleccionado (payments, mp-connect, subscription, claim, automatic-payments, etc) | `payment` |
| **date_created** | Fecha de creación del recurso notificado | `2015-03-25T10:04:58.396-04:00` |
| **user_id**| Identificador del vendedor | `44444` |
| **api_version** | Valor que indica la versión de la API que envía la notificación | `v1` |
| **action** | Evento notificado, que indica si es una actualización de un recurso o la creación de uno nuevo | `payment.created` |
| **data.id**  | ID del pago, de la orden comercial o del reclamo. | `999999999` |

----[mla]----
> WARNING
>
> Importante
>
> Para conocer el formato de notificaciones para tópicos distintos a `payment`, como `point_integration_wh`, `delivery`, `topic_claims_integration_wh` y `topic_card_id_wh`, consulta [Información adicional sobre notificaciones](/developers/es/docs/your-integrations/notifications/additional-info).
------------

----[mlb, mlm]----
> WARNING
>
> Importante
>
> Para conocer el formato de notificaciones para tópicos distintos a `payment`, como `point_integration_wh`, `topic_claims_integration_wh` y `topic_card_id_wh`, consulta [Información adicional sobre notificaciones](/developers/es/docs/your-integrations/notifications/additional-info).
------------

----[mlu, mlc, mco, mpe]----
> WARNING
>
> Importante
>
> Para conocer el formato de notificaciones para tópicos distintos a `payment`, como `topic_claims_integration_wh` y `topic_card_id_wh`, consulta [Información adicional sobre notificaciones](/developers/es/docs/your-integrations/notifications/additional-info).
------------


## Acciones necesarias después de recibir la notificación

Cuando recibes una notificación en tu plataforma, Mercado Pago espera una respuesta para validar que esa recepción fue correcta. Para eso, debes devolver un `HTTP STATUS 200 (OK)` o `201 (CREATED)`. 

El **tiempo de espera** para esa confirmación será de **22 segundos**. Si no se envía esta respuesta, el sistema entenderá que la notificación no fue recibida y realizará un **nuevo intento de envío cada 15 minutos**, hasta que reciba la respuesta. Después del tercer intento, el plazo será prorrogado, pero los envíos continuarán sucediendo.

Luego de responder la notificación, confirmando su recibimiento, puedes obtener toda la información sobre el recurso notificado haciendo una requisición al endpoint correspondiente. Para identificar qué endpoint debes utilizar, consulta la tabla debajo:


----[mpe, mco, mlu, mlc]---- 
| Tipo | URL | Documentación |
| --- | --- | --- |
| payment | `https://api.mercadopago.com/v1/payments/[ID]` | [Obtener pago](/developers/es/reference/payments/_payments_id/get)  |
| subscription_preapproval | `https://api.mercadopago.com/preapproval/search` | [Obtener suscripción](/developers/es/reference/subscriptions/_preapproval_search/get) |
| subscription_preapproval_plan | `https://api.mercadopago.com/preapproval_plan/search` | [Obtener plan de suscripción](/developers/es/reference/subscriptions/_preapproval_plan_search/get)  |
| subscription_authorized_payment | `https://api.mercadopago.com/authorized_payments/[ID]` | [Obtener información de facturas](/developers/es/reference/subscriptions/_authorized_payments_id/get)  |
| topic_claims_integration_wh | `https://api.mercadopago.com/post-purchase/v1/claims/[claim_id]` | [Obtener detalles del reclamo](/developers/es/reference/claims/get-claim-details/get) |
| topic_merchant_order_wh | `https://api.mercadopago.com/merchant_orders/[ID]` | [Obtener orden](/developers/es/reference/merchant_orders/_merchant_orders_id/get) |
| topic_chargebacks_wh | `https://api.mercadopago.com/v1/chargebacks/[ID]` | [Obtener contracargo](/developers/es/reference/chargebacks/_chargebacks_id/get) |

------------
----[mlm, mlb]---- 
| Tipo | URL | Documentación |
| --- | --- | --- |
| payment | `https://api.mercadopago.com/v1/payments/[ID]` | [Obtener pago](/developers/es/reference/payments/_payments_id/get)  |
| subscription_preapproval | `https://api.mercadopago.com/preapproval/search` | [Obtener suscripción](/developers/es/reference/subscriptions/_preapproval_search/get) |
| subscription_preapproval_plan | `https://api.mercadopago.com/preapproval_plan/search` | [Obtener plan de suscripción](/developers/es/reference/subscriptions/_preapproval_plan_search/get)  |
| subscription_authorized_payment | `https://api.mercadopago.com/authorized_payments/[ID]` | [Obtener información de facturas](/developers/es/reference/subscriptions/_authorized_payments_id/get)  |
| point_integration_wh| `https://api.mercadopago.com/point/integration-api/payment-intents/{paymentintentid}` | [Obtener intención de pago](/developers/es/reference/integrations_api/_point_integration-api_payment-intents_paymentintentid/get) |
| topic_claims_integration_wh | `https://api.mercadopago.com/post-purchase/v1/claims/[claim_id]` | [Obtener detalles del reclamo](/developers/es/reference/claims/get-claim-details/get) |
| topic_merchant_order_wh | `https://api.mercadopago.com/merchant_orders/[ID]` | [Obtener orden](/developers/es/reference/merchant_orders/_merchant_orders_id/get) |
| topic_chargebacks_wh | `https://api.mercadopago.com/v1/chargebacks/[ID]` | [Obtener contracargo](/developers/es/reference/chargebacks/_chargebacks_id/get) |

------------
----[mla]---- 
| Tipo | URL | Documentación |
| --- | --- | --- |
| payment | `https://api.mercadopago.com/v1/payments/[ID]` | [Obtener pago](/developers/es/reference/payments/_payments_id/get)  |
| subscription_preapproval | `https://api.mercadopago.com/preapproval/search` | [Obtener suscripción](/developers/es/reference/subscriptions/_preapproval_search/get) |
| subscription_preapproval_plan | `https://api.mercadopago.com/preapproval_plan/search` | [Obtener plan de suscripción](/developers/es/reference/subscriptions/_preapproval_plan_search/get)  |
| subscription_authorized_payment | `https://api.mercadopago.com/authorized_payments/[ID]` | [Obtener información de facturas](/developers/es/reference/subscriptions/_authorized_payments_id/get)  |
| point_integration_wh| `https://api.mercadopago.com/point/integration-api/payment-intents/{paymentintentid}` | [Obtener intención de pago](/developers/es/reference/integrations_api/_point_integration-api_payment-intents_paymentintentid/get) |
| delivery | `https://api.mercadopago.com/proximity-integration/v1/orders/{shipment_id}` | [Obtener pedido](/developers/es/reference/mp_delivery/_proximity-integrationorders_shipment_id/get) |
| topic_claims_integration_wh | `https://api.mercadopago.com/post-purchase/v1/claims/[claim_id]` | [Obtener detalles del reclamo](/developers/es/reference/claims/get-claim-details/get) |
| topic_merchant_order_wh | `https://api.mercadopago.com/merchant_orders/[ID]` | [Obtener orden](/developers/es/reference/merchant_orders/_merchant_orders_id/get) |
| topic_chargebacks_wh | `https://api.mercadopago.com/v1/chargebacks/[ID]` | [Obtener contracargo](/developers/es/reference/chargebacks/_chargebacks_id/get) |

------------

Con esta información podrás realizar las actualizaciones necesarias a tu plataforma, como actualizar un pago aprobado.

## Panel de notificaciones

El panel de notificaciones es una herramienta que permite visualizar los eventos disparados sobre una determinada integración, verificar el estado de las notificaciones, y obtener información detallada sobre esos eventos. 

Este Panel será exhibido una vez que hayas configurado tus notificaciones Webhooks, y puedes acceder a él cuando desees, haciendo clic en **Webhooks** dentro de Tus integraciones.

Entre la información disponible en este panel, encontrarás el porcentaje de notificaciones entregadas, así como una visión rápida de cuáles son las URLs y eventos configurados. 

Además, encontrarás una lista completa de las últimas notificaciones enviadas y sus detalles, como **estado de la entrega** (exitoso o fallido), **acción** (acción asociada al evento disparado), **evento** (tipo de evento disparado), y **fecha y hora**.  Si lo deseas, es posible filtrar estos resultados exhibidos por **estado de la entrega** y por **período**.

![panel de notificaciones webhooks](/images/dashboard/notification-dashboard-es.png)

### Detalles del evento

Al hacer clic en una de las notificaciones listadas, podrás acceder a los detalles del evento. Esta sección proporciona mayor información y permite recuperar datos perdidos en caso de fallas en la entrega de la notificación para mantener tu sistema actualizado.
 * **Status:** Estado del evento junto con el código de éxito o error correspondiente.
 * **Evento:** Tipo de evento disparado, en función de los tópicos seleccionados durante la configuración de las notificaciones.
 * **Tipo:** Tópico al que pertenece el evento disparado, en función de la selección hecha durante la configuración.
 * **Fecha y hora del disparo:** Fecha y hora en la que fue disparado el evento.
 * **Descripción:** Descripción detallada del evento.
 * **ID del disparo:** Identificador único de la notificación enviada.
 * **Requisición:** JSON del llamado enviado como notificación. 

![detalles de notificaciones enviadas](/images/dashboard/notification-details-dashboard-es.png)

En caso de una falla en la entrega de la notificación, podrás conocer cuáles fueron los motivos y rectificar la información necesaria para evitar futuros problemas.