---
sites_supported:
  - mla
  - mlb
---

# Personalización

> WARNING
>
>Nota
>
> Esta documentación es sobre la versión antigua de Checkout.
>
> Ten en cuenta que solo hay soporte activo y nuevas funcionalidades en la [nueva versión del Smart Checkout](https://www.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/introduction/).

Desde la preferencia de pagos no sólo puedes enviar información del item a pagar y del comprador, si no también puedes definir medios de pago que no deseas aceptar, URL de retorno a tu sitio después del pago, métodos de envío y demas.   


### Define tipos y métodos de pago

Por defecto ofrecemos todos los medios de pago disponibles para el país en el estás que realizando la integración. Si tu modelo de negocio no soporta alguno de éstos [tipos de pago](https://www.mercadopago.com.ar/developers/es/guides/localization/payment-methods), o bien no deseas aceptar algún [método en particular](https://api.mercadopago.com/v1/payment_methods/search?site_id=MLA&marketplace=NONE), puedes excluirlo cuando generas la preferencia de pagos.

Además puedes definir qué medio de pago o qué cantidad de cuotas deseas que se muestren por defecto, así como también la cantidad de cuotas máximas a ofrecer.


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
```java
  Preference preference = new Preference();
  // ...
  PaymentMethods paymentMethods = new PaymentMethods();
  paymentMethods.setExcludedPaymentMethods("master", "amex");
  paymentMethods.setExcludedPaymentTypes("ticket");
  paymentMethods.setInstallments(12);

  preference.setPaymentMethods(paymentMethods);
  // ...
```
```node
  var preference = {}
  preference = {
    // ...
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
    // ...
  }
```
```ruby
preference = MercadoPago::Preference.new
# ...
preference.payment_methods = {
  excluded_payment_methods: [id: "master"],
  excluded_payment_types: [id: "ticket"],
  installments: 12
}
# ...
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

### Indica URLs de Retorno

Al finalizar el proceso de pago, es muy importante que comuniques a tu comprador cuáles son los siguientes pasos y de ésta manera darle confianza respecto del resultado de la operación. Para ello, utilizamos las `back_urls`. El atributo `auto_return` en `approved` redireccionará en forma automática al comprador a la _success url_ cuando el resultado del pago sea aprobado.

[[[
```php

<?php

$preference = new MercadoPago\Preference();
//...
$preference->back_urls = array(
	"success" => "https://www.tu-sitio/success",
	"failure" => "http://www.tu-sitio/failure",
	"pending" => "http://www.tu-sitio/pending"
);
$preference->auto_return = "approved";
// ...

?>
```
```java
Preference preference = new Preference();
// ...
BackUrls backUrls = new BackUrls(
                    "https://www.tu-sitio/success",
                    "http://www.tu-sitio/pending",
                    "http://www.tu-sitio/failure");

preference.setBackUrls(backUrls);
// ...
```
```node
var preference = {}

preference = {
  // ...
  "back_urls": {
		"success": "https://www.tu-sitio/success",
		"failure": "http://www.tu-sitio/failure",
		"pending": "http://www.tu-sitio/pending"
	},
	"auto_return": "approved",
  // ...
}
```
```ruby
preference = MercadoPago::Preference.new
# ...
preference.back_urls = {
  success: "https://www.tu-sitio/success",
  failure: "http://www.tu-sitio/failure",
  pending: "http://www.tu-sitio/pendings"
}
preference.auto_return = "approved"
# ...
```
```csharp
 Preference preference = new Preference();

 preference.BackUrls = new BackUrls()
  {
    Success = "https://www.tu-sitio/success",
    Failure = "http://www.tu-sitio/failure",
    Pending = "http://www.tu-sitio/pendings"
  };

  preference.AutoReturn = AutoReturnType.approved;
```
]]]

### Sincroniza con tu sistema

Para poder sincronizar con tus sistemas de backend, desde la preferencia puedes enviarnos el campo `external_reference`, el cual vas a poder consultar cuando se cree el pago.

```json
"external_reference": "Order_1234",
```

Para conocer el estado tus pagos, puedes hacer una búsqueda utilizando dicha referencia:

[[[
```php
<?php

  $filters = array(
    "external_reference" => "EXTERNAL"
  );

  $payment = MercadoPago\Payment::search($filters);

?>
```
```java

  Map<String, String> filters = new HashMap<>();
  filters.put("external_reference", "EXTERNAL");

  Payment payment = Payment.search(filters);

```
```node
var mercadopago = require('mercadopago');

var filters = {
  external_reference: "EXTERNAL"
};

mercadopago.searchPayment({
  qs: filters
}).then(function (data) {
  // Do Stuff...
}).catch(function (error) {
  // Do Stuff...
});

```
```ruby
filters = {
  external_reference: "EXTERNAL"
}

payment = MercadoPago::Payment.search(filters)
```
```csharp
Dictionary<string, string> filters = new Dictionary<string, string>;
filters.Add("external_references", "EXTERNAL");

List<Payment> payments = Payment.Search(filters);
```
]]]

### Modo binario

Si la lógica de negocio de tu comercio requiere que la decisión sobre la aprobación del pago sea instantánea puedes activar el modo binario. De esta forma el pago solo puede resultar en los estados `approved` o `rejected`.

En el caso de no estar activado el pago puede resultar en el estado `in_process`.

Para más información revisa los posibles estados de un pago:

![payment-diagram](/images/payments-status-transitions-diagram.png)

Para activarlo, basta configurar como _true_ el campo `binary_mode`:

```json
	"binary_mode": true
```

### Expira links de preferencia

Si no quieres permitir que se ingrese a la preferencia de pago para efectuar el pago posterior a una determinada fecha puedes utilizar los siguientes atributos:


```json
	"expires": true,
	"expiration_date_from": "2017-02-01T12:00:00.000-04:00",
	"expiration_date_to": "2017-02-28T12:00:00.000-04:00"
```


Para conocer más sobre los atributos de la preferencia, [consultá la documentación de la API](https://www.mercadopago.com.ar/developers/es/reference/preferences/resource/)



### Aquí tienes una preferencia completa
Para resumir todo lo anterior, a continuación se muestran todos los datos que se pueden configurar en una preferencia:

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
	"expiration_date_to": "2016-02-28T12:00:00.000-04:00"
}

```

### Próximos pasos

* [Campañas de descuento](https://www.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/v1/discount-campaigns/)
* [Probando la Integración](https://www.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/v1/testing/)
