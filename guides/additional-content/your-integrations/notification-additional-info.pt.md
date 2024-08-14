# Informações adicionais sobre notificações

Nesta documentação, você encontrará informações adicionais sobre notificações, incluindo considerações especiais conforme a solução integrada, aspectos específicos de certos tópicos e exemplos de notificações específicas para consulta.

## Card Updater

Card Updater é uma função para integrações de produtos com pagamentos recorrentes, que corrige dados de cartões expirados ou com informações incorretas, atualizando essas informações dentro do Mercado Pago.

Este processo ocorre a partir de um pagamento recusado, onde a verificação feita pelo Card Updater pode gerar um novo `card_id` para um cliente (em casos de erro na inserção de dados ou troca de cartão), ou manter o `card_id` previamente criado, mas atualizando a base de dados com as informações corretas do cartão.

Em qualquer um dos casos, será enviada uma notificação Webhooks como no exemplo abaixo.

```json

{
  "action": "card.updated",
  "api_version": "v1",
  "application_id": 8339021212080291,
  "data": {
    "customer_id": "12345678-aluyasdhfyt",
    "new_card_id": 50000102202,
    "old_card_id": 50000006036
  },
  "date_created": "2024-01-11T15:23:53-03:00",
  "id": "a47fc06844bf4e418a03aeab1479c496",
  "live_mode": true,
  "type": "automatic-payments",
  "user_id": 1197520450,
  "version": 1
}
```

| Campo | Descrição |
|---|---|
| `action` | `card.updated` é o único valor possível e indica quando o cartão de um cliente foi atualizado. |
| `application_id` | Identificador da aplicação para a qual a notificação está sendo enviada. |
| `data` | Este campo contém os detalhes da atualização, como o  `customer_id` (identificador do cliente), o novo `card_id`, e p antigo<br>Caso não seja criado um novo `card_id`, o original é reenviado.  |
| `date_created` | Data de criação da notificação. |
| `id` | Identificador exclusivo do evento para evitar mensagens duplicadas. |
| `live_mode` | Indica se a URL informada é válida. |
| `type` | Este valor será sempre `automatic-payments` |
| `user_id` | Identificador do usuário para o qual a notificação está sendo enviada. |

----[mla, mlm, mlb]----
## Integrações Point

Este tópico permite receber notificações sobre a atualização dos status nas intenções de pagamento criadas para integrações Point. Ao ativá-lo, considere as informações descritas abaixo:

* "Intenção de pagamento" e "pagamento" não são a mesma coisa. Ao ativar este tópico, você receberá atualizações sobre as solicitações criadas para iniciar um pagamento. Para receber notificações sobre o pagamento em si, ative o tópico `payments` através de Suas integrações.
* Não é possível configurar este tópico no momento da criação de um pagamento. Sua configuração deve ser feita através de Suas integrações.
* É possível consultar as notificações correspondentes aos diferentes status das intenções de pagamento acessando a [documentação específica do Mercado Pago Point](/developers/pt/docs/mp-point/integration-configuration/integrate-with-pdv/notifications).

------------

## Assinaturas

Para ativar as notificações da sua integração com Assinaturas, considere as informações descritas abaixo:

* Se você integrou **Assinaturas com planos associados**, ative o tópico `subscription_preapproval_plan` para receber alertas sobre a criação ou atualização de um Plano.
* Se você integrou **Assinaturas sem planos associados**, ative o tópico `subscription_preapproval` para receber alertas sobre a criação ou atualização de uma **assinatura de pagamento pendente**, ou o tópico `subscription_authorized_payment` para atualizações sobre **assinaturas com pagamento autorizado**.
* Em **todos os casos, também é necessário ativar o tópico `payments`**, que permite receber notificações sobre os pagamentos associados a essas assinaturas quando forem efetuados.

## Checkout Pro

Se você integrou com o Checkout Pro e deseja receber notificações, considere as informações descritas abaixo: 

* A ativação do tópico `merchant_orders` permitirá receber alertas sobre a criação e atualizações de pedidos.
* A ativação do tópico `payments` será útil para manter sua base de dados atualizada, pois notificará sobre as atualizações nos pagamentos correspondentes aos pedidos gerados.

## Alertas de fraude

Caso seja detectado um alerta de fraude e o tópico `stop_delivery_op_wh` estiver ativado, você receberá uma notificação como a seguinte:

```json
{
    "action": "Created",
    "api_version": "v1",
    "data": {
        "description": "desc",
        "merchant_order": 249940988000,
        "payment_id": 58980959081,
        "site_id": "MLA"
    },
    "date_created": "2022-07-23T23:03:5704:00",
    "id": "58980959081",
    "live_mode": true,
    "type": "stop_delivery_op_wh",
    "user_id": 224403329,
    "version": 1
}
```

