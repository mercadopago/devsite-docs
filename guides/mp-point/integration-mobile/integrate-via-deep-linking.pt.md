# Crie o Deep Link

> WARNING
>
> Importante
>
> Tenha em mente que a integração de dispositivos móveis via deep linking não está disponível para tablets ou dispositivos Huawei.

Para poder processar pagamentos via Deep Link, você precisará chamar a URL `https://www.mercadopago.com/point/integrations`.

Na tabela abaixo, você pode ver os parâmetros que você pode incluir, sejam obrigatórios ou não, e suas descrições.

| Parâmetro | Descrição |
|---|---|
| `amount` | **Obrigatório**. É o valor que será cobrado do cliente. |
| `description` | **Obrigatório**. Descrição da operação (Máx.: 19 caracteres). |
| `external_reference` | **Opcional**. Código de referência do seu sistema, que permite reconciliar seu pedido de compra com o pagamento. |
| `notification_url` | **Opcional**. É a URL onde você receberá a notificação desse pagamento. Consulte a seção "Configure suas notificações" para mais informações. |
| `payer_email` | **Opcional**. E-mail do pagador. |
| `success_url` | **Opcional**. É a URL para onde o usuário será redirecionado após um pagamento aprovado. Se você não enviar, o aplicativo permanecerá na URL de pagamento bem-sucedido. |
| `fail_url` | **Opcional**. É a URL para onde o usuário será redirecionado após um pagamento rejeitado. Se você não enviar, o aplicativo permanecerá na URL de pagamento rejeitado. |

## Configure suas notificações

Se desejar, você pode receber notificações com as atualizações dos pagamentos gerados via Deep Link. Elas são enviadas pelo nosso sistema de integrações para a `notification_url` definida na criação do Deep Link por meio de uma chamada `HTTP POST`.

Nessas notificações, você encontrará qual ação foi executada (`action`), juntamente com o `id` e os dados do pagamento, conforme mostrado abaixo.

```json
{ "action": "payment.created",
  "api_version": "v1",
  "data": {
    "id": "00000000000"},
  "date_created": "2022-11-07T21:47:18Z",
  "id": 000000000000,
  "live_mode": true,
  "type": "payment",
  "user_id": "000000000"}
```