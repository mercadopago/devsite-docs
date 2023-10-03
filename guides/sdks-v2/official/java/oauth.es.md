# Crear y actualizar token

Puedes crear o actualizar el token necesario para operar tu aplicación en nombre de un proveedor utilizando el SDK a continuación. Para detalles de los parámetros de la solicitud, accede a la API [Crear y refrescar token](/developers/es/reference/oauth/_oauth_token/post).

[[[
```java

OauthClient client = new OauthClient();

String authorizationCode = "TG-XXXXXXXX-241983636";
client.createCredential(authorizationCode, null);
```
]]]
