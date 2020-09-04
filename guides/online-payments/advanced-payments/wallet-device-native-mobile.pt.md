---
  indexable: false
---

# Device Mobile Nativo

O integrador deve coletar informações do fingerprint e encaminhá-las para a API de DeviceSession antes de enviar o requerimento para processar o pagamento.

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

A resposta exitosa será um `HTTP Status 200 OK` e restituirá o advanced payment completo. Do contrário, restituirá o `HTTP Status` correspondente ao erro e uma mensagem esclarecedora.

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
> OBS.
> 
> Ver [referência](https://www.mercadopago.com.ar/developers/es/guides/payments/advanced-payments/wallet-device-fingerprint-sample) ao exemplo completo de Fingerprint e implementação mediante SDK.

O valor `id` da resposta deve ser capturado para ser depois enviado no header `X-Device-Session-Id`.

#### Request
```curl
curl -X POST \
    -H 'X-Device-Session-Id: AB5A1138729AF430C016231741AA3' \
    'https://api.mercadopago.com/v1/advanced_payments?access_token=ACCESS_TOKEN' \
    -d '{...}'
```