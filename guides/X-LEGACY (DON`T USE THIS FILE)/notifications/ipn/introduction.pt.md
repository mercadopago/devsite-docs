# Introdução

O **IPN** (Instant Payment Notification) é um mecanismo que permite que sua aplicação receba notificações do Mercado Pago informando o estado de um determinado pagamento, chargeback e `merchant_order`, mediante uma chamada HTTP POST para informar sobre suas transações.

Nas notificações por IPN poderá ser configurada apenas uma URL de notificação por conta (dependendo da aplicação, mais de uma aplicação pode usar essa URL). Além disso, também há a possibilidade de utilizar esse tipo de notificação a partir do campo `notification_url` do objeto, dessa forma a URL poderá ser diferente para cada objeto ou aplicação.

Nesta documentação explicaremos as configurações necessárias para o recebimento das notificações IPN (através do Dashboard ou durante a criação de pagamentos), além de apresentar quais são as ações necessárias que você deverá ter para que o Mercado Pago valide que as mensagens foram devidamente recebidas.

> NEXT_STEP_CARD_PT
>
> Pagamentos Online
>
> Configurar URLs e eventos para pagamentos online.
>
> [Configuração de URLs e eventos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/notifications/ipn/online-url-configuration)