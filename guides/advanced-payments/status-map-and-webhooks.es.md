# Mapa de Estados

Un Advanced Payment puede tomar distintos estados.
Un Marketplace puede informarse de los cambios de estados de un advanced payment si se suscribe al tópico de `Split de Pagos` en [Webhooks](https://www.mercadopago.com/mla/account/webhooks), para pagos de carrito del off.

![Status map](/images/advanced-payments/advanced-payments-status-map.png)

#### Definición de estados

Estado              |Descripción                                                            |
--------------------|-----------------------------------------------------------------------|
authorized          |El pago se encuentra pendiente de captura.                             |
in_process          |El pago se encuentra en proceso de análisis.                           |
pending             |El usuario no completo el proceso de pago todavía.                     |
approved            |El pago fue aprobado y acreditado.                                     |
rejected            |El pago fue rechazado. El usuario podría reintentar el pago.           |
cancelled           |El pago fue cancelado por una de las partes o el pago expiró.          |
refunded            |El pago fue devuelto al usuario.                                       |
partially_refunded  |Fue devuelta parte del pago al usuario.                                |
charged_back        |Se ha realizado un contracargo en la tarjeta de crédito del comprador. |

#### Notificaciones de Webhooks

Si estás suscripto a las notificaciones, entonces recibirás una notificación cada vez que se modifique el Advanced Payment.

La estructura de la notificación es la siguiente:

```json
{
  "id": 1111111,
  "user_id": 232323,
  "date_created": "2019-01-23T16:14:51.107-04:00",
  "action": "splitter.update",
  "status": "approved",
  "application_id": 9999999999999,
  "live_mode": "true",
  "version": 2,
  "data": {
    "id": "ext_ref_ibp"
  }
}
```

* `id`: ID del Advanced Payment.
* `user_id`: ID del propietario del Marketplace.
* `date_created`: Fecha del evento.
* `action`: Acción que se realizo con respecto al Advanced Payment (puede ser splitter.insert o splitter.update).
* `status`: Estado del Advanced Payment.
* `application_id`: ID de la aplicación.
* `live_mode`: Indica si es una notificación productiva (true) o de sandbox (false).
* `version`: Versión del Advanced Payment.
* `data.id`: External Reference del pago.