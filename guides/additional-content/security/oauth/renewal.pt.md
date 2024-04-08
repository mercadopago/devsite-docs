# Renovação
 
O fluxo `refresh_token` é utilizado para trocar um **temporal grant** do tipo `refresh_token` por um _Access token_ quando o _Access token_ em uso estiver **próximo do vencimento**. O _Access token_ recebido através do endpoint tem **validade de 180 dias** e passado esse período é preciso reconfigurar todo fluxo de autorização.
 
O fluxo permite continuar utilizando um _Access token_ válido com as mesmas características do token original sem a necessidade de uma nova interação com o usuário. Ao realizar este fluxo, o token original é trocado por um novo token que também oferece a possibilidade de limitar os scopes devolvendo um novo refresh token para ser trocado no futuro.
 
> WARNING
>
> Importante
>
> Só é possível utilizar este fluxo se a aplicação contiver o scope `offline_access` e o vendedor tiver autorizado previamente esta ação.
 
Para renovar o **_Access token_**:
 
1. Envie o código do `refresh_token`, as suas **credenciais** e o `authorization_code` (veja [Criação](/developers/pt/guides/additional-content/security/oauth/creation)) ao endpoint [/oauth/token](/developers/pt/reference/oauth/_oauth_token/post) com o código do `refresh_token` no parâmetro `grant_type` para receber uma nova resposta com um novo `access_token` e um novo `refresh_token`.
2. Atualize a aplicação com o _Access token_ recebido na resposta.
 
> WARNING
>
> Importante
>
> Lembre-se que cada vez que você renovar o `access_token`, o `refresh_token` também vai ser renovado, por tanto, você deverá armazená-lo novamente.