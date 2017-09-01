---
sites_supported:
    - mla
    - mlb
    - mlm
---


# Gestionando una subscripción

Índice de contenido:

1. [Actualizar el monto de una subscripción](#actualizar-el-monto-de-una-subscripción).
2. [Pausar y reactivar una subscripción](#pausar-y-reactivar-una-subscripción).
3. [Cancelar una subscripción](#cancelar-una-subscripción).


## Actualizar el monto de una subscripción

Puedes cambiar el monto de las subscripciones en cualquier momento. A partir del momento en que realices la actualización, se cobrará el nuevo monto a los próximos débitos de tus _customers_.

Para cambiar el monto de una subscripción debes hacerlo de la siguiente manera:

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



**Respuesta:**


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

Además, puedes hacerlo directamente desde el sitio de Mercado Pago. Accede a la sección subscripciones, selecciona los usuarios necesarios y confirma la acción.

## Pausar y reactivar una subscripción

Puedes pausar las subscripciones en cualquier momento. De este modo, no se les cobrará a tus usuarios hasta que las reactives.

> Tus subscriptores recibirán un e-mail informándoles de la pausa o reactivación de la subscripción.

Para pausar una subscripción debes hacerlo de la siguiente manera:

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


**Respuesta:**

HTTP status code: 200 OK

```curl
{
  "id": "PREAPPROVAL_ID",
  ...
  "status": "paused",
  ...
}
```

Para reactivar una subscripción debes hacerlo de la siguiente manera:


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



**Respuesta:**

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
> Importante
>
> los períodos que transcurran durante la pausa de la subscripción no serán cobrados, aunque la subscripción seguirá ejecutando su agenda.

## Cancelar una subscripción

Puedes cancelar las subscripciones en cualquier momento. De este modo, se dejará de cobrar a tus clientes.

Para cancelar una subscripción debes hacerlo de la siguiente manera:


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


**Respuesta:**

HTTP status code: 200 OK

```curl
{
  "id": "PREAPPROVAL_ID",
  ...
  "status": "cancelled",
  ...
}
```
