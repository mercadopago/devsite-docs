---
indexable: false  
---

# Autorize e vincule contas em seus aplicativos

Se você precisa gerenciar várias contas do Mercado Pago ao mesmo tempo em sua integração, só tem que vincular seu aplicativo e as contas de outras pessoas.

Pode fazer isso através do OAuth, funcionalidade de vinculação segura que permite que o vendedor acesse sua conta do Mercado Pago, autorize a vinculação e habilite seu aplicativo para operar em seu nome. 

###### Como incorporar OAuth  

Para poder vincular a conta do seu aplicativo e a dos seus vendedores, é necessário realizar a autorização através de OAuth;

Para começar, siga estes passos:
1. Crie ou configure seu aplicativo
2. Vincule uma conta do Mercado Pago ao seu aplicativo
3. Gere as credenciais para operar


## 1. Crie e configure seu aplicativo

Primeiramente, você deve ter criado seu aplicativo com um nome único que o identifique.

Depois, você terá que **configurar um Redirect URL para seu aplicativo**. Para isso, vá para [Seus Aplicativos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel), clique no menu de opções do seu aplicativo e selecione Editar. No campo Redirect URL, adicione o endereço ao qual você quer encaminhar os vendedores após tê-los vinculado corretamente. 

Lembre que no endereço que você adicionar você vai receber os códigos de autorização de cada um deles para a criação das credenciais.

Finalmente, você deve obter a ID do seu aplicativo em [Suas Integrações](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel).

## 2. Vincule uma conta do Mercado Pago ao seu aplicativo

Para operar em nome dos seus vendedores através de suas contas do Mercado Pago, primeiramente, você deve solicitar sua autorização.

Para isso, deve incluir em seu aplicativo uma URL que encaminhe o vendedor para o site de autorização. 

Compartilhamos a URL base que você deve utilizar e o detalhe dos parâmetros com os quais tem que preenchê-la.

```url
https://auth.mercadopago[FAKER][URL][DOMAIN]/authorization?client_id=APP_ID&response_type=code&platform_id=mp&state=RANDOM_ID&redirect_uri=https://www.redirect-url.com
```

| Parâmetro | Dado a preencher |
| ----------------- | ----------------- |
| `client_id` | Substitua o valor `APP_ID` com a ID do seu aplicativo. |
| `state` | Identifique de quem é o código que você vai receber. Para isso, substitua o valor `RANDOM_ID` por um identificador que seja único para cada tentativa e que não inclua informações sensíveis. |
| `redirect_uri` | Adicione a URL que informou no campo Redirect URL ao configurar seu aplicativo. | 

Ao acessar essa URL, o vendedor será encaminhado para o Mercado Pago, onde deverá fazer o login com sua conta e autorizar a vinculação com seu aplicativo.

FOTO

Quando o vendedor tenha autorizado a vinculação do seu aplicativo à sua conta do Mercado Pago, você vai receber no seu servidor o código de autorização na Redirect URL especificada. Você verá o seguinte: 

```url
https://www.redirect-url.com?code=CODE&state=RANDOM_ID
```

> Lembre que o valor `code` tem um período de validade de 10 minutos.

## 3. Gere as credenciais para operar

Para criar as credenciais necessárias para que seu aplicativo possa operar em nome de um vendedor, você terá que enviar o `CODE` obtido no passo anterior através da API de OAuth.

Os parâmetros que você deve incluir são:

| Parâmetro | Dado a preencher |
| ----------------- | ----------------- |
| `client_secret` | Esse é seu `ACCESS_TOKEN`. Você pode obtê-lo em [Suas Credenciais](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/credentials). |
| `grant_type` | Diz respeito ao tipo de operação a ser realizada para obter as credenciais. Este parâmetro é fixo e seu valor é `authorization_code`. |
| `code` | O código de autorização ou `CODE` que você obtém em seu servidor ao realizar a vinculação. Será similar a este valor: `TG-60357f5d0cd06d000740646d-643464554` | 
| `redirect_uri` | É a URL que você configurou no campo Redirect URL em seu aplicativo.|

