---
  indexable: false
---

# Vincular access token del pagador al dispositivo utilizado

> WARNING
>
> Importante
>
> Este paso es solo para integraciones Mobile y es **requerido**.

Se debe recolectar información (fingerprint) del dispositivo mobile utilizado en la autenticación y enviarla a la API de DeviceSessions.

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
> Nota
> 
> Ver [referencia](https://www.mercadopago.com.ar/developers/es/guides/payments/advanced-payments/wallet-fingerprint-sample) al ejemplo completo de Fingerprint e implementación mediante SDK. 