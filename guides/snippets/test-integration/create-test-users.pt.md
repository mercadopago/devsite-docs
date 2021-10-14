Para realizar os testes de integração, **é necessário que você tenha pelo menos dois usuários:** um vendedor e um comprador.

Execute o seguinte curl para gerar um usuário de teste:

```curl
curl -X POST \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer PROD_ACCESS_TOKEN' \
"https://api.mercadopago.com/users/test_user" \
-d '{"site_id":"[FAKER][GLOBALIZE][UPPER_SITE_ID]"}'
```

A resposta terá estrutura similar a do exemplo abaixo:

```json
{
    "id": 123456,
    "nickname": "TT123456",
    "password": "qatest123456",
    "site_status": "active",
    "email": "test_user_123456@testuser.com"
}
```

>WARNING
>
> Importante
>
> Você pode gerar até 10 contas de usuários de teste ao mesmo tempo. Por isso, recomendamos salvar o e-mail e senha de cada um.
> Os usuários de teste perdem a validade após 60 dias sem atividade no Mercado Pago.
> Tanto o comprador como o vendedor devem ser usuários de teste.