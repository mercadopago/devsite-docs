---
sites_supported:
  - mla
  - mco
  - global
---

# Mercado Pago Gateway: Smart Checkout
----[mla, mlb, mlc, mlm, mco, mlu]----
> NOTE
>
> Pre-requisito
>

> Haber realizado [la integración](https://www.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/introduction) de **Smart Checkout**
------------

----[mpe]----
> NOTE
>
> Pre-requisito
>

> Haber realizado [la integración](https://www.mercadopago.com.mx/developers/es/guides/payments/web-checkout/introduction) de **Smart Checkout**
------------

## Integración

La única modificación necesaria para soportar **Modelo Gateway** en el Smart Checkout, es agregar el atributo `processing_modes` cuando creas una preferencia.

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

¡Listo! Tu **Smart Checkout** ahora estará funcionando en Modelo Gateway.

> **Modelo híbrido:** todavía no estamos soportando este modelo en Smart Checkout. Estamos trabajando para tenerlo pronto. Te avisaremos cuando esté listo.

### Próximos pasos

* [Conciliá tus operaciones](https://www.mercadopago.com.ar/developers/es/guides/gateway/general-considerations/reconciliation)
