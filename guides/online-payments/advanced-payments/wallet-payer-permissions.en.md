---
  indexable: false
---

# Requesting Permissions

### Request permission to your users to access their Mercado Pago Wallet

Implement the authorization flow, to request your users permission to access their Wallet. This is done using a flow of OAuth.

Users must be redirected to the following address:

`https://auth.mercadopago.com.ar/authorization?client_id=<APP_ID>&response_type=code&platform_id=mp&redirect_uri=<REDIRECT_URI>&scopes=read,write,offline_access,wallet-payments`

where:

* `<APP_ID>` is the APP_ID value.
* `<REDIRECT_URI>` is the value entered in the `Redirect Uri` field.

You will receive an authorization code in the url that you specified: 

`http://<REDIRECT_URI>?code=AUTHORIZATION_CODE`

This `AUTHORIZATION_CODE` will be used to create the credentials, and is valid for 10 minutes.

### Obtain the access token and payer details

Use the authorization code, obtained in the previous step, to get the credentials of the user through the OAuth API and thus be able to make a payment by accessing the payment methods of their wallet.

#### Request
```curl
curl -X POST \
     -H 'Accept: application/json' \
     -H 'Content-Type: application/x-www-form-urlencoded' \
     'https://api.mercadopago.com/oauth/token' \
     -d 'client_id=<CLIENT_ID>' \
     -d 'client_secret=<CLIENT_SECRET>' \
     -d 'grant_type=authorization_code' \
     -d 'code=<AUTHORIZATION_CODE>' \
     -d 'redirect_uri=<REDIRECT_URI>'
```

The parameters you must include are:

* `<CLIENT_ID>` Es el valor de `APP_ID`. You can obtain it from the details of your application.
* `<CLIENT_SECRET>` Tu `SECRET_KEY`. You can obtain it from the details of your application.
* `<AUTHORIZATION_CODE>` The authorization code you obtained by redirecting the user back to your site.
* `<REDIRECT_URI>` Must be the same `Redirect URI` that you configured in your application.

#### Response
```json
{
    "access_token": "PAYER_ACCESS_TOKEN",
    "public_key": "PUBLIC_KEY",
    "refresh_token": "TG-XXXXXXXXX-XXXXX",
    "live_mode": true,
    "user_id": USER_ID,
    "token_type": "bearer",
    "expires_in": 15552000,
    "scope": "offline_access payments write wallet-payments"
}
```

In the response, in addition to the `access_token` and `public_key` of the payer that has been linked, you get the `refresh_token` that must be used to periodically renew your credentials.

The credentials are valid for 6 months. If the credentials of the payers are not renewed before 6 months, they will expire and the payer will have to be authorized again.
