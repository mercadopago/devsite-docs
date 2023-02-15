# Capturar pagamento

A captura do pagamento é a confirmação do valor que deseja cobrar do comprador. Nesse ponto do fluxo de pagamento, o vendedor precisa que determinado pagamento seja retirado da carteira do cliente no momento de sua criação.

Veja o diagrama abaixo que ilustra o processo de captura de pagamento por meio da API de Advanced Payments.

![Capture-payment-flow](/images/wallet-connect/captured-payment.pt.png)

## Enviar request

Ao enviar o _request_ ao endpoint de Advanced Payments, garanta que os seguintes atributos sejam incluídos conforme exemplos abaixo.

| Parâmetro  | Descrição  |
| --- | --- |
| transaction_amount  | Valor total que deverá ser cobrado do comprador.  |
| description  | Descrição do pagamento.  |
| external_reference  | Referência de pagamento atribuída pelo vendedor  |
| token  | payer_token obtido após a finalização do fluxo do agreement.  |
| type_token  | Tipo de pagamento, para o uso no fluxo de Wallet Connect é preciso definir o valor “wallet-token”.  |
| binary_mode  | O valor deste campo é obrigatoriamente "true".  |
| X-Idempotency-Key  | Este parâmetro deve ser inserido no header de todos os requests. Para mais informações, veja a seção Idempotência.  |
| wallet_payment  | Indica que é um advanced payment de um vendedor com Wallet Connect previamente vinculado.  |
| payer  | Informação do pagador requerida para criação do advanced payment  |



Com esses parâmetros em mãos, envie um POST ao endpoint /v1/advanced_payments e execute a requisição ou, se preferir, utilize o `curl` abaixo.

[[[
```curl

POST

    -H 'X-Idempotency-Key: faDF8323asd298' \
    -H ‘Authorization: Bearer ${ACCESS_TOKEN}’ \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \

https://api.mercadopago.com/v1/advanced_payments

{

   "wallet_payment":{
      "transaction_amount":700.50,
      "description":"Payment Description",
      "external_reference":"Pago_123”     
   },
   "payer":{
      "token":"PAYER_TOKEN",
      "type_token": "wallet-token"
   },

   "binary_mode": true
}

```
]]]
