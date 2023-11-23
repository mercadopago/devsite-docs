## Criar token

É possível criar o token necessário para operar seu aplicativo em nome de um vendedor utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, acesse a API [Criar e atualizar token](/developers/pt/reference/oauth/_oauth_token/post)

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

## Atualizar token

É possível atualizar o token necessário para operar seu aplicativo em nome de um vendedor utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, acesse a API [Criar e atualizar token](/developers/pt/reference/oauth/_oauth_token/post)

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