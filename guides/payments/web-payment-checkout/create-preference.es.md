---
sites_supported:
  - mla
  - mlu
  - mlc
  - mpe
  - mlm
  - mco
  - global
---


# Web Payment Checkout - Preferencia de pago

Una preferencia de pago contiene toda la información del producto o servicio que se va a pagar. Por ejemplo:

- Descripción y monto.
- Información de tu comprador (*Email*, nombre, dirección, etc).
- Medios de pago que aceptas.
- *ID* de referencia de tu sistema.

## Crea una preferencia de pago

Para crear una preferencia de pago debes [instalar el SDK de MercadoPago](https://github.com/mercadopago) y configurar tus [credenciales](https://www.mercadopago.com/mla/account/credentials?type=basic).

[[[
```php
<?php  
  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");
?>
```
```java
MercadoPago.SDK.setAccessToken("ENV_ACCESS_TOKEN");
```
```node
mercadopago.configurations.setAccessToken(config.access_token);
```
```ruby
MercadoPago::SDK.access_token = "ENV_ACCESS_TOKEN";
```
```csharp
using MercadoPago;
// ...
MercadoPago.SDK.SetAccessToken(ENV_ACCESS_TOKEN);
// ...
```
]]]

Luego, deberás agregar los atributos de tu preferencia de pago y crear una preferencia:

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

## Contenido de la preferencia

Mientras más información nos envíes, mejor será la aprobación de los pagos y la experiencia de tus usuarios.

### Payer

Es requerido el envío del `email` de tu comprador.

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
