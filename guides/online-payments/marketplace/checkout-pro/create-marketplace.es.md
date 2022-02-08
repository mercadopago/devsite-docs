# Integra marketplace en el Checkout Pro

> WARNING
>
> Requisito previo
>
> * Debes tener implementado [Checkout Pro](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-pro/introduction).

Para comenzar, sigue estos pasos:

1. Crea y configura tu aplicación.
2. Vincula tu aplicación con la cuenta de tus vendedores.
3. Genera las credenciales para operar.
4. Renueva tus credenciales.
5. Integra el Checkout Pro.

## Crea y configura tu aplicación.

Primero debes tener creada [tu aplicación](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/applications/create-app) con un nombre único que la identifique.

Luego, necesitarás **configurar una Redirect URL para tu aplicación**. Para eso, ve a [Tus Aplicaciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel), haz clic en el menú de opciones de tu aplicación y selecciona "Editar". 

En el campo Redirect URL, agrega la dirección a la que quieres redirigir a los vendedores luego de ser vinculados correctamente. Ten en cuenta que la dirección que agregues es a donde recibirás los códigos de autorización de cada uno de ellos para la creación de las credenciales.

Por último, debes obtener el ID de tu aplicación en [Tus Integraciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel). 

## Vincula tu aplicación con la cuenta de tus vendedores

Para operar en Mercado Pago en nombre de tu vendedor, primero debes solicitarle autorización. Para gestionar varias cuentas de Mercado Pago a la vez en tu integración, puedes hacerlo a través de OAuth, una funcionalidad de vinculación segura que permite que el vendedor ingrese a su cuenta de Mercado Pago, autorice la vinculación y habilite a tu aplicación para operar en su nombre. 

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

![FlujoOAuth-es](/images/oauth/oauth-es-v2.png)

Una vez que el vendedor haya autorizado a tu aplicación a vincularse con su cuenta de Mercado Pago, en tu servidor recibirás el código de autorización en la Redirect URL que especificaste. Se verá de esta manera: 

```url
https://www.redirect-url.com?code=CODE&state=RANDOM_ID
```

> Ten en cuenta que el valor `code` tiene un tiempo de validez de 10 minutos.

> SERVER_SIDE
>
> h2
>
> Genera las credenciales para operar

Para crear las credenciales necesarias para que tu aplicación pueda operar en nombre de un vendedor, deberás enviar el `CODE` que obtuviste en el paso anterior a través de la API de OAuth.

Los parámetros que debes incluir son:


| Parámetro | Dato a completar |
| ----------------- | ----------------- |
| `client_secret` | Llave privada que se utiliza en algunos complementos para generar pagos. Puedes obtenerlo desde [Tus Credenciales]([FAKER][CREDENTIALS][URL]). |
| `client_id` | ID único que identifica tu integración. |
| `grant_type` | Indica el tipo de operación a realizar para obtener las credenciales. Este parámetro es fijo y lleva como valor `authorization_code`. |
| `code` | El código de autorización o `CODE` que obtienes en tu servidor al realizar la vinculación. Deberá verse similar a este valor: `TG-60357f5d0cd06d000740646d-643464554`. | 
| `redirect_uri` | Es la URL que configuraste en el campo Redirect URL en tu aplicación. |

```curl
curl -X POST \
     -H 'accept: application/json' \
     -H 'content-type: application/x-www-form-urlencoded' \
     'https://api.mercadopago.com/oauth/token' \
     -d 'client_secret=CLIENT_SECRET' \
     -d 'client_id=CLIENT_ID' \
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
     -d 'client_secret=CLIENT_SECRET' \
     -d 'client_id=CLIENT_ID' \
     -d 'grant_type=refresh_token' \
     -d 'refresh_token=USER_REFRESH_TOKEN'
```

| Parámetro | Dato a completar |
| ----------------- | ----------------- |
| `client_secret` | Utiliza tu llave `client_secret`. |
| `client_id` | Utiliza tu credencial `client_id`. |
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

### Desvincula cuentas

Para desvincular el token asociado a tu cuenta, debes hacerlodesde el [portal de Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/account/security/applications/connections) ingresando a **Tu perfil > Seguridad > Apps conectadas**.

