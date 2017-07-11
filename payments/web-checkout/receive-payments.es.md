# Recibiendo Pagos

Recibe pagos de manera simple y segura utilizando el Checkout de Mercado Pago.


## 1. Crea una preferencia de pago

Una preferencia de pago contiene toda la información del producto o servicio que se va a pagar. Por ejemplo:

- Descripción y monto.
- Información de tu comprador (Email, nombre, dirección, etc).
- Medios de pago que aceptas.
- ID de referencia de tu sistema.

Para crear una preferencia de pago debes [instalar el SDK de Mercado Pago](https://github.com/mercadopago) y configurar tus [credenciales](https://www.mercadopago.com/mla/account/credentials?type=basic).

[[[
```php 
  <?php  
    require_once ('mercadopago.php');

    $mp = new MP('ACCESS_TOKEN');
  ?>
```
```java
import com.mercadopago.MP;
import org.codehaus.jettison.json.JSONObject;

MP mp = new MP ("ACCESS_TOKEN");
```
```csharp
using mercadopago;
using System;xº
using System.Collections;

MP mp = new MP("ACCESS_TOKEN");
```
```javascript
var MP = require ("mercadopago");
var mp = new MP ("ACCESS_TOKEN");
```
```ruby
require 'mercadopago.rb'
$mp = MercadoPago.new('ACCESS_TOKEN')
```
```python
import mercadopago
mp = mercadopago.MP("ACCESS_TOKEN")
```
]]]

Luego, deberás agregar los atributos de tu preferencia de pago:

[[[
```php
$payment_data = array(
	"transaction_amount" => 100,
	"token" => "ff8080814c11e237014c1ff593b57b4d",
	"description" => "Title of what you are paying for",
	"installments" => 1,
	"payment_method_id" => "visa",
	"payer" => array (
		"email" => "test_user_19653727@testuser.com"
	)
);

$payment = $mp->post("/v1/payments", $payment_data);
```
```java
JSONObject payment = mp.post("/v1/payments", "{"+
			"'transaction_amount': 100,"+
			"'token': 'ff8080814c11e237014c1ff593b57b4d',"+
			"'description': 'Title of what you are paying for',"+
			"'installments': 1,"+
			"'payment_method_id': 'visa',"+
			"'payer': {"+
				"'email': 'test_user_19653727@testuser.com'"+
			"}"+
		"}");
```
```csharp
Hashtable payment = mp.post("/v1/payments", "{"+
			"\"transaction_amount\": 100,"+
			"\"token\": \"ff8080814c11e237014c1ff593b57b4d\","+
			"\"description\": \"Title of what you are paying for\","+
			"\"installments\": 1,"+
			"\"payment_method_id\": \"visa\","+
			"\"payer\": {"+
				"\"email\": \"test_user_19653727@testuser.com\""+
			"}"+
		"}");
```
```javascript
var doPayment = mp.post ("/v1/payments",
	{
		"transaction_amount": 100,
		"token": "ff8080814c11e237014c1ff593b57b4d",
		"description": "Title of what you are paying for",
		"installments": 1,
		"payment_method_id": "visa",
		"payer": {
			"email": "test_user_19653727@testuser.com"
		}
	});

doPayment.then (
	function (payment) {
		console.log (payment);
	},
	function (error){
		console.log (error);
	});
```
```ruby
paymentData = Hash[
		"transaction_amount" => 100,
		"token" => "ff8080814c11e237014c1ff593b57b4d",
		"description" => "Title of what you are paying for",
		"installments" => 1,
		"payment_method_id" => "visa",
		"payer" => Hash[
			"email" => "test_user_19653727@testuser.com"
		]
	]

payment = $mp.post("/v1/payments", paymentData);

puts payment

```
```python
payment = mp.post("/v1/payments", {
        "transaction_amount": 100,
        "token": "ff8080814c11e237014c1ff593b57b4d",
        "description": "Title of what you are paying for",
        "installments": 1,
        "payment_method_id": "visa",
        "payer": {
            "email": "test_user_19653727@testuser.com"
        }
    });

print(json.dumps(payment, indent=4))
```
]]]

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

Visita la sección [Notificaciones](../../notifications/ipn.es.md) para conocer más sobre esto.

## 4. Cancelar un pago

Los medios de pago en efectivo deben ser pagados entre los 3 a 5 días dependiendo de cada uno.

El vencimiento de estos **no es automático**, por lo cuál es necesario que ejecutes la [cancelación del pago](../account/refunds-and-cancellations.es.md) luego del vencimiento.


## 5. Prueba tu integración

Puedes probar tu integración antes de salir a producción, a fin de verificar el funcionamiento y realizar los ajustes que necesites.

Para ello debes usar usuarios y tarjetas de prueba.

Visita la sección [Probando](./testing.es.md) para más información.
