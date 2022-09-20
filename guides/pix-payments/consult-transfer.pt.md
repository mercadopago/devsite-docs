# Consultar transferência realizada

Ao concluir um pagamento e consultar a cobrança criada, o status terá sido alterado para **Concluída** e haverá um novo campo nas respostas referente aos pix realizados.

Para consultar transferências realizadas, execute a requisição abaixo.

[[[
```curl

curl --location --request GET 'https://pix-api.mercadopago.com/cobv/1656013899' \
--header 'Authorization: Bearer TOKEN' \
--cert PATH_TO_mTLS --key PATH_TO_KEY

```
]]]

**Resposta**

[[[
```Json

"status": "CONCLUIDA",
"pix": [
    {
        "endToEndId": "E10573521202206211501YtU7ltDrM72",
        "txid": "9c1256e6487e461dbec64f0d0471f9b0",
        "valor": "1.00",
        "chave": "test_user_81729269@testuser.com",
        "horario": "2022-06-21T15:01:38Z",
        "infoPagador": "Pago Bank Transfer Pix"
    }
]

```
]]]
