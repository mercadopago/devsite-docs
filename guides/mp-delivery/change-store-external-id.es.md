# Cambiar ID externo de la tienda

También existe la posibilidad de crear un ID externo (`external_id`) para una determinada sucursal. Este campo es opcional, pero se puede utilizar como identificador para el sistema de software de gestión de pedidos.

Para ingresar el valor de una ID externa en una sucursal, realiza un PUT enviando el `store_id` y el `access-token` (generados por el proceso de autenticación OAuth) al punto final [/proximity-integration/stores/{StoreID}/external_id](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/mp_delivery/_proximity-integration_store_id_external_id/put). Consulta [Seguridad](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/security/oauth/introduction) para obtener más información sobre OAuth.

> NOTE
>
> Importante
>
> También podrás consultar la información de una sucursal a través de su ID externo. Para eso, envía como parámetros de solicitud el `user_id` relacionado con la sucursal, el `external_id` y el `access_token`. Accede a más información en la API [Obtener sucursal por ID externo](https://www.mercadopago[FAKER][URL][DOMINIO]/developers/pt/reference/mp_delivery/_proximity-integration_users_SellerID_stores_external_id_ExternalID/get).

> PREV_STEP_CARD_ES
>
> Cambiar el estado de la sucursal
>
> Aprenda a cambiar el estado de funcionamiento de la tienda de la tienda.
>
> [Cambiar estado de tienda](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guias/mp-delivery/change-store-status)