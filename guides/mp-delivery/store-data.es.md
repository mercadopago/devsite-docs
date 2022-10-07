# Obtener datos de la sucursal

Para obtener información sobre todas las sucursales que están vinculadas a **un usuario específico**, realiza un GET enviando el `user_id` y el `access-token` (generados por el proceso de autenticación de OAuth) al punto final [[/proximity-integration/users/{seller_id}/stores](/developers/es/reference/mp_delivery/_proximity-integration_users_seller_id_stores/get). Consulta [Seguridad](/developers/es/guides/additinal-content/security/oauth/introduction) para obtener más información sobre OAuth.

También es posible consultar información de una **sucursal específica** usando su **ID**. Para ello, realiza un GET enviando el `store_id` y el `access-token` al endpoint [/proximity-integration/stores/{StoreID}](/developers/es/reference/mp_delivery/_proximity-integration_users_SellerID_stores_external_id_ExternalID/get).

Este endpoint devuelve todos los datos del endpoint anterior, además de información sobre el estado actual del almacenamiento ("enabled", "paused" o "disabled"). Consulta [Cambiar estado de la sucursal](/developers/es/docs/mp-delivery/store-management/change-store-status) para obtener más información sobre los estados.

> NOTE
>
> Importante
>
> También podrás consultar la información de una sucursal a través de su ID externo, si lo tiene. Para eso, envía como parámetros de solicitud el `user_id` relacionado con la sucursal, el `external_id` y el `access_token`. Accee a más información en la API [Obtener sucursal por ID externo.](/developers/es/reference/mp_delivery/_proximity-integration_users_SellerID_stores_external_id_ExternalID/get).<br/></br>
> <br/></br>
> Para saber cómo crear un ID externo para tu sucursal y utilizarlo como identificador para el sistema de software de gestión de pedidos, accede a [Cambiar ID externo de la sucursal.](/developers/es/docs/mp-delivery/store-management/change-store-external-id)