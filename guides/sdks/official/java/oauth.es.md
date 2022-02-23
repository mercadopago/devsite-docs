## Crear y actualizar token

Para crear o actualizar el token necesario para operar su aplicación en nombre de un vendedor.

[[[
```java

OauthClient client = new OauthClient();

String authorizationCode = "TG-XXXXXXXX-241983636";
client.createCredential(authorizationCode, null);
```
]]]
