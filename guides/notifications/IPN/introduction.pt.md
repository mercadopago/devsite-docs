# IPN

O **IPN (_Instant Payment Notification_)** é um mecanismo que permite que sua aplicação receba notificações do Mercado Pago informando o estado de um determinado pagamento, chargeback e merchant_order, mediante uma chamada `HTTP POST` para informar sobre suas transações. 

Nas notificações por IPN poderá ser configurada apenas uma URL de notificação por conta (dependendo da aplicação, mais de uma aplicação pode usar essa URL). Além disso, também há a possibilidade de utilizar esse tipo de notificação a partir do campo `notification_url` do objeto, dessa forma a URL poderá ser diferente pra cada objeto ou aplicação.

Nessa documentação explicaremos as configurações necessárias para o recebimento das notificações IPN (através do Dashboard ou durante a criação de pagamentos), além de apresentar quais são as ações necessárias que você deverá ter para que o Mercado Pago valide que as mensagens foram devidamente recebidas.