# Requisitos para entrar em produção

Quando sua integração estiver pronta e quiser começar a receber pagamentos, você deve [ativar suas credenciais]([FAKER][CREDENTIALS][URL]).

## Por que é necessário realizar esse processo?

Com esse processo, se garante a segurança dos dados dos seus clientes, o cumprimento das normas e disposições legais de cada país e a melhor experiência de compra para as suas vendas.

[Conheça os termos e condições do Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/resources/legal/terms-and-conditions).

## O que validamos?
A fim de garantir tanto a melhor qualidade de integração e experiência do usuário para o cliente final, no Mercado Pago precisamos que certos requisitos sejam atendidos antes de entrar em produção.

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Use as bibliotecas oficiais e cuide da segurança dos dados

É importante que utilize a biblioteca MercadoPago.js como é fornecida pelo Mercado Pago. Não deve-se modificá-la nem armazená-la nos seus servidores. Assegure-se também de não incluir o atributo `name` ao criar um formulário de cartão para cuidar da segurança dos dados.

Essas medidas permitem cuidar dos dados sensíveis, cumprir com os padrões de segurança requeridos e mantê-lo sempre atualizado.

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tenha um certificado SSL

Para que seja seguro e que possa cuidar dos dados, é necessário que tenha um certificado SSL válido e que o formulário de pagamento seja disponibilizado em uma página HTTPS. Isso permite proteger as transações e os dados dos seus compradores. Durante os testes não é necessário tê-lo, mas é obrigatório para entrar em produção.

## Envio das informações

Para evitar que um pagamento real seja recusado por não atender as validações de segurança, é necessário somar todas as informações possíveis na hora de realizar a operação.
Para otimizar a validação de segurança dos pagamentos e melhorar as aprovações, você poderá enviar para nós os dados do comprador e do item para que os analisemos. Por exemplo, se você enviar essas informações para nós, poderemos detectar se esse comprador realizou pagamentos suspeitos em outro momento e preveni-lo.

Veja mais informações na [seção Melhore a aprovação](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/manage-account/account/payment-rejections).

## Notificações e pesquisa de pagamento

Para aproveitar ao máximo a integração do Mercado Pago, um dos principais pontos a destacar é o uso de notificações para atualizar pedidos em tempo real no seu sistema.
Ambos os tipos de notificações, [IPN](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/notifications/ipn/introduction) ou [Webhooks](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/notifications/webhooks/webhooks), são enviadas de um servidor a outro mediante uma chamada `HTTP POST` para informar sobre suas transações.
Ao implementar essas notificações, você poderá descobrir todas as atualizações de suas transações no momento.

## Experiência do usuário

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mostrar mensagens de resposta corretas

Conforme mencionado na [seção Mensagens de resposta](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/v1/handling-responses), deve-se mostrar as mensagens correspondentes ao cliente, dependendo do resultado do pagamento, para que ele possa agir da maneira correta.

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Seja transparente com as promoções e financiamentos

Deve-se comunicar claramento que as promoções são oferecidas pelo Mercado Pago. Pode-se [incluir um banner de meios de pagamento](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/resources/banners/introduction) ou [adicionar um link na seção de promoções](https://www.mercadopago.com.br/promocoes/). Também, deve-se informar os [custos de financiamento que se aplicam aos seus clientes](https://www.mercadopago.com.br/ajuda/Custos-de-parcelamento_322).

----[mla]----
> NOTE
>
> Nota
>
> Devido a Resolução [E 51/2017](https://www.boletinoficial.gob.ar/#!DetalleNormaBusquedaRapida/158269/20170125/resolucion%2051) da Secretería de Comércio Argentina, sobre preços transparentes, é necessário que cumpra com [exigências adicionais](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/resources/localization/considerations-argentina).
------------

## Disponibilize seus termos e condições

Disponibilize uma política de termos e condições e deixe claro que é responsável por todos os dados que sejam inseridos no seu site.

---
### Próximos passos

> LEFT_BUTTON_RECOMMENDED_PT
>
> Aceite a carteira Mercado Pago
>
> Permite pagamentos somente de usuários cadastrados no Mercado Pago, com cartão e saldo disponível.
>
> [Usuários cadastrados](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/v1/wallet-integration)


> RIGHT_BUTTON
>
> Referências de API
>
> Encontre toda a informação necessária para interagir com nossas APIs.
>
> [Referências de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference)
