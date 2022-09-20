# Notificações

A API também oferece a opção de se cadastrar para receber notificações de pagamentos realizados através da configuração de Webhooks. Em seguida mostraremos como registrar um webhook utilizando o serviço https://requestbin.com/.

Para registrar um Webhook vinculado à uma chave Pix, execute a seguinte requisição:

[[[
```curl

curl --location --request PUT 'https://pix-api.mercadopago.com/webhook/CHAVE_PIX' \
--header 'Authorization: Bearer TOKEN' \
--header 'Content-Type: application/json' \
--cert PATH_TO_mTLS --key PATH_TO_KEY \
--data-raw '{
    "webhookUrl": "https://enbt7m5adgf8f.x.pipedream.net"
}'

```
]]]

**Resposta**

[[[
```Json

{
    "webhookUrl": "https://enbt7m5adgf8f.x.pipedream.net",
    "chave": "test_user_81729269@testuser.com",
    "criacao": "2022-07-05T17:15:12.107Z"
}

```
]]]
