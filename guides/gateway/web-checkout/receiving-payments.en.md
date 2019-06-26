---
sites_supported:
  - mla
  - mco
  - global
---

# Mercado Pago Gateway: Web Checkout

> NOTE
>
> Pre-requisites
>
> Have already integrated the [Web Checkout](https://www.mercadopago.com.ar/developers/en/guides/payments/web-checkout/introduction)

## Integration

There is only one necessary change to support the **Gateway Model** in the Web Checkout: add the `processing_modes` attribute when you create a preference:

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

Done! Your **Web Checkout** is now working in the Gateway Model.

> **Hybrid model:** the Web checkout doesn't support this mode yet. We are working to have this option soon. We'll let you know when is available to use.

## Next steps

* [Reconcile your operations](/guides/gateway/reconciliation.en.md)
