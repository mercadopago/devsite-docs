# Mejora la aprobación de tus pagos

## ¿Por qué se rechaza un pago?

La denegación de pagos es una realidad en el mundo de las ventas online y puede ocurrir por varias razones. Un **pago puede ser rechazado por**:
 * un error con el medio de pago;
 * llenado incorrecto de información por parte del cliente;
 * tarjetas sin saldo suficiente;
 * carga errónea de datos;
 * incumplimiento con algún requisito de seguridad;
 * comportamientos sospechosos que indiquen riesgo de fraude;
 * problemas en la comunicación entre adquirentes y sub-adquirentes.

Puedes encontrar **toda la información sobre un pago y verificar su estado** a través de la API por medio del método [Obtener pago](/developers/es/reference/payments/_payments_id/get). El campo de `status` indica si el pago fue aprobado o no, mientras que el campo `status_detail` proporciona más detalles, incluidos los motivos del rechazo.

```json
{
    "status": "rejected",
    "status_detail": "cc_rejected_insufficient_amount",
    "id": 47198050,
    "payment_method_id": "master",
    "payment_type_id": "credit_card",
    ...
}
```

> NOTE
>
> Importante
>
> Puedes encontrar más información sobre el detalle del pago en la actividad de la cuenta de [Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/activities).


### Rechazos por errores en el relleno de datos

Estos rechazos ocurren debido a **errores al momento del checkout**, que pueden suceder por diversas razones: una falla de entendimiento en la pantalla de pago, problemas en la experiencia del comprador, o falta de validación de ciertos campos, así como errores que comete el cliente a la hora de completar sus datos, especialmente datos de tarjetas. 

En estos casos, el campo `status_detail` puede devolver: 
 * `cc_rejected_bad_filled_card_number`
 * `cc_rejected_bad_filled_date` 
 * `cc_rejected_bad_filled_other`
 * `cc_rejected_bad_filled_security_code`


### Rechazos del banco emisor

Al ofrecer un **pago con tarjeta de crédito o débito**, el banco emisor puede rechazar el cobro por distintas razones: que la tarjeta se encuentre vencida, que sus fondos o límites sean insuficientes, o que se encuentre bloqueada para compras online.

En estos casos, el campo `status_detail` puede devolver: 
 * `cc_rejected_call_for_authorize`
 * `cc_rejected_card_disabled`
 * `cc_rejected_duplicated_payment`
 * `cc_rejected_insufficient_amount`
 * `cc_rejected_invalid_installments`
 * `cc_rejected_max_attempts`


### Rechazos para prevenir fraude

Monitoreamos en tiempo real las transacciones, buscando **reconocer características y patrones sospechosos** que apunten a un intento de fraude. Esto es hecho tanto por los algoritmos de Mercado Pago como por los bancos, todo para evitar al máximo los contracargos (*chargebacks*). 

Cuando los sistemas de prevención detectan un pago sospechoso, la respuesta de la API puede devolver en el `status_detail`: 
 * `cc_rejected_blacklist` 
 * `cc_rejected_high_risk`
 * `cc_rejected_other_reason`


> WARNING
> 
> Atención
>
> La respuesta `cc_rejected_other_reason` es un status que proviene del banco emisor y, si bien no explicita el motivo de rechazo, se trata de una estimación de riesgo de fraude. Igualmente, hay otros motivos por los cuales este status puede ser devuelto. En caso de duda, es recomendable elegir otro medio de pago o ponerse en contacto con la entidad bancaria.

```json
 {
    "status": "rejected",
    "status_detail": "cc_rejected_high_risk",
    "id": 47198050,
    "payment_method_id": "master",
    "payment_type_id": "credit_card",
    ...
}
```

## Recomendaciones para mejorar tu aprobación

Para **evitar que un pago legítimo sea rechazado** por no cumplir con las validaciones de seguridad, es necesario incluir el máximo de información posible a la hora de realizar la operación, así como que tu checkout cuente con su interfaz optimizada. 

Puedes ver en detalle nuestras **recomendaciones para mejorar tu aprobación** a continuación.


### Obtén y envía el Device ID
El **Device ID** es una información importante para lograr una mejor seguridad y, en consecuencia, una mejor tasa de aprobación de pagos. Representa un identificador único para el dispositivo de cada comprador en el momento de la compra.

