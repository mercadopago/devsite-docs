# Advanced Integration

## Receive Payment Notifications

IPN (Instant Payment Notification) notifications are the **automatic form of notice of the creation of new payments and updates of their status.** For example if they were approved, rejected or if they are pending.
They allow you to manage your stock and keep your system in sync.

[Receive IPN notifications](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/notifications/ipn)

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
  ----[mla, mlb, mlu, mco, mlc, mpe]----
  $payer->identification = array(
    "type" => "DNI",
    "number" => "12345678"
  ------------
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
  ----[mla, mlb, mlu, mco, mlc, mpe]----
  identification: {
    type: "DNI",
    number: "12345678"
  ------------
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
      ----[mla, mlb, mlu, mco, mlc, mpe]----  
     .setIdentification(new Identification()
        .setType("DNI")
        .setNumber("12345678"))
      ------------  
     .setAddress(new Address()
        .setStreetName("Cuesta Miguel Armendáriz")
        .setBuildingNumber("1004")
        .setZipCode("11020"));
// ...
```
```ruby
# ...
payer_data = {
  name: 'Charles',
  surname: 'Luevano',
  email: 'charles@hotmail.com',
  date_created: '2018-06-02T12:58:41.425-04:00',
  phone: {
    area_code: '',
    number: '949 128 866'
  },
  ----[mla, mlb, mlu, mco, mlc, mpe]----
  identification: {
    type: 'DNI',
    number: '12345678'
  },
  ------------
  shipments: {
    receiver_address: {
      street_name: 'Cuesta Miguel Armendáriz',
      street_number: '1004',
      zip_code: '11020'
    }
  }
}
# ...
```
```csharp
using MercadoPago.Client.Common;
using MercadoPago.Client.Preference;
// ...
var payer = new PreferencePayerRequest
{
    Name = "Charles",
    Surname = "Luevano",
    Email = "charles@hotmail.com",
    Phone = new PhoneRequest
    {
        AreaCode = "",
        Number = "949 128 866",
    },
    ----[mla, mlb, mlu, mco, mlc, mpe]----
    Identification = new IdentificationRequest
    {
        Type = "DNI",
        Number = "12345678",
    },
    ------------
    Address = new AddressRequest
    {
        StreetName = "Cuesta Miguel Armendáriz",
        StreetNumber = "1004",
        ZipCode = "11020",
    },
};
// ...
```
```python
# ...

payer_data = {
    "name": "Charles",
    "surname": "Luevano",
    "email": "charles@hotmail.com",
    "date_created": "2018-06-02T12:58:41.425-04:00",
    "phone": {
        "area_code": "",
        "number": "949 128 866"
    },
    ----[mla, mlb, mlu, mco, mlc, mpe]----
    "identification": {
        "type": "DNI",
        "number": "12345678"
    },
    ------------
    "shipments": {
        "receiver_address": {
            "street_name": "Cuesta Miguel Armendáriz",
            "street_number": "1004",
            "zip_code": "11020"
        }
    }
}
# ...
```
]]]

### Item Details

[[[
```php
<?php
  $item = new MercadoPago\Item();
  $item->id = "1234";
  $item->title = "Heavy Duty Plastic Table";
  $item->description = "Table is made of heavy duty white plastic and is 96 inches wide and 29 inches tall";
  $item->category_id = "home";
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
      description: 'Inspired by the classic foldable art of origami',
      category_id: 'home',
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
    .setDescription("Inspired by the classic foldable art of origami")
    .setCategoryId("home")
    .setQuantity(3)
    .setCurrencyId("[FAKER][CURRENCY][ACRONYM]")
    .setUnitPrice((float) 55.41);
// ...
```
```ruby
# ...
preference_data = {
  items: [
    {
      id: 'PR0001',
      title: 'Lightweight Paper Table',
      description: 'Inspired by the classic foldable art of origami',
      category_id: 'home',
      quantity: 3,
      currency_id: '[FAKER][CURRENCY][ACRONYM]',
      unit_price: 55.41
    }
  ]
}
# ...
```
```csharp
// ...
var item = new PreferenceItemRequest
{
    Id = "1234",
    Title = "Lightweight Paper Table",
    Description = "Inspired by the classic foldable art of origami",
    CategoryId = "home",
    Quantity = 3,
    CurrencyId = "[FAKER][CURRENCY][ACRONYM]",
    UnitPrice = 55.41m,
};
// ...
```
```python
# ...
preference_data = {
    "items": [
        {
            "id": "1234",
            "title": "Lightweight Paper Table",
            "description": "Inspired by the classic foldable art of origami",
            "category_id": "home",
            "quantity": 3,
            "currency_id": "[FAKER][CURRENCY][ACRONYM]",
            "unit_price": 55.41
        }
    ]
}
```
]]]


> You can find the list of categories for your `item` in the following [link](https://api.mercadopago.com/item_categories). If you cannot find the category of your product, send the value `others` as ` category_id`.


## Return URL

At the end of the payment process you have the option to **redirect the buyer to your website.** In order to do this you need to add the `back_urls` attribute and define where you want the return to site button to redirect the buyer depending on the payment status. 

If you want this redirection to be made automatically you need to also add the `auto_return` attribute with value `approved`. 

> NOTE
>
> Note
>
> Note that the `auto_return` only works for redirect and mobile mode. It does not work for [modal mode](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-pro/integration) since the buyer stays on your website.

![autoreturn](/images/web-payment-checkout/autoreturn-img.png)

Attribute |	Description
------------ 	|	--------
`auto_return` | Automatically redirect to your site when the payment is successful. Possible value is `approved`.
| `back_urls` | `success`. Return URL for approved payment.<br><br>`pending`. Return URL for pending payment.<br><br>`failure`. Return URL for canceled payment.

Through the `back_urls` *the following parameters will return*:

Parameter |	Description
------------ 	|	--------
`payment_id` | Payment ID of Mercado Pago. |
`status` | Payment status. For example: `approved` for an approved payment or ` pending` for a pending payment. |
`external_reference` | Value that you sent when creating the payment preference. |
`merchant_order_id` | Payment order ID created in Mercado Pago. |

> The information of the parameters will depend on the finalization of the payment at the Checkout Pro and on the fact that the flow has not been abandoned before returning to your site through the `back_urls` of **_failure_**.


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
# ...
preference_data = {
  # ...
  back_urls = {
    success: 'https://www.tu-sitio/success',
    failure: 'https://www.tu-sitio/failure',
    pending: 'https://www.tu-sitio/pendings'
  },
  auto_return: 'approved'
  # ...
}
# ...
```
```csharp
var request = new PreferenceRequest
{
    // ...
    BackUrls = new PreferenceBackUrlsRequest
    {
        Success = "https://www.tu-sitio/success",
        Failure = "http://www.tu-sitio/failure",
        Pending = "http://www.tu-sitio/pendings",
    },
    AutoReturn = "approved",
};
```
```python
preference_data = {
    "back_urls": {
        "success": "https://www.tu-sitio/success",
        "failure": "https://www.tu-sitio/failure",
        "pending": "https://www.tu-sitio/pendings"
    },
    "auto_return": "approved"
}
```
]]]

