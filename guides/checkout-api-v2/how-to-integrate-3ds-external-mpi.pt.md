# Como integrar 3DS MPI externo com ----[mlb]---- Checkout Transparente------------ ----[mla, mlm, mlu, mco, mlc, mpe]---- Checkout API ------------

A [autenticação 3DS](/developers/pt/docs/checkout-api/how-tos/improve-payment-approval/3ds), ou 3-D Secure, eé um protocolo desenvolvido para aumentar a segurança em transações de cartão de crédito e débito online. Este protocolo adiciona uma camada extra de verificação, permitindo que tanto o emissor do cartão quanto o banco do titular do cartão autentiquem a transação antes de sua conclusão.

O ----[mlb]---- Checkout Transparente------------ ----[mla, mlm, mlu, mco, mlc, mpe]---- Checkout API ------------ oferece a oportunidade de configurar pagamentos 3DS de duas maneiras diferentes:
 * **Integrando a autenticação 3DS na criação de um pagamento:** o protocolo será executado como parte do processamento do pagamento.  
 * **Realizando  previamente a  autenticação 3DS por meio de um provedor de MPI externo:** os pagamentos 3DS serão gerados ao reportar dados previamente validados através de um fluxo externo, otimizando assim o processo de criação de pagamentos, conforme mostrado no diagrama abaixo.

![Fluxo de autenticação 3DS externo](/images/api/3ds-external-mpi-pt.png)

Caso queira integrar o 3DS na hora de criar um pagamento, acesse [nossa documentação](/developers/pt/docs/checkout-api/how-tos/integrate-3ds). 

Se, em vez disso, você deseja integrar o 3DS com um MPI externo com ----[mlb]---- Checkout Transparente------------ ----[mla, mlm, mlu, mco, mlc, mpe]---- Checkout API ------------, siga as etapas listadas abaixo.

## 1. Autenticar a transação
Para criar pagamentos 3DS utilizando um MPI externo, **é necessário autenticar a transação antes de criar o pagamento**. Essa autenticação pode ser realizada através de  qualquer provedor de MPI de sua escolha, fora do ambiente do Mercado Pago.

Esta autenticação devolverá uma série de dados, como um criptograma ou o identificador único da transação atribuído pelo 3DS, que deverá ser incluído no próximo passo.


> WARNING
>
> Importante
>
> Tenha em mente que se a transação não for autenticada corretamente, o pagamento será rejeitado pelo banco emissor do cartão. Por esse motivo, garanta que todas as informações solicitadas pelo seu provedor foram incluídas de forma adequada, e **informe que esta transação será processada pelo Mercado Pago**. Se você tiver dúvidas sobre esse processo, entre em contato com seu representante comercial ou de integrações.


## 2. Criar pagamento previamente autenticado

Utilize os parâmetros retornados pelo provedor MPI externo na etapa anterior para criar um pagamento. Isso deve ser feito incorporando o novo objeto `payment_method.data.authentication` ao fluxo usual, que conterá os valores recebidos durante a autenticação. 

Para isso, envie um **POST** com os novos atributos necessários ao endpoint [/v1/payments](/developers/pt/reference/payments/_payments/post) e execute a requisição ou, se preferir, envie as informações utilizando nossos SDKs. Veja a descrição detalhada desses novos campos na tabela abaixo.

