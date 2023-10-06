## Create token

You can create the token needed to operate your app on behalf of a vendor using the SDK below. For details of the request parameters, check the [Create and refresh token](/developers/en/reference/oauth/_oauth_token/post) API.


[[[
```node
const client = new MercadoPagoConfig({ accessToken: 'access_token', options: { timeout: 5000 } }); 

const oauth = new OAuth(client);

oauth.create({
	'client_secret': 'your-client-secret',
	'client_id': 'your-client-id',
	'code': 'return-of-getAuthorizationURL-function',
	'redirect_uri': 'redirect-uri'
}).then((result) => console.log(result))
	.catch((error) => console.log(error));
```
]]]

## Update token

You can update the token needed to operate your app on behalf of a vendor using the SDK below. For details of the request parameters, check the [Create and refresh token](/developers/en/reference/oauth/_oauth_token/post) API.


[[[
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
]]]