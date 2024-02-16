# Gestión de pagos recibidos

Puedes encontrar toda la información de los pagos generados utilizando nuestras APIs.

## Obtener pagos creados a partir de su ID

Para obtener la información de un pago a partir de su _ID_ debes hacer el siguiente _request_:
```curl
curl -G -X GET \
-H "accept: application/json" \
-H 'Authorization: Bearer ACCESS_TOKEN' \
"https://api.mercadopago.com/v1/payments/<payment_id>" \
-d "status=approved" \
-d "offset=0" \
-d "limit=10"`
```
```php
<?php
	require ('mercadopago.php');

	$mp = new MP ("ENV_ACCESS_TOKEN");

	$payment = $mp->get(
		"/v1/payments/". $paymentId
	);
?>
```

Respuesta esperada:

```json
{
  "id": 2798247250,
  "date_created": "2017-06-16T21:10:06.000-04:00",
  "date_approved": "2017-06-16T21:10:06.000-04:00",
  "date_last_updated": "2017-06-28T19:39:41.000-04:00",
  "date_of_expiration": null,
  "money_release_date": "2017-06-21T21:10:06.000-04:00",
  "operation_type": "regular_payment",
  "payment_method_id": "visa",
  "payment_type_id": "credit_card",
  "status": "approved",
  "status_detail": "accredited",
  "currency_id": "[FAKER][CURRENCY][ACRONYM]",
  "description": "Telefono Celular iPhone 7",
  ...,
}
```

Puedes obtener información sobre todos las variables devueltas en la [referencia de la API del recurso Payments](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/payments/_payments_id/get).

## Buscar pagos

Si quieres buscar pagos puedes utilizar la API de `Payment Search`:
```curl
curl -G -X GET \
-H "accept: application/json" \
"https://api.mercadopago.com/v1/payments/search" \
-d "access_token=ACCESS_TOKEN" \
-d "status=approved" \
-d "offset=0" \
-d "limit=10"
```
```php
<?php
	require ('mercadopago.php');

	$mp = new MP ("ENV_ACCESS_TOKEN");

	$payment = $mp->get(
		"/v1/payments/search",
		array(
			"external_reference" => "123456789"
		)
	);
?>
```

En este ejemplo se realiza una búsqueda por el campo `external_reference`, pero es posible utilizar muchos otros filtros.

### Filtros de búsqueda

Cuando hagas una búsqueda para pagos puedes utilizar las siguientes variables:

* `payer.id`: _ID_ de tu pagador
* `installments`: Cantidad de cuotas en los pagos (ejemplo: `12`).
* `payment_method_id`: Por medio de pago (ejemplo: `visa`).
* `payment_type_id`: Por tipo de medio de pago (ejemplo: `credit_card`).
* `operation_type`: El tipo de operación, puede ser `regular_payment`, `pos_payment`, `recurring_payment`, etc.
* `processing_mode`: Si es un pago de tipo Gateway o Agregador (ejemplo: `gateway`).
* `status`: El estado del pago.
* `status_detail`: El detalle del estado del pago.

Se devolverá la cantidad total de resultados encontrados, que luego podrá ser utilizada para paginarlos:

```json
{
  "paging": {
    "total": 1234,
    "limit": 30,
    "offset": 0
  },
  "results": [
    {}
  ]
}
```

### Filtros de búsquedas por fechas

También es posible realizar búsquedas por fechas especificas:

* `begin_date`: Fecha de inicio de búsqueda (ISO 8601), ej. `2017-05-06T15:07:20.000-04:00`.
* `end_date`: Fecha de fin de búsqueda (ISO 8601), ej. `2017-05-06T15:07:20.000-04:00`.

Los campos de fechas también soporta la variable `NOW` (fecha actual) combinada con las siguientes:

* `MINUTES`: Minutos (1 a 60).
* `HOURS`: Horas (1 a 24).
* `WEEKS`: Semanas (1 a 8).
* `DAYS`: Días (1 a 365).

Un ejemplo de esto sería `NOW-5MINUTES`:

```php
<?php
	require ('mercadopago.php');

	$mp = new MP ("ENV_ACCESS_TOKEN");

	$payment = $mp->get(
		"/v1/payments/search",
		array(
			"begin_date" => "NOW-2HOURS",
			"end_date" => "NOW",
			"range" => "date_last_updated",
			"sort" => "date_last_updated",
			"criteria" => "desc"
		)
	);
?>
```

Con este ejemplo traes los **pagos actualizados** en las últimas 2 horas hasta la fecha actual de forma descendente.

Puedes utilizar el campo `range` para buscar sobre un campo de fecha específico, por ej. `date_created` o `date_last_updated`.

### Paginar pagos

En el caso en que tengas muchos resultados deberás paginar los pagos utilizando los siguientes atributos:

| Atributo | Descripción | Ejemplo |
| :--- | :--- | :--- |
| `limit` | Cantidad de registros devueltos (valor máximo = 50). Si no se define, devuelve hasta 30 registros encontrados. | `limit=50` |
| `offset` | Posición a partir de la cual se desea que devuelvan los registros. Por defecto el valor es 0 (máximo permitido: 10000). | `offset=100` |
| `sort` | Establece un criterio a partir del cual se ordenan los resultados. | `sort=external_reference` |
| `criteria` | Orden de los datos. Puede ser asc (ascendente) o desc (descendente). | `criteria=asc` |

Ejemplo de paginación:

```php
<?php
	require ('mercadopago.php');

	$mp = new MP ("ENV_ACCESS_TOKEN");

	$payment = $mp->get(
		"/v1/payments/search",
		array(
			"external_reference" => "123456789",
			"limit" => 50,
			"offset" => 200,
			"sort" => "id",
			"criteria" => "desc"
		)
	);
?>
```

Esto traería 50 resultados, filtrando los primeros 200, y los ordenaría por `id` de forma descendente.