## Prevent payment rejection

A payment can be rejected because the issuer for the selected method detected a problem or because of non-compliance with security requirements.

Avoid rejected payments with our recommendations and [improve the approval process](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/manage-account/account/payment-rejections).

## Cancellations and Returns

----[mla, mlm, mco, mlu, mlb, mlc]----
Cancellations are made when the cash payment was not completed before the expiration date and the seller decides to cancel it.
And the returns happen when the payment was made but the seller decides to cancel it totally or partially.
------------

----[mpe]----
Cancellations are made when the cash payment was not completed before the expiration date and the seller decides to cancel it.
And the returns happen when the payment was made but the seller decides to cancel it totally.
------------

You can find all the information in the [Returns and Cancellations section](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/manage-account/account/cancellations-and-refunds).

## Manage Chargebacks

A _chargeback_ occurs when the buyer contacts the entity that issued the card and communicates that they do not recognize the payment.
This means that the seller's money for that payment will be withheld from their Mercado Pago account until it is settled.

[Manage Chargebacks](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/manage-account/account/chargebacks)

---

### Next steps


> LEFT_BUTTON
>
> Other functionalities
>
> Set up your payment and adapt the Checkout Pro to your business.
>
> [Other functionalities](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-pro/configurations)

> RIGHT_BUTTON
>
> Customization
>
> Adapt the style of your brand in the shopping experience.
>
> [Customization](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-pro/customizations)
