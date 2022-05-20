# Configuraciones de preferencia

Puedes adaptar la integración de Checkout Pro a tu modelo de negocio configurando [atributos de preferencia](https://www.mercadopago.com/developers/es/reference/preferences/_checkout_preferences/post).

----[mla, mlb]----
Si ofreces compras de alto valor, por ejemplo, puedes aceptar [pagos con dos tarjetas de crédito](#bookmark_acepta_pagos_con_2_tarjetas_de_crédito) o [eliminar métodos de pago](#bookmark_define_los_medios_de_pago) no deseados para tu operación.
------------
----[mlm, mlc, mlu, mco, mpe]----
Si ofreces compras de alto valor, por ejemplo, puedes [excluir métodos de pago](#bookmark_define_los_medios_de_pago) no deseado para tu operación.
------------

La configuración de atributos de preferencia también te permite [obtener información comercial sobre tu negócio](#bookmark_obtén_información_sobre_tu_negocio) y [medir la efectividad de tus anuncios](#bookmark_optimiza_la_conversión_de_tus_anuncios) en plataformas como Facebook y Google.

## Ejemplo de preferencia completa

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
			"currency_id": "COP",
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

## Define los medios de pago

----[mla, mco, mlb, mlu, mlc, mpe]----
De forma predeterminada, todos los métodos de pago se ofrecen en Checkout Pro. A través de la preferencia de pago, puedes configurar un método de pago por defecto, eliminar los no deseados, o elegir un número máximo de cuotas que se ofrecerán.
------------
----[mlm]----
De forma predeterminada, todos los métodos de pago se ofrecen en Checkout Pro. A través de la preferencia de pago, puedes configurar un método de pago por defecto, eliminar los no deseados, o elegir un número máximo de mensualidades que se ofrecerán.
------------

----[mla, mco, mlb, mlu, mlc, mpe]----
| Atributo | Descripción |
| --- | --- |
| `payment_methods` | Clase que describe los métodos y atributos de medios de pago de Checkout Pro. |
| `excluded_payment_types` | Método que excluye tipos de medios de pago no deseados, como efectivo, tarjetas de crédito, o débito. |
| `excluded_payment_methods` | Método que excluye marcas de tarjetas de crédito o débito, como Visa, Mastercard o American Express, entre otras. |
| `installments` | Método que define la cantidad de cuotas máximas a ofrecer. |
| `purpose` | Al indicar el valor "wallet_purchase" en este método, Checkout Pro solo aceptará pagos de usuarios registrados en Mercado Pago, con tarjeta y saldo de cuenta. |
------------

----[mlm]----
| Atributo | Descripción |
| --- | --- |
| `payment_methods` | Clase que describe los métodos y atributos de medios de pago de Checkout Pro. |
| `excluded_payment_types` | Método que excluye tipos de medios de pago no deseados, como efectivo, tarjetas de crédito, o débito. |
| `excluded_payment_methods` | Método que excluye marcas de tarjetas de crédito o débito, como Visa, Mastercard o American Express, entre otras. |
| `installments` | Método que define la cantidad de mensualidades máximas a ofrecer. |
| `purpose` | Al indicar el valor "wallet_purchase" en este método, Checkout Pro solo aceptará pagos de usuarios registrados en Mercado Pago, con tarjeta y saldo de cuenta. |
------------

Por ejemplo:

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
PreferenceClient client = new PreferenceClient();
//...
List<PreferencePaymentMethodRequest> excludedPaymentMethods = new ArrayList<>();
excludedPaymentMethods.add(PreferencePaymentMethodRequest.builder().id("master").build());
excludedPaymentMethods.add(PreferencePaymentMethodRequest.builder().id("amex").build());

List<PreferencePaymentTypeRequest> excludedPaymentTypes = new ArrayList<>();
excludedPaymentTypes.add(PreferencePaymentTypeRequest.builder().id("ticket").build());

PreferencePaymentMethodsRequest paymentMethods =
   PreferencePaymentMethodsRequest.builder()
       .excludedPaymentMethods(excludedPaymentMethods)
       .excludedPaymentTypes(excludedPaymentTypes)
       .installments(12)
       .build();

PreferenceRequest request = PreferenceRequest.builder().paymentMethods(paymentMethods).build();

client.create(request);
//...
```
```ruby
#...
preference_data = {
  # ...
  payment_methods: {
    excluded_payment_methods: [
      { id: 'master' }
    ],
    excluded_payment_types: [
      { id: 'ticket' }
    ],
    installments: 12
  }
  # ...
}
#...
```
```csharp
var paymentMethods = new PreferencePaymentMethodsRequest
{
    ExcludedPaymentMethods = new List<PreferencePaymentMethodRequest>
    {
        new PreferencePaymentMethodRequest
        {
            Id = "master",
        },
    },
    ExcludedPaymentTypes = new List<PreferencePaymentTypeRequest>
    {
        new PreferencePaymentTypeRequest
        {
            Id = "ticket",
        },
    },
    Installments = 12,
};

var request = new PreferenceRequest
{
    // ...
    PaymentMethods = paymentMethods,
};
```
```python
#...
preference_data = {
    "excluded_payment_methods": [
        { "id": "master" }
    ],
    "excluded_payment_types": [
        { "id": "ticket" }
    ],
    "installments": 12
}
#...
```
]]]

----[mla, mlb]----

## Acepta pagos con 2 tarjetas de crédito

![Pago 2 tarjetas](/images/web-payment-checkout/pay_2_tarjetas.png)

Puedes activar la opción de ofrecer pagos con dos tarjetas de crédito desde la cuenta de Mercado Pago.

Para activar esta opción de pago, ve a tus [opciones de negocio](https://www.mercadopago.com.ar/settings/my-business) y elige la opción `Recibir pagos con 2 tarjetas de crédito`.

![Config pago 2 tarjetas](/images/web-payment-checkout/config_pago_dos_tarjetas.gif)
------------

## Acepta pagos únicamente de usuarios registrados

----[mla, mlb]----
Puedes aceptar pagos con la billetera de Mercado Pago exclusivamente de usuarios registrados, con tarjetas, dinero disponible y Mercado Crédito.
------------
----[mlm, mlc, mco, mpe, mlu]----
Puedes aceptar pagos con la billetera de Mercado Pago exclusivamente de usuarios registrados, con tarjetas y dinero disponible.
------------

Esto permite que tus clientes tengan disponible la información de su cuenta al instante en el momento del pago, como sus tarjetas y domicilios guardados. 

> WARNING
>
> Importante
>
> Ten en cuenta que agregando esta opción no podrás recibir pagos de usuarios que no tengan cuenta en Mercado Pago o Mercado Libre y tampoco podrás cobrar en efectivo ni transferencia.

Para aceptar pagos exclusivamente de usuarios registrados, agrega el siguiente atributo en tu preferencia:

```json
"purpose": "wallet_purchase"
```

Al hacerlo, tu preferencia tendría una estructura similar al ejemplo siguiente:

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
----[mco]----

## Modifica la tasa de impuestos DIAN

Puedes modificar el valor del impuesto para la Dirección de Impuestos y Aduanas Nacionales (DIAN), aplicado según el producto o servicio que ofrezcas. 

Si no diferencias este valor, se aplicará por defecto una tarifa de 19%.

| Atributo | Descripción |
| --- | --- |
| `type` | Identificador del impuesto. Solo se admite `IVA` como valor. |
| `value` | Monto del impuesto. Se admite un máximo de dos decimales. Para ítems excentos de impuestos se debe informar cero (`0`). |

Por ejemplo:

[[[
```json
"taxes": [
	{
		"type": "IVA",
		"value": 16
	}
]
```
]]]

------------

----[mla, mlb, mco]----

## Cambia la fecha de vencimiento para pagos en efectivo

Puedes cambiar la fecha de vencimiento por defecto de un pago en efectivo enviando el campo `date_of_expiration` en la solicitud de creación de la preferencia. La fecha configurada debe ser entre 1 y 30 días a partir de la fecha de creación de la preferencia de pago.

Por ejemplo:

[[[
```json
===
La fecha usa el formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
"date_of_expiration": "2020-05-30T23:59:59.000-04:00"
```
]]]

> NOTE
>
> Nota
>
> El período de acreditación es de 1 y 2 días hábiles, según el medio de pago. Por lo tanto, te recomendamos establecer la fecha de vencimiento con al menos 3 días para asegurarte de que se realice el pago.

Ten en cuenta los [tiempos de acreditación por medio de pago](https://www.mercadopago.com.ar/ayuda/_221) para realizar la configuración correctamente.

> WARNING
>
> Importante
>
> Si el pago se realiza después de la fecha de vencimiento, el monto se devolverá a la cuenta de Mercado Pago del pagador.
------------

## Activa el modo binario

Puedes activar el modo binario si el modelo de negocio requiere que la aprobación del pago sea instantánea. De esta forma, el pago solo puede resultar aprobado o rechazado.

En caso de no estar activado el modo binario, el pago puede quedar en pendiente (en caso de requerir alguna acción por parte del comprador) o en proceso (si es necesaria una revisión manual).

Para activarlo, solo debes configurar como `true` el atributo `binary_mode` de la preferencia de pago:

```json
"binary_mode": true
```

> WARNING
>
> Importante
>
> Al activar el modo binario se simplifica la integración con Checkout Pro, pero puede ocasionar una disminución en la tasa de porcentaje de pagos aprobados. Esto se debe a que, para mantener el flujo instantáneo, los pagos pendientes o en proceso se rechazarán automáticamente de forma predeterminada.

## Establece la vigencia de preferencias

Si se quiere habilitar el pago de una preferencia con un tiempo de duración determinado, se puede activar un periodo de vigencia o concluir directamente con los atributos `expires`,` expiration_date_from` y `expiration_date_to`:

```json
"expires": true,
"expiration_date_from": "2017-02-01T12:00:00.000-04:00",
"expiration_date_to": "2017-02-28T12:00:00.000-04:00"
```

Nota que la fecha usa el formato `ISO 8601: yyyy-MM-dd'T'HH:mm:ssz`.

### Envía una descripción en el resumen de la tarjeta

Puedes agregar una descripción para tu negocio a través del atributo `statement_descriptor` de las preferencias de pago, como se muestra en el siguiente ejemplo:

```json
"statement_descriptor": "MINEGOCIO"
```

El valor del atributo aparecerá en el resumen de la tarjeta de tu comprador dependiendo de la marca de la tarjeta utilizada.

## Establece una preferencia para múltiples ítems

Si se necesita crear una preferencia para más de un ítem, solo debes agregarlos como una lista, tal como se muestra en el siguiente ejemplo:

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
PreferenceClient client = new PreferenceClient();
// Crea ítems en la preferencia
List<PreferenceItemRequest> items = new ArrayList<>();

PreferenceItemRequest item1 =
   PreferenceItemRequest.builder()
       .id("1234")
       .title("Produto 1")
       .quantity(2)
       .currencyId("BRL")
       .unitPrice(new BigDecimal("100"))
       .build();   
PreferenceItemRequest item2 =
   PreferenceItemRequest.builder()
       .id("12")
       .title("Produto 2")
       .quantity(1)
       .currencyId("BRL")
       .unitPrice(new BigDecimal("100"))
       .build();

items.add(item1);
items.add(item2);

PreferenceRequest request = PreferenceRequest.builder().items(items).build();
// Guardar y postear la preferencia
client.create(request);
```
```ruby
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')
# Create preference data with items
preference_data = {
  items: [
    {
      title: 'Mi producto 1',
      quantity: 1,
      currency_id: '[FAKER][CURRENCY][ACRONYM]',
      unit_price: 75.56
    },
    {
      title: 'Mi producto 2',
      quantity: 2,
      currency_id: '[FAKER][CURRENCY][ACRONYM]',
      unit_price: 96.56
    }
  ]
}

preference_response = sdk.preference.create(preference_data)
preference = preference_response[:response]
```
```csharp
// Crea el request con múltiples ítems
var request = new PreferenceRequest
{
    Items = new List<PreferenceItemRequest>
    {
        new PreferenceItemRequest
        {
            Title = "Mi producto 1",
            Quantity = 1,
            CurrencyId = "[FAKER][CURRENCY][ACRONYM]",
            UnitPrice = 75.56m,
        },
        new PreferenceItemRequest
        {
            Title = "Mi producto 2",
            Quantity = 2,
            CurrencyId = "[FAKER][CURRENCY][ACRONYM]",
            UnitPrice = 96.56m,
        },
        // ...
    },
};

// Crea un objeto client
var client = new PreferenceClient();

// Crea la preferencia
Preference preference = await client.CreateAsync(request);
```
```python
# Crea ítems en la preferencia
preference_data = {
    "items": [
        {
            "title": "Mi producto",
            "quantity": 1,
            "unit_price": 75.56
        },
        {
            "title": "Mi producto2",
            "quantity": 2,
            "unit_price": 96.56
        }
    ]
}

# Crea la preferencia
preference_response = sdk.preference().create(preference_data)
preference = preference_response["response"]
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

Ten en cuenta que el valor total de la preferencia será la suma del valor del precio unitario de cada ítem listado.

## Muestra el monto del envío 

Si ya tienes estimado el envio desde tu sitio, puedes enviar el monto y mostrarlo por separado del total al ofrecer el pago. 

Para configurarlo, agrega el nodo `shipments` con el valor del monto que quieras cobrar en el atributo `cost` y el valor `not_specified` en el atributo `mode`:

```json
{
    "shipments":{
        "cost": 1000,
        "mode": "not_specified",
  }
}
```

## Optimiza la conversión de tus anuncios

Sabemos que es importante maximizar la efectividad y la capacidad de búsqueda de tus anuncios.

Por eso, ofrecemos la posibilidad de integrar Checkout Pro con las plataformas de Facebook Ads y Google Ads para asociar los pagos a tus campañas comerciales.

----[mla, mlb]----
> NOTE
>
> Nota
>
> Solo se verán asociados los pagos aprobados al instante con tarjetas de crédito o débito, dinero en Mercado Pago o con Mercado Créditos.
------------

----[mlm, mlc, mco, mpe, mlu]----
> NOTE
>
> Nota
>
> Solo se verán asociados los pagos aprobados al instante con tarjetas de crédito o débito, o con dinero en Mercado Pago.
------------

### Integra Checkout Pro con anuncios de Facebook

Al crear una preferencia, puedes asociarla con un _pixel_ (identificador) para rastrear las conversiones de anuncios de Facebook:

[[[
```php
===
Agrega el código en la preferencia y reemplaza el valor <code>PIXEL_ID</code> por tu identificador.
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
Agrega el código en la preferencia y reemplaza el valor <code>PIXEL_ID</code> por tu identificador.
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
Agrega el código en la preferencia y reemplaza el valor <code>PIXEL_ID</code> por tu identificador.
===
// Crea un objeto preferencia
PreferenceClient client = new PreferenceClient();

// Asocia tu píxel de Facebook
List<PreferenceTrackRequest> tracks = new ArrayList<>();
PreferenceTrackRequest trackFacebook = PreferenceTrackRequest.builder()
   .type("facebook_ad")
   .values(PreferenceTrackValuesRequest.builder().pixelId("PIXEL_ID").build())
   .build();
tracks.add(trackFacebook);

PreferenceRequest request = PreferenceRequest.builder().tracks(tracks).build();

// Guardar y postear la preferencia
client.create(request);
```
```csharp
===
Agrega el código en la preferencia y reemplaza el valor <code>PIXEL_ID</code> por tu identificador.
===
// Asocia tu píxel de Facebook
var tracks = new List<PreferenceTrackRequest>
{
    new PreferenceTrackRequest
    {
        Type = "facebook_ad",
        Values = new PreferenceTrackValuesRequest
        {
            PixelId = "PIXEL_ID",
        },
    },
};

var request = new PreferenceRequest
{
    // ...
    Tracks = tracks,
};

var client = new PreferenceClient();
Preference preference = await client.CreateAsync(request);
```
```python
===
Agrega el código en la preferencia y reemplaza el valor <code>PIXEL_ID</code> por tu identificador.
===
# Asocia tu píxel de Facebook
preference_data = {
    # ...
    "tracks": [
        {
            "type": "facebook_ad",
            "values": {
                "pixel_id": "PIXEL_ID"
            }
        }
    ]
}

preference_response = sdk.preference().create(preference_data)
preference = preference_response["response"]
```
```curl
===
Agrega el código en la preferencia y reemplaza el valor <code>PIXEL_ID</code> por tu identificador.
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

Una vez completada la configuración, se asociará un evento de `purchase` con el _píxel_ especificado cuando se apruebe un pago reenviado por tu anuncio.

> NOTE
>
> Nota
>
> Por el momento, solo se puede configurar un único píxel por preferencia. Prueba el funcionamiento de tu integración utilizando la extensión de Chrome Facebook Pixel Helper. Para más información, visita el [sitio oficial de Facebook](https://www.facebook.com/business/help/742478679120153?id=1205376682832142).

### Integra Checkout Pro con Google Ads

Al crear una preferencia, puedes asociarla con una _tag_ (identificador) para realizar un seguimiento de las conversiones de Google Ads:

[[[
```php
===
Agrega el código en la preferencia y reemplaza los valores <code>CONVERSION\_ID</code> y <code>CONVERSION\_LABEL</code> por los datos de tu _tag_.
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
Agrega el código en la preferencia y reemplaza los valores <code>CONVERSION\_ID</code> y <code>CONVERSION\_LABEL</code> por los datos de tu _tag_.
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
Agrega el código en la preferencia y reemplaza los valores <code>CONVERSION\_ID</code> y <code>CONVERSION\_LABEL</code> por los datos de tu _tag_.
===
// Crea un objeto preferencia
PreferenceClient client = new PreferenceClient();

// Asocia tu etiqueta
List<PreferenceTrackRequest> tracks = new ArrayList<>();
PreferenceTrackRequest trackGoogle =
   PreferenceTrackRequest.builder()
       .type("google_ad")
       .values(
           PreferenceTrackValuesRequest.builder()
               .conversionId("CONVERSION_ID")
               .conversionLabel("CONVERSION_LABEL")
               .build())
       .build();
tracks.add(trackGoogle);

PreferenceRequest request = PreferenceRequest.builder().tracks(tracks).build();

// Guardar y postear la preferencia
client.create(request);
```
```csharp
===
Agrega el código en la preferencia y reemplaza los valores <code>CONVERSION\_ID</code> y <code>CONVERSION\_LABEL</code> por los datos de tu _tag_.
===
// Asocia tu etiqueta
var tracks = new List<PreferenceTrackRequest>
{
    new PreferenceTrackRequest
    {
        Type = "facebook_ad",
        Values = new PreferenceTrackValuesRequest
        {
            ConversionId = "CONVERSION_ID",
            ConversionLabel = "CONVERSION_LABEL",
        },
    },
};

var request = new PreferenceRequest
{
    // ...
    Tracks = tracks,
};

var client = new PreferenceClient();
Preference preference = await client.CreateAsync(request);
```
```python
===
Agrega el código en la preferencia y reemplaza los valores <code>CONVERSION\_ID</code> y <code>CONVERSION\_LABEL</code> por los datos de tu _tag_.
===
# Asocia tu etiqueta
preference_data = {
    # ...
    "tracks": [
        {
            "type": "google_ad",
            "values": {
                "conversion_id": "CONVERSION_ID",
                "conversion_label": "CONVERSION_LABEL"
            }
        }
    ]
}

preference_response = sdk.preference().create(preference_data)
preference = preference_response["response"]
```
```curl
===
Agrega el código en la preferencia y reemplaza los valores <code>CONVERSION\_ID</code> y <code>CONVERSION\_LABEL</code> por los datos de tu _tag_.
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

Una vez completada la configuración, se asociará una conversión con la _tag_ especificada cuando se apruebe un pago reenviado para tu anuncio.

> NOTE
>
> Nota
>
> Por el momento, solo se puede configurar una única _tag_ por preferencia. Para más información sobre las etiquetas del seguimiento de conversiones de Google Ads, visita el [sitio oficial de Google](https://support.google.com/google-ads?hl=es-419#topic=7456157).

## Obtén información sobre tu negocio

Nuestros miembros certificados en el [Dev Program](https://www.mercadopago.com/developers/es/developer-program) pueden obtener métricas comerciales a partir de Checkout Pro. 

Para obtener métricas comerciales, utiliza _headers_ en tu preferencia de pago, agregando los códigos de identificación según corresponda (no es obligatorio completar con los 3 campos):

| _Header_ | Tipo de código | Identificadores |
| --- | --- | --- |
| `x-integrator-id` | Integrador | Para desarrolladores o agencias que realizaron la integración. |
| `x-platform-id` | Plataforma | Para las plataformas o módulos que ofrecen Mercado Pago en sus soluciones. |
| `x-corporation-id` | Corporaciones | Para cuentas asociadas a una cuenta vendedor o grupo económico. |

> NOTE
> 
> Nota
> 
> Recuerda agregar el _header_ `integrator_id` a tus integraciones para recibir beneficios adicionales del programa. Puedes encontrar tu `integrator_id` en el developer [Dashboard](/developers/es/docs/checkout-pro/additional-content/dashboard/introduction). 

Por ejemplo:

[[[
```php
===
Agrega los códigos de identificación y reemplaza los valores que quieras: <code>CORPORATION\_ID</code>, <code>INTEGRATOR\_ID</code> y <code>PLATFORM_ID</code>.
===
MercadoPago\SDK::setPlatformId("PLATFORM_ID");
MercadoPago\SDK::setIntegratorId("INTEGRATOR_ID");
MercadoPago\SDK::setCorporationId("CORPORATION_ID");
```
```node
===
Agrega los códigos de identificación y reemplaza los valores que quieras: <code>CORPORATION\_ID</code>, <code>INTEGRATOR\_ID</code> y <code>PLATFORM_ID</code>.
===
mercadopago.configure({
    platform_id: 'PLATFORM_ID',
    integrator_id: 'INTEGRATOR_ID',
    corporation_id: 'CORPORATION_ID'
});
```
```java
===
Agrega los códigos de identificación y reemplaza los valores que quieras: <code>CORPORATION\_ID</code>, <code>INTEGRATOR\_ID</code> y <code>PLATFORM_ID</code>.
===
MercadoPago.SDK.setPlatformId("PLATFORM_ID");
MercadoPago.SDK.setIntegratorId("INTEGRATOR_ID");
MercadoPago.SDK.setCorporationId("CORPORATION_ID");
```
```ruby
===
Agrega los códigos de identificación y reemplaza los valores que quieras: <code>CORPORATION\_ID</code>, <code>INTEGRATOR\_ID</code> y <code>PLATFORM_ID</code>.
===
request_options = Mercadopago::RequestOptions.new()
request_options.platform_id = 'PLATFORM_ID'
request_options.integrator_id = 'INTEGRATOR_ID'
request_options.corporation_id = 'CORPORATION_ID'

sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN', request_options: request_options)
```
```csharp
===
Agrega los códigos de identificación y reemplaza los valores que quieras: <code>CORPORATION\_ID</code>, <code>INTEGRATOR\_ID</code> y <code>PLATFORM_ID</code>.
===
MercadoPagoConfig.PlatformId    = "PLATFORM_ID";
MercadoPagoConfig.IntegratorId  = "INTEGRATOR_ID";
MercadoPagoConfig.CorporationId = "CORPORATION_ID";
```
```python
===
Agrega los códigos de identificación y reemplaza los valores que quieras: <code>CORPORATION\_ID</code>, <code>INTEGRATOR\_ID</code> y <code>PLATFORM_ID</code>.
===
import mercadopago
from mercadopago.config import RequestOptions

request_options = RequestOptions(
    corporation_id="CORPORATION_ID",
    integrator_id="INTEGRATOR_ID",
    platform_id="PLATFORM_ID"
)
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN", request_options=request_options)
```
```curl
===
Agrega los códigos de identificación y reemplaza los valores que quieras: <code>CORPORATION\_ID</code>, <code>INTEGRATOR\_ID</code> y <code>PLATFORM_ID</code>.
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

---

> PREV_STEP_CARD_ES
>
> Prueba tu integración con Checkout Pro
>
> Revisa que esté todo bien con tu integración utilizando usuarios de prueba.
>
> [Prueba tu integración con Checkout Pro](/developers/es/docs/checkout-pro/test-integration)

> NEXT_STEP_CARD_ES
>
> Interfaz de usuario
>
> Optimiza tu integración con Checkout Pro y mejora la gestión de tus ventas.
>
> [Interfaz de usuario](/developers/es/docs/checkout-pro/checkout-customization/user-interface)