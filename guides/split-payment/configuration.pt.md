# Criar configuração

Para configurar a integração com a solução Split de pagamentos, você deverá [criar sua aplicação](#bookmark_criar_aplicação), [solicitar permissões aos seus usuários](#bookmark_solicitar_permissão_aos_usuários) e [obter as credenciais](#bookmark_obter_credenciais). Continue lendo para criar a configuração necessária.

## Criar aplicação

Crie sua aplicação para integrar com a solução Split de pagamentos seguindo os passos abaixo. 

   > NOTE
   >
   > Importante
   >
   > Durante a criação da sua aplicação, talvez seja necessário reautenticar sua identidade. Se já concluiu a verificação, será solicitada a reautenticação. Caso contrário, será redirecionado para enviar os documentos necessários. Esse passo extra é essencial para proteger sua conta e garantir a conformidade das operações. Você pode consultar a [documentação sobre o Painel do desenvolvedor](/developers/pt/docs/split-payments/additional-content/your-integrations/dashboard) se tiver dúvidas sobre como usá-lo.

1. Acesse [Suas integrações](https://www.mercadopago.com.br/developers/panel/app). Uma vez lá, clique no botão **Criar aplicação**, localizado no canto superior direito.
2. Insira um nome para identificar sua aplicação (você tem um limite de 50 caracteres).
3. Escolha a solução de **Pagamentos online**.
4. Ao escolher o produto a ser integrado, você pode optar por "Checkout Pro" ou "Checkout API".
5. Escolha o modelo de integração **Marketplace**.
6. Após preencher as informações solicitadas, clique em **Criar aplicação** e pronto!

### Configurar Redirect URL

Nesta etapa, é necessário configurar o Redirect URL para que os vendedores possam autorizar o marketplace a realizar vendas. 

Após criar a aplicação, é necessário ir para a tela de edição para preencher o campo de Redirect URL (nas solicitações de OAuth, é mostrado como redirect_uri), o qual deve conter a URL do site do marketplace para onde o token do vendedor será enviado ao concluir o processo de vinculação.

![Redirect URL](/images/split-payment/redirect-url-pt-br.png)

## Solicitar permissão aos usuários

Para solicitar permissão aos seus usuários para gerenciar vendas em seu nome, é necessário implementar o fluxo de autorização usando o OAuth. Siga os passos abaixo:

1. Redirecione seus usuários para a seguinte URL para autorizar o gerenciamento de vendas:

| Valor              | Descrição                                                                                                              |
|--------------------------|----------------------------------------------------------------------------------------------------------------------|
| `<APP_ID>`               | Valor obtido durante a [criação da aplicação](#bookmark_criar_aplicação).      |
| `<REDIRECT_URI>`         | Valor inserido no campo Redirect Uri durante a [configuração do Redirect URL](#bookmark_criar_aplicação). |

----[mla]----
```curl
https://auth.mercadopago.com.ar/authorization?client_id=<APP_ID>&response_type=code&platform_id=mp&redirect_uri=<REDIRECT_URI>
```

------------
----[mlb]----
```curl
https://auth.mercadopago.com.br/authorization?client_id=<APP_ID>&response_type=code&platform_id=mp&redirect_uri=<REDIRECT_URI>
```
     
------------
----[mlm]----
```curl
https://auth.mercadopago.com.mx/authorization?client_id=<APP_ID>&response_type=code&platform_id=mp&redirect_uri=<REDIRECT_URI>
```
     
------------
----[mlc]----
```curl
https://auth.mercadopago.cl/authorization?client_id=<APP_ID>&response_type=code&platform_id=mp&redirect_uri=<REDIRECT_URI>
```
     
------------
----[mco]----
```curl
https://auth.mercadopago.com.co/authorization?client_id=<APP_ID>&response_type=code&platform_id=mp&redirect_uri=<REDIRECT_URI>
```
     
------------
----[mlu]----
```curl
https://auth.mercadopago.com.uy/authorization?client_id=<APP_ID>&response_type=code&platform_id=mp&redirect_uri=<REDIRECT_URI>
```
     
------------
----[mpe]----
```curl
https://auth.mercadopago.com.pe/authorization?client_id=<APP_ID>&response_type=code&platform_id=mp&redirect_uri=<REDIRECT_URI>
```
     
------------


2. Assim que os usuários autorizarem o gerenciamento de vendas, você receberá um código de autorização na URL que especificou no passo anterior. Este código estará no parâmetro `code` da seguinte forma:

```curl
http://<REDIRECT_URI>?code=AUTHORIZATION_CODE
```

> NOTE
>
> Nota
>
> O `AUTHORIZATION_CODE` tem uma validade de 10 minutos e será utilizado para criar as credenciais necessárias.

## Obter credenciais

Utilize o código de autorização obtido na etapa anterior para adquirir as credenciais do usuário por meio da [API de OAuth](/developers/pt/reference/oauth/_oauth_token/post), permitindo a gestão de suas vendas.

| Parâmetro                | Descrição                                                                                      |
|--------------------------|--------------------------------------------------------------------------------------------------|
| `<CLIENT_ID>`            | Valor de APP_ID obtido nos detalhes de sua aplicação.                                      |
| `<CLIENT_SECRET>`        | Sua SECRET_KEY, também disponível nos detalhes de sua aplicação.                              |
| `<AUTHORIZATION_CODE>`   | Código de autorização obtido ao redirecionar o usuário de volta para o seu site.                     |
| `<REDIRECT_URI>`         | Deve ser a mesma Redirect URI configurada em sua aplicação.                                     |
| `<STATE>`         | Substitua o valor "RANDOM_ID" por um identificador que seja único para cada tentativa e que não inclua informações sensíveis de forma que você consiga identificar de quem é o código recebido.                                     |

```curl
curl -X POST \
     -H 'accept: application/json' \
     -H 'content-type: application/x-www-form-urlencoded' \
     'https://api.mercadopago.com/oauth/token' \
     -d 'client_id=<CLIENT_ID>' \
     -d 'client_secret=<CLIENT_SECRET>' \
     -d 'grant_type=authorization_code' \
     -d 'code=<AUTHORIZATION_CODE>' \
     -d 'redirect_uri=<REDIRECT_URI>' \
     -d 'state=<RANDOM_ID>'
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
> Essas credenciais têm uma validade de 6 meses. Caso não sejam renovadas antes desse período, perderão a validade, e será necessário repetir o processo de vinculação para autorizar novamente o vendedor. Para saber como renovar essas credenciais, consulte o passo a passo na [documentação de Renovação.](/developers/pt/docs/split-payments/additional-content/security/oauth/renewal)