## Create and update token

You can create or update the token needed to operate your app on behalf of a vendor using the SDK below. For details of the request parameters, check the [Create and refresh token](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/oauth/_oauth_token/post) API.


[[[
```java

OauthClient client = new OauthClient();

String authorizationCode = "TG-XXXXXXXX-241983636";
client.createCredential(authorizationCode, null);
```
]]]
