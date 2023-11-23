## Crear token

Puedes crear el token necesario para operar tu aplicación en nombre de un proveedor utilizando el SDK a continuación. Para detalles de los parámetros de la solicitud, accede a la API [Crear y refrescar token](/developers/es/reference/oauth/_oauth_token/post).

[[[
```php
<?php
  $client = new OauthClient();
   $request = new OAuthCreateRequest();
     $request->client_secret = "CLIENT_SECRET";
     $request->client_id = "CLIENT_ID";
     $request->code = "CODE";
     $request->redirect_uri = "REDIRECT_URI";

  $client->create($request);
?>
```
]]]

## Actualizar token

Puedes actualizar el token necesario para operar tu aplicación en nombre de un proveedor utilizando el SDK a continuación. Para detalles de los parámetros de la solicitud, accede a la API [Crear y refrescar token](/developers/es/reference/oauth/_oauth_token/post).

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
]]]