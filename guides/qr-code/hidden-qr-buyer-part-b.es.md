# Integrar QR modelo comprador

Para cobrar a través de este modelo, es necesario leer el QR y enviar el código de esta lectura junto con la información del pedido (valor, artículos, cantidad). De esta forma, la transacción se procesará automáticamente en la aplicación de Mercado Pago.

> Para obtener más información sobre este modelo de facturación, consulta la documentación [Pagos con QR modelo comprador.](/developers/es/docs/qr-code/qr-buyer/qr-buyer-part-a)

## Requisitos previos

Para que la integración funcione correctamente, es necesario:

- Crear [Sucursales](/developers/es/docs/qr-code/stores-pos/stores-and-pos).
- Generar [Cajas](/developers/es/docs/qr-code/stores-pos/stores-and-pos).
- Contar con un lector QR.
- Habilitar tu cuenta de Mercado Pago para realizar cobros con este modelo. 

## Flujo del modelo

Te explicamos como funciona el modelo comprador:

![Flujo de pago QR comprador](/images/mobile/flujo-qrc-ES.png)

1. El integrador leerá el código QR a través de un escáner. 
2. Con la información de la orden y la lectura del código QR, el integrador envía la información del cobro a la API.
3. En la respuesta de la API el integrador verá la información sobre el cobro aprobado o rechazado.

## Crea la orden

En este modelo, tendremos una API que enviará a Mercado Pago los datos de la orden y los datos obtenidos del QR escaneado para realizar el cobro del pedido.
Antes de publicar la orden, será necesario obtener 2 valores: 

-**payment_token**
Es la información obtenida luego del escaneo del QR al cliente (no modificar la información del token).
El token está encriptado en base64 conforme lo declarado por el estándar EMVCo. 

-**X-Idempotency-Key**
Es una clave única generada por el integrador que identifica el escaneo de un QR para una orden. Para evitar que la clave sea duplicada, solo debes construirla concatenando un timestamp + external pos id. 

Los datos serán colocados en el body y en los headers respectivamente, para posteriormente lanzar el request.

```curl
curl --location --request POST
 'https://api.mercadopago.com/instore/qr/buyer/collectors/USER_ID/stores/EXTERNAL_STORE_ID/pos/EXTERNAL_POS_ID/orders' \
--header 'Authorization: Bearer ACCESS_TOKEN' \
--header 'Content-Type: application/json' \
--header 'X-Idempotency-Key: 92022242-f08a-11e9-81b4-2a2a12' \
--data-raw ' {
    "external_reference" : "order-id-1234",
   "total_amount": 100.0,
    "items": [
        {
            "sku_number": "KS955RUR",
            "category": "FOOD",
            "title": "Item1",
            "description": "Item1 Mercado Pago",
            "unit_price": 20,
            "quantity": 5,
            "unit_measure": "unit",
            "total_amount": 100
        }
   ],
   "title": "Title",
    "description": "Mercado Pago",
 "scan_timestamp": 1581356798,
"payment_token":"PAYMENT_TOKEN"
   }'
```
| Atributo | Tipo (_type_) | Descripción |
| --- | --- | --- |
| `external_reference` | _string (256)_ | Identifica a quien cobra el pedido (requerido) |
| `total_amount` | _double_ | Importe total a cobrar al pagador (requerido)
Valor total a ser pagado por el comprador. (requerido) |
| `items.sku_number` | _string (256)_ | Código del ítem. |
| `items.category` | _string (256)_ | Categoria del ítem. (recomendado) |
| `items.title` | _string (256)_ | Nombre del ítem. (requerido) |
| `items.description` | _string (256)_ |  Descripción del item. |
| `items.unit_price` | _double_ | Precio unitario del item. (requerido) |
| `items.quantity` | _float_ | Número de unidades del item. (requerido) |
| `items.unit_measure` | _string (256)_ | Unidad de medida del ítem. (requerido)  |
| `items.total_amount` | _double_ | Valor total del ítem para el valor indicado. (requerido) |
| `title` | _string (256)_ | Título de la orden. |
| `description` | _string (256)_ | Descripción de la orden. |
| `scan_timestamp` | _string (256)_ | Fecha, hora del momento en el que la orden fue realizada en el punto de venta.  |
| `payment_token` | _string (256)_ | Código capturado del telefono del comprador. **Este atributo está en Base64 y tiene una longitud variable. No hay límite de caracteres**. (requerido) |

## Usos adicionales para el request

Después de usarse por primera vez, la combinación entre el X-Idempotency-Key y el token del pagador pueden ser usados para distintos fines, tal como se muestra en la siguiente tabla: 

Caso de uso | Conexión perdida entre el Punto de venta (PDV) y Mercado Pago | Evitar pagos duplicados (Ej: Error en el Punto de venta) | Evitar pagos duplicados (Ej: Error en el Punto de venta) | Procesar otra orden
----------------- | ----------------- | ----------------- | ----------------- | -----------------
Idempotency-key | Igual | Igual | Diferente | Diferente
Token del pagador | Igual | Diferente | Igual | Diferente
Respuesta de MP | Te muestra el pago anterior | Clave inválida (ya fué utilizada) | Clave inválida (ya fué utilizada) | Pago realizado

El request regresará una respuesta como la siguiente:

```json
{
   "id": 2574846382,
   "status": "approved",
   "items": [
       {
            "sku_number": "KS955RUR",
            "category": "FOOD",
            "title": "Item1",
            "description": "Item1 Mercado Pago",
            "unit_price": 20,
            "quantity": 5,
            "unit_measure": "unit",
            "total_amount": 100
        }
   ],
   "payments": [
       {
           "id": 14527153428,
           "status": "approved",
           "status_detail": "accredited",
           "payment_type_id": "account_money",
           "payment_method_id": "account_money",
           "token": null,
           "transaction_amount": 100,
           "installments": 1,
           "processing_mode": null,
           "issuer_id": null,
           "coupon_amount": 0,
           "campaign_id": null,
           "coupon_code": null,
           "description": "Mercado Pago",
           "external_reference": "order-id-1234",
           "statement_descriptor": null,
           "date_of_expiration": null,
           "merchant_account_id": null,
           "payment_method_option_id": null,
           "additional_info": null,
           "net_amount": null,
           "transaction_details": {
               "external_resource_url": null,
               "total_paid_amount": 100
           },
```