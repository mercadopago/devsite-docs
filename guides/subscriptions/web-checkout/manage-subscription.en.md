---
sites_supported:
    - mla
    - mlb
    - mlm
    - global
---

# Manage subscriptions

Index:

1. [Update subscription prices](#update-subscription-prices).
2. [Pause and reactivate subscriptions](#pause-and-reactivate-subscriptions).
3. [Cancel subscriptions](#cancel-subscriptions).


## Update subscription prices

You can change subscription prices at any time. As soon as you update it, the new price will be charged to upcoming debits from your customers.

To change the subscription price, proceed as follows:

[[[
```php
<?php

  $preapproval = MercadoPago\Preapproval::load($preapproval_id);
  $preapproval->auto_recurring["transaction_amount"] =  500;
  $preapproval->update();

?>
```
```java
Preapproval preapproval = Preapproval.load(preapprovalId);

AutoRecurring autoRecurring = preapproval.getAutoRecurring();
autoRecurring.setTransactionAmount(500);

preapproval.setAutoRecurring(autoRecurring);
preapproval.update();

```
```node

mercadopago.preapproval.update({
  id: preapprovalId,
  auto_recurring: {
    "transaction_amount": 500
  }
}).then().catch();

```
```ruby
preapproval = MercadoPago::Preapproval.load(preapprovalId)
preapproval.autoRecurring.transaction_amount = 500
preapproval.update()
```
```curl
curl -X PUT \
        -H "Content-Type: application/json" \
        'https://api.mercadopago.com/preapproval/PREAPPROVAL_ID?access_token=ACCESS_TOKEN' \
        -d '{
              "auto_recurring": {
                  "transaction_amount": 500
              }
        }'
```

]]]



**Response:**

HTTP status code: 200 OK

```curl
{
  "id": "PREAPPROVAL_ID",
  ...
  "auto_recurring": {
      ...
      "transaction_amount": 500,
      ...
  }
  ...
}
```

In addition, you can do it directly from Mercado Pago website. Go to the subscriptions section, select the users and confirm the action.

## Pause and reactivate subscriptions

You can pause subscriptions at any time. Thus, your users will not be charged until you reactivate them.

>Your subscribers will receive an e-mail informing about the pause or reactivation of the subscription.

To pause a subscription, proceed as follows:

[[[
```php
<?php

  $preapproval = MercadoPago\Preapproval::load($preapproval_id);
  $preapproval->status = "paused";
  $preapproval->update();

?>
```
```java
Preapproval preapproval = Preapproval.load(preapprovalId);
preapproval.setStatus("paused");
preapproval.update();

```
```node

mercadopago.preapproval.update({
  id: preapprovalId,
  status: "paused"
}).then().catch();

```
```ruby
preapproval = MercadoPago::Preapproval.load(preapprovalId)
preapproval.status = "paused"
preapproval.update()
```
```curl
curl -X PUT \
        -H 'accept: application/json' \
        -H 'content-type: application/json' \
        'https://api.mercadopago.com/preapproval/PREAPPROVAL_ID?access_token=ACCESS_TOKEN' \
        -d '{
                "status": "paused"
        }'
```
]]]


**Response:**

HTTP status code: 200 OK

```curl
{
  "id": "PREAPPROVAL_ID",
  ...
  "status": "paused",
  ...
}
```

To reactivate a subscription, proceed as follows:


[[[
```php
<?php

  $preapproval = MercadoPago\Preapproval::load($preapproval_id);
  $preapproval->status = "authorized";
  $preapproval->update();

?>
```
```java
Preapproval preapproval = Preapproval.load(preapprovalId);
preapproval.setStatus("authorized");
preapproval.update();

```
```node

mercadopago.preapproval.update({
  id: preapprovalId,
  status: "authorized"
}).then().catch();

```
```ruby
preapproval = MercadoPago::Preapproval.load(preapprovalId)
preapproval.status = "authorized"
preapproval.update()
```
```curl
curl -X PUT \
        -H 'accept: application/json' \
        -H 'content-type: application/json' \
        'https://api.mercadopago.com/preapproval/PREAPPROVAL_ID?access_token=ACCESS_TOKEN' \
        -d '{
                "status": "authorized"
        }'
```
]]]



**Response:**

HTTP status code: 200 OK

```curl
{
  "id": "PREAPPROVAL_ID",
  ...
  "status": "authorized",
  ...
}
```

> WARNING
>
> Important
>
> The period while a subscription is paused will not be billed, but the subscription will continue to execute its agenda.

## Cancel a subscription

You can cancel subscriptions at any time. This will allow you to stop charging your customers.

To cancel a subscription, proceed as follows:

[[[
```php
<?php

  $preapproval = MercadoPago\Preapproval::load($preapproval_id);
  $preapproval->status = "cancelled";
  $preapproval->update();

?>
```
```java
Preapproval preapproval = Preapproval.load(preapprovalId);
preapproval.setStatus("cancelled");
preapproval.update();

```
```node

mercadopago.preapproval.update({
  id: preapprovalId,
  status: "cancelled"
}).then().catch();

```
```ruby
preapproval = MercadoPago::Preapproval.load(preapprovalId)
preapproval.status = "cancelled"
preapproval.update()
```
```curl
curl -X PUT \
        -H 'accept: application/json' \
        -H 'content-type: application/json' \
        'https://api.mercadopago.com/preapproval/PREAPPROVAL_ID?access_token=ACCESS_TOKEN' \
        -d '{
                "status": "cancelled"
        }'
```
]]]


**Response:**

HTTP status code: 200 OK

```curl
{
  "id": "PREAPPROVAL_ID",
  ...
  "status": "cancelled",
  ...
}
```
