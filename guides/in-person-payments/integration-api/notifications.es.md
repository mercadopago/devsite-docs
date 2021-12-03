# Configura tus notificaciones

Si quieres, puedes recibir notificaciones de Webhooks. Estas se envían desde nuestra API de Integraciones a tu sistema receptor mediante una llamada ´HTTP POST´ en relación a los cambios de estado que presente una intención de pago.

Para integrar las notificaciones Webhook, sigue las instrucciones de [esta documentación](https://www.mercadopago.com.ar/developers/es/guides/notifications/webhooks).

## Registra y valida tu webhook

Una vez tengas listo tus notificaciones de Webhook puedes registrarlas en nuestra API de Integraciones de la siguiente manera:

``` curl
curl --location --request PATCH 'https://api.mercadopago.com/point/integration-api/integrators' \
--header 'Authorization: Bearer ${ACCESS_TOKEN}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "webhook": "http://your.server.ip.address:port/webhook"
}'
```

La respuesta será un `HTTP 204 No Content`.


Luego, deberás validar tus notificaciones Webhook. Esta petición es necesaria para que Mercado Pago Point pueda validar que el sistema webhook configurado le pertenece realmente al integrador, esto es requerido para evitar ataques de amplificación.

``` curl
curl --location --request POST 'https://api.mercadopago.com/point/integration-api/integrators/check' \
--header 'Authorization: Bearer ${ACCESS_TOKEN}'
```

La respuesta será nuevamente un `HTTP 204 No Content`.

> Puedes consultar los [estados de una intención de pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/in-person-payments/integration-api/glossary#bookmark_posibles_estados_de_una_intención_de_pago) para conocer más acerca de las notificaciones que recibirás.

## Ejemplos de implementación del algoritmo HMAC-SHA256

Puedes desarrollar el sistema webhook en el lenguaje de programación de tu preferencia, para ello es necesario implementar una única URL que de respuesta a las peticiones `HTTP GET` para la validación del webhook y `HTTP POST` para la recepción de las notificaciones.

## Implementación de HTTP GET - Validación de seguridad

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


### Próximos pasos

> LEFT_BUTTON_RECOMMENDED_ES
>
> Prueba tu integración de forma segura
>
> Utiliza el Simulador Point para probar tu integración.
>
> [Simulador Point](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/in-person-payments/integration-api/point-simulator)

