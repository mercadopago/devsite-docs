# Recibir un pago

Recibe pagos de manera simple y segura utilizando el Checkout de Mercado Pago.


## 1. Crea una preferencia de pago

Una preferencia de pago contiene toda la información del producto o servicio que se va a pagar. Por ejemplo:

1. Descripción y monto.
2. Información de tu comprador (Email, nombre, dirección, etc).
3. Medios de pago que aceptas.
4. ID de referencia de tu sistema.

Para crear una preferencia de pago debes [instalar el SDK de Mercado Pago](https://github.com/mercadopago) y configurar tus [credenciales](https://www.mercadopago.com/mla/account/credentials?type=basic).

```php
  <?php 
    MercadoPago\SDK::configure(['ACCESS_TOKEN' => 'APP_USR-6295877106812064-042916-5ab7e29152843f61b4c218a551227728__LC_LB__-202809963']);
  ?>
```



Luego, deberás agregar los atributos de tu preferencia de pago:

```php
  <?php
    $preference_data = array(
    	"items" => array(
    		array(
    			"title" => "Multicolor kite",
    			"quantity" => 1,
    			"currency_id" => "ARS",
    			"unit_price" => 10.00,
    			"description" => "",
    			"category_id" => "art" // Available categories at https://api.mercadopago.com/item_categories
    		)
    	),
    	"payer" => array(
    		"email" => "usuario@mail.com"
    	)
    );

    $preference = $mp->create_preference($preference_data);
  ?>
```

### Contenido de la preferencia

Mientras más información nos envíes, mejor será la aprobación de los pagos y la experiencia de tus usuarios.

#### Payer

Es requerido el envío del `email` de tu comprador. Si nos envías datos como tipo y número de identificación, no se le pedirá durante el proceso de pago.

```json
{
   ...,
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
	...
}
```

#### Shipments

```json
{
	...,
	"shipments": {
		"receiver_address": {
			"zip_code": "5700",
			"street_number": 123,
			"street_name": "Street",
			"floor": 4,
			"apartment": "C"
		}
	}
}
```

## 2. Lleva a tu comprador al checkout

Una vez creada la preferencia utiliza la URL que encontrarás en el atributo `init_point` de la respuesta para generar un botón de pago:

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

## 3. Activa las notificaciones de pagos

Las notificaciones son la forma automática de enterarte de tus nuevos pagos y las actualizaciones de sus estados.

Esto te permitirá administrar tu stock y mantener tu sistema sincronizado.

Visita la sección [Notificaciones](#) para conocer más sobre esto.

## 4. Cancelar un pago

Los medios de pago en efectivo deben ser pagados entre los 3 a 5 días dependiendo de cada uno.

El vencimiento de estos **no es automático**, por lo cuál es necesario que ejecutes la [cancelación del pago](../account/refunds-and-cancellations.es.md) luego del vencimiento.


## 5. Prueba tu integración

Puedes probar tu integración antes de salir a producción, a fin de verificar el funcionamiento y realizar los ajustes que necesites.

Para ello debes usar usuario y tarjetas de prueba.

Visita la sección [Probando](./testing.es.md) para más información.

