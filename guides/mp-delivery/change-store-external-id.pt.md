# Alterar ID externo da loja

Existe também a possibilidade de criar um ID externo (`external_id`) para uma determinada loja. Esse campo é opcional, mas pode ser utilizado como identificador para o sistema de software de gestão de pedidos. 

Para inserir o valor de um ID externo em uma loja, realize um PUT enviando o `store_id` e o `access-token` (gerado pelo processo de autenticação do OAuth) ao endpoint [/proximity-integration/stores/{StoreID}/external_id](/developers/pt/reference/mp_delivery/_proximity-integration_stores_StoreID_external_id/put). Veja [Segurança](/developers/pt/guides/additional-content/security/oauth/introduction) para mais informações sobre OAuth.

> NOTE
>
> Importante
>
> Você também poderá consultar as informações de uma loja através de seu ID externo. Para isso, basta enviar como parâmetros de requisição o `user_id` relacionado à loja, o `external_id` e o `access_token`. Veja mais informações na API [Obter loja por ID externo](/developers/pt/reference/mp_delivery/_proximity-integration_users_SellerID_stores_external_id_ExternalID/get).