---
sites_supported:
  - mla
  - mlb
  - mlv
  - mco
  - mlm
  - global
---

# Pagos con QR integrados

Mercado Pago te permite recibir pagos de tus clientes a través de un único código QR que identifica el punto de venta.   Cuando creas una orden de venta en tu sistema de gestión, debes enviar a Mercado Pago el detalle de lo que quieres cobrar para que tu cliente pueda escanear el código QR y pagar lo que ha comprado.

Identificamos dos atributos importantes en la integración:

* `collector_id`: Identificador de la cuenta vendedor de Mercado Pago. Valor numérico.
* `pos_id`: Identificador del punto de venta. No puede haber valores repetidos para un mismo vendedor. Valor alfanumérico (no se aceptan caracteres especiales).

## Detalle de integración

Genera el código QR asociado al punto de venta e integra la creación de la orden pendiente en tu sistema de gestión.

### Generación del código QR

Configura la URL para cada caja, reemplazando collector_id, pos_id y access token según la cuenta y el punto de venta que corresponda:

https://api.mercadopago.com/mpmobile/instore/merchant/qr/collector_id/pos_id?access_token=ACCESS_TOKEN

Donde te devolverá como respuesta una serie de opciones para que puedas imprimir el código QR:

```json

{
 "qr": "https://www.mercadopago.com/instore/merchant/qr/$collector_id/13/5...d9.png", // QR Simple
 "qr_template": {
   "document": "https://www.mercadopago.com/instore/merchant/qr/$collector_id/13/template_5...d9.pdf", // PDF con QR y logo de Mercado Libre
   "image": "https://www.mercadopago.com/instore/merchant/qr/$collector_id/13/template_5...d9.png" // Imagen con QR logo de Mercado Libre
 },
 "pos_id": "13" // Identificador del punto de venta.
}

```

Si deseas generar tu QR de forma manual puedes utilizar cualquier generador online para convertir la siguiente URL en un código QR reemplazando collector_id, pos_id según la cuenta y el punto de venta que corresponda

https://mercadopago.com/s/qr/collector_id/pos_id

### Creación de la orden de venta

Integra en el punto de venta la creación de la orden a cobrar, haciendo un POST a la siguiente API reemplazando colletor_id y pos_id por los valores correspondientes a la cuenta y caja desde donde quieras cobrar.

https://api.mercadolibre.com/mpmobile/instore/qr/collector_id/pos_id?access_token=ACCESS_TOKEN


En el `body` especifica el detalle de la orden de la siguiente manera:

```json
{
  "external_reference" : "id de transacción interno por ejemplo",
  "items" :[{
    "title" : "Hamburguesa",
    "currency_id" : "ARS",
    "unit_price" : 100.0,
    "quantity" : 1
  },{
    "title" : "Gaseosa",
    "currency_id" : "ARS",
    "unit_price" : 25.0,
    "quantity" : 1
  }]
}

```
> Ésta orden de venta estará disponible en el QR durante 10 minutos desde su creación.

## Flujo de pago

1. Tu cliente escaneará el código QR impreso en la caja desde su billetera virtual. 
2. Mercado Pago recibe una petición por una orden pendiente de cobro para esa caja de ese vendedor. 
3. Si tiene una orden pendiente le muestra el detalle a pagar al usuario en su celular. Si no hay orden pendiente verá en su celular la comunicación correspondiente.
4. Tu cliente paga con su dinero en cuenta o tarjeta y se envía la notificación de pago.

### Notificaciones

Revisa la sección de [Webhooks](/guides/notifications/webhooks.es.md) para integrar las notificaciones de pago en tu sistema de gestión e impactar el resultado de mismo en forma inmediata, imprimiendo la factura corresponiente.


## Casos de prueba

Crea dos usuarios de prueba. Con uno simulas ser el vendedor y con su Access Token creas la orden de venta. Con el segundo simulas ser el comprador, iniciando sesión en la aplicación móvil de Mercado Pago y utilizas las [tarjetas de prueba](/guides/payments/api/testing.es.md) para realizar pagos.


```
# Get access_token

AT=`curl -s -X POST -H 'content-type: application/x-www-form-urlencoded' 'https://api.mercadopago.com/oauth/token' -d 'grant_type=client_credentials' -d 'client_id=CLIENT_ID' -d 'client_secret=CLIENT_SECRET' | grep -o '"access_token":"[^"]*"' | sed -n 's/.*"access_token":"\(.*\)"/\1/p'`

```

```
# Create test user

curl -X POST \
-H "Content-Type: application/json" \
"https://api.mercadopago.com/users/test_user?access_token=$AT" \
-d '{"site_id":"[FAKER][GLOBALIZE][UPPER_SITE_ID]"}'

```

Antes de salir a producción verifica los siguientes escenarios.



| Caso 		| Escenario 				 | Respuesta de la App        |
| ---- 		| ---- 				 | ----------        |
| 1  	| El usuario escanea un código válido antes de finalizar el pedido.|No hay orden pendiente.|
| 2   	| El usuario escanea un código con parámetros inválidos. (Hace referencia a una cuenta inexistente)|Algo no salió bien. Por favor, intenta nuevamente.|
| 3  	| El usuario escanea  un código válido, una vez finalizado el pedido.|Se continúa con el flujo normal de pago.|
| 4  	| El usuario escanea múltiples veces un código válido con pedido terminado.|Se continúa con el flujo normal de pago.|
| 5    	| El usuario escanea un código válido con pedido terminado y paga|Se continúa con el flujo normal de pago.|





