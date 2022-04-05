[TXTSNIPPET][/guides/snippets/test-integration/pix-intro]

Após cadastrar a chave Pix, siga a documentação para realizar a integração ou, se preferir, [veja no Github](https://github.com/mercadopago/pix-payment-sample) os exemplos de como adicionar pagamentos Pix integrando com o Checkout API. 

## Configurar pagamento com Pix

Após cadastrar a chave Pix e [capturar os dados para pagamento com o formulário](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/other-payment-ways#bookmark_capture_os_dados_para_pagamento), você deve encaminhar o e-mail do comprador, o tipo e número de documento, o meio de pagamento utilizado e o detalhe do valor. 

[[[
```php
<?php
 require_once 'vendor/autoload.php';

 MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

 $payment = new MercadoPago\Payment();
 $payment->transaction_amount = 100;
 $payment->description = "Título do produto";
 $payment->payment_method_id = "pix";
 $payment->payer = array(
     "email" => "test@test.com",
     "first_name" => "Test",
     "last_name" => "User",
     "identification" => array(
         "type" => "CPF",
         "number" => "19119119100"
      ),
     "address"=>  array(
         "zip_code" => "06233200",
         "street_name" => "Av. das Nações Unidas",
         "street_number" => "3003",
         "neighborhood" => "Bonfim",
         "city" => "Osasco",
         "federal_unit" => "SP"
      )
   );

 $payment->save();

?>
```
```node
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

var payment_data = {
  transaction_amount: 100,
  description: 'Título do produto',
  payment_method_id: 'pix',
  payer: {
    email: 'test@test.com',
    first_name: 'Test',
    last_name: 'User',
    identification: {
        type: 'CPF',
        number: '19119119100'
    },
    address:  {
        zip_code: '06233200',
        street_name: 'Av. das Nações Unidas',
        street_number: '3003',
        neighborhood: 'Bonfim',
        city: 'Osasco',
        federal_unit: 'SP'
    }
  }
};

mercadopago.payment.create(payment_data).then(function (data) {

}).catch(function (error) {

});

```
```java
MercadoPagoConfig.setAccessToken("ENV_ACCESS_TOKEN");

PaymentClient client = new PaymentClient();

PaymentCreateRequest paymentCreateRequest =
   PaymentCreateRequest.builder()
       .transactionAmount(new BigDecimal("100"))
       .description("Título do produto")
       .paymentMethodId("pix")
       .dateOfExpiration(OffsetDateTime.of(2023, 1, 10, 10, 10, 10, 0, ZoneOffset.UTC))
       .payer(
           PaymentPayerRequest.builder()
               .email("test@test.com")
               .firstName("Test")
               .identification(
                   IdentificationRequest.builder().type("CPF").number("19119119100").build())
               .build())
       .build();

client.create(paymentCreateRequest);
```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

payment_request = {
  transaction_amount: 100,
  description: 'Título do produto',
  payment_method_id: 'pix',
  payer: {
    email: 'test@test.com',
    identification: {
      type: 'CPF',
      number: '19119119100',
    }
  }
}

payment_response = sdk.payment.create(payment_request)
payment = payment_response[:response]

```
```csharp

using MercadoPago.Config;
using MercadoPago.Client.Common;
using MercadoPago.Client.Payment;
using MercadoPago.Resource.Payment;

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var request = new PaymentCreateRequest
{
    TransactionAmount = 105,
    Description = "Título do produto",
    PaymentMethodId = "pix",
    Payer = new PaymentPayerRequest
    {
        Email = "test@test.com",
        FirstName = "Test",
        LastName = "User",
        Identification = new IdentificationRequest
        {
            Type = "CPF",
            Number = "191191191-00",
        },
    },
};

var client = new PaymentClient();
Payment payment = await client.CreateAsync(request);

```
```python
import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

payment_data = {
    "transaction_amount": 100,
    "description": "Título do produto",
    "payment_method_id": "pix",
    "payer": {
        "email": "test@test.com",
        "first_name": "Test",
        "last_name": "User",
        "identification": {
            "type": "CPF",
            "number": "191191191-00"
        },
        "address": {
            "zip_code": "06233-200",
            "street_name": "Av. das Nações Unidas",
            "street_number": "3003",
            "neighborhood": "Bonfim",
            "city": "Osasco",
            "federal_unit": "SP"
        }
    }
}

payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]
```
```curl
curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/payments' \
    -d '{
      "transaction_amount": 100,
      "description": "Título do produto",
      "payment_method_id": "pix",
      "payer": {
        "email": "test@test.com",
        "first_name": "Test",
        "last_name": "User",
        "identification": {
            "type": "CPF",
            "number": "19119119100"
        },
        "address": {
            "zip_code": "06233200",
            "street_name": "Av. das Nações Unidas",
            "street_number": "3003",
            "neighborhood": "Bonfim",
            "city": "Osasco",
            "federal_unit": "SP"
        }
      }
    }'
```
]]]

A resposta mostrará o estado pendente do pagamento e todas as informações que você precisa para mostrar ao comprador. O valor `transaction_data` oferecerá os dados para código QR.

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
Com Pix, você também pode escolher o prazo que o cliente terá para pagar a compra, definindo a validade do código de pagamento enviado a ele após a realização do pedido. 

Por padrão, a data de vencimento para pagamentos com Pix é de 24 horas, mas você pode alterá-la enviando o campo `date_of_expiration` na solicitação de criação de pagamento. Note que a data configurada deve ser entre 30 minutos e até 30 dias a partir da data de emissão.

[[[
```php
===
A data usa o formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
$payment->date_of_expiration = "2020-05-30T23:59:59.000-04:00";
```
```node
===
A data usa o formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
date_of_expiration: "2020-05-30T23:59:59.000-04:00",
```
```java
===
A data usa o formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
PaymentCreateRequest paymentCreateRequest = PaymentCreateRequest.builder()
       .dateOfExpiration(OffsetDateTime.of(2023, 1, 10, 10, 10, 10, 0, ZoneOffset.UTC))
```
```ruby
===
A data usa o formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
date_of_expiration: '2020-05-30T23:59:59.000-04:00',
```
```csharp
===
A data usa o formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
paymentCreateRequest.DateOfExpiration = DateTime.Parse("2020-05-30T23:59:59.000-04:00");
```
```python
===
A data usa o formato ISO 8601 format: yyyy-MM-dd'T'HH:mm:ssz
===

"date_of_expiration": "2020-05-30T23:59:59.000-04:00"
```
```curl
===
A data usa o formato ISO 8601: yyyy-MM-dd'T'HH:mm:ssz
===
"date_of_expiration": "2020-05-30T23:59:59.000-04:00",
```
]]]

> WARNING
>
> Importante
>
> Se o pagamento for realizado após a data de expiração marcada, a operação será rejeitada.

## Dados para realizar o pagamento

Para o pagamento ser realizado, você deverá renderizar o código QR vigente que deverá ser utilizado somente uma vez. Você também pode adicionar uma opção para copiar e colar o código de pagamento, o que permitirá realizar a transação a partir de Internet Banking. 

Para renderizar o QR code e disponibilizar o recurso de copia e cola, siga os passos abaixo.

1. Adicione o `qr_code_base64` para exibir o código QR, como mostra o exemplo abaixo.

```html
<img src={`data:image/jpeg;base64,${qr_code_base64}`/>
```

2. Para apresentar a opção que permitirá copiar e colar o código de pagamento, adicione o `qr_code` da seguinte forma:

```html
<label for="copiar">Copiar Hash:</label>
<input type="text" id="copiar"  value={qr_code}/>
```

> NOTE
>
> Importante
>
> Encontre as informações necessárias para devolver um pagamento feito por transferência Pix no artigo de [devoluções e cancelamentos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/manage-account/account/cancellations-and-refunds).