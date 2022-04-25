# Troubleshooting

**Si no se reciben notificaciones**, será necesario aplicar como método de contingencia la búsqueda a demanda utilizando el `external_reference` de la orden como criterio de búsqueda. La misma se puede realizar mediante dos mecanismos:

|Mecanismo|Descripción|
|---|---|
|Manual|El punto de venta debe incluir un botón para realizar la búsqueda.|
|Automático|Después de 30 segundos sin recibir ninguna notificación, se inicia una búsqueda de pedidos en cada intervalo de, por ejemplo, 5 segundos.|

Para cualquiera de los mecanismos descritos anteriormente utilizaremos siguiente el endpoint:

```curl
curl --location --request GET 'https://api.mercadopago.com/merchant_orders?external_reference=EXTERNAL_REFERENCE' \
--header 'Authorization: Bearer ACCESS_TOKEN'
```

> NOTE
>
> Nota
>
> Esta solución utiliza la misma [API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/merchant_orders/_merchant_orders_id/get) que usamos en la sección [Consulta de la orden](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/additional-content/notifications/ipn/inperson-order-query), agregando el query param `external_reference` para buscar el pago en caso de no recibir la notificación.

La respuesta será la misma que utilizando el ID de la orden y deberán utilizar los mismos criterios antes mencionados para confirmar el pago de la misma.

Si no se ha escaneado el QR en el que se publicó el pedido, la respuesta será:

```json
{
  "elements": null,
  "next_offset": 0,
  "total": 0
}
```

> WARNING
>
> Importante
>
> Para homologar la integración de pagos presenciales, desde Mercado Pago requerimos que tengan implementada la notificación (IPN) a Merchant Orders como método principal. 
> <br>
> La búsqueda de orden por `external_reference` deberá usarse sólo como contingencia ante el eventual caso que no se reciban notificaciones.

