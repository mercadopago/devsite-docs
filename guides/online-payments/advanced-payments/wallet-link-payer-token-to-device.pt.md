---
  indexable: false
---

# Vincular access token do pagador com o dispositivo utilizado

> WARNING
>
> Importante
>
> Este passo é apenas para integrações Mobile e é  **requerido**.

As informações (fingerprint) do dispositivo mobile utilizado na autenticação devem ser coletadas e encaminhadas à API de DeviceSessions.

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
> OBS
> 
> Ver [referência](https://www.mercadopago.com.br/developers/es/guides/payments/advanced-payments/wallet-device-fingerprint-sample) ao exemplo completo de Fingerprint e implementação mediante SDK. 