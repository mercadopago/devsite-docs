# Processar pagamentos com desconto

Nesta seção, detalhamos as requisições e os parâmetros necessários para processar pagamentos com desconto e as respostas esperadas de cada uma delas. 



> NOTE
>
> Importante
>
> O reembolso do desconto não é instantâneo; pode levar cerca de 200 milissegundos sem um cupom e até 10 segundos com um cupom. Portanto, recomendamos criar a promessa de desconto e prosseguir imediatamente com o pagamento.


Para realizar o processamento dos pagamentos com desconto, utilize o _curl_ abaixo e garanta que os parâmetros de requisição sejam preenchidos de acordo com as informações descritas na tabela a seguir.

| Parâmetro  | Tipo  | Descrição   | Exemplo  |
| --- | --- | --- | --- |
| Authorization  | String  | Token de autorização do usuário (Access token). Esta informação pode ser obtida através do menu [Suas integrações](/developers/pt/docs/wallet-connect/additional-content/your-integrations/credentials).  | APP_USR-123456-test-access-t0ken  |
| wallet_payment  | Object  | Objeto que agrupa informações de pagamento processado via Wallet Connect.  | N/A  |
| transaction_amount  | Double  | Valor pelo qual o pagamento é efetuado.  | 550.0  |
| description  | String  | Descrição genérica do pagamento que está sendo efetuado.  | "Descrição do pagamento"  |
| external_reference  | String  | Referência de pagamento atribuída pelo vendedor. Aceita apenas números e letras.  | "Pagamento_123"  |
| discount  | Object  | Campo opcional que agrupa os dados do desconto a ser aplicado. Este campo somente é obrigatório caso queira criar um pagamento com desconto. Caso envie vazio, criará um pagamento sem desconto.  | N/A  |
| amount  | Double  | Valor do desconto a ser aplicado no pagamento.  | 55.0  |
| description  | String  | Descrição do desconto.  | "Desconto para Black Friday".  |
| detail  | Object  | Objeto que estende informações das características do desconto.  | N/A  |
| value  | Double  | Quantidade de desconto a ser aplicado no pagamento. Este campo corresponde com o `type` mencionado abaixo, por exemplo, 30 por cento.  | 10.0  |
| type  | String  | Unidade de medida do valor de desconto, podendo ser percentual ou um montante fixo.  | percent (para porcentagem) ou fixed (para valores fixos).  |
| cap  | Double  | Valor máximo pelo qual o desconto pode ser aplicado num pagamento.  | 5000  |
| payer  | Object  | Objeto que contém os dados do pagador.  | N/A  |
| token  | String  | Token específico do pagador, usado para realizar toda a validação do fluxo de pagamento.  | payer1-token2-test3-example4  |
| type_token  | String  | Tipo de token a ser utilizado nos pagamentos.  | wallet-token (este é o único tipo de token aceito para os pagamentos via Wallet Connect).  |

[[[
```curl
curl -X POST \
'https://api.mercadopago.com/v1/advanced_payments' \
--header 'Authorization: <YOUR_ACCESS_TOKEN>' \
--data '{
    "wallet_payment": {
        "transaction_amount": 550,
        "description": "Payment Description",
        "external_reference": "Pago_123",
        "discount": {
            "amount": 55.0,
            "description": "Pruebas wc",
            "detail": {
                "value": 10.0,
                "type": "percent",
                "cap": 5000
            }
        }
    },
    "payer": {
        "token": "PAYER_TOKEN",
        "type_token": "wallet-token"
    }
}'

```
]]]


## Respostas

Abaixo detalhamos as diferentes respostas que podem ser recebidas ao processar um pagamento com desconto. As respostas são categorizadas com base no resultado da requisição, variando desde o sucesso no processamento até determinado erro. 


### Sucesso

[[[
```Json

{
"id": 1234567,
"status": "approved",
"marketplace": null,
"sponsor_id": null,
"payments": [
{
"id": PAYMENT-ID,
"status": "approved",
"status_detail": "accredited",
"payment_type_id": "account_money",
"payment_method_id": "account_money",
"token": null,
"transaction_amount": 500,
"installments": 1,
"processing_mode": "aggregator",
"issuer_id": null,
"coupon_amount": 10.0,
"campaign_id": "CAMPAIGN-ID",
"coupon_code": null,
"description": "Payment Wallet",
"external_reference": null,
"statement_descriptor": null,
"date_of_expiration": null,
"merchant_account_id": null,
"payment_method_option_id": null,
"additional_info": null,
"transaction_details": null,
"net_amount": null,
"taxes": null
}
],
"disbursements": null,
"payer": {
"id": "PAYER-ID",
"email": "PAYER-EMAIL",
"address": null,
"identification": null,
"first_name": null,
"last_name": null,
"phone": null,
"token": "PAYER-TOKEN",
"external_payer_id": "EXTERNAL-PAYER-ID"
},
"external_reference": null,
"description": null,
"binary_mode": true,
"capture": true,
"date_created": "2023-07-24T14:30:45.574-04:00",
"date_last_updated": "2023-07-24T14:30:46.517-04:00",
"metadata": null,
"additional_info": null,
"wallet_payment": {
"transaction_amount": 550,
"description": "Payment Wallet",
"external_reference": null,
"subscription_data": null,
"user_present": null,
"discount": {
"amount": 50.0,
"description": "wallet connect prueba",
"detail": {
"value": 10.0,
"type": "percent",
"cap": 100000.0
}
},
"payment_preference": {
"active": true,
"user_id": 1431302201,
"payment_method": [
{
"priority": 1,
"payment_method": "account_money"
}]
}
},
"pos_id": null,
"store_id": null,
"wallet_connect_discount": {
"amount": 10.0,
"token": "DISCOUNT-TOKEN"
}
}


```
]]] 

### Erro

Caso o desconto aplicado no pagamento não seja válido ou o valor indicado no pedido não corresponda ao valor do desconto estabelecido, um erro será gerado, conforme descrito a seguir.

[[[
```Json

{
"error": "bad_request",
"message": "discount doesn't exist or amount is incorrect",
"status": 400,
"cause": [
{
"code": 400136,
"description": "discount doesn't exist or amount is incorrect",
"data": null
}
]
}

```
]]] 
