# Mejora la aprobación de tus pagos

## ¿Por qué se rechaza un pago?

Un pago puede ser rechazado por un error con el medio de pago o porque no se cumple con los requisitos de seguridad necesarios. Por ejemplo, si la tarjeta no tiene el saldo suficiente, se realiza mal la carga de un dato o se produce un movimiento inusual de la cuenta.


> NOTE
>
> Nota
>
> Si quieres más información, consulta [los estados y motivos de rechazo existentes](https://www.mercadopago.com.ar/developers/es/guides/payments/api/handling-responses)

Para evitar pérdidas de ingresos de tu negocio y mejorar la experiencia de tus clientes, trabajamos con los emisores de responsables de cada medio de pago y utilizamos las últimas tecnologías para evitar el fraude y aumentar la cantidad de pagos aprobados. 

## Pagos rechazados por el banco

Al ofrecer un pago con tarjeta de crédito o débito, el emisor puede rechazar el cobro por distintas razones. Por ejemplo, si la tarjeta se encuentra vencida, no tiene los fondos suficientes o que los datos no sean correctos. 

Puedes ver el estado del pago en la respuesta de la API como `rejected` y el motivo de rechazo en el campo `status_detail`.

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

Y también, puedes encontrar más información sobre el detalle del pago en la [actividad de la cuenta](https://www.mercadopago.com.ar/) de Mercado Pago en la que se reciben los pagos.

> NOTE
>
> Nota
>
>Es importante tener en cuenta que si el emisor de la tarjeta no indica el motivo del rechazo, vas a ver el detalle del pago como `cc_rejected_other_reason`. Para esta caso, es recomendable que se cambie el medio de pago o que se contacte con el banco para resolver el problema. 

## Pagos rechazados para prevenir fraude

Seguimos en tiempo real las transacciones y tenemos validaciones de seguridad para reconocer pagos que no fueron autorizados por la persona dueña de la cuenta y evitar contracargos o cancelaciones. 

Cuando nuestro sistema de prevención de fraude detecta un pago sospechoso, puedes ver el estado del pago en la respuesta de la API como rejected y el motivo de rechazo como `cc_rejected_high_risk`.

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
> Si quieres más información, consulta [los estados y motivos de rechazo existentes](https://www.mercadopago.com.ar/developers/es/guides/payments/api/handling-responses).

## Recomendaciones para mejorar tu aprobación

Para evitar que un pago real se rechace por no cumplir con las validaciones de seguridad, es necesario sumar toda la información posible a la hora de realizar la operación. 

### Suma nuestro código de seguridad en tu sitio

Te ayudamos a detectar comportamientos inusuales de los clientes con nuestro código de seguridad para prevenir el fraude. 

Es muy simple. Agrega el script, configura la sección de tu sitio en la que se encuentra ¡y listo! Solo debes reemplazar el valor de `view` por el nombre de la página en la que quieras sumarlo.

```html
<script src="https://www.mercadopago.com/v2/security.js" view="home"></script>
```

#### Posibles valores para VIEW

| Tipo                                                         | Descripción                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| home | Página principal de tu sitio. | 
| search | Página de búsqueda o listado de productos.  |
| item | Página de un producto específico. |

> NOTE
>
> Nota
>
> En caso de no tener un valor disponible para la sección, puedes dejarlo vacío.

### Detalla toda la información sobre el pago

Para optimizar la validación de seguridad de los pagos y mejorar las aprobaciones, puedes enviarnos los dato del comprador y del ítem para que los analicemos. Por ejemplo, si nos envías esta información, podemos detectar si ese comprador realizó pagos sospechosos en otro momento y prevenirlo.

#### Datos del comprador

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

Consulta la [referencia de la API](https://www.mercadopago.com.ar/developers/es/reference/payments/_payments/post/) por más información de cada atributo.

### Ayuda a tus clientes con sus pagos rechazados

Es importante que le expliques a tus clientes el motivo de rechazo del pago y qué acción puede hacer para solucionarlo. Tus clientes tendrán toda la información que necesitan y tú tendrás beneficios.

Por ejemplo, si un pago se rechaza por fondos insuficientes, puedes recomendarles que vuelva a intentar con otro medio de pago para completar la operación. 


> NOTE
>
> Nota
>
>Si utilizas nuestro Smart Checkout, no te preocupes, ya tienes configurados los mensajes según cada caso. Y si usas otro de nuestros productos, te recomendamos mostrar un [mensaje específico por cada motivo de rechazo](https://www.mercadopago.com.ar/developers/es/guides/payments/api/handling-responses). 



