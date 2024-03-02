## Análise dos pagamentos

Se um pagamento sem CVV for rejeitado, recomendamos que você siga uma lógica de tentativas com base no estado da rejeição. Por exemplo, se o pagamento foi rejeitado devido a um cartão vencido, não faz sentido tentar novamente com o mesmo cartão e deverá ser solicitado ao cliente que forneça outro cartão para processar cobranças futuras. 

Caso haja uma rejeição por fundos insuficientes, uma nova tentativa com o mesmo cartão poderá ser feita desde que se resolva a questão do limite para o cartão utilizado.

Em cada caso, é importante comunicar ao seu cliente o resultado do pagamento e fornecer instruções para a próxima etapa. Informaremos um `HTTP Status 201 OK` de que o pagamento foi criado corretamente e enviaremos um código de resultado para que você possa redirecionar o cliente para a página com a mensagem correta.

> NOTE
>
> Importante
>
> Sempre que um pagamento for processado e houver alguma novidade sobre o processo, o Mercado Pago enviará uma notificação para que você possa atualizar seus sistemas. Acesse a documentação de [notificações Webhooks](/developers/pt/docs/your-integrations/notifications/webhooks) para saber como configurar o recebimento destas notificações.


Status