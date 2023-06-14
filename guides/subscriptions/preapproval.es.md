---
  indexable: false
---

# Pagos sin CVV

> NOTE
>
> Importante
>
> Esta documentación es solo para uso por parte del equipo interno, ya que fue deprecada o es un producto exclusivo. Para más detalles, hablar con el equipo comercial o de integraciones.
> <br/>
> En el caso de tarjetas de crédito Master y Amex, en la tarjeta de crédito aparecerá como: “MERPAG*<brand_name>”. Por lo que para estos medios de pago podrán comunicar: “En tu resumen verás el cargo como MERPAG*<brand_name>” donde <Brand_name> se configura desde la cuenta de Mercado Pago del vendedor: Menu -> Configuracion > Nombre de mi negocio.
> <br/>
> Con los pagos sin cvv, se podrán realizar cobros recurrentes con Mercado Pago teniendo la libertad de amoldar la solución de la forma más óptima para tu negocio.
> <br/>
> Se facilita este instructivo con el objetivo de  brindarle todas las herramientas para poder realizar la integración de la solución. El Vendedor deberá cumplir con las políticas de integración de Mercado Pago:
> * El Vendedor deberá comunicar en forma clara e inequívoca a su base de usuarios o clientes que la plataforma de pago en su sitio web es provista por Mercado Pago, y los plazos o fechas y los montos de los pagos recurrentes.
> * En caso de que usuarios o clientes existentes del Vendedor estuvieran siendo migrados a la plataforma de Pagos Recurrentes de Mercado Pago, el Vendedor deberá comunicarlo por escrito indicando que Mercado Pago procesará los pagos, informando que en el resumen verá el cargo como Mercado Pago/Mercado Libre” (*).
> * Pre-Approval solo está disponible a través del Checkout Pro personalizado o Web Tokenize Checkout, es decir, vía la utilización de nuestras API’s.

## Crea una aplicación

