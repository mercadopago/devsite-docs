## Criar e atualizar token

É possível criar ou atualizar o token necessário para operar seu aplicativo em nome de um vendedor utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, acesse a API [Criar e atualizar token](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/oauth/_oauth_token/post)

[[[
```java

OauthClient client = new OauthClient();

String authorizationCode = "TG-XXXXXXXX-241983636";
client.createCredential(authorizationCode, null);
```
]]]