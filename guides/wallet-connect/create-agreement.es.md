# Iniciar vinculación

El primer paso para integrar Wallet Connect es la creación de una vinculación, un enlace de autorización que el comprador utiliza para conceder al vendedor acceso a su billetera de Mercado Pago en el momento en que se realiza un pago.

La vinculación almacena los métodos de pago seleccionados por el pagador y permite la modificación de estas configuraciones sin la intervención del vendedor, lo que hace que esta etapa sea transparente durante el flujo de pago.

Cualquier cambio en los medios de pago se comunica a través de una notificación Webhooks, que proporciona detalles de la actualización.
Para más información, consulte la sección [Actualización del medio de pago de una vinculación](/developers/es/docs/wallet-connect/additional-content/your-integrations/notifications/webhooks).

> WARNING
>
> Importante
>
> Un usuario puede tener solo una vinculación activo por integración. Para crear una nueva vinculación, es necesario cancelar el anterior. Para ello, envíe un **DELETE** al endpoint [/v2/wallet_connect/agreements/{agreement_id}](/developers/es/reference/wallet_connect/_wallet_connect_agreements_agreement_id/delete) y ejecute la solicitud. Tras la cancelación, se enviará una notificación webhook con todos los detalles de la operación. Para entender el proceso con más detalle, visite la sección [Cancelación de vinculación entre integrador y Mercado Pago](/developers/es/docs/wallet-connect/additional-content/your-integrations/notifications/webhooks).

Consulte el siguiente diagrama que ilustra cómo funciona el flujo de creación de una vinculación.

![Iniciar vinculación](/images/wallet-connect/new-create-agreement.es.png)

Para crear una vinculación, envía un **POST** con los atributos necesarios al endpoint [/v2/wallet_connect/agreements](/developers/es/reference/wallet_connect/_wallet_connect_agreements/post) y ejecuta el requestr o, si lo prefiere, use el `curl` a continuación y preste atención a la respuesta del request que devolverá **dos parámetros** obligatorios para obtener la aprobación del pagador: `agreement_uri` y `return_uri`.

```curl
curl -X POST \
    'https://api.mercadopago.com/v2/wallet_connect/agreements' \
      -H 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
      -H 'Content-Type: application/json' \
      -H 'x-platform-id: YOUR_PLATFORM_ID' \
      -d '{
  "return_uri": "https://www.mercadopago.com/",
  "external_flow_id": "EXTERNAL_FLOW_ID",
  "external_user": {
    "id": "usertest",
    "description": "Test account"
  },
  "agreement_data": {
    "validation_amount": 3.14,
    "description": "Test agreement"
  }
}'
```

## Respuesta

```json
{
  "agreement_id": "22abcd1235ed497f945f755fcaba3c6c",
  "agreement_uri": "https://wwww.mercadopago.com.ar/v1/wallet_agreement/22abcd1235ed497f945f755fcaba3c6c"
}
```