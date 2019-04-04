# Solicitar permissão

### Solicitar permissões a seus usuários para acessar sua carteira do Mercado Pago

Deve-se implementar o fluxo de autorização, para solicitar a seus usuários as permisões para acessar sua carteira. Isso se realiza utilizando um fluxo de Oauth.

Deve-se redirecionar seus usuários para o seguinte link:

`https://auth.mercadopago.com.ar/authorization?client_id=<APP_ID>&response_type=code&platform_id=mp&redirect_uri=<REDIRECT_URI>&scopes=read,write,offline_access,wallet-payments`

onde:

* `<APP_ID>` é o valor de APP_ID.
* `<REDIRECT_URI>` é o valor inserido no campo `Redirect Uri`.

Será recebido um código de autorização na url especificada:

`http://<REDIRECT_URI>?code=AUTHORIZATION_CODE`

Este `AUTHORIZATION_CODE` será utilizado para criar as credenciais, e possui um tempo de validade de 10 minutos.

### Obter o access token e os dados do pagador

Use o código de autorização, obtido no passo anterior, para obter as credenciais do usuário mediante a API de OAuth e assim poder realizar um pagamento acessando os meio de pagamento da sua carteira.

#### Request
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

Os parâmetros que devem ser incluídos são:

* `<CLIENT_ID>` É o valor de `APP_ID`. Pode-se obte-lo na tela de detalhe da sua aplicação.
* `<CLIENT_SECRET>` É o `SECRET_KEY`. Pode-se obte-lo na tela de detalhe da sua aplicação.
* `<AUTHORIZATION_CODE>` O código de autorização que se obteve ao redirecionar o usuário de volta ao seu site.
* `<REDIRECT_URI>` Deve ser a mesma `Redirect URI` configurada na sua aplicação.

#### Response
```json
{
    "access_token": "PAYER_ACCESS_TOKEN",
    "public_key": "PUBLIC_KEY",
    "refresh_token": "TG-XXXXXXXXX-XXXXX",
    "live_mode": true,
    "user_id": USER_ID,
    "token_type": "bearer",
    "expires_in": 15552000,
    "scope": "offline_access payments write wallet-payments"
}
```

Na resposta, além do `access_token` e `public_key` do pagador que havia sido vinculado, obtêm-se o `refresh_token` que deve ser utilizado para renovar periodicamente suas credenciais.

As credenciais possuem um tempo de validade de 6 meses. Se não se renovam as credenciais dos pagadores antes dos 6 meses, as mesmas perderão vigência e será preciso autorizar o pagador novamente.
