# Mejora la aprobación de tus pagos

## ¿Por qué se rechaza un pago?

Un pago puede ser rechazado por un error con el medio de pago o porque no se cumple con los requisitos de seguridad necesarios. Por ejemplo, si la tarjeta no tiene el saldo suficiente, se realiza mal la carga de un dato o se produce un movimiento inusual de la cuenta.

Para evitar pérdidas de ingresos de tu negocio y mejorar la experiencia de tus clientes, trabajamos con los emisores responsables de cada medio de pago y utilizamos las últimas tecnologías para evitar el fraude y aumentar la cantidad de pagos aprobados.

## Pagos rechazados por el banco

Al ofrecer un pago con tarjeta de crédito o débito, el emisor puede rechazar el cobro por distintas razones. Por ejemplo, si la tarjeta se encuentra vencida, no tiene los fondos suficientes o si los datos cargados no son correctos.

Puedes ver el estado del pago en la respuesta de la API como `rejected` y el motivo de rechazo en el campo `status_detail`.

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

Puedes encontrar más información sobre el detalle del pago en la [actividad de la cuenta de Mercado Pago](https://www.mercadopago.com.ar/activities) en la que se reciben los cobros.

> WARNING
>
> Rechazo sin motivo
>
> Es importante tener en cuenta que si el emisor de la tarjeta no indica el motivo del rechazo, vas a ver el detalle del pago como `cc_rejected_other_reason`. Para esta caso, es recomendable que se cambie el medio de pago o que se contacte con el banco para resolver el problema.

## Pagos rechazados para prevenir fraude

Seguimos en tiempo real las transacciones y tenemos validaciones de seguridad tanto para reconocer pagos que no fueron autorizados por la persona dueña de la tarjeta como para evitar contracargos.

Cuando nuestro sistema de prevención de fraude detecta un pago sospechoso, puedes ver el estado del pago en la respuesta de la API como `rejected` y el motivo de rechazo como `cc_rejected_high_risk`.

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

Para evitar que un pago real se rechace por no cumplir con las validaciones de seguridad, es necesario sumar toda la información posible a la hora de realizar la operación. 

Te ayudamos a detectar comportamientos inusuales de los clientes con nuestro código de seguridad y el device ID para prevenir el fraude. Y no te preocupes, no guardaremos ni compartiremos los datos de tus clientes.

> NOTE
>
> Nota
>
> Si utilizas Checkout Pro o Web Tokenize Checkout, ya cuentas con toda la seguridad para prevenir fraude. 

### Suma nuestro código de seguridad en tu sitio

Es muy simple. Agrega el script, configura la sección de tu sitio en la que se encuentra ¡y listo! Solo debes reemplazar el valor de `view` por el nombre de la página en la que quieras sumarlo.

```html
<script src="https://www.mercadopago.com/v2/security.js" view="home"></script>
```

#### Posibles valores para VIEW

| Tipo | Descripción |
| --- | --- |
| *home* | Página principal de tu sitio. |
| *search* | Página de búsqueda o listado de productos. |
| *item* | Página de un producto específico. |

> NOTE
>
> Nota
>
> En caso de no tener un valor disponible para la sección, puedes dejarlo vacío.

### Implementa el device ID en tu sitio

Para implementar en tu sitio la generación del device debes agregar el siguiente código:

```html
<script src="https://www.mercadopago.com/v2/security.js" view="checkout"></script>
```

Es importante que envíes el `device_id` generado por este código a tu servidor y que al momento de crear el pago agregues el siguiente header por la solicitud:

```http
X-meli-session-id: device_id
```

#### Puedes obtener el device ID de dos formas:

- Automáticamente se crea una variable global de javascript con el nombre `MP_DEVICE_SESSION_ID` cuyo valor es el `device_id`. Si prefieres que lo asignemos a otra variable, indica el nombre agregando el atributo `output`.


```html
<script src="https://www.mercadopago.com/v2/security.js" view="checkout" output="deviceId"></script>
````

- Si quieres crear una variable propia, puedes agregar una etiqueta HTML en tu sitio con el identificador `id="deviceId"` y el código le asignará automáticamente el valor `device_id`.

```html
<input type="hidden" id="deviceId">
```

### Implementa el device ID en tu aplicación móvil nativa

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
Necesitas agregar el repositorio y la dependencia en el archivo **build.gradle**.
===
repositories {
    maven {
        url "https://artifacts.mercadolibre.com/repository/android-releases"
    }
}
dependencies {
   implementation 'com.mercadolibre.android.device:sdk:3.0.5'
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

Para optimizar la validación de seguridad de los pagos y mejorar las aprobaciones, puedes enviarnos los datos del comprador y del ítem para que los analicemos. Por ejemplo, si nos envías esta información, podemos detectar si ese comprador realizó pagos sospechosos en otro momento y prevenirlo.

#### Datos del comprador

[[[
```php
<?php
  // ...
  $payer = new MercadoPago\Payer();
  $payer->name = "Charles";
  $payer->surname = "Luevano";
  $payer->email = "charles@hotmail.com";
  $payer->date_created = "2018-06-02T12:58:41.425-04:00";
  $payer->phone = array(
    "area_code" => "",
    "number" => "949 128 866"
  );
  ----[mla, mlb, mlu, mco, mlc, mpe]----
  $payer->identification = array(
    "type" => "DNI",
    "number" => "12345678"
  );
  ------------
  $payer->address = array(
    "street_name" => "Cuesta Miguel Armendáriz",
    "street_number" => 1004,
    "zip_code" => "11020"
  );
  // ...
?>
```
```node
// ...
var payer = {
  name: "Charles",
  surname: "Luevano",
  email: "charles@hotmail.com",
  date_created: "2015-06-02T12:58:41.425-04:00",
  phone: {
    area_code: "",
    number: "949 128 866"
  },
  ----[mla, mlb, mlu, mco, mlc, mpe]----
  identification: {
    type: "DNI",
    number: "12345678"
  },
  ------------
  address: {
    street_name: "Cuesta Miguel Armendáriz",
    street_number: "1004",
    zip_code: "11020"
  }
}
// ...
```
```java
// ...
Payer payer = new Payer();
payer.setName("Charles")
     .setSurname("Luevano")
     .setEmail("charles@hotmail.com")
     .setDateCreated("2018-06-02T12:58:41.425-04:00")
     .setPhone(new Phone()
        .setAreaCode("")
        .setPhoneNumber("949 128 866"))
     ----[mla, mlb, mlu, mco, mlc, mpe]----
     .setIdentification(new Identification()
        .setType("DNI")
        .setNumber("12345678"))
     ------------
     .setAddress(new Address()
        .setStreetName("Cuesta Miguel Armendáriz")
        .setBuildingNumber("1004")
        .setZipCode("11020"));
// ...
```
```ruby
# ...
payer = {
  name: "Charles",
  surname: "Luevano",
  email: "charles@hotmail.com",
  date_created: Time.now,
  ----[mla, mlb, mlu, mco, mlc, mpe]----
  identification: {
    type: "DNI",
    number: "12345678"
  },
  ------------
  address: {
    street_name: "Cuesta Miguel Armendáriz",
    street_number: "1004",
    zip_code: "11020"
  }
}
# ...
```
```csharp
using System.Collections.Generic;
using MercadoPago.Client.Common;
using MercadoPago.Client.Preference;
// ...
var payer = new PreferencePayerRequest
{
    Name = "Charles",
    Surname = "Luevano",
    Email = "charles@hotmail.com",
    Phone = new PhoneRequest
    {
        AreaCode = "",
        Number = "949 128 866",
    },
    ----[mla, mlb, mlu, mco, mlc, mpe]----
    Identification = new IdentificationRequest
    {
        Type = "DNI",
        Number = "12345678",
    },
    ------------
    Address = new AddressRequest
    {
        StreetName = "Cuesta Miguel Armendáriz",
        StreetNumber = "1004",
        ZipCode = "11020",
    },
};
// ...
```
```python
# ...
payer_data = {
    "name": "Charles",
    "surname": "Luevano",
    "email": "charles@hotmail.com",
    "date_created": "2015-06-02T12:58:41.425-04:00",
    ----[mla, mlb, mlu, mco, mlc, mpe]----
    "identification": {
        "type": "DNI",
        "number": "12345678"
    },
    ------------
    "address": {
        "street_name": "Cuesta Miguel Armendáriz",
        "street_number": "1004",
        "zip_code": "11020"
    }
}
# ...
```
]]]

### Datos del ítem

[[[
```php
<?php
  $item = new MercadoPago\Item();
  $item->id = "1234";
  $item->title = "Heavy Duty Plastic Table";
  $item->quantity = 7;
  $item->currency_id = "[FAKER][CURRENCY][ACRONYM]";
  $item->unit_price = 75.56;
  // ...
?>
```
```node
// ...
items: [
    {
      id: '1234',
      title: 'Lightweight Paper Table',
      quantity: 3,
      currency_id: '[FAKER][CURRENCY][ACRONYM]',
      unit_price: 55.41
    }
  ]// ...
```
```java
// ...
Item item = new Item();
item.setId("1234")
    .setTitle("Lightweight Paper Table")
    .setQuantity(3)
    .setCurrencyId("[FAKER][CURRENCY][ACRONYM]")
    .setUnitPrice((float) 55.41);
// ...
```
```ruby
# ...
item = {
  id: "1234",
  title: "Lightweight Paper Table",
  quantity: 3,
  currency_id: "[FAKER][CURRENCY][ACRONYM]",
  unit_price: 55.41
}# ...
```
```csharp
// ...
var request = new PreferenceRequest
{
    Items = new List<PreferenceItemRequest>
    {
        new PreferenceItemRequest
        {
            Id = "1234",
            Title = "Lightweight Paper Table",
            Quantity = 3,
            CurrencyId = "[FAKER][CURRENCY][ACRONYM]",
            UnitPrice = 55.41m,
        }
    },
};
// ...
```
```python
# ...
preference_data = {
    "items": [
        {
            "id": '1234',
            "title": 'Lightweight Paper Table',
            "quantity": 3,
            "currency_id": '[FAKER][CURRENCY][ACRONYM]',
            "unit_price": 55.41
        }
    ]
    # ...
}
# ...
```
]]]

Puedes obtener más información sobre cada atributo en las [Referencias de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/payments/_payments/post).

### Datos de industria

Envía los datos sobre tu industria para mejorar tu aprobación.<br>

[Ir a datos sobre industrias](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/resources/industry-data/additional-info)

### Ayuda a tus clientes con sus pagos rechazados

Es importante que le expliques a tus clientes el motivo de rechazo del pago y qué acción puede hacer para solucionarlo. Tus clientes tendrán toda la información que necesitan para poder pagarte sin problemas.

Por ejemplo, si un pago se rechaza por fondos insuficientes, puedes recomendarles que vuelva a intentar con otro medio de pago para completar la operación.


> NOTE
>
> Nota
>
> Si utilizas el Checkout Pro, no te preocupes, ya tienes configurados los mensajes según cada caso. Y si usas otro de nuestros productos, te recomendamos mostrar un [mensaje específico por cada motivo de rechazo](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/handling-responses).
