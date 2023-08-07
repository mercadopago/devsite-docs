# Consultar publicação

Ao importar um catálogo, é importante observar se o processo foi concluído corretamente. Para isso, faça uma solicitação GET para o endpoint [/proximity/integration/v1/catalog/{publication_id}](/developers/pt/reference/mp_delivery/_proximity_integrationcatalog_publication_id/get), informando os seguintes valores:

* `publication_id`: esta informação é obtida na resposta do endpoint de importação do catálogo.
* `access_token`: esta informação deve ser incluída no cabeçalho. Corresponde ao usuário que recebeu a publicação. O access_token pode ser gerado pelo processo de autenticação OAuth. Consulte a [documentação de OAuth](/developers/pt/docs/mp-delivery/additional-content/security/oauth/introduction) para obter mais informações.

Este endpoint pode retornar os seguintes statuses na resposta:

| Status | Descrição |
|---|---|
| processing | O catálogo está sendo processado. |
| error | O processo de publicação foi cancelado devido a um erro irreversível. |
| success | O catálogo foi publicado. |

> WARNING
>
> Importante
>
> Devido ao processo de carga do catálogo ser assíncrono, é necessário utilizar o endpoint [Consultar status de publicação](/developers/pt/reference/mp_delivery/_proximity_integrationcatalog_publication_id/get) para verificar se o catálogo foi importado corretamente. Se houver erro na validação dessa publicação, recomendamos implementar um mecanismo de tentativas repetidas.
