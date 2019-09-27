---
sites_supported:
  - mla
  - mlb
  - mco
  - mlu
  - mlm
  - mlc
---

# Advanced Integration

## Receive Payment Notifications

IPN (Instant Payment Notification) notifications are the **automatic form of notice of the creation of new payments and updates of their status.** For example if they were approved, rejected or if they are pending.
They allow you to manage your stock and keep your system in sync.

<a href="https://www.mercadopago.com.ar/developers/es/guides/notifications/ipn/" target="_blank">Receive IPN notifications</a>

## Additional information for the preference

Improve the approval of payments and the experience of your buyers by adding information in your preference.

We recommend detailing all possible information about the item and the buyer.

### Buyer Details

[[[
```php
<?php
  // ...
  $payer = new MercadoPago\Payer();
  $payer->name = "Charles";
  $payer->surname = "Luevano";
  $payer->email = "charles@hotmail.com";
  $payer->date_created = "2018-06-02T12:58:41.425-04:00";
  $payer->phone = array(
    "area_code" => "",
    "number" => "949 128 866"
  );
  $payer->identification = array(
    "type" => "DNI",
    "number" => "12345678"
  );
  $payer->address = array(
    "street_name" => "Cuesta Miguel Armendáriz",
    "street_number" => 1004,
    "zip_code" => "11020"
  );
  // ...
?>
```
```node
// ...
var payer = {
  name: "Charles",
  surname: "Luevano",
  email: "charles@hotmail.com",
  date_created: "2015-06-02T12:58:41.425-04:00",
  phone: {
    area_code: "",
    number: "949 128 866"
  },
  identification: {
    type: "DNI",
    number: "12345678"
  },
  address: {
    street_name: "Cuesta Miguel Armendáriz",
    street_number: "1004",
    zip_code: "11020"
  }
}
// ...
```
```java
// ...
Payer payer = new Payer();
payer.setName("Charles")
     .setSurname("Luevano")
     .setEmail("charles@hotmail.com")
     .setDateCreated("2018-06-02T12:58:41.425-04:00")
     .setPhone(new Phone()
        .setAreaCode("")
        .setPhoneNumber("949 128 866"))
     .setIdentification(new Identification()
        .setType("DNI")
        .setNumber("12345678"))
     .setAddress(new Address()
        .setStreetName("Cuesta Miguel Armendáriz")
        .setBuildingNumber("1004")
        .setZipCode("11020"));
// ...
```
```ruby
# ...
payer = MercadoPago::Payer.new({
  name: "Charles"
  surname: "Luevano"
  email: "charles@hotmail.com"
  date_created: Time.now
  phone: MercadoPago::Phone.new({
    area_code: "",
    number: "949 128 866"
  })
  identification: MercadoPago::Identification.new({
    type: "DNI",
    number: "12345678"
  })
  address: MercadoPago::Address.new ({
    street_name: "Cuesta Miguel Armendáriz",
    street_number: "1004",
    zip_code: "11020"
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
    Surname = "Luevano",
    Email = "charles@hotmail.com",
    Phone = new Phone()
    {
        AreaCode = "",
        Number = "949 128 866"
    },
    Identification = new Identification()
    {
        Type = "DNI",
        Number = "12345678"
    },
    Address = new Address()
    {
        StreetName = "Cuesta Miguel Armendáriz",
        StreetNumber = int.Parse("1004"),
        ZipCode = "11020"
    }
};
// ...
```
]]]

### Item Details

