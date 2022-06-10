# Cómo integrar QR modelo dinámico

Para cobrar a través de un código QR modelo dinámico, deberás crear una orden y, a partir de la respuesta obtenida, crear un código con algún servicio externo.

## Flujo del modelo

Te explicamos cómo funciona el modelo dinámico:

1. Crea una orden con todos los datos necesarios para el pago.
2. En la respuesta, encontrarás un string de datos bajo el atributo `qr_data`.
3. Genera un código QR con el atributo recibido.
4. Por último, disponibiliza el código QR al cliente como prefieras para que realice el pago.

Existen dos maneras de seguir estos pasos: **crear una orden**, y **crear una orden asociada a una caja**. Las veremos a continuación.

## Crea una orden

Primero, genera la publicación de orden. En cuanto se envíen los datos a Mercado Pago, se pondrá a disposición un string con estándar [EMVCo](https://www.emvco.com/emv-technologies/qrcodes).

Para generar una orden, accede a nuestra [Referencia de API](/developers/es/reference/qr-dynamic/_instore_orders_qr_seller_collectors_user_id_pos_external_pos_id_qrs/post) y ejecuta el curl que encontrarás allí. En la respuesta recibirás el dato necesario para crear el código QR.


----[mco]----
> Si debes pagar IVA para los productos de tu orden, visita la [sección de Consideraciones IVA Colombia](/developers/es/guides/additional-content/localization/iva-colombia).
------------

> NOTE
>
> Nota
>
> El modelo no tiene la opción de eliminar la orden. Por eso, te recomendamos configurar una fecha de expiración con el atributo `expiration_date`.

**Respuesta**

```json
{
  "qr_data": "00020101021243650016COM.MERCADOLIBRE02013063638f1192a-5fd1-4180-a180-8bcae3556bc35204000053039865802BR5925IZABEL AAAA DE MELO6007BARUERI62070503***63040B6D"
}
```
La respuesta será un string con el estándar EMVCo. Usa el `qr_data` para disponibilizar el código QR con un generador o por tu aplicación.

----[mlb]----

Si en tu cuenta de Mercado Pago **tienes una llave Pix configurada**, la estructura del string de datos tendrá datos referentes a Pix.
Por ejemplo:

```json
{
  "qr_data": "00020101021226940014BR.GOV.BCB.PIX2572pix-qr.mercadopago.com/instore/o/v2/fdf9ece0-6137-4e1e-a49d-94f55ec9eee25204000053039865802BR5925FELIPE AAAAAA AAAAA 6009SAO PAULO62070503***6304B61D"
}
```

------------


## Crear una orden asociada a una caja

Además de la generación del código QR, también tienes la opción de crear y asignar la misma orden al código QR fijo de la caja.

Ejecuta la llamada a la API detallada [en esta sección de nuestra Referencia de API](/developers/es/reference/qr-dynamic/_instore_orders_qr_seller_collectors_user_id_pos_external_pos_id_qrs/put) para generar la orden y la asignación a la caja. En la respuesta recibirás el dato necesario para crear el código QR y se asociará al QR declarado.


## Recibe notificaciones de tus órdenes

Las notificaciones IPN (Instant Payment Notification) son la **forma automática de aviso de la creación de nuevas órdenes y las actualizaciones de sus estados**. Por ejemplo si fueron aprobados, rechazados o si se encuentran pendientes.

Implementa IPN de `merchant_order` junto con una búsqueda de la orden por `external_reference` como método de contingencia.

[Recibir notificaciones IPN](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/notifications/ipn/introduction)


---

> PREV_STEP_CARD_ES
>
> Qué es QR modelo atendido
>
> Una introducción a QR Modelo atendido
>
> [Introducción](/developers/es/docs/qr-code/qr-attended-model/introduction)

> NEXT_STEP_CARD_ES
>
> Prueba tu integración
>
> Accede a más información sobre cómo probar tu integración.
>
> [Prueba tu integración](/developers/es/docs/qr-code/qr-dynamic-model/qr-integration-test)