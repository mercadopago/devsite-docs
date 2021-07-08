# Como integrar o marketplace via API

> WARNING
>
> Pré-requisitos
>
> * Possuir a ----[mla, mlm, mlc, mco, mlu, mpe]---- [Checkout API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/introduction) ------------ ----[mlb]---- [Checkout Transparente](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/introduction) ------------ implementado.

Para começar, você deve:

1. Registrar uma aplicação e na sequência editar sua **Redirect URI**.
2. Solicitar aos seus fornecedores que se vinculem a ela.
3. Criar pagamentos em nome de seus vendedores.


## 1. Como criar sua aplicação

[Crie uma aplicação](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel), e na sequência edite sua configuração avançada completando a **Redirect URI** onde serão redirecionados os vendedores ao finalizar o processo de vinculação.

Assim que criar a aplicação, você obterá o `APP_ID` (identificador de aplicação) necessário para o próximo passo.

## 2. Vinculação de contas

Para operar no Mercado Pago em nome do seu vendedor, primeiro você deverá lhe solicitar uma autorização. 

2.1. Para isso, redirecione o vendedor para a seguinte URL substituindo em `client_id`, o valor de `APP_ID` e a `redirect_uri` que configurou no passo anterior:

`https://auth.mercadopago[FAKER][URL][DOMAIN]/authorization?client_id=APP_ID&response_type=code&platform_id=mp&redirect_uri=http://www.URL_de_retorno.com`

<br>
2.2. Quando o vendedor aceitar, será feita um último redirecionamento e você receberá o código de autorização na URL que especificou:

`http://www.URL_de_retorno.com?code=AUTHORIZATION_CODE`

O `AUTHORIZATION_CODE` possui um tempo de validade de 10 minutos e deve ser utilizado para criar as credenciais, que irão te permitir operar em nome do vendedor.

<br>
2.3. Você também pode incluir o parâmetro `state` na URL de autorização para identificar a quem corresponde o código que recebeu. Faça isso com segurança, atribuindo neste parâmetro um identificador aleatório exclusivo para cada tentativa.

Incluindo esse parâmetro, a URL de redirecionamento ficaria da seguinte forma:

`https://auth.mercadopago[FAKER][URL][DOMAIN]/authorization?client_id=APP_ID&response_type=code&platform_id=mp&state=id=RANDOM_ID=&redirect_uri=http://www.URL_de_retorno.com`

Agora você receberá o código de autorização e o identificador seguro na URL de retorno especificada:

`http://www.URL_de_retorno.com?code=AUTHORIZATION_CODE&id=RANDOM_ID`

> Não envie informações confidenciais ou credenciais da conta Mercado Pago.

### Crie as credenciais de seus vendedores

Utilize o código de autorização obtido no passo anterior para obter as credenciais do usuário mediante a API OAuth para que possa operar em seu nome.

Request:

```curl
curl -X POST \
     -H 'accept: application/json' \
     -H 'content-type: application/x-www-form-urlencoded' \
     'https://api.mercadopago.com/oauth/token' \
     -d 'client_secret=ACCESS_TOKEN' \
     -d 'grant_type=authorization_code' \
     -d 'code=AUTHORIZATION_CODE' \
     -d 'redirect_uri=REDIRECT_URI'
```

Os parâmetros que você deve incluir são:

* `client_secret`: seu `ACCESS_TOKEN`. Pode obter apartir das configurações da sua [aplicação.]([FAKER][CREDENTIALS][URL])
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

Para receber pagamentos em nome de seus vendedores, você deve integrar a [API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/introduction), gerando os pagamentos com o Access Token que você obteve vinculando cada vendedor ao seu aplicativo.

Se deseja cobrar uma taxa de comissão por cada pagamento processado pela sua aplicação em nome do seu usuário, simplesmente adicione esse valor no parâmetro  `application_fee` ao criar pagamento:

[[[
```curl
curl -X POST \
        -H 'accept: application/json' \
        -H 'content-type: application/json' \
        -H 'Authorization: Bearer USER_AT' \
        https://api.mercadopago.com/v1/payments \
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

payment.setTransactionAmount(100f)
      .setToken('ff8080814c11e237014c1ff593b57b4d')
      .setDescription('Title of what you are paying for')
      .setInstallments(1)
      .setPaymentMethodId("visa")
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
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

payment_data = { 
  transaction_amount: 100,
  token: 'ff8080814c11e237014c1ff593b57b4d',
  description: 'Title of what you are paying for',
  installments: 1,
  payment_method_id: 'visa',
  payer: {
    email: 'test_user_19653727@testuser.com'
  }
}

payment_response = sdk.payment.create(payment_data)
payment = payment_response[:response]

```
```csharp

using MercadoPago.Client.Payment;
using MercadoPago.Config;
using MercadoPago.Resource.Payment;

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var paymentRequest = new PaymentCreateRequest
{
    TransactionAmount = 100,
    Token = "ff8080814c11e237014c1ff593b57b4d",
    Description = "Title of what you are paying for",
    Installments = 1,
    PaymentMethodId = "visa",
    Payer = new PaymentPayerRequest
    {
        Email = "test_user_19653727@testuser.com",
    },
    ApplicationFee = 5,
};

var client = new PaymentClient();
Payment payment = await client.CreateAsync(paymentRequest);
```
```python

import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

payment_data = {
    "transaction_amount": 100,
    "token": 'ff8080814c11e237014c1ff593b57b4d',
    "description": "Title of what you are paying for",
    "installments": 1,
    "payment_method_id": "visa",
    "payer": {
        "email": "test_user_19653727@testuser.com"
    }
}

payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]

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

Você pode receber notificações quando seus clientes autorizarem ou desautorizarem sua aplicação, [configurando a URL](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/notifications) em sua conta.

Para mais informações, consulte a seção de [notificações](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/notifications/webhooks).

### Devoluções e cancelamentos

As devoluções e cancelamentos poderão ser efetuados tanto pelo marketplace como pelo vendedor, através da API ou a partir da conta no Mercado Pago.

Caso a devolução se realize no marketplace, deve-se utilizar as credenciais obtidas para cobrar em nome do vendedor.

Os cancelamentos somente poderão ser efetuados utilizando a API de cancelamentos.

Para mais informações, consulte a seção de [devoluções e cancelamentos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/manage-account/account/cancellations-and-refunds).

### Teste seu Marketplace

É possível testar seu marketplace usando as credenciais de Sandbox da sua conta para associar os vendedores e fazer as cobranças/cancelamentos entre outros.

Você pode usar os cartões de teste fornecidos pelo Mercado Pago e os diferentes prefixos para manipular as mensagens de resposta.

[Teste sua integração](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/testing)