```curl
curl -X POST \
     -H 'accept: application/json' \
     -H 'content-type: application/x-www-form-urlencoded' \
     'https://api.mercadopago.com/oauth/token' \
     -d 'client_secret=ACCESS_TOKEN' \
     -d 'grant_type=authorization_code' \
     -d 'code=CODE' \
     -d 'redirect_uri=REDIRECT_URI'
```

Na resposta você vai obter o `access_token` do vendedor vinculado. 
Você também vai receber o `refresh_token`, que mais a frente servirá para renovar as credenciais dos seus vendedores. 

Além disso, você vai receber a `public_key` do vendedor, que é a credencial ou chave pública que você vai usar para identificar a conta em seu frontend. 

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
> Lembre que você vai utilizar informações sensíveis dos seus vendedores. Certifique-se de resguardá-las de maneira segura, não incorpore nas suas URL de vinculação e gerencie somente do seu servidor.

Pronto! Você já vinculou a conta do vendedor ao seu aplicativo através de OAuth. 

> Lembre que estes passos devem ser repetidos para cada conta que quiser vincular. 

## Renove as credenciais

**As informações que você recebe dos seus vendedores têm validade durante 180 dias**. Passado esse tempo, você deverá solicitar novamente a autorização ao vendedor.
Para evitar isso, renove os dados antes desse período para garantir que estejam sempre vigentes. 

Para renovar, você deverá realizar a seguinte chamada na API de OAuth:

```curl
curl -X POST \
     -H 'accept: application/json' \
     -H 'content-type: application/x-www-form-urlencoded' \
     'https://api.mercadopago.com/oauth/token' \
     -d 'client_secret= ACCESS_TOKEN' \
     -d 'grant_type=refresh_token' \
     -d 'refresh_token=USER_REFRESH_TOKEN'
```

| Parâmetro | Descrição |
| ----------------- | ----------------- |
| `client_secret` | Utilize seu `ACCESS_TOKEN`. |
| `grant_type` | Inclua `refresh_token`, que não sofre alterações. |
| `refresh_token` | Valor que você recebeu junto com os dados do vendedor. | 

Você vai receber a seguinte resposta:

```json
{
    "access_token": "APP_USR-4934588586838432-XXXXXXXX-241983636",
    "token_type": "bearer",
    "expires_in": 15552000,
    "scope": "offline_access read write",
    "refresh_token": "TG-XXXXXXXXXXXX-241983636"
}
```

> NOTE
> 
> Nota
> 
> Lembre que, a cada vez que você renovar as credenciais, o `refresh_token` também vai mudar, porquanto, você deverá armazená-lo novamente.
>
>Caso haja algum erro na hora de renovar as credenciais, lembre que você pode consultar a [referência de códigos de erro](https://developers.mercadolibre[FAKER][URL][DOMAIN]/es_ar/autenticacion-y-autorizacion).

## Configure as notificações

Você pode receber notificações sempre que um vendedor se vincule ou desvincule do seu aplicativo. Para configurá-las, siga estes passos:

1. Acesse [Seus aplicativos](https://www.mercadopago.com.ar/developers/panel) e selecione o aplicativo que você utiliza para o fluxo de OAuth.

2. Vá para a aba "Notificações Webhooks". Já dentro da seção, vá para o campo "Modo Produção" e adicione a URL onde quer receber as notificações. Se quiser, você pode clicar no botão "Testar" para conferir que a URL escolhida recebe corretamente as Notificações Webhooks.

3. Depois, no campo "Eventos", selecione a opção "Vinculação de aplicativos". Por último, clique em salvar. 

Pronto! A cada vez que um vendedor se vincule ou desvincule, você vai receber uma notificação na URL escolhida.

Estes são alguns dos dados que você poderá encontrar dentro das notificações:

| Atributo | Valor ou tipo | Descrição |
| ----------------- | ----------------- | --------------- |
| `type` | `mp-connect` | Identifica a notificação do tipo vinculação de contas. |
| `action` | `application.authorized` | Informa que o vendedor se vinculou ao aplicativo. |
| `action` | `application.deauthorized` | Confirma que o vendedor se desvinculou do aplicativo. |
| `data.id`| `string`| ID do vendedor vinculado ao aplicativo. |

Para saber mais, acesse [Notificações Webhooks](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/notifications/webhooks).