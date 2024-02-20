# Generar token de pago

Creado la vinculación y otorgada la aprobación del comprador, se debe crear el _token_ de pago. El _token_ de pago se encarga de almacenar los datos del comprador y garantizar la seguridad de la transacción, además es un atributo obligatorio para crear transacciones durante todo el periodo de validez del `agreement` creado anteriormente.

Consulte el siguiente diagrama que ilustra cómo funciona el flujo de creación de un _token_ de pago.

![Generar token](/images/wallet-connect/create-payer-token-v2-es.png)

Para crear un _payer token_, envíe un POST con todos los atributos necesarios al endpoint [/v2/wallet_connect/agreements/{agreementId}/payer_token](/developers/es/reference/wallet_connect/_wallet_connect_agreements_agreement_id_payer_token/post) y ejecute la solicitud o, si lo prefiere, use el `curl` disponible a continuación.

[[[
```curl

curl -X POST \
      'https://api.mercadopago.com/v2/wallet_connect/agreements/<AGREEMENT.ID>/payer_token'\
       -H 'Content-Type: application/json' \
       -H 'x-platform-id: YOUR_PLATFORM_ID' \
       -H 'Authorization: Bearer TEST-3322*********190-03031*********46528954c*********0339910-1*********' \
       -d '{
  "code": "aeecea3e11f2545d1e7790eb6591ff68df74c57930551ed980239f4538a7e530"
}'
```
]]]

## Respuesta

[[[
```json
{
  "payer_token": "abcdef1e23f4567d8e9123eb6591ff68df74c57930551ed980239f4538a7e530"
}
```
]]]

Con la creación del _token_ de pago, la integración con Wallet Connect finalizará con éxito. Vaya a la sección [Pagos](/developers/es/docs/wallet-connect/advanced-payments) para realizar el flujo de pago.

