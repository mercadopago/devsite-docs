# Notificaciones IPN

> WARNING
>
> Pre-requisitos:
>
> * Tener implementado [Checkout](../payments/web-checkout/introduction.es.md).

**IPN** (Instant Payment Notification) es una notificación que se envía de un servidor a otro mediante una llamada `HTTP POST` en relación a tus transacciones.

Para recibir las notificaciones de los eventos en tu plataforma, debes [configurar previamente una URL a la cual Mercado Pago tenga acceso](https://www.mercadopago.com.ar/herramientas/notificaciones).


## Eventos

Notificamos eventos referidos a tus órdenes (`merchant_orders`) o pagos recibidos (`payment`).

La `merchant_orders` es una entidad que agrupa tanto pagos como envíos. Tendrás que consultar los datos de las órdenes que te sean notificadas.

Siempre que suceda un evento relacionado a alguno de los recursos mencionados, te enviaremos una notificación usando `HTTP POST` a la URL que especificaste.

Si la aplicación no está disponible o demora en responder, Mercado Pago reintentará la notificación mediante el siguiente esquema:

1. Reintento a los 5 minutos.
2. Reintento a los 45 minutos.
3. Reintento a las 6 horas.
4. Reintento a los 2 días.
5. Reintento a los 4 días.

MercadoPago informará a esta URL tanto en la creación como actualización de los estados de pagos u ordenes con dos parámetros:

| Campo 		| Descripción 				 | 
| ---- 		| ---- 				 |
| `topic` | Identifica de qué se trata. Puede ser `payment` o `merchant_order ` |
| `id` | Es un identificador único del recurso notificado. |


Ejemplo: Si configuraste la URL: `https://www.yoursite.com/notifications`, recibirás notificaciones de pago de esta manera: `https://www.yoursite.com/notifications?topic=payment&id=123456789`

## ¿Qué debo hacer al recibir una notificación?

Cuando recibas una notificación en tu plataforma, Mercado Pago espera una respuesta para validar que la recibiste correctamente. Para esto, debes devolver un `HTTP STATUS 200 (OK)` ó `201 (CREATED)`.

Recuerda que esta comunicación es exclusivamente entre los servidores de Mercado Pago y tu servidor, por lo cual no habrá un usuario físico viendo ningún tipo de resultado.

Luego de esto, puedes obtener la información completa del recurso notificado accediendo a la API correspondiente en `https://api.mercadopago.com/`:

Tipo               | URL                                                         | Documentación
------------------ | ----------------------------------------------------------- | --------------------
payment            | /v1/payments/[ID]?access\_token=[ACCESS\_TOKEN] | [ver documentación]()
merchant_orders    | /merchant\_orders/[ID]?access\_token=[ACCESS\_TOKEN]           | [ver documentación]()

> Para obtener tu access\_token, revisa la documentación de [Autenticación]()

### Implementa el receptor de notificaciones tomando como ejemplo el siguiente código:

```php
 <?php

require_once "mercadopago.php";

$mp = new MP("CLIENT_ID", "CLIENT_SECRET");

if (!isset($_GET["id"], $_GET["topic"]) || !ctype_digit($_GET["id"])) {
    http_response_code(400);
    return;
}

$topic = $_GET["topic"];
$merchant_order_info = null;

switch ($topic) {
    case 'payment':
        $payment_info = $mp->get("/v1/payments/".$_GET["id"]);
        $merchant_order_info = $mp->get("/merchant_orders/".$payment_info["response"]["collection"]["merchant_order_id"]);
        break;
    case 'merchant_order':
        $merchant_order_info = $mp->get("/merchant_orders/".$_GET["id"]);
        break;
    default:
        $merchant_order_info = null;
}

if($merchant_order_info == null) {
    echo "Error obtaining the merchant_order";
    die();
}

if ($merchant_order_info["status"] == 200) {
    print_r($merchant_order_info["response"]["payments"]);
    print_r($merchant_order_info["response"]["shipments"]);
}

?>
```

> Para obtener tu `CLIENT_ID` y `CLIENT_SECRET`, revisa la sección de [Credenciales](https://www.mercadopago.com.ar/account/credentials?type=basic)
