---
sites_supported:
  - mla
  - mco
  - global
indexable: false
---

# Mercado Pago Gateway: Mercado Pago Checkout

> NOTE
>
> Pre-requisites
>

> Have already integrated the [Mercado Pago Checkout](https://www.mercadopago.com.ar/developers/en/guides/payments/web-checkout/introduction)

## Integration

There is only one necessary change to support the **Gateway Model** in the Mercado Pago Checkout: add the `processing_modes` attribute when you create a preference:

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

Done! Your **Mercado Pago Checkout** is now working in the Gateway Model.

> **Hybrid model:** the Mercado Pago Checkout doesn't support this mode yet. We are working to have this option soon. We'll let you know when is available to use.

### Next steps

* [Reconcile your operations](https://www.mercadopago.com.ar/developers/en/guides/gateway/general-considerations/reconciliation/)
