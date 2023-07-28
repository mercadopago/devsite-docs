# Alterar status da loja

Os status de funcionamento estão definidos da seguinte forma:

* **Enabled**: a loja está aberta e pronta para receber os pedidos.
* **Paused**: a loja está pausada e não poderá receber novos pedidos, porém ela continuará a ser exibida no aplicativo do Mercado Pago.
* **Disabled**: a loja está fechada, não poderá receber novos pedidos e deixará de ser exibida no aplicativo do Mercado Pago.

Para alterá-los, você deverá realizar um PUT enviando o `store_id` e o `access_token` (gerado pelo processo de autenticação do OAuth) ao endpoint [/proximity-integration/stores/{store_id}/status](/developers/pt/reference/mp_delivery/_proximity-integration_stores_store_id_status/put). Veja [Segurança](/developers/pt/guides/additional-content/security/oauth/introduction) para mais informações sobre OAuth.