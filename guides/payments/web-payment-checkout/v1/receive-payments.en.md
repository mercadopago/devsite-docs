---
sites_supported:
  - mla
  - mlb
---

# Receive Payments

Receive payments simply and securely using the Mercado Pago’s Checkout.


## 1. Create a payment preference

A payment preference contains all the information about the product or service to be paid. For example:

* Description and amount.
* Your buyer’s info (email, name, address, etc.).
* Payment methods accepted.
* Reference ID of your system.

To create a payment preference you must install [Mercado Pago SDK](https://www.mercadopago.com.ar/developers/en/plugins_sdks) and set up your [credentials](https://www.mercadopago.com/mla/account/credentials?type=basic).

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

Then, you must add the attributes of your payment preference and create a preference:


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

### Content of the preference

The more information you send us, the faster is the payment approval and the better is the experience for your users.

#### Payer

You must submit your buyer’s `email`. If you include information such as identification type or identification number, it will not be asked during the checkout.

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

## 2. Take the buyer to checkout

Once the preference has been created, use the URL found in the attribute `init_point` of the response to create a payment button:

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


You can also customize the checkout by entering this [Link](https://www.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/v1/personalization)

## 3. Enable payment notifications

Notifications are automatically sent to inform you of any new payments and status updates.

This will allow you to manage your inventories and keep your system synced.

To learn more about it, go to [Notifications](https://www.mercadopago.com.ar/developers/en/guides/notifications/ipn).

## 4. Cancel a payment

The payment methods available for payments in cash must be paid from 3 to 5 days depending on each one.

They **do not expire automatically**, so you’re required to [cancel the payment](https://www.mercadopago.com.ar/developers/en/guides/manage-account/cancellations-and-refunds) after expiration.


## 5. Test the integration

You can test the integration before going into production, in order to check the operation and make all the adjustments you need.

For that, you must use test users and cards.

For more information, go to the [Tests](https://www.mercadopago.com.ar/developers/en/guides/payments/web-payment-checkout/v1/testing) section.

### Next steps

* [Customizations](https://www.mercadopago.com.ar/developers/en/guides/payments/web-payment-checkout/v1/personalization/)
* [Test the integration](https://www.mercadopago.com.ar/developers/en/guides/payments/web-payment-checkout/v1/testing/)  
