# Mejora la aprobación de tus pagos
Al realizar un pago online, la transacción se somete a un análisis cuidadoso para minimizar los riesgos de fraude y garantizar que el procesamiento se realice sin errores.

En esta documentación encontrarás información sobre qué provoca que un pago sea rechazado y algunas recomendaciones para evitar que esto suceda.

## ¿Por qué se rechaza un pago?
Un pago puede ser rechazado por un **error en el método de pago o porque no cumple con los requisitos de seguridad necesarios**. Por ejemplo, si la tarjeta no tiene suficiente saldo o si hay un movimiento inusual en la cuenta.

## Razones de rechazo
La denegación de pagos es una realidad en el mundo de las ventas online y puede ocurrir por varias razones: llenado incorrecto de información por parte del cliente, intento de fraude, problema en la comunicación entre adquirentes y sub adquirentes, entre muchas otras cuestiones.

Puedes encontrar la información y verificar el estado de un pago a través de la API por medio del método [Obtener pago](/developers/es/reference/payments/_payments_id/get). El campo de `status` indica si el pago fue aprobado o no, mientras que el campo `status_detail` proporciona más detalles, incluidos los motivos del rechazo.


> NOTE
>
> Importante
>
> Puedes encontrar más información sobre el detalle del pago en la actividad de la cuenta de [Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/activities).


### Errores de relleno del comprador
Esta es una de las principales razones por las que se rechaza un pago. A menudo, el comprador puede cometer un error al completar sus datos, **especialmente la dirección, datos de identificación y los números de tarjeta**.

En estos casos, el campo `status_detail` puede devolver: `cc_rejected_bad_filled_date`, `cc_rejected_bad_filled_other`, `cc_rejected_bad_filled_security_code`

### Pagos rechazados por el banco
Al realizar un pago con tarjeta de crédito o débito el banco emisor puede rechazar el cargo por diferentes motivos. Por ejemplo, fecha de vencimiento caduca, saldo o límite insuficientes, tarjeta deshabilitada o bloqueada para compras online. 

En estos casos, el campo `status_detail` puede devolver: `cc_rejected_call_for_authorize`, `cc_rejected_card_disabled`, `cc_rejected_duplicated_payment`, `cc_rejected_insufficient_amount`

### Pagos rechazados para prevenir fraude
A la hora de efectuar un pago tenemos una serie de comprobaciones, tanto por parte del banco como de Mercado Pago, y si nuestro sistema de prevención de fraude detecta algún movimiento inusual o que caracterice algún tipo de estafa o fraude, se bloquea. 

En estos casos, el campo `status_detail` puede devolver: `cc_rejected_blacklist`, `cc_rejected_high_risk`

> WARNING
> 
> Rechazo sin motivo
>
> Es importante tener en cuenta que si el emisor de la tarjeta no indica el motivo del rechazo, vas a ver el detalle del pago como `cc_rejected_other_reason`. Para este caso, es recomendable cambiar el medio de pago o contactarse con el banco para resolver el problema.

## Recomendaciones para mejorar tu aprobación
Para evitar que un pago real sea rechazado porque no cumple con las validaciones de seguridad, **es necesario incluir toda la información posible** al realizar la transacción y también prestar atención a algunos requisitos de seguridad, como nuestro **Código de seguridad** y el **device ID**.

> NOTE
>
> Importante
>
> Si utilizas Checkout Pro, ya cuentas con toda la seguridad para prevenir fraude.

### Detallar toda la información sobre el pago
Para optimizar la validación de la seguridad de los pagos y mejorar las aprobaciones, es valioso enviar la mayor cantidad posible de datos del comprador y del ítem. 
 
Presta atención a todos los atributos disponibles al crear un pago con el método [Crear pago](/developers/es/reference/payments/_payments/post). 

### Configurar preferencias
Puedes adaptar la **integración de Checkout Pro** a tu modelo de negocio configurando atributos de preferencia, que ayudan a mejorar las aprobaciones.

Para obtener más detalles, visite la documentación de configuración de preferencias de [Checkout Pro](developers/es/docs/checkout-pro/checkout-customization/preferences).

### Mejorar la experiencia del usuario
A menudo, el comprador puede cometer un error al completar sus datos al finalizar la compra, así que vale la pena revisar cada paso, interacciones, e incluso diseño, para comprobar que todo está tan claro como debe ser. Realiza los cambios necesarios para evitar confusiones o problemas.

### Ayude a sus clientes con sus pagos rechazados
Es importante que expliques a tus clientes el motivo de la denegación del pago y qué medidas puedes tomar para solucionarlo. Tus clientes tendrán toda la información que necesitan para pagar sin problemas.

Por ejemplo, si se rechaza un pago por fondos insuficientes, puede recomendarles que intenten nuevamente con otro método de pago para completar la transacción.

> NOTE
>
> Importante
>
> Si utilizas el Checkout Pro, no te preocupes, ya tienes configurados los mensajes según cada caso. Y si usas otro de nuestros productos, te recomendamos mostrar un [mensaje específico por cada motivo de rechazo](/developers/es/guides/online-payments/checkout-api/handling-responses).


### Agrega nuestro código de seguridad en tu sitio

Agrega el código de seguridad de Mercado Pago a tu sitio, reemplazando el valor de `view` con el nombre de la sección en la que deseas agregarlo (Ej.: home, search, item).

```html
<script src="https://www.mercadopago.com/v2/security.js" view="home"></script>
```

> NOTE
>
> Importante
>
> En caso de no tener un valor disponible para la sección, puedes dejarlo vacío.

### Uso del device ID en la web

La identificación del dispositivo es una información importante para garantizar una mejor seguridad y, en consecuencia, una mejor tasa de aprobación de pagos. Representa **un identificador único para el dispositivo de cada comprador** en el momento de la compra.

Si un comprador frecuente haz una compra desde un dispositivo diferente al habitual, esto podría representar un comportamiento falso e indicarnos que esta transacción no debe realizarse.

Para usarlo en la web, debe seguir los siguientes pasos:


#### 1. Agrega nuestro código de seguridad
Para implementar la generación del device ID en su sitio, agregue el siguiente código a su página de Checkout:

```html
<script src="https://www.mercadopago.com/v2/security.js" view="checkout"></script>
```

#### 2. Obteniendo el device ID

Una vez que hayas agregado el código de seguridad de Mercado Pago a tu sitio, automáticamente se crea una variable JavaScript global con el nombre `MP_DEVICE_SESSION_ID`, cuyo valor es el ID del dispositivo. 

  - Si prefiere asignarlo a otra variable, indique el nombre agregando el atributo `output` al script de seguridad, como en el siguiente ejemplo:  
  ```html
  <script src="https://www.mercadopago.com/v2/security.js" view="checkout" output="deviceId"></script>
  ```

  - También puede crear su propia variable agregando una etiqueta HTML a su sitio con el identificador `id="deviceID"`, como en el siguiente ejemplo:
  ```html
  <input type="hidden" id="deviceId">
  ```

#### 3. Uso del device ID
Una vez que tenga el valor de ID del dispositivo, debe enviarlo a nuestros servidores al crear un pago. Para hacer esto, agregue el siguiente encabezado (header) a la solicitud:

```http
X-meli-session-id: device_id
```

> WARNING
> 
> Atención
>
> Recuerde reemplazar `device_id` con el nombre de la variable que contiene su valor de ID del dispositivo.


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