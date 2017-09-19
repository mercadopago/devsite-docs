---
sites_supported:
    - mla
    - mlb
    - mlm
    - global
---

# Manage a subscription

Index:

1. [Update plan prices.](#update-plan-prices)
2. [Pause and reactivate subscriptions.](#pause-and-reactivate-subscriptions)
3. [Cancel plans or subscriptions.](#cancel-plans-or-subscriptions)

## Update plan prices

You can change plan prices at any time. As soon as you update it, the new price will be charged to upcoming debits from your `customers`.

To change the plan price, proceed as follows:

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


**Response:**

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


## Pause and reactivate subscriptions

You can pause subscriptions at any time. Thus, your users will not be charged until you reactivate them.

To pause a subscription, proceed as follows:

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


**Response:**

HTTP status code: 200 OK

```json
{
  "id": "SUBSCRIPTION_ID",
  ...
  "status": "paused",
  ...
}
```

To reactivate a subscription , proceed as follows:

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


**Response:**

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
> Important
>
> The period while a subscription is paused will not be billed, but the subscription will continue to execute its agenda. This means that the generated `invoices` will remain with `unpaid` status during the pause, and will not be charged when the subscription is re-activated.

## Cancel a plan or a subscription

You can cancel plans and subscriptions at any time. This will allow you to stop charging your customers.

To cancel a plan, proceed as follows:

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
> Note
>
> When running this action, all subscriptions will be marked with a `cancelled` status.

**Response:**

HTTP status code: 200 OK

```json
{
  "id": "PLAN_ID",
  ...
  "status": "cancelled",
  ...
}
```

Para cancelar una suscripción debes hacerlo de la siguiente manera:

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

**Response:**

HTTP status code: 200 OK

```json
{
  "id": "SUBSCRIPTION_ID",
  ...
  "status": "cancelled",
  ...
}
```
