#Personalización

## ¿Qué se puede definir desde la Preferencia?

Desde la preferencia de pagos, no sólo puedes enviar información del item a pagar y del comprador, si no también puedes definir medios de pago que no deseas aceptar, URL de retorno a tu sitio después del pago, métodos de envío y demas.   

### Envía datos del item y del comprador

Estos datos son de gran utilidad para nuestros equipos de fraude que monitorean los pagos, detectando transacciones riesgosas.  

Mientras más detalles envíes del producto o servicio a pagar, mejor será el resultado del análisis, optimizando tasas de aprobación.

```curl

	"items": [
		{
			"id": "item-ID-1234",
			"title": "Title of what you are paying for. It will be displayed in the payment process.",
			"currency_id": "ARS",
			"picture_url": "https://www.mercadopago.com/org-img/MP3/home/logomp3.gif",
			"description": "Item description",
			"category_id": "art", // Available categories at https://api.mercadopago.com/item_categories
			"quantity": 1,
			"unit_price": 100
		}
	],
```

Enviar datos del comprador, además de servir de input para los sistemas de fraude, permite ofrecer una mejor experiencia de compra. Si envías el mail, podremos detectar si ya pagó en tu sitio y ofreceremos la posibilidad de **One Click to Buy**, es decir, recordamos su tarjeta de crédito, permitiendo pagar ingresando sólo los dígitos del CVV.

```curl
	
	"payer": 
		{
		"name": "user-name",
		"surname": "user-surname",
		"email": "user@email.com",
		"date_created": "2015-06-02T12:58:41.425-04:00",
		"phone": {
			"area_code": "11",
			"number": "4444-4444"
		},
		
```

###Indica URLs de Retorno

Al finalizar el proceso de pago, es muy importante que comuniques a tu comprador cuáles son los siguientes pasos y de ésta manera darle confianza respecto del resultado de la operación. Para ello, utilizamos las **back_urls** y el atributo **auto_return** para que se redirecciones en forma automática pasados los 5 segundos.

```curl

"back_urls": {
		"success": "https://www.tu-sitio/success",
		"failure": "http://www.tu-sitio/failure",
		"pending": "http://www.tu-sitio/pending"
	},
	"auto_return": "approved",

```

### Define tipos y métodos de pago

Por defecto, ofrecemos pagar con Tarjeta de Crédito, Débito, transferencia bancaria, tickets off line. Si tu modelo de negocio no soporta alguno de éstos [tipos de pago](https://api.mercadopago.com/payment_types), o bien no deseas aceptar algún [método en particular](https://api.mercadopago.com/v1/payment_methods/search?site_id=MLA&marketplace=NONE), puedes automáticamente excluirlo cuando generas la preferencia de pagos.  

Además puedes definir qué medio de pago deseas que se muestre por defecto o la cantidad de cuotas y también cuántas cuotas máximo deseas aceptar.



```curl

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
```

### Sincroniza con tu sistema

Cuando se procesa un pago, Mercado Pago genera un identificador del mismo que te llegará en la notificación o te servirá para consultar el resultado del mismo. 
Para poder sincronizar con tus propios sistemas de backend, desde la preferencia podes enviarnos el campo **external_reference** y luego consultarlo en el pago. Esto te permitirá actualizar tus ordenes de venta pendientes.

```curl
"external_reference": "Order_1234",
```

### Cierra órdenes pendientes

Para medios de pago offline, es importante que determines hasta cuándo quieres dar la posibilidad de que se efectúe el pago. 
Entonces, es importante que expires la preferencia de pagos cuando supere la fecha máxima de espera que tu negocio permite.

```curl
	"expires": true,
	"expiration_date_from": "2017-02-01T12:00:00.000-04:00",
	"expiration_date_to": "2017-02-28T12:00:00.000-04:00"
```



