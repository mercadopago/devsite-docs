# Recibe notificaciones de tus operaciones

Puedes recibir notificaciones relacionadas a tus operaciones implementando y configurando un receptor en tu sitio.

Allí, podrás "escuchar" los eventos relacionados a tus órdenes (`merchant_order`) y pagos recibidos (`payment`).

La `merchant_order` es una entidad que agrupa tanto pagos como envíos. Tendrás que consultar los datos de las órdenes que te sean notificadas.

Implementa el receptor de notificaciones tomando como ejemplo el siguiente código:

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
        $payment_info = $mp->get("/collections/notifications/".$_GET["id"]);
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

> Para obtener tu `CLIENT_ID` y `CLIENT_SECRET`, revisa la sección de [Credenciales](https://www.mercadopago.com/mla/account/credentials?type=basic)

Una vez lo tengas productivo, deberás configurar la url en la plataforma:

[Configura la URL para recibir las notificaciones](https://www.mercadopago.com/mla/herramientas/notificaciones)

[Ver más de notificaciones]()
