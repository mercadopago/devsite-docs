# Criar Deep Link

Os Deep Links, ou links diretos, simplificam a navegação para localizações específicas em um aplicativo móvel. Criando um Deep Link, você facilita a geração de instâncias de pagamento diretamente do seu dispositivo móvel, guiando o cliente de maneira fluída à tela de pagamento do Mercado Pago e, após a transação, direcionando-o de volta para uma URL de sua preferência.

> NOTE
>
> Importante
>
> Tenha em mente que a integração de dispositivos móveis via deep linking não está disponível para tablets ou dispositivos Huawei.

Para poder processar pagamentos via Deep Link, você precisará chamar a URL `https://www.mercadopago.com/point/integrations`.

Na tabela a seguir, estão listados os parâmetros disponíveis, sejam eles obrigatórios ou opcionais, juntamente com suas respectivas descrições.

| Parâmetro | Descrição | Obrigatório/Opcional |
|---|---|---|
| `amount` | É o valor que será cobrado do cliente. | Obrigatório |
| `description` | Descrição da operação (Máx.: 19 caracteres). | Obrigatório |
| `external_reference` | Código de referência do seu sistema, que permite reconciliar seu pedido de compra com o pagamento. | Opcional |
| `notification_url` | É a URL onde você receberá a notificação desse pagamento. Consulte a seção "Configure suas notificações" para mais informações. |  Opcional |
| `payer_email` | E-mail do pagador. | Opcional |
| `success_url` | É a URL para onde o usuário será redirecionado após um pagamento aprovado. Se você não enviar, o aplicativo permanecerá na URL de pagamento bem-sucedido. | Opcional |
| `fail_url` | É a URL para onde o usuário será redirecionado após um pagamento rejeitado. Se você não enviar, o aplicativo permanecerá na URL de pagamento rejeitado. | Opcional |

## Configurar notificações

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