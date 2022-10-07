# Cancelar orden

Para cancelar una orden que fue aceptada en el TPV, realiza un PUT enviando el `shipment_id` y `access-token` (generado por el proceso de autenticación OAuth) al endpoint  [/proximity-integration/shipments/{shipment_id}/cancel](/developers/es/reference/mp_delivery/_proximity-integration_shipments_shipment_id_cancel/put). 

Consulta [Seguridad](/developers/es/guides/additional-content/security/oauth/introduction) para obtener más información sobre OAuth.