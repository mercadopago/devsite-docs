# Capturar pagamento

A captura do pagamento é a **confirmação do valor que deseja cobrar do comprador**. Nesse ponto do fluxo de pagamento, o vendedor precisa que determinado pagamento seja retirado da carteira do cliente no momento de sua criação.

Veja abaixo o diagrama que ilustra o processo de captura de pagamento por meio do endpoint de Pagamentos das APIs de Wallet Connect.

![Capture-payment-flow](/images/wallet-connect/captured-payment.pt.png)

## Enviar request

Ao enviar o _request_ ao endpoint de Pagamentos, garanta que os seguintes atributos sejam incluídos conforme exemplos abaixo.

| Parâmetro  | Descrição  |
| --- | --- |
| X-Idempotency-Key  | Este parâmetro deve ser inserido no header de todos os requests. Para mais informações, veja a seção Idempotência.  |
| wallet_payment | Indica que é um pagamento de um vendedor com Wallet Connect previamente vinculado.  |
| transaction_amount  | Valor total que deverá ser cobrado do comprador.  |
| description  | Descrição do pagamento.  |
| external_reference  | Referência de pagamento atribuída pelo vendedor.  |
| payer  | Informação do pagador requerida para criação do pagamento.  |
| token  | _Token_ de pagamento obtido após a finalização do fluxo da vinculação.  |
| type_token  | Tipo de pagamento, para o uso no fluxo de Wallet Connect é preciso definir o valor “wallet-token”.  |
| binary_mode  | O valor deste campo é obrigatoriamente "true".  |

Com esses parâmetros em mãos, envie um **POST** ao endpoint [/v1/advanced_payments](/developers/pt/reference/wallet_connect/_advanced_payments/post) e execute a requisição ou, se preferir, utilize o `curl` abaixo.

[[[
```curl

curl -X POST \
    'https://api.mercadopago.com/v1/advanced_payments' \
    -H 'X-Idempotency-Key: IDEMPOTENCY_KEY' \
    -H 'Authorization: Bearer ACCESS_TOKEN' \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -d '{
           "wallet_payment":{
              "transaction_amount":700.50,
              "description":"Payment Description",
              "external_reference":"Pago_123"     
           },
           "payer":{
              "token":"PAYER_TOKEN",
              "type_token": "wallet-token"
            },
           "binary_mode": true
        }'


```
]]]

Ao executar o `request` você poderá receber diferentes tipos de respostas originadas por razões específicas. Veja a seção [Respostas](/developers/pt/docs/wallet-connect/advanced-payments/capture-payment/returns) para mais informações.