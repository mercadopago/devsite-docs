## Criar token

É possível criar o token necessário para operar seu aplicativo em nome de um vendedor utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, acesse a API [Criar e atualizar token](/developers/pt/reference/oauth/_oauth_token/post)

[[[
```node
const client = new MercadoPago({ accessToken: 'access_token', options: { timeout: 5000 } }); 

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

## Atualizar token

É possível atualizar o token necessário para operar seu aplicativo em nome de um vendedor utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, acesse a API [Criar e atualizar token](/developers/pt/reference/oauth/_oauth_token/post)

[[[
```node
const client = new MercadoPago({ accessToken: 'access_token', options: { timeout: 5000 } });

const oauth = new OAuth(client);

oauth.refresh({
	'client_secret': 'your-client-secret',
	'client_id': 'your-client-id',
	'refresh_token': 'refresh-token'
}).then((result) => console.log(result))
	.catch((error) => console.log(error));
```
]]]