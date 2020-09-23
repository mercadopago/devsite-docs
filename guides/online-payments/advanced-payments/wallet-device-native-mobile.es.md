---
  indexable: false
---

# Device Mobile Nativo

El integrador debe recolectar información del fingerprint y enviarla a la API de `DeviceSession` Aantes de enviar la petición para procesar el pago.

#### Request
```curl
curl -X POST \
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


La respuesta exitosa será un `HTTP Status 200 OK`y devolverá el advanced payment completo. De lo contrario devolverá el `HTTP Status` correspondiente al error y un mensaje aclaratorio.

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
> Ver [referencia](https://www.mercadopago.com.ar/developers/es/guides/payments/advanced-payments/wallet-device-fingerprint-sample) al ejemplo completo de Fingerprint e implementación mediante SDK.

Se debe capturar el valor `id` de la respuesta para enviar luego en el header `X-Device-Session-Id`.

#### Request
```curl
curl -X POST \
    -H 'X-Device-Session-Id: AB5A1138729AF430C016231741AA3' \
    -H 'Authorization: Bearer ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/advanced_payments' \
    -d '{...}'
```