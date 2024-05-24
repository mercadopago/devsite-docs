# Get Access Token

Learn how to use the flows, also known as grant types, to obtain an Access Token and access the data exposed by an API. The existence of these flows arises to respond to all business scenarios that can arise in the consumption of APIs based on the type of consuming application, its degree of trust, and how the user interacts in the process.

The access flows available for generating the Access Token are:

- [Authorization code]()
- [Client credentials]()

> NOTE
>
> Important
>
> If an Access Token generated from the **Authorization code** flow is invalid or expired, you can use the **Refresh Token** flow to exchange a temporary grant of type `refresh_token` for an Access Token. This means that the Access Token can be refreshed without the need for user interaction again after the `authorization_code` has been granted. For more information, visit [Renew Access Token](/developers/en/guides/additional-content/security/oauth/renewal).

## Authorization code

The `authorization_code` flow is characterized by the intervention of the seller to explicitly authorize the application's access to their data and by the use of a code granted by the authentication server so that the application can obtain an Access Token and an associated refresh token.
 
Because it is a redirect-based flow, you must allow interaction with the seller's browser and receive the request through the authorization server redirect. In this flow, the application requests the seller's express consent to access the data by opening a web page in which the requested areas to be accessed are made explicit.

> WARNING
>
> Important
>
> Remember that you will use sensitive information from your sellers. Make sure you store it safely. Do not use it in the authentication URL and manage the entire process only from your server.
  
Once access is allowed, the server generates an access code that reaches the application through a redirect. In this step, the application requests access to the authentication server by sending the obtained code and application data. Once this is done, the server grants the Access Token and the refresh token to the application.

See below how to **configure the PKCE protocol** (an optional security protocol, but one that will be used with OAuth to protect against malicious code attacks during the exchange of authorization codes for Access Tokens) and then **generate the Access Token**.

### Configure PKCE

The **PKCE** (Proof Key for Code Exchange) is a security protocol used with OAuth to protect against malicious code attacks during the exchange of authorization codes for an Access Token. It adds an extra layer of security by generating a verifier that is transformed into a challenge to ensure that even if the authorization code is intercepted, it is not useful without the original verifier.

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
https://auth.mercadopago.com/authorization?response_type=code&client_id=$APP_ID`redirect_uri=$YOUR_URL&code_challenge=$CODE_CHALLENGE&code_challenge_method=$CODE_METHOD
```

- **Redirect_uri**: URL provided in the "Redirect URL" field of [your application](/developers/en/guides/additional-content/your-integrations/application-details).
- **Code_verifier**: code that should be generated, following the requirements for its functionality, which include: a random sequence of characters with a length between 43 and 128 characters, including uppercase letters, lowercase letters, numbers, and some special characters. For example: **47DEQpj8HBSa-_TImW-5JCeuQeRkm5NMpJWZG3hSuFU**.
- **Code_challenge**: next, it is necessary to create a `code_challenge` from the `code_verifier` using one of the following transformations:
  - If it's possible to use **S256**, it will be necessary to use this option by transforming the `code_verifier` into a `code_challenge` through `BASE64URL` encoding after applying the "SHA256" function.
  - If it's not possible to use **S256** for some technical reason and the server supports the **Plain** method, it's possible to set the c`ode_challenge` equal to the `code_verifier`.
- **Code_challenge_method**: is the method used to generate the `code_challenge`, as described in the above item. This field can be, for example, **S256** or **Plain**, depending on the encoding selected in the `code_challenge stage`. </br>

3. After correctly sending the codes to Mercado Pago, you will obtain the necessary authorization for get the Access Token and perform PKCE verification on transactions made with OAuth.

### Get Token

Access Token is the code used in different requests of public origin to access a protected resource that represents an authorization granted by a seller to a client application that contains scopes and a limited period of time for such access. Follow the steps below to obtain it.

> 

1. Edit your application so that it contains your Redirect URL. See [Edit Application](/developers/en/guides/additional-content/your-integrations/application-details).
2. Send the authentication URL to the seller whose account you want to link to yours with the following fields:

    |Description|URL| 
    |---|---|
    | Authentication URL | https://auth.mercadopago.com/authorization?client_id=APP_ID&response_type=code&platform_id=mp&state=RANDOM_ID&redirect_uri=https://www.redirect-url.com |
     * **client_id**: replace the "APP_ID" value with your application ID. Check [Application ID](/developers/en/guides/additional-content/your-integrations/application-details).
     * **state**: replace the "RANDOM_ID" value with an identifier that is unique for each attempt and does not include sensitive information so that you can identify who the received code is from.
     * **redirect_uri**: add the reported URL in the Redirect URL field of your application.
     <br/>
3. Wait for the seller to access the URL and allow access. Upon accessing the URL, the seller will be directed to Mercado Pago and must log into their account to carry out the authorization.
4. Check your server's Redirect URL to see the authorization code returned in the **code** parameter.
 
   |Description|URL|  
   |---|---|
   | Redirect URL | https://www.redirect-url.com?code=CODE&state=RANDOM_ID |
 
5. Send your credentials and authorization code to the [/oauth/token](/developers/en/reference/oauth/_oauth_token/post) endpoint to receive the Access Token in response.
 
> WARNING
>
> Important
>
> It is recommended to carry out this procedure all at once together with the user, since the code received by the Redirect URL after authorization is valid for 10 minutes and the Access Token received through the endpoint is valid for 180 days.
> <br><br>
> To generate sandbox credentials for testing, send the `test_token` parameter with the value `true`.

## Client credentials