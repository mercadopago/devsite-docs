---
sites_supported:
  - mla
  - mlb
  - mco
  - mlu
  - mlm
  - mlc
---

# Other functionalities


You can adapt the integration to your business by adding attributes in the preference. There is a lot of [details in a preference](https://www.mercadopago.com.ar/developers/en/reference/preferences/resource/) that can be set, but always keep in mind what your business needs.

If you offer purchases of high amounts, for example, you can accept [payments with two credit cards](https://www.mercadopago.com.ar/developers/en/guides/payments/web-payment-checkout/configurations#bookmark_pagos_con_dos_tarjetas_de_crédito) or, also, [exclude payment methods](https://www.mercadopago.com.ar/developers/en/guides/payments/web-payment-checkout/configurations#bookmark_atributos_para_la_preferencia) that you do not want to accept.

Y también, puedes medir la efectividad de tus publicidades y darles seguimiento al [integrar un píxel de Facebook](https://www.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/configurations#bookmark_asocia_un_píxel_de_facebook) o al [asociar tus anuncios de Google](https://www.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/configurations#bookmark_asocia_una_etiqueta_de_google_ads).

## Example of a complete preference

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

## Attributes for the preference

### Definition of Payment Methods

By default, all payment methods are offered. If you want to exclude any, it can be done from the payment preference.
You can also set a payment method to appear by default or define the maximum number of installments to offer.


Attribute | Description
------------ | -------------
_`payment_methods`_ | Class that describes the attributes and methods of payment methods.
_`excluded_payment_methods`_ | Method that excludes by specific payment methods: Visa, Mastercard or American Express, among others.
_`excluded_payment_types`_ | Method that excludes by type of payment method: cash, credit or debit cards.
_`installments`_ | Method that defines the amount of maximum number of installments to offer.

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

### Binary Mode

You can activate the binary mode if the business model requires payment approval to be instantaneous. This way, payment can only be approved or declined.

In case the binary mode is not activated, the payment may be pending (in case of requiring any action by the buyer) or in process (if a manual review is necessary).

To activate it, you only have to set the _`binary_mode`_ attribute of the payment preference to `true`:

```json
"binary_mode": true
```

### Validity of Preferences

If you want to enable the payment of a preference with a certain duration, you can activate a period of validity or complete directly with the following attributes:

```json
"expires": true,
"expiration_date_from": "2017-02-01T12:00:00.000-04:00",
"expiration_date_to": "2017-02-28T12:00:00.000-04:00"
```

### Sponsor ID

The `sponsor_id` attribute is an identifier of the developer or software company that performs the Checkout Mercado Pago integration, this data is visible in the preference and in the payment.

```json
"sponsor_id": 123456789
```


### Multiple Items

If you need to create a preference for more than one item, you should only add them as a list within _items_.
Keep in mind that the total amount of the preference will be the sum of the amount for the unit price of each item.

[[[
```php
<?php
  # Create a preference object
  $preference = new MercadoPago\Preference();
  # Create items in the preference
  $item1 = new MercadoPago\Item
  $item1->title = "Item de Prueba 1";
  $item1->quantity = 2;
  $item1->unit_price = 11.96;

  $item2= new MercadoPago\Item
  $item2->title = "Item de Prueba 2";
  $item2->quantity = 1;
  $item2->unit_price = 11.96;

  $preference->items = array($item1,$item2);
  # Save and post the preference
  $preference->save();
?>
```
```node
// Set your preference
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
// Create the preference
mercadopago.preferences.create(preference)
.then(function(preference){
  // This value replaces "$$init_point$$" string in your HTML
  global.init_point = preference.body.init_point;
}).catch(function(error){
  console.log(error);
});
```
```java
// Create a preference object
Preference preference = new Preference();
// Create items in the preference
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
// Save and post the preference
preference.save();
```
```ruby
// Create items in the preference
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
// Create a preference object
preference = MercadoPago::Preference.new({
  items: [item, item2]
})
preference.save()
```
```csharp
// Create a preference object
Preference preference = new Preference();

// Create items in the preference
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

----[mla, mlb]----

## Payments with Two Credit Cards

![Pago 2 tarjetas](/images/web-payment-checkout/pay_2_tarjetas.png)

You can enable the option to offer to pay with two credit cards from the Mercado Pago account.
To activate the payment option, go to your <a href="https://www.mercadopago.com.ar/settings/my-business" target="_blank">business options</a> and choose the option _Receive payments with 2 credit cards_.

![Config pago 2 tarjetas](/images/web-payment-checkout/config_pago_dos_tarjetas.gif)

------------

## Optimiza la conversión de tus anuncios

Sabemos que es importante maximizar la efectividad de tus anuncios. Por esto, te damos la posibilidad de integrar el Checkout de Mercado Pago con las plataformas de Facebook Ads y Google Ads para asociar pagos a tus campañas. 

> NOTE
>
> Nota
>
> Solo se verán asociados los pagos aprobados al instante con tarjetas, dinero en cuenta de Mercado Pago o Mercado Créditos. 

### Asocia un píxel de Facebook

Al momento de crear una preferencia, asocia el identificador correspondiente a tu píxel de Facebook de la siguiente manera:

[[[
```php
===
Agrega este código al crear la preferencia y reemplaza el valor ‘PIXEL_ID’ por tu identificador.
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
Agrega este código al crear la preferencia y reemplaza el valor ‘PIXEL_ID’ por tu identificador.
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
Agrega este código al crear la preferencia y reemplaza el valor ‘PIXEL_ID’ por tu identificador.
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
Agrega este código al crear la preferencia y reemplaza el valor ‘PIXEL_ID’ por tu identificador.
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
Agrega este código al crear la preferencia y reemplaza el valor ‘PIXEL_ID’ por tu identificador.
===

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

Al configurarlo, cuando se apruebe un pago a través de tu Checkout de Mercado Pago, verás un evento `Purchase` asociado al píxel especificado.

> NOTE
>
> Nota
>
> Por el momento, sólo se puede configurar un píxel. Prueba el funcionamiento de tu integración utilizando la extensión de Chrome Facebook Pixel Helper. Para más información, visita el [sitio oficial de Facebook](https://www.facebook.com/business/help/742478679120153?id=1205376682832142).


### Asocia una etiqueta de Google Ads

Al crear una preferencia, puedes asociarle una etiqueta para seguimiento de conversiones de Google Ads de la siguiente manera:


[[[
```php
===
Agrega este código al crear la preferencia y reemplaza los valores 'CONVERSION_ID' y 'CONVERSION_LABEL' por los datos de tu etiqueta.
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
Agrega este código al crear la preferencia y reemplaza los valores 'CONVERSION_ID' y 'CONVERSION_LABEL' por los datos de tu etiqueta.
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
Agrega este código al crear la preferencia y reemplaza los valores 'CONVERSION_ID' y 'CONVERSION_LABEL' por los datos de tu etiqueta.
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
Agrega este código al crear la preferencia y reemplaza los valores 'CONVERSION_ID' y 'CONVERSION_LABEL' por los datos de tu etiqueta.
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
Agrega este código al crear la preferencia y reemplaza los valores 'CONVERSION_ID' y 'CONVERSION_LABEL' por los datos de tu etiqueta.
===
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

De este modo, cuando se apruebe un pagos a través de tu Checkout de Mercado Pago, se asociará una conversión a la etiqueta configurada.

> NOTE
>
> Nota
>
> Por el momento, solo se puede configurar una etiqueta. Para más información sobre las etiquetas para seguimiento de conversiones de Google Ads, visita el [sitio oficial de Google](https://support.google.com/google-ads?hl=es-419#topic=7456157).

---

### Next steps

> LEFT_BUTTON_REQUIRED_EN
>
> Advanced Integration
>
> Optimize your integration and improve the management of your sales.
>
> [Advanced Integration](http://www.mercadopago.com.ar/developers/en/guides/payments/web-payment-checkout/advanced-integration/)

> RIGHT_BUTTON_RECOMMENDED_EN
>
> Customization
>
> Adapt the style of your brand in the buying experience.
>
> [Customization](http://www.mercadopago.com.ar/developers/en/guides/payments/web-payment-checkout/customizations/)
