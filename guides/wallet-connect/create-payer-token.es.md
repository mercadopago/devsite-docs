# Crear payer token

Creado el _agreement_ y otorgada la aprobación del comprador, se debe crear el _payer token_. El _payer token_ se encarga de almacenar los datos del comprador y garantizar la seguridad de la transacción, además es un atributo obligatorio para crear transacciones durante todo el periodo de validez del `agreement` creado anteriormente.

Consulte el siguiente diagrama que ilustra cómo funciona el flujo de creación de un _payer token_.

![Crear payer token](/images/wallet-connect/create-payer-token.es.png)

Para crear un _payer token_, envíe un POST con todos los atributos necesarios al endpoint [/v2/wallet_connect/agreements/{agreementId}/payer_token](/developers/es/reference/wallet_connect/_wallet_connect_agreements_agreement_id_payer_token/post) y ejecute la solicitud o, si lo prefiere, use el `curl` disponible a continuación.

[[[
```curl

curl -X POST \
      'https://api.mercadopago.com/v2/wallet_connect/agreements/{agreement_id}/payer_token?client.id=1451895580758649&caller.id=832564722' \
      -H 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
      -H 'Content-Type: application/json' \ 
      -H 'x-platform-id: YOUR_ACCESS_TOKEN' \
      -d '{
  "code": "aeecea3e11f2545d1e7790eb6591ff68df74c57930551ed980239f4538a7e530"
}'
```
]]]

Con la creación del payer token, la integración con Wallet Connect finalizará con éxito. Vaya a la sección [Advanced Payments](/developers/es/docs/wallet-connect/advanced-payments) para realizar el flujo de pago.

