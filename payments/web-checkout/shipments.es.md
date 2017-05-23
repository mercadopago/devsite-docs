# Mercado Envíos

Implementa la logística de tu negocio con Mercado Envíos.

Te damos todo resuelto: Recibe el pago del producto y del envío en la misma operación. Sólo tienes que imprimir la etiqueta de Mercado Envíos y despachar el paquete en el correo.

## Índice de contenidos
1. [Beneficios](#Beneficios)
2. [Pre requisitos](#pre-requisitos)
3. [Cómo funciona](#cómo-funciona)
4. [Cómo implementarlo](#cómo-implementarlo)

## Beneficios
#### Mejores costos


#### Compra protegida
Te protegemos frente a chargebacks o pérdidas en el correo, sin necesidad de que tengas que presentar documentación.


## Pre-requisitos
?


## Cómo funciona

La siguiente documentación te permitirá ofrecer en el checkout de Mercado Pago una opción de envío y que el cliente pague el costo del envío junto con 

CARRIERS


Te recomendamos integrar la calculadora de costos de envíos en tu checkout.


## Cómo implementarlo


### Paso 1: Activa tu cuenta para utilizar Mercado Envíos
Activa tu cuenta cargando tu dirección. La misma debe ser la dirección de despacho y será utilizada para calcular el costo del envío.

http://shipping.mercadopago.com.ar/optin/doOptin?execution=e1s1&goUrl=&buttonText=

### Paso 2: Agrega Mercado Envíos a tu checkout
Agrega las dimensiones y peso de tus productos en la preferencia de pago.

```
{
    ...
    "shipments": {
        "mode": "me2",
        "dimensions": "30x30x30,500"
    }
    ...
}
```

> El formato de las dimensiones
```alto x ancho x largo (centímetros), peso (gramos)```

> Si indicas mal las dimensiones y no coinciden con el paquete físico, OCA podría no admitir el envío. En caso de que te admitan el paquete, te descontaremos de tu cuenta la diferencia automáticamente.

#### Retiro por sucursal
Puedes ofrecer la posibilidad de retirar el producto por tu local, en este caso es tu responsabilidad la de comunicarle al comprador dónde y cuándo debe retirar el producto. Para esto, debes incluir:

```
{
    ...
    "shipments": {
        "mode": "me2",
        "dimensions": "30x30x30,500",
        "local_pickup": true
    }
    ...
}
```

#### Ofrece envíos gratis
 También puedes ofrecer envío gratis, esto te permite generar más ventas. Sólo debes indicar el medio de envío que vas a ofrecer de manera gratuita. El monto del mismo te será debitado de tu cuenta al momento de recibir un pago.

```
{
    ...
    "shipments": {
        "mode": "me2",
        "dimensions": "30x30x30,500",
        "free_methods": [
            {
                "id": 73328
            }
        ]
    }
    ...
}
```

Consultar los valores disponibles en: XXXX (API ML)


#### Combinando todo lo anterior

Un ejemplo de Checkout básico con MercadoEnvíos, aplicando todo lo anterior, quedaría de la siguiente manera:

```
<?php
require_once ('mercadopago.php');

$mp = new MP('7050452359528728', '2HTipLZ0NjWggrS13Sb9GbefkP67QEIa');

$preference_data = array(
	"items" => array(
		array(
			"title" => "Multicolor kite",
			"quantity" => 1,
			"currency_id" => "ARS", // Available currencies at: https://api.mercadopago.com/currencies
			"unit_price" => 10.00
		)
	),
	"shipments" => array(
		"mode" => "me2",
		"dimensions" => "30x30x30,500",
		"local_pickup" => true,
		"free_methods" => array(
			array(
				"id" => 73328
			)
		),
		"default_shipping_method" => 73328,
		"zip_code" => "5700"
	)
);

$preference = $mp->create_preference($preference_data);
?>

<!DOCTYPE html>
<html>
	<head>
		<title>Pay</title>
	</head>
	<body>
		<a href="<?php echo $preference['response']['init_point']; ?>">Pay</a>
	</body>
</html>
```



### Paso 3: Mejora la experiencia con la calculadora de cuotas

Si bien no es necesario que integres la calculadora de cuotas, esto puede mejorar mucho la experiencia.

Te damos la posibilidad de pre-calcular el costo y los tiempos de envío con MercadoEnvíos para que tus compradores puedan verlo desde tu integración.

Para poder realizar el cálculo, necesitamos que nos envíes cierta información, en particular:

* dimensions: Es el tamaño del producto que quieres enviar, el formato es: alto x ancho x largo (centímetros), peso (gramos). Consulta los valores admitidos por OCA.

* zip_code: Es el código postal de tu comprador.

* item_price: Es el precio del producto que vas a enviar. Si son múltiples productos, indicá el precio total.

* free_method (opcional): Puedes ofrecer envío gratis, esto te permite generar más ventas. Sólo debes indicarnos el medio de envío que vas a ofrecer como gratis. Luego, el monto del mismo te será debitado de tu cuenta al momento de recibir un pago. 

Nombre	ID
OCA Estándar	73328
OCA Prioritario	73330




### Paso 4: Imprimí la etiqueta

Cada vez que recibas un pago, te llegará un e-mail con un botón para imprimir la etiqueta. 
También puedes ver los pagos pendientes de impresión desde el sitio de Mercado Pago: 
https://www.mercadopago.com.ar/activities?type=collection&status=approved&shipping_or_archived=with_ME&tagME=ready_to_print

En una caja incluye todo lo que vendiste (productos y accesorios). Pega la etiqueta en el paquete y despáchalo. No tendrás que pagar nada en OCA porque las etiquetas de MercadoEnvíos siempre estarán pagas con el dinero que pagó tu comprador para el envío.

### Paso 5: Seguimiento
Utiliza nuestras herramientas para hacer el seguimiento.
Tanto en el listado de cobros, como a través de nuestras APIs vas a poder realizar el seguimiento de tus envíos.

Adicionalmente te podemos avisar cuando un envío esté listo para despachar mediante notificaciones que se envían desde los servidores de MercadoPago a los tuyos. Esto te permitirá administrar tu stock y conocer el estado de los pagos y envíos.

> ver si hay ejemplo
