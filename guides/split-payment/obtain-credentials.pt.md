# Obter credenciais

Utilize o código de autorização obtido na etapa anterior para adquirir as credenciais do usuário por meio da [API de OAuth](/developers/pt/reference/oauth/_oauth_token/post), permitindo a gestão de suas vendas.

| Parâmetro                | Descrição                                                                                      |
|--------------------------|--------------------------------------------------------------------------------------------------|
| `<CLIENT_ID>`            | Valor de APP_ID obtido nos detalhes de sua aplicação.                                      |
| `<CLIENT_SECRET>`        | Sua SECRET_KEY, também disponível nos detalhes de sua aplicação.                              |
| `<AUTHORIZATION_CODE>`   | Código de autorização obtido ao redirecionar o usuário de volta para o seu site.                     |
| `<REDIRECT_URI>`         | Deve ser a mesma Redirect URI configurada em sua aplicação.                                     |

```curl
curl -X POST \
     -H 'accept: application/json' \
     -H 'content-type: application/x-www-form-urlencoded' \
     'https://api.mercadopago.com/oauth/token' \
     -d 'client_id=<CLIENT_ID>' \
     -d 'client_secret=<CLIENT_SECRET>' \
     -d 'grant_type=authorization_code' \
     -d 'code=<AUTHORIZATION_CODE>' \
     -d 'redirect_uri=<REDIRECT_URI>'
```

#### Resposta

```json
{
    "access_token": "SELLER_PAYER_TOKEN",
    "public_key": "PUBLIC_KEY",
    "refresh_token": "TG-XXXXXXXXX-XXXXX",
    "live_mode": true,
    "user_id": "COLLECTOR_ID DE PAGO",
    "token_type": "bearer",
    "expires_in": 15552000,
    "scope": "offline_access payments write"
}
```

A resposta inclui:
- `access_token` e `public_key` do vendedor vinculado.
- `refresh_token`, que deve ser utilizado para renovar periodicamente as vinculações.
- `user_id`, igual ao `collector_id` utilizado para capturar pagamentos.

> WARNING
>
> Importante
>
> Essas credenciais têm uma validade de 6 meses. Caso não sejam renovadas antes desse período, perderão a validade, e será necessário repetir o processo de vinculação para autorizar novamente o vendedor. Para saber como renovar essas credenciais, consulte o passo a passo na [documentação de Renovação](/developers/pt/docs/split-payment/additional-content/security/oauth/renewal).