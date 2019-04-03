# Additional Information

It is possible to send information that can improve the fraud prevention analysis and the conversion rate. For this it is necessary to send the `additional_info` field with details of the payer and the shipping address. The more information is sent, the better the conversion rate of payments will be.

`https://auth.mercadopago.com.ar/authorization?client_id=<APP_ID>&response_type=code&platform_id=mp&redirect_uri=<REDIRECT_URI>&scopes=read,write,offline_access,wallet-payments`

where:

* `<APP_ID>` is the value of APP_ID.
* `<REDIRECT_URI>` is the value entered in the field `Redirect Uri`.

You will receive an authorization code in the url that you specified: 

`http://<REDIRECT_URI>?code=AUTHORIZATION_CODE`

This `AUTHORIZATION_CODE` will be used to create your credentials, and is valid for 10 minutes.

### Obtain the access token and the payer details

Use the authorization code, obtained in the previous step, to obtain the credentials of the user through the OAuth API and thus be able to make a payment by accessing the payment methods of the wallet.

#### Request
```curl
curl -X POST \
    -H 'Accept":"application/json' \
    -H 'Content-Type: application/json' \
    'https://api.mercadopago.com/v1/advanced_payments?access_token=SELLER_TOKEN' \
```

#### Body
```json
{
   "wallet_payment":{
      "transaction_amount":700.50,
      "description":"Payment Google",
      "external_reference":"Pago_123",
      "access_token":"PAYER_ACCESS_TOKEN"      
   },
   "binary_mode": true,
   "additional_info": {
      "shipments": {
         "receiver_address": {
         "zip_code": "1111",
         "street_name": "Broad Street",
         "street_number": 123,
         "floor": 4,
         "apartment": "C"
      }
    },
    "payer": {
      "address": {
         "street_name": "Fourth Street",
         "street_number": "342"
      }
    }
  }
}
```
