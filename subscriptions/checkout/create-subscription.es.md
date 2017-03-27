# Creando una suscripción

Suscribe usuarios en cuestión de segundos de manera simple y segura utilizando el Checkout de Mercado Pago.


## Crea una preferencia de suscripción

Una preferencia de suscripción contiene todo el detalle de información del producto o servicio que se va a pagar de forma recurrente. Por ejempo: 

1. Datos y monto de lo que se va a pagar.
2. Frecuencia de la suscripción.
3. ID de referencia de tu sistema.

Para crear una preferencia de suscripción debes [instalar el SDK de Mercado Pago](https://github.com/mercadopago) y configurar el objeto **MP** con tus [credenciales](https://www.mercadopago.com/mla/account/credentials?type=basic).

```php
<?php
require_once ('mercadopago.php');
$mp = new MP ("CLIENT_ID", "CLIENT_SECRET");
```

Luego, deberás agregar los atributos de tu preferencia:

```php
$preapproval_data = array(
	"payer_email" => "my_customer@my-site.com",
	"back_url" => "http://www.my-site.com",
	"reason" => "Monthly subscription to premium package",
	"external_reference" => "OP-1234",
	"auto_recurring" => array(
		"frequency" => 1,
		"frequency_type" => "months",
		"transaction_amount" => 60,
		"currency_id" => "ARS"
	)
);

$preapproval = $mp->create_preapproval_payment($preapproval_data);
?>
```
> Estos son los datos mínimos e indispensables para crear una preferencia, pero tienes más opciones que puedes encontrar en [Añade características especiales a tu suscripción](#añade-características-especiales-a-tu-suscripción).

Por último, debes agregar un botón para abrir el Checkout. Utiliza la URL que encontrarás en el atributo `init_point` en la respuesta de la creación de tu preferencia.

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Pagar</title>
	</head>
	<body>
		<a href="<?php echo $preapproval['response']['init_point']; ?>">Subscribe!</a>
	</body>
</html>
```

## Añade características especiales a tu suscripción

Revisa el [API Doc de Preapproval]() para conocer todas las configuraciones que puedes realizar. Así podrás adecuar el cobro de suscripción a tu modelo de negocio. A continuación te mostramos las características más relevantes que puedes especificar al momento de crear una suscripcin. Ten presente que son combinables entre sí para poder sacar el máximo provecho.

### Ofrece un período gratuito de prueba

¿Quieres ofrecer un mes gratis de tu producto, antes de comenzar a cobrarle a tu usuario? Agrega lo siguiente:

```
{
  ...
  "auto_recurring": {
    ...
    "start_date" => "2016-12-10T14:58:11.778-03:00",
    ...
  },
  ...
}
```

### Limita la cantidad de cuotas de la suscripción

Puedes indicar que las suscripciones sólo durarán un período determinado de tiempo:

```curl
{
  ...
  "auto_recurring": {
    ...
    "end_date" => "2018-12-10T14:58:11.778-03:00",
    ...
  },
  ...
}
```

## Consideraciones y sugerencias

Mercado Pago realizará su mejor esfuerzo posible para lograr que tus suscripciones resulten pagas, sin requerir acción alguna de tu parte. En caso de no conseguir una aprobación de pago para la fecha de cobro estipulada, reintentaremos hasta cuatro veces más durante diez días, antes de que el pago quede marcado como impago y se prosiga a agendar el próximo.

Cada pago rechazado te será notificado mediante [Notificaciones](). Analiza el motivo del rechazo, y comunícate con tu usuario para que, por ejemplo, actualice los datos de su tarjeta de crédito o la cambie por otra, antes de que se realice el próximo reintento de cobro.

## Próximos pasos

### Activa notificaciones de pagos

Puedes recibir notificaciones cada vez que se cree un nuevo pago o se modifique uno ya existente. Esto te permitirá conocer el estado del pago, administrar tu stock y mantener tu sistema sincronizado. Visita la sección [Notificaciones](#).

### Prueba tu integración

Puedes probar tu integración antes de salir a producción, a fin de realizar los ajustes que necesites. Para ello te ofrecemos usuario y tarjetas de prueba. Visita la sección [Probando](#).
