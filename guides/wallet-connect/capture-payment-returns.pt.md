# Respostas 

Ao executar o _request_ para captura de pagamentos, é possível que se retornem diferentes respostas. Nesta seção você encontra o detalhe de cada uma delas, bem como as possíveis causas.


## Pagamento aprovado

[[[
```Json
===
Código de status: 201
===
{
   "id":10458724,
   "status":"approved",
   "wallet_payment":{
      "transaction_amount":700.50,
      "description":"Payment for the purchase of furniture",
      "external_reference":"Pago_123”
   },
   "payments":[
      {
         "id":3870106238,
         "status":”approved”,
         "status_detail":”accredited”,
         "payment_type_id":"credit_card",
         "payment_method_id":"visa",
         "transaction_amount":700.50,
         "installments":1,
         "description":"Payment for the purchase of furniture",
         "capture":true,
         "external_reference":"Pago_123”
      }
   ],
   "disbursements": [
       {
         "collector_id": "ID_COLLECTOR"
       }
   ],
   "payer":{
      "id":786547
   },
   "site_id": "MLM",
   "binary_mode":true,
   "date_created":"2018-10-20T09:34:20.518-04:00",
   "date_last_updated":"2018-10-20T09:34:20.518-04:00"
}
```
]]]



## Pagamento rejeitado


> NOTE
>
> Importante
>
> Para mais informações sobre o motivo da recusa de pagamento, veja o campo `payment.status_detail`.



[[[
```Json
===
Código de status: 201
===
{
   "id":80458724,
   "status":"rejected",
   "wallet_payment":{
      "transaction_amount":700.50,
      "description":"Payment for the purchase of furniture"
   },
   "payments":[
      {
         "id":3870106238,
         "status":”rejected”,
         "status_detail":”cc_rejected_other_reason”,
         "payment_type_id":"credit_card",
         "payment_method_id":"visa",
         "transaction_amount":700.50,
         "installments":1,
         "issuer_id":25,
         "description":"Payment for the purchase of furniture",
         "capture":true
      }
   ],
   "disbursements": [
       {
         "collector_id": "ID_COLLECTOR"
       }
   ],
   "payer":{
      "id":786547
   },
   "site_id": "MLM",
   "binary_mode":true
}
```
]]]



## Pagamento rejeitado devido a dinheiro insuficiente na conta

Esta resposta retorna quando ocorre a tentativa de criação de um Advanced Payment porém o payer não tem saldo em sua conta Mercado Pago. 

[[[
```Json
===
Código de status: 201
===
{
   "id":90458724,
   "status":"rejected",
   "wallet_payment":{
      "transaction_amount":700.50,
      "description":"Payment for the purchase of furniture"
   },
   "payments":[
      {
         "id":null,
         "status":”rejected”,
         "status_detail":”insufficient_money”,
         "payment_type_id":"account_money",
         "payment_method_id":"account_money",
         "transaction_amount":700.50,
         "description":"Payment for the purchase of furniture",
         "capture":true
      }
   ],
   "disbursements": [
       {
         "collector_id": "ID_COLLECTOR"
       }
   ],
   "payer":{
      "id":786547
   }
   "site_id": "MLM",
   "binary_mode":true 
}
```
]]]



## Pagamento rejeitado por falta de autorização

Este erro é retornado quando o cliente cancela o agreement.

[[[
```Json
===
Código de status: 201
===
{
   "status": "401",
   "error":  "unauthorized",
   "message": "Invalid payer token.",
   "cause": [
    {
      "code":"401003",
      "message": "Invalid payer token",
      "data": null
    }
   ]
}

```
]]]


