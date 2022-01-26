Para realizar os testes de integração, **é necessário que você tenha pelo menos dois usuários:** um vendedor e um comprador.

Execute o seguinte curl para gerar um usuário de teste:

```curl
curl -X POST  - /test_users
-H "Content-Type: application/json" \
-H 'Authorization: Bearer PROD_ACCESS_TOKEN' \
"https://api.mercadopago.com/users/test_users" \
-d '{"site_id":"[FAKER][GLOBALIZE][UPPER_SITE_ID]"}'
```

A resposta terá estrutura similar a do exemplo abaixo:

```json
{
  "id": 123,
  "nickname": "TEST45I5GYIH",
  "password": "qatest6730",
  "site_status": "active",
  "site_id": "MLA",
  "email": "test_user_123@testuser.com",
  "date_created": "2021-11-04T12:02:35Z",
  "date_last_updated": "2021-11-04T12:02:35Z"
}
```

>WARNING
>
> Importante
>
> Você pode gerar até 10 contas de usuários de teste ao mesmo tempo. Por isso, recomendamos salvar o e-mail e senha de cada um.
> Os usuários de teste perdem a validade após 60 dias sem atividade no Mercado Pago.
> Tanto o comprador como o vendedor devem ser usuários de teste.