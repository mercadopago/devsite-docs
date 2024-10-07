# Mensajería de pagos automaticos

La Mensajería de Pagos automaticos, o **Mensajería de suscripción**, involucra información de los pagos recurrentes (ID de pagos anteriores, ID de la suscripción, número de veces que se generará el pago y POI con `type = SUBSCRIPTIONS`) que se envía a la [API de Pagos](/developers/es/reference/payments/_payments/post) con el objetivo de aumentar la tasa de aprobación para estos tipos de pagos.

> WARNING
>
> Importante
>
> En el caso de operaciones con pagos recurrentes de la marcas, será necesario enviar el identificador de transacción de la tarjeta (TID) a las transacciones de mensajería. Para más información sobre cómo enviar el TID, acceda a la documentación [Network Transaction ID - TID](/developers/es/docs/automatic-payments/recurring-charges/network-transaction-id).

## Configuración

Ve a continuación cómo enviar la información de los pagos recurrentes a la [solicitud de crear pago](/developers/es/reference/payments/_payments/post).

### Procesar el primer pago

Para el **primer pago** en la mensajería de pagos automáticos, envíe la información a continuación al endpoint [v1/payments](/developers/es/reference/payments/_payments/post), a través del parámetro `point_of_interaction`, o utilice uno de nuestros SDKs abajo.

----[mla, mlb, mlu, mco, mlc, mpe]----

- Indicar que el tipo es suscripción (`type = SUBSCRIPTIONS`);
- Indicar que es la primera transacción (`first_time_use = TRUE`);
- Indicar cuál es el `subscription_id` del pago (sugerimos usar el `collector` + un `ID` de suscripción único por usuario);
- Número de cuotas (`subscription_sequence`);
- Periodicidad de los cobros (`invoice_period`);
- Fecha del cobro (`billing_date`).

------------
----[mlm]----

- Indicar que el tipo es suscripción (`type = SUBSCRIPTIONS`);
- Indicar que es la primera transacción (`first_time_use = TRUE`);
- Indicar cuál es el `subscription_id` del pago (sugerimos usar el `collector` + un `ID` de suscripción único por usuario);
- Número de meses (`subscription_sequence`);
- Periodicidad de los cobros (`invoice_period`);
- Fecha del cobro (`billing_date`).

------------

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

| Parámetro  | Tipo  | Descripción  | Ejemplo |
| --- | --- | --- | --- |
| type | string | Indica el tipo de _Point of Interaction_ (POI) | SUBSCRIPTIONS |
| first_time_use| boolean | Indica si es el primer pago de la suscripción | 'true' o 'false' |
| subscription_id | string | Identificador de la suscripción | "COLLECTORPADRE-SUBSCRIPCION_ID" |
| subscription_sequence.number |integer | Indica el número del pago subsecuente  | 3 |
| subscription_sequence.total |integer| Indica el total de la suscripción. Para suscripciones permanentes setear en 'null'| 12 |
| invoice_period.period |integer | Indica la frecuencia del pago recurrente | 1 |
| invoice_period.type | string | Indica el tipo de periodo del pago recurrente| daily, monthly ou yearly |
| user_present | boolean | Indica si hubo intervención del usuario en el momento en que se creó el pago |'true' o 'false' |
| billing_date | string | Fecha de facturación | 2024-03-16 |
| payment_reference.id | string | ID del pago de validación ok | 20792195335 |
| transaction_amount | number | Monto del pago |100 |
| token | string | Token de tarjeta | 12346622341 |
| description | string | Descripción de pago | "Pago de prueba" |
| payment_method_id | string | Indica el identificador del método de pago seleccionado para realizar el pago | master |
| payer.email | string | Email del pagador | buyer@examplemail.com |
| payer.type | string | Tipo de identificación del pagador asociado | 'guest' o 'customer' |

Ejemplo:

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

### Procesar pagos subsecuentes

Para los **pagos subsecuentes** en la mensajería pagos automáticos, reenvíe la información del primer pago (**cambiando los datos presentados a continuación**) al endpoint [v1/payments](/developers/es/reference/payments/_payments/post), a través del parámetro `point_of_interaction`, o utilice uno de nuestros SDKs mencionados anteriormente.


----[mla, mlb, mlu, mco, mlc, mpe]----

- Indicar que **no es la primera** transacción (`first_time_use = FALSE`);
- Indicar cuál es el `subscription_id` del pago (sugerimos usar el `collector` + un `ID` de suscripción único por usuario);
- Número de la cuota actual (`subscription_sequence = number`);
- Número total de cuotas (`subscription_sequence = total`);
- Periodicidad de los cobros (`invoice_period`);
- Fecha del cobro (`billing_date`);
- Usuario presente al realizar el pago (`user_present`);
- Número de referencia del primer pago (`payment_reference`).

------------
----[mlm]----

- Indicar que **no es la primera** transacción (`first_time_use = FALSE`);
- Indicar cuál es el `subscription_id` del pago (sugerimos usar el `collector` + un `ID` de suscripción único por usuario);
- Número de la cuota actual (`subscription_sequence = number`);
- Número total de meses (`subscription_sequence = total`);
- Periodicidad de los cobros (`invoice_period`);
- Fecha del cobro (`billing_date`);
- Usuario presente al realizar el pago (`user_present`);
- Número de referencia del primer pago (`payment_reference`).

------------

> WARNING
>
> Atención
> 
> No `payment_reference.id` deverá permanecer o ID do primeiro pagamento da sequência.

Ejemplo:

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