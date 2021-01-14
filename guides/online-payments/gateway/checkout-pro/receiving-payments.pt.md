---
sites_supported:
  - mla
  - mco
indexable: false
---

# Mercado Pago Gateway: Checkout Pro
> NOTE
>
> Pré-requisito
>
> Ter realizado la integração de [Checkout Pro](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-pro/introduction).

> WARNING
>
> Contato comercial necessário
>
> Você só pode integrar este produto se o seu contato comercial compartilhar todas as informações necessárias para isso.

## Integração

A única modificação necessária para suportar **Modelo Gateway** no Checkout Pro é adicionar o atributo `processing_modes` quando criar uma preferência.

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

Pronto! Seu **Checkout Pro** agora estará funcionando no Modelo Gateway.

> **Modelo híbrido:** ainda não estamos suportando esse modelo no Checkout Pro. Estamos trabalhando para tê-lo pronto. Avisaremos a você quando estiver pronto.

### Próximos passos

* [Concilie suas operações](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/gateway/general-considerations/reconciliation)
