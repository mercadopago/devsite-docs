# Capturar pagamento

A captura do pagamento é a **confirmação do valor que deseja cobrar do comprador**. Nesse ponto do fluxo de pagamento, o vendedor precisa que determinado pagamento seja retirado da carteira do cliente no momento de sua criação.

Veja abaixo o diagrama que ilustra o processo de captura de pagamento por meio do endpoint de Pagamentos das APIs de Wallet Connect.

![Capture-payment-flow](/images/wallet-connect/captured-payment.pt.png)

## Enviar request

Ao enviar o _request_ ao endpoint de Pagamentos, garanta que os seguintes atributos sejam incluídos conforme exemplos abaixo.

| Parâmetro  | Descrição  |
| --- | --- |
| X-Idempotency-Key  | Este parâmetro deve ser inserido no header de todos os requests. Para mais informações, veja a seção Idempotência. |
| X-Meli-Session-Id | Este parâmetro pode ser incluído no header dos requests. Representa um identificador único para o dispositivo de cada comprador no momento da compra. É obrigatório apenas para as integrações pertencentes à indústria de Gambling. Se tiver dúvidas, consulte o seu representante comercial. |
| wallet_payment | Indica que é um pagamento de um vendedor com Wallet Connect previamente vinculado. |
| transaction_amount  | Valor total que deverá ser cobrado do comprador. |
| description  | Descrição do pagamento. |
| external_reference  | Referência de pagamento atribuída pelo vendedor. |
| forward_data.sub_merchant | Dados encaminhados do `sub_merchant`. Informações que os facilitadores de pagamento devem enviar obrigatoriamente para identificar os subcomércios durante a transação. Para mais detalhes de cada campo pertencente a `forward_data.sub_merchant`, acesse a documentação dos [Subcomércios](/developers/pt/docs/wallet-connect/payment-flow/capture-payment/submerchants).|
| payer  | Informação do pagador requerida para criação do pagamento. |
| token  | _Token_ de pagamento obtido após a finalização do fluxo da vinculação. |
| type_token  | Tipo de pagamento. Para o uso no fluxo de Wallet Connect é preciso definir o valor “wallet-token”. |
| binary_mode  | O valor deste campo é obrigatoriamente "true". |

Com esses parâmetros em mãos, envie um **POST** ao endpoint [/v1/advanced_payments](/developers/pt/reference/wallet_connect/_advanced_payments/post) e execute a requisição ou, se preferir, utilize o `curl` abaixo.

[[[
```curl
curl -X POST \
    'https://api.mercadopago.com/v1/advanced_payments' \
    -H 'X-Idempotency-Key: IDEMPOTENCY_KEY' \
    -H 'X-Meli-Session-Id: DEVICE_ID' \
    -H 'Authorization: Bearer ACCESS_TOKEN' \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -d '{
         "wallet_payment": {
          "transaction_amount": 700.50,
          "description": "Descrição do pagamento",
          "external_reference": "Pago_123"
          "forward_data": {
             "sub_merchant": {
                "sub_merchant_id": 123123,
                "mcc": "5462",
                "country": "BRA",
                "address_door_number": 1,
                "zip": "2222222",
                "document_number": "222222222222222",
                "city": "SÃO PAULO",
                "address_street": "RUA A",
                "legal_name": "LOJINHA DO ZÉ",
                "region_code_iso": "BR-MG",
                "region_code": "BR",
                "document_type": "CNPJ",
                "phone": "123123123",
                "url": "www.nomedofacilitador.com.br"
               }
            }
         },
         "payer": {
            "token": "PAYER_TOKEN",
              "type_token": "wallet-token"
         },
         "binary_mode": true
      }'
```
]]]

Ao executar o `request` você poderá receber diferentes tipos de respostas originadas por razões específicas. Veja a seção [Respostas](/developers/pt/docs/wallet-connect/advanced-payments/capture-payment/returns) para mais informações.