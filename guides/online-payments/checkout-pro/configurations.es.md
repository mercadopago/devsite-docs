# Otras funcionalidades


Puedes adaptar la integración a tu negocio sumando atributos en la preferencia. Hay muchos [datos en una preferencia](https://www.mercadopago.com.ar/developers/es/reference/preferences/resource/) que se pueden configurar, pero siempre ten en cuenta qué es lo que tu negocio necesita.

----[mla, mlb]----
Si ofreces compras de montos altos, por ejemplo, puedes aceptar [pagos con dos tarjetas de crédito](https://www.mercadopago.com.ar/developers/es/guides/online-payments/checkout-pro/configurations#bookmark_pagos_con_dos_tarjetas_de_crédito) o también, [excluir medios de pago](https://www.mercadopago.com.ar/developers/es/guides/online-payments/checkout-pro/configurations#bookmark_atributos_para_la_preferencia) que no quieras aceptar.
------------
----[mlm, mlc, mlu, mco, mpe]----
Si ofreces compras de montos bajos, por ejemplo, puedes [excluir medios de pago](https://www.mercadopago.com.ar/developers/es/guides/online-payments/checkout-pro/configurations#bookmark_atributos_para_la_preferencia) que no quieras aceptar.
------------

A través de la preferencia, puedes [obtener información de tu negocio](https://www.mercadopago.com.ar/developers/es/guides/online-payments/checkout-pro/configurations#bookmark_Obtén_información_sobre_tu_negocio). Y también, medir la efectividad de tus publicidades y darles seguimiento al [integrar un píxel de Facebook](https://www.mercadopago.com.ar/developers/es/guides/online-payments/checkout-pro/configurations#bookmark_asocia_un_píxel_de_facebook) o al [asociar tus anuncios de Google](https://www.mercadopago.com.ar/developers/es/guides/online-payments/checkout-pro/configurations#bookmark_asocia_una_etiqueta_de_google_ads).

## Ejemplo de una preferencia completa

----[mlm, mla, mlb, mlc, mlu, mpe]----

```json
{
    "items": [
        {
            "id": "item-ID-1234",
            "title": "Mi producto",
            "currency_id": "[FAKER][CURRENCY][ACRONYM]",
            "picture_url": "https://www.mercadopago.com/org-img/MP3/home/logomp3.gif",
            "description": "Descripción del Item",
            "category_id": "art",
            "quantity": 1,
            "unit_price": 75.76
        }
    ],
    "payer": {
        "name": "Juan",
        "surname": "Lopez",
        "email": "user@email.com",
        "phone": {
            "area_code": "11",
            "number": "4444-4444"
        },
        "identification": {
            "type": "DNI",
            "number": "12345678"
        },
        "address": {
            "street_name": "Street",
            "street_number": 123,
            "zip_code": "5700"
        }
    },
    "back_urls": {
        "success": "https://www.success.com",
        "failure": "http://www.failure.com",
        "pending": "http://www.pending.com"
    },
    "auto_return": "approved",
    "payment_methods": {
        "excluded_payment_methods": [
            {
                "id": "master"
            }
        ],
        "excluded_payment_types": [
            {
                "id": "ticket"
            }
        ],
        "installments": 12
    },
    "notification_url": "https://www.your-site.com/ipn",
    "statement_descriptor": "MINEGOCIO",
    "external_reference": "Reference_1234",
    "expires": true,
    "expiration_date_from": "2016-02-01T12:00:00.000-04:00",
    "expiration_date_to": "2016-02-28T12:00:00.000-04:00"
}
```

------------
----[mco]----

 ```json
{
	"items": [
		{
			"id": "item-ID-1234",
			"title": "Title of what you are paying for. It will be displayed in the payment process.",
			"currency_id": "CLP",
			"picture_url": "https://www.mercadopago.com/org-img/MP3/home/logomp3.gif",
			"description": "Item description",
			"category_id": "art", // Available categories at https://api.mercadopago.com/item_categories
			"quantity": 1,
			"unit_price": 100
		}
	],
	"payer": {
		"name": "user-name",
		"surname": "user-surname",
		"email": "user@email.com",
		"date_created": "2015-06-02T12:58:41.425-04:00",
		"phone": {
			"area_code": "11",
			"number": "4444-4444"
		},
		"identification": {
			"type": "RUT", // Available ID types at https://api.mercadopago.com/v1/identification_types
			"number": "12345678"
		},
		"address": {
			"street_name": "Street",
			"street_number": 123,
			"zip_code": "5700"
		}
	},
	"back_urls": {
		"success": "https://www.success.com",
		"failure": "http://www.failure.com",
		"pending": "http://www.pending.com"
	},
	"auto_return": "approved",
	"payment_methods": {
		"excluded_payment_methods": [
			{
				"id": "master"
			}
		],
		"excluded_payment_types": [
			{
				"id": "ticket"
			}
		],
		"installments": 12,
		"default_payment_method_id": null,
		"default_installments": null
	},
	"shipments": {
		"receiver_address": {
			"zip_code": "5700",
			"street_number": 123,
			"street_name": "Street",
			"floor": 4,
			"apartment": "C"
		}
	},
	"notification_url": "https://www.your-site.com/ipn",
	"statement_descriptor": "MINEGOCIO",
	"external_reference": "Reference_1234",
	"expires": true,
	"expiration_date_from": "2016-02-01T12:00:00.000-04:00",
	"expiration_date_to": "2016-02-28T12:00:00.000-04:00",
	"taxes": [
		{
			"type": "IVA",
			"value": 16
		}
	]
}
 ```
------------

## Atributos para la preferencia

### Definición de medios de pago

----[mla, mco, mlb, mlu, mlc, mpe]----
Por defecto, se ofrecen todos los medios de pago. Si se quiere excluir alguno puede hacerse desde la preferencia de pago.
También se puede definir un medio de pago para que aparezca por defecto o la cantidad de cuotas máximas a ofrecer.
------------
----[mlm]----
Por defecto, se ofrecen todos los medios de pago. Si se quiere excluir alguno puede hacerse desde la preferencia de pago.
También se puede definir un medio de pago para que aparezca por defecto o la cantidad de mensualidades máximas a ofrecer.
------------


----[mla, mco, mlb, mlu, mlc, mpe]----
Atributo | Descripción
------ | -----
_`payment_methods`_ | Clase que describe los atributos y métodos de medios de pago.
_`excluded_payment_methods`_ | Método que excluye por <a href="https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/resources/localization/payment-methods/#bookmark_medios_de_pago_por_país" target="_blank">medios de pago</a> específicos: Visa, Mastercard o American Express, entre otras.
_`excluded_payment_types`_ | Método que excluye por tipo de <a href="https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/resources/localization/payment-methods/#bookmark_medios_de_pago_por_país" target="_blank">medios de pago</a>: efectivo, tarjetas de crédito o débito.
_`installments`_ | Método que define la cantidad de cuotas máximas a ofrecer.
_`purpose`_ | Cuando se indique el valor "wallet_purchase", el Checkout aceptará pagos exclusivamente de usuarios registrados en Mercado Pago, con tarjeta y dinero en cuenta.

------------

----[mlm]----
Atributo | Descripción
------ | -----
_`payment_methods`_ | Clase que describe los atributos y métodos de medios de pago.
_`excluded_payment_methods`_ | Método que excluye por <a href="https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/resources/localization/payment-methods/#bookmark_medios_de_pago_por_país" target="_blank">medios de pago</a>  específicos: Visa, Mastercard o American Express, entre otras.
_`excluded_payment_types`_ | Método que excluye por tipo de <a href="https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/resources/localization/payment-methods/#bookmark_medios_de_pago_por_país" target="_blank">medios de pago</a> : efectivo, tarjetas de crédito o débito.
_`installments`_ | Método que define la cantidad de mensualidades máximas a ofrecer.
_`purpose`_ | Cuando se indique el valor "wallet_purchase", el Checkout aceptará pagos exclusivamente de usuarios registrados en Mercado Pago, con tarjeta y dinero en cuenta.

------------

[[[
```php
<?php
$preference = new MercadoPago\Preference();
// ...
$preference->payment_methods = array(
  "excluded_payment_methods" => array(
    array("id" => "master")
  ),
  "excluded_payment_types" => array(
    array("id" => "ticket")
  ),
  "installments" => 12
);
// ...
?>
```
```node
var preference = {}
preference = {
//...
"payment_methods": {
    "excluded_payment_methods": [
        {
            "id": "master"
        }
    ],
    "excluded_payment_types": [
        {
            "id": "ticket"
        }
    ],
    "installments": 12
	}
//...
}
```
```java
Preference preference = new Preference();
//...
PaymentMethods paymentMethods = new PaymentMethods();
paymentMethods.setExcludedPaymentMethods("master", "amex");
paymentMethods.setExcludedPaymentTypes("ticket");
paymentMethods.setInstallments(12);

preference.setPaymentMethods(paymentMethods);
//...
```
```ruby
preference = MercadoPago::Preference.new
#...
preference.payment_methods = {
  excluded_payment_methods: [id: "master"],
  excluded_payment_types: [id: "ticket"],
  installments: 12
}
#...
```
```csharp
Preference preference = new Preference();

PaymentMethods paymentmethods = new PaymentMethods();

List<PaymentMethod> excludedPaymentMethod = new List<PaymentMethod>();
excludedPaymentMethod.Add(new PaymentMethod()
  {
    Id = "master"
  });    
paymentmethods.excludedPaymentType = excludedPaymentMethod;

List<PaymentType> ExcludedPaymentType = new List<PaymentType>();
excludedPaymentType.Add(new PaymentType()
  {
    Id = "ticket"
  });
paymentmethods.ExcludedPaymentTypes = excludedPaymentType;
paymentmethods.Installments = 12;
```
]]]

----[mco]----
### IVA diferenciado

 Puedes modificar el valor del impuesto para la Dirección de Impuestos y Aduanas Nacionales (DIAN) que aplique según el producto o servicio que ofrezcas. Si no diferencias este valor, se aplicará por defecto el 19%.

 Atributo | Descripción
---------| -----------
_`type`_ | Identificador del impuesto. Solo se admiten los valores IVA e INC.
_`value`_ | Monto del impuesto. Se admite un máximo de dos decimales. Para ítems excentos de impuestos se debe informar cero.

 ```json
===
Usa el atributo taxes para definir el valor que corresponda
===
"taxes": [
	{
		"type": "IVA",
		"value": 16
	}
]
```

------------

----[mla, mlb, mco]----

### Fecha de vencimiento para pagos en efectivo

Si quieres, puedes cambiarla la fecha de vencimiento por defecto de un pago en efectivo enviando el campo `date_of_expiration` en la solicitud de creación de la preferencia. La fecha configurada debe ser entre 1 y 30 días a partir de la fecha de creación de la preferencia de pago.

[[[
```json
===
La fecha usa el formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
"date_of_expiration": "2020-05-30T23:59:59.000-04:00"
```
]]]

El período de acreditación es de 1 y 2 días hábiles según el medio de pago. Por lo tanto, te recomendamos establecer la fecha de vencimiento con al menos 3 días para asegurarte de que se realice el pago.

Ten en cuenta los [tiempos de acreditación por medio de pago](https://www.mercadopago[FAKER][URL][DOMAIN]/ayuda/Medios-de-pago-y-acreditaci-n_221) para realizar la configuración.

> WARNING
>
> Importante
>
> Si el pago se realiza después de la fecha de vencimiento, el monto se devolverá a la cuenta de Mercado Pago del pagador.
------------

### Modo binario

Puedes activar el modo binario si el modelo de negocio requiere que la aprobación del pago sea instantánea. De esta forma, el pago solo puede resultar aprobado o rechazado.

En caso de no estar activado el modo binario, el pago puede quedar en pendiente (en caso de requerir alguna acción por parte del comprador) o en proceso (si es necesaria una revisión manual).

Para activarlo, solo debes configurar como `true` el atributo _`binary_mode`_ de la preferencia de pago:

```json
"binary_mode": true
```

### Vigencia de preferencias

Si se quiere habilitar el pago de una preferencia con un tiempo de duración determinado, se puede activar un periodo de vigencia o concluir directamente con los siguientes atributos:

```json
"expires": true,
"expiration_date_from": "2017-02-01T12:00:00.000-04:00",
"expiration_date_to": "2017-02-28T12:00:00.000-04:00"
```

### Descripción en el resumen de la tarjeta

Puedes enviar el nombre de tu negocio en el atributo _`statement_descriptor`_ para que en el resumen de la tarjeta de tu comprador aparezca el nombre de tu negocio y de esta manera sepa donde realizó la compra.

```json
"statement_descriptor": "MINEGOCIO"
```

> NOTE
>
> Nota
>
> Que el valor del atributo se muestre en el resumen de la tarjeta de tu comprador dependerá de la marca de la tarjeta utilizada.


### Múltiples ítems

Si se necesita crear una preferencia para más de un ítems, solo debes agregarlos como una lista dentro de _items_.
Ten en cuenta que el monto total de la preferencia será la suma de la cantidad por el precio unitario de cada ítem.

[[[
```php
<?php
  # Crear un objeto preferencia
  $preference = new MercadoPago\Preference();
  # Crea ítems en la preferencia
  $item1 = new MercadoPago\Item
  $item1->title = "Item de Prueba 1";
  $item1->quantity = 2;
  $item1->unit_price = 11.96;

  $item2= new MercadoPago\Item
  $item2->title = "Item de Prueba 2";
  $item2->quantity = 1;
  $item2->unit_price = 11.96;

  $preference->items = array($item1,$item2);
  # Guardar y postear la preferencia
  $preference->save();
?>
```
```node
// Configura tu preferencia
var preference = {
  items: [
      { title: 'Mi producto',
      quantity: 1,
      currency_id: '[FAKER][CURRENCY][ACRONYM]',
      unit_price: 75.56 },
	{ title: 'Mi producto 2’,
      quantity: 2,
      currency_id: '[FAKER][CURRENCY][ACRONYM]',
      unit_price: 96.56 }
    ]
};
// Crea un botón de pago en tu sitio
mercadopago.preferences.create(preference)
.then(function(preference){
  // Este valor reemplazará el string "$$init_point$$" en tu HTML
  global.init_point = preference.body.init_point;
}).catch(function(error){
  console.log(error);
});
```
```java
// Crea un objeto preferencia
Preference preference = new Preference();
// Crea ítems en la preferencia
Item item1 = new Item();
item1.setId("1234")
    .setTitle("Producto 1")
    .setQuantity(2)
    .setCurrencyId("[FAKER][CURRENCY][ACRONYM]")
    .setUnitPrice((float) 75.56);

Item item2 = new Item();
item2.setId("12")
    .setTitle("Producto 2")
    .setQuantity(1)
    .setCurrencyId("[FAKER][CURRENCY][ACRONYM]")
    .setUnitPrice((float) 75.56);

preference.appendItem(item1, item2);
// Guardar y postear la preferencia
preference.save();
```
```ruby
// Crea ítems en la preferencia
item = MercadoPago::Item.new({
  title:        "Mi producto",
  quantity:     1,
  unit_price:   75.56
})
item2 = MercadoPago::Item.new({
  title:        "Mi producto2”,
  quantity:     2,
  unit_price:   96.56
})
// Crea un objeto preferencia
preference = MercadoPago::Preference.new({
  items: [item, item2]
})
preference.save()
```
```csharp
// Crea un objeto preferencia
Preference preference = new Preference();

// Crea ítems en la preferencia
reference.Items.Add(
  new Item()
  {
    Title = "Mi producto",
    Quantity = 1,
    CurrencyId = CurrencyId.[FAKER][CURRENCY][ACRONYM],
    UnitPrice = (decimal)75.56
  },
  new Item()
  {
    Title = "Mi producto2”,
    Quantity = 2,
    CurrencyId = CurrencyId.[FAKER][CURRENCY][ACRONYM],
    UnitPrice = (decimal)96.56
  }
);
preference.Save()"
```
```curl
curl -X POST \
  'https://api.mercadopago.com/checkout/preferences' \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -H 'Authorization: Bearer PROD_ACCESS_TOKEN' \
  -d '{
	"items": [
	{
		"id_product":1,
		"quantity":1,
		"unit_price": 234.33,
		"titulo":"Mi producto"
	},
	{
		"id_product":2,
		"quantity":2,
		"unit_price": 255.33,
		"titulo":"Mi producto 2"
	}
]
}'
```
]]]

## Aceptar pagos únicamente de usuarios registrados

----[mla, mlb]----
Puedes aceptar pagos con la billetera de Mercado Pago exclusivamente de usuarios registrados, con tarjetas, dinero disponible y Mercado Crédito.
------------
----[mlm, mlc, mco, mpe, mlu]----
Puedes aceptar pagos con la billetera de Mercado Pago exclusivamente de usuarios registrados, con tarjetas y dinero disponible.
------------

Esto permite que tus clientes puedan tener disponible la información de su cuenta al instante, como por ejemplo, sus tarjetas y domicilios guardados. 

> WARNING
>
> Importante
>
> Ten en cuenta que agregando esta opción no podrás recibir pagos de usuarios que no tengan cuenta en Mercado Pago o Mercado Libre y tampoco podrás cobrar en efectivo ni transferencia.

Para aceptar pagos exclusivamente de usuarios registrados, agrega el siguiente atributo en tu preferencia:

```json
"purpose": "wallet_purchase"
```

Al hacerlo, tu preferencia quedaría de la siguiente manera:

```json
{
    "purpose": "wallet_purchase",
    "items": [
        {
            "title": "Mi producto",
            "quantity": 1,
            "unit_price": 75.76
        }
    ],
}
```

## Monto del envío

Si ya tienes estimado el envio desde tu sitio, puedes enviar el monto y mostrarlo por separado del total al ofrecer el pago. 

Para configurarlo, agrega el nodo `shipments` con el valor del monto que quieras cobrar en el atributo `cost` y el valor `not_specified` en el atributo `mode`.

```json
{
    "shipments":{
        "cost": 1000,
        "mode": "not_specified",
  }
}
```
## Optimiza la conversión de tus anuncios

Sabemos que es importante maximizar la efectividad de tus anuncios. Por esto, te damos la posibilidad de integrar el Checkout Pro con las plataformas de Facebook Ads y Google Ads para asociar los pagos a tus campañas.

> NOTE
>
> Nota
>
----[mla, mlb]----
> Solo se verán asociados los pagos aprobados al instante con tarjetas de crédito o débito, dinero en Mercado Pago o con Mercado Créditos.
------------
----[mlm, mlc, mco, mpe, mlu]----
> Solo se verán asociados los pagos aprobados al instante con tarjetas de crédito o débito, o con dinero en Mercado Pago.
------------

### Asocia un píxel de Facebook

Al momento de crear una preferencia, asocia el identificador correspondiente a tu píxel de Facebook de la siguiente manera:

[[[
```php
===
Agrega el código en la preferencia y reemplaza el valor PIXEL_ID por tu identificador.
===
<?php
  // Crear un objeto preferencia
  $preference = new MercadoPago\Preference();

  // Asocia tu píxel de Facebook
  $preference->tracks = array(
    array(
      'type' => 'facebook_ad',
      'values'=> array(
        'pixel_id' => 'PIXEL_ID'
      )
    )
  );

  // ...
  // Guardar y postear la preferencia
  $preference->save();
?>
```
```node
===
Agrega el código en la preferencia y reemplaza el valor PIXEL_ID por tu identificador.
===
// Configura tu preferencia
var preference = {

  // Asocia tu píxel de Facebook
  tracks: [
        {
          type: "facebook_ad",
          values: {
            "pixel_id": 'PIXEL_ID'
          }
        }
      ]
  //...
};
```
```java
===
Agrega el código en la preferencia y reemplaza el valor PIXEL_ID por tu identificador.
===
// Crea un objeto preferencia
Preference preference = new Preference();

// Asocia tu píxel de Facebook
Track trackFacebook = new Track()
                .setType("facebook_ad")
                .setValues(new TrackValues()
                        .setPixelId("PIXEL_ID")
                );

Preference preference = new Preference()
        .appendTrack(trackFacebook);

// Guardar y postear la preferencia
preference.save();
```
```csharp
===
Agrega el código en la preferencia y reemplaza el valor PIXEL_ID por tu identificador.
===
List<Track> tracks = new List<Track>();
// Asocia tu píxel de Facebook
tracks.Add(
    new Track
    {
        Type = "facebook_ad",
        Values = new JObject
        {
            { "pixel_id", "PIXEL_ID" }
        }
    });

MercadoPago.Resources.Preference preference = new MercadoPago.Resources.Preference
{
    // ...
    Tracks = tracks
};

preference.Save();
```
```curl
===
Agrega el código en la preferencia y reemplaza el valor PIXEL_ID por tu identificador.
===

curl -X POST \
  'https://api.mercadopago.com/checkout/preferences' \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -H 'Authorization: Bearer PROD_ACCESS_TOKEN' \
  -d '{
	"items": [
        {
            "id_product":1,
            "quantity":1,
            "unit_price": 234.33,
            "titulo":"Mi producto"
        }
    ],
    "tracks": [
        {
            "type": "facebook_ad",
            "values": {
                "pixel_id": "PIXEL_ID"
            }
        }
    ]
}'
```
]]]

Al configurarlo, cuando se apruebe un pago a través de tu Checkout Pro, verás un evento `Purchase` asociado al píxel especificado.

> NOTE
>
> Nota
>
> Por el momento, solo se puede configurar un píxel. Prueba el funcionamiento de tu integración utilizando la extensión de Chrome Facebook Pixel Helper. Para más información, visita el [sitio oficial de Facebook](https://www.facebook.com/business/help/742478679120153?id=1205376682832142).


### Asocia una etiqueta de Google Ads

Al crear una preferencia, puedes asociarle una etiqueta para seguimiento de conversiones de Google Ads de la siguiente manera:


[[[
```php
===
Agrega el código en la preferencia y reemplaza los valores CONVERSION\_ID y CONVERSION\_LABEL por los datos de tu etiqueta.
===

<?php
  // Crear un objeto preferencia
  $preference = new MercadoPago\Preference();
 
  // Asocia tu etiqueta
  $preference->tracks = array(
    array(
        'type' => 'google_ad',
        'values' => array(
          'conversion_id' => 'CONVERSION_ID',
          'conversion_label' => 'CONVERSION_LABEL'
        )
    )
  );

  ...
  // Guardar y postear la preferencia
  $preference->save();
?>
```
```node
===
Agrega el código en la preferencia y reemplaza los valores CONVERSION\_ID y CONVERSION\_LABEL por los datos de tu etiqueta.
===
// Configura tu preferencia
var preference = {
 
  // Asocia tu etiqueta
  tracks: [
        {
            type: "google_ad",
            values: {
              conversion_id: "CONVERSION_ID",
              conversion_label: "CONVERSION_LABEL"
            } 
        }
      ]
  ...
};
```
```java
===
Agrega el código en la preferencia y reemplaza los valores CONVERSION\_ID y CONVERSION\_LABEL por los datos de tu etiqueta.
===
// Crea un objeto preferencia
Preference preference = new Preference();

// Asocia tu etiqueta
Track trackGoogle = new Track()
                .setType("google_ad")
                .setValues(new TrackValues()
                        .setConversionId("CONVERSION_ID")
                        .setConversionLabel("CONVERSION_LABEL")
                );


Preference preference = new Preference()
        .appendTrack(Google);

// Guardar y postear la preferencia
preference.save();
```
```csharp
===
Agrega el código en la preferencia y reemplaza los valores CONVERSION\_ID y CONVERSION\_LABEL por los datos de tu etiqueta.
===
List<Track> tracks = new List<Track>();
// Asocia tu etiqueta
tracks.Add(
    new Track
    {
        Type = "google_ad",
        Values = new JObject
        {
            { "conversion_id", "CONVERSION_ID" },
            { "conversion_label", "CONVERSION_LABEL" }
        }
    });

MercadoPago.Resources.Preference preference = new MercadoPago.Resources.Preference
{
    ...
    Tracks = tracks
};

preference.Save();
```
```curl
===
Agrega el código en la preferencia y reemplaza los valores CONVERSION\_ID y CONVERSION\_LABEL por los datos de tu etiqueta.
===
curl -X POST \
  'https://api.mercadopago.com/checkout/preferences' \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -H 'Authorization: Bearer PROD_ACCESS_TOKEN' \
  -d '{
	"items": [
        {
            "id_product":1,
            "quantity":1,
            "unit_price": 234.33,
            "titulo":"Mi producto"
        }
    ],
    "tracks": [
        {
            "type": "google_ad",
            "values": {
                "conversion_id", "CONVERSION_ID",
                "conversion_label", "CONVERSION_LABEL"
            }
        }
    ]
}'
```
]]]

De este modo, cuando se apruebe un pago a través de tu Checkout Pro, se asociará una conversión a la etiqueta configurada.

> NOTE
>
> Nota
>
> Por el momento, solo se puede configurar una etiqueta. Para más información sobre las etiquetas del seguimiento de conversiones de Google Ads, visita el [sitio oficial de Google](https://support.google.com/google-ads?hl=es-419#topic=7456157).


## Obtén información sobre tu negocio

Si sos un Partner podrás ser identificado y luego obtener métricas de negocio según corresponda. Utiliza `headers` en tu preferencia de pago agregando el código de identificación que te brindamos para el caso que corresponda. No es obligatorio completar este campo, por lo que si no sos Partner debes dejarlo vacío.

Header | Tipo de código | Identificadores
------ | ---------------| ---------
`x-integrator-id` | Integrador | Para desarrolladores o agencias que realizaron la integración.
`x-platform-id` | Plataforma | Para las plataformas o módulos que ofrecen Mercado Pago en sus soluciones. 
`x-corporation-id` | Corporaciones | Para cuentas asociadas a una cuenta vendedor o grupo económico.

> Para ser un Partner deberás homologarte o certificarte como tal. Para conocer más sobre las certificaciones para desarrolladores de Mercado Pago y cómo obtener tu ID, [déjanos tu contacto](https://docs.google.com/forms/d/e/1FAIpQLSdbA1Y8_9RD2xTCRDHLxeVYrrSIy5s2ME8Ku6_gEcSu60KUHQ/viewform). 

[[[
```php
===
Agrega los códigos de identificación y reemplaza los valores que quieras: CORPORATION\_ID, INTEGRATOR\_ID y PLATFORM_ID.
===
MercadoPago\SDK::setPlatformId("PLATFORM_ID");
MercadoPago\SDK::setIntegratorId("INTEGRATOR_ID");
MercadoPago\SDK::setCorporationId("CORPORATION_ID");
```
```node
===
Agrega los códigos de identificación y reemplaza los valores que quieras: CORPORATION\_ID, INTEGRATOR\_ID y PLATFORM_ID.
===
mercadopago.configure({
    platform_id: 'PLATFORM_ID',
    integrator_id: 'INTEGRATOR_ID',
    corporation_id: 'CORPORATION_ID'
});
```
```java
===
Agrega los códigos de identificación y reemplaza los valores que quieras: CORPORATION\_ID, INTEGRATOR\_ID y PLATFORM_ID.
===
MercadoPago.SDK.setPlatformId("PLATFORM_ID");
MercadoPago.SDK.setIntegratorId("INTEGRATOR_ID");
MercadoPago.SDK.setCorporationId("CORPORATION_ID");
```
```ruby
===
Agrega los códigos de identificación y reemplaza los valores que quieras: CORPORATION\_ID, INTEGRATOR\_ID y PLATFORM_ID.
===
$mp.set_platform_id("PLATFORM_ID")
$mp.set_integrator_id("INTERATOR_ID")
$mp.set_corporation_id("CORPORATION_ID")
```
```csharp
===
Agrega los códigos de identificación y reemplaza los valores que quieras: CORPORATION\_ID, INTEGRATOR\_ID y PLATFORM_ID.
===
MercadoPago.SDK.PlatformId    = "PLATFORM_ID";
MercadoPago.SDK.IntegratorId  = "INTEGRATOR_ID";
MercadoPago.SDK.CorporationId = "CORPORATION_ID";
```
```curl
===
Agrega los códigos de identificación y reemplaza los valores que quieras: CORPORATION\_ID, INTEGRATOR\_ID y PLATFORM_ID.
===
curl -X POST \
'https://api.mercadopago.com/checkout/preferences' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'x-corporation-id: CORPORATION_ID \
  -H 'x-integrator-id: INTEGRATOR_ID \
  -H 'x-platform-id: PLATFORM_ID \
  -H 'Authorization: Bearer PROD_ACCESS_TOKEN' \
  -d '{
    "items": [
       ...
       
    ],
    ...
}'
```
]]]


----[mla, mlb]----

## Pagos con dos tarjetas de crédito

![Pago 2 tarjetas](/images/web-payment-checkout/pay_2_tarjetas.png)

Se puede habilitar la opción de ofrecer pagar con dos tarjetas de crédito desde la cuenta de Mercado Pago.
Para activar la opción de pago, ve a tus <a href="https://www.mercadopago.com.ar/settings/my-business" target="_blank"> opciones de negocio</a> y elige la opción _Recibir pagos con 2 tarjetas de crédito_.

![Config pago 2 tarjetas](/images/web-payment-checkout/config_pago_dos_tarjetas.gif)

------------
---
### Próximos pasos

> LEFT_BUTTON_REQUIRED_ES
>
> Integración avanzada
>
> Optimiza tu integración y mejora la gestión de tus ventas.
>
> [Otras funcionalidades](http://www.mercadopago.com.ar/developers/es/guides/online-payments/checkout-pro/advanced-integration/)

> RIGHT_BUTTON_RECOMMENDED_ES
>
> Personalizaciones
>
> Adapta el estilo de tu marca en la experiencia de compra.
>
> [Integración avanzada](http://www.mercadopago.com.ar/developers/es/guides/online-payments/checkout-pro/customizations/)
