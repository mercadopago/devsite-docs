---
  indexable: false
---

# Solicitar permisos

### Solicitar permiso a sus usuarios para acceder a su billetera de Mercado Pago

Implementar el flujo de autorización, para solicitar a sus usuarios el permiso para acceder a su billetera. Esto se realiza utilizando un flujo de Oauth.

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
     -H 'Accept: application/json' \
     -H 'Content-Type: application/x-www-form-urlencoded' \
     'https://api.mercadopago.com/oauth/token' \
     -d 'client_id=<CLIENT_ID>' \
     -d 'client_secret=<CLIENT_SECRET>' \
     -d 'grant_type=authorization_code' \
     -d 'code=<AUTHORIZATION_CODE>' \
     -d 'redirect_uri=<REDIRECT_URI>'
```

Los parámetros que debes incluir son:

* `<CLIENT_ID>` Es el valor de `APP_ID`. Puedes obtenerlo desde el detalle de tu aplicación.
* `<CLIENT_SECRET>` Tu `SECRET_KEY`. Puedes obtenerlo desde el detalle de tu aplicación.
* `<AUTHORIZATION_CODE>` El código de autorización que obtuviste al redirigir al usuario de vuelta a tu sitio.
* `<REDIRECT_URI>` Debe ser la misma `Redirect URI` que configuraste en tu aplicación.

#### Response
```json
{
    "access_token": "PAYER_ACCESS_TOKEN",
    "public_key": "PUBLIC_KEY",
    "refresh_token": "TG-XXXXXXXXX-XXXXX",
    "live_mode": true,
    "user_id": USER_ID,
    "token_type": "bearer",
    "expires_in": 15552000,
    "scope": "offline_access payments write wallet-payments"
}
```

En la respuesta, además del `access_token` y `public_key` del payer que se ha vinculado, obtienes el `refresh_token` que debes utilizar para renovar periódicamente sus credenciales.

Las credenciales tienen un tiempo de validez de 6 meses. Si no se renuevan las credenciales de los pagadores antes de los 6 meses, las mismas perderán vigencia y se deberá volver a autorizar al pagador.
