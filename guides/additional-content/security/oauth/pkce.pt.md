# PKCE

O **PKCE** (_Proof Key for Code Exchange_) é um protocolo de segurança usado com OAuth para proteger contra ataques de código malicioso durante a troca de códigos de autorização por _Access token_. Ele adiciona uma camada extra de segurança gerando um _verifier_ que é transformado em um _challenge_ para garantir que mesmo se o código de autorização for interceptado, ele não seja útil sem o _verifier_ original.

No Mercado Pago você pode **habilitar a verificação por PKCE** a partir da tela de [Detalhes de aplicação](/developers/pt/docs/your-integrations/application-details), assim será possível gerar um código secreto adicional a ser utilizado durante o processo de autorização.

Após habilitar o campo, o Mercado Pago passará a requerer como obrigatórios os campos `code_challeng` e `code_method` nas requisições de OAuth. Estes campos poderão ser gerados de várias formas, com desenvolvimento próprio ou uso de libs. Siga os passos necessários descritos [nesta documentação oficial](https://datatracker.ietf.org/doc/html/rfc7636#section-4) para gerar os campos que serão requeridos.

Após gerar e criptografar os campos, será necessário enviar os respectivos códigos ao Mercado Pago para que estes passem a ser obrigatórios nas requisições de OAuth. Para isso, envie via `query_params` utilizando a URL abaixo.

```URL
https://auth.mercadolibre.com.ar/authorization?response_type=code&client_id=$APP_ID`redirect_uri=$YOUR_URL&code_challenge=$CODE_CHALLENGE&code_challenge_method=$CODE_METHOD
```

- `redirect_uri`: URL informada no campo Redirect URL da [sua aplicação](/developers/pt/guides/additional-content/your-integrations/application-details).
- `code_challenge`: é o código de verificação gerado a partir de um `code_verifier` (uma sequência aleatória de caracteres que tenham entre 43-128 caracteres, com letras maiúsculas, minúsculas, dígitos e alguns caracteres especiais) e criptografado com o `code_challenge_method`.
- `code_challenge_method`: método utilizado para gerar o `code_challenge`, onde atualmente utiliza-se o `S256` para especificar que o `code_challenge` é criptografado usando o algoritmo de criptografia SHA-256.

Tendo enviado os códigos corretamente ao Mercado Pago, você obterá a autorização necessária para que ocorra a verificação por PKCE nas transações feitas com OAuth.