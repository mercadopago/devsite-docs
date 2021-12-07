# Integre o Marketplace no Checkout Pro

> WARNING
>
> Pré-requisitos
>
> * Você deve ter [Checkout Pro](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-pro/introduction) instalado.

Para começar, você deve:

Para começar, siga os passos abaixo:

1. Crie ou configure sua aplicação.
2. Vincule sua aplicação à conta de seus vendedores.
3. Crie as credenciais para operar.
4. Renove as credenciais.
5. Integre o Checkout Pro.

## Crie ou configure sua aplicação.

Primeiramente, você deve ter criado [sua aplicação](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/applications/create-app) com um nome de identificação único.

Depois, é preciso **configurar um Redirect URL para sua aplicação**. Para isso, acesse [Suas Aplicações](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel), clique no menu de opções da sua aplicação e selecione Editar. 

No campo Redirect URL, adicione o endereço para onde você deseja encaminhar os vendedores após tê-los vinculado corretamente. Lembre-se que os códigos de autorização para a criação das credenciais serão enviados para o endereço cadastrado.

Finalmente, você deve obter a ID do sua aplicação em [Suas Integrações](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel).

## Vincule sua aplicação à conta de seus vendedores.

Para operar em nome dos seus vendedores através de suas contas do Mercado Pago, primeiramente, você deve solicitar uma autorização. É possível gerenciar mais de uma conta do Mercado Pago simultaneamente em sua integração através do OAuth, um um protocolo de autenticação que permite ao vendedor acessar sua conta do Mercado Pago, realizar a autenticação  e habilitar seu aplicativo para funcionar utilizando seu nome.

Para isso, é preciso incluir em sua aplicação uma URL que encaminhe o vendedor para o site de autorização. 

Compartilhamos a URL base que você deve utilizar e o detalhe dos parâmetros com os quais deverá completá-la.

```url
https://auth.mercadopago[FAKER][URL][DOMAIN]/authorization?client_id=APP_ID&response_type=code&platform_id=mp&state=RANDOM_ID&redirect_uri=https://www.redirect-url.com


```

| Parâmetro | Dado a completar |
| ----------------- | ----------------- |
| `client_id` | Substitua o valor `APP_ID` com a ID da sua aplicação. |
| `state` | Identifique de quem é o código que você vai receber. Para isso, substitua o valor `RANDOM_ID` por um identificador que seja único para cada tentativa e que não inclua informações sensíveis. |
| `redirect_uri` | Adicione a URL que informou no campo Redirect URL ao configurar sua aplicação. | 

Ao acessar essa URL, o vendedor será encaminhado para o Mercado Pago, onde deverá fazer o login com sua conta e autorizar o vínculo com sua aplicação.

![FlujoOAuth-pt](/images/oauth/oauth-pt-v2.png)

Quando o vendedor autorizar o vínculo da aplicação à sua conta do Mercado Pago, você receberá em seu servidor o código de autorização na Redirect URL especificada, conforme mostrado abaixo.  

```url
https://www.redirect-url.com?code=CODE&state=RANDOM_ID
```

> Lembre-se que o valor `code` tem um período de validade de 10 minutos.

> SERVER_SIDE
>
> h2
>
> Crie as credenciais para operar

Para criar as credenciais necessárias para sua aplicação operar em nome de um vendedor, você terá que enviar o `CODE` obtido no passo anterior através da API de OAuth.

Os parâmetros que você deve incluir são:

| Parâmetro | Dado a preencher |
| ----------------- | ----------------- |
| `client_secret` | Chave privada para ser utilizada em alguns plugins para gerar pagamentos. Você pode obtê-lo em [Suas Credenciais]([FAKER][CREDENTIALS][URL]). |
| `client_id` | ID único que identifica sua integração. Você pode obtê-lo em [Suas Credenciais]([FAKER][CREDENTIALS][URL]). |
| `grant_type` | Diz respeito ao tipo de operação a ser realizada para obter as credenciais. Este parâmetro é fixo e seu valor é `authorization_code`. |
| `code` | O código de autorização ou `CODE` que você obtém em seu servidor ao realizar a vinculação. Será similar a este valor: `TG-60357f5d0cd06d000740646d-643464554`. | 
| `redirect_uri` | É a URL que você configurou no campo Redirect URL em sua aplicação.|

```curl
curl -X POST \
     -H 'accept: application/json' \
     -H 'content-type: application/x-www-form-urlencoded' \
     'https://api.mercadopago.com/oauth/token' \
     -d 'client_secret=CLIENT_SECRET' \
     -d 'client_id=CLIENT_ID' \
     -d 'grant_type=authorization_code' \
     -d 'code=CODE' \
     -d 'redirect_uri=REDIRECT_URI'
```

Na resposta você vai obter o `access_token` do vendedor vinculado. 

Você também vai receber o `refresh_token`, que servirá para renovar as credenciais dos seus vendedores. 

Além disso, você vai receber a `public_key` do vendedor, que é a credencial ou chave pública necessária para identificar a conta em seu frontend. 

