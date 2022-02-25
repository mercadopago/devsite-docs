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
    "email": "test_user_123456@testuser.com",
    "date_created": "2021-11-04T12:02:35Z",
    "date_last_updated": "2021-11-04T12:02:35Z"
}
```

Para mais informações sobre os parâmetros e as respostas da API de usuário de teste, acesse as [Referências da API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference)

> WARNING
>
> Importante
>
> Você pode gerar até 10 contas de usuários de teste ao mesmo tempo. Por isso, recomendamos salvar o **e-mail e senha de cada um**.
> <br/>
> Os usuários de teste perdem a validade após 60 dias sem atividade no Mercado Pago.
> <br/>
> Tanto o comprador como o vendedor devem ser usuários de teste.