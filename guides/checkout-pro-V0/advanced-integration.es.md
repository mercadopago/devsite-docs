# Configuraciones adicionales

Checkout Pro tiene características extra que te permiten optimizar su integración y mejorar la gestión de tus pagos de ventas.

## Recibe notificaciones de pago

Las notificaciones IPN (_Notificación de Pago Instantáneo_) son una forma automática de notificar la creación de nuevos pagos y las actualizaciones de su _estado_, es decir, si fueron aprobados, rechazados o si están pendientes.

Las notificaciones automáticas te permiten administrar tu inventario y mantener tu sistema sincronizado con los flujos de pago de tu negocio. Aprende a recibir notificaciones IPN [aquí](/developers/es/docs/checkout-pro/additional-content/your-integrations/notifications/ipn).

## Agrega información adicional a la preferencia

Mejora la aprobación de pagos y la experiencia de Checkout Pro de tus compradores agregando información a sus preferencias que permita desglosar el artículo comprado y el usuario del comprador.

La información adicional que puedes agregar en las preferencias es:

### Datos personales del comprador

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

### Datos generales del ítem

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
> Nota
>
> Puedes encontrar la lista de sus categorías de "artículos" [aquí](https://api.mercadopago.com/item_categories). Si no puedes acceder a los valores de la categoría, envía el valor `otros` en el atributo` category_id`.

## Redirigir al comprador a tu sitio web

Al final del proceso de pago, tienes la opción de redireccionar al comprador a tu sitio web nuevamente.

Para hacer esto, agrega el atributo `back_urls` y define, de acuerdo con el estado del pago, la página deseada para redireccionar a tu comprador cuando haga clic en el botón regresar al sitio.

Si quieres que la redirección sea automática para los pagos aprobados, sin mostrar un botón de retorno, también debes agregar el atributo `auto_return` con el valor de `approved`.

> NOTE
>
> Nota
>
> Ten en cuenta que el atributo `auto_return` solo funciona para el modo `redirect` y `mobile` de Checkout Pro. No funciona en modo modal, ya que en este último el comprador permanece en el sitio durante todo el proceso de pago.

![autoreturn](/images/web-payment-checkout/autoreturn-img.png)

| Atributo | Descripción |
| ------------ | -------- |
| `auto_return` | Redirige automáticamente a los compradores al sitio cuando el pago finaliza como aprobado. El valor predeterminado es `approved`. |
| `back_urls` | URL deseada para retornar al sitio. Los posibles escenarios son:<br/><br/>`success`: URL de retorno ante la aprobación del pago.<br/><br/>`pending`: URL de retorno ante el pago pendiente.<br/><br/>`failure`: URL de retorno ante el pago rechazado.

A través de `back_urls`, se devolverán los siguientes parámetros:

| Parámetro | Descripción |
| ------------ | -------- |
| `payment_id` | ID (identificador) del pago de Mercado Pago. |
| `status` | Estado de pago. Ej .: `approved` para un pago aprobado o `pending` para un pago pendiente. |
| `external_reference` | Valor que hayas enviado a la hora de crear la preferencia de pago. |
| `comerciante_order_id` | ID (identificador) de la orden de pago generada en Mercado Pago. |

> NOTE
>
> Nota
>
> Algunos de los parámetros mantienen la información de compra solo si el comprador ha completado el pago completo en Checkout Pro y no ha abandonado el flujo antes de regresar a tu sitio a través de la `back_urls` de `failure`.

Por ejemplo:

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

## Previene pagos rechazados

Un pago puede ser rechazado porque el emisor del medio de pago detecta un problema en el flujo, como no se cumplir con los requisitos de seguridad necesarios.

Evita pagos rechazados con nuestras buenas prácticas y [mejora la aprobación de tus pagos](/developers/es/docs/checkout-pro/how-tos/payment-approval).

## Gestiona cancelaciones y devoluciones

----[mla, mlm, mco, mlu, mlb, mlc]----
Las cancelaciones se efectúan cuando el pago en efectivo no se concretó antes de la fecha de vencimiento y el vendedor decide cancelarlo. Las devoluciones, a su vez, suceden cuando el pago se realizó pero el vendedor decide anularlo total o parcialmente.
------------

----[mpe]----
Las cancelaciones se efectúan cuando el pago en efectivo no se concretó antes de la fecha de vencimiento y el vendedor decide cancelarlo. Las devoluciones, a su vez, suceden cuando el pago se realizó pero el vendedor decide anularlo totalmente.
------------

Para más información, accede nuestra documentación para [administrar mejor tus cancelaciones de pago y devoluciones de cargo](/developers/es/docs/checkout-pro/additional-content/cancellations-and-refunds).

## Gestiona contracargos

Un contracargo (o _chargeback_) se produce cuando el comprador se comunica con la entidad que emitió su tarjeta y desconoce el pago. En la práctica, esto quiere decir que el dinero del vendedor por ese pago será retenido de su cuenta de Mercado Pago hasta que se solucione la situación.

Aprende a gestionar contracargos de pago con nuestra [documentación de Gestión de contracargos](/developers/es/docs/checkout-pro/additional-content/chargebacks).

---
