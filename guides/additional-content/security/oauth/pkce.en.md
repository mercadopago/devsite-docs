# PKCE

The **PKCE** (Proof Key for Code Exchange) is a security protocol used with OAuth to protect against malicious code attacks during the exchange of authorization codes for an _Access token_. It adds an extra layer of security by generating a verifier that is transformed into a challenge to ensure that even if the authorization code is intercepted, it is not useful without the original verifier.

In Mercado Pago, you can **enable PKCE verification** from the [Application details](/developers/en/docs/your-integrations/application-details) screen. This allows you to send an additional secret code to be used during the authorization process.

> WARNING
>
> Important
>
> With the PKCE field enabled, Mercado Pago will start requiring the `code_challenge` and `code_method` fields as mandatory in OAuth requests.

Follow the steps below to generate the mandatory fields and configure PKCE verification.

1. The fields can be generated in various ways, either through custom development or using SDKs. Follow the necessary steps described in [this official documentation](https://datatracker.ietf.org/doc/html/rfc7636#section-4) to generate the required fields.
2. After generating and encrypting the fields, it will be necessary to send the respective codes to Mercado Pago. To do this, send them via `query_params` using the authentication URL below.

```URL
https://auth.mercadolibre.com.ar/authorization?response_type=code&client_id=$APP_ID`redirect_uri=$YOUR_URL&code_challenge=$CODE_CHALLENGE&code_challenge_method=$CODE_METHOD
```

- **Redirect_uri**: URL provided in the "Redirect URL" field of [your application](/developers/en/guides/additional-content/your-integrations/application-details).
- **Code_verifier**: code that should be generated, following the requirements for its functionality, which include: a random sequence of characters with a length between 43 and 128 characters, including uppercase letters, lowercase letters, numbers, and some special characters. For example: **47DEQpj8HBSa-_TImW-5JCeuQeRkm5NMpJWZG3hSuFU**.
- **Code_challenge**: next, it is necessary to create a `code_challenge` from the `code_verifier` using one of the following transformations:
  - If it's possible to use **S256**, it will be necessary to use this option by transforming the `code_verifier` into a `code_challenge` through `BASE64URL` encoding after applying the "SHA256" function.
  - If it's not possible to use **S256** for some technical reason and the server supports the **Plain** method, it's possible to set the c`ode_challenge` equal to the `code_verifier`.
- **Code_challenge_method**: is the method used to generate the `code_challenge`, as described in the above item. This field can be, for example, **S256** or **Plain**, depending on the encoding selected in the `code_challenge stage`. </br>

3. After correctly sending the codes to Mercado Pago, you will obtain the necessary authorization for PKCE verification in transactions made with OAuth.
4, Check the authorization code returned in the `code` parameter in the Redirect URL of your server (https://www.redirect-url.com?code=CODE&state=RANDOM_ID).
5. Finally, send your [credentials](/developers/pt/guides/additional-content/your-integrations/credentials) and the authorization code to the [/oauth/token](/developers/pt/reference/oauth/_oauth_token/post) endpoint to receive the _Access token_ as a response.