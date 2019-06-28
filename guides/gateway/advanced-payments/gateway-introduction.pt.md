---
sites_supported:
- mla
- mco
---

# Pagamentos em modo Gateway em Advanced Payments 

## Introdução

A modalidade de `Gateway` em Advanced Payments permite realizar múltiplos pagamentos com distintos números de comércio próprio e um mesmo card token. Isso implica que o comprador deve ingressar os dados do seu cartão uma única vez

Para poder realizar pagamentos nessa modalidade, deve configurar o número de comércio, acordos e métodos de pagamento na sua conta do Mercado Pago. Os mesmos serão utilizados na integração com a API.
----[mco]----
No caso da sua conta do Mercado Pago ser da Colômbia, entre em contato com o seu executivo de contas para poder configurar os números de comércio, acordos e métodos de pagamento associados.

------------

## Configurar Aplicação para processar pagamentos no modo Gateway

### Criar uma conta no Mercado Pago

É preciso criar uma conta no site do Mercado Pago do país onde deseja receber pagamentos. A modalidade Gateway está disponível atualmente apenas para Argentina e Colômbia:

* Argentina: www.mercadopago.com.ar
* Colombia: www.mercadopago.com.co

### Criar uma aplicação

A aplicação será utilizada para poder configurar os números de comércio, acordos, meios de pagamento e, posteriormente, realizar a integração com a API. É necessário criar uma aplicação acessando a página de aplicações do Mercado Pago do país correspondente a sua conta, completando as informações solicitadas.

* Argentina: https://applications.mercadopago.com.ar
* Colombia: https://applications.mercadopago.com.co

Uma vez criada a aplicação, será fornecido o valor de APP_ID, que será necessário para os passos seguintes.


### Habilitar a aplicação para receber pagamentos na modalidade Gateway

É preciso contatar seu executivo de conta informando o APP_ID da sua aplicação a fim de solicitar a habilitação da modalidade Gateway.

### Configurar informações correspondente a números de comércio, acordos e meios de pagamento associados

Para poder realizar pagamentos nessa modalidade, é preciso configurar seus números de comércio, acordos e meios de pagamento associados na sua conta do Mercado Pago. Os mesmos serão utilizados na integração com a API.

Caso sua conta do Mercado Pago seja da Colômbia, contate seu executivo de contas para poder configurar seus números de comércio, acordos e meios de pagamento associados.

### Gerar um token de cartão

É preciso gerar o token de cartão do pagador para poder processar pagamentos com a API. Este guia assume que você já sabe [como gerar um token de cartão](https://www.mercadopago.com.ar/developers/pt/guides/payments/api/receiving-payment-by-card).


