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
> PRERREQUISITO
>

> Ter realizado [la integração](https://www.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/introduction) de **Smart Checkout**
------------

----[mpe]----
> NOTE
>
> PRERREQUISITO
>

> Ter realizado [la integración](https://www.mercadopago.com.mx/developers/es/guides/payments/web-checkout/introduction) de **Smart Checkout**
------------

## Integração

A única modificação necessária para suportar **Modelo Gateway** no Smart Checkout é adicionar o atributo `processing_modes` quando criar uma preferência.

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

Pronto! Seu **Smart Checkout** agora estará funcionando no Modelo Gateway.

> **Modelo híbrido:** ainda não estamos suportando esse modelo no Smart Checkout. Estamos trabalhando para tê-lo pronto. Avisaremos a você quando estiver pronto.

### Próximos passos

* [Concilie suas operações](https://www.mercadopago.com.ar/developers/pt/guides/gateway/general-considerations/reconciliation)