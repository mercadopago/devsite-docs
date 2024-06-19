# Mensageria de pagamentos automáticos

A mensageria de pagamentos automáticos, ou **Mensageria de subscrição**, envolve informações dos pagamentos recorrentes (ID de pagamentos anteriores, ID da subscrição, número de vezes que o pagamento será gerado e POI com `type = SUBSCRIPTIONS`) que são enviadas para a [API de Pagamentos](/developers/pt/reference/payments/_payments/post) com o intuito de aumentar a taxa de aprovação para pagamentos deste tipo.

> WARNING
>
> Importante
>
> No caso de operações com pagamentos recorrentes da bandeira _Visa_, será necessário enviar o identificador de transação da bandeira (TID) às transações de mensageria. Para mais informações sobe como enviar o TID, acesse a documentação [Network Transaction ID - TID](/developers/pt/docs/automatic-payments/recurring-charges/network-transaction-id).

## Configuração

Veja abaixo como enviar as informações dos pagamentos recorrentes à [requisição de criar pagamento](/developers/pt/reference/payments/_payments/post).

### Processar primeiro pagamento

Para o **primeiro pagamento** na mensageria de pagamentos automáticos, envie as informações abaixo ao endpoint [v1/payments](/developers/pt/reference/payments/_payments/post), através do parâmetro `point_of_interaction`, ou utilize um dos nossos SDKs abaixo.

- Indicar que o tipo é subscrição (`type = SUBSCRIPTIONS`);
- Indicar que é a primeira transação (`first_time_use = TRUE`);
- Indicar qual é o `subscription_id` do pagamento (sugerimos colocar o `collector` + um `ID` de subscrição único por usuário);
- Número de parcelas (`subscription_sequence`);
- Periodicidade das cobranças (`invoice_period`);
- Data da cobrança (`billing_date`).

