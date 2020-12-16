---
  sites_supported:
      - mla
  indexable: false
---

# Envío de dinheiro

No Mercado Pago, provemos os serviços necessários para poder realizar envios de dinheiro de maneira imediata e sem custo, a partir da sua conta do Mercado Pago a outra conta do Mercado Pago.

## Crie uma aplicação

Para criar uma aplicação é preciso acessar com a sua conta do Mercado Pago o seguinte link: [https://applications.mercadopago.com/](https://applications.mercadopago.com/). Para poder operar com a API de envio de dinheiro  a aplicação deve ser habilitada para esse fim. Essas permissões são habilitadas pelo Mercado Pago, envie ao seu assessor comercial o APP ID da aplicação para poder realizar a configuração correspondente.

> WARNING
>
> Considerações
>
> O APP ID deve possuir o escopo de "money_transfer", o pagamento deverá ter o `payment_method_id` = `account_money` e deve-se adicionar o campo `operation_type` = `money_transfer`.<br>
> Para os pagamentos que cumprem com as condições mencionadas anteriormente a operação terá uma comissão de 0% e o dinheiro será liberado imediatamente após a operação.

## Pagamentos a fornecedores e salários

Essa solução permite realizar pagamentos a fornecedores e o pagamento de salários. Nesses casos, é preciso adicionar o campo "concept_id" específico para poder identificar esses tipos de pagamentos:
    
-   Para pagamentos a fornecedores deve-se enviar o "concept_id" = "supply"
-   Para pagamentos de salário deve-se enviar o "concept_id" = "payroll"

## Considerações gerais

Se no momento da geração do pagamento não se cumprir alguma das condições mencionadas no ponto anterior, será recebida alguma das seguintes mensagens de erro:

Caso envie o "operation_type" = "money_transfer", "payment_method" = "account_money" mas o APP ID não tenha o escopo de "money_transfer" será recebida a mensagem de erro:

```json
{
    "badrequest"
}
```

Caso envie o "operation_type" = "money_transfer" e o APP ID tenha o escopo de "money_transfer" mas um "payment_method" diferente de "account_money" será recebida a mensagem de erro:

```json
{
    "badrequest"
}
```

Caso envie o "payment_method" = "account_money" e o APP ID tenha o escopo de "money_transfer" mas o "operation_type" = "money_transfer" será recebida a mensagem de erro:

```json
{
    "badrequest"
}
```

Caso envie o "concept_id" = "payroll" ou "supply" sem que o APP ID tenha escopo de "money_transfer", o "operation_type" = "money_transfer" e/ou o "payment_method" = "account_money" será recebida a mensagem de erro:

```json
{
    "badrequest"
}
```

## Integração por API

Essa solução consiste na utilização das API's do Mercado Pago para realizar a criação do pagamento. Toda a experiência é conduzida pelo integrador.

Para o envio de dinheiro pode-se especificar o receptor do pagamento de duas maneiras:

- Utilizando o email associado a conta do Mercado Pago.
- Utilizando o ID da conta do Mercado Pago.

A seguir um exemplo de criação de pagamento utilizando o email:

``` json
$ curl https://api.mercadopago.com/v1/payments \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Cache-Control: no-cache' \
  -H 'Authorization: Bearer ACCESS_TOKEN' \
  -d '
  {
	"transaction_amount": 100,
	"operation_type": "money_transfer",
	"description": "Title of what you are paying for",
	"installments": 1,
	"marketplace": "NONE",
	"payment_method_id": "account_money",
	"collector": {
		"email": "test_user_50345633@testuser.com"
	},
	"external_reference": "Reference_1234",
	"notification_url": "https://www.your-site.com/webhooks",
}'
```

A seguir um exemplo de criação de pagamento utilizando o ID da conta:

``` json
$ curl https://api.mercadopago.com/v1/payments \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Cache-Control: no-cache' \
  -H 'Authorization: Bearer ACCESS_TOKEN' \
  -d '
  {
	"transaction_amount": 100,
	"operation_type": "money_transfer",
	"description": "Title of what you are paying for",
	"installments": 1,
	"marketplace": "NONE",
	"payment_method_id": "account_money",
	"collector": {
		"id": "399606359"
	},
	"external_reference": "Reference_1234",
	"notification_url": "https://www.your-site.com/webhooks",
}'
```

Por último recebe-se uma resposta do pagamento como a seguinte:

``` json
{
    "id": 4637181430,
    "date_created": "2018-04-17T09:26:39.000-04:00",
    "date_approved": "2018-04-17T09:26:40.000-04:00",
    "date_last_updated": "2018-04-17T09:26:40.000-04:00",
    "date_of_expiration": null,
    "money_release_date": "2018-04-29T09:26:40.000-04:00",
    "operation_type": "money_transfer",
    "issuer_id": null,
    "payment_method_id": "account_money",
    "payment_type_id": "account_money",
    "status": "approved",
    "status_detail": "accredited",
    "currency_id": "[FAKER][CURRENCY][ACRONYM]",
    "description": "Title of what you are paying for",
    "live_mode": true,
    "sponsor_id": null,
    "authorization_code": "1234567",
    "money_release_schema": null,
    "collector_id": 307467332,
    "payer": { 
	    "email": "test_user_77371011@testuser.com",
	    "entity_type": null,
	    "first_name": "Test",
	    "id": "399605060",
	    "identification": { 
		    "number": "32659430",
		    "type": "DNI" 
	     },
	    "last_name": "Test",
	    "operator_id": null,
	    "phone": { 
		    "area_code": "01",
		    "extension": null,
		    "number": "1111-1111" 
	    },
	    "type": "guest" 
	},
    "additional_info": {
    },
    "order": {},
    "external_reference": "Reference_1234",
    "transaction_amount": 100,
    "transaction_amount_refunded": 0,
    "coupon_amount": 0,
    "differential_pricing_id": null,
    "deduction_schema": null,
    "transaction_details": {
        "net_received_amount": 90.96,
        "total_paid_amount": 100,
        "overpaid_amount": 0,
        "external_resource_url": null,
        "installment_amount": 100,
        "financial_institution": null,
        "payment_method_reference_id": "null",
        "payable_deferral_period": null,
        "acquirer_reference": null
    },
    "fee_details": [
        {
            "type": "mercadopago_fee",
            "amount": 9.04,
            "fee_payer": "collector"
        }
    ],
    "captured": true,
    "binary_mode": false,
    "call_for_authorize_id": null,
    "statement_descriptor": "MERCADOPAGO",
    "installments": 1,
    "card": {
    },
    "notification_url": "https://www.your-site.com/webhooks",
    "refunds": [],
    "processing_mode": "aggregator",
    "merchant_account_id": null,
    "acquirer": null,
    "merchant_number": null,
    "acquirer_reconciliation": []
}
```

##  Especificando o conceito

Para identificar se trata-se de um pagamento a um fornecedor ("supply") ou um pagamento de salário ("payrrol"), é necessário incorporar um objeto "concept_id" a criação do pagamento.

A seguir um exemplo de criação de pagamento a um fornecedor:

``` json
$ curl https://api.mercadopago.com/v1/payments \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Cache-Control: no-cache' \
  -H 'Authorization: Bearer ACCESS_TOKEN' \
  -d '
  {
	"transaction_amount": 100,
	"operation_type": "money_transfer",
	"concept_id": "supply",
	"description": "Title of what you are paying for",
	"installments": 1,
	"marketplace": "NONE",
	"payment_method_id": "account_money",
	"collector": {
		"id": "399606359"
	},
	"external_reference": "Reference_1234",
	"notification_url": "https://www.your-site.com/webhooks",
}'
```

A seguir um exemplo de criação de pagamento de um salário:

``` json
$ curl https://api.mercadopago.com/v1/payments \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Cache-Control: no-cache' \
  -H 'Authorization: Bearer ACCESS_TOKEN' \
  -d '
  {
	"transaction_amount": 100,
	"operation_type": "money_transfer",
	"concept_id": "payroll",
	"description": "Title of what you are paying for",
	"installments": 1,
	"marketplace": "NONE",
	"payment_method_id": "account_money",
	"collector": {
		"id": "399606359"
	},
	"external_reference": "Reference_1234",
	"notification_url": "https://www.your-site.com/webhooks",
}'
```
