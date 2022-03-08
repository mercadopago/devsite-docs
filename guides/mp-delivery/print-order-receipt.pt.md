# Imprimir comprovante do pedido

Após aceitar o pedido, fica disponível a impressão de seu comprovante em **formato PDF**. 

Para imprimí-lo, realize um GET enviando o `shipment_id` e o `access-token` (gerado pelo processo de autenticação do OAuth) ao endpoint [/proximity-integration/shipments/{shipment_id}/print_label_pdf](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/mp_delivery/_proximity-integration_shipments_shipment_id_print_label_pdf/get). Veja [Segurança](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/security/oauth/introduction) para mais informações sobre OAuth.

A impressão do comprovante pode ser realizada sempre, exceto quando o pedido estiver com [status cancelado ou enviado](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/mp-delivery/get-order-data).


> NEXT_STEP_CARD_PT
>
> Cancelar pedido
>
> Saiba como cancelar pedidos no Mercado Pago Delivery.
>
> [Cancelar pedido](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/mp-delivery/cancel-order)