# Importar Catálogo

Para importar um catálogo em massa para várias lojas do mesmo usuário, faça um POST informando o `access_token` do usuário no cabeçalho para o endpoint [/proximity/integration/v1/catalog](/developers/pt/reference/mp_delivery/_proximity_integrationcatalog/post). O `access_token` pode ser gerado através do processo de autenticação OAuth. Consulte a [documentação de OAuth](/developers/pt-br/docs/mp-delivery/additional-content/security/oauth/introduction) para obter mais informações.

Ao inserir os IDs das lojas que receberão o catálogo, insira os `external_ids`. O ID externo de uma loja pode ser configurado através do endpoint [/proximity-integration/stores/{StoreID}/external_id](/developers/pt/reference/mp_delivery/_proximity-integration_stores_StoreID_external_id/put).

| Resposta | Descrição |
|---|---|
| 202 - Success | Todas as solicitações foram enviadas com sucesso. |
| 206 - Partial Error | Algumas solicitações não foram enviadas corretamente e contêm um erro. |


Na [documentação de Referência de API de catálogo](/developers/pt/reference/mp_delivery/_proximity_integrationcatalog/post), é possível obter uma descrição completa dos campos que podem ser enviados no corpo da solicitação.

> WARNING
>
> Importante
>
> Devido ao processo de carga do catálogo ser assíncrono, é necessário utilizar o endpoint [Consultar estado de publicação](/developers/pt/reference/mp_delivery/_proximity_integrationcatalog_publication_id/get) para verificar se o catálogo foi importado corretamente. Se houver erro na validação dessa publicação, é recomendável implementar um mecanismo de tentativas repetidas.
