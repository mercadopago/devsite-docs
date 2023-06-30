# Cómo integrar QR modelo dinámico

Para cobrar a través de un código QR modelo dinámico, deberás crear una orden y, a partir de la respuesta obtenida, crear un código con algún servicio externo.

## Flujo del modelo

Te explicamos cómo funciona el modelo dinámico:

1. Crea una orden con todos los datos necesarios para el pago.
2. En la respuesta, encontrarás un string de datos bajo el atributo `qr_data`.
3. Genera un código QR con el atributo recibido. 
4. Por último, disponibiliza el código QR al cliente como prefieras para que realice el pago.

## Crea la orden

Primero, genera la publicación de orden. En cuanto se envíen los datos a Mercado Pago, se pondrá a disposición una cadena de datos con estándar [EMVCo](https://www.emvco.com/emv-technologies/qrcodes).

Ejecuta la siguiente llamada a la API para generar una orden. En la respuesta recibirás el dato necesario para crear el código QR.

```curl
curl -X POST \
 https://api.mercadopago.com/instore/orders/qr/seller/collectors/USER_ID/pos/EXTERNAL_POS_ID/qrs \
  -H 'Authorization: Bearer ACCESS_TOKEN' \
 -d '{
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
}'
```

----[mco]----
> Si debes pagar IVA para los productos de tu orden, visita la [sección de Consideraciones IVA Colombia](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/resources/localization/iva-colombia).
------------

Puedes obtener más información en la [Referencias de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/instore_orders_v2/_instore_qr_seller_collectors_user_id_stores_external_store_id_pos_external_pos_id_orders/put).

> NOTE
> 
> Nota
> 
> El modelo no tiene la opción de eliminar la orden. Por eso, te recomendamos configurar una fecha de expiración con el atributo `expiration_date`.

Respuesta

```json
{
   "qr_data": "00020101021243650016COM.MERCADOLIBRE02013063638f1192a-5fd1-4180-a180-8bcae3556bc35204000053039865802BR5925IZABEL AAAA DE MELO6007BARUERI62070503***63040B6D"
}
```
La respuesta será un string con el estándar EMVCo. Usa el `qr_data` para disponibilizar el código QR con un generador o por tu aplicación.

----[mlb]----

Si en tu cuenta de Mercado Pago **tiene una llave Pix configurada**, la estructura del string de datos tendrá datos referentes a Pix. 
Por ejemplo:

```json
{
   "qr_data": "00020101021226940014BR.GOV.BCB.PIX2572pix-qr.mercadopago.com/instore/o/v2/fdf9ece0-6137-4e1e-a49d-94f55ec9eee25204000053039865802BR5925FELIPE AAAAAA AAAAA 6009SAO PAULO62070503***6304B61D"
}
```

------------


## Asocia la orden a una caja

Además de la generación del código QR, también tienes la opción de crear y asignar la misma orden al código QR fijo de la caja.

Ejecuta la siguiente llamada a la API para generar la orden y la asignación a la caja. En la respuesta recibirás el dato necesario para crear el código QR y se asociará al QR declarado. 

```curl
curl -X PUT \
 https://api.mercadopago.com/instore/orders/qr/seller/collectors/USER_ID/pos/EXTERNAL_POS_ID/qrs \
  -H 'Authorization: Bearer ACCESS_TOKEN' \
 -d '{
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
}'
```

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
