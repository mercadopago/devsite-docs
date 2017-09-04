---
sites_supported:
    - mla
    - mlb
    - mlm
    - global
---

# Introdução a assinaturas com Web Checkout

O MercadoPago permite receber pagamentos recorrentes por meio de assinaturas em apenas dois passos:

1. **Definir uma assinatura**, que estabelece quanto deve ser faturado e o intervalo de tempo.
2. **Abrir o Checkout** para capturar os dados de um cartão.

## Credenciais

Você conta com um par de chaves privadas para conectar-se à API. Essas chaves são encontradas na seção [credenciais da sua conta](https://www.mercadopago.com.ar/account/credentials).

As **chaves privadas** (também conhecidas como `access_token`) são utilizadas para todas as requisições realizadas às APIs, tais como processamento de pagamentos, reembolsos, e muito mais. As chaves privadas devem ser mantidas **confidencialmente** em seus servidores de backend e nunca devem ser publicadas.

#### Começar a criar [assinaturas](/guides/subscriptions/web-checkout/create-subscription.pt.md).
