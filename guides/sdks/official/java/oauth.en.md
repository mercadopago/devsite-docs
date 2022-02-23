## Create and update token

To create or update the necessary token to operate your application in the name of a seller.

[[[
```java

OauthClient client = new OauthClient();

String authorizationCode = "TG-XXXXXXXX-241983636";
client.createCredential(authorizationCode, null);
```
]]]
