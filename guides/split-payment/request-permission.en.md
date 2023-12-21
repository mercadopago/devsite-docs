# Request permission from your Users

To initiate the authorization process and request permissions from your users to manage sales on their behalf, it is necessary to implement the authorization flow using OAuth. Below are the detailed steps to follow:

1. Redirect your users to the following URL to authorize sales management:

    ```curl
    https://auth.mercadopago.com.ar/authorization?client_id=<APP_ID>&response_type=code&platform_id=mp&redirect_uri=<REDIRECT_URI>
    ```

    - Where `<APP_ID>` is the value obtained during [Application creation](/developers/en/docs/split-payment/integration-configuration/create-application), and
    - `<REDIRECT_URI>` is the value entered in the Redirect Uri field during [Redirect URL configuration](/developers/en/docs/split-payment/integration-configuration/create-application).



2. Once users authorize sales management, you will receive an authorization code in the URL you specified in the previous step. This code will be in the `code` parameter as follows:

    ```curl
    http://<REDIRECT_URI>?code=AUTHORIZATION_CODE
    ```

> NOTE
>
> Nota
>
> The `AUTHORIZATION_CODE` is valid for 10 minutes and will be used to create the necessary credentials.