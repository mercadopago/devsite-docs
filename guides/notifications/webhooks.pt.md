# Notificações Webhooks
 
Para configurar as notificações que você quiser receber através de um `POST HTTP` toda vez que houver um evento relacionado a suas transações, siga os passos abaixo.
 
## Configuração
 
> WARNING
>
> Importante
>
> Lembre-se de que, não é possível receber notificações em ambiente de teste.
 
1. Primeiramente, uma aplicação deverá ser criada em seu [Dashboard](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/guides/resources/devpanel).
2. Com a aplicação criada, na aba Notificações Webhooks configure a [URL acessível ao Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/notifications) de **produção** e **teste** da qual serão recebidas as notificações. Se deseja receber notificações apenas de Webhooks, e não de IPN, você pode adicionar na URL indicada o parâmetro `source_news=webhooks` (exemplo:`https://www.yourserver.com/notifications?source_news=webhooks`).
 
![webhook](/images/notifications/webhook_pt.png)
 
3. Em seguida, selecione os **eventos** que deverão ser notificados quando ocorrerem. Assim, sempre que ocorrer um evento, enviaremos uma notificação no formato `json` usando `HTTP POST` para a URL especificada anteriormente.
 
> NOTE
>
> Nota
>
> Um evento é qualquer tipo de atualização no objeto relatado, incluindo alterações de status ou atributo.
 
| Tipo de notificação | Ação | Descrição |
| :--- | :--- | :--- |
| `payment` | `payment.created` | Criação de pagamento |
| `payment` | `payment.updated` | Atualização de pagamento |
| `mp-connect` | `application.deauthorized` | Desvinculação de conta |
| `mp-connect` | `application.authorized` | Vinculação de conta |
| `plan` | `application.authorized` | Vinculação de conta |
| `subscription` | `application.authorized` | Vinculação de conta |
| `invoice` | `application.authorized` | Vinculação de conta |
 
4. Você também pode configurar a notificação quando fizer o POST do pagamento, indicando no campo `notificaction_url`:
 
```json
{
   "transaction_amount":100,
   ....
   "notification_url":"http://requestbin.fullcontact.com/1ogudgk1",
   ....
}
```
Implemente o receptor de notificações usando o seguinte código como exemplo:
 
```php
<?php
 
   MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");
 
   switch($_POST["type"]) {
       case "payment":
           $payment = MercadoPago\Payment::find_by_id($_POST["data"]["id"]);
           break;
       case "plan":
           $plan = MercadoPago\Plan::find_by_id($_POST["data"]["id"]);
           break;
       case "subscription":
           $plan = MercadoPago\Subscription::find_by_id($_POST["data"]["id"]);
           break;
       case "invoice":
           $plan = MercadoPago\Invoice::find_by_id($_POST["data"]["id"]);
           break;
   }
 
?>
```
 
5. Feitas as devidas configurações, a notificação via Webhook terá o seguinte formato:
 
```json
{
   "id": 12345,
   "live_mode": true,
   "type": "payment",
   "date_created": "2015-03-25T10:04:58.396-04:00",
   "application_id": 123123123,
   "user_id": 44444,
   "version": 1,
   "api_version": "v1",
   "action": "payment.created",
   "data": {
       "id": "999999999"
   }
}
```
 
Isso indica que foi criado o pagamento **999999999** para o usuário **44444** em modo de produção com a versão V1 da API e que esse evento ocorreu na data **2016-03-25T10:04:58.396-04:00**.
 
## Ações necessárias após receber uma notificação
 
Caso haja a necessidade de enviar uma notificação, o Mercado Pago enviará de acordo com um cronograma de novas tentativas e prazos para sua confirmação:
 
| Evento | Prazo após o primeiro envio | Tempo de espera de confirmação |
| --- | --- | --- |
| Envio | - | 22 segundos |
| Primeira tentativa | 5 minutos | 5 segundos |
| Segunda tentativa | 45 minutos | 5 segundos |
| Terceira tentativa | 6 horas | 5 segundos |
| Quarta tentativa | 2 dias | 5 segundos |
| Quinta tentativa | 4 dias | 5 segundos |
  
Quando você recebe uma notificação na sua plataforma, o Mercado Pago aguarda uma resposta para validar que você a recebeu corretamente. Para isso, você deve retornar um `HTTP STATUS 200 (OK)` ou `201 (CREATED)` e, caso contrário, será entendido que você não o recebeu corretamente e você será notificado novamente.
 
É recomendável que você responda a notificação antes de executar a lógica de negócios ou antes de acessar recursos externos, a fim de evitar exceder os prazos de resposta estimados. Essa comunicação é exclusiva entre os servidores do Mercado Pago e, portanto, não haverá usuário físico vendo nenhum tipo de resultado.
 
Depois disso, você obterá as informações completas do recurso notificado acessando o terminal correspondente da API:
 
| Tipo | URL | Documentação |
| --- | --- | --- |
| payment | `https://api.mercadopago.com/v1/payments/[ID]` | [ver documentação](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/payments/_payments_id/get) |
| plan | `https://api.mercadopago.com/v1/plans/[ID]` | - |
| subscription | `https://api.mercadopago.com/v1/subscriptions/[ID]` | [ver documentação](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/subscriptions/_preapproval/post) |
| invoice | `https://api.mercadopago.com/v1/invoices/[ID]` | - |
 
Com essas informações, você poderá realizar as atualizações necessárias na sua plataforma como, por exemplo, atualizar um pagamento aprovado.