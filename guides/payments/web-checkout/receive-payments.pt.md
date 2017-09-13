# Receba Pagamentos

Receba pagamentos de forma simples e segura utilizando o Checkout do Mercado Pago.

## 1. Crie uma preferência de pagamentos

A preferência de pagamentos contém todas as informações sobre o produto ou serviço a ser pago. Por exemplo:

* Descrição e preço.
* Informações do seu comprador (e-mail, nome, endereço, etc.).
* Meios de pagamentos aceitos.
* ID de referência do seu sistema.

Para criar uma preferência de pagamento, você deve [instalar o SDK do MercadoPago](https://github.com/mercadopago) e configurar suas [credenciais](https://www.mercadopago.com/mla/account/credentials?type=basic).

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

Em seguida, você deve adicionar os atributos da sua preferência de pagamento e crie uma preferência:

[[[
```php

<?php

$preference = new MercadoPago\Preference();

$item = new MercadoPago\Item();
$item->id = "1234";
$item->title = "[FAKER][COMMERCE][PRODUCT_NAME]";
$item->quantity = [FAKER][NUMBER][BETWEEN][1,10];
$item->currency_id = "[FAKER][CURRENCY][ACRONYM]";
$item->unit_price = [FAKER][COMMERCE][PRICE];

$payer = new MercadoPago\Payer();
$payer->email = "[FAKER][INTERNET][FREE_EMAIL]";

$preference->items = array($item);
$preference->payer = $payer;
$preference->save();

?>

```
```java

Preference preference = new Preference();

Item item = new Item();
item.setId("1234")
    .setTitle("[FAKER][COMMERCE][PRODUCT_NAME]")
    .setQuantity([FAKER][NUMBER][BETWEEN][1,10])
    .setCurrencyId("[FAKER][CURRENCY][ACRONYM]")
    .setUnitPrice((float) [FAKER][COMMERCE][PRICE]);

Payer payer = new Payer();
payer.setEmail("[FAKER][INTERNET][FREE_EMAIL]");

preference.setPayer(payer);
preference.appendItem(item);
preference.save();

```
```node

	var preference = {}

  var item = {
    id: '1234',
    title: '[FAKER][COMMERCE][PRODUCT_NAME]',
    quantity: [FAKER][NUMBER][BETWEEN][1,10],
    currency_id: '[FAKER][CURRENCY][ACRONYM]',
    unit_price: [FAKER][COMMERCE][PRICE]
  }

  var payer = {
    email: "[FAKER][INTERNET][FREE_EMAIL]"
  }

  preference.items = [item]
  preference.payer = payer

  mercadopago.preferences.create(preference).then(function (data) {
     // Do Stuff...
   }).catch(function (error) {
     // Do Stuff...
   });

```
```ruby

preference = MercadoPago::Preference.new()

item = MercadoPago::Item.new()
item.id = "1234"
item.title="[FAKER][COMMERCE][PRODUCT_NAME]"
item.quantity= [FAKER][NUMBER][BETWEEN][1,10]
item.currency_id = '[FAKER][CURRENCY][ACRONYM]'
item.unit_price = [FAKER][COMMERCE][PRICE]

payer = MercadoPago::Payer.new()
payer.email="[FAKER][INTERNET][FREE_EMAIL]"

preference.items = [item]
preference.payer = payer

preference.save

```
]]]

### Conteúdo da preferência

Quanto mais informações você nos enviar, melhor será a aprovação dos pagamentos e a experiência de seus usuários.

#### Payer

É necessário enviar o `email` do seu comprador. Se você nos enviar dados como tipo e número de identificação, ele não será solicitado durante o processo de pagamento.

[[[
```php
<?php
  $payer = new MercadoPago\Payer();
  $payer->name = "Charles";
  $payer->surname = "[FAKER][NAME][LAST_NAME]";
  $payer->email = "[FAKER][INTERNET][FREE_EMAIL]['Charles']";
  $payer->date_created = "2018-06-02T12:58:41.425-04:00";
  $payer->phone = array(
    "area_code" => "[FAKER][PHONE_NUMBER][AREA_CODE]",
    "number" => "[FAKER][PHONE_NUMBER][PHONE_NUMBER]"
  );
  $payer->identification = array(
    "type" => "DNI",
    "number" => "12345678"
  );
  $payer->address = array(
    "street_name" => "[FAKER][ADDRESS][STREET_NAME]",
    "street_number" => [FAKER][ADDRESS][BUILDING_NUMBER],
    "zip_code" => "[FAKER][ADDRESS][ZIP]"
  );
?>
```
```java
Payer payer = new Payer();
payer.setName("Charles")
  .setSurname("[FAKER][NAME][LAST_NAME]")
  .setEmail("[FAKER][INTERNET][FREE_EMAIL_FROM_NAME]['Charles']")
  .setDateCreated("2018-06-02T12:58:41.425-04:00")
  .setPhone((new Phone("[FAKER][PHONE_NUMBER][AREA_CODE]", "[FAKER][PHONE_NUMBER][PHONE_NUMBER]")))
  .setIdentification((new Identification("DNI", "12345678")))
  .setAddress((new Address("[FAKER][ADDRESS][STREET_NAME]", [FAKER][ADDRESS][BUILDING_NUMBER], "[FAKER][ADDRESS][ZIP]")));
```
```node
var payer = {
        "name": "Charles",
        "surname": ""[FAKER][NAME][LAST_NAME],
        "email": "[FAKER][INTERNET][FREE_EMAIL_FROM_NAME]['Charles']",
        "date_created": "2015-06-02T12:58:41.425-04:00",
        "phone": {
            "area_code": "[FAKER][PHONE_NUMBER][AREA_CODE]",
            "number": "[FAKER][PHONE_NUMBER][PHONE_NUMBER]"
        },
        "identification": {
            "type": "DNI",
            "number": "12345678"
        },
        "address": {
            "street_name": "[FAKER][ADDRESS][STREET_NAME]",
            "street_number": [FAKER][ADDRESS][BUILDING_NUMBER],
            "zip_code": "[FAKER][ADDRESS][ZIP]"
        }
      }
```
```ruby

payer = MercadoPago::Payer.new
payer.name = "Charles"
payer.surname = "[FAKER][NAME][LAST_NAME]"
payer.email = "[FAKER][INTERNET][FREE_EMAIL_FROM_NAME]['Charles']"
payer.date_created = Time.now
payer.phone = {
  area_code: "[FAKER][PHONE_NUMBER][AREA_CODE]",
  number: "[FAKER][PHONE_NUMBER][PHONE_NUMBER]"
}
payer.identification = {
  type: "DNI",
  number: "12345678"
}
payer.address = {
  street_name: "[FAKER][ADDRESS][STREET_NAME]",
  street_number: [FAKER][ADDRESS][BUILDING_NUMBER],
  zip_code: "[FAKER][ADDRESS][ZIP]"
}

```

]]]

#### Shipments

[[[
```php
<?php
  $shipments = new MercadoPago\Shipments();
  $shipments->receiver_address=array(
		"zip_code" => "[FAKER][ADDRESS][ZIP]",
		"street_number" => [FAKER][ADDRESS][BUILDING_NUMBER],
		"street_name" => "[FAKER][ADDRESS][STREET_NAME]",
		"floor" => [FAKER][NUMBER][BETWEEN][1,20],
		"apartment" => "C"
  );
?>
```
```java
Shipments shipments = new Shipments();
shipments.setReceiverAddress(new AddressReceiver("[FAKER][ADDRESS][ZIP]", [FAKER][ADDRESS][BUILDING_NUMBER], "[FAKER][ADDRESS][STREET_NAME]", [FAKER][NUMBER][BETWEEN][1,20], "C"));
```
```node
var shipments = {
	"receiver_address": {
		"zip_code": "[FAKER][ADDRESS][ZIP]",
		"street_number": [FAKER][ADDRESS][BUILDING_NUMBER],
		"street_name": "[FAKER][ADDRESS][STREET_NAME]",
		"floor": [FAKER][NUMBER][BETWEEN][1,20],
		"apartment": "C"
	}
};
```
```ruby
shipment = MercadoPago::Shipment.new
shipment.receiver_address = {
	zip_code: "[FAKER][ADDRESS][ZIP]",
	street_number: [FAKER][ADDRESS][BUILDING_NUMBER],
	street_name: "[FAKER][ADDRESS][STREET_NAME]",
	floor: [FAKER][NUMBER][BETWEEN][1,20],
	apartment: "C"
}
```
]]]

## 2. Leve seu comprador para check-out

Uma vez que a preferência é criada, use o URL que você encontra no attribute `init point` da resposta para gerar um botão de pagamento:

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Pagar</title>
	</head>
	<body>
		<a href="<?php echo $preference->init_point; ?>">Pay</a>
	</body>
</html>
```

## 3. Ative as notificações de pagamento

As notificações informam automaticamente sobre seus novos pagamentos e atualizações de status.

Isto permitirá que você gerencie seu estoque e mantenha seu sistema sincronizado.

Para mais informações, consulte a seção de [Notificaçõess](/guides/notifications/ipn.pt.md).

## 4.Cancele um pagamento
As opções de pagamento em dinheiro devem ser pagas no prazo de 3 a 5 dias dependendo de cada caso.

O vencimento **não é automático**, então é necessário que efetue o [cancelamento do pagamento](/guides/manage-account/cancellations-and-refunds.pt.md) logo após o vencimento.

## 5. Teste sua integração

Você pode testar sua integração antes de partir para produção, a fim de verificar o funcionamento e fazer os ajustes necessários.

Para isso, deve-se utilizar usuários e cartões de teste.

Para mais informações, consulte a [seção de Testes](/guides/payments/web-checkout/testing.pt.md).
