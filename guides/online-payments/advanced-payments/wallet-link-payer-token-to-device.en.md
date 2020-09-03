---
  indexable: false
---

# Link payer’s access token to chosen device

> WARNING
>
> Important
>
> This step it’s exclusive to Mobile integrations and is **required**.

It’s necessary to gather information (fingerprint) from the mobile device used for authentication and send it to DeviceSessions API.

#### Request
```curl
curl -X POST \
     'https://api.mercadopago.com/v1/device_sessions/login_mobile_device?access_token=PAYER_ACCESS_TOKEN' \
     -d '{
           "section": "my_marketplace_checkout_login",
           "fingerprint": {
             "os": "android",
             "vendor_ids": [
               {
                 "name": "serial",
                 "value": "9889d5324b5833444c"
               }
             ],
             "model": "SM-G950F",
             "location": {
               ...
             },
             "vendor_specific_attributes": {
               ...
             },
             "resolution": "1080x2076",
             "ram": 3534944
           }
         }'
```

> NOTE
> 
> Note
> 
> See [reference](https://www.mercadopago.com.ar/developers/es/guides/payments/advanced-payments/wallet-device-fingerprint-sample) for whole example about Fingerprint and implementation via SDK. 