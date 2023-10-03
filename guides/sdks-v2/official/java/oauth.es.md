# Crear y actualizar token

Puede crear o actualizar el token necesario para operar su aplicación en nombre de un proveedor utilizando el SDK a continuación. Para detalles de los parámetros de la solicitud, acceda a la API [Crear y refrescar token](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/oauth/_oauth_token/post).

[[[
```java

OauthClient client = new OauthClient();

String authorizationCode = "TG-XXXXXXXX-241983636";
client.createCredential(authorizationCode, null);
```
]]]