Para crear una aplicación tienes que ingresar con tu cuenta de Mercado Pago a: [https://applications.mercadopago.com/](https://applications.mercadopago.com/), para poder operar pagos sin cvv la aplicación deberá ser habilitada para tal fin. Estos permisos son asignados desde Mercado Pago, por lo que deberás enviarnos el APP ID obtenido para poder realizar la configuración correspondiente.

## Cobrá el primer pago

Para la primer transacción siempre se tendrán que solicitar los datos de la tarjeta, y cursar el pago con código de seguridad. Se podrá hacer siguiendo los pasos de nuestra integración por [API](/developers/es/guides/checkout-api/receiving-payment-by-card).

## Crea un customer y asociale la tarjeta utilizada

Una vez cursado el primer pago, y habiéndote asegurado que la tarjeta es válida, crea un Cliente que estará asociado a tu cuenta y asóciale una tarjeta. Podrás hacer esto siguiendo el paso a paso indicando en nuestra integración de [Usuarios y Tarjetas](/developers/es/guides//checkout-api/advanced-integration)

## Cobra de forma recurrente a tus clientes

### Obtén el customer guardado

Para conocer los datos de tu cliente, podrás obtenerlo de la siguiente forma:

[[[
```php
<?php
require_once ('mercadopago.php'); $mp = new MP ("ENV_ACCESS_TOKEN"); 
$filters = array ("email" => "your.payer@email"); 
$customer = $mp->get("/v1/customers/search", $filters);
print_r ($customer);
?>
```
]]]

### Obtené la tarjeta asociada a tu cliente

Una vez hayas obtenido el id de tu cliente, puedes buscar la tarjeta de la siguiente forma:

[[[
```php
<?php
require_once ('mercadopago.php');
$mp = new MP ("ENV_ACCESS_TOKEN");
$cards = $mp->get ("/v1/customers/[CUSTOMER_ID]/cards");
print_r ($cards["response"]);
?>
```
]]]

### Tokeniza la tarjeta con el card_id

[[[
```php
<?php
require_once ('mercadopago.php');
$mp = new MP ("ENV_ACCESS_TOKEN");
$card_token = $mp->post ("/v1/card_tokens", array("card_id" => "cardId"));
print_r ($card_token);
?>

```
]]]

> NOTE
>
> Nota
>
> Sigue el paso a paso y evita pagos fraudulentos con nuestras recomendaciones para [mejorar la aprobación de tus pagos](/developers/es/guides/additional-content/resources/pci-compliant-merchants/receiving-payment-by-card/#bookmark_mejora_la_aprobación_enviando_el_device_fingerprint).

### Realizá el cobro:

Al estar usando un token creado con el card_id, deberás realizar el posteo del pago indicando el id del customer asociado a la tarjeta:

[[[
```php
<?php
require_once ('mercadopago.php');
$mp = new MP('ENV_ACCESS_TOKEN');
$payment_data = array(
"transaction_amount'" => 100,
"token'" => "ff8080814c11e237014c1ff593b57b4d",
"description'" => "Title of what you are paying for",
"installments'" => 1,
"payer'" => array (
"id" => "12345678"
)
);
$payment = $mp->post("/v1/payments", $payment_data);
?>
```
]]]

## Escucha notificaciones de los pagos

Cada que vez que se curse un pago y haya una novedad sobre el pago, Mercado Pago te enviará una notificación para que puedas actualizar tus sistemas. Podrás ver el paso a paso en nuestra sección de [notificaciones](/developers/es/guides/additional-content/your-integrations/notifications/webhooks)

## Reintentos

Si el pago sin cvv es rechazado, te recomendamos que sigas una lógica de reintentos según el estado del rechazo. Por ejemplo, si el pago fue rechazado por tarjeta vencida no tiene sentido que se haga un reintento. Se le deberá solicitar al cliente que informa otra tarjeta para cursar los cobros siguientes. En caso que el rechazo sea por fondos insuficientes, tiene sentido que se haga una lógica de reintentos.

## Prueba tu integración

Es muy importante que antes de salir a producción realices pruebas del flujo completo, verificando que la creación de pagos se realice en forma correcta y que los mensajes sean efectivos a la hora de comunicar al usuario.

Una buena experiencia de tus clientes en el _checkout_ ayuda a mejorar la conversión.

Cuentas con un par de [credenciales de _sandbox_]([FAKER][CREDENTIALS][URL]), que te permitián probar toda la integración en una réplica exacta del Modo Producción pudiendo simular transacciones utilizando las tarjetas de prueba:

| País | Visa | Mastercard | American Express |
| --- | --- | --- | --- |
| Argentina | 4509 9535 6623 3704 |5031 7557 3453 0604|3711 803032 57522 |
| Brasil | 4235 6477 2802 5682 |5031 4332 1540 6351|3753 651535 56885 |
| Chile | 4168 8188 4444 7115 |5416 7526 0258 2580|3757 781744 61804 |
| Colombia | 4013 5406 8274 6260 |5254 1336 7440 3564|3743 781877 55283 |
| México | 4075 5957 1648 3764 | no disponible | no disponible |
| Perú | 4009 1753 3280 6176 | no disponible | no disponible |
| Uruguay | 4157 2362 1173 6486 |5808 8877 7464 1586| no disponible |

También [puedes utilizar tarjetas de prueba de medios de pago locales de cada país](/developers/es/guides/additional-content/testing/test-cards).

Prueba todos los escenarios posibles de pago aprobado, pendiente o rechazado. Para ello debes ingresar en el formulario en el campo `card_holder_name` alguno de los siguientes prefijos:

* **APRO**: Pago aprobado.  
* **CONT**: Pago pendiente.  
* **CALL**: Rechazo llamar para autorizar.  
* **FUND**: Rechazo por monto insuficiente.  
* **SECU**: Rechazo por código de seguridad.  
* **EXPI**: Rechazo por fecha de expiración.
* **FORM**: Rechazo por error en formulario.  
* **OTHE**: Rechazo general.

En cada caso, debes comunicar a tu cliente el resultado del pago y qué debe hacer como próximo paso.
Para ello te informaremos con un HTTP Status 201 OK que el pago ha sido creado correctamente y enviaremos un código de resultado para que puedas redirigir al cliente a la página con el mensaje correcto.

## Verifica haber recibido la notificación Webhook

Mercado Pago te enviará una notificación del evento ocurrido. Valida que la hayas recibido correctamente e impactado en forma correcta en tu sistema de gestión.