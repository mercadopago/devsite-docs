# Cómo integrar Marketplace en el Checkout Web

> Pre-requisitos:
> 
> * Tener implementado [Checkout](../../payments/web-checkout/introduction.es.md).

Para comenzar debes:

1. Dar de alta una aplicación de tipo Marketplace
2. Solicitar a tus vendedores que se vinculen
3. Crear preferencias de pago en nombre de tus vendedores


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

> _**Consejo**_: puedes incluir algún parámetro en `redirect_uri` para identificar a qué vendedor corresponde el código de autorización que recibiste, como su e-mail, el ID de usuario en tu sistema o cualquier otra referencia útil.


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
    "token_type": "bearer", 
    "expires_in": 15552000, 
    "scope": "offline_access read write", 
    "refresh_token": "TG-XXXXXXXX"
}
```

En la respuesta, además del Access Token del vendedor que se ha vinculado, obtienes el Refresh Token que debes utilizar para renovar periódicamente sus credenciales.

> _**Nota**_: Las credenciales tienen un **tiempo de validez de 6 meses**.


### Renueva las credenciales de tus vendedores

Este proceso debes efectuarlo periódicamente para asegurar tener almacenado en tu sistema credeciales de vendedores que estén vigentes, dado que son válidas por 6 meses.

Sugerimos que si en el flujo de pago obtienes algún error relacionado al Access Token que estás utilizando, refresques automáticamente y reintentes el pago, antes de mostrar un error al comprador.

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

Para cobrar en nombre de tus vendedores debes integrar [Checkout](../../payments/web-checkout/introduction.es.md), generando las preferencias de pago con el Access Token de cada vendedor para tu aplicación.

Si deseas cobrar una comisión por cada pago que procesa tu aplicación en nombre de tu vendedor, sólo debes agregar dicho monto en el parámetro `marketplace_fee` al crear la preferencia:

```php
<?php
require_once ('mercadopago.php');
$mp = new MP ("MARKETPLACE_SELLER_TOKEN");

$preference_data = array(
   	"marketplace_fee" => 100,
   	"notification_url" => "http://urlmarketplace.com/notification_ipn"
	"items" => array(
		array(
			"title" => "Multicolor kite",
			"quantity" => 1,
			"currency_id" => "ARS",
			"unit_price" => 500,
			"description" => "",
			"category_id" => "art" // Available categories at https://api.mercadopago.com/item_categories
		)
	),
	"payer" => array(
		"email" => "usuario@mail.com"
	)
);

$preference = $mp->create_preference($preference_data);
?>
```

El vendedor va a recibir la diferencia entre el monto total y las comisiones, tanto la de Mercado Pago como la del Marketplace, así como cualquier otro importe que se deba descontar de la venta.

### Notificaciones

Es necesario que envíes tu `notification_url`, donde recibirás aviso de todos los nuevos pagos y actualizaciones de estados que se generen.

En el artículo de [notificaciones](../../notifications/ipn.es.md) podes obtener más información.

### Devoluciones y cancelaciones

Las devoluciones y cancelaciones podrán ser realizadas tanto por el marketplace como por el vendedor, via API o desde la cuenta de Mercado Pago.

En el caso de las cancelaciones, solo podrán ser realizadas  utilizando la API de cancelaciones.

Puedes encontrar más información en el articulo sobre [devoluciones y cancelaciones](../../account/refunds-and-cancellations.es.md).

