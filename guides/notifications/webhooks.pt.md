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

O Mercado Pago enviará notificações com o seguinte cronograma de novas tentativas e prazos para sua confirmação. Você deve retornar um HTTP STATUS 200 (OK) ou 201 (CREATED) antes do final do prazo correspondente. Caso contrário, será entendido que você não o recebeu corretamente e você será notificado novamente.

Se precisar de mais informações, confira a seção [“O que devo fazer quando receber uma notificação?”.](#bookmark_o_que_devo_fazer_ao_receber_uma_notificação?)

| Evento             | Prazo após o primeiro envio | Tempo de espera de confirmação |
|--------------------|-----------------------------|--------------------------------|
| Envio              | -                           | 22 segundos                    |
| Primeira tentativa | 5 minutos                   | 5 segundos                     |
| Segunda tentativa  | 45 minutos                  | 5 segundos                     |
| Terceira tentativa | 6 horas                     | 5 segundos                     |
| Quarta tentativa   | 2 dias                      | 5 segundos                     |
| Quinta tentativa   | 4 dias                      | 5 segundos                     |

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

Quando você recebe uma notificação na sua plataforma, o Mercado Pago aguarda uma resposta para validar que você a recebeu corretamente. Para isso, você deve retornar um `HTTP STATUS 200 (OK)` ou `201 (CREATED)`.

É recomendável que você responda à notificação antes de executar a lógica de negócios ou antes de acessar recursos externos para não exceder os [prazos de resposta estimados](#bookmark_eventos).

Essa comunicação é exclusiva entre os servidores do Mercado Pago e o seu, portanto, não haverá usuário físico vendo nenhum tipo de resultado.

Depois disso, você deve obter as informações completas do recurso notificado acessando o terminal correspondente da API:


Tipo         | URL                                                  | Documentação
------------ | -----------------------------------------------------| --------------------
payment      | https://api.mercadopago.com/v1/payments/[ID]?access\_token=[ACCESS\_TOKEN]      | [ver documentação](https://www.mercadopago.com.ar/developers/pt/reference/payments/_payments_id/get/)
plan         | https://api.mercadopago.com/v1/plans/[ID]?access\_token=[ACCESS\_TOKEN]         | -
subscription | https://api.mercadopago.com/v1/subscriptions/[ID]?access\_token=[ACCESS\_TOKEN] | -
invoice      | https://api.mercadopago.com/v1/invoices/[ID]?access\_token=[ACCESS\_TOKEN]      | [ver documentação](https://www.mercadopago.com.ar/developers/pt/reference/invoices/_invoices_id/get/)


Com essas informações, você poderá realizar as atualizações necessárias na sua plataforma, por exemplo: atualizar um pagamento aprovado.

> WARNING
>
> Importante
>
> Lembre-se de que, se os prazos de resposta forem excedidos, é possível receber notificações duplicadas de um evento.


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
