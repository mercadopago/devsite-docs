---
sites_supported:
    - mla
    - mlb
    - mlm
    - global
---


# Introdução

> WARNING
>
> Pré-requisitos
>
> * Possuir a [captura de dados de cartão](https://www.mercadopago.com.br/developers/pt/guides/payments/api/receiving-payment-by-card#captura-de-dados-de-cartão) implementada.
> * Possuir [Clientes e Cartões Armazenados](https://www.mercadopago.com.br/developers/pt/guides/payments/api/customers-and-cards) implementado.


O Mercado Pago permite receber pagamentos recorrentes por meio de assinaturas.

Você só precisa inscrever seus clientes nos planos de assinatura e processaremos os pagamentos de forma automática e recorrente. Enviaremos uma notificação webhook para lhe informar o resultado dos pagamentos.

Nos planos de assinatura você poderá configurar:

* Frequência do pagamento: A cada quantos dias ou meses a cobrança será realizada em que dia do mês.
* Duração da assinatura: ilimitada ou limitada a um número de repetições de cobranças.
* Período de teste gratuito.
* Custo adicional para o início da assinatura.

## Credenciais

Você contará com dois pares de chaves para conectar-se à API, uma para um ambiente de testes e a outra para o ambiente de produção. Essas chaves são encontradas na seção [credenciais da sua conta](https://www.mercadopago.com.ar/account/credentials).

A **chave pública**, ou *public key*, é utilizada para acessar todos os recursos que precisará de seu frontend para coletar dados de cartão de crédito e tokenizar.

A **chave privada** ou *access_token* é utilizada para todas as requisições realizadas às APIs, tais como processamento de pagamentos, reembolsos, armazenamento de cartões, etc. As chaves privadas devem ser mantidas **confidencialmente** em seus servidores de backend e nunca devem ser publicadas.

> Ao clicar no botão “renovar credenciais”, obterá novos pares de chaves e as anteriores deixarão de funcionar. Faça isso apenas se desconfiar que suas chaves privadas foram violadas ou por questões de segurança, semelhante à alteração de senha, a cada período de tempo. Lembre-se de substituir as credenciais em sua aplicação para mantê-la funcionando.


## Modo Sandbox e Modo de Produção

Inicialmente, sua aplicação poderá interagir com o Mercado Pago apenas no **Modo Sandbox**, uma réplica exata do **Modo de Produção**, desenvolvido com o objetivo de facilitar os testes durante a integração.

Fornecermos cartões de teste para que possa simular transações como se fossem reais.

Assim que tiver [testado sua aplicação](https://www.mercadopago.com.br/developers/pt/guides/subscriptions/api/testing), você deverá preencher o formulário “Quero ir para produção” que encontrará em suas [credenciais](https://www.mercadopago.com.ar/account/credentials).

Sua aplicação será ativada automaticamente. Tudo que deve fazer é substituir as chaves do sandbox pelas de produção em seu código.

#### Começar a [criar planos e inscrever clientes](https://www.mercadopago.com.br/developers/pt/guides/subscriptions/api/create-subscription.es.md).
