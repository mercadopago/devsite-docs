---
  indexable: false
---

# Device web

Mercado Pago tiene sus propias herramientas de prevención de fraude. Para pagos de `Wallet` es **requerido** enviar información sobre el device del comprador, esto ayudará a evitar transacciones fraudulentas.

> WARNING
>
> Importante
>
> El integrador no debe persistir la información del device y es necesario generar este ID por cada pago nuevo que se quiera procesar.

### Implementación de device en Web

Para implementar la generación del device debes agregar el siguiente código a tu checkout:

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

Este código genera una variable de javascript con el nombre de `MP_DEVICE_SESSION_ID`, que contiene como valor un ID alfanumérico generado con la información del dispositivo utilizado.

Por ejemplo:
```curl
MP_DEVICE_SESSION_ID = 5cf65fc6c5db631a47471bb0
```

Una vez obtenido este ID, hay que enviarlo como header en la firma de la API.

#### Request
```curl
curl -X POST \
    -H 'X-Device-Session-Id: 5cf65fc6c5db631a47471bb0' \
    -H 'Authorization: Bearer ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/advanced_payments' \
    -d '{...}'
```