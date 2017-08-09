# Gestionando una subscripción

Índice de contenido:

1. [Actualizar el monto de un plan](#actualizar-el-monto-de-un-plan)
2. [Pausar y reactivar una subscripción](#pausar-y-reactivar-una-subscripcion)
3. [Cancelar un plan o una subscripción](#cancelar-un-plan-o-una-subscripcion)


## Actualizar el monto de un plan

Puedes cambiar el monto de los planes en cualquier momento. A partir del momento en que realices la actualización, se cobrará el nuevo monto a los próximos débitos de tus `customers`.

Para cambiar el monto de un plan debes hacerlo de la siguiente manera:

[[[
```php
<?php 

  $plan = MercadoPago\Plan::load($plan_id);
  $plan->auto_recurring["transaction_amount"] =  500;
  $plan->update();
  
?>
```
```java
Plan plan = Plan.load(planId);

AutoRecurring autoRecurring = preapproval.getAutoRecurring();
autoRecurring.setTransactionAmount(500);

plan.setAutoRecurring(autoRecurring);
plan.update();

```
```node

mercadopago.plan.update({
  id: planId,
  auto_recurring: {
    "transaction_amount": 500
  }
}).then().catch();

```
```ruby
plan = MercadoPago::Plan.load(planId)
plan.autoRecurring.transaction_amount = 500
plan.update()
```
```curl
curl -X PUT \
        -H "Content-Type: application/json" \
        'https://api.mercadopago.com/planS/PLAN_ID?access_token=ACCESS_TOKEN' \
        -d '{
              "auto_recurring": {
                  "transaction_amount": 500
              }
        }'
```

]]]
 

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


[[[
```php
<?php 

  $subscription = MercadoPago\Subscription::load($subscription_id);
  $subscription->status = "paused";
  $subscription->update();
  
?>
```
```java
Subscription suscription = Subscription.load(suscriptionId);
suscription.setStatus("paused");
suscription.update();

```
```node

mercadopago.suscription.update({
  id: suscriptionId,
  status: "paused"
}).then().catch();

```
```ruby
suscription = MercadoPago::Subscription.load(planId)
suscription.status = "paused"
suscription.update()
```
```curl
curl -X PUT \
        -H 'accept: application/json' \
        -H 'content-type: application/json' \
        'https://api.mercadopago.com/v1/suscriptions/PLAN_ID?access_token=ACCESS_TOKEN' \
        -d '{
                "status": "paused"
        }'
```
]]]
 

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


[[[
```php
<?php 

  $subscription = MercadoPago\Subscription::load($subscription_id);
  $subscription->status = "authorized";
  $subscription->update();
  
?>
```
```java
Subscription suscription = Subscription.load(suscriptionId);
suscription.setStatus("authorized");
suscription.update();

```
```node

mercadopago.suscription.update({
  id: suscriptionId,
  status: "authorized"
}).then().catch();

```
```ruby
suscription = MercadoPago::Subscription.load(planId)
suscription.status = "authorized"
suscription.update()
```
```curl
curl -X PUT \
        -H 'accept: application/json' \
        -H 'content-type: application/json' \
        'https://api.mercadopago.com/v1/suscriptions/PLAN_ID?access_token=ACCESS_TOKEN' \
        -d '{
                "status": "authorized"
        }'
```
]]]
 

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

> WARNING
>
> Importante
>
> Los períodos que transcurran durante la pausa de la subscripción no serán cobrados, aunque la subscripción seguirá ejecutando su agenda. Esto significa que los `invoices` generados quedarán con un `status` en `unpaid` durante el tiempo de pausa, y no se cobrarán cuando se reactive la subscripción.

## Cancelar un plan o una subscripción

Puedes cancelar los planes y subscripciones en cualquier momento. De este modo, se dejará de cobrar a tus customers.

Para cancelar un plan debes hacerlo de la siguiente manera:


[[[
```php
<?php 

  $plan = MercadoPago\Plan::load($plan_id);
  $plan->status = "cancelled";
  $plan->update();
  
?>
```
```java
Plan plan = Plan.load(planId);
plan.setStatus("cancelled");
plan.update();

```
```node

mercadopago.plan.update({
  id: planId,
  status: "cancelled"
}).then().catch();

```
```ruby
plan = MercadoPago::Plan.load(planId)
plan.autoRecurring.transaction_amount = 500
plan.update()
```
```curl
curl -X PUT \
        -H "Content-Type: application/json" \
        'https://api.mercadopago.com/planS/PLAN_ID?access_token=ACCESS_TOKEN' \
        -d '{
              "status": "cancelled"
        }'
```

]]]



> NOTE
>
> Nota
>
> Cuando ejecutes esta acción, todas las subscripciones serán marcadas con un status `cancelled`

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

[[[
```php
<?php 

  $subscription = MercadoPago\Subscription::load($subscription_id);
  $subscription->status = "cancelled";
  $subscription->update();
  
?>
```
```java
Subscription suscription = Subscription.load(suscriptionId);
suscription.setStatus("cancelled");
suscription.update();

```
```node

mercadopago.suscription.update({
  id: suscriptionId,
  status: "cancelled"
}).then().catch();

```
```ruby
suscription = MercadoPago::Subscription.load(planId)
suscription.status = "cancelled"
suscription.update()
```
```curl
curl -X PUT \
        -H 'accept: application/json' \
        -H 'content-type: application/json' \
        'https://api.mercadopago.com/v1/suscriptions/PLAN_ID?access_token=ACCESS_TOKEN' \
        -d '{
                "status": "authorized"
        }'
```
]]]

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