[[[
```php
<?php
use MercadoPago\Client\Payment\PaymentClient;
use MercadoPago\MercadoPagoConfig;


MercadoPagoConfig::setAccessToken("ENV_ACCESS_TOKEN");

$customer_client = new CustomerClient();
$cards = $client->list("customer_id");

$client = new PaymentClient();
$request_options = new RequestOptions();
$request_options->setCustomHeaders(["X-Idempotency-Key: <SOME_UNIQUE_VALUE>"]);

$payment = $client->create([
    "transaction_amount" => (float) $_POST['transactionAmount'],
    "token" => $_POST['token'],
    "description" => $_POST['description'],
    "installments" => (int) $_POST['installments'],
    "payment_method_id" => $_POST['paymentMethodId'],
    "payer" => [
        "id" => $_POST['id'],
        "type" => $_POST['type']
    ],
    "point_of_interaction" => [
    "type"  => $_POST['type'],
    "transaction_data"  => [
        "first_time_use"  => $_POST['first_time_use'],
        "subscription_id"  => "COLLECTORPADRE-SUBSCRIPCION_ID",
        "subscription_sequence" => [
            "number"  => (int) $_POST['number'],
            "total"  => (int) $_POST['total']
        ],
        "invoice_period"  => [
            "period"  => (int) $_POST['period'],
            "type" => $_POST['type']
        ],
        "billing_date" => $_POST['billing_date'],
    ]
]

], $request_options);
echo implode($payment);
?>
```
```node
import { Payment, MercadoPagoConfig } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: '<ENV_ACCESS_TOKEN>' });
const customerClient = new Customer(client);

customerClient.listCards({ customerId: '<CUSTOMER_ID>' })
    .then((result) => {

        const payment = new Payment(client);

        const body = {
            transaction_amount: req.transaction_amount,
            token: req.token,
            description: req.description,
            installments: req.installments,
            payment_method_id: req.payment_method_id,
            payer: {
                id: req.id,
                type: req.type
            },
            point_of_interaction: {
                type: req.type,
                transaction_data: {
                    first_time_use: req.first_time_use,
                    subscription_id: req.subscription_id,
                    subscription_sequence: {
                        number: req.number,
                        total: req.total
                    },
                    invoice_period: {
                        period: req.period,
                        type: req.type
                    },
                    billing_date: req.billing_date
                }
            }

        };

        payment.create({ body: body }).then((result) => console.log(result));
    });
```
```java
Map<String, String> customHeaders = new HashMap<>();
customHeaders.put("x-idempotency-key", <SOME_UNIQUE_VALUE>);
 
MPRequestOptions requestOptions = MPRequestOptions.builder()
    .customHeaders(customHeaders)
    .build();

MercadoPagoConfig.setAccessToken("ENV_ACCESS_TOKEN");

PaymentClient client = new PaymentClient();

PaymentCreateRequest request = PaymentCreateRequest.builder()
        .transactionAmount(request.getTransactionAmount())
        .installments(request.getInstallments())
        .token(request.getToken())
        .payer(PaymentPayerRequest.builder()
                        .id(request.getPayer().getId())
                        .type(request.getPayer().getType())
                        .build())
        .pointOfInteraction(PointOfInteraction.builder()
                .type(request.getPointOfInteraction().getType())
                .transactionData(TransactionData.builder()
                        .firstTimeUse(request.getTransactionData().getFirstTimeUse())
                        .subscriptionId(request.getTransactionData().getSubscriptionId())
                        .subscriptionSequence(SubscriptionSequence.builder()
                                .number(request.getTransactionData().getSubscriptionSequence().getNumber())
                                .total(request.getTransactionData().getSubscriptionSequence().getTotal())
                                .build())
                        .invoicePeriod(InvoicePeriod.builder()
                                .period(request.getTransactionData().getInvoicePeriod().getPeriod())
                                .type(request.getTransactionData().getInvoicePeriod().getType())
                                .build())
                        .billingDate(request.getTransactionData().getBillingDate())
                        .build())
                .build())
        .build();

client.create(request);
```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

custom_headers = {
 'x-idempotency-key': '<SOME_UNIQUE_VALUE>'
}

custom_request_options = Mercadopago::RequestOptions.new(custom_headers: custom_headers)

payment_request = {
 transaction_amount: params[:transactionAmount].to_f,
 token: params[:token],
 description: params[:description],
 payment_method_id: params[:paymentMethodId],
 payer: {
   id: params[:id],
   type: params[:type]
 },
 point_of_interaction: {
    type: params[:type],
    transaction_data: {
      first_time_use: params[:first_time_use],
      subscription_id: params[:subscription_id],
      subscription_sequence: {
        number: params[:number],
        total: params[:total]
      },
      invoice_period: {
        period: params[:period],
        type: params[:type]
      },
      billing_date: params[:billing_date],
    }
}
 
payment_response = sdk.payment.create(payment_request, custom_request_options)
payment = payment_response[:response]
```
```csharp
using MercadoPago.Config;
using MercadoPago.Client.Payment;
using MercadoPago.Resource.Payment;

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var requestOptions = new RequestOptions();
requestOptions.CustomHeaders.Add("x-idempotency-key", "<SOME_UNIQUE_VALUE>");

var request = new PaymentCreateRequest
{
    TransactionAmount = decimal.Parse(Request["transactionAmount"]),
    Token = Request["token"],
    Description = Request["description"],
    PaymentMethodId = Request["paymentMethodId"],
    Installments = Request["installments"],
    Payer = new PaymentPayerRequest
    {
       Id = Request["id"],
       Type = Request["type"]
   },
    PointOfInteraction = new PointOfInteractionRequest
    {
         Type = Request["type"],
         TransactionData = new TransactionDataRequest
         {
              FirstTimeUse = Request["firstTimeUse"],
              SubscriptionId = Request["subscriptionId"],
              SubscriptionSequence = new SubscriptionSequenceRequest
              {
                Number = Request["number"],
                Total = Request["total"]
              },
              InvoicePeriod = new InvoicePeriodRequest
              {
                Period = Request["period"],
                Type = Request["type"]
              },
              BillingDate = Request["billingDate"]
         }
    }
};

var client = new PaymentClient();
Payment payment = await client.CreateAsync(paymentRequest, requestOptions);
```
```python
import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

request_options = mercadopago.config.RequestOptions()
request_options.custom_headers = {
    'x-idempotency-key': '<SOME_UNIQUE_VALUE>'
}

payment_data = {
   "transaction_amount": float(request.POST.get("transaction_amount")),
   "token": request.POST.get("token"),
   "description": request.POST.get("description"),
   "payment_method_id": request.POST.get("payment_method_id"),
   "payer": {
       "id": request.POST.get("id"),
       "type": request.POST.get("type")
   },
    "point_of_interaction": {
         "type": request.POST.get("type"),
         "transaction_data": {
              "first_time_use": bool(request.POST.get("first_time_use")),
              "subscription_id": request.POST.get("subscription_id"),
              "subscription_sequence": {
                "number": int(request.POST.get("number")),
                "total": int(request.POST.get("total"))
              },
              "invoice_period": {
                "period": int(request.POST.get("period")),
                "type": request.POST.get("type")
              },
              "billing_date": request.POST.get("billing_date")
         }
    }
}
```
```curl
curl --location 'https://api.mercadopago.com/v1/payments' \
--header 'Authorization: Bearer ENV_ACCESS_TOKEN' \
--header 'Content-Type: application/json' \
--data '{
    "description": "{{description}}",
    "token": "{{card_token}}",
    "payer": {
        "id": "{{customer_id}}",
        "type": "{{type}}"
    },
    "payment_method_id": "{{payment_method_id}}",
    "transaction_amount": {{transaction_amount}},
    "point_of_interaction": {
        "type": "{{type}}",
        "transaction_data": {
            "first_time_use": {{first_time_use}},
            "subscription_id": "{{subscription_id}}",
            "subscription_sequence": {
                "number": {{subscription_number}},
                "total": {{subscription_total}}
            },
            "invoice_period": {
                "period": {{invoice_period}},
                "type": "{{invoice_type}}"
            },
            "billing_date": "{{billing_date}}",
            "user_present": {{user_present}}
        }
    }
}'
```
]]]

Exemplo:

```json
{
    "payer": {...},
    "transaction_amount": 20,
    "description": "...",
    "token": "....",
    "statement_descriptor": "PRUEBA",
    "issuer_id": ...,
    "payment_method_id": "...",
    "amounts": {...},
    "installments": 1,
    "pos_id": "....",
    "external_reference": "...",
    "point_of_interaction": {
        "type": "SUBSCRIPTIONS",
        "transaction_data": {
            "first_time_use": true,
            "subscription_id": "COLLECTORPADRE-SUBSCRIPCION_ID",
            "subscription_sequence": {
                "number": 1,
                "total": 12
            },
            "invoice_period": {
                "period": 1,
                "type": "monthly"
            },
            "payment_reference": {
                "id": "20792195335"
            },
            "user_present": true/false,
            "billing_date": "2024-03-16"
        }
    }
}
```

### Processar pagamentos subsequentes 

Para os **pagamentos subsequentes** na mensageria de pagamentos automáticos, reenvie as informações do primeiro pagamento (**alterando os dados apresentados abaixo**) ao endpoint [v1/payments](/developers/pt/reference/payments/_payments/post), através do parâmetro `point_of_interaction`, ou utilize um dos nossos SDKs citados anteriormente.

- Indicar que **não é a primeira** transação (`first_time_use = FALSE`);
- Indicar qual é o `subscription_id` do pagamento (sugerimos colocar o `collector` + um `ID` de subscrição único por usuário);
- Número da parcela atual (`subscription_sequence = number`);
- Número total de parcelas (`subscription_sequence = total`);
- Periodicidade das cobranças (`invoice_period`);
- Data da cobrança (`billing_date`);
- User está presente ao realizar o pagamento (`user_present`);
- Número de referência do primeiro pagamento (`payment_reference`).

> WARNING
>
> Atenção
> 
> No `payment_reference.id` deverá permanecer o ID do primeiro pagamento da sequência.

Exemplo:

```json
{
    "payer": {...},
    "transaction_amount": 20,
    "description": "...",
    "token": "....",
    "statement_descriptor": "PRUEBA",
    "issuer_id": ...,
    "payment_method_id": "...",
    "amounts": {...},
    "installments": 1,
    "pos_id": "....",
    "external_reference": "...",
    "point_of_interaction": {
        "type": "SUBSCRIPTIONS",
        "transaction_data": {
            "first_time_use": false,
            "subscription_sequence": {
                "number": 3,
                "total": 12
            },
            "invoice_period": {
                "period": 1,
                "type": "monthly"
            },
            "payment_reference": {
                "id": "20792195335"
            },
            "user_present": true/false,
            "billing_date": "2024-03-16"
        }
    }
}
```

| Parâmetro  | Tipo  | Descrição  | Exemplo |
| --- | --- | --- | --- |
| type | string | Indica o tipo de _Point of Interaction_ (POI) | SUBSCRIPTIONS |
| first_time_use| boolean | Indica se é o primeiro pagamento da assinatura | true/false |
| subscription_id | string | Identificador de assinatura | "COLLECTORPADRE-SUBSCRIPCION_ID" |
| subscription_sequence.number |integer | Indica o número do pagamento subsequente.  | 3 |
| subscription_sequence.total |integer | Indica o total da assinatura. Para assinaturas permanentes, definir como 'null' | 12 |
| invoice_period.period |integer | Indica a frequência do pagamento recorrente | 1 |
| invoice_period.type | string | Indica o tipo de período de pagamento recorrente | daily, monthly ou yearly |
| user_present | boolean | Indica se houve intervenção do usuário no momento da criação do pagamento |true/false |
| billing_date | string | Data de cobrança | 2024-03-16 |
| payment_reference.id | string | ID do pagamento de validação ok | 20792195335 |
| transaction_amount | number | Valor do pagamento |100 |
| token | string | Token do cartão | 12346622341 |
| description | string | Descrição do pagamento | "Pagamento de teste" |
| payment_method_id | string | Indica o identificador do meio de pagamento selecionado para efetuar o pagamento | master |
| payer.email | string | E-mail do pagador | buyer@examplemail.com |
| payer.type | string | Tipo de identificação do pagador associado | guest, customer |