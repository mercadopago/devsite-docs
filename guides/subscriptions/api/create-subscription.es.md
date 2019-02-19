---
sites_supported:
    - mla
    - mlb
    - mlm
    - global
---

# Creando una suscripción

Subscribe a tus clientes para recibir pagos de forma periódica y automatizada.

> WARNING
>
> Pre-requisitos
>
> * Tener implementada la [captura de datos de tarjeta](https://www.mercadopago.com.ar/developers/es/guides/payments/receiving-payment-by-card).
> * Almacenar [clientes y tarjetas](https://www.mercadopago.com.ar/developers/es/guides/payments/customers-and-cards).


## 1. Crea un plan de suscripción

El plan contiene la información de periodicidad de cobro y monto a cobrar.

Para crearlo debes realizar un request _POST_:

[[[
```php
<?php
  $plan = new MercadoPago\Plan();
  $plan->description = "Monthly premium package";
  $plan->auto_recurring = array(
    "frequency" => 1,
    "frequency_type" => "months",
    "transaction_amount" => 200
  );
  $plan->save();
?>
```
```java
AutoRecurring autoRecurring = new AutoRecurring();
autoRecurring.setFrequency(1);
autoRecurring.setFrequencyType("Months");
autoRecurring.setTransactionAmount(200);

Plan plan = new Plan();
plan.setDescription("Monthly premium package");
plan.setAutoRecurring(autoRecurring);
plan.save();
```
```node

plan_data = {
      "description": "Monthly premium package",
      "auto_recurring": {
              "frequency": 1,
              "frequency_type": "months",
              "transaction_amount": 200
      }
}

mercadopago.plan.create(plan_data).then(function (data) {
  // Do Stuff...
}).catch(function (error) {
  // Do Stuff...
});
```
```ruby

plan = MercadoPago::Plan.new();
plan.description = "Monthly premium package";
plan.auto_recurring = {
  frequency: 1,
  frequency_type: "months",
  transaction_amount: 200
}
plan.save();

```
```curl
curl -X POST \
        -H 'accept: application/json' \
        -H 'content-type: application/json' \
        'https://api.mercadopago.com/v1/plans?access_token=ACCESS_TOKEN' \
        -d '{
                "description": "Monthly premium package",
                "auto_recurring": {
                        "frequency": 1,
                        "frequency_type": "months",
                        "transaction_amount": 200
                }
        }'
```
]]]



> Estos son los datos mínimos e indispensables para crear un plan, pero tienes más opciones que puedes encontrar en [Añade características especiales a tu plan](https://www.mercadopago.com.ar/developers/es/guides/subscriptions/api/manage-subscription).

**Respuesta:**

HTTP status code: 201 Created

```json
{
  "id": "PLAN_ID",
  ...
  "status": "active",
  "description": "Monthly premium package",
  ...
  "auto_recurring": {
    "frequency": 1,
    "frequency_type": "months",
    "transaction_amount": 200,
    "currency_id": "[FAKER][CURRENCY][ACRONYM]",
    ...
  },
  ...
}
```

## 2. Crea un cliente y adhierele una tarjeta

Para poder crear una suscripción, debes tener un `Customer` con una tarjeta adherida.

Revisa el artículo de [Clientes y Tarjetas](https://www.mercadopago.com.ar/developers/es/guides/payments/api/customers-and-cards) para saber como hacerlo.

Sólo subscribe `customers` con tarjetas verificadas.

Algunas opciones para realizarlo son:

1. [Realizar una autorización](https://www.mercadopago.com.ar/developers/es/guides/payments/api/authorization-and-capture) por un monto bajo a la tarjeta y cancelarla luego, para confirmar que la tarjeta es válida.

2. Utilizar el atributo `setup_fee`, que realizará un cobro extra al intentar subscribir a tu usuario; y sólo si dicho cobro es exitoso, se procede con el alta de la suscripción.


## 3. Subscribe un customer a un plan

Una suscripción es un objeto que relaciona un `Plan` y un `Customer`.

Realiza un _POST_ especificando el identificador del plan y del customer a asociar:

[[[
```php
<?php
  $subscription = new MercadoPago\Subscription();
  $subscription->plan_id = "PLAN_ID";
  $subscription->payer = array(
    "id"=>"CUSTOMER_ID"
  );
  $subscription->save();
?>
```
```java
payer = Payer.load("CUSTOMER_ID");

Subscription subscription = new Subscription();
subscription.setPlanId("PLAN_ID");
subscription.setPayer(payer);

subscription.save();
```
```node
subscription_data = {
    "plan_id": "PLAN_ID",
    "payer": {
            "id": "CUSTOMER_ID"
    }
}

mercadopago.subscription.create(subscription_data).then(function (data)) {
  // Do Stuff...
}).catch(function (error) {
  // Do Stuff...
});
```
```ruby

payer = MercadoPago::Payer.load("CUSTOMER_ID")

subscription = MercadoPago::Subscription.new()
subscription.plan_id = "PLAN_ID"
subscription.payer = payer
subscription.save()

```
```curl
curl -X POST \
        -H 'accept: application/json' \
        -H 'content-type: application/json' \
        'https://api.mercadopago.com/v1/subscriptions?access_token=ACCESS_TOKEN' \
        -d '{
                "plan_id": "PLAN_ID",
                "payer": {
                        "id": "CUSTOMER_ID"
                }
        }'
```
]]]



> NOTE
>
> Nota
>
> El customer debe tener cargada una `default_card` a la cual se le cobrará, apta para pagos de suscripciones.


**Respuesta:**

HTTP status code: 201 Created

```json
{
  "id": "SUBSCRIPTION_ID",
  "plan_id": "PLAN_ID",
  ...
  "status": "authorized",
  "description": "Monthly premium package",
  "payer": {
    "id": "CUSTOMER_ID",
    ...
  },
  "charges_detail": {
    "invoices": [...],
    ...
  },
  ...
}
```

**Importante:** los cobros se realizan por adelantado. En este caso el primer cobro se realizará tan pronto subscribas a un customer, y no a mes vencido.

Llegada la fecha de cobro, se creará un objeto `invoice`, el cual contendra el estado del cobro de la suscripción para ese periodo. Podrás ver los intentos de cobro en el objeto `payments` y la próxima fecha a cobrar en `next_payment_attempt`.

## 4. Recibe información de los pagos de tus suscripciones

Recibirás notificaciones del tipo [Webhooks](https://www.mercadopago.com.ar/developers/es/guides/notifications/webhooks) ante la generación de un pago.

Mercado Pago realizará su mayor esfuerzo para lograr que tus `invoices` resulten pagos, sin requerir acción alguna de tu parte.

Solo deberías entregar tu producto o servicio, cuando el `invoice` para ese período tenga estado `paid`.

En caso de no conseguir una aprobación de pago para la fecha de cobro estipulada, reintentaremos hasta cuatro veces durante diez días, antes de que el `invoice` quede marcado como `unpaid`. Frente a este estado puedes pausar o cancelar la suscripción.

Independientemente del estado del _invoice_ actual, si la suscripción se encuentra activa se creará un _invoice_ para el próximo período.

Cada pago rechazado te será notificado mediante [Webhooks](https://www.mercadopago.com.ar/developers/es/guides/notifications/webhooks). Analiza el motivo del rechazo, y comunícate con tu usuario para que, por ejemplo, actualice los datos de su tarjeta de crédito o la cambie por otra, antes de que se realice el próximo reintento de cobro.

Dentro de la información del pago, en el array de `metadata`, encontrarás el `plan_id`, `subscription_id` e `invoice_id`:

```json
{
  ...
  "metadata": {
    "subscription_id": "SUBSCRIPTION_ID",
    "invoice_id": "INVOICE_ID",
    "plan_id": "PLAN_ID"
  },
  ...
}
```

Con el ID del [invoice](/es/reference/invoices/_invoices_id/get/) podrás obtener más información respecto al mismo.


## Añade características especiales a tu plan

Revisa el API Doc de plans para conocer todas las configuraciones que puedes realizar. Así podrás adecuar el cobro de suscripción a tu modelo de negocio. A continuación te mostramos las características más relevantes que puedes especificar al momento de crear un plan. Ten presente que son combinables entre sí para poder sacar el máximo provecho.

### Limita la cantidad de cuotas de la suscripción

Puedes indicar que las suscripciones sólo durarán un período determinado de tiempo (por ejemplo, que recibirán hasta 24 cobros):

```json
{
  ...
  "auto_recurring": {
    ...
    "repetitions": 24,
    ...
  },
  ...
}
```

### Agenda los cobros para un día determinado del mes

Si tu plan de suscripción es en base a meses, puedes especificar exactamente qué día del mes quieres que se realicen los cobros:

```json
{
  ...
  "auto_recurring": {
    ...
    "debit_date": 1,
    ...
  },
  ...
}
```

Si no especificas este atributo, los cobros se agendarán para el mismo día en que realizaste el alta de la suscripción.

### Ofrece un período gratuito de prueba

Puedes ofrecer un periodo de prueba a tus clientes por una frecuencia determinada:

```json
{
  ...
  "auto_recurring": {
    ...
    "free_trial": {
        "frequency": 1,
        "frequency_type": "months",
    }
    ...
  },
  ...
}
```

### Cobra un cargo adicional al subscribir usuarios

En muchos casos es útil realizar un cobro extra al momento de subscribir a tu usuario, por ejemplo para el costo de instalación de un servicio.

Debes especificar el monto a cobrar al crear el plan:

```json
{
  ...
  "setup_fee": 120.99,
  ...
}
```

Este pago no cancela ni forma parte del primer invoice de la suscripción.

En caso de que no podamos realizar este cobro, la suscripción no se creará.

### Cobra una comisión por transacción

Si implementas [Marketplace](https://www.mercadopago.com.ar/developers/es/guides/marketplace/api/introduction) y operas con las credenciales de tus usuarios conectados puedes cobrar una comisión por cada pago que creas. Para esto sólo debes agregar dicho monto en el parámetro `application_fee` al crear el plan:

```curl
{
  ...
  "application_fee": 3.99,
  ...
}
```


## Próximos pasos

### Gestiona tu suscripción

En el artículo de [gestión de suscripciones](https://www.mercadopago.com.ar/developers/es/guides/subscriptions/api/manage-subscription) encontrarás información sobre cómo pausar, reactivar o eliminar una suscripción, y también actualizar el monto de un plan.

### Prueba tu integración

Puedes probar tu integración antes de salir a producción, a fin de realizar los ajustes que necesites. Para ello utiliza tus credenciales de Modo _Sandbox_ y las tarjetas de prueba. Visita la sección [Probando](https://www.mercadopago.com.ar/developers/es/guides/subscriptions/api/testing).