A notificação inclui os detalhes do pedido que gerou o alerta, sob o parâmetro `merchant_order`, e o `payment_id` associado ao pagamento. Com esses dados, **deve-se cancelar o pedido sem entregá-lo**, realizando uma chamada à [API de cancelametos](/developers/pt/reference/chargebacks/_payments_payment_id/put).

Tenha em mente que esse tipo de notificação não segue a lógica usual de tentativas. Se, ao recebê-la, você não enviar um `HTTP STATUS 200 (OK)` ou `201 (CREATED)`, a notificação será perdida e não será reenviada.

## Reclamações

Nos casos em que as notificações para o tópico `topic_claims_integration_wh` estiverem ativadas, uma notificação Webhooks será enviada quando um reclamação ou _chargeback_ for iniciado, conforme mostrado abaixo:

```json
{
    "action": "Created",
    "api_version": "v1",
    "data": {
        "description": "desc",
        "merchant_order": 249940988000,
        "payment_id": 58980959081,
        "site_id": "MLA"
    },
    "date_created": "2022-07-23T23:03:5704:00",
    "id": "58980959081",
    "live_mode": true,
    "type": "stop_delivery_op_wh",
    "user_id": 224403329,
    "version": 1
}
```

| Campo | Descrição |
|---|---|
| `action` | Evento notificado, indicando se é a criação de um recurso ou a sua atualização. |
| `api_version` | Valor que indica a versão da API que está enviando a notificação. |
| `data.id` | Identificador exclusivo da reclamação ou _chargeback_. |
| `data.resource` | Tipo de notificação recebida. Neste caso, indica notificações relacionadas a reclamações. |
| `date_created` | Data de criação da notificação. |
| `id` | Identificador da notificação recebida. |
| `live_mode` | Indica se a URL informada é válida. |
| `type` | Tipo de notificação recebida, conforme o tópico selecionado anteriormente. Neste caso, será sempre `claim`. |
| `user_id `| Identificador do usuário para quem a notificação está sendo enviada. |

## Meios de pagamento offline

Se você integrou meios de pagamento offline e configurou suas notificações com o tópico `payments`, todas as mudanças de status de um pagamento serão notificadas a você.

Isso também é válido para **pagamentos expirados**: seu status mudará de `pending` para `cancelled`, e o alerta correspondente será enviado ao seu sistema.

----[mla, mlb, mlu, mlc]----
## Código QR

Se você integrou com código QR e deseja receber notificações, considere o seguinte:

* Para Webhooks, não é possível configurar notificações através de Suas integrações. Você deve fazê-lo no momento da criação do pagamento. 
* Portanto, não é possível validar a origem das notificações usando o *header* `x-Signature`. Para conhecer vias alternativas para verificar a origem dessas notificações, você pode entrar em contato com o [Suporte do Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/support/center).
* A ativação do tópico `merchant_orders` permitirá que você receba alertas sobre a criação e atualizações de pedidos. Embora o tópico envie um `status=opened`, será a notificação com `status=closed` que certificará com segurança que o pedido gerado foi pago.

------------

----[mla]----
## Delivery

A seguir, mostramos um exemplo de notificação para o tópico `Delivery`, juntamente com as descrições de cada campo notificado.

```json
{
    _id: "f9f08571-1f65-4c46-9e0a-c0f43faas1557e",
    topic: "delivery",
    resource: "/shipments/12345",
    user_id: 1793791954,
    application_id: "924152943338358",
    sent: "2021-11-01T02:02:02.002Z",
    attempts: 1,
    received: "2021-11-01T02:02:02.002Z",
    actions: []
}
```

| Campo | Descrição |
|---|---|
| `_id `| Identificador da notificação recebida. |
| `topic`  | Tópico sobre o qual está sendo recebida a notificação. |
| `resource` | Evento notificado. Indica se é a criação de um recurso ou uma atualização. |
| `user_id` | Identificador do usuário para o qual a notificação está sendo enviada. |
| `sent` | Data de envio da notificação. |
| `attempts` | Quantidade de vezes que a notificação foi enviada. |
| `received` | Data de recebimento da notificação. |

Ao receber uma notificação deste tópico, confirme o recebimento retornando um `HTTP STATUS 200 (OK)` dentro de até 500 ms. Caso contrário, o sistema continuará tentando enviar novas notificações a cada 12 horas.

------------

## Link de pagamento

Não é possível configurar notificações para Links de pagamento gerados através do Painel do Mercado Pago.