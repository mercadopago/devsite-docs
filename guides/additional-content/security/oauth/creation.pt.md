# Obter Access Token

Saiba como utilizar os fluxos, também conhecidos como _grant types_, para obter um Access Token e acessar os dados expostos por uma API. A existência desses fluxos surge para responder a todos os cenários de negócios que podem surgir no consumo de APIs com base no tipo de aplicação consumidora, seu grau de confiança e como é a interação do usuário no processo. 

Os fluxos de acesso disponíveis para geração do Access Token são:

- [Authorization code](/developers/pt/docs/security/oauth/creation#bookmark_authorization_code)
- [Client credentials](/developers/pt/docs/security/oauth/creation#bookmark_client_credentials)

> NOTE
>
> Importante
>
> Caso um Access Token gerado a partir do fluxo **Authorization code** esteja invalido ou expirado, você poderá utilizar o fluxo **Refresh Token** para trocar um concessão temporária do tipo `refresh_token` por um Access Token. Ou seja, permite que o Access Token seja atualizado sem a necessidade de interação do usuário novamente após a autorização concedida. Para mais informações, acesse [Renovar Access Token](/developers/pt/guides/additional-content/security/oauth/renewal).

## Authorization code
 
O fluxo se caracteriza pela intervenção do vendedor para autorizar de forma explícita o acesso aos seus dados por parte da aplicação e pelo uso de um código concedido pelo servidor de autenticação para que a aplicação possa obter um Access Token e um refresh token associado.
 
Por ser um fluxo baseado em redirecionamento, você deve ser capaz de permitir interação com o navegador do vendedor e de receber o `request` através do redirecionamento por parte do servidor de autorização. Neste fluxo, a aplicação solicita ao vendedor o consentimento expresso para acessar os dados através da abertura de uma página web que deixa explícito os scopes aos quais se está solicitando acesso.

> WARNING
>
> Importante
>
> Lembre que você vai utilizar informações sensíveis dos seus vendedores. Certifique-se de resguardá-las de maneira segura. Não as utilize na URL de autenticação e gerencie todo processo somente a partir do seu servidor.
  
Uma vez permitido o acesso, o servidor gera um código de acesso que mediante um redirecionamento chega à aplicação. Nesta etapa, a aplicação solicita acesso ao servidor de autenticação enviando o código obtido e os dados da aplicação. Feito isso, o servidor concede o Access Token e o _refresh token_ à aplicação.

Veja abaixo como **configurar o protocolo PKCE** (um protocolo de segurança não obrigatório, mas que será usado com OAuth para proteger contra ataques de código malicioso durante a troca de códigos de autorização por Access Token) e, em seguida, **gerar o Access Token**.

### Configurar PKCE

O **PKCE** (_Proof Key for Code Exchange_) é um protocolo de segurança usado com OAuth para proteger contra ataques de código malicioso durante a troca de códigos de autorização por Access Token. Ele adiciona uma camada extra de segurança gerando um _verifier_ que é transformado em um _challenge_ para garantir que mesmo se o código de autorização for interceptado, ele não seja útil sem o _verifier_ original.

No Mercado Pago você pode **habilitar a verificação por PKCE** a partir da tela de [Detalhes de aplicação](/developers/pt/docs/your-integrations/application-details), assim será possível enviar um código secreto adicional a ser utilizado durante o processo de autorização.

> WARNING
>
> Importante
>
> Com o campo PKCE habilitado, o Mercado Pago passará a requerer como obrigatórios os campos `code_challenge` e `code_method` nas requisições de OAuth.

Siga os passos abaixo para gerar os campos obrigatórios e configurar a verificação por PKCE.

1. Os campos poderão ser gerados de várias formas, com desenvolvimento próprio ou uso de SDKs. Siga os passos necessários descritos [nesta documentação oficial](https://datatracker.ietf.org/doc/html/rfc7636#section-4) para gerar os campos que serão requeridos.
2. Após gerar e criptografar os campos, será necessário enviar os respectivos códigos ao Mercado Pago. Para isso, envie via `query_params` utilizando a URL de autenticação abaixo.

```URL
https://auth.mercadopago.com/authorization?response_type=code&client_id=$APP_ID`redirect_uri=$YOUR_URL&code_challenge=$CODE_CHALLENGE&code_challenge_method=$CODE_METHOD
```

- **Redirect_uri**: URL informada no campo "Redirect URL" da [sua aplicação](/developers/pt/guides/additional-content/your-integrations/application-details).
- **Code_verifier**: código que deverá ser gerado, respeitando seus requisitos para funcionamento, sendo eles: uma sequência aleatória de caracteres que tenham entre 43-128 caracteres, com letras maiúsculas, minúsculas, números e alguns caracteres especiais. Por exemplo: **47DEQpj8HBSa-_TImW-5JCeuQeRkm5NMpJWZG3hSuFU**.
- **Code_challenge**: em seguida, é necessário criar um `code_challenge` a partir do `code_verifier` usando uma das seguintes transformações:
  - Se for possível utilizar **S256**, será necessário usar essa opção transformando o `code_verifier` em um `code_challenge` através de uma codificação `BASE64URL` após aplicar a função "SHA256".
  - Se não for possível usar **S256** por algum motivo técnico e o servidor suportar o método **Plain**, é possível definir o `code_challenge` igual ao `code_verifier`.
- **Code_challenge_method**: é o método utilizado para gerar o `code_challenge`, conforme descrito no item acima. Este campo poderá ser, por exemplo, **S256** ou **Plain**, de acordo com a codificação selecionada na etapa de `code_challenge`. <br>

3. Tendo enviado os códigos corretamente ao Mercado Pago, você obterá a autorização necessária (`code_verifier`) para obter o Access Token e realizar a verificação por PKCE nas transações feitas com OAuth.

### Obter token

O Access Token é o código utilizado em diferentes _requests_ públicos para acessar um recurso protegido. Nesse fluxo, ele representa uma autorização concedida por um vendedor a uma aplicação do cliente, contendo _scopes_ e um tempo de validade limitado para o acesso. Siga os passos abaixo para obtê-lo.

> WARNING
>
> Atenção
>
> É recomendado realizar este procedimento por completo de uma única vez em conjunto com o usuário, visto que o código recebido pela Redirect URL após a autorização tem validade de 10 minutos e o Access Token recebido através do endpoint tem validade de 180 dias (6 meses).
> <br><br>
> Para gerar credenciais de _sandbox_ para realização de testes, envie o parâmetro `test_token` com valor `true`.
 
1. Edite sua aplicação para conter sua Redirect URL. Veja [Editar aplicação](/developers/pt/guides/additional-content/your-integrations/application-details).
2. Envie a URL de autenticação para o vendedor cuja conta você deseja vincular à sua com os seguintes campos:

   |Descrição|URL| 
   |---|---|
   | URL de autenticação | https://auth.mercadopago.com/authorization?client_id=APP_ID&response_type=code&platform_id=mp&state=RANDOM_ID&redirect_uri=https://www.redirect-url.com |
     * **client_id**: substitua o valor "APP_ID" com a ID do sua aplicação. Veja [ID de aplicação](/developers/pt/guides/additional-content/your-integrations/application-details).
     * **state**: substitua o valor "RANDOM_ID" por um identificador que seja único para cada tentativa e que não inclua informações sensíveis de forma que você consiga identificar de quem é o código recebido.
     * **redirect_uri**: adicione a URL informada no campo Redirect URL da sua aplicação.
     <br/>
3. Aguarde o vendedor acessar a URL e permitir o acesso. Ao acessar a URL o vendedor será direcionado para o Mercado Pago e deverá realizar o login na conta dele para realizar a autorização.
4. Verifique na Redirect URL do seu servidor o código de autorização retornado no parâmetro **code**.

   |Descrição|URL| 
   |---|---|
   | Redirect URL | https://www.redirect-url.com?code=CODE&state=RANDOM_ID |
 
5. Envie as suas [credenciais](/developers/pt/docs/your-integrations/credentials) (`client_id` e `client_secret`), o **código de autorização** (`code`) retornado e, caso tenha [configurado o PKCE](/developers/pt/docs/security/oauth/creation#:~:text=Access%20Token.-,Configurar%20PKCE,-O%20PKCE%20), o `code_verifier` ao endpoint [/oauth/token](/developers/pt/reference/oauth/_oauth_token/post) para receber como resposta o Access Token.

## Client credentials

Este fluxo é utilizado quando as aplicações solicitam um Access Token usando apenas as suas próprias credenciais e para acessar seus próprios recursos. A principal diferença em relação aos outros fluxos é que o usuário não interage no processo e, consequentemente, a aplicação não pode atuar em nome do usuário.

### Obter token

O Access Token é o código utilizado em diferentes _requests_ públicos para acessar um recurso protegido. Neste fluxo, obtém-se o Access Token sem interação do usuário e apenas para acessar seus próprios recursos.

Siga os passos abaixo para obtê-lo.
 
1. Envie as suas [credenciais](/developers/pt/docs/your-integrations/credentials) (`client_id` e `client_secret`) ao endpoint [/oauth/token](/developers/pt/reference/oauth/_oauth_token/post) com o código `client_credentials` no parâmetro `grant_type` para receber uma nova resposta com o `access_token`.
2. Atualize a aplicação com o Access Token recebido na resposta.