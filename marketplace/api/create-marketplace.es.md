# Cómo integrar Marketplace con la API

> WARNING
>
> Pre-requisitos
> 
> * Tener implementado [API](../../payments/api/introduction.es.md).

Para comenzar debes:

1. Dar de alta una aplicación de tipo Marketplace
2. Solicitar a tus vendedores que se vinculen
3. Crear los pagos en nombre de tus vendedores


## 1. Cómo crear tu aplicación

Crea tu aplicación desde [este link](https://applications.mercadopago.com/), marcando la opción **MP Connect / Marketplace mode** y los **scopes** `read`, `write` y `offline_access`.

También debes completar una **Redirect URI** donde serán redireccionado los vendedores para poder ser vinculados correctamente.

Una vez creada, obtendrás el `APP_ID` (identificador de aplicación) necesario para el siguiente paso.

## 2. Vinculación de cuentas

Para operar en Mercado Pago en nombre de tu vendedor, debes primero solicitarle autorización. Para esto, redirige al usuario a la siguiente URL reemplazando en `client_id` el valor de `APP_ID` y la `redirect_uri` que obtuviste en el paso anterior:

`https://auth.mercadopago.com.ar/authorization?client_id=APP_ID&response_type=code&platform_id=mp&redirect_uri=http%3A%2F%2Fwww.URL_de_retorno.com`

Recibirás el código de autorización en la url que especificaste:

`http://www.URL_de_retorno.com?code=AUTHORIZATION_CODE`
   
Este `AUTHORIZATION_CODE` será utilizado para crear las credenciales, y tiene un tiempo de validez de 10 minutos.

> WARNING
>
> Consejo
>
> Puedes incluir algún parámetro en `redirect_uri` para identificar a qué vendedor corresponde el código de autorización que recibiste, como su e-mail, el ID de usuario en tu sistema o cualquier otra referencia útil.


### Crea las credenciales de tus vendedores

Usa el código de autorización, obtenido en el paso anterior, para obtener las credenciales del usuario mediante la API de OAuth y así poder operar en su nombre.  

Request:

```curl 
curl -X POST \
     -H 'accept: application/json' \
     -H 'content-type: application/x-www-form-urlencoded' \
     'https://api.mercadopago.com/oauth/token' \
     -d 'client_id=CLIENT_ID' \
     -d 'client_secret=CLIENT_SECRET' \
     -d 'grant_type=authorization_code' \
     -d 'code=AUTHORIZATION_CODE' \
     -d 'redirect_uri=REDIRECT_URI'
```

Los parámetros que debes incluir son:

* `client_id`: El valor de `APP_ID`.
* `client_secret`: Tu `CLIENT_SECRET`.
* `code`: El código de autorización que obtuviste al redirigir al usuario de vuelta a tu sitio.
* `redirect_uri`: Debe ser la misma Redirect URI que configuraste en tu aplicación.


Response:

```json
{
    "access_token": "MARKETPLACE_SELLER_TOKEN",
    "public_key": "PUBLIC_KEY",
    "refresh_token": "TG-XXXXXXXXX-XXXXX",
    "live_mode": true,
    "user_id": USER_ID,
    "token_type": "bearer",
    "expires_in": 15552000,
    "scope": "offline_access payments write"
}
```

En la respuesta, además del `access_token` y `public_key` del vendedor que se ha vinculado, obtienes el `refresh_token` que debes utilizar para renovar periódicamente sus credenciales.

> NOTE
>
> Nota
>
> Las credenciales tienen un **tiempo de validez de 6 meses**.


### Renueva las credenciales de tus vendedores

Este proceso debes efectuarlo periódicamente para asegurar tener almacenado en tu sistema credeciales de vendedores que estén vigentes, dado que son válidas por 6 meses.

Sugerimos que si en el flujo de pago obtienes algún error relacionado al Access Token que estás utilizando, refresques automáticamente y reintentes el pago, antes de mostrar un error al comprador.

```curl
curl -X POST \
     -H 'accept: application/json' \
     -H 'content-type: application/x-www-form-urlencoded' \
     'https://api.mercadopago.com/oauth/token' \
     -d 'client_secret= ACCESS_TOKEN' \
     -d 'grant_type=refresh_token' \
     -d 'refresh_token=USER_RT'
```

Respuesta esperada:

```json
{
    "access_token": "MARKETPLACE_SELLER_TOKEN",
    "public_key": "PUBLIC_KEY",
    "refresh_token": "TG-XXXXXXXXX-XXXXX",
    "live_mode": true,
    "user_id": USER_ID,
    "token_type": "bearer",
    "expires_in": 15552000,
    "scope": "offline_access payments write"
}
```

## 3. Integra la API para recibir pagos

Para recibir pagos en nombre de tus vendedores debes integrar la [API](../../payments/api/introduction.es.md), utilizando el `access_token` de cada vendedor para tu aplicación.

Si deseas cobrar una comisión por cada cobro que procesa tu aplicación en nombre de tu usuario, sólo debes agregar dicho monto en el parámetro `application_fee` al crear el pago:

```php
<?php
require_once ('mercadopago.php');

// Setup the marketplace seller key
$mp = new MP('MARKETPLACE_SELLER_TOKEN');

$payment_data = array(
    "transaction_amount" => 100,
    "application_fee" => 20,
    "token" => "ff8080814c11e237014c1ff593b57b4d",
    "payment_method_id" => "visa",
    "payer" => array (
        "email" => "test_user_19653727@testuser.com"
    )
);

$payment = $mp->post("/v1/payments", $payment_data);
?>
```

El vendedor va a recibir la diferencia entre el monto total y las comisiones, tanto la de MercadoPago, como la del Marketplace, así como cualquier otro importe que se deba descontar de la venta.

### Notificaciones

Es necesario que envíes tu `notification_url`, donde recibirás aviso de todos los nuevos pagos y actualizaciones de estados que se generen.

Puedes recibir notificaciones cuando tus clientes autoricen o desautoricen tu aplicación, [configurando la URL](https://www.mercadopago.com/mla/account/webhooks) en tu cuenta.

En el artículo de [notificaciones](../../notifications/webhooks.es.md) podes obtener más información.

### Devoluciones y cancelaciones

Las devoluciones y cancelaciones podrán ser realizadas tanto por el marketplace como por el vendedor, via API o desde la cuenta de MercadoPago.

En el caso de las cancelaciones, solo podrán ser realizadas  utilizando la API de cancelaciones.

Puedes encontrar más información en el articulo sobre [devoluciones y cancelaciones](../../account/refunds-and-cancellations.es.md).
