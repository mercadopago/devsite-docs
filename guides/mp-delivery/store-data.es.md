# Obtener datos de la sucursal

Para obtener información sobre todas las sucursales que están vinculadas a **un usuario específico**, realiza un GET enviando el `user_id` y el `access-token` (generados por el proceso de autenticación de OAuth) al punto final [[/proximity-integration/users/{seller_id}/stores](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/mp_delivery/_proximity-integration_users_seller_id_stores/get). Consulta [Seguridad](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/security/oauth/introduction) para obtener más información sobre OAuth.

También es posible consultar información de una **sucursal específica** usando su **ID**. Para ello, realiza un GET enviando el `store_id` y el `access-token` al endpoint [/proximity-integration/stores/{StoreID}](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/mp_delivery/_proximity-integration_stores_store_id/get).

Este endpoint devuelve todos los datos del endpoint anterior, además de información sobre el estado actual del almacenamiento ("enabled", "paused" o "disabled"). Consulta [Cambiar estado de la sucursal](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/mp-delivery/print-order-receipt) para obtener más información sobre los estados.

> NOTE
>
> Importante
>
> También podrás consultar la información de una sucursal a través de su ID externo, si lo tiene. Para eso, envía como parámetros de solicitud el `user_id` relacionado con la sucursal, el `external_id` y el `access_token`. Accee a más información en la API [Obtener sucursal por ID externo](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/mp_delivery/_proximity-integration_users_SellerID_stores_external_id_ExternalID/get).
> </br>
> Para saber cómo crear un ID externo para tu sucursal y utilizarlo como identificador para el sistema de software de gestión de pedidos, accede a [Cambiar ID externo de la sucursal](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/mp_delivery/change-store-external-id)

> NEXT_STEP_CARD_ES
>
> Cambiar el estado de la sucursal
>
> Aprenda a cambiar el estado de funcionamiento de la tienda de la tienda.
>
> [Cambiar estado de tienda](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guias/mp-delivery/change-store-status)