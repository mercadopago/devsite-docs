# Información adicional

Es posible enviar información que puede mejorar el análisis de prevención de fraude y la tasa de conversión. Para ello es debido enviar el campo `additional_info` con información del pagador y la dirección de envío. Mientras más información se envíe, mejor será la tasa conversión de los pagos.

Se debe redirigir los usuarios a la siguiente dirección:

`https://auth.mercadopago.com.ar/authorization?client_id=<APP_ID>&response_type=code&platform_id=mp&redirect_uri=<REDIRECT_URI>&scopes=read,write,offline_access,wallet-payments`

donde:

* `<APP_ID>` es el valor de APP_ID.
* `<REDIRECT_URI>` es el valor ingresado en el campo `Redirect Uri`.

Recibirás un código de autorización en la url que especificaste: 

`http://<REDIRECT_URI>?code=AUTHORIZATION_CODE`

Este `AUTHORIZATION_CODE` será utilizado para crear las credenciales, y tiene un tiempo de validez de 10 minutos.

### Obtener el access token y los datos del pagador

Usa el código de autorización, obtenido en el paso anterior, para obtener las credenciales del usuario mediante la API de OAuth y así poder realizar un pago accediendo a los medios de pago de su billetera.

#### Request
```curl
curl -X POST \
    -H 'Accept":"application/json' \
    -H 'Content-Type: application/json' \
    'https://api.mercadopago.com/v1/advanced_payments?access_token=SELLER_TOKEN' \
```

#### Body
```json
{
   "wallet_payment":{
      "transaction_amount":700.50,
      "description":"Payment Google",
      "external_reference":"Pago_123",
      "access_token":"PAYER_ACCESS_TOKEN"      
   },
   "binary_mode": true,
   "additional_info": {
      "shipments": {
         "receiver_address": {
         "zip_code": "1111",
         "street_name": "Avenida Uno y tres cuartos",
         "street_number": 123,
         "floor": 4,
         "apartment": "C"
      }
    },
    "payer": {
      "address": {
         "street_name": "Calle Cuatro",
         "street_number": "342"
      }
    }
  }
}
```
