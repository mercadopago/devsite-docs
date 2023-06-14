# Creation
 
The `authorization_code` flow is characterized by the intervention of the seller to explicitly authorize the application's access to their data and by the use of a code granted by the authentication server so that the application can obtain an access token and an associated refresh token.
 
Because it is a redirect-based flow, you must allow interaction with the seller's browser and receive the request through the authorization server redirect. In this flow, the application requests the seller's express consent to access the data by opening a web page in which the requested areas to be accessed are made explicit.
  
Once access is allowed, the server generates an access code that reaches the application through a redirect. In this step, the application requests access to the authentication server by sending the obtained code and application data. Once this is done, the server grants the access token and the refresh token to the application.
 
To generate the authorization code, the following requirements must be met.
 
| Requirements | Description | Specifications |
| --- | --- | --- |
| Seller Mercado Pago Accounts | Mercado Pago seller accounts will be required. One for you and one for the seller. | Seller account in Mercado Pago. If you don't have one, [clik here](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration/landing) to create it. |
| Application | Applications are the different integrations contained in one or more stores. You can create an application for each solution you implement, in order to have everything organized and maintain control to facilitate management. | To use OAuth you will need to have an application created. See the [Dashboard](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/additional-content/your-integrations/introduction) documentation for information on how to create an app. |
| Credentials | The [credenciales](/developers/en/guides/additional-content/credentials/credentials) are unique passwords with which we identify an integration in your account, and are used to securely capture payments in virtual stores and other applications. | To test and ensure the integration works, test credentials will be required. After this step, you will need production credentials to receive actual payments. |
| Redirect URL | Address you want to forward sellers to after successfully linking them. | This is an address on your server where access tokens will be received. |
| Authentication URL | Address where you wish to send sellers to authorize access to private data. | This is an address on the Mercado Pago server where permission is expressly granted to access private data. |
 
> WARNING
>
> Attention
>
> Remember that you will use sensitive information from your sellers. Make sure you store it safely. Do not use it in the authentication URL and manage the entire process only from your server.
 
1. Edit your application so that it contains your Redirect URL. See [Edit Application](/developers/en/guides/additional-content/dashboard/applications).
2. Send the authentication URL to the seller whose account you want to link to yours with the following fields:

    |Description|URL| 
    |---|---|
    | Authentication URL | https://auth.mercadopago.com/authorization?client_id=APP_ID&response_type=code&platform_id=mp&state=RANDOM_ID&redirect_uri=https://www.redirect-url.com |
     * **client_id**: replace the "APP_ID" value with your application ID. Check [Application ID](/developers/en/guides/additional-content/dashboard/applications).
     * **state**: replace the "RANDOM_ID" value with an identifier that is unique for each attempt and does not include sensitive information so that you can identify who the received code is from.
     * **redirect_uri**: add the reported URL in the Redirect URL field of your application.
     <br/>
3. Wait for the seller to access the URL and allow access. Upon accessing the URL, the seller will be directed to Mercado Pago and must log into their account to carry out the authorization.
4. Check your server's Redirect URL to see the authorization code returned in the **code** parameter.
 
   |Description|URL|  
   |---|---|
   | Redirect URL | https://www.redirect-url.com?code=CODE&state=RANDOM_ID |
 
5. Send your credentials and authorization code to the [/oauth/token](/developers/en/reference/oauth/_oauth_token/post) endpoint to receive the access token in response.
 
> WARNING
>
> Attention
>
> It is recommended to carry out this procedure all at once together with the user, since the code received by the Redirect URL after authorization is valid for 10 minutes and the access token received through the endpoint is valid for 180 days.
>
> To generate sandbox credentials for testing, send the `test_token` parameter with the value `true`.