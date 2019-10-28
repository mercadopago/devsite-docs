# Como integrar o marketplace via API

> WARNING
>
> Pré-requisitos
>
> * Possuir a [API](https://www.mercadopago.com.br/developers/pt/guides/payments/api/introduction) implementada.

Para começar, você deve:

1. Registrar uma aplicação tipo Marketplace.
2. Solicitar aos seus fornecedores que se vinculem a ela.
3. Criar pagamentos em nome de seus vendedores.


## 1. Como criar sua aplicação

Crie sua aplicação a partir deste [link](https://applications.mercadopago.com/), marcando a opção **MP Connect / Marketplace mode** e os **scopes** `read`, `write` y `offline_access`.

Você também deve completar uma **Redirect URI** a partir da qual os vendedores serão redirecionados para serem vinculados corretamente.

Assim que criar a aplicação, você obterá o `APP_ID` (identificador de aplicação) necessário para o próximo passo.

## 2. Vinculação de contas

Para operar no Mercado Pago em nome do seu vendedor, você deverá primeiro lhe solicitar uma autorização. Para isso, redirecione o usuário para a seguinte URL substituindo em `client_id` o valor de `APP_ID` e a `redirect_uri`que obteve no passo anterior:

`https://auth.mercadopago.com.ar/authorization?client_id=APP_ID&response_type=code&platform_id=mp&redirect_uri=http%3A%2F%2Fwww.URL_de_retorno.com`

Você receberá o código de autorização na URL que especificou:

`http://www.URL_de_retorno.com?code=AUTHORIZATION_CODE`

Este `AUTHORIZATION_CODE` será utilizado para criar as credenciais, e é válido por 10 minutos.

> WARNING
>
> Dica
>
> Você pode incluir algum parâmetro na `redirect_uri` para identificar o vendedor correspondente ao código de autorização que recebeu, como o seu e-mail, o ID do usuário no seu sistema ou qualquer outra referência útil.
> Exemplo Prático:
> -Redirect_uri definida na aplicação: https://www.mercadopago.com/mp.php
> -Redirect uri para passar no link de Oauth: https://www.mercadopago.com/mp.php?user_id=001
> -Redirect_uri ao associar o vendedor que obteve o código de segurança com o Oauth: https://www.mercadopago.com/mp.php?user_id=001

### Crie as credenciais de seus vendedores

Utilize o código de autorização obtido no passo anterior para obter as credenciais do usuário mediante a API OAuth para que possa operar em seu nome.

Request:

```curl
curl -X POST \
     -H 'accept: application/json' \
     -H 'content-type: application/x-www-form-urlencoded' \
     'https://api.mercadopago.com/oauth/token' \
     -d 'client_id=CLIENT_ID' \
     -d 'client_secret=CLIENT_SECRET' \
     -d 'grant_type=authorization_code' \
     -d 'code=AUTHORIZATION_CODE' \
     -d 'redirect_uri=REDIRECT_URI'
```

Os parâmetros que você deve incluir são:

* `client_id`: o valor de `APP_ID`. Pode obter apartir das configurações da sua [aplicação.](https://applications.mercadopago.com/)
* `client_secret`: seu `SECRET_KEY`. Pode obter apartir das configurações da sua [aplicação.](https://applications.mercadopago.com/)
* `code`: o código de autorização obtido ao redirecionar o usuário de volta para o seu site.
* `redirect_uri`: deve ser a mesma Redirect URI que você configurou na sua aplicação.


Response:

```json
{
    "access_token": "MARKETPLACE_SELLER_TOKEN",
    "public_key": "PUBLIC_KEY",
    "refresh_token": "TG-XXXXXXXXX-XXXXX",
    "live_mode": true,
    "user_id": USER_ID,
    "token_type": "bearer",
    "expires_in": 15552000,
    "scope": "offline_access payments write"
}
```

Na resposta, além do `access_token` e da `public_key`do vendedor que foi vinculado, você obtém o `refresh_token` que deve ser utilizado para renovar suas credenciais periodicamente.

> NOTE
>
> Nota
>
> As credenciais têm um **prazo de validade de 6 meses**.
> Se não se renovarem as credenciais dos vendedores antes dos 6 meses, **as mesmas perderão vigência e se deverá autorizar o vendedor novamente**. 
> Recomendação: Renovar as credenciais a cada 5 meses. 


### Renove as credenciais de seus vendedores

Este processo deve ser efetuado periodicamente para garantir que tenha armazenado em seu sistema as credenciais vigentes dos vendedores, já que são válidas por 6 meses.

Caso encontre qualquer erro no fluxo de pagamento que esteja relacionado ao Access Token que estiver utilizando, atualize automaticamente e tente efetuar o pagamento novamente, antes de exibir um erro ao comprador.


```curl
curl -X POST \
     -H 'accept: application/json' \
     -H 'content-type: application/x-www-form-urlencoded' \
     'https://api.mercadopago.com/oauth/token' \
     -d 'client_secret= ACCESS_TOKEN' \
     -d 'grant_type=refresh_token' \
     -d 'refresh_token=USER_RT'
```

Resposta esperada:

```json
{
    "access_token": "MARKETPLACE_SELLER_TOKEN",
    "public_key": "PUBLIC_KEY",
    "refresh_token": "TG-XXXXXXXXX-XXXXX",
    "live_mode": true,
    "user_id": USER_ID,
    "token_type": "bearer",
    "expires_in": 15552000,
    "scope": "offline_access payments write"
}
```

## 3. Integre a API para receber pagamentos

Para receber pagamentos em nome de seus vendedores, você deve integrar a [API](https://www.mercadopago.com.br/developers/pt/guides/payments/api/introduction), utilizando o`access_token` e cada fornecedor para a sua aplicação.

Se deseja cobrar uma taxa de comissão por cada pagamento processado pela sua aplicação em nome do seu usuário, simplesmente adicione esse valor no parâmetro  `application_fee` ao criar pagamento:

[[[
```curl
curl -X POST \
        -H 'accept: application/json' \
        -H 'content-type: application/json' \
        https://api.mercadopago.com/v1/payments?access_token=USER_AT \
        -d '{
                "transaction_amount": 100,
                "token": "ff8080814c11e237014c1ff593b57b4d",
                "description": "Title of what you are paying for",
                "installments": 1,
                "payer": {
                        "id": "12345678"
                },
                "payment_method_id": "visa",
                "application_fee": 2.56
        }'
```
```php
<?php  

  require ('mercadopago.php');
  MercadoPago\SDK::configure(['ACCESS_TOKEN' => 'ENV_ACCESS_TOKEN']);

  $payment = new MercadoPago\Payment();

  $payment->transaction_amount = 100;
  $payment->token = "ff8080814c11e237014c1ff593b57b4d";
  $payment->description = "Title of what you are paying for";
  $payment->installments = 1;
  $payment->payment_method_id = "visa";
  $payment->user_token = "ENV_USER_TOKEN";
  $payment->payer = array(
    "email" => "test_user_19653727@testuser.com"
  );

  $payment->save();

?>
```
```java

import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Payment payment = new Payment();

payment.setTransactionAmount(100)
      .setToken('ff8080814c11e237014c1ff593b57b4d')
      .setDescription('Title of what you are paying for')
      .setInstallments(1)
      .setPaymentMethodId("visa")
      .setUserToken("ENV_USER_TOKEN")
      .setPayer(new Payer("test_user_19653727@testuser.com"));

payment.save();

```
```node

var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

var payment_data = {
  transaction_amount: 100,
  token: 'ff8080814c11e237014c1ff593b57b4d'
  description: 'Title of what you are paying for',
  installments: 1,
  payment_method_id: 'visa',
  user_token: "ENV_USER_TOKEN"
  payer: {
    email: 'test_user_3931694@testuser.com'
  }
};

mercadopago.payment.create(payment_data).then(function (data) {
  // Do Stuff...
}).catch(function (error) {
  // Do Stuff...
});

```
```ruby

require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

payment = MercadoPago::Payment.new()
payment.transaction_amount = 100
payment.token = 'ff8080814c11e237014c1ff593b57b4d'
payment.description = 'Title of what you are paying for'
payment.installments = 1
payment.payment_method_id = "visa"
payment.user_token = "ENV_USER_TOKEN"
payment.payer = {
  email: "test_user_19653727@testuser.com"
}

payment.save()

```
]]]


O vendedor receberá a diferença entre o valor total e as comissões, tanto a do Mercado Pago como a do Marketplace, assim como qualquer outro valor a ser deduzido da venda.

> WARNING
>
> Dica
>
> Quanto mais informações forem enviadas na geração da preferência, melhor nosso sistema de prevenção a fraude trabalhará com relação à aprovação de pagamentos.
> Crie uma preferência de pagamento tão completa quanto possa.

### Notificações

É necessário que envie sua `notification_url`, onde receberá um aviso de todos os novos pagamentos e atualizações de status gerados, bem como alta e baixa de usuários no Marketplace.

Você pode receber notificações quando seus clientes autorizarem ou desautorizarem sua aplicação, [configurando a URL](https://www.mercadopago.com/mlb/account/webhooks) em sua conta.

Para mais informações, consulte a seção de [notificações](https://www.mercadopago.com.br/developers/pt/guides/notifications/webhooks).

### Devoluções e cancelamentos

As devoluções e cancelamentos poderão ser efetuados tanto pelo marketplace como pelo vendedor, através da API ou a partir da conta no Mercado Pago.

Caso a devolução se realize no marketplace, deve-se utilizar as credenciais obtidas para cobrar em nome do vendedor.

Os cancelamentos somente poderão ser efetuados utilizando a API de cancelamentos.

Para mais informações, consulte a seção de [devoluções e cancelamentos](https://www.mercadopago.com.ar/developers/pt/guides/manage-account/cancellations-and-refunds).

### Teste seu Marketplace

É possível testar seu marketplace usando as credenciais de Sandbox da sua conta para associar os vendedores e fazer as cobranças/cancelamentos entre outros.

Você pode usar os cartões de teste fornecidos pelo Mercado Pago e os diferentes prefixos para manipular as mensagens de resposta.

[Teste sua integração](https://www.mercadopago.com.br/developers/pt/guides/payments/api/testing) 