Si un comprador frecuente hace una compra desde un dispositivo diferente al habitual, esto podría representar un comportamiento atípico. Si bien puede no ser necesariamente un fraude, el Device ID nos ayuda a refinar la evaluación y evitar el rechazo de pagos legítimos.

> WARNING
> 
> Atención
>
>Si estás utilizando el [JS SDK de Mercado Pago](/developers/es/docs/sdks-library/client-side/mp-js-v2), **no** será necesario agregar el código de seguridad, ya que la información relativa al Device ID será obtenida por defecto.

Puedes **agregar el código de seguridad de Mercado Pago** a tu sitio reemplazando el valor de `view` con el nombre de la sección de tu web en la que deseas agregarlo. Si bien lo más importante es hacerlo en la **página del checkout**, también puedes hacerlo en **otras páginas**, tales como home, search o ítem, ya que ayuda a enriquecer la información recolectada.

```html
<script src="https://www.mercadopago.com/v2/security.js" view="home"></script>
```

> NOTE
>
> Importante
>
> En caso de no tener un valor disponible para la sección, puedes dejarlo vacío.

### * Uso del device ID en la web
Para usar el Device ID en la web y prevenir posibles compras fraudulentas, debes seguir los siguientes pasos:

#### 1. Agrega nuestro código de seguridad

Para implementar la generación del Device ID en tu sitio, agrega el siguiente código a tu página de Checkout:

```html
<script src="https://www.mercadopago.com/v2/security.js" view="checkout"></script>
```

#### 2. Obtén el device ID

Una vez que hayas agregado el código de seguridad de Mercado Pago a tu sitio, automáticamente se crea una variable JavaScript global con el nombre `MP_DEVICE_SESSION_ID`, cuyo valor es el ID del dispositivo. 

Si prefieres asignarlo a otra variable, indica el nombre agregando el atributo `output` al script de seguridad, como en el siguiente ejemplo:
```html
  <script src="https://www.mercadopago.com/v2/security.js" view="checkout" output="deviceId"></script>
```

También puedes **crear tu propia variable** agregando una etiqueta HTML a tu sitio con el identificador `id="deviceID"`, como en el siguiente ejemplo:
```html
  <input type="hidden" id="deviceId">
```

#### 3. Uso del device ID

Una vez que tengas el valor del Device ID, debes **enviarlo a nuestros servidores** al crear un pago. Para hacer esto, agrega el siguiente encabezado (*header*) a la solicitud:

```html
X-meli-session-id: device_id
```

> WARNING
> 
> Atención
>
> Recuerda reemplazar `device_id` con el nombre de la variable que contiene su valor de ID del dispositivo.


### * Implementa el device ID en tu aplicación móvil nativa

Si tienes una aplicación nativa, puedes capturar la información del dispositivo con nuestro SDK y enviarla al momento de crear el token. Sigue estos pasos:

#### 1. Agrega la dependencia

[[[
```ios
===
Agrega el siguiente código en el archivo **Podfile**.
===
use_frameworks!
pod ‘MercadoPagoDevicesSDK’
```
```android
===
Agrega el siguiente código en el archivo **build.gradle**.
===
dependencies {
   implementation 'com.mercadolibre.android.device:sdk:2.0.1'
}
```
]]]

#### 2. Inicializa el módulo

[[[
```swift
===
Te recomendamos iniciarlo en el evento didFinishLaunchingWithOptions del AppDelegate.
===
import MercadoPagoDevicesSDK
...
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        ...        
        MercadoPagoDevicesSDK.shared.execute()
        ...
}
```
```objective-c
===
Te recomendamos iniciarlo en el evento didFinishLaunchingWithOptions del AppDelegate.
===
@import ‘MercadoPagoDevicesSDK’;
...
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    ...
    [[MercadoPagoDevicesSDK shared] execute];
    ...
}
```
```java
===
Te recomendamos iniciarlo en la clase MainApplication.
===
import com.mercadolibre.android.device.sdk.DeviceSDK;
DeviceSDK.getInstance().execute(this);
```

]]]
#### 3. Captura la información

Ejecuta alguna de estas funciones para obtener la información en el formato que prefieras.

