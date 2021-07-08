# Outras funcionalidades


Você pode adaptar a integração ao seu negócio adicionando atributos na preferência. Há muitos [dados em uma preferência](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/preferences/_checkout_preferences/post) que podem ser configurados, mas lembre-se sempre do quê seus negócios precisam.

----[mla, mlb]----
Se você oferece compras de valores altos, por exemplo, você pode aceitar [pagamentos com dois cartões de crédito](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-pro/configurations#bookmark_pagamentos_com_2_cartão_de_crédito) ou tambén, [excluir meios de pagamento](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-pro/configurations#bookmark_atributos_para_a_preferência) que você não quiser aceitar
------------
----[mlm, mlc, mlu, mco, mpe]----
Se você oferece compras de valores altos, por exemplo, você pode [excluir meios de pagamento](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-pro/configurations#bookmark_atributos_para_a_preferência) que você não quiser aceitar
------------

Através da preferência, você pode [obter informações de negócio](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-pro/configurations#bookmark_saiba_mais_sobre_seu_negócio). Além disso, você pode mensurar a efetividade das suas publicidades, bem como acompanhá-las integrando um [pixel do Facebook](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-pro/configurations#bookmark_associar_um_pixel_do_facebook) ou [associando seus anúncios do Google](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-pro/configurations#bookmark_associar_uma_tag_do_google_ads).

## Exemplo de uma preferência completa

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

## Atributos para a preferência

### Definição de meios de pagamento

Por padrão, todos os meios de pagamento são oferecidos. Se você quiser excluir algum deles, pode fazer isso pela preferência de pagamento.
Você também pode definir um meio de pagamento para que apareça por padrão ou definir o número máximo de parcelas a oferecer.

| Atributo | Descrição |
| --- | --- |
| `payment_methods` | Classe que descreve os atributos e métodos de meios de pagamento. |
| `excluded_payment_methods` | Método que exclui por [meios de pagamento](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/resources/localization/payment-methods#bookmark_meios_de_pagamento_por_país) específicos: Visa, Mastercard o American Express, entre outros. |
| `excluded_payment_types` | Método que exclui por tipo de [meios de pagamento](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/resources/localization/payment-methods#bookmark_meios_de_pagamento_por_país): cartão de crédito ou ticket (boleto ou pagamento em lotérica). |
| `installments` | Método que define o número máximo de parcelas a oferecer. |
| `purpose` | Quando for indicado o valor "wallet_purchase", o Checkout aceitará pagamentos exclusivamente de usuários cadastrados no Mercado Pago, com cartão e saldo em conta. |

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
Preference preference = new Preference();
//...
PaymentMethods paymentMethods = new PaymentMethods();
paymentMethods.setExcludedPaymentMethods("master", "amex");
paymentMethods.setExcludedPaymentTypes("ticket");
paymentMethods.setInstallments(12);

preference.setPaymentMethods(paymentMethods);
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

----[mco]----
### IVA diferenciado

Você pode modificar o valor do imposto para a Dirección de Impuestos y Aduanas Nacionales (DIAN) que é aplicado de acordo com o produto ou serviço que você oferece. Se o valor não for diferenciado, será aplicado 19% como padrão.

| Atributo | Descrição |
| --- | --- |
| `type` | Identificador do imposto. Apenas é permitido o IVA. |
| `value` | Valor do imposto. Permitido o máximo de duas casas decimais. Para itens isentos de imposto,deve ser informado zero. |

[[[
```json
===
É usado o atributo taxes para definir o valor correspondente
===
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

### Data de expiração de meios de pagamento em dinheiro

Opcionalmente é possível alterar a data de vencimento por padrão para pagamentos em dinheiro enviando o campo `date_of_expiration` na requisição de criação da preferência. A data configurada deve estar entre 1 e 30 dias a partir da data de emissão.

[[[
```json
===
A data usa o formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
"date_of_expiration": "2020-05-30T23:59:59.000-04:00"
```
]]]

O prazo de creditação está entre 1 e 2 dias úteis de acordo com o meio de pagamento. Por isso recomendamos que você defina a data de expiração com no mínimo 3 dias para garantir que o pagamento seja feito.

Revise os [tempos de creditação por meio de pagamento](https://www.mercadopago[FAKER][URL][DOMAIN]/ajuda/_265) para executar a configuração.

> WARNING
>
> Importante
>
> Caso o pagamento seja realizado depois da data de expiração, o valor será estornado na conta do Mercado Pago do pagador.
------------

### Modo binário

Você pode ativar o modo binário se o modelo de negócios exigir que a aprovação do pagamento seja instantânea. Dessa forma, o pagamento só pode ser aprovado ou recusado.

Se o modo binário não estiver ativado, o pagamento pode ficar pendente (no caso de exigir qualquer ação do comprador) ou em processo (se for necessária uma revisão manual).

Para ativá-lo, basta definir o atributo _`binary_mode`_ da preferência de pagamento como `true`:


```json
"binary_mode": true
```

### Vigência de preferências

Se quiser ativar o pagamento de uma preferência com uma determinada duração, poderá ativar um período de validade ou concluir diretamente com os seguintes atributos:

```json
"expires": true,
"expiration_date_from": "2017-02-01T12:00:00.000-04:00",
"expiration_date_to": "2017-02-28T12:00:00.000-04:00"
```

### Descrição no resumo do cartão

Pode enviar o nome da sua empresa no atributo _`statement_descriptor`_ desta forma no resumo do seu cartão de comprador aparece o nome da sua empresa e desta forma o comprador sabe onde efectuou a compra.

```json
"statement_descriptor": "MEUNEGOCIO"
```

> NOTE
>
> Nota
>
> Se o valor do atributo é mostrado no resumo do cartão do seu comprador dependerá da marca do cartão utilizado.

### Diversos itens

Se você precisar criar uma preferência para mais de um item, só deverá adicioná-los como uma lista dentro _dos items._
Lembre-se de que o valor total da preferência será a soma do valor do preço unitário de cada item.


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
Preference preference = new Preference();
// Cria itens na preferência
Item item1 = new Item();
item1.setId("1234")
    .setTitle("Produto 1")
    .setQuantity(2)
    .setCurrencyId("[FAKER][CURRENCY][ACRONYM]")
    .setUnitPrice((float) 75.56);

Item item2 = new Item();
item2.setId("12")
    .setTitle("Produto 2")
    .setQuantity(1)
    .setCurrencyId("[FAKER][CURRENCY][ACRONYM]")
    .setUnitPrice((float) 75.56);

preference.appendItem(item1, item2);
// Salvar e postar a preferência
preference.save();
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

## Aceitar pagamentos somente de usuários cadastrados

----[mla, mlb]----
Você pode aceitar pagamentos com a carteira do Mercado Pago exclusivamente de usuários cadastrados, com cartão, saldo disponível e Mercado Crédito.
------------
----[mlm, mlc, mco, mpe, mlu]----
Você pode aceitar pagamentos com a carteira do Mercado Pago exclusivamente de usuários cadastrados, com cartão e saldo disponível.
------------

Isto permite que seus clientes tenham suas informações de conta disponíveis no ato, tais como seus cartões e endereços salvos. 

> WARNING
>
> Importante
>
> Observe que, ao adicionar esta opção, você não poderá receber pagamentos de usuários que não possuem uma conta Mercado Pago ou Mercado Livre e não poderá receber via dinheiro ou transferência.

Para aceitar pagamentos somente de usuários cadastrados, adicione o seguinte atributo às suas preferências:

```json
"purpose": "wallet_purchase"
```

Ao fazer isso, sua preferência seria a seguinte:

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

## Valor do envio

Se você já possui o envio estimado pelo seu site, pode definir o valor e mostrá-lo separadamente do total ao oferecer o pagamento. 

Para configurá-lo, adicione o item `shipments` com o valor que quiser cobrar no atributo `cost` e o valor `not_specified` no atributo `mode`.

```json
{
    "shipments":{
        "cost": 1000,
        "mode": "not_specified",
  }
}
```

## Otimize a conversão dos seus anúncios

Sabemos que é importante maximizar a eficácia dos seus anúncios. Por isto, oferecemos a possibilidade de integrar o Checkout Pro com as plataformas do Facebook Ads e Google Ads para associar pagamentos às suas campanhas.

----[mla, mlb]----
> NOTE
>
> Nota
>
> Só serão associados os pagamentos aprovados instantaneamente com cartões de crédito ou débito, dinheiro no Mercado Pago ou com Mercado Créditos.
------------

----[mlm, mlc, mco, mpe, mlu]----
> NOTE
>
> Nota
>
> Só serão associados os pagamentos aprovados instantaneamente com cartões de crédito ou débito, ou com dinheiro no Mercado Pago.
------------

### Associar um pixel do Facebook

Ao criar uma preferência, associe o identificador correspondente a seu pixel do Facebook da seguinte maneira:

[[[
```php
===
Adicione o código na preferência e substitua o valor pixel_id pelo seu identificador.
===
<?php
  // Criar um objeto preferencia
  $preference = new MercadoPago\Preference();

  // Associar seu pixel do Facebook
  $preference->tracks = array(
    array(
      'type' => 'facebook_ad',
      'values'=> array(
        'pixel_id' => 'PIXEL_ID'
      )
    )
  );

  // ...
  // Salvar e postar a preferencia
  $preference->save();
?>
```
```node
===
Adicione o código na preferência e substitua o valor pixel_id pelo seu identificador.
===
  // Criar um objeto preferencia
var preference = {

  // Asocia tu píxel de Facebook
  tracks: [
        {
          type: "facebook_ad",
          values: {
            "pixel_id": 'PIXEL_ID'
          }
        }
      ]
  //...
};
```
```java
===
Adicione o código na preferência e substitua o valor pixel_id pelo seu identificador.
===
  // Criar um objeto preferencia
Preference preference = new Preference();

  // Associar seu pixel do Facebook
Track trackFacebook = new Track()
                .setType("facebook_ad")
                .setValues(new TrackValues()
                        .setPixelId("PIXEL_ID")
                );

Preference preference = new Preference()
        .appendTrack(trackFacebook);

  // Salvar e postar a preferencia
preference.save();
```
```csharp
===
Adicione o código na preferência e substitua o valor pixel_id pelo seu identificador.
===
// Associe seu pixel do Facebook
var tracks = new List<PreferenceTrackRequest>
{
    new PreferenceTrackRequest
    {
        Type = "facebook_ad",
        Values = new PreferenceTrackValuesRequest
        {
            PixelId = "PIXEL_ID",
        },
    },
};

var request = new PreferenceRequest
{
    // ...
    Tracks = tracks,
};

var client = new PreferenceClient();
Preference preference = await client.CreateAsync(request);
```
```python
===
Adicione o código na preferência e substitua o valor pixel_id pelo seu identificador.
===
# Associar seu pixel do Facebook
preference_data = {
    # ...
    "tracks": [
        {
            "type": "facebook_ad",
            "values": {
                "pixel_id": "PIXEL_ID"
            }
        }
    ]
}

preference_response = sdk.preference().create(preference_data)
preference = preference_response["response"]
```
```curl
===
Adicione o código na preferência e substitua o valor pixel_id pelo seu identificador.
===

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
            "titulo":"Mi producto"
        }
    ],
    "tracks": [
        {
            "type": "facebook_ad",
            "values": {
                "pixel_id": "PIXEL_ID"
            }
        }
    ]
}'
```
]]]

Ao configurar, quando um pagamento é aprovado por meio do seu Checkout Pro, você verá um evento `Purchase`associado ao pixel especificado.

> NOTE
>
> Nota
>
> Por enquanto, só é possível configurar um pixel. Teste o funcionamento da sua integração utilizando a extensão do Chrome Facebook Pixel Helper. Para mais informação, visite o [site oficial do Facebook](https://www.facebook.com/business/help/742478679120153?id=1205376682832142).


### Associar uma tag do Google Ads

Ao criar uma preferência, você pode associar uma tag para acompanhamento das conversões do Google Ads da seguinte maneira:

[[[
```php
===
Adicione o código na preferência e substitua os valores CONVERSION\_ID e CONVERSION\_LABEL pelos dados da sua tag.
===

<?php
  // Criar um objeto preferencia
  $preference = new MercadoPago\Preference();
 
  // Associar sua tag do Google ads
  $preference->tracks = array(
    array(
        'type' => 'google_ad',
        'values' => array(
          'conversion_id' => 'CONVERSION_ID',
          'conversion_label' => 'CONVERSION_LABEL'
        )
    )
  );

  ...
  // Salvar e postar a preferencia
  $preference->save();
?>
```
```node
===
Adicione o código na preferência e substitua os valores CONVERSION\_ID e CONVERSION\_LABEL pelos dados da sua tag.
===
  // Criar um objeto preferencia
var preference = {
 
  // Associar sua tag do Google ads
  tracks: [
        {
            type: "google_ad",
            values: {
              conversion_id: "CONVERSION_ID",
              conversion_label: "CONVERSION_LABEL"
            } 
        }
      ]
  ...
};
```
```java
===
Adicione o código na preferência e substitua os valores CONVERSION\_ID e CONVERSION\_LABEL pelos dados da sua tag.
===
  // Criar um objeto preferencia
Preference preference = new Preference();

  // Associar sua tag do Google ads
Track trackGoogle = new Track()
                .setType("google_ad")
                .setValues(new TrackValues()
                        .setConversionId("CONVERSION_ID")
                        .setConversionLabel("CONVERSION_LABEL")
                );


Preference preference = new Preference()
        .appendTrack(Google);

  // Salvar e postar a preferencia
preference.save();
```
```csharp
===
Adicione o código na preferência e substitua os valores CONVERSION\_ID e CONVERSION\_LABEL pelos dados da sua tag.
===
// Associe sua tag do Google ads
var tracks = new List<PreferenceTrackRequest>
{
    new PreferenceTrackRequest
    {
        Type = "facebook_ad",
        Values = new PreferenceTrackValuesRequest
        {
            ConversionId = "CONVERSION_ID",
            ConversionLabel = "CONVERSION_LABEL",
        },
    },
};

var request = new PreferenceRequest
{
    // ...
    Tracks = tracks,
};

var client = new PreferenceClient();
Preference preference = await client.CreateAsync(request);
```
```python
===
Adicione o código na preferência e substitua os valores CONVERSION_ID e CONVERSION_LABEL pelos dados da sua tag.
===
# Associar sua tag do Google ads
preference_data = {
    # ...
    "tracks": [
        {
            "type": "google_ad",
            "values": {
                "conversion_id": "CONVERSION_ID",
                "conversion_label": "CONVERSION_LABEL"
            }
        }
    ]
}

preference_response = sdk.preference().create(preference_data)
preference = preference_response["response"]
```
```curl
===
Adicione o código na preferência e substitua os valores CONVERSION\_ID e CONVERSION\_LABEL pelos dados da sua tag.
===
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
            "titulo":"Mi producto"
        }
    ],
    "tracks": [
        {
            "type": "google_ad",
            "values": {
                "conversion_id", "CONVERSION_ID",
                "conversion_label", "CONVERSION_LABEL"
            }
        }
    ]
}'
```
]]]

Desta forma, quando um pagamento é aprovado por meio do seu Checkout Pro, será associada uma conversão à tag configurada.

> NOTE
>
> Nota
>
> Por enquanto, só é possível configurar uma tag. Para mais informação sobre as tags de acompanhamento das conversões do Google Ads, visite o [site oficial do Google](https://support.google.com/google-ads?hl=es-419#topic=7456157).


## Saiba mais sobre seu negócio

Nossos [Partners](https://partners.mercadopago.com/) poderão obter métricas de negócio. Utilize `headers` na sua preferência de pagamento agregando o código de identificação para o caso que corresponda. Não é obrigatório completar os três campos mencionados.

| Header | Tipo de código | Identificadores |
| --- | --- | --- |
| `x-integrator-id` | Integrador | Para programadores ou agências que realizam a integração. |
| `x-platform-id` | Plataforma | Para as plataformas ou módulos que oferecem Mecado Pago em suas soluções. |
| `x-corporation-id` | Corporações | Para contas associadas a uma conta vendedor ou grupo econômico. |

> Se você precisa do seu `integrator_id` ou `platform_id`, [solicite seu código já](https://docs.google.com/forms/d/19gEyBhtdFuw_W7ycp464bwcmzYKVA-yWGyRzZfjt6vk/edit). 

[[[
```php
===
Adicione os códigos de identificação e substitua os valores que quiser: CORPORATION\_ID, INTEGRATOR\_ID y PLATFORM_ID.
===
MercadoPago\SDK::setPlatformId("PLATFORM_ID");
MercadoPago\SDK::setIntegratorId("INTEGRATOR_ID");
MercadoPago\SDK::setCorporationId("CORPORATION_ID");
```
```node
===
Adicione os códigos de identificação e substitua os valores que quiser: CORPORATION\_ID, INTEGRATOR\_ID y PLATFORM_ID.
===
mercadopago.configure({
    platform_id: 'PLATFORM_ID',
    integrator_id: 'INTEGRATOR_ID',
    corporation_id: 'CORPORATION_ID'
});
```
```java
===
Adicione os códigos de identificação e substitua os valores que quiser: CORPORATION\_ID, INTEGRATOR\_ID y PLATFORM_ID.
===
MercadoPago.SDK.setPlatformId("PLATFORM_ID");
MercadoPago.SDK.setIntegratorId("INTEGRATOR_ID");
MercadoPago.SDK.setCorporationId("CORPORATION_ID");
```
```ruby
===
Adicione os códigos de identificação e substitua os valores que quiser: CORPORATION\_ID, INTEGRATOR\_ID y PLATFORM_ID.
===
request_options = Mercadopago::RequestOptions.new()
request_options.platform_id = 'PLATFORM_ID'
request_options.integrator_id = 'INTEGRATOR_ID'
request_options.corporation_id = 'CORPORATION_ID'

sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN', request_options: request_options)
```
```csharp
===
Adicione os códigos de identificação e substitua os valores que quiser: CORPORATION\_ID, INTEGRATOR\_ID y PLATFORM_ID.
===
MercadoPagoConfig.PlatformId    = "PLATFORM_ID";
MercadoPagoConfig.IntegratorId  = "INTEGRATOR_ID";
MercadoPagoConfig.CorporationId = "CORPORATION_ID";
```
```python
===
Adicione os códigos de identificação e substitua os valores que quiser: CORPORATION_ID, INTEGRATOR_ID e PLATFORM_ID.
===
import mercadopago
from mercadopago.config import RequestOptions

request_options = RequestOptions(
    corporation_id="CORPORATION_ID",
    integrator_id="INTEGRATOR_ID",
    platform_id="PLATFORM_ID"
)
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN", request_options=request_options)
```
```curl
===
Adicione os códigos de identificação e substitua os valores que quiser: CORPORATION\_ID, INTEGRATOR\_ID y PLATFORM_ID.
===
curl -X POST \
'https://api.mercadopago.com/checkout/preferences' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'x-corporation-id: CORPORATION_ID \
  -H 'x-integrator-id: INTEGRATOR_ID \
  -H 'x-platform-id: PLATFORM_ID \
  -H 'Authorization: Bearer PROD_ACCESS_TOKEN' \
  -d '{
    "items": [
       ...
       
    ],
    ...
}'
```
]]]


----[mla, mlb]----

## Pagamentos com 2 cartões de crédito

![Pago 2 tarjetas](/images/web-payment-checkout/pay_2_tarjetas_br.png)

Você pode ativar a opção de oferecer pagamento com dois cartões de crédito da conta do Mercado Pago. Para ativar a opção de pagamento, acesse as [opcões de negócio](https://www.mercadopago.com.ar/settings/my-business) e selecione a opção _Receber pagamentos com 2 cartões de crédito_.


![Config pago 2 tarjetas](/images/web-payment-checkout/config_pago_dos_tarjetas_br.gif)

------------
---
### Próximos passos

> LEFT_BUTTON_REQUIRED_PT
>
> Integração avançada
>
> Otimize sua integração e melhore o gerenciamento de suas vendas.
>
> [Integração avançada](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-pro/advanced-integration)

> RIGHT_BUTTON_RECOMMENDED_PT
>
> Customizações
>
> Adapte o estilo da sua marca na experiência de compra.
>
> [Customizações](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-pro/customizations)
