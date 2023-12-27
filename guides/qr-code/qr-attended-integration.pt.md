# Integrar o QR Modelo Atendido

Para cobrar através de um código QR Modelo Atendido, você deve criar um pedido e o associar ao caixa onde deseja receber o pagamento.

## Fluxo do modelo

Assim é como o modelo atendido funciona:

![Fluxo de pagamento no ponto de venda QR Mercado Pago](/images/mobile/qr-user-flow.pt.png)

1. O ponto de venda registra um pedido (1a) e cria um pedido atribuído a um caixa (1b). Neste ponto, o pedido está disponível para escaneamento (2).
2. Quando o cliente escaneia o QR (3) com o pedido e faz o pagamento (5), uma notificação IPN (4a e 6b) é recebida no servidor do vendedor. Com esses dados é obtido o status do pedido (7a), para validar se está encerrado ou ainda em aberto, aguardando o pagamento.

## Criar um pedido

Para obter mais informações sobre como criar pedidos, consulte nossa [Referência de API](/developers/pt/reference/instore_orders_v2/_instore_qr_seller_collectors_user_id_stores_external_store_id_pos_external_pos_id_orders/put).

----[mco]----
> Se você tiver que pagar IVA pelos produtos em seu pedido, consulte a [seção Considerações IVA Colômbia](/developers/pt/guides/additional-content/localization/iva-colombia).
------------
Assim que o pedido for criado, ele estará disponível para ser **escaneado e pago**.

> NOTE
>
> Nota
>
> No caso de não ter carregado anteriormente o nome ou logotipo de seu negócio em [ sua conta Mercado Pago,](https://www.mercadopago.com.br/settings/account) o título e a imagem do pedido exibidos ao cliente no aplicativo serão os do primeiro item carregado.

## Eliminar um pedido

Para remover o pedido associado a um QR antes da sua expiração, o encerramento, consulte nossa [Referência de API](/developers/pt/reference/instore_orders_v2/_instore_qr_seller_collectors_user_id_pos_external_pos_id_orders/delete).

A resposta será um `HTTP 204 No Content`.

## Receber notificações de pedidos

As notificações IPN (Instant Payment Notification) são a **forma automática de notificar a criação de novos pedidos e as atualizações de status das mesmas**. Por exemplo, se eles foram aprovados, recusados ou se estão pendentes.

Vá para [notificações IPN](/developers/pt/docs/qr-code/additional-content/your-integrations/notifications/ipn) para aprender como implementá-los, especificamente notificações de `merchant_order`, que são aqueles associados a pedidos. Você poderá identificar cada um deles através do parâmetro `external_reference`.