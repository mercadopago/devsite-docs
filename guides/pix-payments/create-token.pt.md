## Criar token

Além dos certiﬁcados, para autenticar as requisições é necessário enviar um token que expira em 24h.

Para gerar o token, execute a seguinte requisição enviando as informações obtidas na criação do certiﬁcado (**client_id e client_secret**).

[[[
```curl

curl --location --request POST
'https://pix-api.mercadopago.com/auth-pix-oauth2-api/api/v1/token'
\
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'client_id={{client_id}}' \
--data-urlencode 'client_secret={{client_secret}}' \
--data-urlencode 'grant_type=client_credentials' \
--cert PATH_TO_mTLS --key PATH_TO_KEY

```
]]]
