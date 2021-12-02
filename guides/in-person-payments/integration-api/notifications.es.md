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


### Próximos pasos

> LEFT_BUTTON_RECOMMENDED_ES
>
> Prueba tu integración de forma segura
>
> Utiliza el Simulador Point para probar tu integración.
>
> [Simulador Point](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/in-person-payments/integration-api/point-simulator)

