# Crie uma assinatura

Inscreva seus clientes para receber pagamentos de forma periódica e automatizada.

## 1. . Crie uma preferência de assinatura

Uma preferência de assinatura contém todos os detalhes do produto ou serviço a ser pago de forma recorrente. Por exemplo:

1. Dados e valor do que será pago.
2. Frequência da assinatura.
3. ID de referência do seu sistema.

Para criar uma preferência de assinatura, deve-se instalar o [SDK do MercadoPago](/plugins) e configurar o objeto MP com suas [credenciais](https://www.mercadopago.com.ar/account/credentials?type=basic).

[[[
```php
<?php
  require_once ('mercadopago.php');
  MercadoPago\SDK::configure(['ACCESS_TOKEN' => 'ENV_ACCESS_TOKEN']);
?>
```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");
```
```node
var mercadopago = require('mercadopago');
mercadopago.configure({
    access_token: 'ENV_ACCESS_TOKEN'
});
```
```ruby
require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)
```
]]]

Em seguida, adicione os atributos de sua preferência:

[[[
```php
<?php

  $preapproval = new MercadoPago\Preapproval();
  $preapproval->payer_email = "my_customer@my-site.com";
  $preapproval->back_url = "http://www.my-site.com";
  $preapproval->reason = "Monthly subscription to premium package";
  $preapproval->external_reference = "OP-1234";
  $preapproval->auto_recurring = array(
		"frequency" => 1,
		"frequency_type" => "months",
		"transaction_amount" => 60,
		"currency_id" => "ARS"
  );

  $preapproval->save();

?>
```
```java

AutoRecurring autoRecurring = new AutoRecurring();
autoRecurring.setFrequency(1);
autoRecurring.setFrequencyType("Months");
autoRecurring.setTransactionAmount(60);
autoRecurring.setCurrencyId("ARS");

Preapproval preapproval = new Preapproval();
preapproval.setPayerEmail("my_customer@my-site.com");
preapproval.setBackUrl("http://www.my-site.com");
preapproval.setReason("Monthly subscription to premium package");
preapproval.setExternalReference("OP-1234");
preapproval.setAutoRecurring(autoRecurring);
preapproval.save();

```
```node

var mercadopago = require('mercadopago');
mercadopago.configure({
    access_token: 'ENV_ACCESS_TOKEN'
});

preapproval_data = {
  payer_email: "my_customer@my-site.com",
  back_url: "http://www.my-site.com",
  reason: "Monthly subscription to premium package",
  external_reference: "OP-1234",
  auto_recurring: {
    frequency: 1,
    frequency_type: "months",
    transaction_amount: 60,
    currency_id: "ARS"
  }
}

mercadopago.preapproval.create(preapproval_data).then(function (data)) {
  // Do Stuff...
}).catch(function (error) {
  // Do Stuff...
});

```
```ruby

preapproval = MercadoPago::Preapproval.new()
preapproval.payer_email = "my_customer@my-site.com"
preapproval.back_url = "http://www.my-site.com"
preapproval.reason = "Monthly subscription to premium package"
preapproval.external_reference = "OP-1234"
preapproval.auto_recurring = {
  frequency: 1,
  frequency_type: "months",
  transaction_amount: 60,
  currency_id: "ARS"
}

preapproval.save()

```
]]]


> Estes são os dados mínimos e indispensáveis para criar uma preferência, mas existem outras opções que podem ser encontradas em [Adicione recursos especiais à sua assinatura.](#Adicione-recursos-especiais-à-sua-assinatura).


## 2. Encaminhe o comprador ao checkout

Assim que a preferência for criada, utilize a URL do atributo `init_point` da resposta para gerar um botão de pagamento:

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Pagar</title>
	</head>
	<body>
		<a href="<?php echo $preapproval['response']['init_point']; ?>">Subscribe!</a>
	</body>
</html>
```

## 3. Receba informações sobre os pagamentos de suas assinaturas

Você receberá notificações automaticamente sobre seus novos pagamentos e atualizações de status correspondentes.

O Mercado Pago usará seus melhores esforços para garantir que suas assinaturas sejam pagas, sem exigir qualquer ação de sua parte.

Se não obtivermos a aprovação do pagamento até a data de cobrança estabelecida, faremos até quatro tentativas durante dez dias antes de sinalizar o pagamento como inadimplente. Nesse caso, você poderá pausar ou cancelar a assinatura.

Se a assinatura estiver ativa, haverá tentativa de cobrança no próximo período.

Você será notificado sobre cada pagamento recusado por meio de [Notificações](../../notifications/ipn.pt.md). Analise a causa da rejeição e comunique-se com o usuário para, por exemplo, atualizar os dados de seu cartão de crédito ou alterá-lo por outro, antes da próxima tentativa de cobrança.

Para mais informações, consulte a seção de [Notificações](/guides/notifications/ipn.pt.md).


## 4. Teste sua integração

Você pode testar sua integração antes de partir para produção a fim de verificar o funcionamento e fazer os ajustes necessários.

Para isso, deve-se utilizar usuários e cartões de teste.

Para mais informações, consulte a seção de [Testes](/guides/payments/api/testing.pt.md).

## Adicione recursos especiais à sua assinatura

Consulte a [API Doc de Preapproval](#) para saber todas as configurações que você pode fazer. Assim, você será capaz de adaptar a cobrança de assinatura ao seu modelo de negócios.

Em seguida, mostraremos os recursos mais relevantes que poderá especificar ao criar uma assinatura. Tenha em mente que você poderá combiná-los como desejar para obter o máximo benefício.

### Ofereça um período de teste gratuito

Você pode oferecer um período de teste aos seus clientes durante um determinado período, adicionando a data de início:

```json
{
  ...
  "auto_recurring": {
    ...
    "start_date" => "2016-12-10T14:58:11.778-03:00",
    ...
  },
  ...
}
```

### Limite o número de cobranças da assinatura

Você pode especificar que as assinaturas durarão um determinado período:

```json
{
  ...
  "auto_recurring": {
    ...
    "end_date" => "2018-12-10T14:58:11.778-03:00",
    ...
  },
  ...
}
```
