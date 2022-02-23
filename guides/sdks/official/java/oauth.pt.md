## Criar e atualizar token

Para criar ou atualizar o token necessário para operar seu aplicativo em nome de um vendedor.

[[[
```java

OauthClient client = new OauthClient();

String authorizationCode = "TG-XXXXXXXX-241983636";
client.createCredential(authorizationCode, null);
```
]]]