# Receba Pagamentos

Receba pagamentos de forma simples e segura utilizando o Checkout do Mercado Pago.

## 1. Crie uma preferência de pagamentos

A preferência de pagamentos contém todas as informações sobre o produto ou serviço a ser pago. Por exemplo:

- Descrição e preço.
- Informações do seu comprador (e-mail, nome, endereço, etc.).
- Meios de pagamentos aceitos.
- ID de referência do seu sistema.

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

Em seguida, você deve adicionar os atributos da sua preferência de pagamento:

[[[
```php

<?php

$preference = new MercadoPago\Preference();

$item = new MercadoPago\Item();
$item->title = "Multicolor kite";
$item->quantity = 1;
$item->title = "ARS";
$item->unit_price = 10.00;

$payer = new MercadoPago\Payer();
$payer->email = "test_user_19653727@testuser.com";

$preference->items = array($item);
$preference->payer = $payer;
$preference->save();

?>

```
```java

Preference preference = new Preference();

Item item = new Item();
item.setId("1234")
    .setTitle("Multicolor kite")
    .setQuantity(2)
    .setCategoryId("ARS")
    .setUnitPrice((float) 14.5);

Payer payer = new Payer();
payer.setEmail("demo@mail.com");

preference.setPayer(payer);
preference.appendItem(item);
preference.save();

```
```node

	var preference = {}

  var item = {
    title: 'Multicolor kite',
    quantity: 1,
    currency_id: 'ARS',
    unit_price: 10.5
  }

  var payer = {
    email: "demo@mail.com"
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
item.title="Multicolor kite"
item.quantity= 1
item.currency_id = 'ARS'
item.unit_price = 10.5

payer = MercadoPago::Payer.new()
payer.email="demo@mail.com"

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
  $payer->name = "user-name";
  $payer->surname = "user@email.com";
  $payer->date_created = "2018-06-02T12:58:41.425-04:00";
  $payer->phone = array(
    "area_code" => "11",
    "number" => "4444-4444"
  );
  $payer->identification = array(
    "type" => "DNI",
    "number" => "12345678"
  );
  $payer->address = array(
    "street_name" => "Street",
    "street_number" => 123,
    "zip_code" => "5700"
  );
?>
```
```java
Payer payer = new Payer();
payer.setName("user-name")
  .setSurname("user-surname")
  .setEmail("user@email.com")
  .setDateCreated("2018-06-02T12:58:41.425-04:00")
  .setPhone((new Phone("11", "4444-4444")))
  .setIdentification((new Identification("DNI", "12345678")))
  .setAddress((new Address("Street", 123, "5700")));
```
```node
var payer = {
        "name": "user-name",
        "surname": "user-surname",
        "email": "user@email.com",
        "date_created": "2015-06-02T12:58:41.425-04:00",
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
      }
```
```ruby

payer = MercadoPago::Payer.new
payer.name = "user-name"
payer.surname = "user-surname"
payer.email = "user@email.com"
payer.date_created = Time.now
payer.phone = {
  area_code: "11",
  number: "4444-4444"
}
payer.identification = {
  type: "DNI",
  number: "12345678"
}
payer.address = {
  street_name: "Street",
  street_number: 123,
  zip_code: "5700"
}

```

]]]

#### Shipments

[[[
```php
<?php
  $shipments = new MercadoPago\Shipments();
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
shipments.setReceiverAddress(new AddressReceiver("5700", 123, "street", 4, "C"));
```
```node
var shipments = {
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
shipment.receiver_address = {
	zip_code: "5700",
	street_number: 123,
	street_name: "Street",
	floor: 4,
	apartment: "C"
}
```
]]]

## 2. Lleva a tu comprador al checkout

Una vez creada la preferencia utiliza la URL que encontrarás en el atributo `init_point` de la respuesta para generar un botón de pago:

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

O vencimento **não é automático**, então é necessário que efetue o [cancelamento do pagamento](/guides/account/refunds-and-cancellations.pt.md) logo após o vencimento.

## 5. Teste sua integração

Você pode testar sua integração antes de partir para produção, a fim de verificar o funcionamento e fazer os ajustes necessários.

Para isso, deve-se utilizar usuários e cartões de teste.

Para mais informações, consulte a [seção de Testes](/guides/payments/web-checkout/testing.pt.md).
