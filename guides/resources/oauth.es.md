---
indexable: false  
---

# Autoriza y vincula cuentas en tus aplicaciones

Si en tu integración necesitas gestionar varias cuentas de Mercado Pago a la vez, solo tienes que realizar una vinculación entre tu aplicación y las cuentas de otras personas.

Puedes hacerlo a través de OAuth, una funcionalidad de vinculación segura que permite que el vendedor ingrese a su cuenta de Mercado Pago, autorice la vinculación y habilite a tu aplicación para operar en su nombre. 

###### Cómo incorporar OAuth 

Para poder hacer una vinculación entre la cuenta de tu aplicación y las de tus vendedores es necesario realizar la autorización a través de OAuth.

Para comenzar, sigue estos pasos:
1. Crea o configura tu aplicación
2. Vincula una cuenta de Mercado Pago con tu aplicación
3. Genera las credenciales para operar

## 1. Crea y configura tu aplicación

Primero debes tener creada tu aplicación con un nombre único que la identifique.

Luego, necesitarás **configurar una Redirect URL para tu aplicación**. Para eso, ve a [Tus Aplicaciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel), haz clic en el menú de opciones de tu aplicación y selecciona Editar. En el campo Redirect URL, agrega la dirección a la que quieres redirigir a los vendedores luego de ser vinculados correctamente. 

Ten en cuenta que la dirección que agregues es a donde recibirás los códigos de autorización de cada uno de ellos para la creación de las credenciales.

Finalmente, debes obtener el ID de tu aplicación en [Tus Integraciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel).  

## 2. Vincula una cuenta de Mercado Pago con tu aplicación

Para operar en nombre de tus vendedores a través de sus cuentas de Mercado Pago, primero debes solicitarles su autorización.

Para esto, debes incluir en tu aplicación una URL que redirija al vendedor al sitio de autorización. 

Te compartimos la URL base que debes utilizar y el detalle de los parámetros con los que tienes que completarla.

```url
https://auth.mercadopago[FAKER][URL][DOMAIN]/authorization?client_id=APP_ID&response_type=code&platform_id=mp&state=RANDOM_ID&redirect_uri=https://www.redirect-url.com
```

| Parámetro | Dato a completar |
| ----------------- | ----------------- |
| `client_id` | Reemplaza el valor `APP_ID` con el ID de tu aplicación. |
| `state` | Identifica a quién corresponde el código que recibirás. Para eso, reemplaza el valor `RANDOM_ID` por un identificador que sea único por cada intento y que no contenga datos sensibles. |
| `redirect_uri` | Agrega la URL que ingresaste en el campo Redirect URL al configurar tu aplicación. | 

Al ingresar a esta URL, el vendedor será redirigido a Mercado Pago, donde deberá iniciar sesión con su cuenta y autorizar la vinculación con tu aplicación.

FOTO

Una vez que el vendedor haya autorizado a tu aplicación a vincularse con su cuenta de Mercado Pago, en tu servidor recibirás el código de autorización en la Redirect URL que especificaste. Se verá de esta manera: 

```url
https://www.redirect-url.com?code=CODE&state=RANDOM_ID
```

> Ten en cuenta que el valor `code` tiene un tiempo de validez de 10 minutos.

> SERVER_SIDE
>
> h2
>
> 3. Genera las credenciales para operar

Para crear las credenciales necesarias para que tu aplicación pueda operar en nombre de un vendedor, deberás enviar el `CODE` que obtuviste en el paso anterior a través de la API de OAuth.

Los parámetros que debes incluir son:

| Parámetro | Dato a completar |
| ----------------- | ----------------- |
| `client_secret` | Este es tu `ACCESS_TOKEN`. Puedes obtenerlo desde [Tus Credenciales](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/credentials). |
| `grant_type` | Indica el tipo de operación a realizar para obtener las credenciales. Este parámetro es fijo y lleva como valor `authorization_code`. |
| `code` | El código de autorización o `CODE` que obtienes en tu servidor al realizar la vinculación. Deberá verse similar a este valor: `TG-60357f5d0cd06d000740646d-643464554` | 
| `redirect_uri` | Es la URL que configuraste en el campo Redirect URL en tu aplicación. |

```curl
curl -X POST \
     -H 'accept: application/json' \
     -H 'content-type: application/x-www-form-urlencoded' \
     'https://api.mercadopago.com/oauth/token' \
     -d 'client_secret=ACCESS_TOKEN' \
     -d 'grant_type=authorization_code' \
     -d 'code=CODE' \
     -d 'redirect_uri=REDIRECT_URI'
```

