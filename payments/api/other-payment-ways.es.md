# Otros medios de pago

Existen otros medios de pago en cada país además de tarjetas de crédito o débito, con los que puedes recibir pagos. En su mayoría son lo que llamamos medios de pago "offline" o "en efectivo".

Los tipos de medio de pago disponibles son:

* ticket
* atm
* bank_transfer
* prepaid_card

## Obten los medios de pago disponibles

Puedes obtener el listado de medios de pago disponibles realizando un request `HTTP GET`:

```php
<?php

require_once ('mercadopago.php');

$mp = new MP ("ACCESS_TOKEN");

$payment_methods = $mp->get("/v1/payment_methods");

print_r ($payment_methods);
?>
```

El resultado será un _array_ con los medios de pago y sus propiedades:

```json
[
    {
        "id": "rapipago",
        "name": "Rapipago",
        "payment_type_id": "ticket",
        "status": "active",
        "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/2002.gif",
        "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/2002.gif",
        "deferred_capture": "does_not_apply",
        "settings": [],
        "additional_info_needed": []
    },
    {
        "id": "redlink",
        "name": "RedLink",
        "payment_type_id": "atm",
        "status": "active",
        "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/2003.gif",
        "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/2003.gif",
        "deferred_capture": "does_not_apply",
        "settings": [],
        "additional_info_needed": []
    },
    {
        "...": "..."
    }
]
```

## Recibí un pago con un medio de pago en efectivo

Para poder recibir pagos de medio en efectivo solamente debes recolectar el `email` del comprador. Luego es necesario hacer un request `HTTP POST` enviando el `transaction_amount`, `payment_method_id` y el `email` recolectado:

```php
<?php
require_once ('mercadopago.php');

$mp = new MP('ACCESS_TOKEN');

$payment_data = array(
	"transaction_amount" => 100,
	"description" => "Title of what you are paying for",
	"payment_method_id" => "rapipago",
	"payer" => array (
		"email" => "test_user_19653727@testuser.com"
	)
);

$payment = $mp->post("/v1/payments", $payment_data);
```

Respuesta:

```json
{
    ...,
    "status": "pending",
    "status_detail": "pending_waiting_payment",
    ...,
    "transaction_details": {
        "net_received_amount": 0,
        "total_paid_amount": 100,
        "overpaid_amount": 0,
        "external_resource_url": "http://www.mercadopago.com/mla/payments/ticket/helper?payment_id=123456789&payment_method_reference_id= 123456789&caller_id=123456",
        "installment_amount": 0,
        "financial_institution": null,
        "payment_method_reference_id": "1234567890"
    }
}
```

Recibirás una respuesta con un `status` **pending** hasta que el comprador realice el pago.

En el campo `external_resource_url` tienes una url que contiene las instrucciones para que tu comprador pueda pagar. Puedes redirigirlo o enviarle el link para acceda.

> _**Nota**_: Tu comprador tiene entre **3** a **5** días para pagar dependiendo del medio de pago. Luego de estas fechas **debes** cancelarlo.

## Cancelar un pago

Únicamente puedes cancelar pagos que se encuentren en un estado `pending` o `in_process`.

Los pagos de medios en efectivo deben ser pagados entre los 3 a 7 días dependiendo del vencimiento de cada uno.

El vencimiento de estos no es automático, por lo cuál es necesario que ejecutes la [cancelación del pago](#) luego del vencimiento.

Puedes ver el [listado de vencimientos completo](#).

## Tiempos de acreditación del pago

Cada medio de pago tiene su propia fecha de acreditación, en algunos casos esta es inmediata y en otros la demora es de hasta 3 días hábiles.

Recomendamos revisar los [tiempos de acreditación por medio de pago](#).

## Devoluciones

Si necesitas devolver el dinero a tu comprador podrás hacerlo con la API de *Refunds*. Todas las devoluciones de medios de pago en efectivo son devueltas en la cuenta de Mercado Pago de tu comprador.

Si este no cuenta con una, recibirá un email en la dirección enviada en el pago con instrucciones de cómo retirar su dinero.

Para más información puedes ver el artículo sobre [devoluciones](#).

## Integrar Webpay (Chile)

Webpay es uno de los medios de pago disponibles en Chile. Para poder procesar pagos con ellos es necesario que envíes el **RUT**, **tipo de persona**, **dirección IP** del comprador, y la **institución financiera** que procesará el pago. 

> _**Nota**_: Consulta todas las instituciones financieras (_financial\_institutions_) que tienes disponibles a través del recurso [payment_methods](#obten-los-medios-de-pago-disponibles):
> 
> ```json
> {
    "id": "webpay",
    "name": "RedCompra (Webpay)",
    "payment_type_id": "bank_transfer",
    ...
    "financial_institutions": [
      {
        "id": "1234",
        "description": "Transbank"
      }
    ]
  }
  ```

Para generar el pago utilizando Webpay debes enviar el `payment_method_id` **webpay**, el `identification number` y el `financial_institution`:

```php
<?php
require_once ('mercadopago.php');

$mp = new MP('ACCESS_TOKEN');

$payment_data = array(
	"transaction_amount" => 10000,
	"description" => "Title of what you are paying for",
	"payer" => array (
		"email" => "test_user_19653727@testuser.com",
		"identification" => array(
			"type" => "RUT",
			"number" => "76262349"
		),
		"entity_type" => "individual"
	),
	"payment_method_id" => "webpay",
	"transaction_details" => array(
		"financial_institution" => 1234
	),
	"additional_info" => array(
		"ip_address" => "127.0.0.1"
	),
	"callback_url" => "http://www.your-site.com"
);

$payment = $mp->post("/v1/payments", $payment_data);
```

> _**Nota**_: Los `entity_type` esperados son `individual` (Personas) o `association` (Empresas).

La respuesta que recibirás:

```json
{
	"id": 3692089,
	"date_created": "2017-04-27T16:53:03.000-04:00",
	"date_approved": null,
	"date_last_updated": "2017-04-27T16:53:03.000-04:00",
	"money_release_date": null,
	"operation_type": "regular_payment",
	"issuer_id": null,
	"payment_method_id": "webpay",
	"payment_type_id": "bank_transfer",
	"status": "pending",
	"status_detail": "pending_waiting_transfer",
	...
	"transaction_details": {
		...
		"external_resource_url": "https://www.mercadopago.com/mlc/payments/bank_transfer/sandbox/helper/commerce?id=3692089&caller_id=251027719",
		"installment_amount": 0,
		"financial_institution": "1234",
		"payment_method_reference_id": null
	}
}
```

Dirige a tu cliente a la URL que encontrarás en el atributo `external_resource_url` dentro de `transaction_details` de la respuesta. Al finalizar el pago, será redirigido a la `callback_url` que indiques, y te llegará el resultado del pago vía [Webhooks](#).