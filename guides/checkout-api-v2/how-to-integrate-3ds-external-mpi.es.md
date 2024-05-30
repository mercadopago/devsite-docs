# Cómo integrar 3DS con MPI externo con ----[mlb]---- Checkout Transparente------------ ----[mla, mlm, mlu, mco, mlc, mpe]---- Checkout API ------------

La [autenticación 3DS](/developers/es/docs/checkout-api/how-tos/improve-payment-approval/3ds), o 3-D Secure, es un protocolo desarrollado para aumentar la seguridad en las transacciones en línea con tarjetas de débito o crédito. Este protocolo agrega una capa extra de verificación, lo que permite que tanto la entidad emisora de la tarjeta, como el banco al que pertenece, autentiquen la transacción previo a su conclusión.

----[mlb]---- Checkout Transparente------------ ----[mla, mlm, mlu, mco, mlc, mpe]---- Checkout API ------------ ofrece la posibilidad de configurar pagos 3DS de dos formas distintas:
 * **Integrando la autenticación 3DS al momento de crear un pago:** el protocolo se ejecutará como parte del procesamiento del pago. 
 * **Realizando previamente la autenticación 3DS a través de un proveedor MPI externo:** se generarán pagos 3DS informando los datos ya autenticados a través de un flujo externo, optimizando el proceso de creación de pagos, tal como se muestra en el diagrama a continuación.

![Flujo de autenticación 3DS externo](/images/api/3ds-external-mpi-es.png)

Si deseas integrar 3DS al momento de crear un pago, accede a [nuestra documentación](/developers/es/docs/checkout-api/how-tos/integrate-3ds). 

Si, en cambio, quieres integrar 3DS con un MPI externo con ----[mlb]---- Checkout Transparente------------ ----[mla, mlm, mlu, mco, mlc, mpe]---- Checkout API ------------, sigue los pasos enumerados a continuación.

## 1. Autenticar la transacción
Para crear pagos 3DS con un MPI externo, debes **autenticar la transacción previo a crear el pago**. Esto puedes hacerlo a través de cualquier proveedor MPI que elijas, y será realizado fuera del entorno de Mercado Pago. 

Esta autenticación te devolverá una serie de datos, como un criptograma o el identificador único de la transacción atribuído por 3DS, que deberás incluir en el siguiente paso. 

> WARNING
>
> Importante
>
> Ten en cuenta que, si la transacción no es correctamente autenticada, el pago será rechazado por el banco emisor de la tarjeta. Por esto, debes cuidar de  incluir toda la información solicitada por tu proveedor de manera adecuada, e **informar que esa transacción será procesada por Mercado Pago**. Si tienes dudas sobre este proceso, ponte en contacto con tu referente de Negocio o Integraciones.

## 2. Crear pago previamente autenticado

Utiliza los parámetros devueltos por el proveedor MPI externo en el paso anterior para crear un pago. Esto debe hacerse incorporando al flujo habitual el nuevo objeto `payment_method.data.authentication`, que contendrá los valores recibidos durante la autenticación.

Para eso, envía un **POST** con los nuevos atributos requeridos al endpoint [/v1/payments](/developers/es/reference/payments/_payments/post) y ejecuta la solicitud o, si lo prefieres, envía la información utilizando nuestros SDKs. Puedes ver en detalle la descripción de estos nuevos campos en la tabla debajo.

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
// atributos correspondientes a la autenticación
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
// atributos correspondientes a la autenticación
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

// atributos correspondientes a la autenticación
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
// atributos correspondientes a la autenticación
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
# atributos correspondientes a la autenticación
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
# atributos correspondientes a la autenticación
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


| Atributo | Obligatorio/opcional | Descripción | Ejemplo |
|---|---|---|---|
| `type` | Obligatorio | Indica que la transacción fue previamente autorizada por un MPI externo. El valor debe ser `external_threeds`. | `external_threeds` |
| `cryptogram` | Obligatorio  | El criptograma es el valor específico del sistema de pago, proporcionado como parte del registro Access Control Server (ACS) para cada Directory Server (DS) admitido. | `AJkBAScICQBBBDIASECYdYg3CXg=` |
| `three_ds_server_trans_id` | Opcional | Identificador único universal de la transacción,  atribuido por el Servidor 3DS para identificarla. | `c20b7628-2061-434b-8ad4-1daff5a272f9` |
| `eci` | Obligatorio | Es el Indicador de Comercio Electrónico, un valor específico proporcionado por ACS para indicar el intento de autenticación del titular de la tarjeta. |  `00` |
| `ds_trans_id` | Obligatorio | Identificador único universal de la transacción,  atribuido por DS para identificarla. | `aba1d1a1-1cec-1f11-1fda-1e1c01bf101a` |
| `acs_trans_id` | Opcional | Identificador único universal de la transacción,  atribuido por ACS para identificarla. | `1d10bbb1-1dbb-1c11-a111-1111f1111ad1` |
| `three_ds_version` | Obligatorio | Identificador de la versión de 3DS. | `2.2.0` |
| `authentication_status` | Opcional | Estado de la autenticación, conocido como `transStatus` en el protocolo 3DS. Debe ser `Y`, para los casos de respuesta de transacción totalmente autenticada, o `A`, para los casos de respuesta de intento de autenticación.  | `Y` |

### Posibles respuestas

Si la solicitud fue correcta, recibirás una respuesta similar a la siguiente, con `status=approved`, y un `status_detail=accredited`, que te indicará que la transacción fue aprobada.

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

El status `rejected`, en cambio, indicará que la transacción fue rechazada. Puedes verificar los motivos de rechazo ante la creación de un cobro accediendo a [nuestra documentación](/developers/es/docs/checkout-api/response-handling/collection-results).

