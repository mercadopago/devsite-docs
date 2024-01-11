# Create configuration

To configure the integration with the Split Payments solution, you will need to [create your application](#bookmark_create_application), [request permissions from your users](#bookmark_request_permission_from_users), and [obtain the credentials](#bookmark_obtain_credentials). Keep reading to create the required configuration.

## Create application

Create your application to integrate with the Split Payments solution by following the steps below.

   > NOTE
   >
   > Important
   >
   > During the creation of your application, it may be necessary to reauthenticate your identity. If you have already completed the verification, reauthentication will be requested. Otherwise, you will be redirected to submit the necessary documents. This additional step is essential to protect your account and ensure compliance with operations. You can refer to the [Developer dashboard documentation](/developers/es/docs/split-payment/additional-content/your-integrations/dashboard) if you have any questions on how to use it.

1. Access [Your Integrations](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app). Once there, click on the **Create application** button, located in the upper right corner.
2. Enter a name to identify your application (you have a limit of 50 characters).
3. Choose the **Online Payments** solution.
4. When choosing the product to integrate, you can select "Checkout Pro" or "Checkout API".
5. Choose the **Marketplace** integration model.
6. Once you have completed the requested information, click on **Create application** and you're done!

### Configure the Redirect URL

In this step, it is necessary to configure the Redirect URL so that sellers can authorize the marketplace to carry out sales.

After creating the application, it is necessary to go to the editing screen to fill in the Redirect URL field (in OAuth requests, it is displayed as redirect_uri), which must contain the URL of the marketplace site where the seller's token will be sent upon completing the linking process.

![Redirect URL](/images/split-payment/redirect-url-es.png)

## Request permission from users

To request permission from your users to manage sales on their behalf, it is necessary to implement the authorization flow using OAuth. Follow the steps below:

1. Redirect your users to the following URL to authorize sales management:

| Value                | Description                                                                                                          |
|----------------------|----------------------------------------------------------------------------------------------------------------------|
| `<APP_ID>`           | Value obtained during [application creation](/developers/en/docs/split-payment/integration-configuration/create-application).    |
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
----[mco]----
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

## Obtain credentials

Use the authorization code obtained in the previous step to acquire user credentials through the [OAuth API](/developers/en/reference/oauth/_oauth_token/post), enabling you to manage their sales.

| Parameter                | Description                                                                                      |
|--------------------------|--------------------------------------------------------------------------------------------------|
| `<CLIENT_ID>`            | Value of APP_ID obtained in the details of your application.                                      |
| `<CLIENT_SECRET>`        | Your SECRET_KEY, also available in the details of your application.                              |
| `<AUTHORIZATION_CODE>`   | Authorization code obtained when redirecting the user back to your site.                     |
| `<REDIRECT_URI>`         | Should be the same Redirect URI configured in your application.                                     |

```curl
curl -X POST \
     -H 'accept: application/json' \
     -H 'content-type: application/x-www-form-urlencoded' \
     'https://api.mercadopago.com/oauth/token' \
     -d 'client_id=<CLIENT_ID>' \
     -d 'client_secret=<CLIENT_SECRET>' \
     -d 'grant_type=authorization_code' \
     -d 'code=<AUTHORIZATION_CODE>' \
     -d 'redirect_uri=<REDIRECT_URI>'
```

#### Response

```json
{
    "access_token": "SELLER_PAYER_TOKEN",
    "public_key": "PUBLIC_KEY",
    "refresh_token": "TG-XXXXXXXXX-XXXXX",
    "live_mode": true,
    "user_id": "COLLECTOR_ID DE PAGO",
    "token_type": "bearer",
    "expires_in": 15552000,
    "scope": "offline_access payments write"
}
```

The response includes:
- `access_token` and `public_key` of the linked seller.
- `refresh_token`, which you should use to periodically renew the linkages.
- `user_id`, equal to the `collector_id` used to capture payments.

> WARNING
>
> Important
>
> These credentials are valid for 6 months. If not renewed before that period, they will expire, and it will be necessary to repeat the linking process to authorize the seller again. To learn how to renew these credentials, consult the step-by-step in the [Renewal documentation.](/developers/en/docs/split-payments/additional-content/security/oauth/renewal)