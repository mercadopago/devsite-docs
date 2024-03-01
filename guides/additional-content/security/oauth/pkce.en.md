# PKCE

The **PKCE** (Proof Key for Code Exchange) is a security protocol used with OAuth to protect against malicious code attacks during the exchange of authorization codes for an access token. It adds an extra layer of security by generating a verifier that is transformed into a challenge to ensure that even if the authorization code is intercepted, it is not useful without the original verifier.

In Mercado Pago, you can **enable PKCE verification** from the [Application details](/developers/en/docs/your-integrations/application-details) screen. This allows you to send an additional secret code to be used during the authorization process.

> WARNING
>
> Important
>
> With this field enabled, Mercado Pago will start requiring the `code_challenge` and `code_method` fields as mandatory in OAuth requests.

Follow the steps below to generate the mandatory fields and configure PKCE verification.

1. The fields can be generated in various ways, either through custom development or using SDKs. Follow the necessary steps described in [this official documentation](https://datatracker.ietf.org/doc/html/rfc7636#section-4) to generate the required fields.
2. After generating and encrypting the fields, it will be necessary to send the respective codes to Mercado Pago. To do this, send them via `query_params` using the authentication URL below.

```URL
https://auth.mercadolibre.com.ar/authorization?response_type=code&client_id=$APP_ID`redirect_uri=$YOUR_URL&code_challenge=$CODE_CHALLENGE&code_challenge_method=$CODE_METHOD
```

- `redirect_uri`: URL specified in the Redirect URL field of [your application](/developers/en/guides/additional-content/your-integrations/application-details).
- `code_challenge`: is the verification code generated from a `code_verifier` (**a random sequence of characters with a length between 43-128 characters, including uppercase and lowercase letters, digits, and some special characters**) and encrypted with the `code_challenge_method`. Check out the [official documentation](https://datatracker.ietf.org/doc/html/rfc7636#section-4) for more information.
- `code_challenge_method`: the hash method used to generate the `code_challenge`, where `S256` is commonly used by default to specify that the code_challenge is encrypted using the **SHA-256** encryption algorithm. Check out the [official documentation](https://datatracker.ietf.org/doc/html/rfc7636#section-4) for more information.

3. After correctly sending the codes to Mercado Pago, you will obtain the necessary authorization for PKCE verification in transactions made with OAuth.
4, Check the authorization code returned in the `code` parameter in the Redirect URL of your server (https://www.redirect-url.com?code=CODE&state=RANDOM_ID).
5. Finally, send your [credentials](/developers/pt/guides/additional-content/your-integrations/credentials) and the authorization code to the [/oauth/token](/developers/pt/reference/oauth/_oauth_token/post) endpoint to receive the access token as a response.