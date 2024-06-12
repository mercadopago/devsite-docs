# Renew Access Token
 
The **Refresh token** flow is used to exchange a **temporary grants** of type `refresh_token` for an Access Token when the current Access Token**is close to expiry**. The Access Token received through the endpoint is **valid for 180 days**, after which the entire authorization flow must be reconfigured.
 
Additionally, the flow allows you to continue using a valid Access Token with the same characteristics as the original token without the need for a new interaction with the user. By performing this flow, the original token is exchanged for a new one which also offers the ability to limit scopes by returning a new refresh token for future exchange.
 
> WARNING
>
> Important
>
> It is only possible to use this flow if the application contains the `offline_access` scope and the seller has previously authorized this action.
 
Follow the steps below to renew the **Access Token**.
 
1. Send the `refresh_token` code, your [credentials](/developers/en/docs/your-integrations/credentials), and the `authorization_code` (see [Creation](/developers/en/docs/security/oauth/creation#bookmark_authorization_code)) to the [/oauth/token](/developers/en/reference/oauth/_oauth_token/post) endpoint with the `refresh_token` code in the `grant_type` string to receive a new response with a new `access_token` and a new `refresh_token`.
2. Update the application with the Access Token received in the response.
 
> WARNING
>
> Important
>
> Remember that every time you refresh the `access_token`, the `refresh_token` will also be refreshed, so you will need to store it again.

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
curl -X POST \
'https://api.mercadopago.com/oauth/token'\
-H 'Content-Type: application/json' \
-d '{
 "client_id": "client_id",
 "client_secret": "client_secret",
 "grant_type": "refresh-token",
 "refresh_token": "TG-XXXXXXXX-241983636",
}'
]]]