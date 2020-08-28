---
sites_supported:
  - mla
  - mco
  - global
indexable: false
---

# Mercado Pago Gateway: Checkout Pro

> NOTE
>
> Pre-requisites
>

> Have already integrated the [Checkout Pro](https://www.mercadopago.com.ar/developers/en/guides/payments/web-checkout/introduction)

</br>
> WARNING
>
> Commercial contact required
>
> This product is only available through prior contact with one of our executives.

## Integration

There is only one necessary change to support the **Gateway Model** in the Checkout Pro: add the `processing_modes` attribute when you create a preference:

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

Done! Your **Checkout Pro** is now working in the Gateway Model.

> **Hybrid model:** the Checkout Pro doesn't support this mode yet. We are working to have this option soon. We'll let you know when is available to use.

### Next steps

* [Reconcile your operations](https://www.mercadopago.com.ar/developers/en/guides/online-payments/gateway/general-considerations/reconciliation/)
