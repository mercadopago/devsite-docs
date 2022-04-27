# Renovação
 
O fluxo `refresh_token` é utilizado para trocar um **temporal grant** do tipo `refresh_token` por um access token quando o access token em uso estiver com sua validade expirada. O access token recebido através do endpoint tem **validade de 180 dias** e passado esse período é preciso reconfigurar todo fluxo de autorização.
 
O fluxo permite continuar utilizando um access token válido com as mesmas características do token original sem a necessidade de uma nova interação com o usuário. Ao realizar este fluxo, o token original é trocado por um novo token que também oferece a possibilidade de limitar os scopes devolvendo um novo refresh token para ser trocado no futuro.
 
> WARNING
>
> Importante
>
> Só é possível utilizar este fluxo se a aplicação contiver o scope `offline_access` e o vendedor tiver autorizado previamente esta ação.
 
Para renovar o **access token**:
 
1. Envie o código do `refresh_token`, as suas **credenciais** e o `authorization_code` (veja [Criação](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/security/oauth/creation)) ao endpoint [/oauth/token](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/oauth/_oauth_token/post) com o código do `refresh_token` no parâmetro `grant_type` para receber uma nova resposta com um novo `access_token` e um novo `refresh_token`.
2. Atualize a aplicação com o access token recebido na resposta.
 
> WARNING
>
> Importante
>
> Lembre-se que cada vez que você renovar o `access_token`, o `refresh_token` também vai ser renovado, por tanto, você deverá armazená-lo novamente.
 
> NEXT_STEP_CARD_PT
>
> Genrenciamento do OAuth
>
> Veja como desabilitar e invalidar os recursos.
>
> [Gerenciamento](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/security/oauth/management)