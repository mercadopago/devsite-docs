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
  MercadoPago\SDK::setClientId("ENV_CLIENT_ID");
  MercadoPago\SDK::setClientSecret("ENV_CLIENT_SECRET");
?>
```
```java
MercadoPago.SDK.setClientId("ENV_CLIENT_ID");
MercadoPago.SDK.setClientSecret("ENV_CLIENT_SECRET");
```
```node
mercadopago.configure({
  client_id: 'ENV_CLIENT_ID',
  client_secret: 'ENV_CLIENT_SECRET'
});
```
```ruby
MercadoPago::SDK.client_id = "ENV_CLIENT_ID"
MercadoPago::SDK.client_secret = "ENV_CLIENT_SECRET"
```
```csharp
using MercadoPago;
// ...
MercadoPago.SDK.ClientId = "ENV_CLIENT_ID";
MercadoPago.SDK.ClientSecret = "ENV_CLIENT_SECRET";
// ...
```
]]]

Em seguida, você deve adicionar os atributos da sua preferência de pagamento e crie uma preferência:

[[[
```php

<?php
  # Create a preference object
  $preference = new MercadoPago\Preference();
  # Create an item object
  $item = new MercadoPago\Item();
  $item->id = "1234";
  $item->title = "[FAKER][COMMERCE][PRODUCT_NAME]";
  $item->quantity = [FAKER][NUMBER][BETWEEN][1,10];
  $item->currency_id = "[FAKER][CURRENCY][ACRONYM]";
  $item->unit_price = [FAKER][COMMERCE][PRICE];
  # Create a payer object
  $payer = new MercadoPago\Payer();
  $payer->email = "[FAKER][INTERNET][FREE_EMAIL]";
  # Setting preference properties
  $preference->items = array($item);
  $preference->payer = $payer;
  # Save and posting preference
  $preference->save();
?>
```
```java
// Create a preference object
Preference preference = new Preference();
// Create an item object
Item item = new Item();
item.setId("1234")
    .setTitle("[FAKER][COMMERCE][PRODUCT_NAME]")
    .setQuantity([FAKER][NUMBER][BETWEEN][1,10])
    .setCurrencyId("[FAKER][CURRENCY][ACRONYM]")
    .setUnitPrice((float) [FAKER][COMMERCE][PRICE]);
// Create a payer object
Payer payer = new Payer();
payer.setEmail("[FAKER][INTERNET][FREE_EMAIL]");
// Setting preference properties
preference.setPayer(payer);
preference.appendItem(item);
// Save and posting preference
preference.save();
```
```node
  // Create a preference structure
	var preference = {
    items: [
      item = {
        id: '1234',
        title: '[FAKER][COMMERCE][PRODUCT_NAME]',
        quantity: [FAKER][NUMBER][BETWEEN][1,10],
        currency_id: '[FAKER][CURRENCY][ACRONYM]',
        unit_price: [FAKER][COMMERCE][PRICE]
      }
    ],
    payer = {
      email: '[FAKER][INTERNET][FREE_EMAIL]'
    }
  };
 
  mercadopago.preferences.create(preference)
    .then(function (preference) {
      // Do something if preference has been created successfully
    }).catch(function (error) {
      // If an error has occurred
    });