[[[
```php
<?php
  $item = new MercadoPago\Item();
  $item->id = "1234";
  $item->title = "Heavy Duty Plastic Table";
  $item->quantity = 7;
  $item->currency_id = "[FAKER][CURRENCY][ACRONYM]";
  $item->unit_price = 75.56;
  // ...
?>
```
```node
// ...
items: [
    {
      id: '1234',
      title: 'Lightweight Paper Table',
      quantity: 3,
      currency_id: '[FAKER][CURRENCY][ACRONYM]',
      unit_price: 55.41
    }
  ]// ...
```
```java
// ...
Item item = new Item();
item.setId("1234")
    .setTitle("Lightweight Paper Table")
    .setQuantity(3)
    .setCurrencyId("[FAKER][CURRENCY][ACRONYM]")
    .setUnitPrice((float) 55.41);
// ...
```
```ruby
# ...
item = MercadoPago::Item.new({
  id: "1234",
  title: "Lightweight Paper Table",
  quantity: 3,
  currency_id: "[FAKER][CURRENCY][ACRONYM]",
  unit_price: 55.41
})# ...
```
```csharp
// ...
preference.Items.Add(
  new Item()
  {
    Id = "1234",
    Title = "Lightweight Paper Table",
    Quantity = 3,
    CurrencyId = "[FAKER][CURRENCY][ACRONYM]",
    UnitPrice = (float)55.41
  }
);
// ...
```
]]]

## Return URL

At the end of the payment process, you have the option to **redirect the buyer to your website.**
For this, `back_urls`are used. This redirection can be automatic through the `auto_return` attribute or a link that allows returning to the seller's website.

![autoreturn](/images/web-payment-checkout/autoreturn-img.png)

Attribute |	Description
------------ 	|	--------
`auto_return` | Automatically redirect to your site when the payment ends as approved. Possible values are _approved_ and _all_.
 | **_success._** Return URL for approved payment.
 `back_url`| **_pending._** Return URL for pending payment.
  | **_failure._** Return URL for canceled payment.


[[[
```php
<?php
$preference = new MercadoPago\Preference();
//...
$preference->back_urls = array(
    "success" => "https://www.tu-sitio/success",
    "failure" => "http://www.tu-sitio/failure",
    "pending" => "http://www.tu-sitio/pending"
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
        "success": "https://www.tu-sitio/success",
        "failure": "http://www.tu-sitio/failure",
        "pending": "http://www.tu-sitio/pending"
    },
    "auto_return": "approved",
  // ...
}
```
```java
Preference preference = new Preference();
// ...
BackUrls backUrls = new BackUrls(
                    "https://www.tu-sitio/success",
                    "http://www.tu-sitio/pending",
                    "http://www.tu-sitio/failure");

preference.setBackUrls(backUrls);
// ...
```
```ruby
preference = MercadoPago::Preference.new
# ...
preference.back_urls = {
  success: "https://www.tu-sitio/success",
  failure: "http://www.tu-sitio/failure",
  pending: "http://www.tu-sitio/pendings"
}
preference.auto_return = "approved"
# ...
```
```csharp
Preference preference = new Preference();
 preference.BackUrls = new BackUrls()
  {
    Success = "https://www.tu-sitio/success",
    Failure = "http://www.tu-sitio/failure",
    Pending = "http://www.tu-sitio/pendings"
  };
  preference.AutoReturn = AutoReturnType.approved;
```
]]]

## Cancellations and Returns

Cancellations are made when the cash payment was not completed before the expiration date and the seller decides to cancel it.
And the returns happen when the payment was made but the seller decides to cancel it totally or partially.

You can find all the information in the <a href="https://www.mercadopago.com.ar/developers/es/guides/manage-account/cancellations-and-refunds" target="_blank"> Returns and Cancellations section</a>.

## Manage Chargebacks

A _chargeback_ occurs when the buyer contacts the entity that issued the card and communicates that they do not recognize the payment.
This means that the seller's money for that payment will be withheld from their Mercado Pago account until it is settled.

<a href="https://www.mercadopago.com.ar/developers/es/guides/manage-account/chargebacks/" target="_blank"> Manage Chargebacks</a>

---

### Next steps


> LEFT_BUTTON
>
> Other functionalities
>
> Set up your payment and adapt the Smart Checkout to your business.
>
> [Other functionalities](https://www.mercadopago.com.ar/developers/en/guides/payments/web-payment-checkout/configurations/)

> RIGHT_BUTTON
>
> Customization
>
> Adapt the style of your brand in the shopping experience.
>
> [Customization](https://www.mercadopago.com.ar/developers/en/guides/payments/web-payment-checkout/customizations/)
