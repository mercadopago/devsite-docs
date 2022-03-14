# Obter dados da loja

Para obter informações sobre todas as lojas que estão vinculadas a **um usuário específico**, realize um GET enviando o `user_id` e o `access-token` (gerado pelo processo de autenticação do OAuth) ao endpoint [/proximity-integration/users/{seller_id}/stores](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/mp_delivery/_proximity-integration_users_seller_id_stores/get). Veja [Segurança](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/security/oauth/introduction) para mais informações sobre OAuth.

Também é possível consultar informações de uma **loja específica** através do seu **ID**. Para isso, realize um GET enviando o `store_id` e o `access-token` ao endpoint [/proximity-integration/stores/{StoreID}](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/mp_delivery/_proximity-integration_stores_store_id/get). 

Esse endpoint point retorna todas os dados do endpoint anterior, além de informações sobre o status atual ("enabled", "paused" ou "disabled") de funcionamento loja. Veja [Alterar status da loja](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/mp-delivery/print-order-receipt) para mais informações sobre os status.

> NEXT_STEP_CARD_PT
>
> Alterar status da loja
>
> Saiba como alterar o status de funcionamento da loja da loja.
>
> [Alterar status da loja](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/mp-delivery/change-store-status)