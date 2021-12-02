# Configura tus notificaciones

Configura tus [notificaciones Webhooks](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/in-person-payments/integration-api/integration#bookmark_3._Prepara_y_configura_tus_notificaciones_de_Webhook), recibirás una notificación al finalizar el proceso de pago.
Puedes consultar los [estados de una intención de pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/in-person-payments/integration-api/glossary#bookmark_posibles_estados_de_una_intención_de_pago) para conocer más acerca de las notificaciones que recibirás.

## Ejemplos de implementación del algoritmo HMAC-SHA256

Puedes desarrollar el sistema webhook en el lenguaje de programación de tu preferencia, para ello es necesario implementar una única URL que de respuesta a las peticiones `HTTP GET` para la validación del webhook y `HTTP POST` para la recepción de las notificaciones.

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

### Próximos pasos

> LEFT_BUTTON_RECOMMENDED_ES
>
> Prueba tu integración de forma segura
>
> Utiliza el Simulador Point para probar tu integración.
>
> [Simulador Point](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/in-person-payments/integration-api/point-simulator)

