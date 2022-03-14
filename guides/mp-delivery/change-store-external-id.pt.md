# Alterar ID externo da loja

Existe também a possibilidade de criar um ID externo (`external_id`) para uma determinada loja. Esse campo é opcional, mas pode ser utilizado como identificador para o sistema de software de gestão de pedidos. 

Para inserir o valor de um ID externo em uma loja, realize um PUT enviando o `store_id` e o `access-token` (gerado pelo processo de autenticação do OAuth) ao endpoint [/proximity-integration/stores/{StoreID}/external_id](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/mp_delivery/_proximity-integration_store_id_external_id/put). Veja [Segurança](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/security/oauth/introduction) para mais informações sobre OAuth.

> PREV_STEP_CARD_PT
>
> Alterar status da loja
>
> Saiba como alterar o status de funcionamento da loja da loja.
>
> [Alterar status da loja](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/mp-delivery/change-store-status)