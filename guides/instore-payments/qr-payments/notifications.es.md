---
sites_supported:
  - mla
  - mlb
  - mlv
  - mco
  - mlm
  - global
---

# Notificaciones

> INDEX
>
> En esta página
>
>
>
> [Recibe notificaciones de pago](https://www.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/previous-requirements#bookmark_glosario)
>
> [¿Qué debo hacer al recibir una notificación?](https://www.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/previous-requirements#bookmark_requisitos_previos)
>
> [Búsqueda del pago](https://www.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/previous-requirements#bookmark_requisitos_previos)

## Recibe notificaciones de pagos

Las notificaciones IPN (Instant Payment Notification) son la **forma automática de notificar sobre la creación de nuevos pagos y las actualizaciones de sus estados**. Por ejemplo si fueron aprobados, rechazados o si se encuentran pendientes.

Cada que vez que suceda un evento relacionado a un pago para un determinado vendedor, se le envía una notificación IPN y Webhook a la URL informada en la **notification_url de la orden**, con dos parámetros:

Se trata de un HTTP POST conteniendo el topic y el id en cuestión como QueryString; además se envía un body que varía según sea IPN o Webhook.


| Campo | Descripción |
| ---------------------------- | ------------------------- |
| topic | Identifica de qué se trata. Puede ser payment,  chargebacks o merchant_orders |
| id | Es un identificador único del recurso notificado. |

**Ejemplo:** Si configuraste la URL: `https://www.tuempresa.com/notifications`, recibirás notificaciones de pago de la siguiente manera:

> NOTE
> 
> Tip
> 
> A modo de prueba, puede usarse `Hookbin.com` para realizar pruebas para recibir notificaciones IPN y Webhook. 

```curl
curl -X POST https://www.tuempresa.com/notifications?topic=payment&id=123456789 -d 
```

Respuesta

[[[
```json
===
En IPN - Payment
===
{
"resource":"https://api.mercadolibre.com/collections/notifications/1234567890",
"topic":"payment"
}
```
]]]

[[[
```json
===
En IPN - Merchant Order
===
{
  "resource": "https://api.mercadolibre.com/merchant_orders/1234567890",
  "topic": "merchant_order"
}
```
]]]

[[[
```json
===
En Webhook
===
{
  "action": "payment.created",
  "api_version": "v1",
  "data": {
    "id": "1234567890"
  },
  "date_created": "2019-07-30T18:33:17Z",
  "id": 5273371459,
  "live_mode": true,
  "type": "payment",
  "user_id": "446566691"
}
```
]]]

## ¿Qué debo hacer al recibir una notificación?

Cuando recibas una notificación en tu plataforma, Mercado Pago espera una respuesta para validar que la recibiste correctamente. Para esto, debes devolver un HTTP STATUS 200 (OK) ó 201 (CREATED).

> NOTE
> 
> Tip
> 
> Nota: Recuerda que esta comunicación es exclusivamente entre los servidores de Mercado Pago y tu servidor, por lo cual no habrá un usuario físico viendo ningún tipo de resultado.

Una vez recibida la notificación, se deberá obtener el estado de la orden, buscando a la [merchant_order](https://www.mercadopago.com.ar/developers/es/reference/merchant_orders/_merchant_orders_id/get/):

```curl
curl -X GET 
https://api.mercadopago.com/merchant_orders/$ID?access_token=$ACCESS_TOKEN -d
```

Existen dos casos donde se le envía al comerciante una notificación respecto a una merchant_order:

> NOTE
> 
> Nota
> 
> Nota: Las respuestas de los endpoints en los siguientes casos están resumidas para la claridad en la explicación. Las respuestas completas las encontrarás [aquí](https://www.mercadopago.com.ar/developers/es/reference/merchant_orders/_merchant_orders_id/get/).

**1er caso:** Se recibe una notificación de merchant_order cuando el cliente escanea el QR. 

 1. Cada escaneo genera una merchant_order distinta, por lo que se recibe una notificación por cada escaneo del QR.
 2. En este caso, el status todavía está abierto y no hay ningún pago.
 3. Todavía no existe ningún pago, por lo que el atributo payments estará vacío

 La respuesta que se recibe luego de buscar la orden es la siguiente:

 ```json
 {
 "id": 1126664483,
 "status": "opened",
 "paid_amount": 0,
 "payments": [],
 "total_amount": 4,
  [...],
}
```

2do caso: Se recibe una notificación de merchant_order cuando la orden ha sido cerrada.

Esto puede darse cuando un solo pago complete la totalidad de la orden, o cuando la suma de los pagos completen el monto total de la orden:

**Un pago**
 1. Podemos verificar en este caso que se ha aprobado el pago y el status de la merchant_order ahora está cerrada.
 2. Esto significa que la orden ya está paga y puede generarse la factura correspondiente.

La respuesta que se recibe luego de buscar la orden es la siguiente:

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
      [...] 
     },
    ],
    "total_amount": 4,
   [...]  
}
```

**Más de un pago**

 1. Podemos verificar en este caso que se ha aprobado el pago en segundo lugar, y el status de la merchant_order ahora está cerrada.
 2. Esto significa que la orden ya está paga y puede generarse la factura correspondiente.
 3. Estos casos pueden darse si el cliente ha decidido pagar con dinero en cuenta y con una tarjeta de crédito/débito.

La respuesta que se recibe luego de buscar la orden es la siguiente:

```json
{
  "id": 1126664483,
  "status": "closed",
  "payments": [
     {
      "id": 4996721970,
      "transaction_amount": 6,
      "status": "approved",
      [...], },
     {
      "id": 4996721971,
      "transaction_amount": 4,
      "status": "approved",
      [...], },  
		    ],
  "total_amount": 10,
  [...]
}
```

> NOTE
> 
> Nota
> 
> Nota: Cuando una orden esta en status closed, significa que la suma de los pagos aprobados es igual al valor de la orden generada en Mercado Pago, por lo que la transacción de venta puede ser concluída.

## Búsqueda de la orden 

Como método de redundancia y para brindar los mejores servicios tanto a los compradores como para los usuarios del Punto de Venta, se recomienda implementar, como método secundario, la  **búsqueda de la orden manual** utilizando el external_reference definido en la orden como criterio de búsqueda. De esta manera se logra obtener el status de la orden para validar si la misma está abierta o cerrada.

```curl
curl -X GET https://api.mercadopago.com/merchant_orders?external_reference=$EXTERNAL_REFERENCE&access_token=$ACCESS_TOKEN -d
```

Se puede implementar la búsqueda por external_reference de dos formas:

 - Manual: el cajero tendría un botón para disparar una búsqueda.
 - Automática: pasado un tiempo prudencial sin haber recibido notificación, se comenzaría con una búsqueda proactiva de la orden cada un intervalo de, por ejemplo, 5 segundos.

Respuestas:

La respuesta que se recibe si todavía no se escaneó el QR al cual se publicó la orden es la siguiente:

```json
{
   "elements": null,
   "next_offset": 0,
   "total": 0
 }
```
