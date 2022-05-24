# Renovación
 
El flujo `refresh_token` se usa para intercambiar un **temporal grant** de tipo `refresh_token` por un access token cuando el token de acceso en uso ha caducado. El access token recibido a través del endpoint es **válido durante 180 día**s, luego de lo cual se debe reconfigurar todo el flujo de autorización.
 
El flujo permite continuar utilizando un access token válido con las mismas características que el token original sin necesidad de una nueva interacción con el usuario. Al realizar este flujo, el token original se intercambia por un nuevo token que también ofrece la posibilidad de limitar los alcances al devolver un nuevo refresh token para intercambiarlo en el futuro.
 
> WARNING
>
> Importante
>
> Solo es posible utilizar este flujo si la aplicación contiene el scope `offline_access` y el vendedor ha autorizado previamente esta acción.
 
Para renovar el **access token**:
 
1. Envía el código de `refresh_token`, tus credenciales y el `authorization_code` (consulta [Creación](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/security/oauth/creation)) del endpoint [/oauth/token](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/oauth/_oauth_token/post) con el código de `refresh_token` en el parámetro `grant_type` para recibir una nueva respuesta con un nuevo access token y un nuevo `refresh_token`.
2. Actualiza la aplicación con el access token recibido en la respuesta.
 
> WARNING
>
> Importante
>
> Recuerda que cada vez que renueves el access token, también se renovará el `refresh_token`, por lo que deberás almacenarlo nuevamente.
 
> NEXT_STEP_CARD_ES
>
> Administración de OAuth.
>
> Aprende cómo deshabilitar e invalidar funciones.
>
> [Administración](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/security/oauth/management)