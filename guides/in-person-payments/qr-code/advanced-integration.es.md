---
sites_supported:
  - mla
  - mpe
  - mco
  - mlu
  - mlm
  - mlc
  - mlb
---

# Integración avanzada

## Devoluciones de tus pagos

Las devoluciones suceden cuando el pago se realizó pero el vendedor decide anularlo total o parcialmente.
Puedes encontrar toda la información en la [sección Devoluciones y cancelaciones](https://www.mercadopago.com.ar/developers/es/guides/manage-account/account/cancellations-and-refunds).

> WARNING
> 
> Nota
> 
> Ten en cuenta que para pagos presenciales, solo puedes efectuar devoluciones pero no cancelaciones.

## Vigencia de la orden

Por defecto, la orden del QR expira a los 10 minutos de ser creada o automáticamente al ser cerrada. 

Si se requiere un tiempo de expiración diferente, se puede enviar el _header_ `X-Ttl-Store-Preference` con el tiempo deseado en segundos.
Por ejemplo, para que esté disponible durante 5 minutos se debe enviar el _header_ `X-Ttl-Store-Preference: 300`.

## Obtener datos de la orden

Si deseas obtener la orden vigente de una caja, también puedes hacerlo.

```curl
curl -X GET \
-H 'Authorization: Bearer ACCESS_TOKEN' \
https://api.mercadopago.com/instore/qr/seller/collectors/USER_ID/pos/EXTERNAL_POS_ID/orders  -d 
```
Puedes obtener más información en la [Referencias de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/instore_orders_v2/_instore_qr_seller_collectors_user_id_pos_external_pos_id_orders/get/).


## Genera reportes de tus ventas

Integra los [reportes de conciliación de Mercado Pago](https://www.mercadopago.com.ar/developers/es/guides/manage-account/reports/general-considerations/reconciliation-reports/) con tu sistema para conciliar tus ventas y conocer los movimientos de tu cuenta.

## Prueba y valida tu integración

Detallamos todos los casos necesarios que debes probar para validar que tu sistema esté integrado correctamente con Mercado Pago. 
Puedes encontrar todos los casos en la [sección de Pruebas](https://www.mercadopago.com.ar/developers/es/guides/in-person-payments/qr-code/integration-test/).

---
### Próximos pasos


> LEFT_BUTTON_RECOMMENDED_ES
>
> Prueba tu integración
>
> Realiza los casos de uso más frecuentes para validar tu integración.
>
> [Prueba tu integración](https://www.mercadopago.com.ar/developers/es/guides/in-person-payments/qr-code/integration-test/)
