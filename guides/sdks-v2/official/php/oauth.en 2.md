## Create token

You can create the token needed to operate your app on behalf of a vendor using the SDK below. For details of the request parameters, check the [Create and refresh token](/developers/en/reference/oauth/_oauth_token/post) API.


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

## Update token

You can update the token needed to operate your app on behalf of a vendor using the SDK below. For details of the request parameters, check the [Create and refresh token](/developers/en/reference/oauth/_oauth_token/post) API.


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