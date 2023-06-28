# Melhores práticas para a integração do OAuth

Ao usar o OAuth, é importante considerar alguns aspectos para que a integração funcione corretamente.

Abaixo, você encontrará um guia para possíveis erros e boas práticas para utilização do OAuth.

## Uso correto de valores em headers de solicitação

Use os headers `accept` e `content-type` em todas as solicitações POST e evite adicionar valores a headers não relacionados à integração para evitar erros de resposta.

![oauth_header](/images/oauth/oauth_header.png)

## Uso correto dos valores 'params'

Ao fazer a chamada POST, utilize apenas os valores `params` solicitados e evite adicionar qualquer valor não obrigatório, caso contrário, receberá um código de erro em resposta.

![oauth_params](/images/oauth/oauth-1.png)


## Uso correto dos Query Params

Lembre-se de não enviar nenhum parâmetro dentro dos Query Params. Envie os parâmetros no `request body` conforme indicado em nossa [Referência da API](/developers/pt/reference/oauth/_oauth_token/post).

![oauth_queryparams](/images/oauth/oauth_queryparams_v2.png)

## Uso correto do campo 'grant_type'

Use o campo `grant_type` com o valor `authorization_code` em todas as suas requisições. Tenha em mente que enviar qualquer outro valor pode resultar em um erro na resposta.

![oauth_grant_type](/images/oauth/oauth_granttype_v2.png)

## Usando o campo 'state' na solicitação do 'autorization code'

Para aumentar a segurança da integração, inclua o parâmetro `state` no fluxo de solicitação do `authorization code`. Isso garantirá que a resposta pertença a uma solicitação iniciada pelo mesmo aplicativo.

Observe que o `redirect_uri` deve ser uma URL estática. Caso queira enviar parâmetros nesta URL, use `state` para enviar esta informação. Caso contrário, a chamada receberá uma resposta de erro se o `redirect_uri` não corresponder exatamente ao configurado no aplicativo.

![oauth_state](/images/oauth/oauth_state_v4.png)

Para encontrar mais informações sobre a solicitação, seus parâmetros e as possíveis respostas de sucesso e erro que você pode receber, acesse a documentação [Referência da API](/developers/pt/reference/oauth/_oauth_token/post).