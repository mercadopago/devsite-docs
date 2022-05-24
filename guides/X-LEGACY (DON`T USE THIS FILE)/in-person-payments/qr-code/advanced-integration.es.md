# Integración avanzada

## Devoluciones de tus pagos

----[mla, mlm, mco, mlu, mlb, mlc]----

Las devoluciones suceden cuando el pago se realizó pero el vendedor decide anularlo total o parcialmente.
Puedes encontrar toda la información en la [sección Devoluciones y cancelaciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/account/cancellations-and-refunds).

------------

----[mpe]----

Las devoluciones suceden cuando el pago se realizó pero el vendedor decide anularlo totalmente.
Puedes encontrar toda la información en la [sección Devoluciones y cancelaciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/account/cancellations-and-refunds).

------------

> WARNING
> 
> Nota
> 
> Ten en cuenta que para pagos presenciales, solo puedes efectuar devoluciones pero no cancelaciones.

Vea el proceso de reversión de pagos a través de QR CODE, [en este video tutorial](https://youtu.be/JXzDIos_fRA?list=PLCazXKuqZp3hGVY3bBhEO0ItFhIic5UpK).


## Obtener datos de la orden

Si deseas obtener la orden vigente de una caja, también puedes hacerlo.

```curl
curl -X GET \
-H 'Authorization: Bearer ACCESS_TOKEN' \
https://api.mercadopago.com/instore/qr/seller/collectors/USER_ID/pos/EXTERNAL_POS_ID/orders
```
Puedes obtener más información en la [Referencias de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/instore_orders_v2/_instore_qr_seller_collectors_user_id_pos_external_pos_id_orders/get).


## Genera reportes de tus ventas

Integra los [reportes de conciliación de Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/reports/general-considerations/reconciliation-reports) con tu sistema para conciliar tus ventas y conocer los movimientos de tu cuenta.

## Prueba y valida tu integración

Detallamos todos los casos necesarios que debes probar para validar que tu sistema esté integrado correctamente con Mercado Pago. 
Puedes encontrar todos los casos en la [sección de Pruebas](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/in-person-payments/qr-code/integration-test).

Vea más detalles en este [video tutorial](https://youtu.be/oQqJkqyjegk?list=PLCazXKuqZp3hGVY3bBhEO0ItFhIic5UpK).

---
### Próximos pasos


> LEFT_BUTTON_RECOMMENDED_ES
>
> Prueba tu integración
>
> Realiza los casos de uso más frecuentes para validar tu integración.
>
> [Prueba tu integración](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/in-person-payments/qr-code/integration-test)
