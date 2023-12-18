# Devolução de pagamento

É possível realizar devoluções parciais ou totais através do **id do pix de pagamento** (campo `endToEndId`). Para isso, execute a requisição abaixo.

[[[
```curl

curl --location --request PUT 'https://pix-api.mercadopago.com/pix/E10573521202206211501YtU7ltDrM72/devolucao/1656015086' \
--header 'Authorization: Bearer TOKEN' \
--header 'Content-Type: application/json' \
--cert PATH_TO_mTLS --key PATH_TO_KEY \
--data-raw '{
    "valor":"0.10"
}'

```
]]]


**Resposta**

[[[
```json

{
    "id": "1656015124",
    "valor": "0.10",
    "horario": {
        "solicitacao": "2022-06-23T20:12:05.103Z",
        "liquidacao": "2022-06-23T20:12:10.210Z"
    },
    "status": "DEVOLVIDO"
}



```
]]]


Ao consultar a cobrança novamente, será possível ver os detalhes das devoluções no campo pix.

[[[
```Json

"pix": [
    {
        "endToEndId": "E10573521202206211501YtU7ltDrM72",
        "txid": "9c1256e6487e461dbec64f0d0471f9b0",
        "valor": "1.00",
        "chave": "test_user_81729269@testuser.com",
        "horario": "2022-06-21T15:01:38Z",
        "infoPagador": "Pago Bank Transfer Pix",
        "devolucoes": [
            {
                "id": "1656015124",
                "valor": "0.10",
                "horario": {
                    "solicitacao": "2022-06-23T20:12:53.409Z",
                    "liquidacao": "2022-06-23T20:12:07Z"
                },
                "status": "DEVOLVIDO"
            }
        ]
    }
]

```
]]]
