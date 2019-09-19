---
  indexable: false
---

# Device web

Mercado Pago has its own fraud prevention tools. For `Wallet` its **required** o send information about buyer’s device, which will help avoid fraudulent transactions.

> WARNING
>
> Important
>
> Integrator shouldn’t retain device information. It’s necessary to generate this ID for each new payment that you have to process.

### Web device implementation

In order to implement the device generation you have to add the next code snippet to your checkout:

```curl
<script
src="https://http2.mlstatic.com/storage/bmsdk/js/dml-0.0.5.min.js"></script>

<script>
  new DMLSDK({
    publicKey: "APP_PUBLIC_KEY",
    authenticated: true,
  });
</script>
```

This code generates a JavaScript variable with the name `MP_DEVICE_SESSION_ID`, which contains, as a value, an alphanumeric ID created with the information from the used device.

In example:
```curl
MP_DEVICE_SESSION_ID = 5cf65fc6c5db631a47471bb0
```

Once ID has been obtained, we need to send it as a header on the API signature.

#### Request
```curl
curl -X POST \
    -H 'X-Device-Session-Id: 5cf65fc6c5db631a47471bb0' \
    'https://api.mercadopago.com/v1/advanced_payments?access_token=ACCESS_TOKEN' \
    -d '{...}'
```