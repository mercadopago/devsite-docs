# Gerencie uma assinatura

Índice:

1. [Atualizar o preço de uma assinatura](#Atualizar-o-preço-de-uma-assinatura).
2. [Pausar e reativar uma assinatura](#Pausar-e-reativar-uma-assinatura).
3. [Cancelar uma assinatura](#Cancelar-uma-assinatura).

## Atualizar o preço de uma assinatura

Você poderá alterar o preço das assinaturas a qualquer momento. A partir do momento que fizer a atualização, o novo preço será cobrado nos próximos débitos de seus clientes.

Para alterar o valor de uma assinatura você deve fazer o seguinte:

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



**Resposta:**


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

Além disso, você pode fazer isso diretamente no site do MercadoPago. Acesse a seção de assinaturas, selecione os usuários e confirme a ação.

## Pausar e reativar uma assinatura

Você pode pausar as assinaturas a qualquer momento. Assim, seus usuários não são cobrados até que você reative as assinaturas.

> Seus assinantes receberão um e-mail informando-os sobre a pausa ou reativação da assinatura.

Para pausar uma assinatura você deve fazer o seguinte:

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


**Resposta:**

HTTP status code: 200 OK

```curl
{
  "id": "PREAPPROVAL_ID",
  ...
  "status": "paused",
  ...
}
```

Para reativar uma assinatura você deve fazer o seguinte:


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



**Resposta:**

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
> Os períodos transcorridos durante a pausa da assinatura não serão cobrados, mas a assinatura continuará executando a agenda.

## Cancelar uma assinatura

Você pode cancelar assinaturas a qualquer momento. Assim, seus clientes não serão mais cobrados.

Para cancelar uma assinatura você deve fazer o seguinte:

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


**Resposta:**

HTTP status code: 200 OK

```curl
{
  "id": "PREAPPROVAL_ID",
  ...
  "status": "cancelled",
  ...
}
```
