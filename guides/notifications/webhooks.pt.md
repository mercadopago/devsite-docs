# Notificações Webhooks

> WARNING
>
> Pré-requisitos
>
> * Possuir a [API](https://www.mercadopago.com.br/developers/pt/guides/payments/api/introduction) implementada.

Um **webhook** é uma notificação enviada de um servidor a outro mediante uma chamada `HTTP POST` para informar sobre suas transações.

Para receber as notificações dos eventos na sua plataforma, deve-se configurar previamente uma [URL acessível ao Mercado Pago](https://www.mercadopago.com/mla/account/webhooks).

Você também pode configurar a notificação quando fizer o POST do pagamento, indicando no campo notificaction_url:

```json
{
    "transaction_amount":100,
    ....
    "notification_url":"http://requestbin.fullcontact.com/1ogudgk1",
    ....
}
```

## Eventos

Sempre que ocorrer um evento, enviaremos uma notificação no formato `json` usando `HTTP POST` para a URL especificada.

Notificaremos os seguintes eventos:


| Tipo de notificação  |           Ação             |         Descrição            |
| :------------------- | :------------------------- | :--------------------------- |
| `payment`            | `payment.created`          | Criação de pagamento         |
| `payment`            | `payment.updated`          | Atualização de pagamento     |
| `mp-connect`         | `application.deauthorized` | Desvinculação de conta       |
| `mp-connect`         | `application.authorized`   | Vinculação de conta          |
| `plan`               | `application.authorized`   | Vinculação de conta          |
| `subscription`       | `application.authorized`   | Vinculação de conta          |
| `invoice`            | `application.authorized`   | Vinculação de conta          |

Se a aplicação não estiver disponível ou demorar para responder, o Mercado Pago irá fazer tentativas de notificação nos seguintes intervalos:

1. Tentativa após 5 minutos.
2. Tentativa após 45 minutos.
3. Tentativa após 6 horas.
4. Tentativa após 2 dias.
5. Tentativa após 4 dias.

A notificação tem o seguinte formato:

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

Isso indica que foi criado o pagamento **999999999** para o usuário **44444** em modo de produção com a versão V1 da API. Este evento ocorreu na data **2016-03-25T10:04:58.396-04:00**.


## O que devo fazer ao receber uma notificação?

Quando receber uma notificação na sua plataforma, o Mercado Pago espera uma resposta para validar que a recebeu corretamente. Para isso, você deve retornar um `HTTP STATUS 200 (OK)` ou `201 (CREATED)`.

Lembre-se que esta comunicação é feita exclusivamente entre os servidores do Mercado Pago e o seu servidor, de modo que não haverá um usuário físico vendo nenhum tipo de resultado.

Depois disso, você poderá obter a informação completa do recurso notificado acessando a API correspondente em `https://api.mercadopago.com/`:

Tipo         | URL                                                  | Documentação
------------ | -----------------------------------------------------| --------------------
payment      | /v1/payments/[ID]?access\_token=[ACCESS\_TOKEN]      | [ver documentação](https://www.mercadopago.com.ar/developers/pt/reference/payments/_payments_id/get/)
plan         | /v1/plans/[ID]?access\_token=[ACCESS\_TOKEN]         | -
subscription | /v1/subscriptions/[ID]?access\_token=[ACCESS\_TOKEN] | -
invoice      | /v1/invoices/[ID]?access\_token=[ACCESS\_TOKEN]      | [ver documentação](https://www.mercadopago.com.ar/developers/es/reference/invoices/_invoices_id/get/)


Com essas informações, você poderá realizar as atualizações necessárias na sua plataforma, por exemplo: atualizar um pagamento aprovado.


### Implemente o receptor de notificações usando o seguinte código como exemplo:

```php
 <?php

    MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

    switch($_POST["type"]) {
        case "payment":
            $payment = MercadoPago\Payment.find_by_id($_POST["id"]);
            break;
        case "plan":
            $plan = MercadoPago\Plan.find_by_id($_POST["id"]);
            break;
        case "subscription":
            $plan = MercadoPago\Subscription.find_by_id($_POST["id"]);
            break;
        case "invoice":
            $plan = MercadoPago\Invoice.find_by_id($_POST["id"]);
            break;
    }
    
?>
```
