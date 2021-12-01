#  Comienza a procesar tus pagos

Para comenzar a procesar tus pagos, sigue estos pasos: 

## Obtén el listado de tus dispositivos disponibles

Antes de crear una intención de pago, debes obtener los dispositivos Point asociados a tu cuenta. Pueden hacerlo de esta manera:

``` curl
curl --location --request GET 'https://api.mercadopago.com/point/integration-api/devices' \
--header 'Authorization: Bearer ${ACCESS_TOKEN}' \
```

Recibirás una respuesta como esta:

```json
{
  "devices": [
    {
      "id": "GERTEC_MP35P__8701012051261234"
    },
    {
      "id": "INGENICO_MOVE2500__87010121123456"
    }
  ]
}
```
## Crea la intención de pago
Puedes crear una intención de pago y asignarla a tu dispositivo Point de esta manera:

----[mla, mlm]----
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
'amount'             | Monto total de la intención de pago. |
'external_reference' | Campo de uso exclusivo del integrador para incluir referencias propias de su sistema. |
'print_on_terminal'  | Campo que determina si el dispositivo realiza la impresión del comprobante de pago. |
'ticket_number'      | Número de ticket de la intención de pago. |

Como respuesta, recibirás algo similar a esto:

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
amount                    | Monto total de la intención de pago. | 
description               | Descripción de la intención de pago. | 
payment.type              | Tipo de método de pago. | 
payment.installments      | Cantidad de cuotas de pago. | 
payment.installments_cost | Costo por las cuotas de pago. | 
external_reference        | Campo de uso exclusivo del integrador para incluir referencias propias de su sistema. | 
print_on_terminal         | Campo que determina si el dispositivo realiza la impresión del comprobante de pago. | 

Como respuesta, recibirás algo similar a esto:

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

## Cancela una intención de pago

Puedes cancelar una intención de pago asignada a un dispositivo Point de la siguiente manera:

``` curl
curl --location --request DELETE 'https://api.mercadopago.com/point/integration-api/devices/:deviceId/payment-intents/:paymentIntentId' \
--header 'Authorization: Bearer ${ACCESS_TOKEN}' \
```

Obtendrás esta respuesta:

``` json
{
  "id": "7d8c70b6-2ac8-4c57-a441-c319088ca3ca"
}
```

## Procesa tu intención de pago

Una vez creada la intención de pago, puedes obtenerla desde tu dispositivo Point oprimiendo la tecla verde del dispositivo y continuando
con los pasos que se muestran en la pantalla para completar el pago.

## Recibe tu notificación

Si configuraste tus [notificaciones Webhooks](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/in-person-payments/integration-api/integration#bookmark_3._Prepara_y_configura_tus_notificaciones_de_Webhook), recibirás una notificación al finalizar el proceso de pago.
Puedes consultar los [estados de una intención de pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/in-person-payments/integration-api/glossary#bookmark_posibles_estados_de_una_intención_de_pago) para conocer más acerca de las notificaciones que recibirás.

## Ejemplos de implementación del algoritmo HMAC-SHA256

Puedes desarrollar el sistema webhook en el lenguaje de programación de tu preferencia, para ello es necesario implementar
una única URL que de respuesta a las peticiones `HTTP GET` para la validación del webhook y `HTTP POST` para la recepción de las notificaciones.

### Implementación de HTTP GET - Validación de seguridad

Para implementar el sistema receptor de notificaciones webhook, es necesario implementar el algoritmo **HMAC-SHA256** para dar respuesta a la petición HTTP GET con el `challengeCode` encriptado en formato hexadecimal.

A continuación se muestran snippets de la implementación del algoritmo de cifrado:

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


## Consulta el estado de tu intención de pago

Puedes consultar el estado actual de tu intención de pago utilizando el `id` que recibiste en la respuesta al momento de crear la intención de pago.

``` curl
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

----[mla, mlm]----
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
> Nota
>
> Consulta toda la información correspondiente al pago en la sección [API de Pagos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/payments/_payments_id/get) de Referencia de API. 


