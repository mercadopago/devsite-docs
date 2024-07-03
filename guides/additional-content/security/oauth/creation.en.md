# Get Access Token

Learn how to use the flows, also known as _grant types_, to obtain an Access Token and access the data exposed by an API. The existence of these flows arise to respond to all business scenarios that can appear in the consumption of APIs based on the type of consuming application, its degree of trust, and how the user interacts in the process.

The access flows available for generating the Access Token are:

- [Authorization code](/developers/en/docs/security/oauth/creation#bookmark_authorization_code): when credentials are to be used to access a resource on behalf of others.
- [Client credentials](/developers/en/docs/security/oauth/creation#bookmark_client_credentials): when credentials are to be used to access a resource on one's own behalf.

> NOTE
>
> Important
>
> If an Access Token generated from the **Authorization code** flow is invalid or expired, you can use the **Refresh Token** flow to exchange a temporary grant of type `refresh_token` for an Access Token. This means that the Access Token can be refreshed without the need for user interaction again after the authorization has been granted. For more information, visit [Renew Access Token](/developers/en/guides/additional-content/security/oauth/renewal).

## Authorization code

The flow is characterized by the intervention of the seller to explicitly authorize the application's access to their data and by the use of a code granted by the authentication server so that the application can obtain an Access Token and an associated refresh token.
 
Because it is a redirect-based flow, you must allow interaction with the seller's browser and receive the request through the authorization server redirect. In this flow, the application requests the seller's express consent to access the data by opening a web page in which the requested areas to be accessed are made explicit.

> WARNING
>
> Important
>
> Remember that you will use sensitive information from your sellers. Make sure you store it safely. Do not use it in the authentication URL and manage the entire process only from your server.
  
Once access is allowed, the server generates an access code that reaches the application through a redirect. In this step, the application requests access to the authentication server by sending the obtained code and application data. Once this is done, the server grants the Access Token and the refresh token to the application.

See below how to **configure the PKCE protocol** (a non-mandatory security protocol that provides an extra layer of protection, so it is recommended) and then **generate the Access Token**.

### Configure PKCE

The **PKCE** (Proof Key for Code Exchange) is a security protocol used with OAuth to protect against malicious code attacks during the exchange of authorization codes for an Access Token. It adds an extra layer of security by generating a verifier that is transformed into a challenge to ensure that even if the authorization code is intercepted, it is not useful without the original verifier.

Follow the steps below to enable and configure the use of the authorization code flow with PKCE.

1. First, on the [Application details](/developers/en/docs/your-integrations/application-details) screen, click **Edit** and **enable the use of the authorization code flow with PKCE**. With the field enabled, Mercado Pago will require the `code_challenge` and `code_method` fields in OAuth requests.
2. The fields can be generated in various ways, either through custom development or using SDKs. Follow the necessary steps described in [this official documentation](https://datatracker.ietf.org/doc/html/rfc7636#section-4) to generate the required fields.
3. After generating and encrypting the fields, it will be necessary to send the respective codes to Mercado Pago. To do this, send them via `query_params` using the authentication URL below.

```URL
https://auth.mercadopago.com/authorization?response_type=code&client_id=$APP_ID`redirect_uri=$YOUR_URL&code_challenge=$CODE_CHALLENGE&code_challenge_method=$CODE_METHOD
```

- **Redirect_uri**: URL provided in the "Redirect URL" field of [your application](/developers/en/docs/your-integrations/application-details).
- **Code_verifier**: code that should be generated, following the requirements for its functionality, which include: a random sequence of characters with a length between 43 and 128 characters, including uppercase letters, lowercase letters, numbers, and some special characters. For example: **47DEQpj8HBSa-_TImW-5JCeuQeRkm5NMpJWZG3hSuFU**.
- **Code_challenge**: next, it is necessary to create a `code_challenge` from the `code_verifier` using one of the following transformations:
  - If it's possible to use **S256**, it will be necessary to use this option by transforming the `code_verifier` into a `code_challenge` through `BASE64URL` encoding after applying the "SHA256" function.
  - If it's not possible to use **S256** for some technical reason and the server supports the **Plain** method, it's possible to set the c`ode_challenge` equal to the `code_verifier`.
- **Code_challenge_method**: is the method used to generate the `code_challenge`, as described in the above item. This field can be, for example, **S256** or **Plain**, depending on the encoding selected in the `code_challenge stage`. </br>

4. After correctly sending the codes to Mercado Pago, you will obtain the necessary authorization (`code_verifier`)  for get the Access Token and perform PKCE verification on transactions made with OAuth.

### Get token

Access Token is the code used in different requests of public origin to access a protected resource. In this flow, that represents an authorization granted by a seller to a client application that contains scopes and a limited period of time for such access. Follow the steps below to obtain it.

> WARNING
>
> Attention
>
> It is recommended to carry out this procedure all at once together with the user, since the code received by the "Redirect URL" after authorization is valid for 10 minutes and the Access Token received through the endpoint is valid for 180 days (6 months).

1. Edit your application so that it contains your Redirect URL. See [Edit Application](/developers/en/guides/additional-content/your-integrations/application-details).
2. Send the **authentication URL** to the seller whose account you want to link to yours with the following fields:

   ```Authentication_URL
   https://auth.mercadopago.com/authorization?client_id=APP_ID&response_type=code&platform_id=mp&state=RANDOM_ID&redirect_uri=https://www.redirect-url.com
   ```

   |Field|Description|
   |---|---|
   |Client_id| Replace the "APP_ID" value with your **application number**. Check [Application ID](/developers/en/docs/your-integrations/application-details) for more information.|
   |State| Replace the "RANDOM_ID" value with an identifier that is unique for each attempt and does not include sensitive information so that you can identify who the received code is from. This way, you can ensure that the response belongs to a request initiated by the same application.|
   |Redirect_uri| Add the reported URL in the "Redirect URLs" field of your application. **Make sure that the redirect_uri is a static URL** Check [Application ID](/developers/en/docs/your-integrations/application-details) for more information.|

   > If you want to send additional parameters in the `redirect_uri`, use the `state` parameter to include that information. Otherwise, the call will receive an error response if the URL does not exactly match the application's configuration.

3. Wait for the seller to access the URL and allow access. Upon accessing the URL, the seller will be directed to Mercado Pago and must log into their account to carry out the authorization.
4. Check your server's **Redirect URL** to see the authorization code returned in the **code** parameter.
 
   ```Redirect_URL
   https://www.redirect-url.com?code=CODE&state=RANDOM_ID 
   ```
 
5. Send your [credentials](/developers/en/docs/your-integrations/credentials) (`client_id` and `client_secret`), the **authorization code** (`code`) returned and, if you have [configured the PKCE](/developers/en/docs/security/oauth/creation#:~:text=Access%20Token.-,Configure%20PKCE,-The%20PKCE%20), the `code_verifier` to the [/oauth/token](/developers/en/reference/oauth/_oauth_token/post) endpoint to receive the Access Token in response.

[[[
```php
<?php
  $client = new OauthClient();
   $request = new OAuthCreateRequest();
     $request->client_secret = "CLIENT_SECRET";
     $request->client_id = "CLIENT_ID";
     $request->code = "CODE";
     $request->redirect_uri = "REDIRECT_URI";

  $client->create($request);
?>
```
```java

OauthClient client = new OauthClient();

String authorizationCode = "TG-XXXXXXXX-241983636";
client.createCredential(authorizationCode, null);
```
```node
const client = new MercadoPagoConfig({ accessToken: 'access_token', options: { timeout: 5000 } }); 

const oauth = new OAuth(client);

oauth.create({
	'client_secret': 'your-client-secret',
	'client_id': 'your-client-id',
	'code': 'return-of-getAuthorizationURL-function',
	'redirect_uri': 'redirect-uri'
}).then((result) => console.log(result))
	.catch((error) => console.log(error));
```
```curl
curl -X POST \
    'https://api.mercadopago.com/oauth/token'\
    -H 'Content-Type: application/json' \
    -d '{
  "client_id": "client_id",
  "client_secret": "client_secret",
  "code": "TG-XXXXXXXX-241983636",
  "grant_type": "authorization_code",
  "redirect_uri": "APP_USR-4934588586838432-XXXXXXXX-241983636",
  "refresh_token": "TG-XXXXXXXX-241983636",
  "test_token": "false"
}'
```
]]]

> To generate **sandbox** credentials for testing, send the `test_token` parameter with the value `true`.

## Client credentials

This flow is used when applications request an Access Token using only their own credentials and to access their own resources. The main difference compared to other flows is that the user does not interact in the process, and consequently, the application cannot act on behalf of the user.

### Get token

Access Token is the code used in different requests of public origin to access a protected resource. In this flow, the Access Token is obtained without user interaction and only to access the application's own resources.

Follow the steps below to obtain it.

1. Send your [credentials](/developers/en/docs/your-integrations/credentials) (`client_id` and `client_secret`) to the [/oauth/token](/developers/en/reference/oauth/_oauth_token/post) endpoint with the `client_credentials` code in the `grant_type` parameter to receive a new response with a new `access_token`.
2. Update the application with the Access Token received in the response. 

> WARNING
>
> Attention
> 
> **The received token is valid for 6 hours.** Don't forget to renew it before the expiration period so that your applications continue to work correctly.

[[[
```php
<?php
  $client = new OauthClient();
   $request = new OAuthCreateRequest();
     $request->client_secret = "CLIENT_SECRET";
     $request->client_id = "CLIENT_ID";

  $client->create($request);
?>
```
```node
const client = new MercadoPagoConfig({ accessToken: 'access_token', options: { timeout: 5000 } }); 

const oauth = new OAuth(client);

oauth.create({
	'client_secret': 'your-client-secret',
	'client_id': 'your-client-id',
}).then((result) => console.log(result))
	.catch((error) => console.log(error));
```
```curl
curl -X POST \
    'https://api.mercadopago.com/oauth/token'\
    -H 'Content-Type: application/json' \
    -d '{
  "client_id": "client_id",
  "client_secret": "client_secret",
  "grant_type": "client_credentials",
}'
```
]]]