```
```ruby 
# Create an item object
item = MercadoPago::Item.new({
  id:           "1234",
  title:        "[FAKER][COMMERCE][PRODUCT_NAME]",
  quantity:     [FAKER][NUMBER][BETWEEN][1,10],
  currency_id:  "[FAKER][CURRENCY][ACRONYM]",
  unit_price:   [FAKER][COMMERCE][PRICE]
})
# Create a payer object
payer = MercadoPago::Payer.new({
  email: "[FAKER][INTERNET][FREE_EMAIL]"
}) 
# Create a preference object
preference = MercadoPago::Preference.new({
  items: [item],
  payer: payer
})
# Save and posting preference
preference.save()
```
```csharp
using MercadoPago;
using MercadoPago.Resources;
using MercadoPago.DataStructures.Preference;
// ...
// Create a preference object
Preference preference = new Preference(); 
# Adding an item object
preference.Items.Add(
  new Item()
  {
    Id = "1234",
    Title = "[FAKER][COMMERCE][PRODUCT_NAME]", 
    Quantity = [FAKER][NUMBER][BETWEEN][1,10],
    CurrencyId = "[FAKER][CURRENCY][ACRONYM]",
    UnitPrice = (float)[FAKER][COMMERCE][PRICE]
  }
);
// Setting a payer object as value for Payer property
preference.Payer = new Payer(){
  Email = "[FAKER][INTERNET][FREE_EMAIL]"
}
// Save and posting preference
preference.Save();
```
]]]

### Conteúdo da preferência

Quanto mais informações você nos enviar, melhor será a aprovação dos pagamentos e a experiência de seus usuários.

#### Payer

É necessário enviar o `email` do seu comprador. Se você nos enviar dados como tipo e número de identificação, ele não será solicitado durante o processo de pagamento.

[[[
```php
<?php
  // ...
  $payer = new MercadoPago\Payer();
  $payer->name = "Charles";
  $payer->surname = "[FAKER][NAME][LAST_NAME]";
  $payer->email = "[FAKER][INTERNET][FREE_EMAIL_FROM_NAME]['Charles']";
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
    "street_number" => [FAKER][NUMBER][BETWEEN][1000,2000],
    "zip_code" => "[FAKER][ADDRESS][ZIP]"
  );
  // ...
?>
```
```java
// ...
Payer payer = new Payer();
payer.setName("Charles")
     .setSurname("[FAKER][NAME][LAST_NAME]")
     .setEmail("[FAKER][INTERNET][FREE_EMAIL_FROM_NAME]['Charles']")
     .setDateCreated("2018-06-02T12:58:41.425-04:00")
     .setPhone(new Phone()
        .setAreaCode("[FAKER][PHONE_NUMBER][AREA_CODE]")
        .setPhoneNumber("[FAKER][PHONE_NUMBER][PHONE_NUMBER]"))
     .setIdentification(new Identification()
        .setType("DNI")
        .setNumber("12345678"))
     .setAddress(new Address()
        .setStreetName("[FAKER][ADDRESS][STREET_NAME]")
        .setBuildingNumber("[FAKER][NUMBER][BETWEEN][1000,2000]")
        .setZipCode("[FAKER][ADDRESS][ZIP]"));
