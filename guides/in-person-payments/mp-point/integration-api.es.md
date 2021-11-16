# ¿Qué es la API de Integraciones?

Es una interfaz que permite conectar tus **puntos de venta** (PDV) al ecosistema Point para recibir pagos en las terminales que tengas configuradas y garantizar una experiencia de cobro unificada.

![Diagrama 1](/images/mobile/pdv-flow.png)

----[mla]----
> INFO
>
> Dispositivos soportados con esta integración:
>
> - [Point Smart (POS)](https://www.mercadopago.com.ar/point-smart?ref=devsite)
> - [Point Plus (POS)](https://www.mercadopago.com.ar/point-plus?ref=devsite)
------------

----[mlb]----
> INFO
>
> Dispositivos soportados con esta integración:
>
> - [Point Pro2 (POS)](https://www.mercadopago.com.br/point-pro-2?ref=devsite)
> - [Point Mini Chip (POS)](https://www.mercadopago.com.br/point-mini-chip?ref=devsite)
------------

**Características:**

- **Es segura.** Todas las peticiones se hacen a través de HTTPS.
- **Fácil de usar.** Únicamente necesitas tus credenciales de acceso para utilizarla.
- Administra tus ordenes de pago desde tu PDV.
- Disminuye la posibilidad de errores al momento de cobrar.

## Flujo de como funciona la API de Integraciones

Te presentamos un diagrama de flujo con el cual puedas tener una mayor claridad de cómo funcionamos.

![Mercado Pago Point Flow](/images/mobile/MercadoPagoFlowPoint.png)

----[mla]----
> NOTE
>
> API Reference
>
> Está a tu disposición la documentación de la API de Integraciones, puedes descargarla y ejecutarla en Postman.
> Recuerda tener tu **ACCESS_TOKEN** a la mano. [API Reference](https://documenter.getpostman.com/view/16045907/TzzEou9q)
------
------------
----[mlb]----
> NOTE
>
> API Reference
>
> Está a tu disposición la documentación de la API de Integraciones, puedes descargarla y ejecutarla en Postman.
> Recuerda tener tu **ACCESS_TOKEN** a la mano. [API Reference](https://documenter.getpostman.com/view/16045907/TzzEoaMm)
------
------------
### Requisitos previos

Ten en cuenta estos aspectos antes de empezar:

## 1. Obtén las credenciales de identificación para tu integración 

### 1.1 Accede a una cuenta

Para poder comenzar la integración, es necesario **contar con una cuenta de Mercado Pago o Mercado Libre**.
Puedes [Ingresar](https://www.mercadolibre.com/jms/[FAKER][GLOBALIZE][SITE_ID]/lgz/login?platform_id=mp&go=https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/in-person-payments/qr-code/pre-requisites)
a una cuenta ya existente o [Crear una cuenta nueva](https://www.mercadopago[FAKER][URL][DOMAIN]).

### 1.2 Crea una aplicación

Necesitarás crear una aplicación por cada solución para tener todo organizado y llevar un control que te facilite la
gestión. Crea una aplicación para obtener credenciales y configurar notificaciones webhooks.

Es fácil, te contamos cómo hacerlo:

1. Ingresa a [Tus integraciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/applications).
2. Elige “Nueva aplicación” o “Crear tu primera aplicación”.
3. Ponle un nombre con el que puedas identificarla más adelante.
4. Acepta nuestros Términos y Condiciones. ¡Y listo!

----[mla]----
![Crear Aplicacion](/images/mobile/CrearAppIntegracion.gif)
------------
> NOTE
>
> Nota
>
> Si vas a operar en nombre de otros, puedes trabajar con las credenciales de ellos de una forma más fácil y segura por [Marketplace](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/marketplace/checkout-api/introduction).
>

### 1.3 Accede a las credenciales de tu aplicación

Una vez que tengas una aplicación
creada, [podrás acceder a las credenciales](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/credentials).
Con ellas puedes conectar una integración a tu cuenta y configurarla a tu manera.

### Genera usuarios de prueba (opcional)

Puedes probar tus integraciones en un ambiente controlado mediante el uso de usuarios de prueba, para crearlos puedes
hacerlo usando el siguiente comando:

----[mlb]----

``` curl
curl -X POST \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer ${PROD_ACCESS_TOKEN}' \
"https://api.mercadopago.com/users/test_user" \
-d '{"site_id":"MLB"}'
```

------------
----[mla]----

``` curl
curl -X POST \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer ${PROD_ACCESS_TOKEN}' \
"https://api.mercadopago.com/users/test_user" \
-d '{"site_id":"MLA"}'
```

------------
----[mlm]----

``` curl
curl -X POST \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer ${PROD_ACCESS_TOKEN}' \
"https://api.mercadopago.com/users/test_user" \
-d '{"site_id":"MLM"}'
```

------------


> WARNING
>
> IMPORTANTE
>
> * En el paso 1.2 te mostramos como obtener el `ACCESS_TOKEN` de tu nuevo usuario de pruebas.
> * Puedes generar hasta 10 cuentas de usuarios de prueba en simultáneo. Por eso, te recomendamos guardar el email y password de cada uno.
> * Los usuarios de prueba caducan luego de 60 días sin actividad en Mercado Pago.
> * No es posible obtener pagos exitosos con usuarios de pruebas, es por eso que hemos diseñado un [Simulador Point](https://api.mercadopago.com/point/integrator-simulator/sandbox/?ignoreapidoc=true) que te ayudará a depurar la API.

## 2. Asocia tu dispositivo Point a tu cuenta de Mercado Pago
> NOTE
>
> Para poder vincular tu dispositivo Point a tu cuenta de Mercado Pago es necesario descargar la aplicación en tu celular, la puedes encontrar en los marketplaces de [iOS](https://itunes.apple.com/ar/app/mercado-pago/id925436649?mt=8) y [Android](https://play.google.com/store/apps/details?id=com.mercadopago.wallet&hl=es_419).
 



### 2.1. Escanea el código QR de tu dispositivo Point
Inicia sesión en la aplicación de Mercado Pago, oprime en el ícono QR y escanea el código que aparece al encender tu dispositivo Point, de esta forma tu dispositivo Point
quedará vinculado a tu cuenta.

![Qr Point Scan](/images/mobile/point-qr-scan.png)

### 2.2. Configura tu tienda y tu caja

Una vez vinculado el dispositivo Point a tu cuenta de Mercado Pago, debes completar los datos de tu negocio y configurar tu caja.

----[mla]----
![Locales y Cajas](/images/mobile/tienda-caja.es.png)
------------

----[mlb]----
![Locales y Cajas](/images/mobile/tienda-caja.pt.png)
------------

### 2.3. Autoriza y vincula cuentas en tus aplicaciones
Para poder gestionar vatias cuentas de Mercado Pago a la vez en tu integración,  realiza el proceso de [OAuth](https://www.mercadopago.com.ar/developers/es/guides/security/oauth). También dejamos un par de videos para que conozcas acerca de OAuth

+ [Introducción OAuth](https://www.youtube.com/watch?v=BBpRiaJUEAw)
+ [Integración OAuth](https://www.youtube.com/watch?v=hnLGGPZ_KNo)

### 2.4. Activa el modo integrado en tu dispositivo Point
Para poder iniciar a usar el dispositivo en modo integrado con nuestra API, activaremos el modo de operación `PDV`. Y si no queremos usar el modo integrado pondremos en el campo operating_mode: `STANDALONE` y así se procesarian pagos sin nuestra API.

``` curl
curl --location -g --request PATCH 'https://api.mercadopago.com/point/integration-api/devices/{{device.id}}' \
--header 'Authorization: Bearer <token>' \
--header 'x-test-scope: sandbox' \
--data-raw '{
    "operating_mode":"PDV"
}'
```
- **Ejemplo de respuesta** 

``` json
{
  "operating_mode": "PDV"
}
```

## 3. Prepara y configura tus notificaciones de Webhook (opcional)
**¿Qué son las notificaciones de Webhooks?**
<br/>
Son notificaciones que se envían desde nuestra API de Integraciones a tu sistema receptor mediante una llamada HTTP en relación a los cambios de estado que presente una intención de pago.
<br/>

- **Obtén tu token:** Por medio de este endpoint puedes obtener tu token que te será útil al momento de configurar tu webhook.
``` curl
curl --location --request GET 'https://api.mercadopago.com/point/integration-api/integrators' \
--header 'Authorization: Bearer ${ACCESS_TOKEN}' \
```
- **Ejemplo de respuesta** 

``` json
{
    "token": "0230abf9-79e9-493b-b288-32d123456789",
    "webhook": "",
    "is_valid_webhook": false
}
```

<br/>

**¿Cómo funciona?**

Tu sistema debe exponer un servicio API REST a través de una única URL que permita la comunicación con nuestra API de Integraciones.
Esta URL debe soportar las siguientes operaciones:
- **Validación de seguridad HTTP GET:** Esta operación es requerida para validar que el sistema webhook configurado te pertenece.
  Nuestra API de Integraciones realizará la petición al webhook configurado enviando un `challengeCode` como query param, tu endpoint debe encriptarlo utilizando el algoritmo **HMAC-SHA256**
  y responder con el `challengeCode` encriptado en formato hexadecimal.
  El algoritmo requiere de un `secret` que corresponde al `token` obtenido en el **Paso Anterior** y de un message que corresponde al `challengeCode`.

  - **Ejemplo de respuesta**

  ``` json
  {
     "encrypted_challenge": "32268dfc78fd96b0db37195e278c3a657c0125552f659967c654dbf7f285b004"
  }
  ```
- **Recepción de notificaciones HTTP POST:** Esta operación es necesaria para que el integrador pueda recibir las notificaciones en la plataforma.
  Enviaremos la notificación al webhook configurado cada vez que se genere un cambio de estado referente a una intención de pago.

  - **Ejemplo de notificación enviada a tu webhook**

  ``` json
  {
   "id": "7d8c70b6-2ac8-4c57-a441-c319088ca3ca",
   "created_at": "2021-08-22 19:24:14",
   "amount": 1400,
   "payment": {
      "id": 18308029193,
      "type": "credit_card",
      "state": "approved"
   } ,
   "additional_info": {
      "external_reference": "3cc6b09c-eb77-4812-899e-4ff003cd21ed"
   },
   "state": "FINISHED"
  }
  ```

  Campo | Descripción
    ------------------ | -----------------
  id                 | Identificador de la intención de pago
  created_at         | Fecha de creación de la intención de pago
  amount             | Monto total de la intención de pago
  payment.id         | Identificador del pago
  payment.type       | Tipo de tarjeta
  payment.state      | Estado final del pago
  external_reference | Campo de uso exclusivo del integrador para incluir referencias propias de su sistema
  state              | Estado final de la intención de pago


### 3.1. Registra tu webhook
Una vez tengas listo tu sistema webhook puedes registrarlo en nuestra API de Integraciones

``` curl
curl --location --request PATCH 'https://api.mercadopago.com/point/integration-api/integrators' \
--header 'Authorization: Bearer ${ACCESS_TOKEN}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "webhook": "http://your.server.ip.address:port/webhook"
}'
```

La respuesta será un `HTTP 204 No Content`.

### 3.2. Valida tu webhook

Esta petición es necesaria para que MercadoPago Point pueda validar que el sistema webhook configurado le pertenece realmente al integrador, esto es requerido para evitar ataques de amplificación.

``` curl
curl --location --request POST 'https://api.mercadopago.com/point/integration-api/integrators/check' \
--header 'Authorization: Bearer ${ACCESS_TOKEN}'
```

La respuesta será un `HTTP 204 No Content`.

------------

#  Comienza a procesar tus pagos

## 4. Crea una intención de pago

### 4.1. Obtén el listado de tus dispositivos disponibles
Antes de crear una intención de pago, es necesario obtener los dispositivos Point asociados a tu cuenta.

Podrás obtener la lista de dispositivos por caja y/o sucursal, es importante conocer los ID's para poder realizar este filtro. Para conocer los id's puedes usar los siguientes servicios [buscar cajas](https://www.mercadopago.com.ar/developers/es/reference/pos/_pos/get) y [buscar sucursales](https://www.mercadopago.com.ar/developers/es/reference/stores/_users_user_id_stores_search/get)

``` curl
curl --location --request GET 'https://api.mercadopago.com/point/integration-api/devices' \
--header 'Authorization: Bearer <token>' \
```

Ejemplo de respuesta:

``` json
{
  "devices": [
    {
      "id": "GERTEC_MP35P__9876543210123456"
      "operating_mode": "STANDALONE"
    },
    {
      "id": "INGENICO_MOVE2500__ING-ARG-12345678",
      "operating_mode": "PDV"
    }
  ],
  "paging": {
    "total": 2,
    "limit": 50,
    "offset": 0
  }
}
```

### 4.2. Crea la intención de pago
Puedes crear una intención de pago y asignarla a tu dispositivo Point obtenido en el paso anterior.

----[mla]----
```curl
curl --location --request POST 'https://api.mercadopago.com/point/integration-api/devices/:deviceId/payment-intents' \
--header 'Authorization: Bearer ${ACCESS_TOKEN}' \
--data-raw '{
    "amount": 1500,
    "additional_info": {
        "external_reference": "4561ads-das4das4-das4754-das456",
        "print_on_terminal": true,
        "ticket_number": "S0392JED"
    }
}'
```
Campo | Descripción
:--- | :--- | 
amount             | monto total de la intención de pago |
external_reference | campo de uso exclusivo del integrador para incluir referencias propias de su sistema  |
print_on_terminal  | campo de tipo boolean que determina si el dispositivo realiza la impresión del comprobante de pago  |
ticket_number      | número de ticket de la intención de pago |

Ejemplo de respuesta

```json
{
  "id": "7d8c70b6-2ac8-4c57-a441-c319088ca3ca",
  "device_id": "INGENICO_MOVE2500__ING-ARG-14886780",
  "amount": 1500,
  "additional_info": {
      "external_reference": "4561ads-das4das4-das4754-das456",
      "print_on_terminal": true,
      "ticket_number": "S0392JED"
  }
}
```
------------

----[mlb]----
```curl
curl --location --request POST 'https://api.mercadopago.com/point/integration-api/devices/:deviceId/payment-intents' \
--header 'Authorization: Bearer ${ACCESS_TOKEN}' \
--data-raw '{
    "amount": 1400,
    "description": "Your payment description",
    "payment": {
        "type": "credit_card",
        "installments": 1, 
        "installments_cost": "seller"
    },
    "additional_info": {
        "external_reference": "4561ads-das4das4-das4754-das456",
        "print_on_terminal": true
    }
}'
```
Campo | Descripción
:--- | :---
amount                    | valor total da intenção de pagamento | 
description               | descrição da sua intenção de pagamento | 
payment.type              | tipo de cartão de pagamento | 
payment.installments      | quantidade de parcelas de pagamento | 
payment.installments_cost | quem assume o custo de parcelamento | 
external_reference        | campo de uso exclusivo do integrador para incluir referências do seu próprio sistema | 
print_on_terminal         | Campo booleano que determina se o dispositivo imprime o comprovante de pagament | 

Ejemplo de respuesta

```json
{
    "id": "7d8c70b6-2ac8-4c57-a441-c319088ca3ca",
    "device_id": "GERTEC_MP35P__8701012051267097",
    "amount": 1400,
    "description": "Your payment description",
    "payment": {
        "type": "credit_card",
        "installments": 1, 
        "installments_cost": "seller"
    },
    "additional_info": {
        "external_reference": "4561ads-das4das4-das4754-das456",
        "print_on_terminal": true
    }
}
```
------------

### 4.3. Cancela una intención de pago (opcional)

Puedes cancelar una intención de pago asignada a un dispositivo Point

``` curl
curl --location --request DELETE 'https://api.mercadopago.com/point/integration-api/devices/:deviceId/payment-intents/:paymentIntentId' \
--header 'Authorization: Bearer ${ACCESS_TOKEN}' \
```

Ejemplo de respuesta

``` json
{
  "id": "7d8c70b6-2ac8-4c57-a441-c319088ca3ca"
}
```
## 5.  Procesa tu intención de pago

Una vez creada la intención de pago, puedes obtenerla desde tu dispositivo Point oprimiendo la tecla verde y continuar 
con los pasos que se muestran en la pantalla para completar el pago.

## 6. Recibe tu notificación

Si configuraste correctamente tu sistema webhook recibirás una notificación al finalizar el proceso de pago.
Puedes consultar la tabla de [estados de una intención de pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/in-person-payments/mp-point/integration-api/glossary#bookmark_posibles_estados_de_una_intención_de_pago)


## 7. Consulta el estado de tu intención de pago

Puedes consultar el estado actual, solo necesitas el `id` que fue retornado en la respuesta al momento de crear la intención de pago.


``` cURL
curl --location --request GET 'https://api.mercadopago.com/point/integration-api/payment-intents/:paymentIntentID' \
--header 'Authorization: Bearer ${ACCESS_TOKEN}'
```

Ejemplo de respuesta:

----[mlb]----
``` json
{
    "state": "FINISHED",
    "id": "0591cb42-f69a-4334-908b-123456789012",
    "device_id": "GERTEC_MP35P_8701012123456789",
    "amount": 250,
    "description": "Your payment description ",
    "payment": {
        "id": "16123456789",
        "type": "debit_card",
        "installments": 1,
        "installments_cost": "seller"
    },
    "additional_info": {
        "external_reference": "10a01a30-a6fe-4584-b22a-07e123456798",
        "print_on_terminal": true
    }
}
```
------------

----[mla]----
``` json
{
    "state": "FINISHED",
    "id": "0aa0519d-d985-4e83-b62d-dda123456789",
    "device_id": "88731317_INGENICO_MOVE2500_ING-ARG-14123456",
    "amount": 600,
    "payment": {
        "id": "11123456789"
    },
    "additional_info": {
        "ticket_number": "123456789123456789"
    }
}
```
------------

> NOTE
>
> Consulta toda la información correspondiente al pago
>
> Toda la información del pago la puedes encontrar en nuestra [API de Pagos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/payments/_payments_id/get) donde necesitaras tú **ACCESS_TOKEN** y el número de referencia de pago el `payment.id` que es retornado en el **Webhook** (si lo tienes configurado) o por medio del servicio `consulta el estado de tu intención de pago`


------
## Ejemplos de implementación del algoritmo HMAC-SHA256

Puedes desarrollar el sistema webhook en el lenguaje de programación de tu preferencia, para ello es necesario implementar
una única URL que de respuesta a las peticiones `HTTP GET` para la validación del webhook y `HTTP POST` para la recepción de las notificaciones.

## Implementación HTTP GET - Validación de seguridad.

Para implementar el sistema receptor de notificaciones webhook, es necesario
implementar el algoritmo **HMAC-SHA256** para dar respuesta a la petición HTTP GET
con el `challengeCode` encriptado en formato hexadecimal.

A continuación se muestran snippets de la implementación del algoritmo de cifrado en Go, JAVA y Javascript.

## Ejemplo de la implementación HTTP GET - Validación de seguridad.

[[[
```java
import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.math.BigInteger;
import java.nio.charset.StandardCharsets;

public class Main {
    static String SECRET = "YOUR_TOKEN";
    static String CHALLENGE_CODE = "YOUR_CHALLENGE_CODE";

    static String GetEncryptedChallenge(byte[] secret, byte[] challengeCode) {
        try {
            Mac mac = Mac.getInstance("HmacSHA256"); // Returns a Mac object that implements the specified MAC algorithm
            SecretKeySpec secretKeySpec =
                    new SecretKeySpec(secret, "HmacSHA256"); // Constructs a secret key from the given byte array
            mac.init(secretKeySpec); // Initializes this Mac object with the given key
            byte[] hmacSha256 =
                    mac.doFinal(challengeCode); // Processes the given array of bytes and finishes the MAC operation
            return String.format("%064x", new BigInteger(1, hmacSha256)); // Return the HEX String value
        } catch (Exception e) {
            throw new RuntimeException("Failed to calculate hmac-sha256", e);
        }
    }

    public static void main(String[] args) {
        String encryptedChallenge = GetEncryptedChallenge(SECRET.getBytes(StandardCharsets.UTF_8),
                CHALLENGE_CODE.getBytes(StandardCharsets.UTF_8));
                
        // you can return this encrypted challenge on the response body
        System.out.println("encrypted_challenge: " + encryptedChallenge);
    }
}
```
```javascript

// npm install crypto-js

var CryptoJS = require('crypto-js')

const SECRET = 'YOUR_TOKEN';
const CHALLENGE_CODE = 'YOUR_CHALLENGE_CODE';

function GetEncryptedChallenge(secret, challengeCode){

	//encrypt the challengeCode using your token
	const hash = CryptoJS.HmacSHA256(challengeCode, secret);
	const HexHash = CryptoJS.enc.Hex.stringify(hash);
	return HexHash;
}

var encryptedChallenge = GetEncryptedChallenge(SECRET, CHALLENGE_CODE);

// you can return this encrypted challenge on the response body
console.log("encrypted_challenge: ", encryptedChallenge);
```
]]]

------------

# Simulador Point

Hemos diseñado una herramienta para que puedas probar tu integración de forma segura como si estuvieras en tu comercio con un dispositivo físico.
El simulador te permite crear una intención de pago y procesarla desde el dispositivo virtual simulando los posibles estados que puede presentar un pago.

El simulador cuenta con dos modos de uso:

- **PDV Mode**: Simula la integración de un sistema completo (dispositivo y PDV) con nuestra API de Integraciones.
  [Simulador Device Mode](https://api.mercadopago.com/point/integrator-simulator/sandbox/device?ignoreapidoc=true)
- **Device Mode**: Simula un dispositivo Point virtual para que puedas probar tu integración desde los requests HTTP.
  [Simulador PDV Mode](https://api.mercadopago.com/point/integrator-simulator/sandbox/?ignoreapidoc=true)

## Cómo usar el PDV Mode

### 1. Configura tus credenciales

Al utilizar el simulador por primera vez debes ingresar tu Access Token y seleccionar uno de tus dispositivos disponibles, si 
estás utilizando un Access Token de prueba el simulador te asignará un dispositivo virtual.

### 2. Crea una intención de pago

Hemos preparado distintos escenarios que te permiten simular una experiencia real, para ello debes seleccionar el monto de acuerdo con el estado que deseas obtener:

- **Reversed:** $1100

- **Rejected:** $1200

- **Error:** $1300

- **Successful:** Cualquier otro valor, diferente a los anteriores


### 3. Obtén la intención de pago desde el dispositivo

Una vez creada la intención de pago, debes dar clic en el botón verde del dispositivo virtual para obtener la intención de pago creada, una vez encontrado, puedes verificar que el monto ingresado inicialmente coincida con el mostrado en la pantalla del dispositivo.

### 4. Desliza la tarjeta y procesa el pago

Si el paso anterior fue exitoso, puedes dar clic en la animación de la tarjeta, la cual representa el deslizamiento de la misma en el dispositivo, en seguida se iniciará el procesamiento y el dispositivo mostrará el respectivo resultado.

### 5. Recibe la notificación

Si realizaste los pasos de configuración del Webhook, es momento que revises tus logs, allí verás que fue enviada la notificación del estado de la transacción.

## Cómo usar el Device Mode

### 1. Configura tus credenciales

Al utilizar el simulador en Device Mode por primera vez debes ingresar tu Access Token y tu Device Id obtenido al [listar tus dispositivos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/in-person-payments/mp-point/integration-api/create-payment-intent#bookmark_1._crea_una_intención_de_pago)

### 2. Crea una intención de pago

Debes [crear una intención](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/in-person-payments/mp-point/integration-api/create-payment-intent#bookmark_1._crea_una_intención_de_pago) con uno de los siguientes montos para simular el estado correspondiente.

- **Reversed:** $1100

- **Rejected:** $1200

- **Error:** $1300

- **Successful:** Cualquier otro valor, diferente a los anteriores


### 3. Obtén la intención de pago desde el dispositivo

Una vez creada la intención de pago, debes dar clic en el botón verde del dispositivo virtual para obtener la intención de pago creada, una vez encontrado, puedes verificar que el monto ingresado inicialmente coincida con el mostrado en la pantalla del dispositivo.

### 4. Desliza la tarjeta y procesa el pago

Si el paso anterior fue exitoso, puedes dar clic en la animación de la tarjeta, la cual representa el deslizamiento de la misma en el dispositivo, en seguida se iniciará el procesamiento y el dispositivo mostrará el respectivo resultado.

### 5. Recibe la notificación

Si realizaste los pasos de configuración del Webhook, es momento que revises tus logs, allí verás que fue enviada la notificación del estado de la transacción.

------------

## Glosario

Lo sabemos, algunos términos son nuevos y quizás no estés familiarizado con ellos. ¡Usa este glosario para no perderte!

| Termino | Descripción |
| --- | --- |
| PDV | Punto de venta.|
| Integrador | Persona o entidad que quiere procesar un pago por medio de nuestra API.|
| Intención de pago | Contiene los detalles de la transacción.|
| Access token | Llave privada con la cual podrás generar cobros. Debes usarla para identificarte en tus integraciones. Es muy importante que estos datos estén protegidos en tus servidores y no sean accesibles por ningún usuario o atacante. |
| Webhook | Es una notificación que se envía desde nuestro servidor al del integrador mediante una llamada HTTP POST en relación a tus transacciones. |
| Poi | Serial del dispositivo. Lo puedes ver en la parte posterior de tu dispositivo (SN, NS). |
| Poi Type | Tipo de dispositivo. |

## Posibles estados de una intención de pago

| Termino | Descripción |
| --- | --- |
| Open | Estado inicial de una intención de pago al crearlo desde el PDV |
| On Terminal | Estado intermedio de una intención de pago al momento de obtenerla desde el dispositivo Point |
| Processing | Estado intermedio de una intención de pago al momento de conciliar con una entidad financiera |
| Processed | Estado intermedio de una intención de pago al momento de finalizar la conciliación con una entidad financiera |
| Canceled | Estado final de una intención de pago cuando se cancela |
| Abandoned | Estado final de una intención de pago cuando no se procesa después de determinado tiempo |
| Error | Estado final de una intención de pago cuando ocurre un error en la transacción |
| Finished | Estado final de una intención de pago cuando finaliza la transacción |
