# Gestionando una subscripción

Índice de contenido:

1. [Actualizar el monto de un plan](#actualizar-el-monto-de-un-plan)
2. [Pausar y reactivar una subscripción](#pausar-y-reactivar-una-subscripcion)
3. [Cancelar un plan o una subscripción](#cancelar-un-plan-o-una-subscripcion)


## Actualizar el monto de un plan

Puedes cambiar el monto de los planes en cualquier momento. A partir del momento en que realices la actualización, se cobrará el nuevo monto a los próximos débitos de tus `customers`.

Para cambiar el monto de un plan debes hacerlo de la siguiente manera:

```php

<?php
require_once ('mercadopago.php');

$mp = new MP('SECRET_ACCESS_TOKEN');
$NEW_AMOUNT = 500;

$plan_data = array(
    "auto_recurring" => array(
    	"transaction_amount" => $NEW_AMOUNT
    )
);
```

**Respuesta:**

HTTP status code: 200 OK

```json
{
  "id": "PLAN_ID",
  ...
  "auto_recurring": {
      ...
      "transaction_amount": NEW_AMOUNT,
      ...
  }
  ...
}
```


## Pausar y reactivar una subscripción

Puedes pausar las subscripciones en cualquier momento. De este modo, no se les cobrará a tus usuarios hasta que las reactives.

Para pausar una subscripción debes hacerlo de la siguiente manera:

```php
<?php
require_once ('mercadopago.php');

$mp = new MP('SECRET_ACCESS_TOKEN');

$subscription_data = array(
    "status" => "paused"
);

$subscription = $mp->put("/v1/subscriptions/". $SUBSCRIPTION_ID, $subscription_data);
```

**Respuesta:**

HTTP status code: 200 OK

```json
{
  "id": "SUBSCRIPTION_ID",
  ...
  "status": "paused",
  ...
}
```

Para reactivar una subscripción debes hacerlo de la siguiente manera:

```php
<?php
require_once ('mercadopago.php');

$mp = new MP('SECRET_ACCESS_TOKEN');

$subscription_data = array(
    "status" => "authorized"
);

$subscription = $mp->put("/v1/subscriptions/". $SUBSCRIPTION_ID, $subscription_data);
```

**Respuesta:**

HTTP status code: 200 OK

```json
{
  "id": "SUBSCRIPTION_ID",
  ...
  "status": "authorized",
  ...
}
```

**Importante:** los períodos que transcurran durante la pausa de la subscripción no serán cobrados, aunque la subscripción seguirá ejecutando su agenda. Esto significa que los `invoices` generados quedarán con un `status` en `unpaid` durante el tiempo de pausa, y no se cobrarán cuando se reactive la subscripción.

## Cancelar un plan o una subscripción

Puedes cancelar los planes y subscripciones en cualquier momento. De este modo, se dejará de cobrar a tus customers.

Para cancelar un plan debes hacerlo de la siguiente manera:

```php
<?php
require_once ('mercadopago.php');

$mp = new MP('SECRET_ACCESS_TOKEN');

$plan_data = array(
    "status" => "cancelled"
);

$plan = $mp->put("/v1/plans/". $PLAN_ID, $plan_data);
```

> _**Nota**_: Cuando ejecutes esta acción, todas las subscripciones serán marcadas con un status `cancelled`

**Respuesta:** 

HTTP status code: 200 OK

```json
{
  "id": "PLAN_ID",
  ...
  "status": "cancelled",
  ...
}
```

Para cancelar una subscripción debes hacerlo de la siguiente manera:

```php
<?php
require_once ('mercadopago.php');

$mp = new MP('SECRET_ACCESS_TOKEN');

$subscription_data = array(
    "status" => "cancelled"
);

$subscription = $mp->put("/v1/subscriptions/". $SUBSCRIPTION_ID, $subscription_data);
```

**Respuesta:**

HTTP status code: 200 OK

```json
{
  "id": "SUBSCRIPTION_ID",
  ...
  "status": "cancelled",
  ...
}
```
