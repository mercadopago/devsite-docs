---
sites_supported:
  - mla
  - mco
---

# Pagamentos no modo Gateway em Advanced Payments

## Introdução

A modalidade de `Gateway` em Advanced Payments permite realizar múltiplos pagamentos com diferentes números de comércio próprio e em um mesmo card token. Isso significa que o comprador deve ingressar os dados de seu cartão uma única vez.

Para poder realizar pagamentos nessa modalidade, deverá configurar seus números de comércio, acordos e meios de pagamento associados na configuração da sua conta Mercado Pago. Eles serão utilizados na integração com a API.
----[mco]----
No caso da sua conta Mercado Pago ser da Colômbia, entre em contato com o seu executivo de contas para poder configurar os números de comércio, acordos e meios de pagamento associados.
------------

## Configurar Aplicação para processar pagamentos no modo Gateway

### Criar uma conta no Mercado Pago

Você deve criar uma conta no website do Mercado Pago do país onde desejar receber pagamentos. Atualmente, modalidade Gateway é disponibilizada apenas para Argentina e Colômbia:

* [Argentina](https://www.mercadopago.com.ar)
* [Colombia](https://www.mercadopago.com.co)

### Criar uma aplicação

A aplicação será utilizada para poder configurar os números de comércio, acordos e meios de pagamento e, depois, realizar a integração com a API. Deverá criar uma aplicação acessando a página de aplicações do Mercado Pago do país correspondente à sua conta e preenchendo as informações requisitadas:

* [Argentina](https://applications.mercadopago.com.ar)
* [Colombia](https://applications.mercadopago.com.co)

Uma vez criada a aplicação, será obtido o valor de APP_ID, que será necessário para os passos seguintes.

### Habilitar a aplicação para receber pagamentos na modalidade Gateway

É necessário contatar seu executivo de contas e informar o APP_ID de seu aplicativo, a fim de requerer a habilitação da modalidade Gateway.

### Carregamento de informações correspondentes a números de comércios, acordos e meios de pagamento associados

Para poder realizar pagamentos nessa modalidade, você deverá configurar seus números de comércio, acordos e meios de pagamento associados na sua conta Mercado Pago. Eles serão utilizados na integração com a API.

Se sua conta Mercado Pago for da Colômbia, entre em contato com seu executivo de contas para poder configurar seus números de comércio, acordos e meios de pagamento associados.

### Gerar um token de cartão

É necessário gerar o token de cartão do pagador para poder processar pagamentos com a API. Este guia assume que você já sabe [Como gerar um token de cartão](https://www.mercadopago.com.ar/developers/pt/guides/payments/api/receiving-payment-by-card).
