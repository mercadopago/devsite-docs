---
sites_supported:
  - mlb
  - mla
---

# Outras funcionalidades

> INDEX
>
> Nesta página
>
>
>
> [Exemplo de uma preferência completa](https://www.mercadopago.com.br/developers/pt/guides/payments/web-payment-checkout/configurations#bookmark_ejemplo_de_una_preferencia_completa)
>
> [Atributos para a preferência](https://www.mercadopago.com.br/developers/pt/guides/payments/web-payment-checkout/configurations#bookmark_atributos_para_la_preferencia)

VocÇê pode adaptar a integração ao seu negócio adicionando atributos na preferência. Há muitos [dados em uma preferência](https://www.mercadopago.com.br/developers/pt/reference/preferences/resource/) que podem ser configurados, mas lembre-se sempre do quê seus negócios precisam.

Se você oferece compras de valores altos, por exemplo, você pode aceitar [pagamentos com dois cartões de crédito](https://www.mercadopago.com.br/developers/pt/guides/payments/web-payment-checkout/configurations#bookmark_pagos_con_dos_tarjetas_de_crédito) ou tambén, [excluir meios de pagamento](https://www.mercadopago.com.br/developers/pt/guides/payments/web-payment-checkout/configurations#bookmark_atributos_para_la_preferencia) que você não quiser aceitar

## Exemplo de uma preferência completa

```json
{
    "items": [
        {
            "id": "item-ID-1234",
            "title": "Mi producto",
            "currency_id": "ARS",
            "picture_url": "https://www.mercadopago.com/org-img/MP3/home/logomp3.gif",
            "description": "Descripción del Item",
            "category_id": "art",
            "quantity": 1,
            "unit_price": 75.76
        }
    ],
    "payer": {
        "name": "Juan",
        "surname": "Lopez",
        "email": "user@email.com",
        "phone": {
            "area_code": "11",
            "number": "4444-4444"
        },
        "identification": {
            "type": "DNI",
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
        "installments": 12
    },
    "notification_url": "https://www.your-site.com/ipn",
    "external_reference": "Reference_1234",
    "expires": true,
    "expiration_date_from": "2016-02-01T12:00:00.000-04:00",
    "expiration_date_to": "2016-02-28T12:00:00.000-04:00"
}
```

## Atributos para a preferência

### Definição de meios de pagamento

Por padrão, todos os meios de pagamento são oferecidos. Se você quiser excluir algum deles, pode fazer isso pela preferência de pagamento.
Você também pode definir um meio de pagamento para que apareça por padrão ou definir o número máximo de parcelas a oferecer.



Atributo | Descrição
------------ | -------------
_`payment_methods`_ | Classe que descreve os atributos e métodos de meios de pagamento.
_`excluded_payment_methods`_ | Método que exclui por meios de pagamento específicos: Visa, Mastercard o American Express, entre outros.
_`excluded_payment_types`_ | Método que exclui por tipo de meio de pagamento: boleto, cartão de crédito ou na lotérica.
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

## Modo binário

PVocê pode ativar o modo binário se o modelo de negócios exigir que a aprovação do pagamento seja instantânea. Dessa forma, o pagamento só pode ser aprovado ou recusado.

Se o modo binário não estiver ativado, o pagamento pode ficar pendente (no caso de exigir qualquer ação do comprador) ou em processo (se for necessária uma revisão manual).

Para ativá-lo, basta definir o atributo _`binary_mode`_ da preferência de pagamento como `true`:


```json
"binary_mode": true
```

## Vigência de preferências

Se quiser ativar o pagamento de uma preferência com uma determinada duração, poderá ativar um período de validade ou concluir diretamente com os seguintes atributos:

```json
"expires": true,
"expiration_date_from": "2017-02-01T12:00:00.000-04:00",
"expiration_date_to": "2017-02-28T12:00:00.000-04:00"
```

## Sponsor ID

O atributo `sponsor_id` é um identificador do desenvolvedor ou empresa de software que faz a integração do  Web Checkout, este dado é visível na preferência e no pagamento.


```json
"sponsor_id": 123456789
```

## Pagamentos com cartão de crédito

![Pago 2 tarjetas](/images/web-payment-checkout/pay_2_tarjetas.png)

Você pode ativar a opção de oferecer pagamento com dois cartões de crédito da conta do Mercado Pago. Para ativar a opção de pagamento, acesse as <a href="https://www.mercadopago.com.ar/settings/my-business" target="_blank"> e selecione a opção _Receber pagamentos com 2 cartões de crédito._


![Config pago 2 tarjetas](/images/web-payment-checkout/config_pago_dos_tarjetas.gif)


## Diversos itens

Se você precisar criar uma preferência para mais de um item, só deverá adicioná-los como uma lista dentro _dos items._
Lembre-se de que o valor total da preferência será a soma do valor do preço unitário de cada item.


[[[
```php
<?php
  # Crear un objeto preferencia
  $preference = new MercadoPago\Preference();
  # Crea ítems en la preferencia
  $item1 = new MercadoPago\Item
  $item1->title = "Item de Prueba 1";
  $item1->quantity = 2;
  $item1->unit_price = 11.96;

  $item2= new MercadoPago\Item
  $item2->title = "Item de Prueba 2";
  $item2->quantity = 1;
  $item2->unit_price = 11.96;

  $preference->items = array($item1,$item2);
  # Guardar y postear la preferencia
  $preference->save();
?>
```
```node
// Configura tu preferencia
var preference = {
  items: [
      { title: 'Mi producto',
      quantity: 1,
      currency_id: 'ARS',
      unit_price: 75.56 },
	{ title: 'Mi producto 2’,
      quantity: 2,
      currency_id: 'ARS',
      unit_price: 96.56 }
    ]
};
// Crea un botón de pago en tu sitio
mercadopago.preferences.create(preference)
.then(function(preference){
  // Este valor reemplazará el string "$$init_point$$" en tu HTML
  global.init_point = preference.body.init_point;
}).catch(function(error){
  console.log(error);
});
```
```java
// Crea un objeto preferencia
Preference preference = new Preference();
// Crea ítems en la preferencia
Item item1 = new Item();
item1.setId("1234")
    .setTitle("Producto 1")
    .setQuantity(2)
    .setCurrencyId("ARS")
    .setUnitPrice((float) 75.56);

Item item2 = new Item();
item2.setId("12")
    .setTitle("Producto 2")
    .setQuantity(1)
    .setCurrencyId("ARS")
    .setUnitPrice((float) 75.56);

preference.appendItem(item1, item2);
// Guardar y postear la preferencia
preference.save();
```
```ruby
// Crea ítems en la preferencia
item = MercadoPago::Item.new({
  title:        "Mi producto",
  quantity:     1,
  unit_price:   75.56
})
item2 = MercadoPago::Item.new({
  title:        "Mi producto2”,
  quantity:     2,
  unit_price:   96.56
})
// Crea un objeto preferencia
preference = MercadoPago::Preference.new({
  items: [item, item2]
})
preference.save()
```
```csharp
// Crea un objeto preferencia
Preference preference = new Preference();

// Crea ítems en la preferencia
reference.Items.Add(
  new Item()
  {
    Title = "Mi producto",
    Quantity = 1,
    CurrencyId = CurrencyId.ARS,
    UnitPrice = (decimal)75.56
  },
  new Item()
  {
    Title = "Mi producto2”,
    Quantity = 2,
    CurrencyId = CurrencyId.ARS,
    UnitPrice = (decimal)96.56
  }
);
preference.Save()"
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
		"titulo":"Mi producto"
	},
	{
		"id_product":2,
		"quantity":2,
		"unit_price": 255.33,
		"titulo":"Mi producto 2"
	}
]
}'
```
]]]

### Prossimos pasos

<div>
<a href="http://www.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/advanced-integration/" style="text-decoration:none;color:inherit">       
<blockquote class="next-step-card next-step-card-left">
<p class="card-note-title">Integração avançada<span class="card-status-tag card-status-tag-recommended">RECOMENDADO</span></p>
 <p>Otimize sua integração e melhore o gerenciamento de suas vendas.</p>
</blockquote>
</a>   
<a href="http://www.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/customizations/" style="text-decoration:none;color:inherit">
<blockquote class="next-step-card next-step-card-right">
<p class="card-note-title">Customizações</p>
 <p>Adapte o estilo da sua marca na experiência de compra.</p>
</blockquote>
</a>
</div>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
