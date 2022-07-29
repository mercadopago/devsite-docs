# Integrar com Spreedly

Receba pagamentos de maneira simples e segura de Mercado Pago através do Spreedly.
Os métodos disponíveis de Spreedly com Mercado Pago são:

- Purchase
- Authorize
- Capture
- Refund
- Void
- Verify

Para integração com Spreedly é necessário obter e configurar as [credenciais]([FAKER][CREDENTIALS][URL]) Public key e Access token do Mercado Pago.

> Encontre toda a informação sobre suas credenciais em nossas [perguntas frequentes](/developers/pt/guides/faqs/credentials/).

Por sua vez, também é necessário inserir o código do país:

- AR - Argentina
- BR - Brazil
- CL - Chile
- CO - Colombia
- MX - Mexico
- PE - Peru
- UY - Uruguay

Finalmente, para operar com Mercado Pago é necessário que nos envie os dados de identificação do dono do cartão (à exceção do México). Você deve enviar como dados específicos do gateway:

- cardholder_identification_type.
- cardholder_identification_number.

## Começando com Spreedly

Para começar a executar transações e obter pagamentos de seus usuarios necessitará:
1. Criar uma [cuenta gratutita](https://spreedly.com/trial-qualification) e obter as credenciais.
2. [Adicionar Mercado Pago](https://docs.spreedly.com/basics/gateway/) como gateway de pagamento.
3. Começar a obter [informação do meio de pagamento](https://docs.spreedly.com/basics/payment-method) de seus usuários.
4. [Gerar uma compra](https://docs.spreedly.com/basics/purchase)  com Spreedly através de Mercado Pago com a informação de pagamento de seus usuários.

## Adicionar Mercado Pago como gateway

Antes de iniciar a geração das transações através de Spreedly, tem que adicionar Mercado Pago como gareway. Nesta etapa, você atribui as credenciais do Mercado Pago e outras propriedades específicas.

A API envolvida neste processo é:
```
https://core.spreedly.com/v1/gateways.json
```

Um exemplo da vinculação de Mercado Pago como gateway seria:

```curl
$ curl https://core.spreedly.com/v1/gateways.json \
-u 'C7cRfNJGODKh4Iu5Ox3PToKjniY:4UIuWybmdythfNGPqAqyQnYha6s451ri0fYAo4p3drZUi7q2Jf4b7HKg8etDtoKJ' \
  -H 'Content-Type: application/json' \
  -d '{
        "gateway_type": "mercado_pago",
        "country": "AR",
        "access_token": "ENV_ACCESS_TOKEN"
      }'
```

A resposta que obterá é similar à seguinte:

```
{
  "gateway": {
    "token": "6DqX57I6fHgIuUkVN2HGszjDSu1",
    "gateway_type": "test",
    "description": null,
    "payment_methods": [
      "credit_card",
      "sprel",
      "third_party_token",
      "bank_account",
      "apple_pay",
      "android_pay"
    ],
    "state": "retained",
    "created_at": "2017-07-27T17:54:39Z",
    "updated_at": "2017-07-27T17:54:39Z",
    "name": "Spreedly Test",
    "characteristics": [
      "purchase",
      "authorize",
      "capture",
      "credit",
      "general_credit",
      "void",
      "verify",
      "reference_purchase",
      "purchase_via_preauthorization",
      "offsite_purchase",
      "offsite_authorize",
      "3dsecure_purchase",
      "3dsecure_authorize",
      "store",
      "remove",
      "disburse",
      "reference_authorization"
    ],
    "credentials": [

    ],
    "gateway_specific_fields": [

    ],
    "redacted": false
  }
}
```

## Gerar um meio de pagamento

Para que Spreedly possa transacionar através de Mercado Pago é necessário obter a informação do cartão do seu usuário (Spreedly payment method). Por ser informação confidencial, não deve ir ao seu servidor. Para isto é necessário implementar o [checkout de Spreedly](https://docs.spreedly.com/basics/payment-method/).

A API envolvida neste processo é:

```
https://core.spreedly.com/v1/payment_methods.json
```

Um exemplo da geração de um método de pagamento seria:

```curl
$ curl https://core.spreedly.com/v1/payment_methods.json \
-u 'C7cRfNJGODKh4Iu5Ox3PToKjniY:4UIuWybmdythfNGPqAqyQnYha6s451ri0fYAo4p3drZUi7q2Jf4b7HKg8etDtoKJ' \
  -H 'Content-Type: application/json' \
  -d '{
      "payment_method": {
        "credit_card": {
          "first_name": "TEST",
          "last_name": "TEST",
          "number": "CARD NUMBER",
          "verification_value": CVV,
          "month": "CARD EXPIRATION MONTH",
          "year": "CARD EXPIRATION YEAR"
        },
        "email": "luther_klocko@hotmail.com"
      }
    }
'
```

A resposta que obterá é similar à seguinte:

```
{
    "transaction": {
        "token": "7jhO6alDqP3YEyt1ihve6vLWT8e",
        "created_at": "2018-01-08T21:03:39Z",
        "updated_at": "2018-01-08T21:03:39Z",
        "succeeded": true,
        "transaction_type": "AddPaymentMethod",
        "retained": false,
        "state": "succeeded",
        "message_key": "messages.transaction_succeeded",
        "message": "Succeeded!",
        "payment_method": {
            "token": "3uAIR1sSCVJG90obnCN1Ip1BY3b",
            "created_at": "2018-01-08T21:03:39Z",
            "updated_at": "2018-01-08T21:03:39Z",
            "email": "[FAKER][INTERNET][FREE_EMAIL]",
            "data": null,
            "storage_state": "cached",
            "test": false,
            "last_four_digits": "CARD LAST FOUR DIGITS",
            "first_six_digits": "CARD FIRST SIX DIGITS",
            "card_type": "PAYMENT_METHO_ID",
            "first_name": "TEST",
            "last_name": "TEST",
            "month": CARD EXPIRATION MONTH,
            "year": CARD EXPIRATION YEAR,
            "address1": null,
            "address2": null,
            "city": null,
            "state": null,
            "zip": null,
            "country": null,
            "phone_number": null,
            "company": null,
            "full_name": "TEST TEST",
            "eligible_for_card_updater": true,
            "shipping_address1": null,
            "shipping_address2": null,
            "shipping_city": null,
            "shipping_state": null,
            "shipping_zip": null,
            "shipping_country": null,
            "shipping_phone_number": null,
            "payment_method_type": "credit_card",
            "errors": [],
            "fingerprint": "0efdb1b335007d2bf8b4bf8adff9274b934b",
            "verification_value": "XXX",
            "number": "XXXX-XXXX-XXXX-CARD LAST FOUR DIGITS"
        }
    }
}
```

## Gerar um pagamento

Depois de configurar o Mercado Pago como gateway e ter informações sobre o seu método de pagamento no Spreedly, você pode começar a gerar pagamentos e outros tipos de transações.
Para gerar o pagamento, é necessário que você tenha o token que representa seu método de pagamento (Método de pagamento Spreedly) e o token que representa o Mercado Pago como um gateway. Com isso, você poderá gerar o _POST_ para a API Spreedly:

```
https://core.spreedly.com/v1/gateways/<gateway_token>/purchase.<format>
```

Um exemplo da geração de um pagamento seria:

```curl
$ curl https://core.spreedly.com/v1/gateways/6DqX57I6fHgIuUkVN2HGszjDSu1/purchase.json \
  -u 'C7cRfNJGODKh4Iu5Ox3PToKjniY:4UIuWybmdythfNGPqAqyQnYha6s451ri0fYAo4p3drZUi7q2Jf4b7HKg8etDtoKJ' \
  -H 'Content-Type: application/json' \
  -d '{
        "transaction": {
          "payment_method_token": "3uAIR1sSCVJG90obnCN1Ip1BY3b",
          "amount": 100,
          "currency_code": "[FAKER][CURRENCY][ACRONYM]",
          "retain_on_success": true
        }
      }'
```
> O campo amount sempre é um inteiro em centena. Por tanto, se quer cobrar $84,58, deverá enviar o valor 8458.

A resposta que obterá é similar à seguinte:

```
{
  "transaction": {
    "on_test_gateway": true,
    "created_at": "2017-11-21T15:26:33Z",
    "updated_at": "2017-11-21T15:26:33Z",
    "succeeded": true,
    "state": "succeeded",
    "token": "5ks9ApXkKvk4BRNyZVicextsoBD",
    "transaction_type": "Purchase",
    "order_id": null,
    "ip": null,
    "description": null,
    "email": null,
    "merchant_name_descriptor": null,
    "merchant_location_descriptor": null,
    "gateway_specific_fields": null,
    "gateway_specific_response_fields": {
    },
    "gateway_transaction_id": "49",
    "gateway_latency_ms": 2,
    "amount": 100,
    "currency_code": "[FAKER][CURRENCY][ACRONYM]",
    "retain_on_success": true,
    "payment_method_added": false,
    "message_key": "messages.transaction_succeeded",
    "message": "Succeeded!",
    "gateway_token": "6DqX57I6fHgIuUkVN2HGszjDSu1",
    "gateway_type": "test",
    "response": {
      "success": true,
      "message": "Successful purchase",
      "avs_code": null,
      "avs_message": null,
      "cvv_code": null,
      "cvv_message": null,
      "pending": false,
      "result_unknown": false,
      "error_code": "",
      "error_detail": null,
      "cancelled": false,
      "fraud_review": null,
      "created_at": "2017-11-21T15:26:33Z",
      "updated_at": "2017-11-21T15:26:33Z"
    },
    "shipping_address": {
      "name": "TEST TEST",
      "address1": null,
      "address2": null,
      "city": null,
      "state": null,
      "zip": null,
      "country": null,
      "phone_number": null
    },
    "api_urls": [
      {
        "referencing_transaction": [

        ]
      }
    ],
    "payment_method": {
      "token": "3uAIR1sSCVJG90obnCN1Ip1BY3b",
      "created_at": "2017-10-13T11:42:31Z",
      "updated_at": "2017-11-21T15:26:33Z",
      "email": null,
      "data": null,
      "storage_state": "retained",
      "test": true,
      "last_four_digits": "CARD LAST FOUR DIGITS",
      "first_six_digits": "CARD FIRST SIX DIGITS",
      "card_type": "PAYMENT_METHOD_ID",
      "first_name": "TEST",
      "last_name": "TEST",
      "month": CARD EXPIRATION MONTH,
      "year": CARD EXPIRATION YEAR,
      "address1": null,
      "address2": null,
      "city": null,
      "state": null,
      "zip": null,
      "country": null,
      "phone_number": null,
      "company": null,
      "full_name": "TEST TEST",
      "eligible_for_card_updater": null,
      "shipping_address1": null,
      "shipping_address2": null,
      "shipping_city": null,
      "shipping_state": null,
      "shipping_zip": null,
      "shipping_country": null,
      "shipping_phone_number": null,
      "payment_method_type": "credit_card",
      "errors": [

      ],
      "fingerprint": null,
      "verification_value": "",
      "number": "XXXX-XXXX-XXXX-1111"
    }
  }
}
```

O campo succeeded indica que a transação obteve êxito. Uma vez que a transação tenha sido aprovada, poderá mostrar a janela de sucesso ao seu cliente.

Também pode executar outro tipo de transação através de Mercado Pago utilizando o meio de pagamento obtido:

- Authorize
- Capture
- Refund
- Void
- Verify

## Campos próprios de Mercado Pago

Para processar com Mercado Pago e para obter maiores níveis de aprovação em seus pagamentos recomendamos que na integração com Spreedly envie a maior quantidade de informações possíveis ao gerar um pagamento. Esta información se envia dentro do array: `"gateway_specific_fields"` `"mercado_pago"`.

### Payer Identification

Para processar com Mercado Pago é necessário enviar a identificação do pagador em cada pagamento. Esta informação é OBRIGATÓRIA para todos os sítios de Mercado Pago a exceção de México. Para mais detalhes, [acesse o seguinte link]https://www.mercadopago.com.br/developers/pt/reference/identification_types/_identification_types/get/).

### Parcelas

Você pode especificar o número de parcelas para uma transação enviando o campo `installments`. Se este campo não for enviado, Spreedly enviará com valor igual a 1.

### Statement Descriptor

Esta é uma string que pode enviar para que seu cliente possa identificar a cobrança no extrato do cartão. Pode especificar o valor enviando-o no campo `statement_descriptor`. Isto se encontra disponível somente para o Brasil.

### Informação Adicional

Para obter uma melhora na aprovação dos pagamentos pode enviar as informacoes adicionais do pagamento em formato JSON no campo `additional_info`. Para maiores informações acesse o [seguinte link]("/reference/payments/_payments_id/get/").

### Mercado Pago Device Fingerprint

Mercado Pago tem suas próprias ferramentas de prevenção de fraude. Sempre que seja possível recomendamos enviar informação sobre o dispositivo do comprador, isto ajudará a evitar transações fraudulentas e melhorará a aprovação de seus pagamentos.

Para implementar a geração do dispositivo em seu site, adicione o seguinte código em seu checkout:

```html
<script src="https://www.mercadopago.com/v2/security.js" view="checkout"></script>
```

 É importante que envie o campo `MP_DEVICE_SESSION_ID` (gerado automaticamente como uma variável javascript global) para o seu servidor, que no momento da criação do pagamento você adiciona o seguinte header ao request:

Finalmente, deve enviar o valor que se encontra na variável global javascript `MP_DEVICE_SESSION_ID` no campo `device_id`

### Exemplo de um pagamento completo

Here's an example of a payment sending all the available information:

``` curl
$ curl https://core.spreedly.com/v1/gateways/6DqX57I6fHgIuUkVN2HGszjDSu1/purchase.json \
  -u 'C7cRfNJGODKh4Iu5Ox3PToKjniY:4UIuWybmdythfNGPqAqyQnYha6s451ri0fYAo4p3drZUi7q2Jf4b7HKg8etDtoKJ' \
  -H 'Content-Type: application/json' \
  -d '
{
  "transaction": {
          "payment_method_token": "3uAIR1sSCVJG90obnCN1Ip1BY3b",
          "amount": 500,
          "currency_code": "[FAKER][CURRENCY][ACRONYM]",
          "gateway_specific_fields":{
          	"mercado_pago":{
          		"cardholder_identification_type":"DNI",
          		"cardholder_identification_number":"22333444",
          		"installments": "1",
          		"device_id": "392d1af8-bc36-893c-ccf4-80b6abbc07b7",
          		"additional_info":{
                	"items": [{
		                    "id": "item-ID-1234",
		                    "title": "Title of what you are paying for",
		                    "picture_url": "https://www.mercadopago.com/org-img/MP3/home/logomp3.gif",
		                    "description": "Item description",
		                    "category_id": "other",
		                    "quantity": 1,
		                    "unit_price": 5
                	}],
                	"payer": {
						"first_name": "TEST",
						"last_name": "TEST",
						"phone": {
							"area_code": "00",
							"number": "0000-0000"
						},
						"address": {
							"street_name": "STREET NAME",
							"street_number": STREET NUMBER,
							"zip_code": "ZIP CODE"
						}
					}
            	}
          	}
          },
          "retain_on_success": true,
          "order_id" : "0001",
          "description" : "SPREEDLY TEST",
          "email" : "[FAKER][INTERNET][FREE_EMAIL]",  
          "shipping_address" : {
            "name" : "ADDRESS NAME",
            "address1" : "STREET NAME STREET NUMBER",
            "address2" : "",
            "city" : "CITY",
            "state" : "STATE",
            "zip" : "ZIP CODE",
            "country" : "COUNTRY",
            "phone" : "0000000000"
    	}
	}
}

```