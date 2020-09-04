---
  indexable: false
---

# Device web

Mercado Pago tem suas próprias ferramentas de prevenção de fraude. Para pagamentos de `Wallet` é **requerido** enviar informações sobre o device do comprador, isso contribuirá para evitar transações fraudulentas.

> WARNING
>
> Importante
>
> O integrador não deve persistir nas informações do device e é necessário gerar esse ID por cada novo pagamento que deseje processar.

### Implementação de device na Web

Para implementar a geração do device você deve adicionar ao seu checkout o código a seguir:

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

Este código gera uma variável de javascript com o nome de `MP_DEVICE_SESSION_ID`, que contém como valor um ID alfanumérico gerado com as informações do dispositivo utilizado.

Exemplo:
```curl
MP_DEVICE_SESSION_ID = 5cf65fc6c5db631a47471bb0
```

Uma vez obtido esse ID, é preciso enviá-lo como header na firma da API.

#### Request
```curl
curl -X POST \
    -H 'X-Device-Session-Id: 5cf65fc6c5db631a47471bb0' \
    'https://api.mercadopago.com/v1/advanced_payments?access_token=ACCESS_TOKEN' \
    -d '{...}'
```