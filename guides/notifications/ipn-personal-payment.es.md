# Notificaciones IPN para pagos en persona

Si está integrando pagos presenciales con código QR, a continuación le brindaremos información sobre las notificaciones de IPN en este tipo de pago para cada estado (abierto y cerrado). Además, indicaremos cómo consultar el pedido con la referencia externa y qué será necesario hacer si el cliente escanea el código QR dos veces (dejando un pedido siempre abierto).
 
> WARNING
>
> Importante
>
> Mercado Pago indica a las integraciones que utilicen este método de notificación IPN como método principal para recibir notificaciones de pago.
 
## Configuración

La integración de pago con código QR utiliza el objeto `merchant_order`, que es la identificación del pedido en función de cada lectura realizada en el QR.

En las notificaciones de IPN para pagos en persona, el campo `status` del `merchant_order` permanecerá con el estado **opened** hasta que se identifiquen los pagos aprobados y el monto del pago sea igual o mayor que el total del pedido.

Dentro del pedido, en el objeto de pagos, encontrará todos los pagos realizados, ya sean aprobados o rechazados. Es importante obtener el ID de los pagos con estado ** aprobado ** para poder realizar devoluciones/devoluciones.

Para cada escaneo QR, se genera un "comerciante_orden" diferente. Recuerde que si el cliente hace más de un escaneo, un pedido estará **opened** indefinidamente y, para cerrar la transacción, el `merchant_order` debe tener` status` = **closed**.

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

Si no se reciben notificaciones, será necesario aplicar como método de contingencia la **búsqueda de pedidos** utilizando su `external_reference` como criterio de búsqueda. La **búsqueda** se puede realizar mediante `external_reference` de dos formas:
 
| Formas | Descripción |
| --- | --- |
| **Manual** | El punto de venta debe incluir un botón para realizar la búsqueda. |
| **Automático** | Después de 5 minutos sin recibir ninguna notificación, se inicia una búsqueda de pedidos en cada intervalo de, por ejemplo, 5 segundos. |

```curl
curl -X GET \
   -H 'Authorization: Bearer $ACCESS_TOKEN' \
   https://api.mercadopago.com/merchant_orders?external_reference=$EXTERNAL_REFERENCE 
```