> NOTE
> 
> Nota
> 
> Recuerda que cada vez que renueves las credenciales, el `refresh_token` también cambiará, por lo que deberás almacenarlo nuevamente.
>
>  En caso de encontrar algún error a la hora de renovar las credenciales, recuerda que puedes consultarlo en la [referencia de códigos de error](https://developers.mercadolibre[FAKER][URL][DOMAIN]/es_ar/autenticacion-y-autorizacion#Referencia-de-codigos-de-error).

## Integra el Checkout Pro

Para cobrar en nombre de tus vendedores debes integrar [Checkout Pro](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-pro/introduction), generando las preferencias de pago con el Access Token que se obtiene al vincular a cada vendedor con tu aplicación.

Si deseas cobrar una comisión por cada pago que procesa tu aplicación en nombre de tu vendedor, sólo debes agregar dicho monto en el parámetro `marketplace_fee` al crear la preferencia:


[[[
```curl

curl -X POST \
-H 'accept: application/json' \
-H 'content-type: application/json' \
-H 'Authorization: Bearer SELLER_AT' \
'https://api.mercadopago.com/checkout/preferences' \
-d '{
    "items": [
        {
            "title": "Item title",
            "description": "Description",
            "quantity": 1,
            "unit_price": 50,
            "currency_id": "[FAKER][CURRENCY][ACRONYM]",
            "picture_url": "https://www.mercadopago.com/org-img/MP3/home/logomp3.gif"
        }
    ],
    "marketplace_fee": 2.29
}'

```


```php

<?php

$preference = new MercadoPago\Preference();

$item = new MercadoPago\Item();
$item->title = "Blue shirt";
$item->quantity = 10;
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
    .setTitle("Blue shirt")
    .setQuantity(10)
    .setCategoryId("[FAKER][CURRENCY][ACRONYM]")
    .setUnitPrice((float) 14.5);

Payer payer = new Payer();
payer.setEmail("john@yourdomain.com");

preference.setPayer(payer);
preference.appendItem(item);
preference.setMarketPlace(2.56);
preference.setNotificationUrl("http://urlmarketplace.com/notification_ipn");
preference.save();

```
```node

	var preference = {}

  var item = {
    title: 'Blue shirt',
    quantity: 10,
    currency_id: '[FAKER][CURRENCY][ACRONYM]',
    unit_price: [FAKER][COMMERCE][PRICE]
  }

  var payer = {
    email: "john@yourdomain.com"
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

sdk = Mercadopago::SDK.new('ENV_ACCES_TOKEN')

preference_data = {
  items: [
    {
      title: 'Blue shirt',
      description: 'Multicolor Item',
      quantity: 10,
      currency_id: '[FAKER][CURRENCY][ACRONYM]',
      unit_price: [FAKER][COMMERCE][PRICE]
    }
  ],
  payer: {
    email: 'john@yourdomain.com'
  },
  marketplace_fee: 2.56,
  notification_url: 'http://urlmarketplace.com/notification_ipn'
}

preference_response = sdk.preference.create(preference_data);
preference = preference_response[:response]

```
```csharp

var request = new PreferenceRequest
{
    Items = new List<PreferenceItemRequest>
    {
        new PreferenceItemRequest
        {
            Title = "Blue shirt",
            Quantity = 10,
            CurrencyId = "[FAKER][CURRENCY][ACRONYM]",
            UnitPrice = [FAKER][COMMERCE][PRICE]m,
        },
    },
    Payer = new PreferencePayerRequest
    {
        Email = "john@yourdomain.com",
    },
    MarketplaceFee = 2.56m,
    NotificationUrl = "http://urlmarketplace.com/notification_ipn",
};
var client = new PreferenceClient();
Preference preference = await client.CreateAsync(request);

```
```python

preference_data = {
    "items": [
        {
            "title": "Blue shirt",
            "quantity": 10,
            "currency_id": "[FAKER][CURRENCY][ACRONYM]",
            "unit_price": [FAKER][COMMERCE][PRICE],
        }
    ],
    "payer": {
        "email": "john@yourdomain.com"
    },
    "marketplace_fee": 2.56,
    "notification_url": "http://urlmarketplace.com/notification_ipn"
}

preference_response = sdk.preference().create(preference_data)
preference = preference_response["response"]

```
]]]


El vendedor va a recibir la diferencia entre el monto total y las comisiones, tanto la de Mercado Pago como la del _Marketplace_, así como cualquier otro importe que se deba descontar de la venta.

> WARNING
>
> Consejo
>
> Mientras más información se envíe en la generación de la preferencia, mejor funcionará nuestro sistema de prevención de fraude con respecto a la aprobación de los pagos.
> Crea una preferencia de pagos tan completa como puedas.

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

Para más información, ve a [Notificaciones Webhooks](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/notifications/webhooks/webhooks).

## Devoluciones y cancelaciones

Las devoluciones y cancelaciones podrán ser realizadas tanto por el _Marketplace_ como por el vendedor, vía API o desde la cuenta de Mercado Pago.
En caso de que la devolución la realice el Marketplace, se deberán utilizar las credenciales obtenidas para cobrar en nombre del vendedor.

En el caso de las cancelaciones, solo podrán ser realizadas  utilizando la API de cancelaciones.

Puedes encontrar más información en el articulo sobre [devoluciones y cancelaciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/account/cancellations-and-refunds).
