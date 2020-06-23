---
sites_supported:
  - mla
  - mco
  - global
indexable: false
---

# Mercado Pago Gateway: Checkout de Mercado Pago
----[mla, mlb, mlc, mlm, mco, mlu]----
> NOTE
>
> Pre-requisito
>

> Haber realizado [la integración](https://www.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/introduction) de **Checkout de Mercado Pago**
------------

----[mpe]----
> NOTE
>
> Pre-requisito
>

> Haber realizado [la integración](https://www.mercadopago.com.mx/developers/es/guides/payments/web-checkout/introduction) de **Checkout de Mercado Pago**
------------
</br>
> WARNING
>
> Contacto comercial requerido
>
> Solo puedes integrar este producto si tu contacto comercial te compartió toda la información necesaria para hacerlo.

## Integración

La única modificación necesaria para soportar **Modelo Gateway** en el Checkout de Mercado Pago, es agregar el atributo `processing_modes` cuando creas una preferencia.

[[[
```php
<?php  
  $preference = new MercadoPago\Preference();
  $item = new MercadoPago\Item();
  $item->title = 'Mi producto';
  $item->quantity = 1;
  $item->unit_price = 100.0;
  $preference->items = array($item);
  $preference->$processing_modes = array('gateway');
  $preference->save();
?>
```
]]]

¡Listo! Tu **Checkout de Mercado Pago** ahora estará funcionando en Modelo Gateway.

> **Modelo híbrido:** todavía no estamos soportando este modelo en Checkout de Mercado Pago. Estamos trabajando para tenerlo pronto. Te avisaremos cuando esté listo.

## URL de retorno

Al finalizar el proceso de pago, tienes la opción de **redireccionar al comprador a tu sitio.**
Para esto, se utilizan las `back_urls`. Esta redirección puede ser automática a través del atributo `auto_return` o un link que permita volver al sitio del vendedor.

![autoreturn](/images/web-payment-checkout/autoreturn-img.png)

Atributo |	Descripción
------------ 	|	--------
`auto_return` | Redirige automáticamente a tu sitio cuando el pago finaliza como aprobado. Los valores posibles son _approved_ y _all_.
 | **_success._** URL de retorno ante pago aprobado.
 `back_url`| **_pending._** URL de retorno ante pago pendiente.
  | **_failure._** URL de retorno ante pago cancelado.


A través de las `back_url`, *retornarán los siguientes parámetros*:

Parámetro |	Descripción
------------ 	|	--------
`collection_id` | ID del pago de Mercado Pago. |
`collection_status` | Estado del pago. Por ejemplo: `approved` para un pago aprobado o `pending` para un pago pendiente. |
`external_reference` | Valor del campo `external_reference` que hayas enviado a la hora de crear la preferencia de pago. |
`payment_type` | Tipo de pago. Por ejemplo: `credit_card` para tarjetas de crédito o `ticket` para medios de pago en efectivo. |
`merchant_order_id` | ID de la orden de pago generada en Mercado Pago. |
`preference_id` | ID de la preferencia de pago de la que se está retornando. |
`site_id` | ID del país de la cuenta de Mercado Pago del vendedor. Por ejemplo: ----[mla]---- MLA para Argentina.------------ ----[mlb]---- MLB para Brasil.------------ ----[mlm]---- MLM para México.------------ ----[mpe]---- MPE para Perú.------------ ----[mlc]---- MLC para Chile.------------ ----[mco]---- MCO para Colombia.------------ ----[mlu]---- MLU para Uruguay.------------ |
`processing_mode` | Valor `gateway`. |
`merchant_account_id` | Id que indica el número de comercio |

>  La información de los parámetros dependerá de la finalización del pago en el Checkout de Mercado Pago y de que no haya abandonado el flujo antes de retornar a tu sitio a través de la `back_url` de **_failure_**.

### Próximos pasos

* [Conciliá tus operaciones](https://www.mercadopago.com.ar/developers/es/guides/gateway/general-considerations/reconciliation)
