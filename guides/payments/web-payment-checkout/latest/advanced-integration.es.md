---
sites_supported:
  - mla
  - mlb
  - mco
  - mlu
  - mlm
  - mlc
---

# Integración avanzada

> INDEX
>
> En esta página
>
>
>
> [Recibe notificaciones de pagos](https://www.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/advanced-integration#bookmark_recibe_notificaciones_de_pagos)
>
> [Información adicional para la preferencia](https://www.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/advanced-integration/#bookmark_información_adicional_para_la_preferencia)
>
> [URL de retorno](https://www.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/advanced-integration#bookmark_url_de_retorno)
>
> [Cancelaciones y devoluciones](https://www.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/advanced-integration#bookmark_cancelaciones_y_devoluciones)
>
> [Gestiona contracargos](https://www.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/advanced-integration#bookmark_gestiona_contracargos)


## Recibe notificaciones de pagos

Las notificaciones IPN (Instant Payment Notification) son la **forma automática de aviso de la creación de nuevos pagos y las actualizaciones de sus estados.** Por ejemplo si fueron aprobados, rechazados o si se encuentran pendientes.
Te permiten administrar tu stock y mantener tu sistema sincronizado.

<a href="https://www.mercadopago.com.ar/developers/es/guides/notifications/ipn/" target="_blank">Recibir notificaciones IPN</a>

## Información adicional para la preferencia

Mejora la aprobación de los pagos y la experiencia de tus compradores sumando información en tu preferencia.

Te recomendamos detallar toda la información posible sobre el ítem y el comprador.

### Datos del comprador

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

### Datos del ítem

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

## URL de retorno

Al finalizar el proceso de pago, tienes la opción de **redireccionar al comprador a tu sitio.**
Para esto, se utilizan las `back_urls`. Esta redirección puede ser automática a través del atributo `auto_return` o un link que permita volver al sitio del vendedor.

![autoreturn](/images/web-payment-checkout/autoreturn-img.png)

Atributo |	Descripción
------------ 	|	--------
`auto_return` | Redirige automáticamente a tu sitio cuando el pago finaliza como aprobado. Los valores posibles son _approved_ y _all_.
 | **_success._** URL de retorno ante pago aprobado.
 `back_url`| **_pending._** URL de retorno ante pago pendiente.
  | **_failure._** URL de retorno ante pago cancelado.


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

## Cancelaciones y devoluciones

Las cancelaciones se efectúan cuando el pago en efectivo no se concretó antes de la fecha de vencimiento y el vendedor decide cancelarlo.
Y las devoluciones suceden cuando el pago se realizó pero el vendedor decide anularlo total o parcialmente.

Puedes encontrar toda la información en la <a href="https://www.mercadopago.com.ar/developers/es/guides/manage-account/cancellations-and-refunds" target="_blank"> sección Devoluciones y cancelaciones</a>.

## Gestiona contracargos

Se produce un contracargo o _chargeback_ cuando el comprador se comunica con la entidad que emitió su tarjeta y desconoce el pago.
Esto quiere decir que el dinero del vendedor por ese pago será retenido de su cuenta de Mercado Pago hasta que se solucione.

<a href="https://www.mercadopago.com.ar/developers/es/guides/manage-account/chargebacks/" target="_blank"> Gestionar contracargos</a>

---

### Próximos pasos


> LEFT_BUTTON
>
> Otras funcionalidades
>
> Configura tus pago y adapta Smart Checkout a tu negocio.
>
> [Configurations](https://www.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/configurations/)

> RIGHT_BUTTON
>
> Personalizaciones
>
> Adapta el estilo de tu marca en la experiencia de compra.
>
> [Personalizaciones](https://www.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/customizations/)
