---
sites_supported:
  - mla
  - mco
indexable: false
---

# Mercado Pago Gateway: Checkout Pro
> NOTE
>
> Pre-requisito
>
> Haber realizado la integración de [Checkout Pro](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-pro/introduction).

> WARNING
>
> Contacto comercial requerido
>
> Solo puedes integrar este producto si tu contacto comercial te compartió toda la información necesaria para hacerlo.

## Integración

La única modificación necesaria para soportar **Modelo Gateway** en el Checkout Pro, es agregar el atributo `processing_modes` cuando creas una preferencia.

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

¡Listo! Tu **Checkout Pro** ahora estará funcionando en Modelo Gateway.

> **Modelo híbrido:** todavía no estamos soportando este modelo en Checkout Pro. Estamos trabajando para tenerlo pronto. Te avisaremos cuando esté listo.

### Próximos pasos

* [Conciliá tus operaciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/gateway/general-considerations/reconciliation)
