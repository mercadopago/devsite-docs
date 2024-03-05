# PKCE

O **PKCE** (_Proof Key for Code Exchange_) é um protocolo de segurança usado com OAuth para proteger contra ataques de código malicioso durante a troca de códigos de autorização por _Access Token_. Ele adiciona uma camada extra de segurança gerando um _verifier_ que é transformado em um _challenge_ para garantir que mesmo se o código de autorização for interceptado, ele não seja útil sem o _verifier_ original.

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
https://auth.mercadolibre.com.ar/authorization?response_type=code&client_id=$APP_ID`redirect_uri=$YOUR_URL&code_challenge=$CODE_CHALLENGE&code_challenge_method=$CODE_METHOD
```

- **Redirect_uri**: URL informada no campo "Redirect URL" da [sua aplicação](/developers/pt/guides/additional-content/your-integrations/application-details).
- **Code_verifier**: código que deverá ser gerado, respeitando seus requisitos para funcionamento, sendo eles: uma sequência aleatória de caracteres que tenham entre 43-128 caracteres, com letras maiúsculas, minúsculas, números e alguns caracteres especiais. Por exemplo: `47DEQpj8HBSa-_TImW-5JCeuQeRkm5NMpJWZG3hSuFU`.
- **Code_challenge**: em seguida, é necessário criar um `code_challenge` a partir do `code_verifier` usando uma das seguintes transformações:
  - Se for possível utilizar **S256**, será necessário usar essa opção transformando o `code_verifier` em um `code_challenge` através de uma codificação `BASE64URL` após aplicar a função "SHA256".
  - Se não for possível usar **S256** por algum motivo técnico e o servidor suportar o método **Plain**, é possível definir o `code_challenge` igual ao `code_verifier`.
- **Code_challenge_method**: é o método utilizado para gerar o `code_challenge`, conforme descrito no item acima. Este campo poderá ser, por exemplo, **S256** ou **Plain**, de acordo com a codificação selecionada na etapa de `code_challenge`.

3. Tendo enviado os códigos corretamente ao Mercado Pago, você obterá a autorização necessária para que ocorra a verificação por PKCE nas transações feitas com OAuth.
4. Verifique na Redirect URL do seu servidor (https://www.redirect-url.com?code=CODE&state=RANDOM_ID) o código de autorização retornado no parâmetro `code`.
5. Por fim, envie as suas [credenciais](/developers/pt/guides/additional-content/your-integrations/credentials) e o código de autorização ao endpoint [/oauth/token](/developers/pt/reference/oauth/_oauth_token/post) para receber como resposta o _Access Token_.