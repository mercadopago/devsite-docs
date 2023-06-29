# Additional configuration

Checkout Pro has features that allow you to improve the management of your sales payments through an optimized integration.

## Receive payment notifications

IPN notifications (_Instant Payment Notification_) are automatic notifications that can be sent when there are payments and/or status updates, letting you know if transactions have been approved, declined, or are pending.

Automatic notifications allow you to manage your inventory and keep your system in sync with your business payment flows. Learn how to receive IPN notifications [here](/developers/en/docs/checkout-pro/additional-content/your-integrations/notifications/ipn).

## Enter additional information to the preference

Improve the payment approval and shopping experience in Checkout Pro by adding information that details the item purchased and the purchasing user to your preferences.

In Preferences, you can enter the following additional information:

### Buyer's personal data 

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
PreferencePayerRequest payer =
   PreferencePayerRequest.builder()
       .name("Joao")
       .surname("Silva")
       .email("user@email.com")
       .dateCreated(OffsetDateTime.now())
       .phone(PhoneRequest.builder().areaCode("11").number("4444-4444").build())
       .identification(
           IdentificationRequest.builder().type("CPF").number("19119119100").build())
       .address(
           AddressRequest.builder()
               .streetName("Street")
               .streetNumber("123")
               .zipCode("06233200")
               .build())
       .build();
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

### Item's general data

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
PreferenceItemRequest item = PreferenceItemRequest.builder()
   .id("1234")
   .title("Lightweight Paper Table")
   .description("Inspired by the classic foldable art of origami")
   .categoryId("home")
   .quantity(3)
   .currencyId("BRL")
   .unitPrice(new BigDecimal("100"))
   .build();
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


> NOTE
> 
> Note
> 
> You can find the list of your item's categories [here](https://api.mercadopago.com/item_categories). If you cannot find the category values, send the value `others` in the `category_id` attribute.

## Redirect the buyer to your site

At the end of the checkout process, you have the option to redirect the buyer to your site again.

To do this, add the `back_urls` attribute and define the desired page to redirect your buyer when he clicks on the `Return to site` button, according to the payment status. 

You can also add the `auto_return` attribute with the `approved` value if you want the redirect for approved payments to be automatic without rendering a return button.

> NOTE
>
> Note
>
> Note that the `auto_return` attribute only works for Checkout Pro's `redirect` and `mobile` mode. It does not work in modal mode since in the latter the buyer remains on the site throughout the payment process.

![autoreturn](/images/web-payment-checkout/autoreturn-img.png)

| Attribute | Description |
| ------------ | -------- |
| `auto_return` | Buyers are automatically redirected to the site when payment is approved. The default value is `approved`. |
| `back_urls` | Return URL to site. Possible scenarios are:<br/><br/>`success`: Return URL upon payment approved.<br/><br/>`pending`: Return URL upon payment pending.<br/><br/>`failure`: Return URL upon payment payment rejected.

The `back_urls` will return the following parameters:

| Parameter | Description |
| --- | --- |
| `payment_id` | ID (identifier) of the payment from Mercado Pago. |
| `status` | Payment status. Ex.: `approved` for an approved payment or `pending` for pending payment. |
| `external_reference` | Amount sent at the time when the payment preference was created. |
| `merchant_order_id` | ID (identifier) of the payment order generated in Mercado Pago. |

> NOTE
>
> Note
>
> Some parameters hold purchase information only if the buyer has completed the entire payment in Checkout Pro and has not abandoned the flow before returning to your site via the `failure` `back_urls`.

For example:

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
PreferenceBackUrlsRequest backUrls =
// ...
   PreferenceBackUrlsRequest.builder()
       .success("https://www.seu-site/success")
       .pending("https://www.seu-site/pending")
       .failure("https://www.seu-site/failure")
       .build();

PreferenceRequest request = PreferenceRequest.builder().backUrls(backUrls).build();
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

A payment can be rejected because the payment method issuer has detected a problem with the flow, such as a lack of necessary security requirements.

Avoid rejected payments with our [recommendations](/developers/en/docs/checkout-pro/how-tos/payment-approval) and improve the approval process.

## Manage cancellations and returns

----[mla, mlm, mco, mlu, mlb, mlc]----
Cancellations happen when a payment has not been completed before the due date and the seller then decides to cancel it. Returns, in turn, happen when the buyer completes the payment, but the seller decides to cancel it totally or partially.
------------

----[mpe]----
Cancellations happen when payment has not been completed before the due date, and the seller then decides to cancel it. Returns, in turn, happen when the buyer completes the payment, but the seller decides to cancel it totally.
------------

For more information, visit our documentation [on how to manage your payment cancellations and returns](/developers/en/docs/checkout-pro/additional-content/cancellations-and-refunds).

## Manage chargebacks

A chargeback occurs when the buyer contacts the entity that the card issuer and communicates that they do not recognize the payment. In practice, this means that the money from this payment will be withheld from your Mercado Pago account until the situation is resolved.

Access our [Chargeback Management documentation](/developers/en/docs/checkout-pro/additional-content/chargebacks) and learn how to manage payment chargebacks.

---