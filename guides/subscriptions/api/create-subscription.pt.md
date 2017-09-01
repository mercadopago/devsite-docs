# Crie uma assinatura

Inscreva seus clientes para receber pagamentos de forma periódica e automatizada.

> WARNING
>
> Pré-requisitos
>
> * Possuir a [captura de dados de cartão](/guides/payments/receiving-payment-by-card.pt.md)implementada.
> * Armazenar [clientes e cartões](/guides/payments/customers-and-cards.pt.md).


## 1. Crie um plano de assinatura

O plano contém informações sobre a frequência de cobrança e o valor a cobrar.

Para criá-lo, você deve fazer uma requisição POST:

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



> Estes são os dados mínimos e indispensáveis para criar um plano, mas existem outras opções que podem ser encontradas em [Adicione recursos especiais ao seu plano](#Adicione-recursos-especiais-ao-seu-plano).

**Resposta:**

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
    "currency_id": "ARS",
    ...
  },
  ...
}
```

## 2. Crie um cliente e atribua um cartão

Para criar uma assinatura, você precisa de um `Customer` com um cartão atribuído.

Consulte a seção [Clientes e Cartões](/guides/payments/api/customers-and-cards.pt.md) para saber como proceder.

Somente inscreva `customers` com cartões verificados.

Veja abaixo algumas opções para fazer isso:

1. [Emitir uma autorização](/guides/payments/api/authorization-and-capture.pt.md) para um valor baixo no cartão e cancelá-la em seguida, para conferir se o cartão é válido..

2. Utilizar o atributo `setup_fee`, que realizará uma cobrança adicional ao tentar inscrever seu usuário; e somente se esta cobrança for bem-sucedida, prosseguiremos com o registro da assinatura.

## 3. Inscreva um cliente em um plano

Uma assinatura é um objeto que conecta um `Plan` e um `Customer`.

Faça um POST especificando a ID do plano e a ID do cliente para conectar:

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
> O cliente deve ter um `default_card` para ser cobrado, próprio para pagamentos de assinaturas


**Resposta:**

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

**Importante:** as cobranças serão feitas com antecedência. Neste caso, a primeira cobrança será emitida assim que você inscrever um cliente, e não com um mês de atraso.

Assim que chegar a data da cobrança, um objeto `invoice` será criado, contendo o status da cobrança da assinatura para esse período. Você poderá ver as tentativas de cobrança no objeto `payments` e a próxima data de cobrança em `next_payment_attempt`.

## 4. Receba informações sobre os pagamentos de suas assinaturas

Você receberá notificações quando houver a criação ou modificação de um plano, assinatura, fatura ou pagamento.

O MercadoPago usará seus melhores esforços para garantir que suas `invoices` sejam pagas, sem exigir qualquer ação de sua parte.

Você somente deverá entregar seu produto ou serviço quando a `invoice` para esse período tiver o status `paid`.

Se não obtivermos a aprovação do pagamento até a data de cobrança estabelecida, faremos até quatro tentativas durante dez dias antes de sinalizar a invoice como `unpaid`. Nesse caso, você poderá pausar ou cancelar a assinatura.

Independentemente do status da fatura atual, se a assinatura estiver ativa, será criada uma fatura para o próximo período.

Cada pagamento recusado será notificado por meio de [Webhooks](/guides/notifications/webhooks.pt.md). Analise a causa da rejeição e comunique-se com o usuário para, por exemplo, [atualizar os dados de seu cartão de crédito](#) ou alterá-lo por outro, antes da próxima tentativa de cobrança.

Para mais informações, consulte a seção [Webhooks](/guides/notifications/webhooks.pt.md).

## Adicione recursos especiais ao seu plano

Consulte a [API documentação de planos](#) para saber todas as configurações que você pode fazer. Assim, você será capaz de adaptar a cobrança de assinatura ao seu modelo de negócios. Em seguida, mostraremos os recursos mais relevantes que poderá especificar ao criar um plano. Tenha em mente que você poderá combiná-los como desejar para obter o máximo benefício.

### Limite o número de cobranças da assinatura

Você pode especificar que as assinaturas durarão um determinado período (por exemplo, que receberão até 24 cobranças):

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

### Agende as cobranças para um determinado dia do mês

Se seu plano de assinatura é mensal, você pode especificar exatamente em que dia do mês a cobrança será realizada:

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

Caso não especifique esse atributo, as cobranças serão agendadas para o mesmo dia em que tiver realizado o cadastro da assinatura.

### Ofereça um período de teste gratuito

Você pode oferecer um período de teste aos seus clientes durante um determinado período:

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

### Cobre uma taxa adicional ao inscrever usuários

Em muitos casos, é útil cobrar uma taxa adicional no momento da assinatura do usuário, por exemplo, um custo de instalação do serviço.

Você deve especificar o valor a receber ao criar o plano:

```json
{
  ...
  "setup_fee": 120.99,
  ...
}
```

Este pagamento não anula nem faz parte da primeira fatura da assinatura.

Caso não seja possível realizar essa cobrança, a assinatura não será criada.

### Cobre uma taxa por transação

Se você implementar o [Marketplace](#) e operar com as credenciais de seus usuários conectados poderá cobrar uma taxa para cada pagamento que criar. Para isso, você só precisa adicionar o valor no parâmetro `application_fee` ao criar o plano:

```curl
{
  ...
  "application_fee": 3.99,
  ...
}
```


## Próximos passos

### Gerencie sua assinatura

Na seção [gerenciamento de assinaturas](/guides/subscriptions/api/manage-subscription.es.md) você encontrará informações sobre como pausar, reativar ou excluir uma assinatura, e como atualizar o preço de um plano.

### Teste sua integração

Você pode testar sua integração antes de partir para produção, a fim de realizar os ajustes necessários. Para isso, utilize suas credenciais no Modo Sandbox e os cartões de teste. Consulte a seção de [Testes](/guides/subscriptions/api/testing.pt.md).
