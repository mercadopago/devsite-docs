# Notificaciones IPN

----[mla, mlb, mlc, mlm, mco, mlu]----
> WARNING
>
> Pre-requisitos
>
> * Tener implementado [Checkout](https://www.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/introduction).
------------
----[mpe]----
> WARNING
>
> Pre-requisitos
>
> * Tener implementado [Checkout](https://www.mercadopago.com.pe/developers/es/guides/payments/web-checkout/introduction).
------------

**IPN** (_Instant Payment Notification_) es una notificación que se envía de un servidor a otro mediante una llamada `HTTP POST` en relación a tus transacciones.

Para recibir las notificaciones de los eventos en tu plataforma, debes [configurar previamente una URL a la cual Mercado Pago tenga acceso](https://www.mercadopago.com.ar/herramientas/notificaciones).


## Eventos

Notificamos eventos referidos a tus órdenes (`merchant_orders`), pagos recibidos (`payment`) o contracargos recibidos (`chargebacks`).

La `merchant_orders` es una entidad que agrupa tanto pagos como envíos. Tendrás que consultar los datos de las órdenes que te sean notificadas.

Siempre que suceda un evento relacionado a alguno de los recursos mencionados, te enviaremos una notificación usando `HTTP POST` a la URL que especificaste.

Si la aplicación no está disponible o demora en responder, Mercado Pago reintentará la notificación mediante el siguiente esquema:

1. Reintento a los 5 minutos.
2. Reintento a los 45 minutos.
3. Reintento a las 6 horas.
4. Reintento a los 2 días.
5. Reintento a los 4 días.

Mercado Pago informará a esta URL tanto en la creación como actualización de los estados de pagos u ordenes con dos parámetros:

| Campo 		| Descripción 				 |
| ---- 		| ---- 				 |
| `topic` | Identifica de qué se trata. Puede ser `payment`, `chargebacks` o `merchant_order ` |
| `id` | Es un identificador único del recurso notificado. |


Ejemplo: Si configuraste la URL: `https://www.yoursite.com/notifications`, recibirás notificaciones de pago de esta manera: `https://www.yoursite.com/notifications?topic=payment&id=123456789`

## ¿Qué debo hacer al recibir una notificación?

Cuando recibas una notificación en tu plataforma, Mercado Pago espera una respuesta para validar que la recibiste correctamente. Para esto, debes devolver un `HTTP STATUS 200 (OK)` ó `201 (CREATED)`.

Recuerda que esta comunicación es exclusivamente entre los servidores de Mercado Pago y tu servidor, por lo cual no habrá un usuario físico viendo ningún tipo de resultado.

Luego de esto, puedes obtener la información completa del recurso notificado accediendo a la API correspondiente en `https://api.mercadopago.com/`:

Tipo               | URL                                                         | Documentación
------------------ | ----------------------------------------------------------- | --------------------
payment            | /v1/payments/[ID]?access\_token=[ACCESS\_TOKEN] | [ver documentación](https://www.mercadopago.com.ar/developers/es/reference/payments/_payments_id/get/)
chargebacks    	   | /v1/chargebacks/[ID]?access\_token=[ACCESS\_TOKEN]| -
merchant_orders    | /merchant\_orders/[ID]?access\_token=[ACCESS\_TOKEN]           | [ver documentación](https://www.mercadopago.com.ar/developers/es/reference/merchant_orders/_merchant_orders_id/get/)

### Implementa el receptor de notificaciones tomando como ejemplo el siguiente código:

```php
<?php
	MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

	$merchant_order = null;

	switch($_GET["topic"]) {
		case "payment":
			$payment = MercadoPago\Payment::find_by_id($_GET["id"]);
			// Get the payment and the corresponding merchant_order reported by the IPN.
			$merchant_order = MercadoPago\MerchantOrder::find_by_id($payment->order_id;
		case "merchant_order":
			$merchant_order = MercadoPago\MerchantOrder::find_by_id($_GET["id"]);
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

> Para obtener tu `ACCESS_TOKEN`, revisa la sección de [Credenciales](https://www.mercadopago.com.ar/account/credentials?type=basic)
