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

### Próximos pasos

* [Conciliá tus operaciones](https://www.mercadopago.com.ar/developers/es/guides/gateway/general-considerations/reconciliation)
