# Cambiar ID externo de la sucursal

También existe la posibilidad de crear un ID externo (`external_id`) para una determinada sucursal. Este campo es opcional, pero se puede utilizar como identificador para el sistema de software de gestión de pedidos.

Para ingresar el valor de una ID externa en una sucursal, realiza un PUT enviando el `store_id` y el `access-token` (generados por el proceso de autenticación OAuth) al punto final [/proximity-integration/stores/{StoreID}/external_id](/developers/es/reference/mp_delivery/_proximity-integration_stores_StoreID_external_id/put). Consulta [Seguridad](/developers/es/guides/additional-content/security/oauth/introduction) para obtener más información sobre OAuth.

> NOTE
>
> Importante
>
> También podrás consultar la información de una sucursal a través de su ID externo. Para eso, envía como parámetros de solicitud el `user_id` relacionado con la sucursal, el `external_id` y el `access_token`. Accede a más información en la API [Obtener sucursal por ID externo](/developers/pt/reference/mp_delivery/_proximity-integration_users_SellerID_stores_external_id_ExternalID/get).