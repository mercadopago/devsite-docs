# Autorize e vincule contas em suas aplicações

Se você precisa gerenciar várias contas do Mercado Pago ao mesmo tempo em sua integração, só tem que vincular seu aplicação e as contas de outras pessoas.

Pode fazer isso através do OAuth, uma funcionalidade de vinculação segura que permite que o vendedor acesse sua conta do Mercado Pago, autorize a vinculação e habilite seu aplicação para operar em seu nome. 

## Como incorporar OAuth  

Para poder vincular a conta do seu aplicação e a dos seus vendedores, é necessário realizar a autorização através de OAuth;

Para começar, siga estes passos:
1. Crie ou configure seu aplicação.
2. Vincule uma conta do Mercado Pago ao seu aplicação.
3. Crie as credenciais para operar.

<br>

### Crie e configure seu aplicação

Primeiramente, você deve ter criado [seu aplicação](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/applications/create-app) com um nome único que o identifique.

Depois, você terá que **configurar um Redirect URL para seu aplicação**. Para isso, vá para [Suas Aplicações](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel), clique no menu de opções do seu aplicação e selecione Editar. 

No campo Redirect URL, adicione o endereço ao qual você quer encaminhar os vendedores após tê-los vinculado corretamente. Lembre que no endereço que você adicionar você vai receber os códigos de autorização de cada um deles para a criação das credenciais.

Finalmente, você deve obter a ID do seu aplicação em [Suas Integrações](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel).

### Vincule uma conta do Mercado Pago ao seu aplicação

Para operar em nome dos seus vendedores através de suas contas do Mercado Pago, primeiramente, você deve solicitar sua autorização.

Para isso, deve incluir em seu aplicação uma URL que encaminhe o vendedor para o site de autorização. 

Compartilhamos a URL base que você deve utilizar e o detalhe dos parâmetros com os quais tem que completá-la.

```url
https://auth.mercadopago[FAKER][URL][DOMAIN]/authorization?client_id=APP_ID&response_type=code&platform_id=mp&state=RANDOM_ID&redirect_uri=https://www.redirect-url.com
```

| Parâmetro | Dado a completar |
| ----------------- | ----------------- |
| `client_id` | Substitua o valor `APP_ID` com a ID do seu aplicação. |
| `state` | Identifique de quem é o código que você vai receber. Para isso, substitua o valor `RANDOM_ID` por um identificador que seja único para cada tentativa e que não inclua informações sensíveis. |
| `redirect_uri` | Adicione a URL que informou no campo Redirect URL ao configurar seu aplicação. | 

Ao acessar essa URL, o vendedor será encaminhado para o Mercado Pago, onde deverá fazer o login com sua conta e autorizar a vinculação com seu aplicação.

![FlujoOAuth-pt](/images/oauth/oauth-pt.png)

Quando o vendedor tenha autorizado a vinculação do seu aplicação à sua conta do Mercado Pago, você vai receber no seu servidor o código de autorização na Redirect URL especificada. Você verá o seguinte: 

```url
https://www.redirect-url.com?code=CODE&state=RANDOM_ID
```

> Lembre que o valor `code` tem um período de validade de 10 minutos.

> SERVER_SIDE
>
> h3
>
> Crie as credenciais para operar

Para criar as credenciais necessárias para que seu aplicação possa operar em nome de um vendedor, você terá que enviar o `CODE` obtido no passo anterior através da API de OAuth.

Os parâmetros que você deve incluir são:

| Parâmetro | Dado a preencher |
| ----------------- | ----------------- |
| `client_secret` | Esse é seu `ACCESS_TOKEN`. Você pode obtê-lo em [Suas Credenciais](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/credentials). |
| `grant_type` | Diz respeito ao tipo de operação a ser realizada para obter as credenciais. Este parâmetro é fixo e seu valor é `authorization_code`. |
| `code` | O código de autorização ou `CODE` que você obtém em seu servidor ao realizar a vinculação. Será similar a este valor: `TG-60357f5d0cd06d000740646d-643464554`. | 
| `redirect_uri` | É a URL que você configurou no campo Redirect URL em seu aplicação.|

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

Pronto! Você já vinculou a conta do vendedor ao seu aplicação através de OAuth. 

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

> NOTE
> 
> Nota
> 
> Lembre que, a cada vez que você renovar as credenciais, o `refresh_token` também vai mudar, porquanto, você deverá armazená-lo novamente.
>
> Caso haja algum erro na hora de renovar as credenciais, lembre que você pode consultar a [referência de códigos de erro](https://developers.mercadolivre.com.br/pt_br/autenticacao-e-autorizacao#Referencia-de-codigos-de-erro).

## Configure as notificações

Você pode receber notificações sempre que um vendedor se vincule ou desvincule do seu aplicação. Para configurá-las, siga estes passos:

1. Acesse [Suas aplicações](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel) e selecione o aplicação que você utiliza para o fluxo de OAuth.

2. Vá para a aba "Notificações Webhooks". Já dentro da seção, vá para o campo "Modo Produção" e adicione a URL onde quer receber as notificações. Se quiser, você pode clicar no botão "Testar" para conferir que a URL escolhida recebe corretamente as Notificações Webhooks.

3. Depois, no campo "Eventos", selecione a opção "Vinculação de aplicações". Por último, clique em salvar. 

Pronto! A cada vez que um vendedor se vincule ou desvincule, você vai receber uma notificação na URL escolhida.

Estes são alguns dos dados que você poderá encontrar dentro das notificações:

| Atributo | Valor ou tipo | Descrição |
| ----------------- | ----------------- | --------------- |
| `type` | `mp-connect` | Identifica a notificação do tipo vinculação de contas. |
| `action` | `application.authorized` | Informa que o vendedor se vinculou ao aplicação. |
| `action` | `application.deauthorized` | Confirma que o vendedor se desvinculou do aplicação. |
| `data.id`| `string`| ID do vendedor vinculado ao aplicação. |

Para saber mais, acesse [Notificações Webhooks](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/notifications/webhooks).
