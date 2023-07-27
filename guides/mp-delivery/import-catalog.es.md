# Importar catálogo

Para importar masivamente un catálogo a varias tiendas de un mismo usuario, realiza un POST informando el `access_token` del usuario en el header al siguiente endpoint [/proximity/integration/v1/catalog](/developers/es/reference/mp_delivery/_proximity_integrationcatalog/post). El `access_token` puede ser generado por el proceso de autenticación de OAuth. Consulta la [documentación de OAuth](/developers/es/docs/mp-delivery/additional-content/security/oauth/introduction) para obtener más información.

Al insertar los IDs de las tiendas que recibirán el catálogo, se deben insertar los `externals_ids`. El ID externo de una tienda se puede configurar a través del endpoint [/proximity-integration/stores/{StoreID}/external_id](/developers/es/reference/mp_delivery/_proximity-integration_stores_StoreID_external_id/put).

| Respuesta | Descripción |
|---|---|
| 202 - Success | Todas las solicitudes se enviaron correctamente. |
| 206 - Partial Error | Alguna solicitud no fue enviada correctamente y contiene un error. |

En la [documentación de la API de catálogo](/developers/es/reference/mp_delivery/_proximity_integrationcatalog/post), es posible obtener una descripción completa de los campos que se pueden enviar en el cuerpo de la solicitud.

> WARNING
>
> Importante
>
> Debido a que el proceso de carga del catálogo es asíncrono, se debe usar el endpoint [Consultar de estado de publicación](/developers/es/reference/mp_delivery/_proximity_integrationcatalog_publication_id/get) para verificar si el catálogo se importó correctamente. Si hay un error en la validación de esta publicación, recomendamos implementar un mecanismo de reintentos.
