---
sites_supported:
  - mla
  - mlb
  - mco
  - mlu
  - mlm
  - mlc
---

# Otras funcionalidades


Puedes adaptar la integración a tu negocio sumando atributos en la preferencia. Hay muchos [datos en una preferencia](https://www.mercadopago.com.ar/developers/es/reference/preferences/resource/) que se pueden configurar, pero siempre ten en cuenta qué es lo que tu negocio necesita.

----[mla, mlb]----
Si ofreces compras de montos altos, por ejemplo, puedes aceptar [pagos con dos tarjetas de crédito](https://www.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/configurations#bookmark_pagos_con_dos_tarjetas_de_crédito) o también, [excluir medios de pago](https://www.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/configurations#bookmark_atributos_para_la_preferencia) que no quieras aceptar.
------------
----[mlm, mlc, mlu, mco]----
Si ofreces compras de montos bajos, por ejemplo, puedes [excluir medios de pago](https://www.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/configurations#bookmark_atributos_para_la_preferencia) que no quieras aceptar.
------------

## Ejemplo de una preferencia completa

----[mlm, mla, mlb, mlc, mlu]----

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

----[mla, mco, mlb, mlu, mlc]----
Por defecto, se ofrecen todos los medios de pago. Si se quiere excluir alguno puede hacerse desde la preferencia de pago.
También se puede definir un medio de pago para que aparezca por defecto o la cantidad de cuotas máximas a ofrecer.
------------
----[mlm]----
Por defecto, se ofrecen todos los medios de pago. Si se quiere excluir alguno puede hacerse desde la preferencia de pago.
También se puede definir un medio de pago para que aparezca por defecto o la cantidad de mensualidades máximas a ofrecer.
------------


----[mla, mco, mlb, mlu, mlc]----
Atributo | Descripción
------ | -----
_`payment_methods`_ | Clase que describe los atributos y métodos de medios de pago.
_`excluded_payment_methods`_ | Método que excluye por medio de pago específicos: Visa, Mastercard o American Express, entre otras.
_`excluded_payment_types`_ | Método que excluye por tipo de medio de pago: efectivo, tarjetas de crédito o débito.
_`installments`_ | Método que define la cantidad de cuotas máximas a ofrecer.
------------

----[mlm]----
Atributo | Descripción
------ | -----
_`payment_methods`_ | Clase que describe los atributos y métodos de medios de pago.
_`excluded_payment_methods`_ | Método que excluye por medio de pago específicos: Visa, Mastercard o American Express, entre otras.
_`excluded_payment_types`_ | Método que excluye por tipo de medio de pago: efectivo, tarjetas de crédito o débito.
_`installments`_ | Método que define la cantidad de mensualidades máximas a ofrecer.
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

### Sponsor ID

El atributo `sponsor_id` es un identificador del desarrollador o compañía de software que realiza la integración del  Checkout Mercado Pago, este dato es visible en la preferencia y en el pago.

```json
"sponsor_id": 123456789
```

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
  'https://api.mercadolibre.com/checkout/preferences?access_token="PROD_ACCESS_TOKEN"' \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
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

---

----[mla, mlb]----

## Pagos con dos tarjetas de crédito

![Pago 2 tarjetas](/images/web-payment-checkout/pay_2_tarjetas.png)

Se puede habilitar la opción de ofrecer pagar con dos tarjetas de crédito desde la cuenta de Mercado Pago.
Para activar la opción de pago, ve a tus <a href="https://www.mercadopago.com.ar/settings/my-business" target="_blank"> opciones de negocio</a> y elige la opción _Recibir pagos con 2 tarjetas de crédito_.

![Config pago 2 tarjetas](/images/web-payment-checkout/config_pago_dos_tarjetas.gif)

------------

## Integraciones

### Píxel de Facebook

Al momento de crear una preferencia, puedes asociarle un identificador correspondiente a un Píxel de Facebook de la siguiente manera:


[[[
```php
<?php
  # Crear un objeto preferencia
  $preference = new MercadoPago\Preference();
  ...
  $preference->tracks = array(
    array(
      'type' => 'facebook_ad',
      'values'=> array(
        'pixel_id' => 'PIXEL_ID'
      )
    )
  );

  ...
  # Guardar y postear la preferencia
  $preference->save();
?>
```
```node
// Configura tu preferencia
var preference = {
  ...
  tracks: [
        {
          type: "facebook_ad",
          values: {
            "pixel_id": 'PIXEL_ID'
          }
        }
      ]
  ...
};
```
```java
// Crea un objeto preferencia
Preference preference = new Preference();

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
List<Track> tracks = new List<Track>();
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
    ...
    Tracks = tracks
};

preference.Save();
```
```curl
curl -X POST \
  'https://api.mercadolibre.com/checkout/preferences?access_token="PROD_ACCESS_TOKEN"' \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
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

Con esta configuración, cuando se *aprueben* pagos a través de Checkout Mercado Pago, verás un evento `Purchase` asociado al píxel especificado.

> WARNING
>
> Importante
>
> Los pagos que no sean aprobados en el momento (pendientes) no serán asociados al píxel. <br/>Por el momento, sólo se puede configurar un píxel.<br/>

> NOTE
>
> Nota
>
> Puedes probar el funcionamiento de tu integración utilizando la extensión de Chrome _Facebook Pixel Helper_. 


### Conversiones de Google Ads

Al momento de crear una preferencia, puedes asociarle una etiqueta para seguimiento de conversiones de Google Ads de la siguiente manera:


[[[
```php
<?php
  # Crear un objeto preferencia
  $preference = new MercadoPago\Preference();
  ...
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
  # Guardar y postear la preferencia
  $preference->save();
?>
```
```node
// Configura tu preferencia
var preference = {
  ...
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
// Crea un objeto preferencia
Preference preference = new Preference();

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
List<Track> tracks = new List<Track>();
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
curl -X POST \
  'https://api.mercadolibre.com/checkout/preferences?access_token="PROD_ACCESS_TOKEN"' \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
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


> WARNING
>
> Importante
>
> Los pagos que no sean aprobados en el momento (pendientes) no serán asociados. <br/>Por el momento, sólo se puede configurar un tag.<br/>


### Próximos pasos

> LEFT_BUTTON_REQUIRED_ES
>
> Integración avanzada
>
> Optimiza tu integración y mejora la gestión de tus ventas.
>
> [Otras funcionalidades](http://www.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/advanced-integration/)

> RIGHT_BUTTON_RECOMMENDED_ES
>
> Personalizaciones
>
> Adapta el estilo de tu marca en la experiencia de compra.
>
> [Integración avanzada](http://www.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/customizations/)
