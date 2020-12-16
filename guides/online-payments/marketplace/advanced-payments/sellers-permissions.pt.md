---
  indexable: false
---

# Obtenção de permissões e dados de vendedores

O Marketplace que deseja se integrar, deve solicitar permissões a seus Vendedores para poder operar e realizar pagamentos em seu nome. Para isso, siga os passos de [Mercado Pago Connect](https://www.mercadopago.com.br/developers/pt/guides/online-payments/marketplace/checkout-api/create-marketplace).

Ao seguir estes passos, o Marketplace poderá obter o `user_id` que deve utilizar como `collector_id` em cada `disbursement` que deseja criar no Advanced Payment. É importante guardar o `user_id` do Vendedor para poder identificar o proprietário da conta de Mercado Pago caso necessite.
