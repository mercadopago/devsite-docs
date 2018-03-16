# Como integrar o Marketplace no Web Payment Checkout

> WARNING
>
> Pré-requisitos
>
> * Possuir o [Checkout](/guides/payments/web-payment-checkout/introduction.pt.md)implementado.

Para começar, você deve:

1. Registrar uma aplicação tipo Marketplace
2. Solicitar aos seus vendedores que se vinculem a ela
3. Criar preferências de pagamento em nome de seus vendedores


## 1. Como criar sua aplicação

Crie sua aplicação a partir deste [link](https://applications.mercadopago.com/), marcando a opção **MP Connect / Marketplace Mode** e os **scopes** `read`, `write` e `offline_access`.

Você também deve preencher uma **Redirect URI** a partir da qual os vendedores serão redirecionados para serem vinculados corretamente.

Assim que criar a aplicação, você obterá o `APP_ID` (identificador de aplicação) necessário para o próximo passo.

## 2. Vinculação de contas

Para operar no Mercado Pago em nome do seu vendedor, você deverá primeiro lhe solicitar uma autorização. Para isso, redirecione o usuário para a seguinte URL substituindo em `client_id` o valor de `APP_ID` e a `redirect_uri` que obteve no passo anterior:

`https://auth.mercadopago.com.ar/authorization?client_id=APP_ID&response_type=code&platform_id=mp&redirect_uri=http%3A%2F%2Fwww.URL_de_retorno.com`

Você receberá o código de autorização na URL que especificou:

`http://www.URL_de_retorno.com?code=AUTHORIZATION_CODE`

Este `AUTHORIZATION_CODE` será utilizado para criar as credenciais, e é válido por 10 minutos.

> WARNING
>
> Dica:
>
> Você pode incluir algum parâmetro na `redirect_uri` para identificar o vendedor correspondente ao código de autorização que recebeu, como o seu e-mail, a ID do usuário no seu sistema ou qualquer outra referência útil.



### Crie as credenciais de seus vendedores

Utilize o código de autorização obtido no passo anterior para obter as credenciais do usuário usando a API OAuth e assim poder operar em seu nome.

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

* `client_id`: O valor de `APP_ID`.
* `client_secret`: Seu `CLIENT_SECRET`.
* `code`: O código de autorização obtido ao redirecionar o usuário de volta para o seu site.
* `redirect_uri`: Deve ser a mesmo Redirect URI que você configurou na sua aplicação.

Response:


```json
{
    "access_token": "MARKETPLACE_SELLER_TOKEN",
    "token_type": "bearer",
    "expires_in": 15552000,
    "scope": "offline_access read write",
    "refresh_token": "TG-XXXXXXXX"
}
```

Na resposta, além do Access Token do vendedor que foi vinculado, você receberá o Refresh Token que deve ser utilizado para renovar suas credenciais periodicamente.

> NOTE
>
> Nota
>
> As credenciais **têm um prazo de validade de 6 meses**.


### Renove as credenciais de seus vendedores

Este processo deve ser efetuado periodicamente para garantir que tenha armazenado em seu sistema as credenciais vigentes dos vendedores, já que são válidas por 6 meses.

Caso encontre qualquer erro no fluxo de pagamento relacionado ao Access Token que estiver utilizando, atualize automaticamente e tente efetuar o pagamento novamente, antes de exibir um erro ao comprador.

```curl
curl -X POST \
     -H 'accept: application/json' \
     -H 'content-type: application/x-www-form-urlencoded' \
     'https://api.mercadopago.com/oauth/token' \
     -d 'client_id=CLIENT_ID' \
     -d 'client_secret=CLIENT_SECRET' \
     -d 'grant_type=refresh_token' \
     -d 'refresh_token=USER_RT'
```

Resposta esperada:

```json
{
    "access_token": "MARKETPLACE_SELLER_TOKEN",
    "token_type": "bearer",
    "expires_in": 15552000,
    "scope": "offline_access read write",
    "refresh_token": "TG-XXXXXXXX"
}
```


## 3. Integre o checkout

Para realizar a cobrança em nome de seus vendedores, você deve integrar o [Checkout](/guides/payments/web-payment-checkout/introduction.pt.md), gerando as preferências de pagamento com o Access Token de cada vendedor para a sua aplicação.

Se deseja cobrar uma comissão por cada pagamento processado pela sua aplicação em nome do seu vendedor, simplesmente adicione esse valor no parâmetro `marketplace_fee` ao criar a preferência:


[[[
```php

<?php

$preference = new MercadoPago\Preference();

$item = new MercadoPago\Item();
$item->title = "[FAKER][COMMERCE][PRODUCT_NAME]";
$item->quantity = [FAKER][NUMBER][BETWEEN][1,10];
$item->currency_id = "[FAKER][CURRENCY][ACRONYM]";
$item->unit_price = [FAKER][COMMERCE][PRICE];

$payer = new MercadoPago\Payer();
$payer->email = "test_user_19653727@testuser.com";

$preference->items = array($item);
$preference->payer = $payer;
$preference->marketplace_fee = 2.56
$preference->notification_url = "http://urlmarketplace.com/notification_ipn"

$preference->save();
?>

```
```java

Preference preference = new Preference();

Item item = new Item();
item.setId("1234")
    .setTitle("[FAKER][COMMERCE][PRODUCT_NAME]")
    .setQuantity([FAKER][NUMBER][BETWEEN][1,10])
    .setCategoryId("[FAKER][CURRENCY][ACRONYM]")
    .setUnitPrice((float) [FAKER][COMMERCE][PRICE]);

Payer payer = new Payer();
payer.setEmail("[FAKER][INTERNET][FREE_EMAIL]");

preference.setPayer(payer);
preference.appendItem(item);
preference.setMarketPlace(2.56);
preference.setNotificationUrl("http://urlmarketplace.com/notification_ipn");
preference.save();

```
```node

	var preference = {}

  var item = {
    title: '[FAKER][COMMERCE][PRODUCT_NAME]',
    quantity: [FAKER][NUMBER][BETWEEN][1,10],
    currency_id: '[FAKER][CURRENCY][ACRONYM]',
    unit_price: [FAKER][COMMERCE][PRICE]
  }

  var payer = {
    email: "demo@mail.com"
  }

  preference.items = [item]
  preference.payer = payer
  preference.marketplace_fee = 2.56
  preference.notification_url = "http://urlmarketplace.com/notification_ipn";

  mercadopago.preferences.create(preference).then(function (data) {
     // Do Stuff...
   }).catch(function (error) {
     // Do Stuff...
   });

```
```ruby

preference = MercadoPago::Preference.new()

item = MercadoPago::Item.new()
item.title="[FAKER][COMMERCE][PRODUCT_NAME]"
item.quantity= [FAKER][NUMBER][BETWEEN][1,10]
item.currency_id = '[FAKER][CURRENCY][ACRONYM]'
item.unit_price = [FAKER][COMMERCE][PRICE]

payer = MercadoPago::Payer.new()
payer.email="[FAKER][INTERNET][FREE_EMAIL]"

preference.items = [item]
preference.payer = payer
preference.marketplace_fee = 2.56
preference.notification_url = "http://urlmarketplace.com/notification_ipn"

preference.save

```
]]]


O vendedor receberá a diferença entre o valor total e as comissões, tanto a do Mercado Pago como a do Marketplace, assim como qualquer outro valor a ser deduzido da venda.

### Notificações

É necessário que envie sua `notification_url` onde receberá um aviso de todos os novos pagamentos e atualizações de status gerados.

Para mais informações, consulte a seção de [notificações](/guides/notifications/ipn.pt.md).

### Devoluções e cancelamentos

As devoluções e cancelamentos poderão ser efetuados tanto pelo marketplace como pelo vendedor, através da API ou a partir da conta no Mercado Pago.

Os cancelamentos somente poderão ser efetuados utilizando a API de cancelamentos.

Para mais informações, consulte a seção de [devoluções e cancelamentos](/guides/manage-account/cancellations-and-refunds.es.md).
