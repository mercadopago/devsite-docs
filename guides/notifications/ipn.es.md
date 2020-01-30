# Notificaciones IPN

## Introducción

**IPN** (_Instant Payment Notification_) es una notificación que se envía de un servidor a otro mediante una llamada `HTTP POST` en relación a tus transacciones.

Para recibir las notificaciones de los eventos en tu plataforma, puedes [configurar previamente una notification_url a la cual Mercado Pago tenga acceso](https://www.mercadopago.com.ar/herramientas/notificaciones).


## Eventos

Notificamos eventos referidos a tus órdenes (`merchant_orders`), pagos recibidos (`payment`) o contracargos recibidos (`chargebacks`).

La `merchant_orders` es una entidad que agrupa tanto pagos como envíos. Tendrás que consultar los datos de las órdenes que te sean notificadas.

Siempre que suceda un evento relacionado a alguno de los recursos mencionados, te enviaremos una notificación usando `HTTP POST` a la `notification_url` que especificaste.

Si la aplicación no está disponible o demora en responder más de 22 segundos, Mercado Pago reintentará la notificación mediante el siguiente esquema:

1. Reintento a los 5 minutos.
2. Reintento a los 45 minutos.
3. Reintento a las 6 horas.
4. Reintento a los 2 días.
5. Reintento a los 4 días.

Mercado Pago informará a esta `notification_url` tanto en la creación como actualización de los estados de pagos u ordenes con dos parámetros:

| Campo 		| Descripción 				 |
| ---- 		| ---- 				 |
| `topic` | Identifica de qué se trata. Puede ser `payment`, `chargebacks` o `merchant_order ` |
| `id` | Es un identificador único del recurso notificado. |


Ejemplo: Si configuraste la notification_url: `https://www.yoursite.com/notifications`, recibirás notificaciones de pago de esta manera: `https://www.yoursite.com/notifications?topic=payment&id=123456789`

## ¿Qué debo hacer al recibir una notificación?

Cuando recibas una notificación en tu plataforma, Mercado Pago espera una respuesta para validar que la recibiste correctamente. Para esto, debes devolver un `HTTP STATUS 200 (OK)` ó `201 (CREATED)`.

Recuerda que esta comunicación es exclusivamente entre los servidores de Mercado Pago y tu servidor, por lo cual no habrá un usuario físico viendo ningún tipo de resultado.

Luego de esto, puedes obtener la información completa del recurso notificado accediendo a la API correspondiente en `https://api.mercadopago.com/`:

Tipo               | URL                                                         | Documentación
------------------ | ----------------------------------------------------------- | --------------------
payment            | /v1/payments/[ID]?access\_token=[ACCESS\_TOKEN] | [ver documentación](https://www.mercadopago.com.ar/developers/es/reference/payments/_payments_id/get/)
chargebacks    	   | /v1/chargebacks/[ID]?access\_token=[ACCESS\_TOKEN]| -
merchant_orders    | /merchant\_orders/[ID]?access\_token=[ACCESS\_TOKEN]           | [ver documentación](https://www.mercadopago.com.ar/developers/es/reference/merchant_orders/_merchant_orders_id/get/)

### Notificaciones de merchant_orders

**Si estas integrando pagos presenciales**, te recomendamos utilizar notificaciones IPN de topic `merchant_order`. Para ello, ten en cuenta las siguientes reglas:

1. El campo `status` de la `merchant_order` permanecerá en **opened** cuando aún no tenga pagos asociados, o los tenga y estén rechazados o aprobados por un monto menor al total de la orden.
2. El campo `status` de la `merchant_order` será **closed** cuando la suma de los pagos aprobados sea igual o mayor al total de la orden.

Dentro de la orden, en el objeto payments, encontrarás todos los pagos de la misma. Es importante obtener el id de los pagos con `status` = **approved** para [poder realizar devoluciones](https://www.mercadopago.com.ar/developers/es/guides/manage-account/cancellations-and-refunds/). 

> WARNING
>
> ADVERTENCIA
>
> Cuando la `merchant_order` esté en estado **closed**, revisa que la sumatoria de los pagos en estado **approved** sea igual o mayor al total de la orden.

### Implementa el receptor de notificaciones tomando como ejemplo el siguiente código:

```php
<?php
	MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

	$merchant_order = null;

	switch($_GET["topic"]) {
		case "payment":
			$payment = MercadoPago\Payment::find_by_id($_GET["id"]);
			// Get the payment and the corresponding merchant_order reported by the IPN.
			$merchant_order = MercadoPago\MerchantOrder::find_by_id($payment->order->id);
			break;
		case "merchant_order":
			$merchant_order = MercadoPago\MerchantOrder::find_by_id($_GET["id"]);
			break;
	}

	$paid_amount = 0;
	foreach ($merchant_order->payments as $payment) {
		if ($payment['status'] == 'approved'){
			$paid_amount += $payment['transaction_amount'];
		}
	}

	// If the payment's transaction amount is equal (or bigger) than the merchant_order's amount you can release your items
	if($paid_amount >= $merchant_order->total_amount){
		if (count($merchant_order->shipments)>0) { // The merchant_order has shipments
			if($merchant_order->shipments[0]->status == "ready_to_ship") {
				print_r("Totally paid. Print the label and release your item.");
			}
		} else { // The merchant_order don't has any shipments
			print_r("Totally paid. Release your item.");
		}
	} else {
		print_r("Not paid yet. Do not release your item.");
	}

?>
```

> Para obtener tu `ACCESS_TOKEN`, revisa la sección de [Credenciales]([FAKER][CREDENTIALS][URL])

## Búsqueda de la orden

**Si estas integrando pagos presenciales**, se debe implementar como método de contingencia, la  **búsqueda de la orden** utilizando el `external_reference` de la misma como criterio de búsqueda. 

```curl
curl -X GET https://api.mercadopago.com/merchant_orders?external_reference=$EXTERNAL_REFERENCE&access_token=$ACCESS_TOKEN -d
```

Más información en la [Referencia de API](https://www.mercadopago.com.ar/developers/es/reference/merchant_orders/_merchant_orders_search/get/).

Se puede implementar la **búsqueda** por `external_reference` de dos formas:

| Formas	|	Descripción		|
| ----------- | ----------------- |
| **Manual** | El punto de venta debe incluir un botón para realizar la búsqueda. |
| **Automática** | Pasado un tiempo prudencial sin haber recibido alguna notificación, se comienza una búsqueda de la orden cada un intervalo de, por ejemplo, 5 segundos. |

Por cada escaneo del QR se genera una `merchant_order` distinta.  Debe considerarse que si el cliente escanea más de una vez, una orden quedará en **open** por tiempo indefinido. Debe tomarse la `merchant_order` con el `status` = **closed** para cerrar la transacción.

Si se realiza la búsqueda una vez **escaneado el QR**, se obtienen todos los datos referidos a la orden:

```json
{
  "id": 1126664483,
  "status": "closed",
  "payments": [
     {
      "id": 4996721469,
      "transaction_amount": 4,
      "status": "rejected",
      [...],
    },
     {
      "id": 4996721476,
      "transaction_amount": 4,
      "status": "approved",
      [...], }, 
```

En caso contrario, la respuesta que se recibe si todavía **no se escaneó el QR** al cual se publicó la orden será:

```json
{
   "elements": null,
   "next_offset": 0,
   "total": 0
 }
```

> WARNING
>
> ATENCIÓN
>
> Desde Mercado Pago requerimos para homologar la integración de pagos presenciales que tengan implementada la notificación (IPN) como método principal. La búsqueda de orden por `external_reference` deberá usarse sólo como contingencia ante el eventual caso que no se reciban notificaciones.

