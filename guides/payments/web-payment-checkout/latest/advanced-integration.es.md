---
sites_supported:
  - mla
---

# Realiza una integración avanzada

## Esquema modal
El Web Checkout Modal permite cambiar su esquema

Los esquemas disponibles actualmente son:

#### Redirect:

Abre el Web Checkout en una nueva ventana (Integración básica)

#### Modal:

Abre el Web Checkout en la misma ventana de tu sitio

![CHO-Modal](/images/web-payment-checkout/cho-modal.png)

Para integrar el esquema modal, reemplaza el botón de pago que realizaste en la integración básica, por el siguiente snippet:

[[[
```Javascript
<?php echo ‘<a href=” ‘ . $init_point . ‘“>Pagar</a>” ?>
<?php echo ‘<form action="/procesar-pago" method="POST">
<script       src="https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js"
           th: data-preference-id="’ $pref_id. ${idPreference}">’
 </script>
</form>’ ?>
```
]]]

## Notificaciones
Las notificaciones son la forma automática de enterarse de tus nuevos pagos y las actualizaciones de sus estados.
Esto te permitirá administrar tu stock y mantener tu sistema sincronizado.

Existen dos tipos de notificaciones, [Webhooks](https://www.mercadopago.com.ar/developers/es/guides/notifications/webhooks/) e [IPN](https://www.mercadopago.com.ar/developers/es/guides/notifications/ipn/). Las notificaciones IPN, informan sobre el estado de los  pagos y las órdenes de la preferencia. En cambio, con Notificaciones webhooks, notifica sobre la creación y actualización del pago e información sobre vinculaciones de la cuenta. 
Para ambos casos, previamente debes configurar la URL para poder suscribirte. 

Se recomienda para esta integración usar las [Notificaciones IPN](https://www.mercadopago.com.ar/developers/es/guides/notifications/ipn/). 

## Cancelaciones y Devoluciones
Las cancelaciones, se efectúan cuando el pago en efectivo no se realizó antes de la fecha de vencimiento y el vendedor decide cancelar la operación. 

Las devoluciones se dan, cuando el pago se realizó pero el vendedor decide anularlo total o parcialmente.

Para más información sobre cómo realizar estas acciones, haz clic en el siguiente [link](https://www.mercadopago.com.ar/developers/es/guides/manage-account/cancellations-and-refunds).

## Personalización

### Colores (colors)

>NOTE
>
>Nota
>
> Solo válido para el Layout: Modal

### Colores de los elementos
Los elementos que pueden personalizarse son:

* Botones
* Campos de ingreso de datos: inputs
* Elementos de transiciones: spinners y barras de progreso
* Bordes

Puedes modificar el color de esos elementos agregando el atributo “data-elements-color” al fragmento de código HTML.

El valor del atributo deberá ser en formato hexadecimal. Por ejemplo:

[[[
```html
data-elements-color="#c0392b"
```
]]]

![Custom Component](/images/web-payment-checkout/custom_components.gif)

### Color de texto
El color del texto de los botones, será determinado automáticamente dependiendo del contraste del color definido.
Para un color de elemento claro, el color del texto será negro o #000. 

Por ejemplo:

[[[
```html
data-elements-color="#81ecec"
```
]]]

![Light Color Button](/images/web-payment-checkout/light_color_button.png)

Para un color de elementos oscuro, el color del texto será blanco o #fff. Por ejemplo:


[[[
```html
data-elements-color="#8e44ad"
```
]]]

![Dark Color Button](/images/web-payment-checkout/dark_color_button.png)

## Recomendaciones (Opcional)

### Información adicional en la preferencia de cobro
Cuanto más información envíe al realizar el post a API de Preferencia, mejor será la aprobación de los pagos y la experiencia de sus usuarios.
Además de enviar información del item a pagar, también se puede definir, datos del comprador, medios de pago que no desea aceptar, URL de retorno a su sitio después del pago, métodos de envío y demás.

### Datos del Comprador 
Si envía datos como tipo y número de identificación, email, estos no se pedirán durante el proceso de pago.

[[[
```PHP
<?php
  // ...
  $payer = new MercadoPago\Payer();
  $payer->name = "Charles";
  $payer->surname = "Ibarra";
  $payer->email = "charles@hotmail.com";
  $payer->date_created = "2018-06-02T12:58:41.425-04:00";
  $payer->phone = array(
    "area_code" => "",
    "number" => "918 352 291"
  );
  $payer->identification = array(
    "type" => "DNI",
    "number" => "12345678"
  );
  $payer->address = array(
    "street_name" => "Barrio Manuela",
    "street_number" => 1825,
    "zip_code" => "93282"
  );
  // ...
?>
```
```Java
// ...
Payer payer = new Payer();
payer.setName("Charles")
     .setSurname("Ibarra")
     .setEmail("charles@hotmail.com")
     .setDateCreated("2018-06-02T12:58:41.425-04:00")
     .setPhone(new Phone()
        .setAreaCode("")
        .setPhoneNumber("918 352 291"))
     .setIdentification(new Identification()
        .setType("DNI")
        .setNumber("12345678"))
     .setAddress(new Address()
        .setStreetName("Barrio Manuela")
        .setBuildingNumber("1825")
        .setZipCode("93282"));
// ...
```
```NodeJS
// ...
var payer = {
  name: "Charles",
  surname: "Ibarra",
  email: "charles@hotmail.com",
  date_created: "2015-06-02T12:58:41.425-04:00",
  phone: {
    area_code: "",
    number: "918 352 291"
  },
  identification: {
    type: "DNI",
    number: "12345678"
  },
  address: {
    street_name: "Barrio Manuela",
    street_number: "1825",
    zip_code: "93282"
  }
}
// ...
```
```.NET
using MercadoPago;
using MercadoPago.Resources;
using MercadoPago.DataStructures.Preference;
// ...
Payer payer = new Payer()
{
    Name = "Charles",
    Surname = "Ibarra",
    Email = "charles@hotmail.com",
    Phone = new Phone()
    {
        AreaCode = "",
        Number = "918 352 291"
    },
    Identification = new Identification() 
    {
        Type = "DNI",
        Number = "12345678"
    },
    Address = new Address()
    {
        StreetName = "Barrio Manuela",
        StreetNumber = int.Parse("1825"),
        ZipCode = "93282"
    }
};
// ...
```
```Ruby
# ...
payer = MercadoPago::Payer.new({
  name: "Charles"
  surname: "Ibarra"
  email: "charles@hotmail.com"
  date_created: Time.now
  phone: MercadoPago::Phone.new({
    area_code: "",
    number: "918 352 291"
  })
  identification: MercadoPago::Identification.new({
    type: "DNI",
    number: "12345678"
  })
  address: MercadoPago::Address.new ({
    street_name: "Barrio Manuela",
    street_number: "1825",
    zip_code: "93282"
  })
})
# ...
```
]]]

### URLs de retorno
Al finalizar el proceso de pago, es muy importante que comunique a su comprador cuáles son los siguientes pasos y de ésta manera darle confianza respecto del resultado de la operación. Para ello, utilizamos las back_urls. El atributo auto_return en estado aprobado  redireccionará en forma automática al comprador a tu sitio cuando el resultado del pago sea aprobado.

[[[
```PHP
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
```Java
Preference preference = new Preference();
// ...
BackUrls backUrls = new BackUrls(
                    "https://www.tu-sitio/success",
                    "http://www.tu-sitio/pending",
                    "http://www.tu-sitio/failure");

preference.setBackUrls(backUrls);
// ...
```
```NodeJS
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
}```
```.NET
Preference preference = new Preference();
 preference.BackUrls = new BackUrls()
  {
    Success = "https://www.tu-sitio/success",
    Failure = "http://www.tu-sitio/failure",
    Pending = "http://www.tu-sitio/pendings"
  };
  preference.AutoReturn = AutoReturnType.approved;```
```Ruby
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
]]]

## Ejemplos útiles

### Modo binario
Si la lógica de negocio de tu comercio requiere que la decisión sobre la aprobación del pago sea instantánea puedes activar el modo binario. De esta forma el pago sólo puede resultar en los estados aprobado o rechazado.
En el caso de no estar activado el pago puede resultar en el estado _en proceso_.
Para más información revisa los posibles estados de un pago:

![Payment Status Transition](/images/web-payment-checkout/payments-status-transitions-diagram.png)

Para activarlo, basta configurar como true el campo _binary_mode_:

[[[
```JSON
"binary_mode": true
```
]]]

### Expira links de preferencia
Si no quiere que se ingrese a la preferencia de pago para efectuar el pago posterior a una determinada fecha puede utilizar los siguientes atributos:

[[[
```JSON
"expires": true,
"expiration_date_from": "2017-02-01T12:00:00.000-04:00",
"expiration_date_to": "2017-02-28T12:00:00.000-04:00"
```
]]]

Para conocer más sobre los atributos de la preferencia, consulta la documentación de la [API](https://www.mercadopago.com.ar/developers/es/reference/preferences/resource/)

### Aquí tiene una preferencia completa
Para resumir todo lo anterior, a continuación se muestran todos los datos que se pueden configurar en una preferencia:

[[[
```JSON
{
    "items": [
        {
            "id": "item-ID-1234",
            "title": "Title of what you are paying for. It will be displayed in the payment process.",
            "currency_id": "CLP",
            "picture_url": "https://www.mercadopago.com/org-img/MP3/home/logomp3.gif",
            "description": "Item description",
            "category_id": "art", // Available categories at https://api.mercadopago.com/item_categories
            "quantity": 1,
            "unit_price": 100
        }
    ],
    "payer": {
        "name": "user-name",
        "surname": "user-surname",
        "email": "user@email.com",
        "date_created": "2015-06-02T12:58:41.425-04:00",
        "phone": {
            "area_code": "11",
            "number": "4444-4444"
        },
        "identification": {
            "type": "RUT", // Available ID types at https://api.mercadopago.com/v1/identification_types
            "number": "12345678"
        },
        "address": {
            "street_name": "Street",
            "street_number": 123,
            "zip_code": "5700"
        } 
    },
    "back_urls": {
        "success": "https://www.success.com",
        "failure": "http://www.failure.com",
        "pending": "http://www.pending.com"
    },
    "auto_return": "approved",
    "payment_methods": {
        "excluded_payment_methods": [
            {
                "id": "master"
            }
        ],
        "excluded_payment_types": [
            {
                "id": "ticket"
            }
        ],
        "installments": 12,
        "default_payment_method_id": null,
        "default_installments": null
    },
    "shipments": {
        "receiver_address": {
            "zip_code": "5700",
            "street_number": 123,
            "street_name": "Street",
            "floor": 4,
            "apartment": "C"
        }
    },
    "notification_url": "https://www.your-site.com/ipn",
    "external_reference": "Reference_1234",
    "expires": true,
    "expiration_date_from": "2016-02-01T12:00:00.000-04:00",
    "expiration_date_to": "2016-02-28T12:00:00.000-04:00"
}
```
]]]

## Múltiples Items
Cuando una preferencia tiene una lista de Ítems, el Flujo de Integración no cambia, solamente cambia los datos al realizar el Post a la API de Preferencia [(paso 4 del Flujo de Integración)](https://docs.google.com/document/d/1ZexGiAgDG_zzasbjFOUrReB7wZF4FOHz9gQqaGSAr-0/edit#heading=h.gnyo3oad6obg).
Tanto en el Curl, como en el fragmento de Código se modifica la sección donde se describe la información de los ítems. 
Ejecutar e ingresar las siguientes líneas de código para el caso de dos ítems:

[[[
```curl
curl -X GET \
http:// \
-H 'Content-Type: application/json' \
-H 'Postman-Token: 2335a49a-67ed-44ee-a598-d116c9ba164e' \
-H 'cache-control: no-cache' \
-d '{
"items": [
{
"title": "Item de Prueba 1",
"quantity": 1,
"unit_price": 2887
},
{
"title": "Item de Prueba 2",
"quantity": 1,
"unit_price": 1573
}
]
}'
```
]]]

## Exclusiones de medios de pago
Por defecto se ofrecen todos los medios de pago al vendedor, pero si su modelo de negocio no soporta alguno o bien no desea aceptar alguno en particular, puede excluirlo cuando genera la preferencia de pagos.
Además puede definir qué medio de pago o qué cantidad de cuotas desea que se muestren por defecto, así como también la cantidad de cuotas máximas a ofrecer.

Término | Descripción
------------ | -------------
PaymentMethods | Clase que describe los atributos y métodos de Medios de Pagos.
setExcludedPaymentMethods | Método que excluye por medio de pago específicos: Visa, Mastercard o Amex, etc.
setExcludedPaymentTipe | Método que exclusión por tipo de medio de pago: Efectivo, Tarjetas de Crédito o Débito.
setInstallments | Método que setea la cantidad de cuotas máximas a ofrecer.


[[[
```PHP
<?php

$preference = new MercadoPago\Preference();

// ...

$preference->payment_methods = array(
  "excluded_payment_methods" => array(
    array("id" => "master")
  ),
  "excluded_payment_types" => array(
    array("id" => "ticket")
  ),
  "installments" => 12
);

// ...

?>
```
```Java
Preference preference = new Preference();
  // ...
  PaymentMethods paymentMethods = new PaymentMethods();
  paymentMethods.setExcludedPaymentMethods("master", "amex");
  paymentMethods.setExcludedPaymentTypes("ticket");
  paymentMethods.setInstallments(12);

  preference.setPaymentMethods(paymentMethods);
  // ...
```
```NodeJS
var preference = {}
  preference = {
    // ...
    "payment_methods": {
        "excluded_payment_methods": [
            {
                "id": "master"
            }
        ],
        "excluded_payment_types": [
            {
                "id": "ticket"
            }
        ],
        "installments": 12
    }
    // ...
  }
```
```.NET
Preference preference = new Preference();

PaymentMethods paymentmethods = new PaymentMethods(); 

List<PaymentMethod> excludedPaymentMethod = new List<PaymentMethod>();
  excludedPaymentMethod.Add(new PaymentMethod()
    {
      Id = "master"
    });
        
  paymentmethods.excludedPaymentType = excludedPaymentMethod;

List<PaymentType> ExcludedPaymentType = new List<PaymentType>();
  excludedPaymentType.Add(new PaymentType()
    {
      Id = "ticket"
    });

  paymentmethods.ExcludedPaymentTypes = excludedPaymentType;
  paymentmethods.Installments = 12;
```
```Ruby
preference = MercadoPago::Preference.new
# ...
preference.payment_methods = {
  excluded_payment_methods: [id: "master"],
  excluded_payment_types: [id: "ticket"],
  installments: 12
}
# ...
```
]]]