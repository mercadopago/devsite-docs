# Configurações de preferência

Você pode adaptar a integração do Wallet Brick ao seu modelo negócio configurando [atributos de preferência](/developers/pt/reference/preferences/_checkout_preferences/post).

----[mla, mlb]----
Se você oferece compras de valores altos, por exemplo, pode aceitar [pagamentos com dois cartões de crédito](#bookmark_aceite_pagamentos_com_2_cartões_de_crédito) ou ainda [excluir meios de pagamento](#bookmark_defina_os_meios_de_pagamento_desejados) indesejados para a sua operação.

------------

----[mlm, mlc, mlu, mco, mpe]----
Se você oferece compras de valores altos, por exemplo, pode [excluir meios de pagamento](#bookmark_defina_os_meios_de_pagamento_desejados) indesejados para a sua operação.

------------

## Exemplo de preferência completa

----[mlm, mla, mlb, mlc, mlu, mpe]----

```json
{
    "items": [
        {
            "id": "item-ID-1234",
            "title": "Meu produto",
            "currency_id": "[FAKER][CURRENCY][ACRONYM]",
            "picture_url": "https://www.mercadopago.com/org-img/MP3/home/logomp3.gif",
            "description": "Descrição do Item",
            "category_id": "art",
            "quantity": 1,
            "unit_price": 75.76
        }
    ],
    "payer": {
        "name": "João",
        "surname": "Silva",
        "email": "user@email.com",
        "phone": {
            "area_code": "11",
            "number": "4444-4444"
        },
        "identification": {
            "type": "CPF",
            "number": "19119119100"
        },
        "address": {
            "street_name": "Street",
            "street_number": 123,
            "zip_code": "06233200"
        }
    },
    "back_urls": {
        "success": "https://www.success.com",
        "failure": "http://www.failure.com",
        "pending": "http://www.pending.com"
    },
    "auto_return": "approved",
    "payment_methods": {
        "excluded_payment_methods": [
            {
                "id": "master"
            }
        ],
        "excluded_payment_types": [
            {
                "id": "ticket"
            }
        ],
        "installments": 12
    },
    "notification_url": "https://www.your-site.com/ipn",
    "statement_descriptor": "MEUNEGOCIO",
    "external_reference": "Reference_1234",
    "expires": true,
    "expiration_date_from": "2016-02-01T12:00:00.000-04:00",
    "expiration_date_to": "2016-02-28T12:00:00.000-04:00"
}
```

------------
----[mco]----

 ```json
{
	"items": [
		{
			"id": "item-ID-1234",
			"title": "Title of what you are paying for. It will be displayed in the payment process.",
			"currency_id": "CLP",
			"picture_url": "https://www.mercadopago.com/org-img/MP3/home/logomp3.gif",
			"description": "Item description",
			"category_id": "art", // Available categories at https://api.mercadopago.com/item_categories
			"quantity": 1,
			"unit_price": 100
		}
	],
	"payer": {
		"name": "user-name",
		"surname": "user-surname",
		"email": "user@email.com",
		"date_created": "2015-06-02T12:58:41.425-04:00",
		"phone": {
			"area_code": "11",
			"number": "4444-4444"
		},
		"identification": {
			"type": "RUT", // Available ID types at https://api.mercadopago.com/v1/identification_types
			"number": "12345678"
		},
		"address": {
			"street_name": "Street",
			"street_number": 123,
			"zip_code": "5700"
		}
	},
	"back_urls": {
		"success": "https://www.success.com",
		"failure": "http://www.failure.com",
		"pending": "http://www.pending.com"
	},
	"auto_return": "approved",
	"payment_methods": {
		"excluded_payment_methods": [
			{
				"id": "master"
			}
		],
		"excluded_payment_types": [
			{
				"id": "ticket"
			}
		],
		"installments": 12,
		"default_payment_method_id": null,
		"default_installments": null
	},
	"shipments": {
		"receiver_address": {
			"zip_code": "5700",
			"street_number": 123,
			"street_name": "Street",
			"floor": 4,
			"apartment": "C"
		}
	},
	"notification_url": "https://www.your-site.com/ipn",
	"statement_descriptor": "MEUNEGOCIO",
	"external_reference": "Reference_1234",
	"expires": true,
	"expiration_date_from": "2016-02-01T12:00:00.000-04:00",
	"expiration_date_to": "2016-02-28T12:00:00.000-04:00",
	"taxes": [
		{
			"type": "IVA",
			"value": 16
		}
	]
}
 ```
------------

----[mla]----
## Defina os meios de pagamento desejados

Por meio da preferência de pagamento, você pode configurar um meio de pagamento padrão para ser renderizado, excluir algum indesejado, ou ainda escolher um número máximo de parcelas a serem ofertadas.

| Atributo de preferência | Descrição |
| --- | --- |
| `payment_methods` | Classe que descreve os atributos e métodos de meios de pagamento do Wallet Brick. |
| `excluded_payment_types` | Método que exclui meios de pagamento indesejados, como cartão de crédito, Rapipago, Pago Fácil, entre outros. |
| `excluded_payment_methods` | Método que exclui bandeiras específicas de cartões de crédito e débito, como Visa, Mastercard, American Express, entre outros. |
| `installments` | Método que define o número máximo de parcelas a serem ofertadas. |
| `purpose` | Ao indicar o valor `wallet_purchase` neste método, o Wallet Brick apenas aceitará pagamentos de usuários cadastrados no Mercado Pago, com cartão e saldo em conta. |

------------

----[mlb]----
## Defina os meios de pagamento desejados

Por meio da preferência de pagamento, você pode configurar um meio de pagamento padrão para ser renderizado, excluir algum indesejado, ou ainda escolher um número máximo de parcelas a serem ofertadas.

| Atributo de preferência | Descrição |
| --- | --- |
| `payment_methods` | Classe que descreve os atributos e métodos de meios de pagamento do Wallet Brick. |
| `excluded_payment_types` | Método que exclui meios de pagamento indesejados, como cartão de crédito, ticket (boleto ou pagamento em lotérica), entre outros. |
| `excluded_payment_methods` | Método que exclui bandeiras específicas de cartões de crédito e débito, como Visa, Mastercard, American Express, entre outros. |
| `installments` | Método que define o número máximo de parcelas a serem ofertadas. |
| `purpose` | Ao indicar o valor `wallet_purchase` neste método, o Wallet Brick apenas aceitará pagamentos de usuários cadastrados no Mercado Pago, com cartão e saldo em conta. |

------------

----[mlm]----
## Defina os meios de pagamento desejados

Por meio da preferência de pagamento, você pode configurar um meio de pagamento padrão para ser renderizado, excluir algum indesejado ou ainda escolher um número máximo de parcelas a serem ofertadas.

| Atributo de preferência | Descrição |
| --- | --- |
| `payment_methods` | Classe que descreve os atributos e métodos de meios de pagamento do Wallet Brick. |
| `excluded_payment_types` | Método que exclui meios de pagamento indesejados, como cartão de crédito, ticket, entre outros. |
| `excluded_payment_methods` | Método que exclui bandeiras específicas de cartões de crédito e débito, como Visa, Mastercard, American Express, entre outros. |
| `installments` | Método que define o número máximo de parcelas a serem ofertadas. |
| `purpose` | Ao indicar o valor `wallet_purchase` neste método, o Wallet Brick apenas aceitará pagamentos de usuários cadastrados no Mercado Pago, com cartão e saldo em conta. |

------------

----[mlc, mco, mpe, mlu]----
## Defina os meios de pagamento desejados

Por meio da preferência de pagamento, você pode configurar um meio de pagamento padrão para ser renderizado, excluir algum indesejado, ou ainda escolher um número máximo de parcelas a serem ofertadas.

| Atributo de preferência | Descrição |
| --- | --- |
| `payment_methods` | Classe que descreve os atributos e métodos de meios de pagamento do Wallet Brick. |
| `excluded_payment_types` | Método que exclui meios de pagamento indesejados, como cartão de crédito, entre outros. |
| `excluded_payment_methods` | Método que exclui bandeiras específicas de cartões de crédito e débito, como Visa, Mastercard, American Express, entre outros. |
| `installments` | Método que define o número máximo de parcelas a serem ofertadas. |
| `purpose` | Ao indicar o valor `wallet_purchase` neste método, o Wallet Brick apenas aceitará pagamentos de usuários cadastrados no Mercado Pago, com cartão e saldo em conta. |

------------

Por exemplo:

[[[
```php
<?php
$preference = new MercadoPago\Preference();
// ...
$preference->payment_methods = array(
  "excluded_payment_methods" => array(
    array("id" => "master")
  ),
  "excluded_payment_types" => array(
    array("id" => "ticket")
  ),
  "installments" => 12
);
// ...
?>
```
```node
var preference = {}
preference = {
//...
"payment_methods": {
    "excluded_payment_methods": [
        {
            "id": "master"
        }
    ],
    "excluded_payment_types": [
        {
            "id": "ticket"
        }
    ],
    "installments": 12
	}
//...
}
```
```java
PreferenceClient client = new PreferenceClient();
//...
List<PreferencePaymentMethodRequest> excludedPaymentMethods = new ArrayList<>();
excludedPaymentMethods.add(PreferencePaymentMethodRequest.builder().id("master").build());
excludedPaymentMethods.add(PreferencePaymentMethodRequest.builder().id("amex").build());

List<PreferencePaymentTypeRequest> excludedPaymentTypes = new ArrayList<>();
excludedPaymentTypes.add(PreferencePaymentTypeRequest.builder().id("ticket").build());

PreferencePaymentMethodsRequest paymentMethods =
   PreferencePaymentMethodsRequest.builder()
       .excludedPaymentMethods(excludedPaymentMethods)
       .excludedPaymentTypes(excludedPaymentTypes)
       .installments(12)
       .build();

PreferenceRequest request = PreferenceRequest.builder().paymentMethods(paymentMethods).build();

client.create(request);
//...
```
```ruby
#...
preference_data = {
  # ...
  payment_methods: {
    excluded_payment_methods: [
      { id: 'master' }
    ],
    excluded_payment_types: [
      { id: 'ticket' }
    ],
    installments: 12
  }
  # ...
}
#...
```
```csharp
var paymentMethods = new PreferencePaymentMethodsRequest
{
    ExcludedPaymentMethods = new List<PreferencePaymentMethodRequest>
    {
        new PreferencePaymentMethodRequest
        {
            Id = "master",
        },
    },
    ExcludedPaymentTypes = new List<PreferencePaymentTypeRequest>
    {
        new PreferencePaymentTypeRequest
        {
            Id = "ticket",
        },
    },
    Installments = 12,
};

var request = new PreferenceRequest
{
    // ...
    PaymentMethods = paymentMethods,
};
```
```python
#...
preference_data = {
    "excluded_payment_methods": [
        { "id": "master" }
    ],
    "excluded_payment_types": [
        { "id": "ticket" }
    ],
    "installments": 12
}
#...
```
]]]

------------

----[mla, mlb]----

## Aceite pagamentos com 2 cartões de crédito

![Pago 2 tarjetas](/images/web-payment-checkout/pay_2_tarjetas_br.png)

Você pode ativar a opção de oferecer pagamentos com dois cartões de crédito a partir da conta do Mercado Pago. 

Para ativar essa opção de pagamento, acesse "[Opcões de negócio](https://www.mercadopago.com.br/settings/my-business)" e selecione a opção "Receber pagamentos com 2 cartões de crédito".

![Config pago 2 tarjetas](/images/web-payment-checkout/config_pago_dos_tarjetas_br.gif)

------------

## Aceite pagamentos somente de usuários cadastrados

----[mla, mlb]----
Você pode aceitar pagamentos com a carteira do Mercado Pago apenas de usuários cadastrados, com cartão, saldo disponível e Mercado Crédito.

------------

----[mlm, mlc, mco, mpe, mlu]----
Você pode aceitar pagamentos com a carteira do Mercado Pago apenas de usuários cadastrados, com cartão e saldo disponível.

------------

Isto permite que seus clientes tenham suas informações de conta disponíveis no ato do pagamento, tais como seus cartões e endereços salvos. 

> WARNING
>
> Importante
>
> Ao adicionar esta opção, você não poderá receber pagamentos de usuários que não possuem uma conta Mercado Pago ou Mercado Livre, assim como não poderá receber pagamentos via dinheiro ou transferência.

Para aceitar pagamentos somente de usuários cadastrados, adicione o seguinte atributo as suas preferências:

```json
"purpose": "wallet_purchase"
```

Ao completar a ação, sua preferência teria estrutura similar a do exemplo abaixo:

```json
{
    "purpose": "wallet_purchase",
    "items": [
        {
            "title": "Meu produto",
            "quantity": 1,
            "unit_price": 75.76
        }
    ],
}
```

----[mco]----
## Modifique a taxa de imposto DIAN 

Você pode modificar o valor direcionado para o imposto de Dirección de Impuestos y Aduanas Nacionales (DIAN), aplicado de acordo com o produto ou serviço que você oferece. 

Se o valor não for modificado por você, será aplicado 19% de taxa como padrão.

| Atributo de preferência | Descrição |
| --- | --- |
| `type` | Identificador do imposto. Este método apenas permite valor `IVA`. |
| `value` | Valor do imposto. Permitido o máximo de duas casas decimais. Para itens isentos de imposto, deve ser informado valor zero (`0`). |

Por exemplo:

[[[
```json
"taxes": [
  {
    "type": "IVA",
    "value": 16
  }
]
```
]]]

------------

----[mla, mlb, mco]----

## Altere a data de vencimento de pagamentos em dinheiro

É possível alterar a data de vencimento padrão de pagamentos em dinheiro enviando o campo `date_of_expiration` na requisição de criação da preferência. A data configurada por você deve ser entre 1 dia e 30 dias a partir da data de emissão do pagamento.

Por exemplo:

[[[
```json
===
A data usa o formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
"date_of_expiration": "2020-05-30T23:59:59.000-04:00"
```
]]]

> NOTE
>
> Nota
>
> O prazo de creditação está entre 1 dia e 2 dias úteis de acordo com o meio de pagamento escolhido. Por isso, recomendamos que você defina a data de expiração com no mínimo 3 dias de intervalo para garantir a realização do pagamento.

Revise os [tempos de creditação por meio de pagamento](https://www.mercadopago.com.br/ajuda/_265) para executar a configuração corretamente.

> WARNING
>
> Importante
>
> Caso o pagamento seja realizado depois da data de expiração, o valor será estornado na conta Mercado Pago do pagador.
------------

## Ative o modo binário

Você pode ativar o modo binário se o modelo de negócios exigir que a aprovação do pagamento seja instantânea. Dessa forma, o pagamento só poderá ser aprovado ou recusado. Se o modo binário estiver desativado, o pagamento poderá ficar pendente (no caso de exigir qualquer ação do comprador) ou em processo (se for necessária uma revisão manual).

Para ativá-lo, basta definir o atributo `binary_mode` da preferência de pagamento como `true`:

```json
"binary_mode": true
```

> WARNING
>
> Importante
>
> A ativação do modo binário simplifica a integração com o Wallet Brick, mas pode acarretar no decréscimo da taxa de porcentagem de pagamentos aprovados. Isto porque, para manter o fluxo instantâneo, pagamentos pendentes ou ainda sendo processados serão por padrão automáticamente rejeitados. 

## Defina a vigência das suas preferências

Defina um período de validade para as suas preferências de pagamento a partir dos atributos `expires`, `expiration_date_from` e `expiration_date_to`:

```json
"expires": true,
"expiration_date_from": "2017-02-01T12:00:00.000-04:00",
"expiration_date_to": "2017-02-28T12:00:00.000-04:00"
```

Note que a data deve seguir o formato `ISO 8601: yyyy-MM-dd'T'HH:mm:ssz`.

## Envie descrição na fatura do cartão comprador

Você pode adicionar uma descrição para o seu negócio através do atributo `statement_descriptor` das preferências de pagamento, como mostra o exemplo abaixo: 

```json
"statement_descriptor": "MEUNEGOCIO"
```

Dependendo da bandeira do cartão, a descrição (valor do atributo) aparecerá na fatura do cartão do comprador. 

## Defina uma preferência para diversos itens

Se você precisar criar uma preferência para mais de um item, deverá adicioná-los como uma lista, como mostra o exemplo abaixo:

[[[
```php
<?php
  # Criar um objeto preferência
  $preference = new MercadoPago\Preference();
  # Cria itens na preferência
  $item1 = new MercadoPago\Item
  $item1->title = "Item de Teste 1";
  $item1->quantity = 2;
  $item1->unit_price = 11.96;

  $item2= new MercadoPago\Item
  $item2->title = "Item de Teste 2";
  $item2->quantity = 1;
  $item2->unit_price = 11.96;

  $preference->items = array($item1,$item2);
  # Salvar e postar a preferência
  $preference->save();
?>
```
```node
// Configura sua preferência
var preference = {
  items: [
      { title: 'Meu produto',
      quantity: 1,
      currency_id: '[FAKER][CURRENCY][ACRONYM]',
      unit_price: 75.56 },
	{ title: 'Meu produto 2’,
      quantity: 2,
      currency_id: '[FAKER][CURRENCY][ACRONYM]',
      unit_price: 96.56 }
    ]
};
// Cria um botão de pagamento no seu site
mercadopago.preferences.create(preference)
.then(function(preference){
  // Este valor substituirá o string "$$init_point$$" no seu HTML
  global.init_point = preference.body.init_point;
}).catch(function(error){
  console.log(error);
});
```
```java
// Cria um objeto preferência
PreferenceClient client = new PreferenceClient();
// Cria itens na preferência
PreferenceClient client = new PreferenceClient();

List<PreferenceItemRequest> items = new ArrayList<>();

PreferenceItemRequest item1 =
   PreferenceItemRequest.builder()
       .id("1234")
       .title("Produto 1")
       .quantity(2)
       .currencyId("BRL")
       .unitPrice(new BigDecimal("100"))
       .build();   
PreferenceItemRequest item2 =
   PreferenceItemRequest.builder()
       .id("12")
       .title("Produto 2")
       .quantity(1)
       .currencyId("BRL")
       .unitPrice(new BigDecimal("100"))
       .build();

items.add(item1);
items.add(item2);

PreferenceRequest request = PreferenceRequest.builder().items(items).build();
// Salvar e postar a preferência
client.create(request);
```
```ruby
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')
# Create preference data with items
preference_data = {
  items: [
    {
      title: 'Meu produto 1',
      quantity: 1,
      currency_id: '[FAKER][CURRENCY][ACRONYM]',
      unit_price: 75.56
    },
    {
      title: 'Meu produto 2',
      quantity: 2,
      currency_id: '[FAKER][CURRENCY][ACRONYM]',
      unit_price: 96.56
    }
  ]
}

preference_response = sdk.preference.create(preference_data)
preference = preference_response[:response]
```
```python
# Cria itens na preferência
preference_data = {
    "items": [
        {
            "title": "Mi producto",
            "quantity": 1,
            "unit_price": 75.56
        },
        {
            "title": "Mi producto2",
            "quantity": 2,
            "unit_price": 96.56
        }
    ]
}

# Cria a preferência
preference_response = sdk.preference().create(preference_data)
preference = preference_response["response"]
```
```csharp
// Cria o request com múltiplos itens
var request = new PreferenceRequest
{
    Items = new List<PreferenceItemRequest>
    {
        new PreferenceItemRequest
        {
            Title = "Meu produto 1",
            Quantity = 1,
            CurrencyId = "[FAKER][CURRENCY][ACRONYM]",
            UnitPrice = 75.56m,
        },
        new PreferenceItemRequest
        {
            Title = "Meu produto 2",
            Quantity = 2,
            CurrencyId = "[FAKER][CURRENCY][ACRONYM]",
            UnitPrice = 96.56m,
        },
        // ...
    },
};

// Cria um objeto client
var client = new PreferenceClient();

// Cria a preferência
Preference preference = await client.CreateAsync(request);
```
```curl
curl -X POST \
  'https://api.mercadopago.com/checkout/preferences' \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -H 'Authorization: Bearer PROD_ACCESS_TOKEN' \
  -d '{
	"items": [
	{
		"id_product":1,
		"quantity":1,
		"unit_price": 234.33,
		"titulo":"Meu produto"
	},
	{
		"id_product":2,
		"quantity":2,
		"unit_price": 255.33,
		"titulo":"Meu produto 2"
	}
]
}'
```
]]]

Lembre-se de que o valor total da preferência será a soma do valor do preço unitário de cada item listado.

## Mostre o valor do envio 

Se você já possui o envio estimado pelo seu site, pode definir o valor do mesmo e mostrá-lo separadamente do valor total no momento do pagamento. 

Para configurar tal cenário, adicione o item `shipments` com o valor que quiser cobrar no atributo `cost` e o valor `not_specified` no atributo `mode`:

```json
{
    "shipments":{
        "cost": 1000,
        "mode": "not_specified",
  }
}
```

## Redirecione o comprador para o seu site

No final do processo de pagamento, você tem a opção de redirecionar o comprador para o seu _site_ novamente. Para isso, adicione o atributo `back_urls` e defina, segundo o status do pagamento, a página desejada para redirecionar o seu comprador quando ele clicar no botão de retorno ao site.

Se deseja que o redirecionamento para os pagamentos aprovados seja automático, sem a renderização de um botão de retorno, é preciso adicionar também o atributo `auto_return` com valor `approved`. 

> NOTE
>
> Nota
>
> Tenha em conta que o atributo `auto_return` só funciona para o modo `redirect` e `mobile` do Wallet Brick. O mesmo não funciona no modo modal, já que nesse último o comprador segue no _site_ durante todo o processo de pagamento.

![autoreturn](/images/web-payment-checkout/autoreturn-img-br.png)

| Atributo |	Descrição |
| ------------ 	|	-------- | 
| `auto_return` | Os compradores são redirecionados automaticamente para o  _site_ quando o pagamento é aprovado. O valor padrão é `approved`. |
| `back_urls` | URL de retorno ao site. Possíveis cenários são:<br/><br/>`success`: URL de retorno perante pagamento aprovado.<br/><br/>`pending`: URL de retorno perante pagamento pendente.<br/><br/>`failure`: URL de retorno perante pagamento rejeitado.

Através das `back_urls`, serão retornados os seguintes parâmetros:

| Parâmetro |	Descrição |
| --- | --- | 
| `payment_id` | ID (identificador) do pagamento do Mercado Pago. |
| `status` | Estado do pagamento. Ex.: `approved` para um pagamento aprovado ou `pending` para um pagamento pendente. |
| `external_reference` | Valor enviado no momento da criação da preferência de pagamento. |
| `merchant_order_id` | ID (identificador) da ordem de pagamento gerada no Mercado Pago. |

> NOTE
> 
> Nota
> 
> Alguns dos parâmetros guardam informações de compra apenas se o comprador completou todo o pagamento no Wallet Brick e não abandonou o fluxo antes de retornar ao seu site por meio da `back_urls` de `failure`.

Por exemplo:

[[[
```php
<?php
$preference = new MercadoPago\Preference();
//...
$preference->back_urls = array(
    "success" => "https://www.seu-site/success",
    "failure" => "http://www.seu-site/failure",
    "pending" => "http://www.seu-site/pending"
);
$preference->auto_return = "approved";
// ...
?>
```
```node
var preference = {}
preference = {
  // ...
  "back_urls": {
        "success": "https://www.seu-site/success",
        "failure": "http://www.seu-site/failure",
        "pending": "http://www.seu-site/pending"
    },
    "auto_return": "approved",
  // ...
}
```
```java
PreferenceBackUrlsRequest backUrls =
// ...
PreferenceBackUrlsRequest.builder()
       .success("https://www.seu-site/success")
       .pending("https://www.seu-site/pending")
       .failure("https://www.seu-site/failure")
       .build();

PreferenceRequest request = PreferenceRequest.builder().backUrls(backUrls).build();
// ...
```
```ruby
# ...
preference_data = {
  # ...
  back_urls = {
    success: 'https://www.tu-sitio/success',
    failure: 'https://www.tu-sitio/failure',
    pending: 'https://www.tu-sitio/pendings'
  },
  auto_return: 'approved'
  # ...
}
# ...
```
```csharp
var request = new PreferenceRequest
{
    // ...
    BackUrls = new PreferenceBackUrlsRequest
    {
        Success = "https://www.tu-sitio/success",
        Failure = "http://www.tu-sitio/failure",
        Pending = "http://www.tu-sitio/pendings",
    },
    AutoReturn = "approved",
};
```
```python
preference_data = {
    "back_urls": {
        "success": "https://www.tu-sitio/success",
        "failure": "https://www.tu-sitio/failure",
        "pending": "https://www.tu-sitio/pendings"
    },
    "auto_return": "approved"
}
```
]]]