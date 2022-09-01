# Criar cobrança com vencimento

Para criar uma cobrança com vencimento, execute a requisição abaixo.

[[[
```curl

curl --location --request PUT 'https://pix-api.mercadopago.com/cobv/1655996626' \
--header 'Authorization: Bearer TOKEN' \
--header 'Content-Type: application/json' \
--cert PATH_TO_mTLS --key PATH_TO_KEY \
--data-raw '{
  "calendario": {
    "dataDeVencimento": "2022-12-31"
  },
  "devedor": {
    "cpf": "12345678909",
    "nome": "Francisco da Silva"
  },
  "valor": {
    "original": "123.45"
  },
  "chave": "CHAVE_PIX_COBRADOR"
}'

```
]]]


**Resposta**

[[[
```Json

{
    "calendario": {
        "criacao": "2022-06-10T14:02:30.597Z",
        "dataDeVencimento": "2022-06-09"
    },
    "devedor": {
        "cpf": "12345678909",
        "nome": "Francisco da Silva"
    },
    "loc": {
        "id": 119006,
       "location": "pix-qr.mercadopago.com/pix-api/qr/v2/3e46d57fd9304757a622956641fca261",
        "tipoCob": "cobv",
        "criacao": "2022-06-10T14:02:30.617Z"
    },
    "valor": {
        "original": "123.45"
    },
    "chave": "CHAVE_PIX_COBRADOR",
    "solicitacaoPagador": "Cobrança dos serviços prestados.",
    "txid": "12",
    "revisao": 0,
    "recebedor": {
        "cpf": "44427932800",
        "nome": "test chave"
    },
    "status": "ATIVA"
}

```
]]]


## Criar cobrança com vencimento, desconto, juros e multa

Para criar uma cobrança com vencimento, desconto, juros e multa execute a requisição abaixo.

[[[
```curl

curl --location --request PUT 'https://pix-api.mercadopago.com/cobv/1655996626' \
--header 'Authorization: Bearer TOKEN' \
--header 'Content-Type: application/json' \
--cert PATH_TO_mTLS --key PATH_TO_KEY \
--data-raw '{
  "calendario": {
    "dataDeVencimento": "2022-12-31"
  },
  "devedor": {
    "cpf": "12345678909",
    "nome": "Francisco da Silva"
  },
  "valor": {
    "original": "123.45",
    "desconto": {
      "modalidade": "1",
      "descontoDataFixa": [
        {
          "data": "2020-11-30",
          "valorPerc": "30.00"
        }
      ]
    },
    "juros": {
      "modalidade": "2",
      "valorPerc": "2.00"
    },
    "multa": {
      "modalidade": "2",
      "valorPerc": "15.00"
    }
  },
  "chave": "CHAVE_PIX_RECEBEDOR",
  "solicitacaoPagador": "Cobrança dos serviços prestados."
}'

```
]]]


**Resposta**

[[[
```Json

{
    "calendario": {
        "criacao": "2022-06-23T19:51:42.439Z",
        "dataDeVencimento": "2022-12-31"
    },
    "devedor": {
        "cpf": "12345678909",
        "nome": "Francisco da Silva"
    },
    "loc": {
        "id": 140006,
        "location": "pix-qr.mercadopago.com/pix-api/qr/v2/cobv/512d803188d943669e4d8c61aad522f4",
        "tipoCob": "cobv",
        "criacao": "2022-06-23T19:51:42.594Z"
    },
    "valor": {
        "original": "123.45",
        "multa": {
            "modalidade": 2,
            "valorPerc": "15.00"
        },
        "juros": {
            "modalidade": 2,
            "valorPerc": "2.00"
        },
        "desconto": {
            "modalidade": 1,
            "descontoDataFixa": [
                {
                    "data": "2020-11-30",
                    "valorPerc": "30.00"
                }
            ]
        }
    },
    "chave": "CHAVE_PIX_RECEBEDOR",
    "solicitacaoPagador": "Cobrança dos serviços prestados.",
    "txid": "1656013899",
    "revisao": 0,
    "recebedor": {
        "cpf": "40360443893",
        "nome": "Mathis Mann"
    },
    "status": "ATIVA"
}

```
]]]

### Definições do payload


| Nome  | Descrição  |
| --- | --- |
| valor.multa.modalidade  | Modalidade da multa  Valores possíveis: 1 a 2, conforme tabela abaixo  1: Valor fixo  2: Percentual  |
| valor.multa.valorPerc  | Multa em valor absoluto ou percentual, conforme "valor.multa.modalidade".  |
| valor.juros.modalidade  | Modalidade de juros  Valores possíveis: 1 a 8, conforme tabela abaixo  1: Valor (dias corridos)  2: Percentual ao dia (dias corridos)  3: Percentual ao mês (dias corridos)  4: Percentual ao ano (dias corridos)  5: Valor (dias úteis)  6: Percentual ao dia (dias úteis)  7: Percentual ao mês (dias úteis)  8: Percentual ao ano (dias úteis)  |
| valor.juros.valorPerc  | Juros em valor absoluto ou percentual, conforme "valor.juros.modalidade".  |
| valor.desconto.modalidade  | Modalidade de desconto  Valores possíveis: 1 a 6, conforme tabela abaixo  1: Valor Fixo até a[s] data[s] informada[s]  2: Percentual até a data informada  3: Valor por antecipação dia corrido  4: Valor por antecipação dia útil  5: Percentual por antecipação dia corrido  6: Percentual por antecipação dia útil  |
| valor.desconto.valorPerc  | Desconto em valor absoluto ou percentual, conforme "valor.desconto.modalidade".  |
