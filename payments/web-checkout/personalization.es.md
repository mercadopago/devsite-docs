# Personalización

Desde la preferencia de pagos no sólo puedes enviar información del item a pagar y del comprador, si no también puedes definir medios de pago que no deseas aceptar, URL de retorno a tu sitio después del pago, métodos de envío y demas.   


### Define tipos y métodos de pago

Por defecto ofrecemos todos los medios de pago disponibles para el país en el estás que realizando la integración. Si tu modelo de negocio no soporta alguno de éstos [tipos de pago](#localización), o bien no deseas aceptar algún [método en particular](https://api.mercadopago.com/v1/payment_methods/search?site_id=MLA&marketplace=NONE), puedes excluirlo cuando generas la preferencia de pagos. 

Además puedes definir qué medio de pago o qué cantidad de cuotas deseas que se muestren por defecto, así como también la cantidad de cuotas máximas a ofrecer.


[[[
```php

<?php

$preference = new MercadoPago\Preference();

// ...

$preference->payment_methods = array(
  "excluded_payment_methods" => array(
    "id" => "master"
  ),
  "excluded_payment_types" => array(
    "id" => "ticket"
  ),
  "installments" => "12"
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
]]]

### Indica URLs de Retorno

Al finalizar el proceso de pago, es muy importante que comuniques a tu comprador cuáles son los siguientes pasos y de ésta manera darle confianza respecto del resultado de la operación. Para ello, utilizamos las `back_urls`. El atributo `auto_return` en `approved` redireccionará en forma automática al comprador a la success url cuando el resultado del pago sea aprobado. 

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
]]]

### Sincroniza con tu sistema

Para poder sincronizar con tus sistemas de backend, desde la preferencia podes enviarnos el campo `external_reference`, el cuál vas a poder consultar cuando se cree el pago. 

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
]]]



### Expira links de preferencia

Si no quieres permitir que se ingrese a la preferencia de pago para efectuar el pago, posterior a una fecha determinada, puedes utilizar los siguientes atributos:


```json
	"expires": true,
	"expiration_date_from": "2017-02-01T12:00:00.000-04:00",
	"expiration_date_to": "2017-02-28T12:00:00.000-04:00"
```


Para conocer más sobre los atributos de la preferencia, [consultá la documentación de la API](https://www.mercadopago.com.co/developers/es/api-docs/basic-checkout/checkout-preferences/)
