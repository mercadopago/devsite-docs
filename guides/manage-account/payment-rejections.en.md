# Improve the approval process

## Why is a payment order rejected?

A payment can be rejected due to an error with a payment method or non-compliance with security requirements. I.e, if a card lacks enough funds, a data fails to upload properly or unusual account movements are detected.


> NOTE
>
> Nota
>
> For more information, check [current rejection status and reasons](https://www.mercadopago.com.ar/developers/es/guides/payments/api/handling-responses).

In order to avoid any revenue loss with your business and to enhance your customers experience, we work with agents from each payment method and operate with the latest tools for fraud prevention and payment growth.

## Bank rejected payments

When offering debit and credit card, the issuer can reject the charge due to several reasons. For instance, card may be expired, lack enough funds or have incorrect data.

You can see the payment status in the API response as `rejected` and the reason for rejection in `status_detail`.

```json
{
    "status": "rejected",
    "status_detail": "cc_rejected_insufficient_amount",
    "id": 47198050,
    "payment_method_id": "master",
    "payment_type_id": "credit_card",
    ...
}
```

Also, you can find more information about [payment details](https://www.mercadopago.com.ar/)on Mercado Pago activity section, where payments are being receive.

> NOTE
>
> Nota
>
>Keep in mind that if the card issuer fails to inform the rejection reason, you’ll see the payment details as `cc_rejected_other_reason`. In this scenario, we recommend changing the payment method or reaching out to the bank to solve the issue.

## Payments rejected due to fraud prevention

We track transactions in real time and perform security validations, to recognize payments that weren’t authorize by the card owner and also to avoid chargebacks.

When our fraud prevention system detects a suspicious payout, you'll be able to see the payment status in the API response as `rejected` and the rejection reason as `cc_rejected_high_risk`.

```json
{
    "status": "rejected",
    "status_detail": "cc_rejected_high_risk",
    "id": 47198050,
    "payment_method_id": "master",
    "payment_type_id": "credit_card",
    ...
}
```

> NOTE
>
> Nota
>
> For more information, check the current [rejection status and reasons](https://www.mercadopago.com.ar/developers/es/guides/payments/api/handling-responses).

## Tips to improve the approval process

To prevent real payments being rejected by security non-compliance, you must add as much information as you can while performing an operation.

### Add our security code into your website

We can help you detect unusual client behaviour with our security code, created to prevent fraud. And don’t worry, we will never keep nor share your clients data.

It’s simple. Add the script, adjust the section of your website where you inserted it and that’s it! You’re all set and done. You just need to replace the `view` value for the page name you want.

```html
<script src="https://www.mercadopago.com/v2/security.js" view="home"></script>
```

#### Posibles valores para VIEW

| Tipo                                                         | Descripción                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| home | Your website main page. |
| search | Search page or product list page. |
| item | Single product page with details for one product. |

> NOTE
>
> Nota
>
> In case of unavailable value for a section, left empty.

### Include all payment information

In order to optimize payment security validation and avoid rejected payments, you can send us the customer and item data so we can analyze it. I.e., if you send us this information, we can detect if the buyer have done suspicious payments in the past.

#### Buyer Data

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

### Item details

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

Learn all about these attributes in our [API Reference](https://www.mercadopago.com.ar/developers/es/reference/payments/_payments/post/).

### Help your clients with their rejected payments

It’s important to explain to your clients the reason for a payment rejection and how to fix it. Your clients will have all the necessary information and you’ll benefit from it.

For instance, if a payment is rejected due to lack of funds, you can recommend trying again with a different payment method.

> NOTE
>
> Nota
>
> If you’re using our Checkout Mercado Pago, don’t worry! All your messages are already set up. If you’re using another product, we recommend showing [a specific message for each rejection reason](https://www.mercadopago.com.ar/developers/es/guides/payments/api/handling-responses).
