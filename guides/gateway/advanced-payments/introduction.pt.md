---
sites_supported:
  - mla
  - mco
---

# Pagamentos no modo Gateway em Advanced Payments

## Introdução

A modalidade de `Gateway` em Advanced Payments permite realizar múltiplos pagamentos com diferentes números de comércio próprios e em um mesmo card token. Isso significa que o comprador deve ingressar os dados de seu cartão uma única vez.

Para poder realizar pagamentos nessa modalidade, deverá fazer o carregamento de seus números de comércios, acordos e meios de pagamento associados desde a configuração de sua conta de Mercado Pago. Eles serão utilizados na integração com o API.
----[mco]----
No caso da sua conta do Mercado Pago ser da Colômbia, entre em contato com o seu executivo de contas para poder configurar os números de comércio, acordos e métodos de pagamento associados.
------------

## Configurar Aplicativo para processar pagamentos no modo Gateway

### Criar uma conta de Mercado Pago

Você deve criar uma conta desde o website de Mercado Pago do país onde desejar receber pagamentos. Atualmente, modalidade Gateway é disponibilizada apenas para Argentina e Colômbia:

* [Argentina](https://www.mercadopago.com.ar)
* [Colombia](https://www.mercadopago.com.co)

### Criar um aplicativo

O aplicativo será utilizado para poder fazer o carregamento dos números de comércio, acordos e meios de pagamento e, depois, realizar a integração com o AAPI. Deverá criar um aplicativo acessando a página de aplicativos de Mercado Pago do país correspondente à sua conta e preenchendo as informações requisitadas:

* [Argentina](https://applications.mercadopago.com.ar)
* [Colombia](https://applications.mercadopago.com.co)

Uma vez criado o aplicativo, você vai obter o valor de APP_ID, que será necessário para os seguintes passos.

### Habilitar o aplicativo para receber pagamentos na modalidade Gateway

Deve entrar em contato com seu executivo de contas informando o APP_ID de seu aplicativo, aos fins de requerer a habilitação da modalidade Gateway.

### Carregamento de informações correspondentes a números de comércios, acordos e meios de pagamento associados

Para poder realizar pagamentos nessa modalidade, você deverá fazer o carregamento de seus números de comércios, acordos e meios de pagamento associados de sua conta de Mercado Pago. Eles serão utilizados na integração com o API.

Se sua conta de Mercado Pago for da Colômbia, entre em contato com seu executivo de contas para poder fazer o carregamento de seus números de comércios, acordos e meios de pagamento associados.

### Gerar um token de cartão

Deve gerar o token de cartão do pagador para poder processar pagamentos com o API. Este guia assume que você já sabe [Como gerar um token de cartão](https://www.mercadopago.com.ar/developers/pt/guides/payments/api/receiving-payment-by-card).
