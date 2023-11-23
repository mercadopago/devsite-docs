## Crear token

Puedes crear el token necesario para operar tu aplicación en nombre de un proveedor utilizando el SDK a continuación. Para detalles de los parámetros de la solicitud, accede a la API [Crear y refrescar token](/developers/es/reference/oauth/_oauth_token/post).

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

## Actualizar token

Puedes actualizar el token necesario para operar tu aplicación en nombre de un proveedor utilizando el SDK a continuación. Para detalles de los parámetros de la solicitud, accede a la API [Crear y refrescar token](/developers/es/reference/oauth/_oauth_token/post).

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