# Imprimir comprovante do pedido

Após aceitar o pedido, fica disponível a impressão de seu comprovante em **formato PDF**. 

Para imprimí-lo, faça um GET enviando o `shipment_id` e o `access_token` (gerado pelo processo de autenticação do OAuth) ao endpoint [/proximity-integration/shipments/{shipment_id}/print_label_pdf](/developers/pt/reference/mp_delivery/_proximity-integration_shipments_shipment_id_print_label_pdf/get). Veja [Segurança](/developers/pt/guides/additional-content/security/oauth/introduction) para mais informações sobre OAuth.

A impressão do comprovante pode ser realizada sempre, exceto quando o pedido estiver com [status cancelado ou enviado](/developers/pt/docs/mp-delivery/order-management/get-order-data).