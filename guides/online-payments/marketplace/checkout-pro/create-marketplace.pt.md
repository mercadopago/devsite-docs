# Como integrar o Marketplace no Checkout Pro

> WARNING
>
> Pré-requisitos
>
> * Possuir o [Checkout Pro](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-pro/introduction) implementado.

Para começar, você deve:

1. Registrar uma aplicação e na sequência editar sua **Redirect URI**.
2. Solicitar aos seus vendedores que se vinculem a ela
3. Criar preferências de pagamento em nome de seus vendedores


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

`https://www.URL_de_retorno.com?code=AUTHORIZATION_CODE&id=RANDOM_ID`

> Não envie informações confidenciais ou credenciais da conta Mercado Pago.

### Crie as credenciais de seus vendedores

Utilize o código de autorização obtido no passo anterior para obter as credenciais do usuário usando a API OAuth e assim poder operar em seu nome.

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

* `client_secret`: seu `ACCESS_TOKEN`. Pode obter apartir das configurações da sua [aplicação]([FAKER][CREDENTIALS][URL]).
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

> WARNING
>
> Dica
>
> As credenciais **têm um prazo de validade de 6 meses**.
> Se não se renovam as credenciais dos vendedores antes dos 6 meses, **as mesmas perderão vigência e será preciso autorizar o vendedor novamente**.
> Recomendação: Renovar as credenciais a cada 5 meses.


### Renove as credenciais de seus vendedores

Este processo deve ser efetuado periodicamente para garantir que tenha armazenado em seu sistema as credenciais vigentes dos vendedores, já que são válidas por 6 meses.

Caso encontre qualquer erro no fluxo de pagamento relacionado ao Access Token que estiver utilizando, atualize automaticamente e tente efetuar o pagamento novamente, antes de exibir um erro ao comprador.

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
    "token_type": "bearer",
    "expires_in": 15552000,
    "scope": "offline_access read write",
    "refresh_token": "TG-XXXXXXXX"
}
```


## 3. Integre o checkout

Para realizar a cobrança em nome de seus vendedores, você deve integrar o [Checkout](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-pro/introduction), gerando as preferências de pagamento com o Access Token que você obteve vinculando cada vendedor ao seu aplicativo.

Se deseja cobrar uma comissão por cada pagamento processado pela sua aplicação em nome do seu vendedor, simplesmente adicione esse valor no parâmetro `marketplace_fee` ao criar a preferência:


[[[
```curl

curl -X POST \
-H 'accept: application/json' \
-H 'content-type: application/json' \
-H 'Authorization: Bearer SELLER_AT' \
'https://api.mercadopago.com/checkout/preferences' \
-d '{
    "items": [
        {
            "title": "Item title",
            "description": "Description",
            "quantity": 1,
            "unit_price": 50,
            "currency_id": "[FAKER][CURRENCY][ACRONYM]",
            "picture_url": "https://www.mercadopago.com/org-img/MP3/home/logomp3.gif"
        }
    ],
    "marketplace_fee": 2.29
}'

```
```php

<?php

$preference = new MercadoPago\Preference();

$item = new MercadoPago\Item();
$item->title = "Blue shirt";
$item->quantity = 10;
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
    .setTitle("Blue shirt")
    .setQuantity(10)
    .setCategoryId("[FAKER][CURRENCY][ACRONYM]")
    .setUnitPrice((float) [FAKER][COMMERCE][PRICE]);

Payer payer = new Payer();
payer.setEmail("john@yourdomain.com");

preference.setPayer(payer);
preference.appendItem(item);
preference.setMarketPlace(2.56);
preference.setNotificationUrl("http://urlmarketplace.com/notification_ipn");
preference.save();

```
```node

	var preference = {}

  var item = {
    title: 'Blue shirt',
    quantity: 10,
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

sdk = Mercadopago::SDK.new('ENV_ACCES_TOKEN')

preference_data = {
  items: [
    {
      title: 'Blue shirt',
      description: 'Multicolor Item',
      quantity: 10,
      currency_id: '[FAKER][CURRENCY][ACRONYM]',
      unit_price: [FAKER][COMMERCE][PRICE]
    }
  ],
  payer: {
    email: 'john@yourdomain.com'
  },
  marketplace_fee: 2.56,
  notification_url: 'http://urlmarketplace.com/notification_ipn'
}

preference_response = sdk.preference.create(preference_data);
preference = preference_response[:response]

```
```csharp

var request = new PreferenceRequest
{
    Items = new List<PreferenceItemRequest>
    {
        new PreferenceItemRequest
        {
            Title = "Blue shirt",
            Quantity = 10,
            CurrencyId = "[FAKER][CURRENCY][ACRONYM]",
            UnitPrice = [FAKER][COMMERCE][PRICE]m,
        },
    },
    Payer = new PreferencePayerRequest
    {
        Email = "john@yourdomain.com",
    },
    MarketplaceFee = 2.56m,
    NotificationUrl = "http://urlmarketplace.com/notification_ipn",
};
var client = new PreferenceClient();
Preference preference = await client.CreateAsync(request);

```
```python

preference_data = {
    "items": [
        {
            "title": "Blue shirt",
            "quantity": 10,
            "currency_id": "[FAKER][CURRENCY][ACRONYM]",
            "unit_price": [FAKER][COMMERCE][PRICE],
        }
    ],
    "payer": {
        "email": "john@yourdomain.com"
    },
    "marketplace_fee": 2.56,
    "notification_url": "http://urlmarketplace.com/notification_ipn"
}

preference_response = sdk.preference().create(preference_data)
preference = preference_response["response"]

```
]]]


O vendedor receberá a diferença entre o valor total e as comissões, tanto a do Mercado Pago como a do Marketplace, assim como qualquer outro valor a ser deduzido da venda.

> WARNING
>
> Dica
>
> Quanto mais informações forem enviadas na geração da preferência, melhor nosso sistema de prevenção a fraude trabalhará com relação à aprovação de pagamentos.
> Cria uma preferência de pagamentos tão completa quanto possa.


### Notificações

É necessário que envie sua `notification_url` onde receberá um aviso de todos os novos pagamentos e atualizações de status gerados, assim como também alta e baixa de usuários em seu Marketplace.

Para mais informações, consulte a seção de [notificações](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/notifications/webhooks).

### Devoluções e cancelamentos

As devoluções e cancelamentos poderão ser efetuados tanto pelo marketplace como pelo vendedor, através da API ou a partir da conta no Mercado Pago.

Caso a devolução seja realizada no Marketplace, deve-se utilizar as credenciais obtidas para cobrar em nome do vendedor. 

Os cancelamentos somente poderão ser efetuados utilizando a API de cancelamentos.

Para mais informações, consulte a seção de [devoluções e cancelamentos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/manage-account/account/cancellations-and-refunds).
