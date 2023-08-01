# Consultar publicación

Al importar un catálogo, es importante observar que el proceso se complete correctamente. Para eso, realiza un GET al endpoint [/proximity/integration/v1/catalog/{publication_id}](/developers/es/reference/mp_delivery/_proximity_integrationcatalog_publication_id/get) informando los siguientes valores:

* `publication_id`: esta información se obtiene con la respuesta del endpoint de importación del catálogo.
* `access_token`: esta información deberá ser incluida en el header. Corresponde al usuario que recibió la publicación. El access_token puede ser generado por el proceso de autenticación de OAuth. Consulta la [documentación de OAuth](/developers/es/docs/mp-delivery/additional-content/security/oauth/introduction) para obtener más información.

Este endpoint puede devolver los siguientes estados en la respuesta:

| Estado | Descripción |
|---|---|
| processing | El catálogo se está procesando. |
| error | El proceso de publicación se canceló porque ocurrió un error irrecuperable. |
| success | El catálogo ha sido publicado. |

> WARNING
>
> Importante
>
> Debido a que el proceso de carga del catálogo es asíncrono, se debe usar el endpoint [Consultar de estado de publicación](/developers/es/reference/mp_delivery/_proximity_integrationcatalog_publication_id/get) para verificar si el catálogo se importó correctamente. Si hay un error en la validación de esta publicación, recomendamos implementar un mecanismo de reintentos.