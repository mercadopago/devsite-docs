# Integración avanzada

## Recibe notificaciones de pagos

Las notificaciones IPN (Instant Payment Notification) son la **forma automática de aviso de la creación de nuevos pagos y las actualizaciones de sus estados.** Por ejemplo si fueron aprobados, rechazados o si se encuentran pendientes.
Te permiten administrar tu stock y mantener tu sistema sincronizado.

[Recibir notificaciones IPN](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/notifications/ipn)

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
  ----[mla, mlb, mlu, mco, mlc, mpe]----
  $payer->identification = array(
    "type" => "DNI",
    "number" => "12345678"
  );
  ------------
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
  },
  ------------
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

### Datos del ítem

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

> La lista de categorías para tu `ìtem` la puedes encontrar en el siguiente [link](https://api.mercadopago.com/item_categories). En caso de no encontrar la categoría de tu producto, envía como `categoryid` el valor `others`.    


## URL de retorno

Al finalizar el proceso de pago, tienes la opción de **redireccionar al comprador a tu sitio.**
Para esto, tienes que sumar el atributo `back_urls` y definir según el estado de pago a dónde quieres que regrese tu comprador a través del botón de volver al sitio. 

Si quieres que la redirección sea automática para pagos aprobados, tienes que agregar también el atributo `auto_return` con valor `approved`.

> NOTE
>
> Nota
>
> Ten en cuenta que el atributo `auto_return` solo funciona para modo redirect y mobile. No al usar [modo modal](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-pro/integration), ya que el comprador siempre se encuentra en el sitio.

![autoreturn](/images/web-payment-checkout/autoreturn-img.png)

Atributo |	Descripción
------------ 	|	--------
`auto_return` | Redirige automáticamente a tu sitio cuando el pago finaliza como aprobado. El valor posible es `approved`.
| `back_urls` | `success`. URL de retorno ante pago aprobado.<br><br>`pending`. URL de retorno ante pago pendiente.<br><br>`failure`. URL de retorno ante pago cancelado.


A través de las `back_urls`, *retornarán los siguientes parámetros*:

Parámetro |	Descripción
------------ 	|	--------
`payment_id` | ID del pago de Mercado Pago. |
`status` | Estado del pago. Por ejemplo: `approved` para un pago aprobado o `pending` para un pago pendiente. |
`external_reference` | Valor que hayas enviado a la hora de crear la preferencia de pago. |
`merchant_order_id` | ID de la orden de pago generada en Mercado Pago. |

>  La información de los parámetros dependerá de la finalización del pago en el Checkout Pro y de que no haya abandonado el flujo antes de retornar a tu sitio a través de la `back_urls` de **_failure_**.



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

## Previene pagos rechazados

Un pago puede ser rechazado porque el emisor del medio de pago detecta un problema o porque no se cumple con los requisitos de seguridad necesarios.

Evita pagos rechazados con nuestras recomendaciones y [mejora la aprobación de tus pagos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/account/payment-rejections).

## Cancelaciones y devoluciones

----[mla, mlm, mco, mlu, mlb, mlc]----
Las cancelaciones se efectúan cuando el pago en efectivo no se concretó antes de la fecha de vencimiento y el vendedor decide cancelarlo.
Y las devoluciones suceden cuando el pago se realizó pero el vendedor decide anularlo total o parcialmente.
------------

----[mpe]----
Las cancelaciones se efectúan cuando el pago en efectivo no se concretó antes de la fecha de vencimiento y el vendedor decide cancelarlo.
Y las devoluciones suceden cuando el pago se realizó pero el vendedor decide anularlo totalmente.
------------

Puedes encontrar toda la información en la [sección Devoluciones y cancelaciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/account/cancellations-and-refunds).

## Gestiona contracargos

Se produce un contracargo o _chargeback_ cuando el comprador se comunica con la entidad que emitió su tarjeta y desconoce el pago.
Esto quiere decir que el dinero del vendedor por ese pago será retenido de su cuenta de Mercado Pago hasta que se solucione.

[Gestionar contracargos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/account/chargebacks)

---

### Próximos pasos


> LEFT_BUTTON
>
> Otras funcionalidades
>
> Configura tus pago y adapta Checkout Pro a tu negocio.
>
> [Configurations](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-pro/configurations)

> RIGHT_BUTTON
>
> Personalizaciones
>
> Adapta el estilo de tu marca en la experiencia de compra.
>
> [Personalizaciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-pro/customizations)
