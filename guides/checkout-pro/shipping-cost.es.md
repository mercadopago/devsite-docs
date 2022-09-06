# Valor de envío

Valor de envío, es el valor cobrado por el envío de los productos vendidos. Si este monto ya está establecido, es posible mostrarlo por separado del monto total de la compra en el momento del pago.

1. Envía un **POST** con los atributos `cost` y `mode` del parámetro `shipments` al endpoint [/checkout/preferences](/developers/es/reference/preferences/_checkout_preferences/post).
2. En `cost`, ingrese el valor del envío.
3. En `mode`, ingrese `not_specified`.
4. Ejecuta el request.

```json
{
    "shipments":{
        "cost": 1000,
        "mode": "not_specified",
  }
}
```
