> SERVER_SIDE
>
> h1
>
> Pix

Al finalizar la inclusión del formulario de pago, es necesario enviar el email del comprador, el tipo y número de documento, el medio de pago utilizado (pix) y el detalle del importe.

> NOTE
>
> Importante
> 
> Al ejecutar las APIs mencionadas en esta documentación, es posible que encuentre el atributo `X-Idempotency-Key`. Completarlo es crucial para asegurar la ejecución y reejecución de las solicitudes sin situaciones no deseadas, como pagos duplicados, por ejemplo. 

Para configurar los pagos con Pix, envía un **POST** al endpoint [/v1/payments](/developers/es/reference/payments/_payments/post) y ejecuta la solicitud o, si lo prefieres, realiza la solicitud utilizando nuestros SDKs.

[[[
```php
<?php
  use MercadoPago\Client\Payment\PaymentClient;
  use MercadoPago\Client\Common\RequestOptions;
  use MercadoPago\MercadoPagoConfig;

  MercadoPagoConfig::setAccessToken("YOUR_ACCESS_TOKEN");

  $client = new PaymentClient();
  $request_options = new RequestOptions();
  $request_options->setCustomHeaders(["X-Idempotency-Key: <SOME_UNIQUE_VALUE>"]);

  $payment = $client->create([
 "transaction_amount" => (float) $_POST['<TRANSACTION_AMOUNT>'],
    "payment_method_id" => $_POST['<PAYMENT_METHOD_ID>'],
    "payer" => [
      "email" => $_POST['<EMAIL>']
    ]
  ], $request_options);
  echo implode($payment);
?>
```
```node
payment.create({ body: {
	transaction_amount: 12.34,
	description: '<DESCRIPTION>',
	payment_method_id: 'pix',
	payer: {
		email: '<EMAIL>'
	}}, requestOptions: { idempotencyKey: '<SOME_UNIQUE_VALUE>' } 
}).then(console.log).catch(console.log);
```
```java
Map<String, String> customHeaders = new HashMap<>();
    customHeaders.put("x-idempotency-key", <SOME_UNIQUE_VALUE>);
 
MPRequestOptions requestOptions = MPRequestOptions.builder()
    .customHeaders(customHeaders)
    .build();

MercadoPagoConfig.setAccessToken("ENV_ACCESS_TOKEN");

PaymentClient client = new PaymentClient();

PaymentCreateRequest paymentCreateRequest =
   PaymentCreateRequest.builder()
       .transactionAmount(new BigDecimal("100"))
       .paymentMethodId("pix")
       .payer(
           PaymentPayerRequest.builder()
               .email("PAYER_EMAIL_HERE")
               .build())
       .build();

client.create(paymentCreateRequest, requestOptions);
```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

custom_headers = {
 'x-idempotency-key': '<SOME_UNIQUE_VALUE>'
}

custom_request_options = Mercadopago::RequestOptions.new(custom_headers: custom_headers)

payment_request = {
  transaction_amount: 100,
  payment_method_id: 'pix',
  payer: {
    email: 'PAYER_EMAIL_HERE',
  }
}

payment_response = sdk.payment.create(payment_request, custom_request_options)
payment = payment_response[:response]

```
```csharp

using MercadoPago.Config;
using MercadoPago.Client.Common;
using MercadoPago.Client.Payment;
using MercadoPago.Resource.Payment;

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var requestOptions = new RequestOptions();
requestOptions.CustomHeaders.Add("x-idempotency-key", "<SOME_UNIQUE_VALUE>");

var request = new PaymentCreateRequest
{
    TransactionAmount = 105,
    PaymentMethodId = "pix",
    Payer = new PaymentPayerRequest
    {
        Email = "PAYER_EMAIL_HERE",
    },
};

var client = new PaymentClient();
Payment payment = await client.CreateAsync(request, requestOptions);

```
```python
import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

request_options = mercadopago.config.RequestOptions()
request_options.custom_headers = {
    'x-idempotency-key': '<SOME_UNIQUE_VALUE>'
}

payment_data = {
    "transaction_amount": 100,
    "payment_method_id": "pix",
    "payer": {
        "email": "PAYER_EMAIL_HERE",
    }
}

payment_response = sdk.payment().create(payment_data, request_options)
payment = payment_response["response"]
```
```curl
curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    -H 'X-Idempotency-Key: SOME_UNIQUE_VALUE' \
    'https://api.mercadopago.com/v1/payments' \
    -d '{
      "transaction_amount": 100,
      "payment_method_id": "pix",
      "payer": {
        "email": "PAYER_EMAIL_HERE"
      }
    }'
```
]]]

La respuesta mostrará el estado del pago pendiente y toda la información que necesitas mostrar al comprador. El valor `transaction_data` devolverá los datos del código QR.

```json
{
  ...,
  "id": 5466310457,
  "status": "pending",
  "status_detail": "pending_waiting_transfer",
  ...,
  "transaction_details": {
      "net_received_amount": 0,
      "total_paid_amount": 100,
      "overpaid_amount": 0,
      "external_resource_url": null,
      "installment_amount": 0,
      "financial_institution": null
  },
  "point_of_interaction": {
      "type": "PIX",
      "sub_type": null,
      "application_data": {
        "name": "NAME_SDK",
        "version": "VERSION_NUMBER"
      },
      "transaction_data": {
        "qr_code_base64": "iVBORw0KGgoAAAANSUhEUgAABRQAAAUUCAYAAACu5p7oAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAIABJREFUeJzs2luO3LiWQNFmI+Y/Zd6vRt36KGNXi7ZOBtcagHD4kNLeiLX33v8DAAAAABD879sDAAAAAAA/h6AIAAAAAGSCIgAAAACQCYoAAAAAQCYoAgAAAACZoAgAAAAAZIIiAAAAAJAJigAAAABAJigCAAAAAJmgCAAAAABkgiIAAAAAkAmKAAAAAEAmKAIAAAAAmaAIAAAAAGSCIgAAAACQCYoAAAAAQCYoAgAAAACZoAgAAAAAZIIiAAAAAJAJigAAAABAJigCA...",
        "qr_code": "00020126600014br.gov.bcb.pix0117john@yourdomain.com0217additional data520400005303986540510.005802BR5913Maria Silva6008Brasilia62070503***6304E2CA",
        "ticket_url": "https://www.mercadopago.com.br/payments/123456789/ticket?caller_id=123456&hash=123e4567-e89b-12d3-a456-426655440000"
      }
  }
  ...,
}
```

## Mostrar estado de pago

Después de crear el pago desde backend con el SDK de Mercado Pago, use el **id** recibido en la respuesta para crear una instancia del Status Screen Brick y mostrárselo al comprador.

Además de mostrar el estado del pago, Status Screen Brick también mostrará el código Pix para copiar y pegar y el QR Code para que el comprador lo escanee y pague. Descubra lo sencillo que es integrar [haga clic aquí](/developers/es/docs/checkout-bricks/status-screen-brick/configure-integration).

> WARNING
>
> Importante
>
> Si usó las credenciales de producción de un usuario de prueba para generar el pago Pix, se producirá un error al hacer clic en el botón que lo lleva a la página del QR Code. Para verlo correctamente, simplemente elimine el fragmento `/sandbox` de la URL de la página abierta.

<center>

![payment-submission-pix-status](checkout-bricks/payment-submission-pix-status-es.jpg)

</center>