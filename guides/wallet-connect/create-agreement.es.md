# Crear agreement

La primera etapa para integrar Wallet Connect es la creación de un _agreement_, un link de autorización al que el comprador accede para otorgar al vendedor acceso a su billetera de Mercado Pago en el momento en que se efectúe un pago. 

El _agreement_ almacena los medios de pago seleccionados por el pagador y permite modificar estas configuraciones sin la intervención del vendedor, haciendo que esta etapa sea transparente durante el flujo de pago.

Consulte el siguiente diagrama que ilustra cómo funciona el flujo de creación de un agreement.

![Crear agreement](/images/wallet-connect/new-create-agreement.es.png)

Para crear un _agreement_, envía un **POST** con los atributos necesarios al endpoint [/v2/wallet_connect/agreements](/developers/es/reference/wallet_connect/_wallet_connect_agreements/post) y ejecuta el requestr o, si lo prefiere, use el `curl` a continuación y preste atención a la respuesta del request que devolverá **dos parámetros** obligatorios para obtener la aprobación del pagador: `agreement_uri` y `return_uri`.

[[[
```curl

curl -X POST \
      'https://api.mercadopago.com/v2/wallet_connect/agreements?client.id=2451675580092619' \
      -H 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
      -H 'Content-Type: application/json' \ 
      -H 'x-platform-id: YOUR_ACCESS_TOKEN' \
      -d '{
  "return_url": "https://www.mercadopago.com/",
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
]]]


> WARNING
>
> Importante
>
> Un usuario sólo puede tener un agreement activo por integración. Si quieres crear un nuevo agreement, debes cancelar el anterior. Para cancelar un agreement, envía un DELETE al endpoint [/v2/wallet_connect/agreements/{agreement_id}](/developers/es/reference/wallet_connect/_wallet_connect_agreements_agreement_id/delete) y ejecuta el request.

