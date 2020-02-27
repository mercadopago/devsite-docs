---
sites_supported:
  - mlb
  - mla
  - mco
  - mlu
  - mlm
  - mlc
---

# Outras funcionalidades


Você pode adaptar a integração ao seu negócio adicionando atributos na preferência. Há muitos [dados em uma preferência](https://www.mercadopago.com.br/developers/pt/reference/preferences/resource/) que podem ser configurados, mas lembre-se sempre do quê seus negócios precisam.

----[mla, mlb]----
Se você oferece compras de valores altos, por exemplo, você pode aceitar [pagamentos com dois cartões de crédito](https://www.mercadopago.com.br/developers/pt/guides/payments/web-payment-checkout/configurations#bookmark_pagamentos_com_2_cartão_de_crédito) ou tambén, [excluir meios de pagamento](https://www.mercadopago.com.br/developers/pt/guides/payments/web-payment-checkout/configurations#bookmark_atributos_para_a_preferência) que você não quiser aceitar
------------
----[mlm, mlc, mlu, mco]----
Se você oferece compras de valores altos, por exemplo, você pode [excluir meios de pagamento](https://www.mercadopago.com.br/developers/pt/guides/payments/web-payment-checkout/configurations#bookmark_atributos_para_a_preferência) que você não quiser aceitar
------------

Através da preferência, você pode [obter informações de negócio](https://www.mercadopago.com.br/developers/pt/guides/payments/web-payment-checkout/configurations#bookmark_saiba_mais_sobre_seu_negócio). Além disso, você pode mensurar a efetividade das suas publicidades, bem como acompanhá-las integrando um [pixel do Facebook](https://www.mercadopago.com.br/developers/pt/guides/payments/web-payment-checkout/configurations#bookmark_associar_um_pixel_do_facebook) ou [associando seus anúncios do Google](https://www.mercadopago.com.br/developers/pt/guides/payments/web-payment-checkout/configurations#bookmark_associar_uma_tag_do_google_ads).

## Exemplo de uma preferência completa

----[mlm, mla, mlb, mlc, mlu]----

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



Atributo | Descrição
------------ | -------------
_`payment_methods`_ | Classe que descreve os atributos e métodos de meios de pagamento.
_`excluded_payment_methods`_ | Método que exclui por meios de pagamento específicos: Visa, Mastercard o American Express, entre outros.
_`excluded_payment_types`_ | Método que exclui por tipo de meio de pagamento: cartão de crédito ou ticket (boleto ou pagamento em lotérica).
_`installments`_ | Método que define o número máximo de parcelas a oferecer

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
preference = MercadoPago::Preference.new
#...
preference.payment_methods = {
  excluded_payment_methods: [id: "master"],
  excluded_payment_types: [id: "ticket"],
  installments: 12
}
#...
```
```csharp
Preference preference = new Preference();

PaymentMethods paymentmethods = new PaymentMethods();

List<PaymentMethod> excludedPaymentMethod = new List<PaymentMethod>();
excludedPaymentMethod.Add(new PaymentMethod()
  {
    Id = "master"
  });    
paymentmethods.excludedPaymentType = excludedPaymentMethod;

List<PaymentType> ExcludedPaymentType = new List<PaymentType>();
excludedPaymentType.Add(new PaymentType()
  {
    Id = "ticket"
  });
paymentmethods.ExcludedPaymentTypes = excludedPaymentType;
paymentmethods.Installments = 12;
```
]]]

----[mco]----
### IVA diferenciado

Você pode modificar o valor do imposto para a Dirección de Impuestos y Aduanas Nacionales (DIAN) que é aplicado de acordo com o produto ou serviço que você oferece. Se o valor não for diferenciado, será aplicado 19% como padrão.

 Atributo | Descrição
---------| -----------
_`type`_ | Identificador do imposto. Permitido somente os valores IVA e INC.
_`value`_ | Valor do imposto. Permitido o máximo de duas casas decimais. Para itens isentos de imposto,deve ser informado zero.

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
# Cria itens na preferência
item = MercadoPago::Item.new({
  title:        "Meu produto",
  quantity:     1,
  unit_price:   75.56
})
item2 = MercadoPago::Item.new({
  title:        "Meu produto2",
  quantity:     2,
  unit_price:   96.56
})
# Cria um objeto preferência
preference = MercadoPago::Preference.new({
  items: [item, item2]
})
preference.save()
```
```csharp
// Cria um objeto preferência
Preference preference = new Preference();

// Cria itens na preferência
reference.Items.Add(
  new Item()
  {
    Title = "Meu produto",
    Quantity = 1,
    CurrencyId = CurrencyId.[FAKER][CURRENCY][ACRONYM],
    UnitPrice = (decimal)75.56
  },
  new Item()
  {
    Title = "Meu produto 2",
    Quantity = 2,
    CurrencyId = CurrencyId.[FAKER][CURRENCY][ACRONYM],
    UnitPrice = (decimal)96.56
  }
);
preference.Save()
```
```curl
curl -X POST \
  'https://api.mercadolibre.com/checkout/preferences?access_token="PROD_ACCESS_TOKEN"' \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
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


## Otimize a conversão dos seus anúncios

Sabemos que é importante maximizar a eficácia dos seus anúncios. Por isto, oferecemos a possibilidade de integrar o Checkout Mercado Pago com as plataformas do Facebook Ads e Google Ads para associar pagamentos às suas campanhas.

> NOTE
>
> Nota
>
> Só serão associados os pagamentos aprovados instantaneamente com cartões de crédito ou débito, dinheiro no Mercado Pago ou com Mercado Créditos.

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
List<Track> tracks = new List<Track>();
  // Associar seu pixel do Facebook
tracks.Add(
    new Track
    {
        Type = "facebook_ad",
        Values = new JObject
        {
            { "pixel_id", "PIXEL_ID" }
        }
    });

MercadoPago.Resources.Preference preference = new MercadoPago.Resources.Preference
{
    // ...
    Tracks = tracks
};

preference.Save();
```
```curl
===
Adicione o código na preferência e substitua o valor pixel_id pelo seu identificador.
===

curl -X POST \
  'https://api.mercadolibre.com/checkout/preferences?access_token="PROD_ACCESS_TOKEN"' \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
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

Ao configurar, quando um pagamento é aprovado por meio do seu Checkout Mercado Pago, você verá um evento `Purchase`associado ao pixel especificado.

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
List<Track> tracks = new List<Track>();
  // Associar sua tag do Google ads
tracks.Add(
    new Track
    {
        Type = "google_ad",
        Values = new JObject
        {
            { "conversion_id", "CONVERSION_ID" },
            { "conversion_label", "CONVERSION_LABEL" }
        }
    });

MercadoPago.Resources.Preference preference = new MercadoPago.Resources.Preference
{
    ...
    Tracks = tracks
};

preference.Save();
```
```curl
===
Adicione o código na preferência e substitua os valores CONVERSION\_ID e CONVERSION\_LABEL pelos dados da sua tag.
===
curl -X POST \
  'https://api.mercadolibre.com/checkout/preferences?access_token="PROD_ACCESS_TOKEN"' \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
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

Desta forma, quando um pagamento é aprovado por meio do seu Checkout Mercado Pago, será associada uma conversão à tag configurada.

> NOTE
>
> Nota
>
> Por enquanto, só é possível configurar uma tag. Para mais informação sobre as tags de acompanhamento das conversões do Google Ads, visite o [site oficial do Google](https://support.google.com/google-ads?hl=es-419#topic=7456157).


## Saiba mais sobre seu negócio

Nossos [Parceiros](https://partners.mercadopago.com/) poderão obter métricas de negócio. Utilize `headers` na sua preferência de pagamento agregando o código de identificação para o caso que corresponda. Não é obrigatório completar os três campos mencionados.

Header | Tipo de código | Identificadores
------ | ---------------| ---------
`x-integrator-id` | Integrador | Para programadores ou agências que realizam a integração.
`x-platform-id` | Plataforma | Para as plataformas ou módulos que oferecem Mecado Pago em suas soluções.
`x-corporation-id` | Corporações | Para contas associadas a uma conta vendedor ou grupo econômico.
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
$mp.set_platform_id("PLATFORM_ID")
$mp.set_integrator_id("INTERATOR_ID")
$mp.set_corporation_id("CORPORATION_ID")
```
```csharp
===
Adicione os códigos de identificação e substitua os valores que quiser: CORPORATION\_ID, INTEGRATOR\_ID y PLATFORM_ID.
===
MercadoPago.SDK.PlatformId    = "PLATFORM_ID";
MercadoPago.SDK.IntegratorId  = "INTEGRATOR_ID";
MercadoPago.SDK.CorporationId = "CORPORATION_ID";
```
```curl
===
Adicione os códigos de identificação e substitua os valores que quiser: CORPORATION\_ID, INTEGRATOR\_ID y PLATFORM_ID.
===
curl -X POST \
'https://api.mercadolibre.com/checkout/preferences?access_token="PROD_ACCESS_TOKEN"
' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'x-corporation-id: CORPORATION_ID \
  -H 'x-integrator-id: INTEGRATOR_ID \
  -H 'x-platform-id: PLATFORM_ID \
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

Você pode ativar a opção de oferecer pagamento com dois cartões de crédito da conta do Mercado Pago. Para ativar a opção de pagamento, acesse as <a href="https://www.mercadopago.com.ar/settings/my-business" target="_blank">opcões de negócio</a> e selecione a opção _Receber pagamentos com 2 cartões de crédito_.


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
> [Integração avançada](http://www.mercadopago.com.br/developers/pt/guides/payments/web-payment-checkout/advanced-integration/)

> RIGHT_BUTTON_RECOMMENDED_PT
>
> Customizações
>
> Adapte o estilo da sua marca na experiência de compra.
>
> [Customizações](http://www.mercadopago.com.br/developers/pt/guides/payments/web-payment-checkout/customizations/)
