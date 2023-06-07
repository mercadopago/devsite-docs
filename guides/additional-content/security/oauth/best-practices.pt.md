# Melhores práticas para a integração do OAuth

Ao usar o OAuth, é importante levar em consideração alguns aspectos para que a integração funcione corretamente e você possa receber o `authorization_code` que solicitou.

Abaixo, você encontrará um guia para possíveis erros e boas práticas a serem lembradas.

## Uso correto de valores em headers de solicitação

Sempre use os headers `accept` e `Content-Type` em sua solicitação POST. Tenha cuidado para não adicionar valores a headers que não fazem parte da integração para evitar um erro de resposta.

![oauth_header](/images/oauth/oauth_header.png)

## Uso correto dos valores `params`

Em sua chamada POST, tome cuidado para usar apenas os valores `params` solicitados. Não adicione nenhum outro valor que não seja obrigatório, caso contrário, você receberá um código de erro em resposta.

![oauth_params](/images/oauth/oauth-1.png)


## Uso correto dos Query Params

Lembre-se de não enviar nenhum parâmetro dentro dos Query Params. Envie os parâmetros no request body conforme indicado em [Referência da API](/developers/pt/reference/oauth/_oauth_token/post).

![oauth_queryparams](/images/oauth/oauth_queryparams.png)

## Uso correto do campo `grant_type`

Sempre use o campo `grant_type` em suas requisições com o valor `authorization_code`. Lembre-se que se você enviar outro valor, é possível que receba um erro na resposta.

![oauth_grant_type](/image/oauth/oauth_granttype_v2.png)

## Usando o campo `state` dentro de um `redirect_uri`

Para aumentar a segurança da integração, recomendamos incluir o parâmetro `state` dentro do `redirect_uri` para garantir que a resposta pertença a uma solicitação iniciada pelo mesmo aplicativo.

Observe que o `redirect_uri` deve ser uma URL estática. Caso queira enviar parâmetros nesta URL, use `state` para enviar esta informação. Caso contrário, a chamada receberá uma resposta de erro se o `redirect_uri` não corresponder exatamente ao configurado no aplicativo.

![oauth_state](/image/oauth/oauth_state_v3.png)

> Para encontrar mais informações sobre a solicitação, seus parâmetros e as possíveis respostas de sucesso e erro que você pode receber, acesse a documentação [Referência da API](/developers/pt/reference/oauth/_oauth_token/post).