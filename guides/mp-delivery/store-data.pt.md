# Obter dados da loja

Para obter informações sobre todas as lojas que estão vinculadas a **um usuário específico**, realize um GET enviando o `user_id` e o `access-token` (gerado pelo processo de autenticação do OAuth) ao endpoint [/proximity-integration/users/{seller_id}/stores](/developers/pt/reference/mp_delivery/_proximity-integration_users_seller_id_stores/get). Veja [Segurança](/developers/pt/guides/additinal-content/security/oauth/introduction) para mais informações sobre OAuth.

Também é possível consultar informações de uma **loja específica** através do seu **ID**. Para isso, realize um GET enviando o `store_id` e o `access-token` ao endpoint [/proximity-integration/stores/{StoreID}](/developers/pt/reference/mp_delivery/_proximity-integration_users_SellerID_stores_external_id_ExternalID/get). 

Esse endpoint point retorna todas os dados do endpoint anterior, além de informações sobre o status atual ("enabled", "paused" ou "disabled") de funcionamento loja. Veja [Alterar status da loja](/developers/pt/docs/mp-delivery/store-management/change-store-status) para mais informações sobre os status.

> NOTE
>
> Importante
>
> Você também poderá consultar as informações de uma loja através de seu ID externo, caso haja. Para isso, basta enviar como parâmetros de requisição o `user_id` relacionado à loja, o `external_id` e o `access_token`. Veja mais informações na API [Obter loja por ID externo.](/developers/pt/reference/mp_delivery/_proximity-integration_users_SellerID_stores_external_id_ExternalID/get).<br/></br>
> <br/></br>
> Para saber como criar um ID externo para a sua loja e utilizá-lo como identificador para o sistema de software de gestão de pedidos, acesse [Alterar ID externo da loja.](/developers/pt/docs/mp-delivery/store-management/change-store-external-id).