[[[
```php
<?php
  use MercadoPago\Client\Payment\PaymentClient;
  MercadoPagoConfig::setAccessToken("YOUR_ACCESS_TOKEN");

  $client = new PaymentClient();
  $request_options = new RequestOptions();
  $request_options->setCustomHeaders(["X-Idempotency-Key: <SOME_UNIQUE_VALUE>"]);

  $payment = $client->create([
    "transaction_amount" => <TRANSACTION_AMOUNT>,
    "token" => "CARD_TOKEN",
    "description" => "<DESCRIPTION>",
    "installments" => <INSTALLMENTS_NUMBER>,
    "payment_method_id" => "<PAYMENT_METHOD_ID>",
    "issuer_id" => "<ISSUER_ID>",
    "payer" => [
      "email" => $_POST['email']
    ],
    "payment_method" => [
      "type" => 'credit_card',
      "data" => [
// atributos correspondentes à autenticação
        "authentication"  => [
        "type" => 'external_threeds',
        "cryptogram" => '<<String>>',
        "three_ds_server_trans_id" => '<<String>>',
        "eci" => '<<String>>',
        "ds_trans_id" => '<<String>>',
        "acs_trans_id" => '<<String>>',
        "three_ds_version" => '<<String>>',
        "authentication_status" => '<<String>>',
      ]
    ]
  ], $request_options);
  echo implode($payment);
?>
```
```java
Map<String, String> customHeaders = new HashMap<>();
    customHeaders.put("x-idempotency-key", <SOME_UNIQUE_VALUE>);
MPRequestOptions requestOptions = MPRequestOptions.builder()
    .customHeaders(customHeaders).build();
MercadoPagoConfig.setAccessToken("<ENV_ACCESS_TOKEN>");

    PaymentClient client = new PaymentClient();
// atributos correspondentes à autenticação
    PaymentAuthenticationRequest authentication = 
PaymentAuthenticationRequest.builder()
        .type("external_threeds")
        .cryptogram("<<String>>")
        .threeDsServerTransId("<<String>>")
        .eci("<<String>>")
        .dsTransId("<<String>>")
        .acsTransId("<<String>>")
        .threeDsVersion("<<String>>")
        .authenticationStatus("<<String>>")
        .build();
PaymentDataRequest data = PaymentDataRequest.builder()
        .authentication(authentication).build();
PaymentMethodRequest paymentMethod = PaymentMethodRequest
        .builder().data(data).type("credit_card").build();

PaymentCreateRequest createRequest =
    PaymentCreateRequest.builder()
        .transactionAmount(new BigDecimal(<TRANSACTION_AMOUNT>))
        .token("<CARD_TOKEN>")
        .description("<DESCRIPTION>")
        .installments(<INSTALLLMENTS_NUMBER>)
        .paymentMethodId("<PAYMENT_METHOD_ID>")
        .payer(PaymentPayerRequest.builder().email("<BUYER_EMAIL>")
             .build())
        .paymentMethod(paymentMethod)
        .build();

client.create(createRequest, requestOptions);
```
```csharp
using MercadoPago.Config;
using MercadoPago.Client.Payment;
using MercadoPago.Resource.Payment;
MercadoPagoConfig.AccessToken = "<ENV_ACCESS_TOKEN>";

var requestOptions = new RequestOptions();
requestOptions.CustomHeaders.Add("x-idempotency-key", "<SOME_UNIQUE_VALUE>");

var request = new PaymentCreateRequest
{
    TransactionAmount = <TRANSACTION_AMOUNT>,
    Token = "<CARD_TOKEN>",
    Description = "<DESCRIPTION>",
    Installments = <INSTALLLMENTS_NUMBER>,
    Payer = new PaymentPayerRequest
    {
        Email = "<BUYER_EMAIL>",
    },
    PaymentMethodRequest = new PaymentMethodRequest
    {
        Type = "credit_card",
        Data = new PaymentDataRequest

// atributos correspondentes à autenticação
        {
            Authentication = new PaymentAuthenticationRequest
            {
                Type = "external_threeds",
                Cryptogram = "<<String>>",
                ThreeDsServerTransId = "<<String>>",
                Eci = "<<String>>",
                DsTransId = "<<String>>",
                AcsTransId =  "<<String>>",
                ThreeDsVersion = "<<String>>",
                AuthenticationStatus = "<<String>>"
            }
        }
    }
};
var client = new PaymentClient();
Payment payment = await client.CreateAsync(request, requestOptions);
```
```node
import { MercadoPagoConfig, Payment } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: '<ENV_ACCESS_TOKEN>' });
const payment = new Payment(client);

const body = {
  transaction_amount: <TRANSACTION_AMOUNT>,
  token: '<CARD_TOKEN>',
  description:  '<DESCRIPTION>',
  installments: <INSTALLMENTS_NUMBER>,
  payment_method_id: '<PAYMENT_METHOD_ID>',
  issuer_id: '<ISSUER_ID>',
  payer: {
    email: '<BUYER_EMAIL>',
  },
  payment_method: {
    type: 'credit_card',
    data: {
// atributos correspondentes à autenticação
      authentication: {
        type: 'external_threeds',
        cryptogram: '<<String>>',
        three_ds_server_trans_id: '<<String>>',
        eci: '<<String>>',
        ds_trans_id: '<<String>>',
        acs_trans_id: '<<String>>',
        three_ds_version: '<<String>>',
        authentication_status: '<<String>>',
      }
    }
  }
}
payment.create({ body: body, requestOptions: { idempotencyKey: '<SOME_UNIQUE_VALUE>' } }).then(console.log).catch(console.log);
```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('<ENV_ACCESS_TOKEN>')

custom_headers = {
 'x-idempotency-key': '<SOME_UNIQUE_VALUE>'
}

custom_request_options = Mercadopago::RequestOptions.new(custom_headers: custom_headers)

payment_request = {
  token: '<CARD_TOKEN>',
  installments: <INSTALLLMENTS_NUMBER>,
  transaction_amount: <TRANSACTION_AMOUNT>,
  description: '<DESCRIPTION>',
  payer: {
    email: '<BUYER_EMAIL>',
  },
  payment_method: {
    type: 'credit_card',
    data: {
// atributos correspondentes à autenticação
      authentication: {
        type: 'external_threeds',
        cryptogram: '<<String>>',
        three_ds_server_trans_id: '<<String>>',
        eci: '<<String>>',
        ds_trans_id: '<<String>>',
        acs_trans_id: '<<String>>',
        three_ds_version: '<<String>>',
        authentication_status: '<<String>>'
      }
    }
  }
}
payment_response = sdk.payment.create(payment_request,
                                      custom_request_options)

payment = payment_response[:response]

```
```python
import mercadopago
sdk = mercadopago.SDK("<ENV_ACCESS_TOKEN>")

request_options = mercadopago.config.RequestOptions()
request_options.custom_headers = {
    'x-idempotency-key': '<SOME_UNIQUE_VALUE>'
}

payment_data = {
    "transaction_amount": <TRANSACTION_AMOUNT>,
    "token": "<CARD_TOKEN>",
    "description": "<DESCRIPTION>",
    "installments": <INSTALLLMENTS_NUMBER>,
    "payer": {
        "email": "<BUYER_EMAIL>",
    },
    "payment_method": {
        "type": "credit_card",
        "data": {
// atributos correspondentes à autenticação
            "authentication": {
                "type": "external_threeds",
                "cryptogram": "<<String>>",
                "three_ds_server_trans_id": "<<String>>",
                "eci": "<<String>>",
                "ds_trans_id": "<<String>>",
                "acs_trans_id": "<<String>>",
                "three_ds_version": "<<String>>",
                "authentication_status": "<<String>>"
            }
        }
    }
}

payment_response = sdk.payment().create(payment_data,
                                        request_options)

payment = payment_response["response"]
```
```curl
curl --location 'https://api.mercadopago.com/v1/payments' \
--header 'x-idempotency-key: {IDEMPOTENCY_KEY} \
--header 'Authorization: Bearer {ACCESS_TOKEN}' \
--header 'Content-Type: application/json' \
--data-raw '{
   "description": "{PAYMENT_DESCRIPTION}",
   "installments": 1,
   "payer": {
       "first_name": "{FIRST_NAME}",
       "last_name": "{LAST_NAME}",
       "address": {},
       "identification": {
           "number": "{IDENTIFICATION_NUMBER}",
           "type": "{IDENTIFICATION_TYPE}"
       },
       "email": "{EMAIL}"
   },
   "payment_method_id": "{PAYMENT_METHOD_ID}",
   "token": "{CARD_TOKEN}"
// atributos correspondentes à autenticação
   "payment_method": {
      "type": "credit_card",
      "data": {
         "authentication": {
            "type": "external_threeds",
            "cryptogram": "<<String>>",
            "three_ds_server_trans_id": "<<String>>",
            "eci": "<<String>>",
            "ds_trans_id": "<<String>>",
            "acs_trans_id": "<<String>>",
            "three_ds_version": "<<String>>",
            "authentication_status": "<<String>>"
         }
      }
   },
   "statement_descriptor": "{STATEMENT_DESCRIPTOR}",
   "transaction_amount": {AMOUNT}
}'

```
]]]


| Atributo | Obrigatório/opcional | Descrição | Exemplo |
|---|---|---|---|
| `type` | Obrigatório | Indica que a transação foi previamente autorizada por um MPI externo. O valor deve ser `external_threeds`. | `external_threeds` |
| `cryptogram` | Obrigatório  | O criptograma é o valor específico do sistema de pagamento, proporcionado como parte do registro Access Control Server (ACS) para cada Directory Server (DS) admitido. | `AJkBAScICQBBBDIASECYdYg3CXg=` |
| `three_ds_server_trans_id` | Opcional | Identificador único universal de transação, atribuído pelo Servidor 3DS para identificá-la. | `c20b7628-2061-434b-8ad4-1daff5a272f9` |
| `eci` | Obrigatório | É o Indicador de Comércio Electrônico, um valor específico do Sistema de Pagamentos proporcionado por ACS para indicar a tentativa de autenticação do Titular do Cartão. |  `00` |
| `ds_trans_id` | Obrigatório | Identificador único universal de transação, atribuído por DS para identificá-la. | `aba1d1a1-1cec-1f11-1fda-1e1c01bf101a` |
| `acs_trans_id` | Opcional | Identificador único universal de transação, atribuído por ACS para identificá-la. | `1d10bbb1-1dbb-1c11-a111-1111f1111ad1` |
| `three_ds_version` | Obrigatório | Identificador da versão de 3DS. | `2.2.0` |
| `authentication_status` | Opcional | Status de autenticação, conhecido como `transStatus` no protocolo 3DS. Deve ser `Y`, para casos de resposta de transação totalmente autenticada, ou `A` para casos de resposta de tentativa de autenticação.  | `Y` |

### Possíveis respostas

Se a requisição estiver correta, você receberá uma resposta semelhante à seguinte, com `status=approved`, e `status_detail=accredited`, que indicará que a transação foi aprovada.

```json
{
    "send_advice": false,
    "id": 69306088555,
    "date_created": "2023-12-26T18:04:10.711-04:00",
    "date_approved": "2023-12-26T18:04:11.351-04:00",
    "date_last_updated": "2023-12-26T18:04:11.351-04:00",
    "money_release_date": "2023-12-26T18:04:11.351-04:00",
    "collector_id": 219830831,
    "operation_type": "regular_payment",
    "issuer_id": "205",
    "payment_method_id": "visa",
    "payment_type_id": "credit_card",
    "status": "approved",
    "status_detail": "accredited",
    "currency_id": "COP",
    "description": "Payment test",
    "live_mode": true,
    "payer": {
        "phone": {},
        "id": "1608786725",
        "email": "test_user_11653412@testuser.com",
        "identification": {
            "number": "123456767",
            "type": "CC"
        }
    },
    "order": {},
    "transaction_amount": 1234.56,
    "transaction_amount_refunded": 0,
    "coupon_amount": 0,
    "transaction_details": {
        "acquirer_reference": null,
        "external_resource_url": null,
        "financial_institution": null,
        "installment_amount": 1234.56,
        "net_received_amount": 234.17,
        "overpaid_amount": 0,
        "payable_deferral_period": null,
        "payment_method_reference_id": null,
        "total_paid_amount": 1234.56
    },
    "fee_details": [
        {
            "type": "mercadopago_fee",
            "fee_payer": "collector",
            "amount": 1000.39
        }
    ],
    "captured": true,
    "binary_mode": true,
    "statement_descriptor": "Mercadopago*fake",
    "installments": 1,
    "card": {
        "first_six_digits": "401354",
        "last_four_digits": "6260",
        "expiration_month": 11,
        "expiration_year": 2025,
        "date_last_updated": "2023-12-26T18:04:10.000-04:00",
        "date_created": "2023-12-26T18:04:10.000-04:00",
        "cardholder": {
            "identification": {
                "number": "123456767",
                "type": "CC"
            },
            "name": "APRO"
        }
    },
    "refunds": [],
    "additional_info": {
        "authentication_code": null,
        "available_balance": null,
        "nsu_processadora": null
    },
    "processing_mode": "aggregator",
    "taxes_amount": 0,
    "shipping_amount": 0,
    "is_test": false,
    "authorization_code": "301299"
}
```

O status `rejected`, por outro lado, indicará que a transação foi rejeitada. Veja mais detalhes sobre o motivo de rejeição de uma cobrança em [Resultados da criação de uma cobrança](/developers/pt/docs/checkout-api/response-handling/collection-results).