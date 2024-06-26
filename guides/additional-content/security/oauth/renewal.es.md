# Renovar Access Token
 
El flujo **Refresh token** se usa para intercambiar un **temporary grants** de tipo `refresh_token` por un Access Token cuando el que está en uso ha sido obtenido a través del flujo [Authorization code](/developers/es/docs/security/oauth/creation#bookmark_authorization_code) y **se encuentra próximo a caducar** y . El Access Token recibido a través de este llamado es **válido durante 180 días** (6 meses), luego de lo cual se debe reconfigurar todo el flujo de autorización.

Además, este flujo permite continuar utilizando un Access Token válido con las mismas características que el token original, sin necesidad de una nueva interacción con el usuario. Al implementarlo, el token original se intercambia por uno nuevo, que también ofrece la posibilidad de limitar los alcances al devolver un nuevo refresh token para intercambiarlo en el futuro.

> WARNING
>
> Importante
>
> Solo es posible utilizar este flujo si la aplicación retornar el parámetro `scope` indicando el valor `offline_access` y el vendedor ha autorizado previamente esta acción a partir del flujo de [Authorization code](/developers/es/docs/security/oauth/creation#bookmark_authorization_code).

Sigue los pasos a continuación para renovar el **Access Token**.

1. Envía el código de `refresh_token`, tus [credenciales](/developers/es/docs/your-integrations/credentials) y el `authorization_code` obtenido mediante el flujo de [Creación](/developers/es/docs/security/oauth/creation#bookmark_authorization_code) al endpoint [/oauth/token](/developers/es/reference/oauth/_oauth_token/post), incluyendo el código de `refresh_token` en el string `grant_type`, para recibir una nueva respuesta con un nuevo `access_token` y un nuevo `refresh_token`.
2. Actualiza la aplicación con el Access Token recibido en la respuesta.

> WARNING
>
> Importante
>
> Recuerda que cada vez que renueves el `access_token`, también se renovará el `refresh_token`, por lo que deberás almacenarlo nuevamente.

[[[
```php
<?php
  $client = new OauthClient();
  $request = new OAuthRefreshRequest();
    $request->client_secret = "CLIENT_SECRET";
    $request->client_id = "CLIENT_ID";
    $request->refresh_token = "REFRESH_TOKEN";

  $client->refresh($request);
?>
```
```java

OauthClient client = new OauthClient();

String refreshtoken = "TG-XXXXXXXX-241983636";
client.createCredential(refreshtoken, null);
```
```node
const client = new MercadoPagoConfig({ accessToken: 'access_token', options: { timeout: 5000 } });

const oauth = new OAuth(client);

oauth.refresh({
	'client_secret': 'your-client-secret',
	'client_id': 'your-client-id',
	'refresh_token': 'refresh-token'
}).then((result) => console.log(result))
	.catch((error) => console.log(error));
```
```curl
curl -X POST \
'https://api.mercadopago.com/oauth/token'\
-H 'Content-Type: application/json' \
-d '{
 "client_id": "client_id",
 "client_secret": "client_secret",
 "grant_type": "refresh-token",
 "refresh_token": "TG-XXXXXXXX-241983636",
}'
```
]]]