[[[
```swift
MercadoPagoDevicesSDK.shared.getInfo() // devuelve un objeto Device que es Codable
MercadoPagoDevicesSDK.shared.getInfoAsJson() // devuelve un objeto Data de la librería de JSON
MercadoPagoDevicesSDK.shared.getInfoAsJsonString() // devuelve el json en formato de String
MercadoPagoDevicesSDK.shared.getInfoAsDictionary() // devuelve un Dictionary<String,Any>
```
```objective-c
[[[MercadoPagoDevicesSDK] shared] getInfoAsJson] // devuelve un objeto Data de la librería JSON
[[[MercadoPagoDevicesSDK] shared] getInfoAsJsonString] // devuelve el json en formato de String
[[[MercadoPagoDevicesSDK] shared] getInfoAsDictionary] // devuelve un Dictionary<String,Any>
```
```java
Device device = DeviceSDK.getInstance().getInfo() // devuelve un objeto Device, serializable
Map deviceMap = DeviceSDK.getInstance().getInfoAsMap()  // devuelve un Map<String, Object>
String jsonString = DeviceSDK.getInstance().getInfoAsJsonString() // devuelve un String de tipo Json
```
]]]

#### 4. Envía la información

Por último, envía la información en el campo `device` al crear el `card_token`.

```
{
	...,
	 "device":{
	  "fingerprint":{
	     "os":"iOS",
	     "system_version":"8.3",
	     "ram":18446744071562067968,
	     "disk_space":498876809216,
	     "model":"MacBookPro9,2",
	     "free_disk_space":328918237184,
	     "vendor_ids":[
	        {
	           "name":"vendor_id",
	           "value":"C2508642-79CF-44E4-A205-284A4F4DE04C"
	        },
	        {
	           "name":"uuid",
	           "value":"AB28738B-8DC2-4EC2-B514-3ACF330482B6"
	        }
	     ],
	     "vendor_specific_attributes":{
	        "feature_flash":false,
	        "can_make_phone_calls":false,
	        "can_send_sms":false,
	        "video_camera_available":true,
	        "cpu_count":4,
	        "simulator":true,
	        "device_languaje":"en",
	        "device_idiom":"Phone",
	        "platform":"x86_64",
	        "device_name":"iPhone Simulator",
	        "device_family":4,
	        "retina_display_capable":true,
	        "feature_camera":false,
	        "device_model":"iPhone Simulator",
	        "feature_front_camera":false
	     },
	     "resolution":"375x667"
	  }
}
```

### Detalla toda la información sobre el pago

Para optimizar la validación de la seguridad de los pagos y mejorar sus aprobaciones, es valioso enviar la mayor cantidad posible de **datos del comprador y del ítem**.
Puedes ver todos los atributos disponibles al crear un pago usando el método [Crear pago](/developers/es/reference/payments/_payments/post). Presta especial atención a los atributos del nodo `adicional_inf`, particularmente a:
 * Datos del comprador,
 * Datos del producto,
 * Datos del envío.

Existen también **campos extra** que pueden ser enviados dependiendo del **ramo de actividades o industria** de tu tienda. Puedes encontrar más detalles sobre cada ramo y los datos del comprador y del envío que recomendamos incluir en cada uno de ellos [aquí]().

### Mejora la experiencia del usuario
A menudo, el comprador puede cometer un error al completar sus datos en el checkout, así que vale la pena revisar cada paso, posibles interacciones, e incluso el diseño, para comprobar que todo esté tan claro como debería ser. 

En caso de que optes por **crear tu front-end desde cero**, puedes encontrar consejos para hacerlo de forma eficiente [aquí](/developers/es/docs/checkout-api/best-practices/ux-best-practices/ux-for-checkouts/introduction). 
Si un pago resultara denegado, es importante también que expliques a tus clientes el motivo y qué medidas pueden tomar para solucionarlo. De esta forma, tendrán toda la información que necesitan para pagar sin problemas. Puedes encontrar **recomendaciones de mensajes para los principales motivos de rechazo** [aquí](/developers/es/docs/checkout-api/response-handling/collection-results).
Si, en cambio, quieres garantizar una interfaz optimizada, puedes utilizar los **componentes visuales de [Checkout Bricks](/developers/es/docs/checkout-bricks/landing)**, así como aprovechar el componente visual ya listo con los mejores mensajes del **[Status Screen Brick](/developers/es/docs/checkout-bricks/status-screen-brick/introduction)**.

> WARNING
> 
> Importante
>
> Recomendamos  evaluar la [calidad de tu integración](/developers/es/docs/checkout-api/additional-content/integration-quality) antes de salir a producción para que puedas validar si estás cumpliendo con los estándares de calidad y seguridad de Mercado Pago que pueden mejorar tu tasa de aprobación de pagos.