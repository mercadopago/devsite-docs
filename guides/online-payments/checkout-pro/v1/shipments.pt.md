---
sites_supported:
  - mla
  - mlb
  - mco
  - mlu
  - mlc
  - mlm
indexable: false
---

# Mercado Envios

> WARNING
>
> Nota
>
> Esta documentação é referente à versão anterior do Checkout Pro.
>
> Lembre-se de que há suporte ativo e novas funcionalidades somente para a [nova versão do Checkout Pro](https://www.mercadopago.com.br/developers/pt/guides/online-payments/checkout-pro/introduction/).

Implemente a logística do seu negócio utilizando o **Mercado Envios**.

* Entregamos tudo pronto para você: Receba o pagamento do produto e do envio na mesma operação.
* Você só precisa imprimir a etiqueta do Mercado Envios e enviar o pacote pelos correios!
* Oferecemos proteção em caso de estornos ou extravios nos correios, sem exigir a apresentação de qualquer documentação.

## Como funciona

A documentação a seguir lhe permitirá oferecer uma opção de envio no Checkout Pro, além do cliente poder pagar o custo do envio junto com o pagamento do produto.

Recomendamos integrar a calculadora de custos de frete em seu checkout.

## Como implementar

### Passo 1: Ative sua conta para utilizar o Mercado Envios
[Ative sua conta](http://shipping.mercadopago.com.ar/optin/doOptin?execution=e1s1&goUrl=&buttonText=) adicionando seu endereço. Este será o endereço de entrega e será utilizado para calcular o custo do frete.

### Passo 2: Adicione o Mercado Envios em seu checkout
Indique as dimensões e o peso de seus produtos na preferência de pagamentos.

[[[
```php
<?php
  $shipments = new MercadoPago\Shipments();
  $shipments->mode = "me2";
  $shipments->dimensions = "30x30x30,500";
  $shipments->receiver_address=array(
		"zip_code" => "5700",
		"street_number" => 123,
		"street_name" => "Street",
		"floor" => 4,
		"apartment" => "C"
  );
?>
```
```java
Shipments shipments = new Shipments();
shipments.setMode(Shipments.ShipmentMode.me2)
    .setDimensions("30x30x30,500")
    .setReceiverAddress(new AddressReceiver("5700", 123, "street", 4, "C"));
```
```node
var shipments = {
  "mode": "me2",
  "dimensions": "30x30x30,500",
	"receiver_address": {
		"zip_code": "5700",
		"street_number": 123,
		"street_name": "Street",
		"floor": 4,
		"apartment": "C"
	}
};
```
```ruby
shipment = MercadoPago::Shipment.new
shipment.mode = me2
shipment.dimensions = "30x30x30,500"
shipment.receiver_address = {
	zip_code: "5700",
	street_number: 123,
	street_name: "Street",
	floor: 4,
	apartment: "C"
}
```
```csharp
Shipments shipments = new Shipments()
 {
     Mode = "me2",
     Dimensions = "30x30x30,500",
     Description = "Ergonomic Silk Shirt",
     ReceiverAddress = new ReceiverAddress(){
      Zip_code = "5700",
      StreetNumber = 123,
      StreetName = "Street",
      Floor = 4,
      Apartment = "C"
     }
 };
```
]]]

> NOTE
>
> Nota
>
> O formato das dimensões é:
>```altura x largura x comprimento (centímetros), peso (gramas)```.
>Caso indique as dimensões incorretamente e estas não coincidam com o pacote físico, o transportador poderá não aceitar o envio. Se o pacote for aceito, deduziremos automaticamente de sua conta a diferença.

#### Retirada em loja
Você pode oferecer a possibilidade de retirada do produto em loja, indicando ao comprador onde e quando retirar o produto. Para isso, você deve incluir:

[[[
```php
<?php
  $shipments = new MercadoPago\Shipments();
  // ...
  $shipments->local_pickup = true;
  // ...
?>
```
```java
Shipments shipments = new Shipments();
// ...
shipments.setLocalPickup(true);
// ...
```
```node
var shipments = {
  //..
  "local_pickup": true
  //..
}
```
```ruby
shipment = MercadoPago::Shipment.new
# ...
shipment.local_pickup = true
# ...
```
]]]

#### Ofereça frete grátis

Indique o método de envio que irá oferecer gratuitamente. O valor do frete será debitado de sua conta ao receber o pagamento.

[[[
```php
<?php
  $shipments = new MercadoPago\Shipments();
  // ...
  $shipments->free_methods = array(
    array("id"=>73328)
  );
  // ...
?>
```
```java
Shipments shipments = new Shipments();
// ...
shipment.setFreeMethods(73328); // OCA Estándar
// ...
```
```node
var shipments = {
  //..
  "free_methods": [
      {
          "id": 73328
      }
    ],
  //..
}
```
```ruby
shipment = MercadoPago::Shipment.new
# ...
shipment.free_methods = [
  {
    id: 73328
  }
]
# ...
```
]]]



Consulte a ID dos [métodos de envio](https://api.mercadolibre.com/sites/MLB/shipping_methods?marketplace=NONE) disponíveis.


#### Integre o Mercado Envios no Checkout

Veja abaixo um exemplo de Checkout com o Mercado Envios:

[[[
```php
<?php

  $preference = new MercadoPago\Preference();

  $item = new MercadoPago\Item();
  $item->title = "[FAKER][COMMERCE][PRODUCT_NAME]";
  $item->quantity = [FAKER][NUMBER][BETWEEN][1,10];
  $item->currency_id = "[FAKER][CURRENCY][ACRONYM]";
  $item->unit_price = [FAKER][COMMERCE][PRICE];

  $payer = new MercadoPago\Payer();
  $payer->email = "test_user@testuser.com";

  $shipments = new MercadoPago\Shipments();
  $shipments->mode = "me2";
  $shipments->dimensions = "30x30x30,500";
  $shipment->default_shipping_method = 73328;
  $shipments->free_methods = array(
    array("id"=>73328)
  );
  $shipments->receiver_address=array(
		"zip_code" => "5700",
		"street_number" => 123,
		"street_name" => "Street",
		"floor" => 4,
		"apartment" => "C"
  );


  $preference->items = array($item);
  $preference->payer = $payer;
  $preference->save();
  $preference->shipments = $shipments;

  $preference->save();

?>
```
```java
Preference preference = new Preference();

Item item = new Item();
item.setId("1234")
    .setTitle("[FAKER][COMMERCE][PRODUCT_NAME]")
    .setQuantity([FAKER][NUMBER][BETWEEN][1,10])
    .setCategoryId("[FAKER][CURRENCY][ACRONYM]")
    .setUnitPrice((float) [FAKER][COMMERCE][PRICE]);

Payer payer = new Payer();
payer.setEmail("[FAKER][INTERNET][FREE_EMAIL]");

Shipments shipments = new Shipments();
shipments.setMode(Shipments.ShipmentMode.me2)
    .setDimensions("30x30x30,500")
    .setReceiverAddress(new AddressReceiver("5700", 123, "street", 4, "C"));

preference.setPayer(payer);
preference.appendItem(item);
preference.setShipments(shipments);

preference.save();

```
```node
var preference = {}

var item = {
  "title": '[FAKER][COMMERCE][PRODUCT_NAME]',
  "quantity": [FAKER][NUMBER][BETWEEN][1,10],
  "currency_id": '[FAKER][CURRENCY][ACRONYM]',
  "unit_price": [FAKER][COMMERCE][PRICE]
}

var payer = {
  "email": "demo@mail.com"
}

var shipments = {
  "mode": "me2",
  "dimensions": "30x30x30,500",
	"receiver_address": {
		"zip_code": "5700",
		"street_number": 123,
		"street_name": "Street",
		"floor": 4,
		"apartment": "C"
	},
  "free_methods": [
    {
      "id": 73328
    }
  ]

};

preference.items = [item]
preference.payer = payer
preference.shipments = shipments

mercadopago.preferences.create(preference).then(function (data) {
   // Do Stuff...
 }).catch(function (error) {
   // Do Stuff...
 });

```
```ruby

preference = new MercadoPago::Preference.new();
item = MercadoPago::Item.new()
item.title="[FAKER][COMMERCE][PRODUCT_NAME]"
item.quantity= [FAKER][NUMBER][BETWEEN][1,10]
item.currency_id = '[FAKER][CURRENCY][ACRONYM]'
item.unit_price = [FAKER][COMMERCE][PRICE]

payer = MercadoPago::Payer.new()
payer.email="[FAKER][INTERNET][FREE_EMAIL]"

shipment = MercadoPago::Shipment.new
shipment.mode = me2
shipment.dimensions = "30x30x30,500"
shipment.receiver_address = {
	zip_code: "5700",
	street_number: 123,
	street_name: "Street",
	floor: 4,
	apartment: "C"
}
shipment.free_methods = [
  {
    id: 73328
  }
]

preference.items = [item]
preference.payer = payer
preference.shipment = shipment

preference.save

```
]]]

```html

<!DOCTYPE html>
<html>
	<head>
		<title>Pay</title>
	</head>
	<body>
		<a href="<?php echo $preference['response']['init_point']; ?>">Pay</a>
	</body>
</html>
```



### Passo 3: Melhore a experiência com a calculadora de custos de envio

Oferecemos a possibilidade de realizar o cálculo prévio do custo e dos prazos de envio para que os compradores possam visualizá-los antes do checkout.

Para fazer o cálculo, é necessário que envie:

* `dimensions`: O tamanho do produto que quer enviar. O formato é: altura x largura x comprimento (centímetros), peso (gramas). Consulte os valores admitidos pelo correio.

* `zip_code`: O CEP do seu comprador.

* `item_price`: O preço do produto que deseja enviar. Se houver vários produtos, você deve indicar o preço total deles.

* `free_method` (opcional): Você pode oferecer frete grátis, o que pode ajudá-lo a gerar mais vendas. Você só precisa nos indicar o método de envio que irá oferecer gratuitamente. Em seguida, o valor do envio será debitado da sua conta ao receber o pagamento.


### Passo 4: Imprima a etiqueta

Toda vez que receber um pagamento, você receberá um e-mail com um botão para imprimir a etiqueta. Também é possível visualizar os [pagamentos pendentes de impressão](https://www.mercadopago.com.ar/activities?type=collection&status=approved&shipping_or_archived=with_ME&tagME=ready_to_print) na sua conta no Mercado Pago.

Em uma caixa, inclua tudo o que você vendeu. Cole a etiqueta no pacote e envie-o. Você não terá que pagar nada no correio, pois as etiquetas do Mercado Envios já estarão pagas com o valor do frete pago pelo comprador.

### Passo 5: Rastreamento

Utilize nossas ferramentas para fazer o rastreamento.
Tanto na lista de cobranças, como através de nossas APIs, você será capaz de rastrear seus envios.

Além disso, podemos notificá-lo quando um envio estiver pronto para expedição através das [notificações](https://www.mercadopago.com.br/developers/pt/guides/notifications/webhooks) enviadas dos servidores do Mercado Pago aos seus servidores. Isto lhe permitirá gerenciar seu estoque e saber o status dos pagamentos e envios.
