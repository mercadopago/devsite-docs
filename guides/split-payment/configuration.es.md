# Crear configuración

Para configurar la integración con la solución de Split de pagos, deberás [crear tu aplicación](#bookmark_crear_aplicación), [solicitar permisos a tus usuarios](#bookmark_solicitar_permiso_a_usuarios) y [obtener las credenciales](#bookmark_obtener_credenciales). Continúa leyendo para crear la configuración necesaria.

## Crear aplicación

Crea tu aplicación para integrar con la solución de Split de pagos siguiendo los pasos a continuación.

   > NOTE
   >
   > Importante
   >
   > Durante la creación de tu aplicación, es posible que sea necesario reautenticar tu identidad. Si ya has completado la verificación, se solicitará la reautenticación. En caso contrario, serás redirigido para enviar los documentos necesarios. Este paso adicional es esencial para proteger tu cuenta y garantizar la conformidad de las operaciones. Puedes consultar la [documentación sobre el Panel del desarrollador](/developers/es/docs/split-payments/additional-content/your-integrations/dashboard) si tienes alguna pregunta sobre cómo utilizarlo.

1. Accede a [Tus integraciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app). Una vez allí, haz clic en el botón **Crear aplicación**, ubicado en la esquina superior derecha.
2. Ingresa un nombre para identificar tu aplicación (tienes un límite de 50 caracteres).
3. Elige la solución de **Pagos online**.
4. A la hora de elegir el producto a integrar, puedes elegir “Checkout Pro” o ----[mla, mlm, mpe, mco, mlu, mlc]----“Checkout API” ------------ ----[mlb]----"Checkout Transparente" ------------. 
5. Elige el modelo de integración **Marketplace**.
6. Una vez que hayas completado la información solicitada, haz clic en **Crear aplicación** y ¡listo!

### Configurar Redirect URL

En esta etapa, es necesario configurar la Redirect URL para que los vendedores autoricen al marketplace a realizar ventas.

Después de crear la aplicación, es necesario dirigirse a la pantalla de edición para completar el campo de Redirect URL (en las solicitudes de OAuth se muestra como redirect_uri), el cual debe contener la URL del sitio del marketplace a donde se enviará el token del vendedor al completar el proceso de vinculación.

![Redirect URL](/images/split-payment/redirect-url-es.png)

## Solicitar permiso a usuarios 

Para gestionar ventas en nombre de otro usuario, debes solicitar permiso. Para esto, es necesario implementar el flujo de autorización utilizando OAuth, tal como indicamos en los pasos a continuación:

 1. Redirige a tus usuarios a la siguiente URL para autorizar la gestión de ventas:

 | Valor                    | Descripción                                                                                                              |
|--------------------------|--------------------------------------------------------------------------------------------------------------------------|
| `<APP_ID>`               | Valor obtenido durante la [creación de la aplicación](/developers/es/docs/split-payment/integration-configuration/create-application).      |
| `<REDIRECT_URI>`         | Valor ingresado en el campo Redirect Uri durante la [configuración de la Redirect URL](/developers/es/docs/split-payment/integration-configuration/create-application). |

----[mla]----
```curl
https://auth.mercadopago.com.ar/authorization?client_id=<APP_ID>&response_type=code&platform_id=mp&redirect_uri=<REDIRECT_URI>
```

------------
----[mlb]----
```curl
https://auth.mercadopago.com.br/authorization?client_id=<APP_ID>&response_type=code&platform_id=mp&redirect_uri=<REDIRECT_URI>
```

------------
----[mlm]----
```curl
https://auth.mercadopago.com.mx/authorization?client_id=<APP_ID>&response_type=code&platform_id=mp&redirect_uri=<REDIRECT_URI>
```

------------
----[mlc]----
```curl
https://auth.mercadopago.cl/authorization?client_id=<APP_ID>&response_type=code&platform_id=mp&redirect_uri=<REDIRECT_URI>
```

------------
----[mco]----
```curl
https://auth.mercadopago.com.co/authorization?client_id=<APP_ID>&response_type=code&platform_id=mp&redirect_uri=<REDIRECT_URI>
```

------------
----[mlu]----
```curl
https://auth.mercadopago.com.uy/authorization?client_id=<APP_ID>&response_type=code&platform_id=mp&redirect_uri=<REDIRECT_URI>
```

------------
----[mpe]----
```curl
https://auth.mercadopago.com.pe/authorization?client_id=<APP_ID>&response_type=code&platform_id=mp&redirect_uri=<REDIRECT_URI>
```

------------


2. Una vez que los usuarios autoricen la gestión de ventas, recibirás un código de autorización en la URL que especificaste en el paso anterior. Este código estará en el parámetro `code` de la siguiente manera:

```curl
http://<REDIRECT_URI>?code=AUTHORIZATION_CODE
```

> NOTE
>
> Nota
>
> El `AUTHORIZATION_CODE` tiene una validez de 10 minutos y será utilizado para crear las credenciales necesarias. 

## Obtener credenciales

Utiliza el código de autorización obtenido en el paso anterior para adquirir las credenciales del usuario mediante la [API de OAuth](/developers/es/reference/oauth/_oauth_token/post), lo que te permitirá gestionar sus ventas.

| Parámetro                | Descripción                                                                                      |
|--------------------------|--------------------------------------------------------------------------------------------------|
| `<CLIENT_ID>`            | Valor de APP_ID obtenido en los detalles de tu aplicación.                                      |
| `<CLIENT_SECRET>`        | Tu SECRET_KEY, también disponible en los detalles de tu aplicación.                              |
| `<AUTHORIZATION_CODE>`   | Código de autorización obtenido al redirigir al usuario de vuelta a tu sitio.                     |
| `<REDIRECT_URI>`         | Debe ser la misma Redirect URI configurada en tu aplicación.                                     |
| `<STATE>`         | Reemplaza el valor "RANDOM_ID" con un identificador que sea único para cada intento y que no incluya información confidencial para que puedas identificar de quién es el código recibido.                                     |

```curl
curl -X POST \
     -H 'accept: application/json' \
     -H 'content-type: application/x-www-form-urlencoded' \
     'https://api.mercadopago.com/oauth/token' \
     -d 'client_id=<CLIENT_ID>' \
     -d 'client_secret=<CLIENT_SECRET>' \
     -d 'grant_type=authorization_code' \
     -d 'code=<AUTHORIZATION_CODE>' \
     -d 'redirect_uri=<REDIRECT_URI>' \
     -d 'state=<RANDOM_ID>'
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
> Estas credenciales tienen una validez de 6 meses. En caso de no renovarlas antes de ese período, perderán vigencia y será necesario repetir el proceso de vinculación para autorizar nuevamente al vendedor. Para saber cómo renovar estas credenciales, consulta el paso a paso en la [documentación de Renovación.](/developers/es/docs/split-payments/additional-content/security/oauth/renewal)