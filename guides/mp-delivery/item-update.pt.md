# Atualizar item

Para alterar o status de um item, faça um PUT para o endpoint [/proximity/integration/v1/catalog/stores/{external_store_id}/items/{external_item_id}](/developers/pt/reference/mp_delivery/_proximity_integrationcatalog_stores_external_store_id_items_external_item_id/put), informando o `external_id` (SKU) do item e o `external_id` da loja.

> O `external_id` de uma loja pode ser configurado através do endpoint [/proximity-integration/stores/{StoreID}/external_id](/developers/pt/reference/mp_delivery/_proximity-integration_stores_StoreID_external_id/put).

Além disso, também é necessário informar o `access-token` do usuário que recebeu a publicação no cabeçalho. O `access-token` pode ser gerado através do processo de autenticação OAuth. Consulte a [documentação de OAuth](/developers/pt/docs/mp-delivery/additional-content/security/oauth/introduction) para obter mais informações.

Um item pode retornar os seguintes estados na resposta:

| Estado | Descrição |
|-------|-----------|
| active | Ativa o item. |
| paused | Pausa o item. |
