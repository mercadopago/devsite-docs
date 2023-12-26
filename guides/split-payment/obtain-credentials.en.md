# Obtain credentials

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
> These credentials are valid for 6 months. If not renewed before that period, they will expire, and it will be necessary to repeat the linking process to authorize the seller again. To learn how to renew these credentials, consult the step-by-step in the [Renewal documentation](/developers/en/docs/split-payment/additional-content/security/oauth/renewal).