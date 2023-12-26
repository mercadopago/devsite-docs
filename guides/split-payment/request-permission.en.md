# Request permission from users

To request permission from your users to manage sales on their behalf, it is necessary to implement the authorization flow using OAuth. Follow the steps below:

1. Redirect your users to the following URL to authorize sales management:

| Value                | Description                                                                                                          |
|----------------------|----------------------------------------------------------------------------------------------------------------------|
| `<APP_ID>`           | Value obtained during [Application creation](/developers/en/docs/split-payment/integration-configuration/create-application).    |
| `<REDIRECT_URI>`     | Value entered in the Redirect URI field during [Redirect URL configuration](/developers/en/docs/split-payment/integration-configuration/create-application). |

----[mla]----
     ```curl
     https://auth.mercadopago.com.ar/authorization?client_id=<APP_ID>&response_type=code&platform_id=mp&redirect_uri=<REDIRECT_URI>
     ```

------------
----[mlb]----
     ```curl
     https://auth.mercadopago.com.br/authorization?client_id=<APP_ID>&response_type=code&platform_id=mp&redirect_uri=<REDIRECT_URI>
     ```
     
------------
----[mlm]----
     ```curl
     https://auth.mercadopago.com.mx/authorization?client_id=<APP_ID>&response_type=code&platform_id=mp&redirect_uri=<REDIRECT_URI>
     ```
     
------------
----[mlc]----
     ```curl
     https://auth.mercadopago.cl/authorization?client_id=<APP_ID>&response_type=code&platform_id=mp&redirect_uri=<REDIRECT_URI>
     ```
     
------------
----[mlc]----
     ```curl
     https://auth.mercadopago.com.co/authorization?client_id=<APP_ID>&response_type=code&platform_id=mp&redirect_uri=<REDIRECT_URI>
     ```
     
------------
----[mlu]----
     ```curl
     https://auth.mercadopago.com.uy/authorization?client_id=<APP_ID>&response_type=code&platform_id=mp&redirect_uri=<REDIRECT_URI>
     ```
     
------------
----[mpe]----
     ```curl
     https://auth.mercadopago.com.pe/authorization?client_id=<APP_ID>&response_type=code&platform_id=mp&redirect_uri=<REDIRECT_URI>
     ```
     
------------


2. Once users authorize sales management, you will receive an authorization code in the URL you specified in the previous step. This code will be in the `code` parameter as follows:

    ```curl
    http://<REDIRECT_URI>?code=AUTHORIZATION_CODE
    ```

> NOTE
>
> Nota
>
> The `AUTHORIZATION_CODE` is valid for 10 minutes and will be used to create the necessary credentials.