En la respuesta obtendrás el `access_token` del vendedor que se ha vinculado. 
También recibirás el `refresh_token`, que más adelante te servirá para renovar las credenciales de tus vendedores. 

Además, recibirás la `public_key` del vendedor, que es la credencial o clave pública que usarás para identificar la cuenta en tu frontend. 

```json
{
"access_token":"APP_USR-4934588586838432-XXXXXXXX-241983636",
"token_type": "bearer",
"expires_in": 15552000,
"scope": "offline_access read write",
"user_id": 241983636,
"refresh_token": "TG-XXXXXXXX-241983636",
"public_key": "APP_USR-d0a26210-XXXXXXXX-479f0400869e",
"live_mode": true
}
```

> WARNING 
> 
> Importante
> 
> Recuerda que utilizarás información sensible de tus vendedores. Asegúrate de resguardarla de manera segura, no la incorpores en tus URLs de vinculación y gestiónala únicamente desde tu servidor.

¡Y listo! Ya vinculaste la cuenta del vendedor a tu aplicación a través de OAuth. 

> Ten en cuenta que estos pasos deben repetirse con cada cuenta que desees vincular.

## Renueva las credenciales

**Los datos que recibes de tus vendedores tienen una validez de 180 días**. Una vez transcurrido ese tiempo, deberás volver a solicitar la autorización al vendedor.
Para evitarlo, renueva los datos antes de ese periodo de tiempo para asegurarte que siempre estén vigentes. 

Para renovarlos, deberás realizar el siguiente llamado a la API de OAuth:

```curl
curl -X POST \
     -H 'accept: application/json' \
     -H 'content-type: application/x-www-form-urlencoded' \
     'https://api.mercadopago.com/oauth/token' \
     -d 'client_secret= ACCESS_TOKEN' \
     -d 'grant_type=refresh_token' \
     -d 'refresh_token=USER_REFRESH_TOKEN'
```

| Parámetro | Dato a completar |
| ----------------- | ----------------- |
| `client_secret` | Utiliza tu `ACCESS_TOKEN`. |
| `grant_type` | Incluye `refresh_token`, que no se modifica. |
| `refresh_token` | Valor que recibiste junto con los datos del vendedor. | 

Recibirás la siguiente respuesta:

```json
{
    "access_token": "APP_USR-4934588586838432-XXXXXXXX-241983636",
    "token_type": "bearer",
    "expires_in": 15552000,
    "scope": "offline_access read write",
    "refresh_token": "TG-XXXXXXXXXXXX-241983636"
}
```

> NOTE
> 
> Nota
> 
> Recuerda que cada vez que renueves las credenciales, el `refresh_token` también cambiará, por lo que deberás almacenarlo nuevamente.
>
> En caso de encontrar algún error a la hora de renovar las credenciales, recuerda que puedes consultarlo en la [referencia de códigos de error](https://developers.mercadolibre[FAKER][URL][DOMAIN]/es_ar/autenticacion-y-autorizacion).

## Configura las notificaciones

Puedes recibir notificaciones cada vez que un vendedor se vincule o desvincule de tu aplicación. Para configurarlas, sigue estos pasos:

1. Ingresa a [Tus aplicaciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel) y selecciona la aplicación que utilizas para el flujo de OAuth.

2. Ve a la pestaña "Notificaciones Webhooks". Una vez dentro de la sección, ve al campo "Modo Producción" y agrega la URL a la cual deberán llegar las notificaciones. Si lo deseas, puedes hacer clic en el botón "Probar" para comprobar que la URL que asignaste reciba correctamente las Notificaciones Webhooks.

3. Luego, en el campo "Eventos", selecciona la opción de "Vinculación de aplicaciones". Por último, presiona guardar. 

¡Y listo! Cada vez que un vendedor se vincule o desvincule, recibirás una notificación a la URL que asignaste.

Estos son algunos de los datos que podrás encontrar dentro de las notificaciones:

| Atributo | Valor o tipo | Descripción |
| ----------------- | ----------------- | --------------- |
| `type` | `mp-connect` | Identifica a la notificación del tipo vinculación de cuentas. |
| `action` | `application.authorized` | Informa que el vendedor se ha vinculado a la aplicación. |
| `action` | `application.deauthorized` | Confirma que el vendedor se ha desvinculado de la aplicación. |
| `data.id`| `string`| ID del vendedor vinculado a la aplicación. |

Para más información, ve a [Notificaciones Webhooks](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/notifications/webhooks).