# Notificações Webhooks

> WARNING
>
> Pré-requisitos
>
> * Possuir a [API](/guides/payments/api/introduction.pt.md) implementada.

Um **webhook** é uma notificação enviada de um servidor a outro mediante uma chamada `HTTP POST` para informar sobre suas transações.

Para receber as notificações dos eventos na sua plataforma, deve-se configurar previamente uma URL [acessível ao Mercado Pago](https://www.mercadopago.com/mla/account/webhooks).


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
payment      | /v1/payments/[ID]?access\_token=[ACCESS\_TOKEN]      | [ver documentação](/reference/payments/resource/)
plan         | /v1/plans/[ID]?access\_token=[ACCESS\_TOKEN]         | [ver documentação](/reference/plans/resource/)
subscription | /v1/subscriptions/[ID]?access\_token=[ACCESS\_TOKEN] | [ver documentação](/reference/subscriptions/resource/)
invoice      | /v1/invoices/[ID]?access\_token=[ACCESS\_TOKEN]      | [ver documentação](/reference/invoices/resource/)

Com essas informações, você poderá realizar as atualizações necessárias na sua plataforma, por exemplo: atualizar um pagamento aprovado.


### Implemente o receptor de notificações usando o seguinte código como exemplo:

```php
 <?php
require_once "mercadopago.php";

$mp = new MP("ACCESS_TOKEN");

$json_event = file_get_contents('php://input', true);
$event = json_decode($json_event);

if (!isset($event->type, $event->data) || !ctype_digit($event->data->id)) {
	http_response_code(400);
	return;
}

if ($event->type == 'payment'){
    $payment_info = $mp->get('/v1/payments/'.$event->data->id);

    if ($payment_info["status"] == 200) {
        print_r($payment_info["response"]);
    }
}
?>
```