// ...
```
```node
// ...
var payer = {
  name: "Charles",
  surname: "[FAKER][NAME][LAST_NAME]",
  email: "[FAKER][INTERNET][FREE_EMAIL_FROM_NAME]['Charles']",
  date_created: "2015-06-02T12:58:41.425-04:00",
  phone: {
    area_code: "[FAKER][PHONE_NUMBER][AREA_CODE]",
    number: "[FAKER][PHONE_NUMBER][PHONE_NUMBER]"
  },
  identification: {
    type: "DNI",
    number: "12345678"
  },
  address: {
    street_name: "[FAKER][ADDRESS][STREET_NAME]",
    street_number: "[FAKER][NUMBER][BETWEEN][1000,2000]",
    zip_code: "[FAKER][ADDRESS][ZIP]"
  }
}
// ...
```
```ruby
# ...
payer = MercadoPago::Payer.new({
  name: "Charles"
  surname: "[FAKER][NAME][LAST_NAME]"
  email: "[FAKER][INTERNET][FREE_EMAIL_FROM_NAME]['Charles']"
  date_created: Time.now
  phone: MercadoPago::Phone.new({
    area_code: "[FAKER][PHONE_NUMBER][AREA_CODE]",
    number: "[FAKER][PHONE_NUMBER][PHONE_NUMBER]"
  })
  identification: MercadoPago::Identification.new({
    type: "DNI",
    number: "12345678"
  })
  address: MercadoPago::Address.new ({
    street_name: "[FAKER][ADDRESS][STREET_NAME]",
    street_number: "[FAKER][NUMBER][BETWEEN][1000,2000]",
    zip_code: "[FAKER][ADDRESS][ZIP]"
  })
})
# ...
```
```csharp
using MercadoPago;
using MercadoPago.Resources;
using MercadoPago.DataStructures.Preference;
// ...
Payer payer = new Payer()
{
    Name = "Charles",
    Surname = "[FAKER][NAME][LAST_NAME]",
    Email = "[FAKER][INTERNET][FREE_EMAIL_FROM_NAME]['Charles']",
    Phone = new Phone()
    {
        AreaCode = "[FAKER][PHONE_NUMBER][AREA_CODE]",
        Number = "[FAKER][PHONE_NUMBER][PHONE_NUMBER]"
    },
    Identification = new Identification() 
    {
        Type = "DNI",
        Number = "12345678"
    },
    Address = new Address()
    {
        StreetName = "[FAKER][ADDRESS][STREET_NAME]",
        StreetNumber = int.Parse("[FAKER][NUMBER][BETWEEN][1000,2000]"),
        ZipCode = "[FAKER][ADDRESS][ZIP]"
    }
};
// ...
```
]]]

#### Shipments

[[[
```php
<?php
  // ...
  $shipments = new MercadoPago\Shipments();
  $shipments->receiver_address = array(
		"zip_code" => "[FAKER][ADDRESS][ZIP]",
		"street_number" => [FAKER][NUMBER][BETWEEN][1000,2000],
		"street_name" => "[FAKER][ADDRESS][STREET_NAME]",
		"floor" => [FAKER][NUMBER][BETWEEN][1,20],
		"apartment" => "C"
  );
  // ...
?>
```
```java
// ...
Shipments shipments = new Shipments();
shipments.setReceiverAddress(new ReceiverAddress()
  .setZipCode("[FAKER][ADDRESS][ZIP]")
  .setBuildingNumber("[FAKER][NUMBER][BETWEEN][1000,2000]")
  .setStreetName("[FAKER][ADDRESS][STREET_NAME]")
  .setFloor("[FAKER][NUMBER][BETWEEN][1,20]")
  .setApartment("C"));
// ...
```
```node
// ...
var shipments = {
	receiver_address: {
		zip_code: [FAKER][ADDRESS][ZIP]",
		street_number: [FAKER][NUMBER][BETWEEN][1000,2000],
		street_name: "[FAKER][ADDRESS][STREET_NAME]",
		floor: [FAKER][NUMBER][BETWEEN][1,20],
		apartment: "C"
	}
};
// ...
```
```ruby
# ...
shipment = MercadoPago::Shipment.new(
  receiver_address: new MercadoPago::ReceiverAddress.new({
    zip_code: "[FAKER][ADDRESS][ZIP]",
    street_number: [FAKER][NUMBER][BETWEEN][1000,2000],
    street_name: "[FAKER][ADDRESS][STREET_NAME]",
    floor: [FAKER][NUMBER][BETWEEN][1,20],
    apartment: "C"
  })
})
# ... 
```
```csharp
using MercadoPago;
using MercadoPago.Resources;
using MercadoPago.DataStructures.Preference;
// ...
Shipment shipment = new Shipment()
{
    ReceiverAddress = new ReceiverAddress()
    {
        ZipCode = "[FAKER][ADDRESS][ZIP]",
        StreetName = "[FAKER][ADDRESS][STREET_NAME]",
        StreetNumber = int.Parse("[FAKER][NUMBER][BETWEEN][1000,2000]"),
        Floor = "[FAKER][NUMBER][BETWEEN][1, 20]",
        Apartment = "C"
    }
};
// ...
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
