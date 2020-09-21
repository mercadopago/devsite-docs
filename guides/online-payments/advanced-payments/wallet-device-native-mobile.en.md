---
  indexable: false
---

# Native Mobile Device

Integrador must gather fingerprint information and send it to `DeviceSession` API before doing a payment process request.

#### Request
```curl
curl -X POST \
    -H 'Authorization: Bearer ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/device_sessions/mobile_device?public_key=APP_PUBLIC_KEY' \
    -d '{
          "section": "my_marketplace_checkout",
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

#### Response

Successful answer will be an `HTTP Status 200 OK`  and it will return complete advanced payment. Otherwise, it will return `HTTP Status` corresponding to the error with an explanatory message. 

```json
{
  "id": "AB5A1138729AF430C016231741AA3",
  "fingerprint": {
    ...
  }
}
```

> NOTE
> 
> Nota
> 
> See [reference](https://www.mercadopago.com.ar/developers/es/guides/payments/advanced-payments/wallet-device-fingerprint-sample) or complete example about Fingerprint and implementation via SDK.

You must capture `id` value from the response in order to send it into `X-Device-Session-Id` header afterwards.

#### Request
```curl
curl -X POST \
    -H 'X-Device-Session-Id: AB5A1138729AF430C016231741AA3' \
    -H 'Authorization: Bearer ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/advanced_payments' \
    -d '{...}'
```