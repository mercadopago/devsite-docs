# Obtener credenciales

Utiliza el código de autorización obtenido en el paso anterior para adquirir las credenciales del usuario mediante la [API de OAuth](/developers/es/reference/oauth/_oauth_token/post), permitiéndote gestionar sus ventas.

| Parámetro                | Descripción                                                                                      |
|--------------------------|--------------------------------------------------------------------------------------------------|
| `<CLIENT_ID>`            | Valor de APP_ID obtenido en los detalles de tu aplicación.                                      |
| `<CLIENT_SECRET>`        | Tu SECRET_KEY, también disponible en los detalles de tu aplicación.                              |
| `<AUTHORIZATION_CODE>`   | Código de autorización obtenido al redirigir al usuario de vuelta a tu sitio.                     |
| `<REDIRECT_URI>`         | Debe ser la misma Redirect URI configurada en tu aplicación.                                     |

```curl
curl -X POST \
     -H 'accept: application/json' \
     -H 'content-type: application/x-www-form-urlencoded' \
     'https://api.mercadopago.com/oauth/token' \
     -d 'client_id=<CLIENT_ID>' \
     -d 'client_secret=<CLIENT_SECRET>' \
     -d 'grant_type=authorization_code' \
     -d 'code=<AUTHORIZATION_CODE>' \
     -d 'redirect_uri=<REDIRECT_URI>'
```

#### Respuesta

```json
{
    "access_token": "SELLER_PAYER_TOKEN",
    "public_key": "PUBLIC_KEY",
    "refresh_token": "TG-XXXXXXXXX-XXXXX",
    "live_mode": true,
    "user_id": "COLLECTOR_ID DE PAGO",
    "token_type": "bearer",
    "expires_in": 15552000,
    "scope": "offline_access payments write"
}
```

La respuesta incluye:
- `access_token` y `public_key` del vendedor vinculado.
- `refresh_token`, que debes utilizar para renovar periódicamente las vinculaciones.
- `user_id`, igual al `collector_id` que se utiliza para capturar pagos.

> WARNING
>
> Importante
>
> Estas credenciales tienen una validez de 6 meses. En caso de no renovarse antes de ese período, perderán vigencia y será necesario repetir el proceso de vinculación para autorizar nuevamente al vendedor. Para saber cómo renovar estas credenciales, consulta el paso a paso en la [documentación de Renovación](/developers/es/docs/split-payment/additional-content/security/oauth/renewal).