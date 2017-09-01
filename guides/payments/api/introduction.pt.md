---
  description: Mercado Pago cuenta con APIs para poder recibir pagos de forma segura en tu sitio web, aplicación móvil, o donde desees, manteniendo la experiencia de compra.
---

# Introdução à nossa API de Pagamentos

O MercadoPago conta com APIs para receber pagamentos de forma segura em seu site, aplicativo móvel ou onde desejar.

Com nossas APIs:

* Você pode criar seu próprio checkout sem que seus compradores deixem o seu site.
* Os dados do cartão nunca passarão por seus servidores, mantendo a segurança.
* Você pode salvar os dados de cartão dos seus clientes para compras futuras.

## Credenciais

Você conta com dois pares de chaves para conectar-se com a API, uma para um ambiente de testes e a outra para o ambiente de produção. Estas chaves podem ser encontradas na seção [credenciais da sua conta](https://www.mercadopago.com.ar/account/credentials).

A **chave pública**, ou *public key*, é utilizada para acessar todos os recursos que precisará de seu frontend para coletar dados de cartão de crédito e tokenizar.

A **chave privada**, ou *access token*, é utilizada para todas as requisições realizadas às APIs, tais como processamento de pagamentos, reembolsos, armazenamento de cartões, etc. As chaves privadas devem ser mantidas **confidencialmente** em seus servidores de backend e nunca devem ser publicadas.

> Ao clicar no botão “renovar credenciais”, obterá novos pares de chaves e as anteriores deixarão de funcionar. Faça isso apenas se desconfiar que suas chaves privadas foram violadas ou por questões de segurança, semelhante à alteração de senha, a cada período de tempo. Lembre-se de substituir as credenciais em sua aplicação para mantê-la funcionando.

## Modo Sandbox e Modo de Produção

Inicialmente, sua aplicação poderá interagir com o MercadoPago apenas no **Modo Sandbox**, uma réplica exata do **Modo de Produção**, desenvolvido com o objetivo de facilitar os testes durante a integração.

Forneceremos cartões de teste para que possa simular transações como se fossem reais.

Assim que tiver [testado sua aplicação](/guides/payments/api/testing.pt.md), você deverá preencher o formulário “Quero ir para produção” que encontrará em suas [credenciais](https://www.mercadopago.com.ar/account/credentials).

Sua aplicação será ativada automaticamente. Tudo o que deve fazer é substituir as chaves do sandbox pelas de produção em seu código.

#### [Começar a integrar a API](/guides/payments/api/receiving-payments-by-card.es.md).
