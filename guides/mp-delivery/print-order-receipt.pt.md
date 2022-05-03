# Imprimir comprovante do pedido

Após aceitar o pedido, fica disponível a impressão de seu comprovante em **formato PDF**. 

Para imprimí-lo, realize um GET enviando o `shipment_id` e o `access-token` (gerado pelo processo de autenticação do OAuth) ao endpoint [/proximity-integration/shipments/{shipment_id}/print_label_pdf](/developers/pt/reference/mp_delivery/_proximity-integration_shipments_shipment_id_print_label_pdf/get). Veja [Segurança](/developers/pt/guides/additional-content/security/oauth/introduction) para mais informações sobre OAuth.

A impressão do comprovante pode ser realizada sempre, exceto quando o pedido estiver com [status cancelado ou enviado](/developers/pt/docs/mp-delivery/order-management/get-order-data).

> PREV_STEP_CARD_PT
>
> Aceitar pedido
>
> Saiba como aceitar pedidos com o Mercado Pago Delivery.
>
> [Aceitar pedido](/developers/pt/docs/mp-delivery/order-management/accept-order)

> NEXT_STEP_CARD_PT
>
> Cancelar pedido
>
> Saiba como cancelar pedidos no Mercado Pago Delivery.
>
> [Cancelar pedido](/developers/pt/docs/mp-delivery/order-management/cancel-order)