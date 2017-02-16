# Recibiendo un pago

Recibe pagos en cuestión de segundos de manera simple y segura utilizando el Checkout de Mercado Pago.


## Crea una preferencia de pago

Una preferencia de pago contiene toda el detalle de información del producto o servicio que se va a pagar. Por ejempo: 

1. Datos y monto de lo que se va a pagar.
2. Datos de tu comprador.
3. Medios de pago que aceptas.
4. ID de referencia de tu sistema.

Para crear una preferencia de pago debes [instalar el SDK de Mercado Pago](https://github.com/mercadopago) y configurar el objeto **MP** con tus [credenciales](https://www.mercadopago.com/mla/account/credentials?type=basic).

```php
<?php
require_once ('mercadopago.php');
$mp = new MP ("CLIENT_ID", "CLIENT_SECRET");
```

Luego, deberás agregar los atributos de tu preferencia de pago:

```php
$preference_data = array(
	"items" => array(
		array(
			"title" => "Multicolor kite",
			"quantity" => 1,
			"currency_id" => "ARS",
			"unit_price" => 10.00
		)
	),
	"payer" => array(
		"email" => "usuario@mail.com"
	)
);

$preference = $mp->create_preference($preference_data);
?>
```

Por último, debes agregar un botón para abrir el Checkout. Utiliza la URL que encontrarás en el atributo `init_point` en la respuesta de la creación de tu preferencia.

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Pagar</title>
	</head>
	<body>
		<a href="<?php echo $preference['response']['init_point']; ?>">Pay</a>
	</body>
</html>
```

## Mejora la experiencia de compra

### Completa la preferencia

Mientras más información nos envíes, mejor será la aprobación de pagos y la experiencia de tus usuarios. Envíanos los datos de tu comprador, completa los datos del ítem, y las páginas de retorno a tu plataforma.

Aquí tienes un ejemplo de una preferencia completa:


```curl
{
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
			"type": "DNI", // Available ID types at https://api.mercadopago.com/v1/identification_types
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

### Recibe pagos con 2 tarjetas de crédito

Tus clientes pueden dividir el pago entre 2 tarjetas de crédito. Esto te permitirá mejorar la conversión ante montos de venta altos. Activalo ingresando a la [configuración de tu cuenta](https://www.mercadopago.com.ar/settings/my-business).


## Próximos pasos

### Activa notificaciones de pagos

Puedes recibir notificaciones cada vez que se cree un nuevo pago o se modifique uno ya existente. Esto te permitirá conocer el estado del pago, administrar tu stock y mantener tu sistema sincronizado. Visita la sección [Notificaciones](#) para  hacerlo.


### Prueba tu integración

Puedes probar tu integración antes de salir a producción, a fin de realizar los ajustes que necesites. Para ello te ofrecemos usuario y tarjetas de prueba. Visita la sección [Probando](#) para  hacerlo.
