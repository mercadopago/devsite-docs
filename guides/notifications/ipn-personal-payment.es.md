# Notificaciones IPN para pagos en persona

Si está integrando pagos presenciales con código QR, a continuación le proporcionaremos información sobre las notificaciones de IPN en este tipo de pago para cada estado (opened e closed). Además, indicaremos cómo consultar el pedido con la referencia externa y qué será necesario hacer si el cliente escanea el código QR dos veces (dejando un pedido siempre abierto).
 
> WARNING
>
> Importante
>
> Mercado Pago requiere la integración de pagos presenciales que hayan aplicado la notificación (IPN) como principal método de aprobación.
 
## Configuración

La integración de pago con código QR utiliza el objeto `merchant_order`, que es básicamente un pedido con 1 o más artículos. Por lo tanto, para las notificaciones de IPN en pagos presenciales recuerde las siguientes reglas:

* El campo `status` del `merchant_order` permanecerá en **opened** cuando aún no tenga pagos asociados o haya rechazado/aprobado pagos por un monto menor que el total del pedido.
* El campo `status` del `merchant_order` estará ***closed** cuando la suma de los pagos aprobados sea igual o mayor que el total del pedido.

Dentro del pedido, en el objeto de pagos, encontrará todos sus pagos. Es importante obtener el ID de los pagos con estado **approved** para [puede hacer reembolsos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/account/cancellations-and-refunds). Cuando el `status` de `merchant_order` sea **closed**, asegúrese de que la suma de los pagos con el estado  **approved** sea igual o mayor que el total del pedido.

Para cada escaneo QR, se genera un "comerciante_orden" diferente. Recuerde que si el cliente hace más de un escaneo, un pedido será **opened** indefinidamente y, para cerrar la transacción, el `merchant_order` debe tener `status` = **closed**.

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

Si no se ha **escaneado** el QR en el que se publicó el pedido, la respuesta será:

```json
{
  "elements": null,
  "next_offset": 0,
  "total": 0
}
```

Si no se reciben notificaciones, será necesario aplicar como método de contingencia la ** búsqueda de pedidos ** utilizando su `external_reference` como criterio de búsqueda. La ** búsqueda ** se puede realizar mediante `external_reference` de dos formas:
 
| Formas | Descripción |
| --- | --- |
| **Manual** | El punto de venta debe incluir un botón para realizar la búsqueda. |
| **Automático** | Después de un período de tiempo razonable sin recibir ninguna notificación, se inicia una búsqueda de pedidos en cada intervalo de, por ejemplo, 5 segundos. |

```curl
curl -X GET \
   -H 'Authorization: Bearer $ACCESS_TOKEN' \
   https://api.mercadopago.com/merchant_orders?external_reference=$EXTERNAL_REFERENCE 
```