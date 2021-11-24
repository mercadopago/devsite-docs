# Notificações

As notificações são mensagens enviadas pelo servidor do Mercado Pago a partir de eventos realizados em sua aplicação, sendo esses eventos as atualizações no objeto relatado como, por exemplo, a criação/atualização de pagamentos, a vinculação a um plano de assinatura, entre outros tipos de atualização interna na aplicação.

Com as notificações você terá um informativo em tempo real das mudanças produzidas nos diferentes recursos das APIs do Mercado Pago.
 
> WARNING
>
> Importante
>
> Não é possível receber notificações em ambiente de teste/sandbox.

Veja abaixo os tipos de notificações disponiveis para integração com o Mercado Pago.

## Webhook

O [Webhook](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/notifications/webhooks) (também conhecido como retorno de chamada web) é um método simples que facilita com que um app ou sistema forneça informações em tempo real sempre que um evento acontece, ou seja, é um modo de receber dados entre dois sistemas de forma passiva. 

As notificações Webhook poderão ser configuradas para uma ou mais aplicações criadas em seu [Dashboard](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/resources/devpanel).

Uma vez configurado, o Webhook será enviado sempre que ocorrer um ou mais eventos cadastrados, evitando que haja um trabalho de pesquisa a cada minuto em busca de uma resposta e, por consequência, que ocorra uma sobrecarga do sistema e a perda de dados sempre que houver alguma situação.

## IPN

O [IPN](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/notifications/ipn) (_Instant Payment Notification_) é um mecanismo que permite que sua aplicação receba notificações do Mercado Pago informando o estado de um determinado pagamento, chargeback e merchant_order, mediante uma chamada `HTTP POST` para informar sobre suas transações. 

Nas notificações por IPN poderá ser configurada apenas uma URL de notificação por conta (dependendo da aplicação, mais de uma aplicação pode usar essa URL). Além disso, também há a possibilidade de utilizar esse tipo de notificação a partir do campo `notification_url` do objeto, dessa forma a URL poderá ser diferente pra cada objeto ou aplicação.

> LEFT_BUTTON_PT
>
> Clique aqui e veja mais informações sobre as configurações necessárias para utilizar as notificações por Webhook.
>
> [Webhook](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/notifications/webhooks)

> RIGHT_BUTTON_PT
>
> Clique aqui e veja mais informações sobre as configurações necessárias para utilizar as notificações por IPN.
>
> [IPN](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/notifications/ipn)