# Cómo integrar marketplace via API

> WARNING
>
> Pre-requisitos
>
> * Tener implementado ----[mla, mlm, mlc, mco, mlu, mpe]---- [Checkout API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/payments/api/introduction). ------------ ----[mlb]---- [Checkout Transparente](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/payments/api/introduction). ------------

Para comenzar debes:

1. Dar de alta una aplicación de tipo _Marketplace_.
2. Solicitar a tus vendedores que se vinculen.
3. Crear los pagos en nombre de tus vendedores.


## 1. Cómo crear tu aplicación

[Crea tu aplicación](https://applications.mercadopago.com/), marcando la opción **MP Connect / Marketplace mode** y los **scopes** `read`, `write` y `offline_access`.

También debes completar una **Redirect URI** donde serán redireccionados los vendedores para poder ser vinculados correctamente.

Una vez creada, obtendrás el `APP_ID` (identificador de aplicación) necesario para el siguiente paso.

## 2. Vinculación de cuentas

Para operar en Mercado Pago en nombre de tu vendedor, debes primero solicitarle autorización.

2.1. Para esto, redirige al usuario a la siguiente URL reemplazando en `client_id`, el valor de `APP_ID` y la misma `redirect_uri` que configuraste en el paso anterior:

`https://auth.mercadopago[FAKER][URL][DOMAIN]/authorization?client_id=APP_ID&response_type=code&platform_id=mp&redirect_uri=http://www.URL_de_retorno.com`

<br>
2.2. Recibirás el código de autorización en la URL que especificaste:

`http://www.URL_de_retorno.com?code=AUTHORIZATION_CODE`

El `AUTHORIZATION_CODE` será utilizado para crear las credenciales y tiene un tiempo de validez de 10 minutos.

<br>
2.3. También puedes incluir el parámetro `state` en la URL de autorización para identificar a quién corresponde el código que recibiste. Realiza esto de manera segura, asignando en dicho parámetro un identificador aleatorio que sea único por cada intento.

Al incluir este parámetro, la URL de redirección quedaría de la siguiente forma:


`https://auth.mercadopago[FAKER][URL][DOMAIN]/authorization?client_id=APP_ID&response_type=code&platform_id=mp&state=id=RANDOM_ID=&redirect_uri=http://www.URL_de_retorno.com`

Ahora recibirás en la URL de retorno especificada el código de autorización y también el identificador seguro:

`hhttp://www.URL_de_retorno.com?code=AUTHORIZATION_CODE&state=id=RANDOM_ID`

> No envíes información confidencial o credenciales de la cuenta de Mercado Pago.

### Crea las credenciales de tus vendedores

Usa el código de autorización, obtenido en el paso anterior, para obtener las credenciales del usuario mediante la API de OAuth y así poder operar en su nombre.

Request:

```curl
curl -X POST \
     -H 'accept: application/json' \
     -H 'content-type: application/x-www-form-urlencoded' \
     'https://api.mercadopago.com/oauth/token' \
     -d 'client_secret=ACCESS_TOKEN' \
     -d 'grant_type=authorization_code' \
     -d 'code=AUTHORIZATION_CODE' \
     -d 'redirect_uri=REDIRECT_URI'
```

Los parámetros que debes incluir son:

* `client_secret`: Tu `ACCESS_TOKEN`. Puedes obtenerlo desde el detalle de tu [aplicación.]([FAKER][CREDENTIALS][URL])
* `code`: El código de autorización que obtuviste al redirigir al usuario de vuelta a tu sitio.
* `redirect_uri`: Debe ser la misma Redirect URI que configuraste en tu aplicación.


_Response_:

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
> Si no se renuevan las credenciales de los vendedores antes de los 6 meses, **las mismas perderán vigencia y se deberá volver a autorizar al vendedor**.
> Recomendación: Renovar las credenciales a los 5 meses de obtenerlas.

### Renueva las credenciales de tus vendedores

Este proceso debes efectuarlo periódicamente para asegurar tener almacenado en tu sistema credeciales de vendedores que estén vigentes, dado que son válidas por 6 meses.

Sugerimos que si en el flujo de pago obtienes algún error relacionado al _Access Token_ que estás utilizando, refresques automáticamente y reintentes el pago, antes de mostrar un error al comprador.

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

Para recibir pagos en nombre de tus vendedores debes integrar la [API](https://www.mercadopago.com.ar/developers/es/guides/payments/api/introduction), utilizando el `access_token` de cada vendedor para tu aplicación.

Si deseas cobrar una comisión por cada cobro que procesa tu aplicación en nombre de tu usuario, sólo debes agregar dicho monto en el parámetro `application_fee` al crear el pago:

[[[
```curl
curl -X POST \
        -H 'accept: application/json' \
        -H 'content-type: application/json' \
        https://api.mercadopago.com/v1/payments?access_token=USER_AT \
        -d '{
                "transaction_amount": 100,
                "token": "ff8080814c11e237014c1ff593b57b4d",
                "description": "Title of what you are paying for",
                "installments": 1,
                "payer": {
                        "id": "12345678"
                },
                "payment_method_id": "visa",
                "application_fee": 2.56
        }'
```


```php
<?php  

  require ('mercadopago.php');
  MercadoPago\SDK::configure(['ACCESS_TOKEN' => 'ENV_ACCESS_TOKEN']);

  $payment = new MercadoPago\Payment();

  $payment->transaction_amount = 100;
  $payment->token = "ff8080814c11e237014c1ff593b57b4d";
  $payment->description = "Title of what you are paying for";
  $payment->installments = 1;
  $payment->payment_method_id = "visa";
  $payment->payer = array(
    "email" => "test_user_19653727@testuser.com"
  );

  $payment->save();

?>
```
```java

import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Payment payment = new Payment();

payment.setTransactionAmount(100f)
      .setToken('ff8080814c11e237014c1ff593b57b4d')
      .setDescription('Title of what you are paying for')
      .setInstallments(1)
      .setPaymentMethodId("visa")
      .setPayer(new Payer("test_user_19653727@testuser.com"));

payment.save();

```
```node

var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

var payment_data = {
  transaction_amount: 100,
  token: 'ff8080814c11e237014c1ff593b57b4d'
  description: 'Title of what you are paying for',
  installments: 1,
  payment_method_id: 'visa',
  payer: {
    email: 'test_user_3931694@testuser.com'
  }
};

mercadopago.payment.create(payment_data).then(function (data) {
  // Do Stuff...
}).catch(function (error) {
  // Do Stuff...
});

```
```ruby

require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

payment = MercadoPago::Payment.new()
payment.transaction_amount = 100
payment.token = 'ff8080814c11e237014c1ff593b57b4d'
payment.description = 'Title of what you are paying for'
payment.installments = 1
payment.payment_method_id = "visa"
payment.payer = {
  email: "test_user_19653727@testuser.com"
}

payment.save()

```
]]]


El vendedor va a recibir la diferencia entre el monto total y las comisiones, tanto la de Mercado Pago, como la del _Marketplace_, así como cualquier otro importe que se deba descontar de la venta.

### Notificaciones

Es necesario que envíes tu `notification_url`, donde recibirás aviso de todos los nuevos pagos y actualizaciones de estados que se generen.

Puedes recibir notificaciones cuando tus clientes autoricen o desautoricen tu aplicación, [configurando la URL](https://www.mercadopago.com/mla/account/webhooks) en tu cuenta.

En el artículo de [notificaciones](https://www.mercadopago.com.ar/developers/es/guides/notifications/webhooks) puedes obtener más información.

### Devoluciones y cancelaciones

Las devoluciones y cancelaciones podrán ser realizadas tanto por el _marketplace_ como por el vendedor, vía API o desde la cuenta de Mercado Pago.
En caso de que las cancelaciones las haga el Marketplace, se deben utilizar las obtenidas para el vendedor.

En el caso de las cancelaciones, solo podrán ser realizadas  utilizando la API de cancelaciones.

Puedes encontrar más información en el artículo sobre [devoluciones y cancelaciones](https://www.mercadopago.com.ar/developers/es/guides/manage-account/cancellations-and-refunds).

### Probá tu Marketplace

Puedes probar tu Marketplace utilizando las credenciales de Sandbox de tu cuenta tanto para asociar a los vendedores como para realizar los cobros/cancelaciones y demás.
Se podrá utilizar las tarjetas de test proporcionadas por Mercado Pago, y los distintos prefijos para manejar los mensajes de respuesta.
[Probá tu integración](https://www.mercadopago.com.ar/developers/es/guides/payments/api/testing/)
