---
sites_supported:
  - mla
  - mco
  - global
---

# Mercado Pago Gateway: Web Checkout

> NOTE
>
> Pre-requisito
>
> Haber realizado [la integración](/guides/payments/web-checkout/introduction.es.md) de **Web Checkout**

## Integración

La única modificación necesaria para soportar **Modelo Gateway** en el Web Checkout, es agregar el atributo `processing_modes` cuando creas una preferencia.

[[[
```php
<?php  
  $preference = new MercadoPago\Preference();
  $item = new MercadoPago\Item();
  $item->title = 'Mi producto';
  $item->quantity = 1;
  $item->unit_price = 100.0;
  $preference->items = array($item);
  $processing_modes = array('gateway');
  $preference->save();
?>
```
]]]

¡Listo! Tu **Web Checkout** ahora estará funcionando en Modelo Gateway.

> **Modelo híbrido:** todavía no estamos soportando este modelo en Web Checkout. Estamos trabajando para tenerlo pronto. Te avisaremos cuando esté listo.

## Próximos pasos

* [Conciliá tus operaciones](/guides/gateway/reconciliation.es.md)