# Integrar o QR Modelo Atendido

Para cobrar através de um código QR Modelo Atendido, você deve criar um pedido e o associar ao caixa onde deseja receber o pagamento.

## Fluxo do modelo

Assim é como o modelo atendido funciona:

![Fluxo de pagamento no ponto de venda QR Mercado Pago](/images/qr/qr-attended-workflow-pt.png)

1. O ponto de venda registra um pedido (1a) e cria um pedido atribuído a um caixa (1b). Neste ponto, o pedido está disponível para escaneamento (2).
2. Quando o cliente escaneia o QR (3) com o pedido e faz o pagamento (5), Mercado Pago envia uma notificação do tópico `merchant_order` com um `status:closed` ao servidor do vendedor (5b). O vendedor deve enviar uma resposta `HTTP STATUS 200 (OK)` ou `201 (CREATED)` para confirmar seu recebemento (5c).
3. Com esses dados, o vendedor deve validar se o status do pedido está encerrado (6a e 6b), e continuar com a impressão do ticket (7).

> WARNING
>
> Importante
>
> É possível receber notificações sobre o tópico `merchant_order` com `status:opened` em vários momentos durante o fluxo de pagamento. Por esta razão, você não deve considerá-las um indicador válido. Só deve considerar aquelas com `status:closed`. 

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

As notificações são a **forma automática de notificar a criação de novos pedidos e as atualizações de status das mesmas**. Por exemplo, se eles foram aprovados, recusados ou se estão pendentes.

Vá para [Notificações](/developers/pt/docs/qr-code/additional-content/your-integrations/notifications) para aprender como implementá-los.

No caso do Código QR especificamente, você deve ativar as notificações de `merchant_order`, que são aquelas associadas a pedidos. Você poderá identificar cada um desses pedidos através do parâmetro `external_reference`.

> NOTE
>
> Nota
>
> Se deseja, você pode assistir ao [vídeo tutorial sobre a integração do QR modelo atendido](/developers/pt/docs/qr-code/resources/tutorial-videos/qr-videos-attended).