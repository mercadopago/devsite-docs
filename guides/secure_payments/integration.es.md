# Secure Payments

Secure Payments es una solución eficiente y conveniente para realizar pagos a través de un único llamado a la API.
Esta funcionalidad permite realizar pagos de forma rápida y sencilla, sin la necesidad de realizar llamados a más APIs. Con Secure Payments, podrás obtener acceso a las diferentes opciones de pago a través de un único llamado a nuestra API. 


## Requisitos previos

| Requisitos | Descripción |
|---|---|
| Cuenta Mercado Pago | Es necesario que el integrador tenga una cuenta en Mercado Pago para poder generar sus credenciales. Si no la tienes, [haz clic aquí](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration/landing) para crearla. |
| Credenciales | Las [credenciales](/developers/es/docs/your-integrations/credentials) son contraseñas únicas con las que identificamos una integración en tu cuenta, y que sirven para capturar pagos en tiendas virtuales y otras aplicaciones de forma segura. |
| Normativa PCI DSS | Para garantizar la protección de los datos confidenciales de nuestros usuarios y cumplir con las mejores prácticas de seguridad de la industria, solo se tendrá acceso por medio de flujos que cumplan con requisitos PCI DSS. Recomendamos acceder al [sitio oficial de PCI](https://www.pcisecuritystandards.org/) para más información. | Requerido |

## Integración

Para utilizar Secure Payments, deberás hacerlo a través de pedidos a las siguientes APIs. Ten en cuenta que deberás adicionar en el body de la petición tanto los datos de la tarjeta como la información necesaria para realizar el pago.

| Ambiente | URL |
|---|---|
| Staging (pruebas) | `https://api.mercadopago.com/v1/secure_payments/zeta` |
| Producción | `https://api.mercadopago.com/v1/secure_payments/ ` |

A continuación, te compartimos un pedido de ejemplo. Ten en cuenta que deberás cambiar el valor del campo `token` por tu Access Token.

```curl
curl --location 'https://api.mercadopago.com/v1/secure_payments/zeta?access_token=TOKEN' \
-H 'X-Caller-Scopes: payments' \
-H 'Content-Type: application/json' \
-d '{
   "binary_mode": true,
   "capture": true,
   "card": {
       "card_number": "4688163623817035",
       "security_code": "438",
       "expiration_month": "08",
       "expiration_year": "2024",
       "cardholder": {
           "identification": {
               "number": "123456",
               "type": "DNI"
           },
           "name": "APRO"
       },
       "device": {
           "fingerprint": {}
       },
       "require_esc": false
   },
   "description": "Lorem ipsum.",
   "installments": 1,
   "issuer_id": "303",
   "payer": {
       "first_name": "APRO",
       "last_name": "APRO",
       "address": {},
       "identification": {
           "number": "123456",
           "type": "DNI"
       },
       "email": "test@testuser.com"
   },
   "payment_method_id": "visa",
   "statement_descriptor": "Lorem ipsum.",
   "transaction_amount": 9000
}
```

## Integrar pagos presenciales

Es posible realizar un pago presencial en un dispositivo MPOST (dispositivo captador de dinero) que cuente con la información de la tarjeta cifrada. 

> WARNING
>
> Importante
>
> Antes de utilizar este método, verifica que el dispositivo se encuentre registrado y aprobado por Mercado Pago. 

Para realizar un pago presencial, deberás cambiar el campo `card` por **`card_present`**. A continuación, te mostramos un ejemplo de petición:

```
curl--location 'https://api.mercadopago.com/v1/secure_payments/zeta?access_token=TOKEN'\ -
	H 'X-Caller-Scopes: payments'\ -
	H 'Content-Type: application/json'\ -
	d '{
"binary_mode": true,
"capture": true,
"card_present": {
	"card_data_entry_mode": "2",
	"card_sequence_number": "02",
	"track2": "107547ee4bad13deb793c8f04ddc4a70c88913e2680856c38f8f48b4a5ab64c213d0512428a73f6d",
	"ksn": "0d040b76543210e001f8",
	"icc_related_data": "5010414D45524943414E204558505245535382025C008408A0000000250108018E180000000000000000420141035E035F0300000000000000008F01C9950502000080009A032011199B02E8009C010091005F201041454950532032332F56455220322E305F24032412315F25031711015F2A0209865F300202015F3401029F02060000000033009F03060000000000009F0608A0000000250108019F0702FF009F090200019F0D05FC50ECA8009F0E0500000000009F0F05FC78FCF8009F100706020103A400009F160F4D45524348414E54303030303030319F1A0200769F1C085445524D303030319F1E0830373030303034319F26087F490A8F139D58BA9F2701809F3303E0F0E89F34034103029F3501229F360204019F37049325DA479F4104000000019F4502DAC1",
	"fallback_indicator": false,
	"poi": "8701012007000041",
	"poi_signature": "0c074a2b [APP_PRO2]:aa6d737ff3faef73b9c96b868a83e6f11e959950095b8045a02a9467",
	"poi_type": "GERTEC_MP35P",
	"trx_id": "1754288142011191155248701012007000041",
	"tag": "chip",
	"has_chip": "true",
	"app_version": "1.2.1"
},
"cardholder": {
	"name": "AEIPS 23/VER 2.0"
},
"security_code": "0000"
}
```

## Descripción de los campos del request

Para conocer la descripción de cada campo del request, dirígete hacia la sección Referencia de API. 

## Información sobre respuestas

Para obtener información detallada sobre las posibles respuestas de error provenientes del proceso de creación del pago, accede a la [API de Pagos](/developers/es/reference/payments/_payments/post) en nuestra Referencia de API.

Es importante tener en cuenta que, en su mayoría, los errores mencionados en la documentación funcional estarán representados por el código de estado 424 - "Failed Dependency". Los detalles de los errores se encuentran en el cuerpo de la respuesta, por lo que se recomienda examinar el contenido para obtener información adicional sobre los errores específicos. 

### Modelos de cifrado 

* Para dispositivos Poi del tipo **“newland_mlb”** con KSN el cifrado se realiza con la derived key  a través de 3DES y con modo de operación ECB, obteniendo de esta forma los datos de card present como son el PAN, fecha de expiración, datos del titular de la tarjeta y el track1:
    * Ejemplo: 
    PoiType = NEWLAND_MLB_1234
    Track1 = 59BF2A2DA3D02BB6491BF8756B47D05397D3B3E95F13F4F1EC63C1F6A33E0C86493F91D1358C0D7216AC5703D89CC2EB299950B3A3D69D8C1BA38F0A714809F8A8A821D54CC2ADFB
    KSN = FFFFF010010000E00016

    * Resultado:

    PAN = 7657773111126363
    Fecha expiracion = 07/2022
    Titular de la tarjeta = KREIFF DE MENTIRA
    Track1 = B7657773111126363^KREIFF/DEMENTIRA^2207201000000100000000950000000

* Para los siguientes dispositivos **"pax_d180c", "gertec_mp35p", "pax_a910", "dspread_cr100", "dspread_d20", "dspread_mp300", "redelcompax_d210", "redelcompax_a910", "redelcompax_a920", "redelcompax_a920-pro", "redelcompax_im20", "smartpesa_softpos", "newland_n950"** que soportan HEX CBC decoding el cifrado se realiza con la derived key a través de 3DES y con modo de operación CBC, obteniendo de esta forma los datos de card present como son el PAN, fecha de expiración, datos del titular de la tarjeta y el track1 
    * Ejemplo: 
    Track1 = 4596CEF2DB0337030FB06765410ACDDB87AC1104CF9ED81C11D3BD831D12A68D6F289E61C588A7C6A79EC1DE4D056BF6
    KSN = 0A010BF0000000000002
    * Resultado:
    PAN = 5413330089020011
    Fecha expiracion = 12/2025
    Titular de la tarjeta = John Doe 
    Track1 = B4000340099900505^John/Doe ^22251110000123000

* Para dispositivos POI del tipo **“Bbpos”** con KSN el cifrado se realiza con la derived key a través de 3DES y con modo de operación CBC, obteniendo de esta forma los datos de card present como son el PAN, fecha de expiración, datos del titular de la tarjeta y el track1 
    * Ejemplo: 
    Track1 = A3F5E85954E0D9C992D5E1C04A60242D295945E0DD2C974C
    KSN = FFFF9876543210E000F9
    * Resultado:
    PAN = 4540750031789984
    Fecha expiracion = 10/2019
    Titular de la tarjeta = “”
    Track1 = 4540750031789984=19102016010000000000

* Para dispositivos POI del tipo **“abecs”** el cifrado se realiza con la working key a tráves de 3DES y con modo de operación CBC, obteniendo de esta forma los datos de card present como son el PAN, fecha de expiración, datos del titular de la tarjeta y el track1 
    * Ejemplo: 
    Track1 = B73BEB4ADF6A3B7A3^TEST MARCELO            ^171220100000        00510000000  
    Working key = 22222222222222222222222222222222
    * Resultado:
    PAN = 4074090252161538
    Fecha expiracion = 12/2017
    Titular de la tarjeta = TEST MARCELO 
    Track1 = B4074090252161538^TEST MARCELO            ^171220100000        00510000000  

* Para dispositivos Poi del tipo **“newland”** el cifrado se realiza con la working key a través de 3DES y con modo de operación ECB, obteniendo de esta forma los datos de card present como son el PAN, fecha de expiración, datos del titular de la tarjeta y el track1 
    * Ejemplo: 
    Track1 = EE9CB14C4F92A690D68CD81F3C3FBEF37A1656DF0635B3DFD297B4BF74A3756224C4F86A48A0F130612FAB419023C9D73EBFFD5FF48AA36BD1920EA92F5B6A40
    Working key = 22222222222222222222222222222222
    * Resultado:
    PAN = 340431451910745
    Fecha expiracion = 01/2022
    Titular de la tarjeta = TESTTEST TESTER NICOLAS   
    Track1 = B340431451910745^TESTTEST/TESTER NICOLAS   ^2201201170191641








