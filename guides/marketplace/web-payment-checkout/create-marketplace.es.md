# Cómo integrar marketplace en el Checkout Web

> WARNING
>
> Pre-requisitos
>
> * Tener implementado [Checkout](/guides/payments/web-checkout/introduction.es.md).

Para comenzar debes:

1. Dar de alta una aplicación de tipo _Marketplace_.
2. Solicitar a tus vendedores que se vinculen.
3. Crear preferencias de pago en nombre de tus vendedores.


## 1. Cómo crear tu aplicación

[Crea tu aplicación](https://applications.mercadopago.com/), marcando la opción **MP Connect / Marketplace mode** y los **scopes** `read`, `write` y `offline_access`.

También debes completar una **Redirect URI** donde serán redireccionados los vendedores para poder ser vinculados correctamente.

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
> Puedes incluir algún parámetro en `redirect_uri` para identificar a qué vendedor corresponde el código de autorización que recibiste, como su _e-mail_, el _ID_ de usuario en tu sistema o cualquier otra referencia útil.


### Crea las credenciales de tus vendedores

Usa el código de autorización, obtenido en el paso anterior, para obtener las credenciales del usuario mediante la API de oAuth y así poder operar en su nombre.  

_Request_:

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
* `redirect_uri`: Debe ser la misma _Redirect URI_ que configuraste en tu aplicación.


_Response_:

```json
{
    "access_token": "MARKETPLACE_SELLER_TOKEN",
    "token_type": "bearer",
    "expires_in": 15552000,
    "scope": "offline_access read write",
    "refresh_token": "TG-XXXXXXXX"
}
```

En la respuesta, además del _Access Token_ del vendedor que se ha vinculado, obtienes el _Refresh Token_ que debes utilizar para renovar periódicamente sus credenciales.

> NOTE
>
> Nota
>
> Las credenciales tienen un **tiempo de validez de 6 meses**.


### Renueva las credenciales de tus vendedores

Este proceso debes efectuarlo periódicamente para asegurar tener almacenado en tu sistema credeciales de vendedores que estén vigentes, dado que son válidas por 6 meses.

Sugerimos que si en el flujo de pago obtienes algún error relacionado al _Access Token_ que estás utilizando, refresques automáticamente y reintentes el pago, antes de mostrar un error al comprador.

```curl
curl -X POST \
     -H 'accept: application/json' \
     -H 'content-type: application/x-www-form-urlencoded' \
     'https://api.mercadopago.com/oauth/token' \
     -d 'client_id=CLIENT_ID' \
     -d 'client_secret=CLIENT_SECRET' \
     -d 'grant_type=refresh_token' \
     -d 'refresh_token=USER_RT'
```

Respuesta esperada:

```json
{
    "access_token": "MARKETPLACE_SELLER_TOKEN",
    "token_type": "bearer",
    "expires_in": 15552000,
    "scope": "offline_access read write",
    "refresh_token": "TG-XXXXXXXX"
}
```


## 3. Integra el checkout

Para cobrar en nombre de tus vendedores debes integrar [Checkout](/guides/payments/web-checkout/introduction.es.md), generando las preferencias de pago con el _Access Token_ de cada vendedor para tu aplicación.

Si deseas cobrar una comisión por cada pago que procesa tu aplicación en nombre de tu vendedor, sólo debes agregar dicho monto en el parámetro `marketplace_fee` al crear la preferencia:


[[[
```php

<?php

$preference = new MercadoPago\Preference();

$item = new MercadoPago\Item();
$item->title = "[FAKER][COMMERCE][PRODUCT_NAME]";
$item->quantity = [FAKER][NUMBER][BETWEEN][1,10];
$item->currency_id = "[FAKER][CURRENCY][ACRONYM]";
$item->unit_price = [FAKER][COMMERCE][PRICE];

$payer = new MercadoPago\Payer();
$payer->email = "test_user_19653727@testuser.com";

$preference->items = array($item);
$preference->payer = $payer;
$preference->marketplace_fee = 2.56
$preference->notification_url = "http://urlmarketplace.com/notification_ipn"

$preference->save();
?>

```
```java

Preference preference = new Preference();

Item item = new Item();
item.setId("1234")
    .setTitle("[FAKER][COMMERCE][PRODUCT_NAME]")
    .setQuantity([FAKER][NUMBER][BETWEEN][1,10])
    .setCategoryId("[FAKER][CURRENCY][ACRONYM]")
    .setUnitPrice((float) 14.5);

Payer payer = new Payer();
payer.setEmail("[FAKER][INTERNET][FREE_EMAIL]");

preference.setPayer(payer);
preference.appendItem(item);
preference.setMarketPlace(2.56);
preference.setNotificationUrl("http://urlmarketplace.com/notification_ipn");
preference.save();

```
```node

	var preference = {}

  var item = {
    title: '[FAKER][COMMERCE][PRODUCT_NAME]',
    quantity: [FAKER][NUMBER][BETWEEN][1,10],
    currency_id: '[FAKER][CURRENCY][ACRONYM]',
    unit_price: [FAKER][COMMERCE][PRICE]
  }

  var payer = {
    email: "[FAKER][INTERNET][FREE_EMAIL]"
  }

  preference.items = [item]
  preference.payer = payer
  preference.marketplace_fee = 2.56
  preference.notification_url = "http://urlmarketplace.com/notification_ipn";

  mercadopago.preferences.create(preference).then(function (data) {
     // Do Stuff...
   }).catch(function (error) {
     // Do Stuff...
   });

```
```ruby

preference = MercadoPago::Preference.new()

item = MercadoPago::Item.new()
item.title="[FAKER][COMMERCE][PRODUCT_NAME]"
item.quantity= [FAKER][NUMBER][BETWEEN][1,10]
item.currency_id = '[FAKER][CURRENCY][ACRONYM]'
item.unit_price = [FAKER][COMMERCE][PRICE]

payer = MercadoPago::Payer.new()
payer.email="[FAKER][INTERNET][FREE_EMAIL]"

preference.items = [item]
preference.payer = payer
preference.marketplace_fee = 2.56
preference.notification_url = "http://urlmarketplace.com/notification_ipn"

preference.save

```
]]]


El vendedor va a recibir la diferencia entre el monto total y las comisiones, tanto la de Mercado Pago como la del _Marketplace_, así como cualquier otro importe que se deba descontar de la venta.

### Notificaciones

Es necesario que envíes tu `notification_url`, donde recibirás aviso de todos los nuevos pagos y actualizaciones de estados que se generen.

En el artículo de [notificaciones](/guides/notifications/ipn.es.md) puedes obtener más información.

### Devoluciones y cancelaciones

Las devoluciones y cancelaciones podrán ser realizadas tanto por el _Marketplace_ como por el vendedor, vía API o desde la cuenta de Mercado Pago.

En el caso de las cancelaciones, solo podrán ser realizadas  utilizando la API de cancelaciones.

Puedes encontrar más información en el articulo sobre [devoluciones y cancelaciones](/guides/manage-account/cancellations-and-refunds.es.md).
