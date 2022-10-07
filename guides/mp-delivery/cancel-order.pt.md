# Cancelar pedido

Para cancelar um pedido que foi aceito no PDV, realize um PUT enviando o `shipment_id` e o `access-token` (gerado pelo processo de autenticação do OAuth) ao endpoint  [/proximity-integration/shipments/{shipment_id}/cancel](/developers/pt/reference/mp_delivery/_proximity-integration_shipments_shipment_id_cancel/put). 

Veja [Segurança](/developers/pt/guides/additional-content/security/oauth/introduction) para mais informações sobre OAuth.