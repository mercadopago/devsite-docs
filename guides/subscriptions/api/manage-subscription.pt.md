---
sites_supported:
    - mla
    - mlb
    - mlm
    - global
---


# Gerencie uma assinatura

Índice:

1. [Atualizar o valor de um plano](#Atualizar-o-valor-de-um-plano).
2. [Pausar e reativar uma assinatura](#Pausar-e-reativar-uma-assinatura).
3. [Cancelar um plano ou uma assinatura](#Cancelar-um-plano-ou-uma-assinatura).


## Atualizar o valor de um plano

Você poderá alterar o valor dos planos a qualquer momento. A partir do momento que fizer a atualização, o novo valor será cobrado para os próximos débitos de seus `customers`.

Para alterar o valor de um plano você deve fazer o seguinte:

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


**Resposta:**

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


## Pausar e reativar uma assinatura

Você pode pausar as assinaturas a qualquer momento. Assim, seus usuários não são cobrados até que você reative as assinaturas.

Para pausar uma assinatura, você deve fazer o seguinte:

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


**Resposta:**

HTTP status code: 200 OK

```json
{
  "id": "SUBSCRIPTION_ID",
  ...
  "status": "paused",
  ...
}
```

Para reactivar una suscripción debes hacerlo de la siguiente manera:


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


**Resposta:**

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
> Os períodos transcorridos durante a pausa da assinatura não serão cobrados, mas a assinatura continuará executando a agenda. Isto significa que as `invoices` geradas permanecerão com `status` `unpaid` durante o período de pausa, e não serão cobradas quando a assinatura for reativada.

## Cancelar um plano ou uma assinatura

Você pode cancelar planos e assinaturas a qualquer momento. Assim, seus clientes não serão mais cobrados.

Para cancelar um plano você deve fazer o seguinte:

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
> Quando executar esta ação, todas as assinaturas serão marcados com o status `cancelled`

**Resposta:**

HTTP status code: 200 OK

```json
{
  "id": "PLAN_ID",
  ...
  "status": "cancelled",
  ...
}
```

Para cancelar uma assinatura você deve fazer o seguinte:

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

**Resposta:**

HTTP status code: 200 OK

```json
{
  "id": "SUBSCRIPTION_ID",
  ...
  "status": "cancelled",
  ...
}
```
