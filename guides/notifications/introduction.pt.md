# Notificações
 
As notificações são respostas dadas pelo servidor a partir de transações (eventos) realizadas em sua plataforma. Com as notificações você terá um informativo em tempo real das mudanças produzidas nos diferentes recursos das APIs do Mercado Pago.
 
> WARNING
>
> Importante
>
> Lembre-se de que, não é possível receber notificações em ambiente de teste.
>
> Um evento é qualquer tipo de atualização no objeto relatado, incluindo alterações de status ou atributo.
 
## Webhook
 
O **Webhook** (também conhecido como retorno de chamada web ou `HTTP POST`) é um método simples que facilita com que um app ou sistema forneça informações em tempo real sempre que um evento acontece, ou seja, é um modo de receber dados entre dois sistemas de forma passiva. Isso possibilita que programas simples e independentes sejam criados exclusivamente com o intuito de funcionar em cadeia conforme outros comandos são executados.
 
Uma vez instalado, o Webhook será enviado cada vez que ocorrer um ou mais eventos assinados, evitando que haja um trabalho de pesquisa a cada minuto em busca de uma resposta e, por consequência, impede que aconteça uma sobrecarga do sistema e a perda de dados sempre que ocorrer alguma situação.
 
## IPN
 
O **IPN** (_Instant Payment Notification_) é um mecanismo que permite que sua loja receba notificações de um servidor do Mercado Pago informando o estado de um determinado pagamento, mediante uma chamada `HTTP POST` para informar sobre suas transações.
 
---
> LEFT_BUTTON_REQUIRED_PT
>
> Notificações Webhooks
>
> Conheça todos as configurações necessárias para ativar notificações via Webohook.
>
> [Webhooks](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/notifications/webhooks)
 
> LEFT_BUTTON_REQUIRED_PT
>
> Notificações IPN
>
> Conheça todos as configurações necessárias para ativar notificações via IPN.
>
> [IPN](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/notifications/ipn)