```json
{
"access_token":"APP_USR-4934588586838432-XXXXXXXX-241983636",
"token_type": "bearer",
"expires_in": 15552000,
"scope": "offline_access read write",
"user_id": 241983636,
"refresh_token": "TG-XXXXXXXX-241983636",
"public_key": "APP_USR-d0a26210-XXXXXXXX-479f0400869e",
"live_mode": true
}
```

> WARNING 
> 
> Importante
> 
> Lembre-se que você vai utilizar informações sensíveis dos seus vendedores. Garanta que serão armazenadas de maneira segura, não incorpore nas suas URL de vinculação e gerencie somente do seu servidor.

Pronto! Você já vinculou a conta do vendedor ao sua aplicação através de OAuth. 

> Lembre que estes passos devem ser repetidos para cada conta que quiser vincular. 

## Renove as credenciais

**As informações que você recebe dos seus vendedores são válidas por 180 dias**. Passado esse tempo, você deverá solicitar novamente a autorização ao vendedor.
Para evitar isso, renove os dados antes desse período e garanta que estejam sempre vigentes. 

Para renovar, você deverá realizar a seguinte chamada na API de OAuth:

```curl
curl -X POST \
     -H 'accept: application/json' \
     -H 'content-type: application/x-www-form-urlencoded' \
     'https://api.mercadopago.com/oauth/token' \
     -d 'client_secret=CLIENT_SECRET' \
     -d 'client_id=CLIENT_ID' \
     -d 'grant_type=refresh_token' \
     -d 'refresh_token=USER_REFRESH_TOKEN'
```

| Parâmetro | Descrição |
| ----------------- | ----------------- |
| `client_secret` | Utilize seu `client_secret`. |
| `client_id` | Utilize seu `client_id`. |
| `grant_type` | Inclua `refresh_token`, que não sofre alterações. |
| `refresh_token` | Valor que você recebeu junto com os dados do vendedor. | 

Você receberá a seguinte resposta:

```json
{
    "access_token": "APP_USR-4934588586838432-XXXXXXXX-241983636",
    "token_type": "bearer",
    "expires_in": 15552000,
    "scope": "offline_access read write",
    "refresh_token": "TG-XXXXXXXXXXXX-241983636"
}
```
### Desvincule uma conta

Para desvincular o token associado à sua conta, você deve fazer isso no [portal do Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/account/security/applications/connections) em **Seu perfil> Segurança> Aplicativos conectados**.

> NOTE
> 
> Nota
> 
> Lembre-se que, a cada vez que você renovar as credenciais, o `refresh_token` também mudará, por isso, você deverá armazená-lo novamente.
>
>  Caso haja algum erro na hora de renovar as credenciais, lembre-se que você pode consultar a [referência de códigos de erro](https://developers.mercadolivre.com.br/pt_br/autenticacao-e-autorizacao#Referencia-de-codigos-de-erro).

## Integre o checkout

Para realizar a cobrança em nome de seus vendedores, você deve integrar o [Checkout](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-pro/introduction), gerando as preferências de pagamento com o Access Token obtido ao vincular cada vendedor ao seu aplicativo.

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

## Configure as notificações

Você pode receber notificações sempre que um vendedor se vincular ou desvincular da sua aplicação. Para configurá-las, siga os passos abaixo.

1. Acesse [Suas aplicações](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel) e selecione a aplicação que você utiliza para o fluxo de OAuth.

2. Vá para a aba "Notificações Webhooks". Já dentro da seção, vá para o campo "Modo Produção" e adicione a URL onde quer receber as notificações. Se quiser, você pode clicar no botão "Testar" para conferir que a URL escolhida recebe corretamente as Notificações Webhooks.

3. Depois, no campo "Eventos", selecione a opção "Vinculação de aplicações". Por último, clique em salvar. 

Pronto! A cada vez que um vendedor se vincular ou desvincular, você receberá uma notificação na URL escolhida.

Estes são alguns dos dados que você poderá encontrar dentro das notificações:

| Atributo | Valor ou tipo | Descrição |
| ----------------- | ----------------- | --------------- |
| `type` | `mp-connect` | Identifica a notificação do tipo vinculação de contas. |
| `action` | `application.authorized` | Informa que o vendedor se vinculou a aplicação. |
| `action` | `application.deauthorized` | Confirma que o vendedor se desvinculou do aplicação. |
| `data.id`| `string`| ID do vendedor vinculado ao aplicação. |

Para saber mais, acesse [Notificações Webhooks](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/notifications/webhooks).

### Devoluções e cancelamentos

As devoluções e cancelamentos poderão ser efetuados tanto pelo marketplace como pelo vendedor, através da API ou a partir da conta no Mercado Pago.

Caso a devolução seja realizada no Marketplace, deve-se utilizar as credenciais obtidas para cobrar em nome do vendedor. 

Os cancelamentos somente poderão ser efetuados utilizando a API de cancelamentos.

Para mais informações, consulte a seção de [devoluções e cancelamentos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/manage-account/account/cancellations-and-refunds).
