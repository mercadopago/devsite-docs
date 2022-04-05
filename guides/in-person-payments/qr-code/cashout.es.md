# Retiros de efectivo (CashOut)

> NOTE
>
> Importante
>
> Esta documentación es solo para uso por parte del equipo interno, ya que fue deprecada o es un producto exclusivo. Para más detalles, hablar con el equipo comercial o de integraciones.

Esta funcionalidad le permite al operador proporcionar dinero al cliente, descontando el monto directamente del saldo en la cuenta del comprador que realizó la transacción.

Las características principales son:
* Los retiros pueden estar vinculados a una compra o no y este proceso dependerá de la necesidad del vendedor.
* La función es compatible con los modelos **QR Comprador**, **QR Atendido**, **QR Dinámico** y **QR Desatentido**.
* Se puede agregar a una integración siempre que sea compatible.

> NOTE
>
> Importante
>
> Solo puedes integrar este producto si tu contacto comercial comparte toda la información necesaria.

## Incluir retiro

Para incluir el retiro del pago en tu integración, envía un PUT al endpoint de creación del pedido [/instore/qr/seller/collectors/{user_id}/stores/{external_store_id}/pos/{external_pos_id}/orders](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/instore_orders_v2/_instore_qr_seller_collectors_user_id_stores_external_store_id_pos_external_pos_id_orders/put) incluyendo en el `body` el importe total a retirar de la cuenta del cliente.

Al incluir el objeto dentro de la orden de pago, tendremos un cuerpo como el que se muestra en el siguiente ejemplo:

[[[
```json
​​{
    "external_reference": "order-id-1234",
    "title": "Title",
    "description": "Mercado Pago",
    "notification_url": "https://www.yourserver.com",
    "expiration_date": "2023-08-22T16:34:56.559-04:00",
    "total_amount": 1390,
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
            },
    "cash_out": {
                "amount": 200
            }
}
```
]]]

| Atributo | Tipo | Descripción |
|---|---|--- |
| Amount | Double | Importe total a retirar de la cuenta del cliente (requerido).|

## Confirmar retiro

Para confirmar el estado de retiro de dinero del saldo de Mercado Pago, envía un POST con una combinación de información y atributos (“status” y “status_detail”) configurado por el vendedor al endpoint [/instore/orders/{merchant_order_id}/confirmación](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/cashout-qr/_instore_orders_merchant_order_id_confirmation/post).
 
Al retirar dinero, el flujo correcto a completar depende de varios factores, como la cantidad de dinero disponible en la cuenta, que no es visible hasta que se completa la transacción. Consulte a continuación las posibles opciones de combinación y las devoluciones de API:
 
| Estado | Status_detail | Volver |
| --- | --- |--- |
| Confirm | confirmado | Confirmar el retiro|
| Cancelled | manually_cancelled <br/> confirmation_not_received <br/> other | Retiro cancelado. |
| Fail | internal_communication_error <br/> otro | Error al realizar el retiro. Se realiza una devolución al cliente referente al valor de retiro, ya sea de la compra o del retiro puro.|