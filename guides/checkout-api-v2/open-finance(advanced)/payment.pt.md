# Criação de pagamento
Para conseguir iniciar um pagamento Pix via Open Finance o vendedor deverá utilizar o método de Criação de Pagamento da API, com alguns requisitos:

* As informações do pagador são obrigatórias e devem ser inseridas no atributo `payer`

* Deve ser enviado uma URL de callback, através do campo `callback_url`, para mostrar o feedback ao pagador. Para mais informações, acesse a [seção de callback](/developers/pt/docs/checkout-api/integration-test/open-finance/callbacks) desta documentação. 

**Requisição**

```curl
curl --request POST \
  --url 'https://api.mercadopago.com/v1/payments?access_token=XXX' \
  --data '{
  "payment_method_id": "pix",
  "transaction_amount": 5,
  "description": "Pagamento Openfinace",
  "payer": {
    "email": "test_user_58128038@testuser.com",
    "identification": {
      "number": "15635614680",
      "type": "CPF"
    },
  },
  "point_of_interaction": {
    "linked_to": "openfinance",
       "transaction_data": {
		"bank_info": {
			"origin_bank_id": "81d8e591-5d8e-46e2-8b4a-9819e4739fd9"
	 }
  },
  "token": "45ba90f2-a37f-4d57-bce2-e46aae3c3b04",
  "callback_url": "https://example.com"
}'
```

Para a autenticação e confirmação na Instituição Financeira selecionada, o cliente deverá ser redirecionado para o canal apropriado através da url retornada no parâmetro `ticket_url` na resposta da requisição. 

> NOTE
> 
> Nota
> 
> O valor retornado em `ticket_url` é a url do Carousel Redirect.

**Resposta**

```json
{
    "id": 22831702804,
    "date_created": "2022-06-02T10:17:13.865-04:00",
    "date_approved": null,
    "date_last_updated": "2022-06-02T10:17:13.865-04:00",
    "date_of_expiration": "2022-06-03T10:17:13.536-04:00",
    "money_release_date": null,
    "operation_type": "regular_payment",
    "issuer_id": null,
    "payment_method_id": "pix",
    "payment_type_id": "bank_transfer",
    "status": "pending",
    "status_detail": "pending_waiting_transfer",
    "currency_id": "BRL",
    "description": "Pagamento Openfinace",
    "live_mode": true,
    "sponsor_id": null,
    "authorization_code": null,
    "money_release_schema": null,
    "taxes_amount": 0,
    "counter_currency": null,
    "brand_id": null,
    "shipping_amount": 0,
    "pos_id": null,
    "store_id": null,
    "integrator_id": null,
    "platform_id": null,
    "corporation_id": null,
    "collector_id": 456852241,
    "payer": {
        "type": null,
        "id": "435906493",
        "operator_id": null,
        "email": null,
        "identification": {
            "type": null,
            "number": null
        },
        "phone": {
            "area_code": null,
            "number": null,
            "extension": null
        },
        "first_name": null,
        "last_name": null,
        "entity_type": null
    },
    "marketplace_owner": null,
    "metadata": {},
    "additional_info": {
        "available_balance": null,
        "nsu_processadora": null,
        "authentication_code": null
    },
    "order": {},
    "external_reference": "45ba90f2-a37f-4d57-bce2-e46aae3c3b04",
    "transaction_amount": 5,
    "transaction_amount_refunded": 0,
    "coupon_amount": 0,
    "differential_pricing_id": null,
    "deduction_schema": null,
    "callback_url": null,
    "installments": 1,
    "transaction_details": {
        "payment_method_reference_id": null,
        "net_received_amount": 0,
        "total_paid_amount": 5,
        "overpaid_amount": 0,
        "external_resource_url": null,
        "installment_amount": 0,
        "financial_institution": null,
        "payable_deferral_period": null,
        "acquirer_reference": null,
        "bank_transfer_id": null,
        "transaction_id": null
    },
    "fee_details": [],
    "charges_details": [],
    "captured": true,
    "binary_mode": false,
    "call_for_authorize_id": null,
    "statement_descriptor": null,
    "card": {},
    "notification_url": null,
    "refunds": [],
    "processing_mode": "aggregator",
    "merchant_account_id": null,
    "merchant_number": null,
    "acquirer_reconciliation": [],
    "point_of_interaction": {
        "type": "OPENPLATFORM",
        "linked_to": "openfinance",
        "business_info": {
            "unit": "online_payments",
            "sub_unit": "default"
        },
        "application_data": {
            "name": null,
            "version": null
        },
        "transaction_data": {
            "qr_code": null,
            "bank_transfer_id": null,
            "transaction_id": null,
            "financial_institution": null,
            "ticket_url": null,
            "bank_info": {
                "payer": {
                    "account_id": null,
                    "id": null,
                    "long_name": null,
                    "external_account_id": null
                },
                "collector": {
                    "account_id": null,
                    "long_name": null,
                    "account_holder_name": "Salazar Tucker",
                    "transfer_account_id": null
                },
                "is_same_bank_account_owner": null,
                "origin_bank_id": null,
                "origin_wallet_id": null
            },
            "infringement_notification": {
                "type": null,
                "status": null
            },
          "qr_code_base64":null
        }
    }
}
```

