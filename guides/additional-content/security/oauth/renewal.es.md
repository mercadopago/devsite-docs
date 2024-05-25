# Renovar Access Token
 
El flujo **Refresh token** se usa para intercambiar un **temporary grants** de tipo `refresh_token` por un Access Token cuando el Access Token en uso **está próximo a caducar** y este ha sido obtenido a través del flujo [Authorization code](/developers/es/docs/security/oauth/creation#bookmark_authorization_code). El Access Token recibido a través del endpoint es **válido durante 180 días** (6 meses), luego de lo cual se debe reconfigurar todo el flujo de autorización.
 
El flujo permite continuar utilizando un Access Token válido con las mismas características que el token original sin necesidad de una nueva interacción con el usuario. Al realizar este flujo, el token original se intercambia por un nuevo token que también ofrece la posibilidad de limitar los alcances al devolver un nuevo refresh token para intercambiarlo en el futuro.
 
> WARNING
>
> Importante
>
> Solo es posible utilizar este flujo si la aplicación contiene el scope `offline_access` y el vendedor ha autorizado previamente esta acción.
 
Siga los pasos a continuación para renovar el **Access Token**.
 
1. Envía el código de `refresh_token`, tus [credenciales](/developers/es/docs/your-integrations/credentials) y el `authorization_code` (consulta [Creación](/developers/es/docs/security/oauth/creation#bookmark_authorization_code)) del endpoint [/oauth/token](/developers/es/reference/oauth/_oauth_token/post) con el código de `refresh_token` en el parámetro `grant_type` para recibir una nueva respuesta con un nuevo `access_token` y un nuevo `refresh_token`.
2. Actualiza la aplicación con el Access Token recibido en la respuesta.
 
> WARNING
>
> Importante
>
> Recuerda que cada vez que renueves el `access_token, también se renovará el `refresh_token`, por lo que deberás almacenarlo nuevamente.