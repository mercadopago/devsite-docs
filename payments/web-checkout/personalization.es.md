# Personalización


Desde la preferencia de pagos no sólo puedes enviar información del item a pagar y del comprador, si no también puedes definir medios de pago que no deseas aceptar, URL de retorno a tu sitio después del pago, métodos de envío y demas.   


### Define tipos y métodos de pago

Por defecto ofrecemos todos los medios de pago disponibles para el país en el estás que realizando la integración. Si tu modelo de negocio no soporta alguno de éstos [tipos de pago](#localización), o bien no deseas aceptar algún [método en particular](https://api.mercadopago.com/v1/payment_methods/search?site_id=MLA&marketplace=NONE), puedes excluirlo cuando generas la preferencia de pagos. 

Además puedes definir qué medio de pago o qué cantidad de cuotas deseas que se muestren por defecto, así como también la cantidad de cuotas máximas a ofrecer.



```json

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
		
		"default_payment_method_id": null,
		"default_installments": null,
		"installments": 12
	},
```




### Indica URLs de Retorno

Al finalizar el proceso de pago, es muy importante que comuniques a tu comprador cuáles son los siguientes pasos y de ésta manera darle confianza respecto del resultado de la operación. Para ello, utilizamos las `back_urls`. El atributo `auto_return` en `approved` redireccionará en forma automática al comprador a la success url cuando el resultado del pago sea aprobado. 

```json

"back_urls": {
		"success": "https://www.tu-sitio/success",
		"failure": "http://www.tu-sitio/failure",
		"pending": "http://www.tu-sitio/pending"
	},
	"auto_return": "approved",

```


### Sincroniza con tu sistema

Para poder sincronizar con tus sistemas de backend, desde la preferencia podes enviarnos el campo `external_reference`, el cuál vas a poder consultar cuando se cree el pago. 

```json
"external_reference": "Order_1234",
```

Para conocer el estado tus pagos, puedes hacer una búsqueda utilizando dicha referencia:

```php
<?php

require_once ('mercadopago.php'); 
$mp = new MP ("CLIENT_ID", "CLIENT_SECRET");

$mp->get('/v1/payments/search?external_reference=EXTERNAL');

>
```


### Expira links de preferencia

Si no quieres permitir que se ingrese a la preferencia de pago para efectuar el pago, posterior a una fecha determinada, puedes utilizar los siguientes atributos:


```json
	"expires": true,
	"expiration_date_from": "2017-02-01T12:00:00.000-04:00",
	"expiration_date_to": "2017-02-28T12:00:00.000-04:00"
```


Para conocer más sobre los atributos de la preferencia, [consultá la documentación de la API](https://www.mercadopago.com.co/developers/es/api-docs/basic-checkout/checkout-preferences/)
