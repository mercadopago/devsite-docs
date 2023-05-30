# Cómo integrar QR modelo atendido

Para cobrar a través de un código QR modelo atendido, deberás crear una orden y asociarla a la caja en la quieras cobrar.

## Flujo del modelo

Te explicamos cómo funciona el modelo atendido: 

![Flujo de pago en punto de venta QR Mercado Pago](/images/mobile/qr-user-flow.es.png)

<span></span>

1. El punto de venta registra un pedido (1a) y crea una orden asignada a una caja (1b). En este momento la orden se encuentra disponible para ser escaneada (2). 
2. Cuando el cliente escanea el QR (3) con la orden y realiza el pago (5), se recibe una notificación IPN (4a y 6b) al servidor del vendedor. Con esos datos, se obtiene el estado de la orden (7a), para validar que esté cerrada o siga abierta, pendiente de pago.


## Crear una orden

```curl
curl -X PUT \
-H 'Authorization: Bearer ACCESS_TOKEN' \
https://api.mercadopago.com/instore/qr/seller/collectors/USER_ID/stores/EXTERNAL_STORE_ID/pos/EXTERNAL_POS_ID/orders \
-d \
{
    "external_reference": "order-id-1234",
    "title": "Title",
    "description": "Mercado Pago",
    "notification_url": "https://www.yourserver.com",
    "expiration_date": "2023-08-22T16:34:56.559-04:00",
    "total_amount": 1190,
    "items": [
        {
            "sku_number": "KS955RUR",
            "category": "FOOD",
            "title": "Item1",
            "description": "Item1 Mercado Pago",
            "unit_price": 238,
            "quantity": 5,
            "unit_measure": "unit",
            "total_amount": 1190
        }
    ],
    "sponsor": {
                "id": 820480089
            }----[mco]----,
    "taxes": [
        {
            "value": 190,
            "type": "IVA"
        }
    ]------------
}
```

Puedes obtener más información en la [Referencias de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/instore_orders_v2/_instore_qr_seller_collectors_user_id_stores_external_store_id_pos_external_pos_id_orders/put).

----[mco]----
> Si debes pagar IVA para los productos de tu orden, visita la [sección de Consideraciones IVA Colombia](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/resources/localization/iva-colombia).
------------

Una vez creada la orden, ya se encuentra disponible para ser **escaneada y pagada**.


> NOTE
> 
> Nota
> 
> Ten en cuenta que si no cargaste previamente el nombre de tu negocio o el logo en [tu cuenta de Mercado Pago](https://www.mercadopago.com.ar/settings/account), el título y la imagen de la orden que el cliente vea en la app serán las del primer ítem cargado. 


## Eliminar una orden

Para eliminar la orden asociada a un QR antes de que expire por vigencia, o se cierre, puedes hacerlo a través del siguiente método: 

```curl
curl -X DELETE \
-H 'Authorization: Bearer ACCESS_TOKEN' \
https://api.mercadopago.com/instore/qr/seller/collectors/USER_ID/pos/EXTERNAL_POS_ID/orders 
```
La respuesta será un `HTTP 204 No Content`.

## Recibe notificaciones de tus órdenes

Las notificaciones IPN (Instant Payment Notification) son la **forma automática de aviso de la creación de nuevas órdenes y las actualizaciones de sus estados**. Por ejemplo si fueron aprobados, rechazados o si se encuentran pendientes.

Implementa IPN de `merchant_order` junto con una búsqueda de la orden por `external_reference` como método de contingencia.

[Recibir notificaciones IPN](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/notifications/ipn/introduction)

---
### Próximos pasos


> LEFT_BUTTON_REQUIRED_ES
>
> Integración avanzada
>
> Conoce las opciones que dispones para llevar tu integración al siguiente nivel.
>
> [Integración avanzada](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/in-person-payments/qr-code/advanced-integration)


> RIGHT_BUTTON_RECOMMENDED_ES
>
> Prueba tu integración
>
> Realiza los casos de uso más frecuentes para validar tu integración.
>
> [Prueba tu integración](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/in-person-payments/qr-code/integration-test)
